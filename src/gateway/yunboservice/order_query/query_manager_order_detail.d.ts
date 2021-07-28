declare namespace SxcGw {
  export namespace yunboservice {
    export namespace orderQuery {
      /**
       * @description 中台查询客户订单详情
       */
      export namespace queryManagerOrderDetail {
        export interface params {
          orderNo: string;
        }

        /**
         * @description 返回参数内容
         */
        export type result = {
          /**
           * @description 订单状态,[0, '全部'],[1, '未付款'],[2, '已付款'],[3, '拣货中'],[4, '待配送'],[5, '配送中'],[6, '待提货'],[7, '已提货'],[8, '待退款'],[9, '退款完毕'],[10, '订单关闭'],[11, '定金支付成功']
           */
          orderStatus?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

          /**
           * @description 支付类型
           */
          payType?: number;

          /**
           * @description 客户ID
           */
          buyerId?: number;

          /**
           * @description 客户姓名
           */
          buyerName?: string;

          /**
           * @description 手机号
           */
          phone?: string;

          /**
           * @description 订单号
           */
          orderNo?: string;

          /**
           * @description 下单时间
           */
          orderCreateTime?: string;

          /**
           * @description 付款时间
           */
          paidTime?: string;

          /**
           * @description 商品信息
           */
          orderSkuInfoList?: Array<{
            /**
             * @description 商品ID
             */
            itemId?: number;

            /**
             * @description skuId
             */
            skuId?: number;

            /**
             * @description 商品标准名
             */
            skuName?: string;

            /**
             * @description 商品在宋小菜上的展示名
             */
            localTitle?: string;

            /**
             * @description 商品名
             */
            itemName?: string;

            /**
             * @description 下单数量
             */
            num?: number;

            /**
             * @description 实付价格
             */
            discountedPrice?: string;

            /**
             * @description 原价
             */
            originalPrice?: string;

            /**
             * @description 实付金额
             */
            discountedFee?: string;

            /**
             * @description 商品优惠金额(原价-折扣价+保证金分摊)
             */
            preferentialFee?: string;

            /**
             * @description 图
             */
            imageUrl?: string;

            /**
             * @description 规格
             */
            packagingName?: string;

            /**
             * @description 品类
             */
            catId?: number;

            /**
             * @description 品类名称
             */
            catName?: string;

            /**
             * @description 品类组ID
             */
            catGroupId?: string;

            /**
             * @description 品类组名称
             */
            catGroupName?: string;

            /**
             * @description 单位
             */
            unit?: string;

            /**
             * @description 单件重量(斤)
             */
            itemPackageWeight?: number;

            /**
             * @description 商品保证金分摊金额
             */
            itemIntentionFee?: string;

            /**
             * @description 商品抹零分摊金额
             */
            itemRoundDownFee?: string;

            /**
             * @description 优惠券分摊金额
             */
            couponFee?: string;

            /**
             * @description 运费
             */
            freightFee?: string;

            /**
             * @description 核准金额
             */
            checkFee?: string;

            /**
             * @description 售后信息
             */
            itemAfterSaleInfos?: Array<{
              /**
               * @description 售后类型,[2, '赔货'],[5, '缺货'],[6, '核准']
               */
              type?: 2 | 5 | 6;

              /**
               * @description 售后状态,[0, '待审核'],[1, '已通过审核'],[2, '未过审核']
               */
              status?: 0 | 1 | 2;

              /**
               * @description 数量，与状态对应【可以售后的数量，申请中的数量，已通过的数量】
               */
              num?: number;

              /**
               * @description 货款金额
               */
              fee?: string;

              /**
               * @description 退的优惠券费用
               */
              couponFee?: string;

              /**
               * @description 退的运费
               */
              freightFee?: string;

              /**
               * @description 退的保证金费用
               */
              intentionFee?: string;

              /**
               * @description 售后单ID
               */
              afterSalesOrderId?: number;
            }>;

            /**
             * @description 提货时间
             */
            actualPickTime?: string;
          }>;

          /**
           * @description 订单的付款金额相关信息
           */
          payInfo?: {
            /**
             * @description 下单优惠金额
             */
            preferentialFee?: string;

            /**
             * @description 代金劵抵扣金额
             */
            couponFee?: string;

            /**
             * @description 保证金
             */
            depositFee?: string;

            /**
             * @description 应付本金
             */
            payableBalanceFee?: string;

            /**
             * @description 物流运费
             */
            logisticFee?: string;

            /**
             * @description 原价
             */
            originalFee?: string;

            /**
             * @description 抹零金额
             */
            roundDownFee?: string;
          };

          /**
           * @description 来源类型,[1, '安卓'],[2, 'ios'],[3, 'PC'],[4, '小程序']
           */
          sourceType?: 1 | 2 | 3 | 4;

          /**
           * @description 服务器端当前时间
           */
          currentSystemTime?: string;

          /**
           * @description 抹零金额
           */
          roundDownAmount?: string;

          /**
           * @description 配送信息
           */
          deliveryDTO?: {
            /**
             * @description 提货方式,[1, '送货上门'],[2, '自提']
             */
            shoppingMethod?: 1 | 2;

            /**
             * @description 配送方式,[1, '到付'],[2, '寄付']
             */
            freightMethod?: 1 | 2;

            /**
             * @description 运费金额
             */
            freightAmount?: string;

            /**
             * @description 配送地址
             */
            deliveryAddress?: string;

            /**
             * @description 联系人
             */
            contactName?: string;

            /**
             * @description 联系人手机号
             */
            contactPhone?: string;

            /**
             * @description 服务站ID
             */
            pickHouseId?: number;

            /**
             * @description 服务站名称
             */
            pickHouseName?: string;

            /**
             * @description 自提信息
             */
            pickUpDTOS?: Array<{
              /**
               * @description 品类组ID
               */
              catGroupId?: number;

              /**
               * @description 品类组名称
               */
              catGroupName?: string;

              /**
               * @description 自提地址
               */
              pickupAddress?: string;

              /**
               * @description 联系人
               */
              contactName?: string;

              /**
               * @description 联系人手机号
               */
              contactPhone?: string;
            }>;

            /**
             * @description 物流信息
             */
            logisticsInfoDTOS?: Array<{
              /**
               * @description 司机名称
               */
              driverName?: string;

              /**
               * @description 司机电话
               */
              driverPhone?: string;

              /**
               * @description 车牌号
               */
              carNo?: string;

              /**
               * @description 车型:,1-'4.2米';3-'9.6米';7-'6.8米';9-'6.2米';11-'5.2米';13-'13米';14-'17.5米';6-'15米';,17-'3.8米';18-'7.8米';19-'8.7米';20-'16.5米'; -1-'其他'
               */
              carType?: number;

              carTypeStr?: string;
            }>;
          };

          /**
           * @description 订单关单信息
           */
          closeOrderDTO?: {
            /**
             * @description 创建订单多长时间可以关单(单位，分钟)
             */
            closeIntervalsTime?: number;
          };

          /**
           * @description 订单退款信息
           */
          orderRefundDTOS?: Array<{
            /**
             * @description 退款类型,[2, '赔货'],[5, '缺货'],[6, '核准']
             */
            refundType?: 2 | 5 | 6;

            /**
             * @description 退款金额
             */
            refundMoney?: string;
          }>;

          /**
           * @description 意向单信息
           */
          intentionOrderDTO?: {
            /**
             * @description 主键id
             */
            id?: string;

            /**
             * @description 意向单编号
             */
            intentionNo?: string;

            /**
             * @description 订单号
             */
            orderNo?: string;

            /**
             * @description 状态,[40, '已取消'],[10, '待付款'],[20, '备货中'],[30, '已下单']
             */
            status?: 40 | 10 | 20 | 30;

            /**
             * @description 买家ID
             */
            buyerId?: number;

            /**
             * @description 买家名称
             */
            buyerName?: string;

            /**
             * @description 买家手机号码
             */
            buyerPhone?: string;

            /**
             * @description 客户id
             */
            customerId?: number;

            /**
             * @description 品类组信息
             */
            intentionCatDTO?: Array<{
              /**
               * @description 品类组id
               */
              catGroupId: number;

              /**
               * @description 品类组名称
               */
              catGroupName: string;
            }>;

            /**
             * @description 保证金金额
             */
            depositAmount?: string;

            /**
             * @description 创建时间
             */
            gmtCreate?: string;

            /**
             * @description 创建人名称
             */
            creatorName?: string;
          };

          /**
           * @description 操作人ID
           */
          operateId?: number;

          /**
           * @description 操作人姓名
           */
          operateName?: string;

          /**
           * @description 订单描述
           */
          description?: string;

          /**
           * @description 发货时间
           */
          deliveryTime?: string;
        };
      }
    }
  }
}
