const PORT = `${window.location.port}`;
export const BASE_URL = `http://10.250.216.191:${PORT === '8180' ? '8180' : '8280'}/zags2-integration-upload/api`;

export enum Statuses {
  idle = 'idle',
  loading = 'loading',
  loaded = 'loaded',
  error = 'error',
  emptyData = 'emptyData',
}
