declare namespace SxcGw {
  export namespace supplychain {
    export namespace request {
      /**
       * @description 清除采购单调整金额
       */
      export namespace clearPurchaseOrderAdjust {
        export interface params {
          clearDTO: {
            adjustIdList?: Array<number>;
          };
        }
        export type result = {};
      }
    }
  }
}
