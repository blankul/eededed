declare namespace SxcGw {
  export namespace supplychain {
    export namespace request {
      export namespace payout {
        /**
         * @description 查询请款单详情
         */
        export namespace queryRequestPayoutOrderDetail {
          export interface params {
            requestPayoutOrderId: number;
          }

          /**
           * @description 返回参数内容
           */
          export type result = {
            /**
             * @description 请款单id
             */
            requestPayoutOrderId?: number;

            /**
             * @description 供应商id
             */
            supplierId?: number;

            /**
             * @description 供应商姓名
             */
            supplierName?: string;

            /**
             * @description 供应商手机号
             */
            supplierPhone?: string;

            /**
             * @description 客户id
             */
            customerId?: number;

            /**
             * @description 请款人id
             */
            requestPayoutUserId?: number;

            /**
             * @description 请款人姓名
             */
            requestPayoutUserName?: string;

            /**
             * @description 采购员的城市编码
             */
            cityCode?: number;

            cityName?: string;

            /**
             * @description 采购总金额(采购单金额累加)
             */
            totalOriginalFee?: string;

            /**
             * @description 请款总金额
             */
            totalRequestFee?: string;

            /**
             * @description 已付总金额
             */
            totalPaidFee?: string;

            /**
             * @description 采购单覆盖日期区间(如:8.20-8.25)
             */
            purchaseDateRange?: string;

            /**
             * @description 预计结款日期(根据账期计算)
             */
            estimatePaymentDate?: string;

            /**
             * @description 请款单状态，枚举类：RequestPayoutOrderStatusEnum
             */
            status?: number;

            statusName?: string;

            /**
             * @description 财务结款人id
             */
            payerId?: number;

            /**
             * @description 财务结款人姓名
             */
            payerName?: string;

            /**
             * @description 财务结款时间
             */
            payTime?: string;

            /**
             * @description 请款备注(由采购助理填写)
             */
            requestPayoutCommend?: string;

            /**
             * @description 拒绝说明(由财务填写)
             */
            refuseReason?: string;

            /**
             * @description 以json的形式填写实付金额的增项和减项统计
             */
            features?: string;

            /**
             * @description 乐观锁
             */
            version?: number;

            /**
             * @description 请款单类型(1:场地采购;4:供应商直供)
             */
            purchaseOrderType?: number;

            /**
             * @description 账期：1：日结 2：到付 3:周结 4：半月结 5：月结
             */
            paymentDays?: number;

            paymentDaysDesc?: string;

            /**
             * @description 收款人姓名
             */
            payeeName?: string;

            /**
             * @description 收款人银行名称
             */
            payeeBankName?: string;

            /**
             * @description 银行卡号
             */
            payeeCardNumber?: string;

            /**
             * @description 付款方式1：上车付款，2：到货付款
             */
            payPattern?: number;

            /**
             * @description 1:简单流程 2：完整流程
             */
            processType?: number;

            /**
             * @description 开户行地址
             */
            bankAddr?: string;

            /**
             * @description 支付方式。1 线下支付 2 银企直联 3 银企直联+线下支付
             */
            payType?: number;

            /**
             * @description 支付方式。1 线下支付 2 银企直联 3 银企直联+线下支付
             */
            payTypeDesc?: string;

            targetCityCode?: number;

            targetCityName?: string;

            requestPayoutAdjustmentDTOS?: Array<{
              /**
               * @description 请款单金额调整表id
               */
              id?: number;

              /**
               * @description 请款单id
               */
              requestPayoutId?: number;

              /**
               * @description 采购单id
               */
              purchaseOrderId?: number;

              /**
               * @description 商品spuId
               */
              spuId?: number;

              /**
               * @description [1, '货值调整'],[2, '缺斤少两'],[3, '退赔'],[4, '抹零'],[5, '活动支持'],[9, '供应商扣款']
               */
              adjustType?: 1 | 2 | 3 | 4 | 5 | 9;

              /**
               * @description 调整类型
               */
              adjustTypeDesc?: string;

              /**
               * @description 调整金额(有正负)
               */
              adjustFee?: string;

              /**
               * @description 调整原因
               */
              adjustComment?: string;

              /**
               * @description 调整信息附件
               */
              feature?: string;
            }>;

            requestPayoutOrderDetailDTOs?: Array<{
              /**
               * @description 请款单详情id
               */
              id?: number;

              /**
               * @description 请款单id
               */
              requestPayoutOrderId?: number;

              /**
               * @description 采购单id
               */
              purchaseOrderId?: number;

              /**
               * @description 商品spu id
               */
              spuId?: number;

              /**
               * @description 商品名称
               */
              spuName?: string;

              /**
               * @description 应收金额
               */
              originalFee?: string;

              /**
               * @description 请款金额
               */
              requestFee?: string;

              /**
               * @description 调整金额
               */
              adjustFee?: string;

              /**
               * @description 已付金额
               */
              paidFee?: string;

              /**
               * @description 调整说明
               */
              adjustComment?: string;

              version?: number;

              catId?: number;

              targetCityCode?: number;

              signNum?: number;

              deliveryNum?: number;

              /**
               * @description 采购类型
               */
              feeUnit?: number;

              /**
               * @description 件价
               */
              jianPrice?: string;

              /**
               * @description 采购斤价
               */
              jinPrice?: string;

              /**
               * @description [1, '货值调整'],[2, '缺斤少两'],[3, '退赔'],[4, '抹零'],[5, '活动支持'],[9, '供应商扣款']
               */
              adjustType?: 1 | 2 | 3 | 4 | 5 | 9;

              /**
               * @description 调整类型
               */
              adjustTypeDesc?: string;

              /**
               * @description 调整信息附件
               */
              adjustFeature?: string;
            }>;

            requestPayoutOrderRecords?: Array<{
              /**
               * @description 请款单操作记录流水表id
               */
              id?: number;

              /**
               * @description 请款单id
               */
              requestPayoutId?: number;

              /**
               * @description 请款单操作名称
               */
              operationTitle?: string;

              /**
               * @description 请款单操作类型1:发起请款;2:采购取消;3:供应商同意;4:供应商拒绝;5:财务拒绝;6:财务付款
               */
              operationType?: number;

              /**
               * @description 操作者id
               */
              operatorId?: number;

              /**
               * @description 操作者姓名
               */
              operatorName?: string;

              /**
               * @description 操作金额
               */
              operateFee?: string;

              /**
               * @description 已付总金额快照
               */
              totalPaidFeeSnapshot?: string;

              /**
               * @description 操作原因
               */
              operateReason?: string;

              gmtCreate?: string;

              /**
               * @description 请款单状态
               */
              reqPayStatus?: number;

              /**
               * @description 请款状态说明
               */
              reqPayStatusDesc?: string;
            }>;

            purchaseManagerUserId?: number;

            /**
             * @description 提交时间
             */
            gmtCreate?: string;

            signatureImageUrl?: string;

            replyFlag?: boolean;

            purchaserNames?: string;

            purchaseMobileList?: Array<string>;

            /**
             * @description 操作列表
             */
            operateItems?: boolean;

            /**
             * @description 调整金额
             */
            totalAdjustFee?: string;

            /**
             * @description 请款单详情（按采购主单聚合）
             */
            detailGroups?: Array<{
              /**
               * @description 采购主单id
               */
              parentPurchaseOrderId?: number;

              /**
               * @description 采购日期
               */
              purchaseDate?: string;

              /**
               * @description 请款金额
               */
              totalRequestFee?: string;

              /**
               * @description 请款单详情
               */
              details?: Array<{
                /**
                 * @description 请款单详情id
                 */
                id?: number;

                /**
                 * @description 请款单id
                 */
                requestPayoutOrderId?: number;

                /**
                 * @description 采购单id
                 */
                purchaseOrderId?: number;

                /**
                 * @description 商品spu id
                 */
                spuId?: number;

                /**
                 * @description 商品名称
                 */
                spuName?: string;

                /**
                 * @description 应收金额
                 */
                originalFee?: string;

                /**
                 * @description 请款金额
                 */
                requestFee?: string;

                /**
                 * @description 调整金额
                 */
                adjustFee?: string;

                /**
                 * @description 已付金额
                 */
                paidFee?: string;

                /**
                 * @description 调整说明
                 */
                adjustComment?: string;

                version?: number;

                catId?: number;

                targetCityCode?: number;

                signNum?: number;

                deliveryNum?: number;

                /**
                 * @description 采购类型
                 */
                feeUnit?: number;

                /**
                 * @description 件价
                 */
                jianPrice?: string;

                /**
                 * @description 采购斤价
                 */
                jinPrice?: string;

                /**
                 * @description [1, '货值调整'],[2, '缺斤少两'],[3, '退赔'],[4, '抹零'],[5, '活动支持'],[9, '供应商扣款']
                 */
                adjustType?: 1 | 2 | 3 | 4 | 5 | 9;

                /**
                 * @description 调整类型
                 */
                adjustTypeDesc?: string;

                /**
                 * @description 调整信息附件
                 */
                adjustFeature?: string;
              }>;
            }>;
          };
        }
      }
    }
  }
}
