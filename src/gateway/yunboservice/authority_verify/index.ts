import gateway from '@/utils/gateway';

export const listYunBoPickHouseId = (
  data: SxcGw.yunboservice.authorityVerify.listYunBoPickHouseId.params,
) => {
  return gateway<SxcGw.yunboservice.authorityVerify.listYunBoPickHouseId.result>(
    'songxiaocai.yunboservice.authorityVerify.listYunBoPickHouseId',
    data,
  );
};
