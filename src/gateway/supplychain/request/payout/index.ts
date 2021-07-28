import gateway from '@/utils/gateway';

export const queryRequestPayoutOrderDetail = (
  data: SxcGw.supplychain.request.payout.queryRequestPayoutOrderDetail.params,
) => {
  return gateway<SxcGw.supplychain.request.payout.queryRequestPayoutOrderDetail.result>(
    'sxc.supplychain.request.payout.queryRequestPayoutOrderDetail',
    data,
  );
};
