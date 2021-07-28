import gateway from '@/utils/gateway';

export const queryManagerOrderDetail = (
  data: SxcGw.yunboservice.orderQuery.queryManagerOrderDetail.params,
) => {
  return gateway<SxcGw.yunboservice.orderQuery.queryManagerOrderDetail.result>(
    'songxiaocai.yunboservice.orderQuery.queryManagerOrderDetail',
    data,
  );
};
