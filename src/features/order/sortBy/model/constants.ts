import { type OrderSortBy } from './types';

export const orderSortByNamesMap: Record<OrderSortBy, string> = {
  Consignee: 'Consignee',
  Customer: 'Customer',
  Status: 'Status',
  TrackingNo: 'TrackingNo',
} as const;
