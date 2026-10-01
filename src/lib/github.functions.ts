import { createServerFn } from "@tanstack/react-start";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/github";
const USERNAME = "itsakhilesh7";

export type GitHubRepo = {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
};

export type GitHubStatsData = {
  ok: boolean;
  profile: {
    login: string;
    name: string | null;
    avatarUrl: string;
    bio: string | null;
    url: string;
    followers: number;
    following: number;
    publicRepos: number;
  } | null;
  totalStars: number;
  languages: { name: string; count: number; percent: number }[];
  repos: GitHubRepo[];
  contributions: { total: number; weeks: { days: { date: string; count: number }[] }[] } | null;
};

function headers(lovableKey: string, connectorKey: string) {
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": connectorKey,
  };
}

async function fetchContributions(lovableKey: string, connectorKey: string) {
  const query = `query($login:String!){user(login:$login){contributionsCollection{contributionCalendar{totalContributions weeks{contributionDays{date contributionCount}}}}}}`;
  const res = await fetch(`${GATEWAY_URL}/graphql`, {
    method: "POST",
    headers: { ...headers(lovableKey, connectorKey), "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { login: USERNAME } }),
  });
  if (!res.ok) {
    console.error(`GitHub GraphQL failed [${res.status}]: ${await res.text()}`);
    return null;
  }
  const json = (await res.json()) as any;
  const cal = json?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!cal) return null;
  return {
    total: cal.totalContributions as number,
    weeks: (cal.weeks as any[]).map((w) => ({
      days: (w.contributionDays as any[]).map((d) => ({ date: d.date as string, count: d.contributionCount as number })),
    })),
  };
}

export const getGitHubStats = createServerFn({ method: "GET" }).handler(async (): Promise<GitHubStatsData> => {
  const empty: GitHubStatsData = {
    ok: false,
    profile: null,
    totalStars: 0,
    languages: [],
    repos: [],
    contributions: null,
  };

  const lovableKey = process.env["LOVABLE_API_KEY"];
  const connectorKey = process.env["GITHUB_API_KEY"];
  if (!lovableKey || !connectorKey) return empty;

  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(`${GATEWAY_URL}/users/${USERNAME}`, { headers: headers(lovableKey, connectorKey) }),
      fetch(`${GATEWAY_URL}/users/${USERNAME}/repos?per_page=100&sort=updated`, {
        headers: headers(lovableKey, connectorKey),
      }),
    ]);

    if (!profileRes.ok) {
      console.error(`GitHub profile request failed [${profileRes.status}]: ${await profileRes.text()}`);
      return empty;
    }
    if (!reposRes.ok) {
      console.error(`GitHub repos request failed [${reposRes.status}]: ${await reposRes.text()}`);
      return empty;
    }

    const profileJson = (await profileRes.json()) as any;
    const reposJson = (await reposRes.json()) as any[];

    const visible = reposJson.filter((r) => !r.fork && !r.archived);
    const totalStars = visible.reduce((sum, r) => sum + (r.stargazers_count ?? 0), 0);

    const langCounts = new Map<string, number>();
    for (const r of visible) {
      if (!r.language) continue;
      langCounts.set(r.language, (langCounts.get(r.language) ?? 0) + 1);
    }
    const langTotal = [...langCounts.values()].reduce((a, b) => a + b, 0) || 1;
    const languages = [...langCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, count]) => ({ name, count, percent: Math.round((count / langTotal) * 100) }));

    const repos: GitHubRepo[] = visible
      .sort(
        (a, b) =>
          (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0) ||
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      )
      .slice(0, 6)
      .map((r) => ({
        name: r.name,
        description: r.description ?? null,
        url: r.html_url,
        language: r.language ?? null,
        stars: r.stargazers_count ?? 0,
        forks: r.forks_count ?? 0,
        updatedAt: r.updated_at,
      }));

    const contributions = await fetchContributions(lovableKey, connectorKey).catch(() => null);

    return {
      ok: true,
      profile: {
        login: profileJson.login,
        name: profileJson.name ?? null,
        avatarUrl: profileJson.avatar_url,
        bio: profileJson.bio ?? null,
        url: profileJson.html_url,
        followers: profileJson.followers ?? 0,
        following: profileJson.following ?? 0,
        publicRepos: profileJson.public_repos ?? 0,
      },
      totalStars,
      languages,
      repos,
      contributions,
    };
  } catch (error) {
    console.error("GitHub stats fetch failed", error);
    return empty;
  }
});
