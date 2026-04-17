export interface UsersOverTimeData {
  date: string;
  activeUsers: number;
}

export interface PageVisitData {
  pagePath: string;
  pageViews: number;
}

export interface TrafficSourceData {
  source: string;
  medium: string;
  sessions: number;
}

export function getUsersOverTime(days: number = 14): UsersOverTimeData[] {
  const data: UsersOverTimeData[] = [];
  const today = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    data.push({
      date: date.toISOString().split('T')[0],
      activeUsers: Math.floor(Math.random() * 2000) + 500,
    });
  }

  return data;
}

export function getPagesVisited(limit: number = 10): PageVisitData[] {
  return [
    { pagePath: '/home', pageViews: 12450 },
    { pagePath: '/products', pageViews: 8932 },
    { pagePath: '/about', pageViews: 5432 },
    { pagePath: '/blog', pageViews: 4120 },
    { pagePath: '/contact', pageViews: 3890 },
    { pagePath: '/pricing', pageViews: 2945 },
    { pagePath: '/docs', pageViews: 2234 },
    { pagePath: '/features', pageViews: 1890 },
    { pagePath: '/signup', pageViews: 1654 },
    { pagePath: '/dashboard', pageViews: 1432 },
  ].slice(0, limit);
}

export function getTrafficSources(): TrafficSourceData[] {
  return [
    { source: 'google', medium: 'organic', sessions: 45230 },
    { source: 'twitter', medium: 'social', sessions: 12450 },
    { source: 'linkedin', medium: 'social', sessions: 9832 },
    { source: '(direct)', medium: '(none)', sessions: 8456 },
    { source: 'newsletter', medium: 'email', sessions: 5234 },
    { source: 'bing', medium: 'organic', sessions: 3456 },
  ];
}