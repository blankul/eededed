import gateway from '@/utils/gateway';

export const queryByApiName = (
  data: SxcGw.cloudspeed.docApiQuery.queryByApiName.params,
) => {
  return gateway<SxcGw.cloudspeed.docApiQuery.queryByApiName.result>(
    'songxiaocai.cloudspeed.docApiQuery.queryByApiName',
    data,
  );
};
