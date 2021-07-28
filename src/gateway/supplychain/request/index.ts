import gateway from '@/utils/gateway';

export const querySupplierRequestPayoutPurchaseOrderDetail = (
  data: SxcGw.supplychain.request.querySupplierRequestPayoutPurchaseOrderDetail.params,
) => {
  return gateway<SxcGw.supplychain.request.querySupplierRequestPayoutPurchaseOrderDetail.result>(
    'sxc.supplychain.request.querySupplierRequestPayoutPurchaseOrderDetail',
    data,
  );
};

export const clearPurchaseOrderAdjust = (
  data: SxcGw.supplychain.request.clearPurchaseOrderAdjust.params,
) => {
  return gateway<SxcGw.supplychain.request.clearPurchaseOrderAdjust.result>(
    'sxc.supplychain.request.clearPurchaseOrderAdjust',
    data,
  );
};
