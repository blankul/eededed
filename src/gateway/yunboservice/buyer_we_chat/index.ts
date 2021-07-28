import gateway from '@/utils/gateway';

export const getBuyerSubscribe = (
  data: SxcGw.yunboservice.buyerWeChat.getBuyerSubscribe.params,
) => {
  return gateway<SxcGw.yunboservice.buyerWeChat.getBuyerSubscribe.result>(
    'songxiaocai.yunboservice.buyerWeChat.getBuyerSubscribe',
    data,
  );
};
