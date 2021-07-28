declare namespace SxcGw {
  export namespace yunboservice {
    export namespace afterSales {
      /**
       * @description 申请核准
       */
      export namespace applyCheck {
        export interface params {
          applyCheckDTO: {
            /**
             * @description 订单号
             */
            orderNo: string;

            /**
             * @description 核准总费用
             */
            fee?: number;

            /**
             * @description 核准sku入参
             */
            applyForSkuDTOS: Array<{
              /**
               * @description 订单商品
               */
              skuId: number;

              /**
               * @description 核准金额
               */
              checkFee: number;

              /**
               * @description 数量
               */
              num: number;
            }>;
          };
        }
        export type result = boolean;
      }
    }
  }
}
