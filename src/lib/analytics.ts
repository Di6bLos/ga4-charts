import { getUsersOverTime, getPagesVisited, getTrafficSources } from './mockData';

export type { UsersOverTimeData, PageVisitData, TrafficSourceData } from './mockData';

export async function fetchUsersOverTime(days: number = 14) {
  // TODO: Replace with real GA4 API call
  // const response = await ga4.runReport({
  //   property_id: 'YOUR_PROPERTY_ID',
  //   dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
  //   dimensions: [{ name: 'date' }],
  //   metrics: [{ name: 'activeUsers' }],
  // });
  return getUsersOverTime(days);
}

export async function fetchPagesVisited(limit: number = 10) {
  // TODO: Replace with real GA4 API call
  return getPagesVisited(limit);
}

export async function fetchTrafficSources() {
  // TODO: Replace with real GA4 API call
  return getTrafficSources();
}

export async function fetchAllAnalytics() {
  const [users, pages, sources] = await Promise.all([
    fetchUsersOverTime(),
    fetchPagesVisited(),
    fetchTrafficSources(),
  ]);
  return { users, pages, sources };
}