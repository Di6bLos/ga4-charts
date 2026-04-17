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

export interface KpiData {
  bounceRate: number;
  avgSessionDuration: number;
  engagementRate: number;
}

export interface RegionData {
  country: string;
  sessions: number;
}

export interface UserTypeData {
  newUsers: number;
  returningUsers: number;
}

export interface DeviceData {
  device: string;
  sessions: number;
}

export interface LandingPageData {
  pagePath: string;
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

export function getKpis(days: number = 14): KpiData {
  const m = days / 14;
  return {
    bounceRate: Math.round((38.2 + (m - 1) * 1.5) * 10) / 10,
    avgSessionDuration: Math.floor(185 + (m - 1) * 10),
    engagementRate: Math.round((61.8 - (m - 1) * 1.5) * 10) / 10,
  };
}

export function getRegions(days: number = 14): RegionData[] {
  const m = days / 14;
  return [
    { country: 'United States', sessions: 42340 },
    { country: 'United Kingdom', sessions: 12100 },
    { country: 'Germany', sessions: 8920 },
    { country: 'Canada', sessions: 7650 },
    { country: 'France', sessions: 6230 },
    { country: 'Australia', sessions: 5890 },
    { country: 'India', sessions: 5240 },
    { country: 'Brazil', sessions: 3980 },
    { country: 'Netherlands', sessions: 3410 },
    { country: 'Spain', sessions: 2870 },
  ].map(r => ({ ...r, sessions: Math.floor(r.sessions * m) }));
}

export function getUserTypes(days: number = 14): UserTypeData {
  const m = days / 14;
  return {
    newUsers: Math.floor(58420 * m),
    returningUsers: Math.floor(26340 * m),
  };
}

export function getDeviceBreakdown(days: number = 14): DeviceData[] {
  const m = days / 14;
  return [
    { device: 'Mobile', sessions: Math.floor(48230 * m) },
    { device: 'Desktop', sessions: Math.floor(32450 * m) },
    { device: 'Tablet', sessions: Math.floor(4080 * m) },
  ];
}

export function getLandingPages(limit: number = 10, days: number = 14): LandingPageData[] {
  const m = days / 14;
  return [
    { pagePath: '/home', sessions: 18920 },
    { pagePath: '/products', sessions: 11340 },
    { pagePath: '/blog', sessions: 8760 },
    { pagePath: '/pricing', sessions: 6230 },
    { pagePath: '/features', sessions: 4890 },
    { pagePath: '/docs', sessions: 3920 },
    { pagePath: '/about', sessions: 3100 },
    { pagePath: '/signup', sessions: 2840 },
    { pagePath: '/contact', sessions: 1920 },
    { pagePath: '/dashboard', sessions: 1450 },
  ]
    .slice(0, limit)
    .map(p => ({ ...p, sessions: Math.floor(p.sessions * m) }));
}

export function getRealtimeUsers(): number {
  return Math.floor(Math.random() * 300) + 80;
}

export function getUserFlow(): UserFlowData[] {
  return [
    { from: 'Home', to: 'Products', count: 5420 },
    { from: 'Home', to: 'Pricing', count: 3210 },
    { from: 'Home', to: 'About', count: 2100 },
    { from: 'Products', to: 'Features', count: 4100 },
    { from: 'Products', to: 'Pricing', count: 1200 },
    { from: 'Pricing', to: 'Signup', count: 2800 },
    { from: 'Features', to: 'Signup', count: 1500 },
    { from: 'About', to: 'Contact', count: 800 },
  ];
}
