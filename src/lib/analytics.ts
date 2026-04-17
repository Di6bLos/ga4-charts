import {
  getUsersOverTime,
  getPagesVisited,
  getTrafficSources,
  getKpis,
  getRegions,
  getUserTypes,
  getDeviceBreakdown,
  getLandingPages,
  getRealtimeUsers,
  getUserFlow,
} from './mockData';

export type {
  UsersOverTimeData,
  PageVisitData,
  TrafficSourceData,
  KpiData,
  RegionData,
  UserTypeData,
  DeviceData,
  LandingPageData,
  UserFlowData,
} from './mockData';

export async function fetchUsersOverTime(days: number = 14) {
  return getUsersOverTime(days);
}

export async function fetchPagesVisited(limit: number = 10) {
  return getPagesVisited(limit);
}

export async function fetchTrafficSources() {
  return getTrafficSources();
}

export async function fetchKpis(days: number = 14) {
  return getKpis(days);
}

export async function fetchRegions(days: number = 14) {
  return getRegions(days);
}

export async function fetchUserTypes(days: number = 14) {
  return getUserTypes(days);
}

export async function fetchDeviceBreakdown(days: number = 14) {
  return getDeviceBreakdown(days);
}

export async function fetchLandingPages(limit: number = 10, days: number = 14) {
  return getLandingPages(limit, days);
}

export async function fetchRealtimeUsers() {
  return getRealtimeUsers();
}

export async function fetchUserFlow() {
  return getUserFlow();
}

export async function fetchAllAnalytics(days: number = 14) {
  const [users, pages, sources, kpis, regions, userTypes, devices, landingPages, realtimeUsers, userFlow] =
    await Promise.all([
      fetchUsersOverTime(days),
      fetchPagesVisited(10),
      fetchTrafficSources(),
      fetchKpis(days),
      fetchRegions(days),
      fetchUserTypes(days),
      fetchDeviceBreakdown(days),
      fetchLandingPages(10, days),
      fetchRealtimeUsers(),
      fetchUserFlow(),
    ]);
  return { users, pages, sources, kpis, regions, userTypes, devices, landingPages, realtimeUsers, userFlow };
}
