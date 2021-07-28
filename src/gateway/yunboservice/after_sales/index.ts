import gateway from '@/utils/gateway';

export const applyCheck = (
  data: SxcGw.yunboservice.afterSales.applyCheck.params,
) => {
  return gateway<SxcGw.yunboservice.afterSales.applyCheck.result>(
    'songxiaocai.yunboservice.afterSales.applyCheck',
    data,
  );
};
