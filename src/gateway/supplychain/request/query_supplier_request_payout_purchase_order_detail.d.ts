declare namespace SxcGw {
  export namespace supplychain {
    export namespace request {
      /**
       * @description 查询供应商请款采购单详情
       */
      export namespace querySupplierRequestPayoutPurchaseOrderDetail {
        export interface params {
          queryDTO: {
            /**
             * @description 供应商id
             */
            supplierId?: number;

            /**
             * @description 目的地cityCode
             */
            targetCityCode?: number;

            /**
             * @description 付款方式
             */
            payPattern?: number;

            /**
             * @description 采购日期开始
             */
            purchaseDateBegin?: number;

            /**
             * @description 采购日期结束
             */
            purchaseDateEnd?: number;

            purchaseOrderTypeList?: Array<number>;
          };
        }

        /**
         * @description 返回参数内容
         */
        export type result = {
          /**
           * @description 供应商id
           */
          supplierId?: number;

          /**
           * @description 供应商名称
           */
          supplierName?: string;

          /**
           * @description 供应商手机号
           */
          supplierPhone?: string;

          /**
           * @description 账期
           */
          payment?: number;

          /**
           * @description 账期描述
           */
          paymentDesc?: string;

          /**
           * @description 付款方式
           */
          payPattern?: number;

          /**
           * @description 付款方式描述
           */
          payPatternDesc?: string;

          /**
           * @description 目的地城市编码
           */
          targetCityCode?: number;

          /**
           * @description 目的地城市名称
           */
          targetCityName?: string;

          /**
           * @description 采购日期开始时间
           */
          purchaseDateBegin?: string;

          /**
           * @description 采购日期结束时间
           */
          purchaseDateEnd?: string;

          /**
           * @description 请款金额
           */
          requestFee?: string;

          /**
           * @description 待请款金额
           */
          waitRequestFee?: string;

          /**
           * @description 调整id
           */
          adjustId?: number;

          /**
           * @description 调整金额
           */
          adjustFee?: string;

          /**
           * @description [1, '按人'],[2, '按单'],[3, '按sku'],[4, '供应商退赔']
           */
          businessType?: 1 | 2 | 3;

          /**
           * @description [1, '货值调整'],[2, '缺斤少两'],[3, '退赔'],[4, '抹零'],[5, '活动支持'],[6, '质量问题'],[7, '品级不符'],[8, '其他'],[9, '供应商扣款']
           */
          adjustType?: 1 | 2 | 3 | 4 | 5;

          /**
           * @description 调整类型描述
           */
          adjustTypeDesc?: string;

          /**
           * @description [0, '减'],[1, '加']
           */
          addSubType?: 0 | 1;

          /**
           * @description 调整说明
           */
          adjustComment?: string;

          /**
           * @description 主单维度列表
           */
          parentPurchaseOrderList?: Array<{
            /**
             * @description 采购主单
             */
            parentPurchaseOrderId?: number;

            /**
             * @description 采购金额
             */
            waitRequestFee?: string;

            /**
             * @description 请款金额
             */
            requestFee?: string;

            /**
             * @description 调整id
             */
            adjustId?: number;

            /**
             * @description 调整金额
             */
            adjustFee?: string;

            /**
             * @description [1, '按人'],[2, '按单'],[3, '按sku'],[4, '供应商退赔']
             */
            businessType?: 1 | 2 | 3;

            /**
             * @description [1, '货值调整'],[2, '缺斤少两'],[3, '退赔'],[4, '抹零'],[5, '活动支持'],[6, '质量问题'],[7, '品级不符'],[8, '其他'],[9, '供应商扣款']
             */
            adjustType?: 1 | 2 | 3 | 4 | 5;

            /**
             * @description 调整类型描述
             */
            adjustTypeDesc?: string;

            /**
             * @description [0, '减'],[1, '加']
             */
            addSubType?: 0 | 1;

            /**
             * @description 调整说明
             */
            adjustComment?: string;

            /**
             * @description 采购子单列表
             */
            purchaseOrderList?: Array<{
              /**
               * @description 采购单id
               */
              purchaseOrderId?: number;

              /**
               * @description 版本
               */
              adjustVersion?: number;

              /**
               * @description skuId
               */
              skuId?: number;

              /**
               * @description 商品名称
               */
              skuName?: string;

              /**
               * @description 发货件数
               */
              deliveryNum?: number;

              /**
               * @description 签收件数
               */
              signNum?: number;

              /**
               * @description 采购件价
               */
              jianPrice?: string;

              /**
               * @description 采购斤价
               */
              jinPrice?: string;

              /**
               * @description 请款金额
               */
              requestFee?: string;

              /**
               * @description 待请款金额
               */
              waitRequestFee?: string;

              /**
               * @description 调整id
               */
              adjustId?: number;

              /**
               * @description 调整金额
               */
              adjustFee?: string;

              /**
               * @description [1, '按人'],[2, '按单'],[3, '按sku'],[4, '供应商退赔']
               */
              businessType?: 1 | 2 | 3;

              /**
               * @description [1, '货值调整'],[2, '缺斤少两'],[3, '退赔'],[4, '抹零'],[5, '活动支持'],[6, '质量问题'],[7, '品级不符'],[8, '其他'],[9, '供应商扣款']
               */
              adjustType?: 1 | 2 | 3 | 4 | 5;

              /**
               * @description 调整类型描述
               */
              adjustTypeDesc?: string;

              /**
               * @description [0, '减'],[1, '加']
               */
              addSubType?: 0 | 1;

              /**
               * @description 调整说明
               */
              adjustComment?: string;

              /**
               * @description 单位
               */
              feeUnit?: number;

              /**
               * @description [1, '手动调整'],[2, '供应商退赔']
               */
              sourceType?: 1 | 2;

              /**
               * @description 扣款单列表
               */
              supplierWithholdList?: Array<{
                /**
                 * @description id
                 */
                id?: number;

                /**
                 * @description 供应商id
                 */
                supplierId?: number;

                /**
                 * @description 供应商名称
                 */
                supplierName?: string;

                /**
                 * @description 供应商手机号
                 */
                supplierMobilePhone?: string;

                /**
                 * @description 创建时间
                 */
                createTime?: string;

                /**
                 * @description 扣款金额
                 */
                amount?: string;

                /**
                 * @description 原始采购单id
                 */
                originalPurchaseOrderId?: number;

                /**
                 * @description 最终挂靠采购单id
                 */
                purchaseOrderId?: number;

                /**
                 * @description 版本号
                 */
                version?: number;

                /**
                 * @description 原始采购单子单信息
                 */
                originalPurchaseSkuDTO?: {
                  /**
                   * @description 采购子单
                   */
                  purchaseOrderId?: number;

                  /**
                   * @description 主单id
                   */
                  parentPurchaseOrderId?: number;

                  /**
                   * @description 采购单类型
                   */
                  type?: number;

                  /**
                   * @description skuid
                   */
                  skuId?: number;

                  /**
                   * @description sku名称
                   */
                  skuName?: string;

                  /**
                   * @description 品类名称
                   */
                  catName?: string;

                  /**
                   * @description 品类id
                   */
                  catId?: number;

                  /**
                   * @description 别名
                   */
                  aliasName?: string;

                  /**
                   * @description 属性值
                   */
                  propValues?: Array<string>;

                  /**
                   * @description 采购数量
                   */
                  purchaseNum?: number;

                  /**
                   * @description 发货数量
                   */
                  deliveryNum?: number;

                  /**
                   * @description 采购单价
                   */
                  unitFee?: string;

                  /**
                   * @description 手续费
                   */
                  procedureFee?: string;

                  /**
                   * @description 交易税费
                   */
                  transactionFee?: string;

                  /**
                   * @description 小工费
                   */
                  laborFee?: string;

                  /**
                   * @description 重量单位
                   */
                  weightUnit?: number;

                  /**
                   * @description 单位描述
                   */
                  weightUnitDesc?: string;

                  /**
                   * @description 价格单位
                   */
                  feeUnit?: number;

                  /**
                   * @description 单位描述
                   */
                  feeUnitDesc?: string;

                  /**
                   * @description 毛重
                   */
                  productWeight?: number;

                  /**
                   * @description 重量
                   */
                  weight?: number;

                  /**
                   * @description 商品总价
                   */
                  skuTotalFee?: string;

                  /**
                   * @description 账期
                   */
                  paymentDays?: number;

                  /**
                   * @description p5价
                   */
                  p5Price?: number;

                  /**
                   * @description 扩展信息
                   */
                  extMap?: {};

                  /**
                   * @description spuId
                   */
                  spuId?: number;

                  /**
                   * @description spu名称
                   */
                  spuName?: string;

                  /**
                   * @description [-1, '已取消'],[0, '初始状态'],[1, '待请款'],[2, '待结算'],[3, '已结算']
                   */
                  requestPayoutStatus?: -1 | 0 | 1 | 2 | 3;

                  /**
                   * @description [-2, '待接单'],[-1, '已取消'],[0, '已关闭'],[1, '待发货'],[2, '采购完结'],[3, '数量配送完成'],[4, '配送数量存在问题'],[7, '已签收'],[10, '待承运'],[-3, '供应商拒绝接单'],[12, '待签收'],[11, '部分签收']
                   */
                  status?: -2 | -1 | 0 | 1 | 2 | 3 | 4 | 7 | 10 | -3 | 11;

                  /**
                   * @description 供应商id
                   */
                  supplierId?: number;

                  /**
                   * @description 创建时间
                   */
                  createTime?: string;

                  /**
                   * @description 修改时间
                   */
                  updateTime?: string;

                  /**
                   * @description 总价
                   */
                  totalFee?: string;

                  /**
                   * @description 付款方式
                   */
                  payPattern?: number;

                  /**
                   * @description 城市
                   */
                  cityCode?: number;

                  /**
                   * @description 流程类型
                   */
                  processType?: number;

                  /**
                   * @description 签收数量
                   */
                  signNum?: number;

                  /**
                   * @description 供应商姓名
                   */
                  supplierName?: string;

                  /**
                   * @description customerId
                   */
                  customerId?: number;

                  version?: number;

                  /**
                   * @description 采购员id
                   */
                  ownerId?: number;

                  /**
                   * @description 已付金额（实付金额）
                   */
                  paidFee?: string;

                  /**
                   * @description 应付金额
                   */
                  payableFee?: string;

                  /**
                   * @description 子单操作流水
                   */
                  recordDTOS?: Array<{
                    /**
                     * @description 操作者名称
                     */
                    operatorName?: string;

                    /**
                     * @description 操作内容
                     */
                    operatorContents?: Array<string>;

                    /**
                     * @description 调整类型(-1.取消订单 1.创建订单 2.接受订单 3.发货 4.签收)
                     */
                    operationType?: number;

                    /**
                     * @description 创建时间
                     */
                    createTime?: string;
                  }>;

                  /**
                   * @description 费用列表
                   */
                  feeRecordDTOS?: Array<{
                    id?: number;

                    /**
                     * @description [1, '转卖费'],[2, '打包带费'],[3, '外箱费'],[4, '内袋费'],[5, '垫纸费'],[6, '胶带费'],[7, '代办费'],[8, '转运费'],[9, '转运力费'],[10, '套网费'],[11, '打包费'],[12, '钟点工费'],[13, '上车费'],[14, '杂物费'],[15, '手续费'],[17, '交易税费'],[18, '小工费'],[16, '配送费'],[20, '杂费'],[21, '运费'],[22, '卸货费'],[23, '代办费'],[24, '物流费']
                     */
                    feeType?:
                      | 1
                      | 2
                      | 3
                      | 4
                      | 5
                      | 6
                      | 7
                      | 8
                      | 9
                      | 10
                      | 11
                      | 12
                      | 13
                      | 14
                      | 15
                      | 17
                      | 18
                      | 16
                      | 20
                      | 21
                      | 22
                      | 23
                      | 24;

                    /**
                     * @description 单价
                     */
                    unitFee?: string;

                    /**
                     * @description 件数
                     */
                    num?: number;

                    /**
                     * @description 单位
                     */
                    unit?: string;

                    /**
                     * @description 来源类型
                     */
                    sourceType?: number;

                    /**
                     * @description 来源id
                     */
                    sourceId?: number;

                    /**
                     * @description 总价
                     */
                    totalFee?: string;

                    /**
                     * @description 是否可用
                     */
                    status?: number;

                    /**
                     * @description 是否删除
                     */
                    state?: number;

                    /**
                     * @description 创建时间
                     */
                    createTime?: string;

                    /**
                     * @description 更新时间
                     */
                    updateTime?: string;

                    unitStr?: string;

                    feeTypeName?: string;

                    remark?: string;

                    feeTypeDesc?: string;

                    /**
                     * @description 其他信息
                     */
                    featureDTO?: {
                      /**
                       * @description 调整金额
                       */
                      feeAdjustmentDTO?: {
                        /**
                         * @description [1, '货值调整'],[2, '缺斤少两'],[3, '退赔'],[4, '抹零'],[5, '活动支持'],[6, '质量问题'],[7, '品级不符'],[8, '其他'],[9, '供应商扣款']
                         */
                        adjustType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

                        /**
                         * @description [0, '减'],[1, '加']
                         */
                        addSubType?: 0 | 1;

                        /**
                         * @description 调整金额
                         */
                        adjustFee?: string;

                        /**
                         * @description 备注
                         */
                        adjustComment?: string;
                      };
                    };
                  }>;

                  /**
                   * @description 采购价格是否为预估值
                   */
                  priceForecast?: number;

                  /**
                   * @description 装货单
                   */
                  loadOrders?: Array<{
                    /**
                     * @description 装货单id（shipmentId）
                     */
                    loadOrderId?: string;

                    /**
                     * @description 装货子单id
                     */
                    shipmentDetailId?: string;

                    /**
                     * @description 装货地(省)
                     */
                    loadProvince?: string;

                    /**
                     * @description 装货地(市)
                     */
                    loadCity?: string;

                    /**
                     * @description 装货地(区)
                     */
                    loadArea?: string;

                    /**
                     * @description 装货地详细地址
                     */
                    loadDetailAddress?: string;

                    /**
                     * @description 应装数量
                     */
                    estLoadNum?: number;

                    /**
                     * @description 应装重量
                     */
                    estLoadWeight?: number;

                    /**
                     * @description 实装数量
                     */
                    actLoadNum?: number;

                    /**
                     * @description 实装重量
                     */
                    actLoadWeight?: number;

                    /**
                     * @description 装车时间
                     */
                    loadCarTime?: string;

                    /**
                     * @description 卸货点
                     */
                    unloadSiteInfos?: Array<{
                      /**
                       * @description 卸货点id
                       */
                      siteId?: number;

                      /**
                       * @description 卸货点名称
                       */
                      siteName?: string;

                      /**
                       * @description 卸货点地址
                       */
                      siteAddress?: string;

                      /**
                       * @description 应卸数量
                       */
                      estUnloadNum?: number;

                      /**
                       * @description 应卸重量
                       */
                      estUnloadWeight?: number;

                      /**
                       * @description 实卸数量
                       */
                      actUnloadNum?: number;

                      /**
                       * @description 实卸重量
                       */
                      actUnloadWeight?: number;
                    }>;
                  }>;

                  /**
                   * @description 供应商手机号
                   */
                  supplierPhone?: string;

                  /**
                   * @description 采买类别 1-按件采买 2-按斤采买
                   */
                  purchaseType?: number;

                  /**
                   * @description 卸货城市
                   */
                  unloadCity?: string;

                  /**
                   * @description 请款状态
                   */
                  requestPayoutStatusDesc?: string;

                  /**
                   * @description 物流状态
                   */
                  statusDesc?: string;

                  /**
                   * @description 商品分组
                   */
                  skuGroups?: string;

                  /**
                   * @description 物流类型：1非自营，2自营
                   */
                  logisticsType?: number;

                  /**
                   * @description 账期描述
                   */
                  paymentDaysDesc?: string;

                  /**
                   * @description 属性
                   */
                  properties?: string;

                  edition?: number;

                  /**
                   * @description 实装重量
                   */
                  deliveryWeight?: number;

                  /**
                   * @description 差额原因
                   */
                  payDiffReason?: string;

                  /**
                   * @description 借款人
                   */
                  payer?: string;

                  /**
                   * @description 净重
                   */
                  netWeight?: number;

                  /**
                   * @description 属性集
                   */
                  props?: Array<{
                    /**
                     * @description 属性id
                     */
                    propertyId?: number;

                    /**
                     * @description 属性名
                     */
                    propertyName?: string;

                    /**
                     * @description 父属性id
                     */
                    parentPropertyId?: number;

                    /**
                     * @description 属性类型
                     */
                    propertyType?: number;

                    /**
                     * @description 属性类型名称
                     */
                    propertyTypeName?: string;

                    /**
                     * @description ,属性层级
                     */
                    propertyLevel?: number;

                    /**
                     * @description 属性值列表
                     */
                    propValues?: Array<{
                      /**
                       * @description 属性值id
                       */
                      valueId?: number;

                      /**
                       * @description 属性值
                       */
                      valueData?: string;
                    }>;
                  }>;

                  /**
                   * @description 采购单号
                   */
                  purchaseOrderNo?: string;

                  /**
                   * @description 采购批次号
                   */
                  purchaseBatchNo?: string;

                  /**
                   * @description 业务时间
                   */
                  businessTime?: string;

                  /**
                   * @description 备注
                   */
                  remark?: string;

                  /**
                   * @description 签收重量
                   */
                  signWeight?: number;

                  /**
                   * @description 结算重量
                   */
                  settleWeight?: number;

                  /**
                   * @description 需求单价开始
                   */
                  requirementUnitFeeBegin?: string;

                  /**
                   * @description 需求单价结束
                   */
                  requirementUnitFeeEnd?: string;

                  /**
                   * @description 需求重量开始
                   */
                  requirementWeightBegin?: number;

                  /**
                   * @description 需求重量结束
                   */
                  requirementWeightEnd?: number;

                  /**
                   * @description 发货价
                   */
                  deliveryUnitFee?: string;

                  /**
                   * @description 调整金额
                   */
                  materialExtendFeatureDTO?: {
                    /**
                     * @description 调整金额
                     */
                    feeAdjustmentDTO?: {
                      /**
                       * @description [1, '货值调整'],[2, '缺斤少两'],[3, '退赔'],[4, '抹零'],[5, '活动支持'],[6, '质量问题'],[7, '品级不符'],[8, '其他'],[9, '供应商扣款']
                       */
                      adjustType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

                      /**
                       * @description [0, '减'],[1, '加']
                       */
                      addSubType?: 0 | 1;

                      /**
                       * @description 调整金额
                       */
                      adjustFee?: string;

                      /**
                       * @description 备注
                       */
                      adjustComment?: string;
                    };
                  };
                };

                /**
                 * @description 原始采购单发往中心仓城市
                 */
                originalStorehouseCityName?: string;

                /**
                 * @description 最终挂靠采购单子单信息
                 */
                purchaseSkuDTO?: {
                  /**
                   * @description 采购子单
                   */
                  purchaseOrderId?: number;

                  /**
                   * @description 主单id
                   */
                  parentPurchaseOrderId?: number;

                  /**
                   * @description 采购单类型
                   */
                  type?: number;

                  /**
                   * @description skuid
                   */
                  skuId?: number;

                  /**
                   * @description sku名称
                   */
                  skuName?: string;

                  /**
                   * @description 品类名称
                   */
                  catName?: string;

                  /**
                   * @description 品类id
                   */
                  catId?: number;

                  /**
                   * @description 别名
                   */
                  aliasName?: string;

                  /**
                   * @description 属性值
                   */
                  propValues?: Array<string>;

                  /**
                   * @description 采购数量
                   */
                  purchaseNum?: number;

                  /**
                   * @description 发货数量
                   */
                  deliveryNum?: number;

                  /**
                   * @description 采购单价
                   */
                  unitFee?: string;

                  /**
                   * @description 手续费
                   */
                  procedureFee?: string;

                  /**
                   * @description 交易税费
                   */
                  transactionFee?: string;

                  /**
                   * @description 小工费
                   */
                  laborFee?: string;

                  /**
                   * @description 重量单位
                   */
                  weightUnit?: number;

                  /**
                   * @description 单位描述
                   */
                  weightUnitDesc?: string;

                  /**
                   * @description 价格单位
                   */
                  feeUnit?: number;

                  /**
                   * @description 单位描述
                   */
                  feeUnitDesc?: string;

                  /**
                   * @description 毛重
                   */
                  productWeight?: number;

                  /**
                   * @description 重量
                   */
                  weight?: number;

                  /**
                   * @description 商品总价
                   */
                  skuTotalFee?: string;

                  /**
                   * @description 账期
                   */
                  paymentDays?: number;

                  /**
                   * @description p5价
                   */
                  p5Price?: number;

                  /**
                   * @description 扩展信息
                   */
                  extMap?: {};

                  /**
                   * @description spuId
                   */
                  spuId?: number;

                  /**
                   * @description spu名称
                   */
                  spuName?: string;

                  /**
                   * @description [-1, '已取消'],[0, '初始状态'],[1, '待请款'],[2, '待结算'],[3, '已结算']
                   */
                  requestPayoutStatus?: -1 | 0 | 1 | 2 | 3;

                  /**
                   * @description [-2, '待接单'],[-1, '已取消'],[0, '已关闭'],[1, '待发货'],[2, '采购完结'],[3, '数量配送完成'],[4, '配送数量存在问题'],[7, '已签收'],[10, '待承运'],[-3, '供应商拒绝接单'],[12, '待签收'],[11, '部分签收']
                   */
                  status?: -2 | -1 | 0 | 1 | 2 | 3 | 4 | 7 | 10 | -3 | 11;

                  /**
                   * @description 供应商id
                   */
                  supplierId?: number;

                  /**
                   * @description 创建时间
                   */
                  createTime?: string;

                  /**
                   * @description 修改时间
                   */
                  updateTime?: string;

                  /**
                   * @description 总价
                   */
                  totalFee?: string;

                  /**
                   * @description 付款方式
                   */
                  payPattern?: number;

                  /**
                   * @description 城市
                   */
                  cityCode?: number;

                  /**
                   * @description 流程类型
                   */
                  processType?: number;

                  /**
                   * @description 签收数量
                   */
                  signNum?: number;

                  /**
                   * @description 供应商姓名
                   */
                  supplierName?: string;

                  /**
                   * @description customerId
                   */
                  customerId?: number;

                  version?: number;

                  /**
                   * @description 采购员id
                   */
                  ownerId?: number;

                  /**
                   * @description 已付金额（实付金额）
                   */
                  paidFee?: string;

                  /**
                   * @description 应付金额
                   */
                  payableFee?: string;

                  /**
                   * @description 子单操作流水
                   */
                  recordDTOS?: Array<{
                    /**
                     * @description 操作者名称
                     */
                    operatorName?: string;

                    /**
                     * @description 操作内容
                     */
                    operatorContents?: Array<string>;

                    /**
                     * @description 调整类型(-1.取消订单 1.创建订单 2.接受订单 3.发货 4.签收)
                     */
                    operationType?: number;

                    /**
                     * @description 创建时间
                     */
                    createTime?: string;
                  }>;

                  /**
                   * @description 费用列表
                   */
                  feeRecordDTOS?: Array<{
                    id?: number;

                    /**
                     * @description [1, '转卖费'],[2, '打包带费'],[3, '外箱费'],[4, '内袋费'],[5, '垫纸费'],[6, '胶带费'],[7, '代办费'],[8, '转运费'],[9, '转运力费'],[10, '套网费'],[11, '打包费'],[12, '钟点工费'],[13, '上车费'],[14, '杂物费'],[15, '手续费'],[17, '交易税费'],[18, '小工费'],[16, '配送费'],[20, '杂费'],[21, '运费'],[22, '卸货费'],[23, '代办费'],[24, '物流费']
                     */
                    feeType?:
                      | 1
                      | 2
                      | 3
                      | 4
                      | 5
                      | 6
                      | 7
                      | 8
                      | 9
                      | 10
                      | 11
                      | 12
                      | 13
                      | 14
                      | 15
                      | 17
                      | 18
                      | 16
                      | 20
                      | 21
                      | 22
                      | 23
                      | 24;

                    /**
                     * @description 单价
                     */
                    unitFee?: string;

                    /**
                     * @description 件数
                     */
                    num?: number;

                    /**
                     * @description 单位
                     */
                    unit?: string;

                    /**
                     * @description 来源类型
                     */
                    sourceType?: number;

                    /**
                     * @description 来源id
                     */
                    sourceId?: number;

                    /**
                     * @description 总价
                     */
                    totalFee?: string;

                    /**
                     * @description 是否可用
                     */
                    status?: number;

                    /**
                     * @description 是否删除
                     */
                    state?: number;

                    /**
                     * @description 创建时间
                     */
                    createTime?: string;

                    /**
                     * @description 更新时间
                     */
                    updateTime?: string;

                    unitStr?: string;

                    feeTypeName?: string;

                    remark?: string;

                    feeTypeDesc?: string;

                    /**
                     * @description 其他信息
                     */
                    featureDTO?: {
                      /**
                       * @description 调整金额
                       */
                      feeAdjustmentDTO?: {
                        /**
                         * @description [1, '货值调整'],[2, '缺斤少两'],[3, '退赔'],[4, '抹零'],[5, '活动支持'],[6, '质量问题'],[7, '品级不符'],[8, '其他'],[9, '供应商扣款']
                         */
                        adjustType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

                        /**
                         * @description [0, '减'],[1, '加']
                         */
                        addSubType?: 0 | 1;

                        /**
                         * @description 调整金额
                         */
                        adjustFee?: string;

                        /**
                         * @description 备注
                         */
                        adjustComment?: string;
                      };
                    };
                  }>;

                  /**
                   * @description 采购价格是否为预估值
                   */
                  priceForecast?: number;

                  /**
                   * @description 装货单
                   */
                  loadOrders?: Array<{
                    /**
                     * @description 装货单id（shipmentId）
                     */
                    loadOrderId?: string;

                    /**
                     * @description 装货子单id
                     */
                    shipmentDetailId?: string;

                    /**
                     * @description 装货地(省)
                     */
                    loadProvince?: string;

                    /**
                     * @description 装货地(市)
                     */
                    loadCity?: string;

                    /**
                     * @description 装货地(区)
                     */
                    loadArea?: string;

                    /**
                     * @description 装货地详细地址
                     */
                    loadDetailAddress?: string;

                    /**
                     * @description 应装数量
                     */
                    estLoadNum?: number;

                    /**
                     * @description 应装重量
                     */
                    estLoadWeight?: number;

                    /**
                     * @description 实装数量
                     */
                    actLoadNum?: number;

                    /**
                     * @description 实装重量
                     */
                    actLoadWeight?: number;

                    /**
                     * @description 装车时间
                     */
                    loadCarTime?: string;

                    /**
                     * @description 卸货点
                     */
                    unloadSiteInfos?: Array<{
                      /**
                       * @description 卸货点id
                       */
                      siteId?: number;

                      /**
                       * @description 卸货点名称
                       */
                      siteName?: string;

                      /**
                       * @description 卸货点地址
                       */
                      siteAddress?: string;

                      /**
                       * @description 应卸数量
                       */
                      estUnloadNum?: number;

                      /**
                       * @description 应卸重量
                       */
                      estUnloadWeight?: number;

                      /**
                       * @description 实卸数量
                       */
                      actUnloadNum?: number;

                      /**
                       * @description 实卸重量
                       */
                      actUnloadWeight?: number;
                    }>;
                  }>;

                  /**
                   * @description 供应商手机号
                   */
                  supplierPhone?: string;

                  /**
                   * @description 采买类别 1-按件采买 2-按斤采买
                   */
                  purchaseType?: number;

                  /**
                   * @description 卸货城市
                   */
                  unloadCity?: string;

                  /**
                   * @description 请款状态
                   */
                  requestPayoutStatusDesc?: string;

                  /**
                   * @description 物流状态
                   */
                  statusDesc?: string;

                  /**
                   * @description 商品分组
                   */
                  skuGroups?: string;

                  /**
                   * @description 物流类型：1非自营，2自营
                   */
                  logisticsType?: number;

                  /**
                   * @description 账期描述
                   */
                  paymentDaysDesc?: string;

                  /**
                   * @description 属性
                   */
                  properties?: string;

                  edition?: number;

                  /**
                   * @description 实装重量
                   */
                  deliveryWeight?: number;

                  /**
                   * @description 差额原因
                   */
                  payDiffReason?: string;

                  /**
                   * @description 借款人
                   */
                  payer?: string;

                  /**
                   * @description 净重
                   */
                  netWeight?: number;

                  /**
                   * @description 属性集
                   */
                  props?: Array<{
                    /**
                     * @description 属性id
                     */
                    propertyId?: number;

                    /**
                     * @description 属性名
                     */
                    propertyName?: string;

                    /**
                     * @description 父属性id
                     */
                    parentPropertyId?: number;

                    /**
                     * @description 属性类型
                     */
                    propertyType?: number;

                    /**
                     * @description 属性类型名称
                     */
                    propertyTypeName?: string;

                    /**
                     * @description ,属性层级
                     */
                    propertyLevel?: number;

                    /**
                     * @description 属性值列表
                     */
                    propValues?: Array<{
                      /**
                       * @description 属性值id
                       */
                      valueId?: number;

                      /**
                       * @description 属性值
                       */
                      valueData?: string;
                    }>;
                  }>;

                  /**
                   * @description 采购单号
                   */
                  purchaseOrderNo?: string;

                  /**
                   * @description 采购批次号
                   */
                  purchaseBatchNo?: string;

                  /**
                   * @description 业务时间
                   */
                  businessTime?: string;

                  /**
                   * @description 备注
                   */
                  remark?: string;

                  /**
                   * @description 签收重量
                   */
                  signWeight?: number;

                  /**
                   * @description 结算重量
                   */
                  settleWeight?: number;

                  /**
                   * @description 需求单价开始
                   */
                  requirementUnitFeeBegin?: string;

                  /**
                   * @description 需求单价结束
                   */
                  requirementUnitFeeEnd?: string;

                  /**
                   * @description 需求重量开始
                   */
                  requirementWeightBegin?: number;

                  /**
                   * @description 需求重量结束
                   */
                  requirementWeightEnd?: number;

                  /**
                   * @description 发货价
                   */
                  deliveryUnitFee?: string;

                  /**
                   * @description 调整金额
                   */
                  materialExtendFeatureDTO?: {
                    /**
                     * @description 调整金额
                     */
                    feeAdjustmentDTO?: {
                      /**
                       * @description [1, '货值调整'],[2, '缺斤少两'],[3, '退赔'],[4, '抹零'],[5, '活动支持'],[6, '质量问题'],[7, '品级不符'],[8, '其他'],[9, '供应商扣款']
                       */
                      adjustType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

                      /**
                       * @description [0, '减'],[1, '加']
                       */
                      addSubType?: 0 | 1;

                      /**
                       * @description 调整金额
                       */
                      adjustFee?: string;

                      /**
                       * @description 备注
                       */
                      adjustComment?: string;
                    };
                  };
                };

                /**
                 * @description 请款单列表
                 */
                requestPayoutOrderList?: Array<{
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
                   * @description 提交时间
                   */
                  createTime?: string;

                  /**
                   * @description [-1, '已取消'],[0, '初始状态'],[1, '待请款'],[2, '待结算'],[3, '已结算']
                   */
                  status?: -1 | 0 | 1 | 2 | 3;

                  /**
                   * @description 请款单状态名称
                   */
                  statusName?: string;

                  /**
                   * @description 财务结款时间
                   */
                  payTime?: string;
                }>;
              }>;
            }>;
          }>;

          /**
           * @description 供应商扣款列表
           */
          supplierWithholdList?: Array<{
            /**
             * @description id
             */
            id?: number;

            /**
             * @description 供应商id
             */
            supplierId?: number;

            /**
             * @description 供应商名称
             */
            supplierName?: string;

            /**
             * @description 供应商手机号
             */
            supplierMobilePhone?: string;

            /**
             * @description 创建时间
             */
            createTime?: string;

            /**
             * @description 扣款金额
             */
            amount?: string;

            /**
             * @description 原始采购单id
             */
            originalPurchaseOrderId?: number;

            /**
             * @description 最终挂靠采购单id
             */
            purchaseOrderId?: number;

            /**
             * @description 版本号
             */
            version?: number;

            /**
             * @description 原始采购单子单信息
             */
            originalPurchaseSkuDTO?: {
              /**
               * @description 采购子单
               */
              purchaseOrderId?: number;

              /**
               * @description 主单id
               */
              parentPurchaseOrderId?: number;

              /**
               * @description 采购单类型
               */
              type?: number;

              /**
               * @description skuid
               */
              skuId?: number;

              /**
               * @description sku名称
               */
              skuName?: string;

              /**
               * @description 品类名称
               */
              catName?: string;

              /**
               * @description 品类id
               */
              catId?: number;

              /**
               * @description 别名
               */
              aliasName?: string;

              /**
               * @description 属性值
               */
              propValues?: Array<string>;

              /**
               * @description 采购数量
               */
              purchaseNum?: number;

              /**
               * @description 发货数量
               */
              deliveryNum?: number;

              /**
               * @description 采购单价
               */
              unitFee?: string;

              /**
               * @description 手续费
               */
              procedureFee?: string;

              /**
               * @description 交易税费
               */
              transactionFee?: string;

              /**
               * @description 小工费
               */
              laborFee?: string;

              /**
               * @description 重量单位
               */
              weightUnit?: number;

              /**
               * @description 单位描述
               */
              weightUnitDesc?: string;

              /**
               * @description 价格单位
               */
              feeUnit?: number;

              /**
               * @description 单位描述
               */
              feeUnitDesc?: string;

              /**
               * @description 毛重
               */
              productWeight?: number;

              /**
               * @description 重量
               */
              weight?: number;

              /**
               * @description 商品总价
               */
              skuTotalFee?: string;

              /**
               * @description 账期
               */
              paymentDays?: number;

              /**
               * @description p5价
               */
              p5Price?: number;

              /**
               * @description 扩展信息
               */
              extMap?: {};

              /**
               * @description spuId
               */
              spuId?: number;

              /**
               * @description spu名称
               */
              spuName?: string;

              /**
               * @description [-1, '已取消'],[0, '初始状态'],[1, '待请款'],[2, '待结算'],[3, '已结算']
               */
              requestPayoutStatus?: -1 | 0 | 1 | 2 | 3;

              /**
               * @description [-2, '待接单'],[-1, '已取消'],[0, '已关闭'],[1, '待发货'],[2, '采购完结'],[3, '数量配送完成'],[4, '配送数量存在问题'],[7, '已签收'],[10, '待承运'],[-3, '供应商拒绝接单'],[12, '待签收'],[11, '部分签收']
               */
              status?: -2 | -1 | 0 | 1 | 2 | 3 | 4 | 7 | 10 | -3 | 11;

              /**
               * @description 供应商id
               */
              supplierId?: number;

              /**
               * @description 创建时间
               */
              createTime?: string;

              /**
               * @description 修改时间
               */
              updateTime?: string;

              /**
               * @description 总价
               */
              totalFee?: string;

              /**
               * @description 付款方式
               */
              payPattern?: number;

              /**
               * @description 城市
               */
              cityCode?: number;

              /**
               * @description 流程类型
               */
              processType?: number;

              /**
               * @description 签收数量
               */
              signNum?: number;

              /**
               * @description 供应商姓名
               */
              supplierName?: string;

              /**
               * @description customerId
               */
              customerId?: number;

              version?: number;

              /**
               * @description 采购员id
               */
              ownerId?: number;

              /**
               * @description 已付金额（实付金额）
               */
              paidFee?: string;

              /**
               * @description 应付金额
               */
              payableFee?: string;

              /**
               * @description 子单操作流水
               */
              recordDTOS?: Array<{
                /**
                 * @description 操作者名称
                 */
                operatorName?: string;

                /**
                 * @description 操作内容
                 */
                operatorContents?: Array<string>;

                /**
                 * @description 调整类型(-1.取消订单 1.创建订单 2.接受订单 3.发货 4.签收)
                 */
                operationType?: number;

                /**
                 * @description 创建时间
                 */
                createTime?: string;
              }>;

              /**
               * @description 费用列表
               */
              feeRecordDTOS?: Array<{
                id?: number;

                /**
                 * @description [1, '转卖费'],[2, '打包带费'],[3, '外箱费'],[4, '内袋费'],[5, '垫纸费'],[6, '胶带费'],[7, '代办费'],[8, '转运费'],[9, '转运力费'],[10, '套网费'],[11, '打包费'],[12, '钟点工费'],[13, '上车费'],[14, '杂物费'],[15, '手续费'],[17, '交易税费'],[18, '小工费'],[16, '配送费'],[20, '杂费'],[21, '运费'],[22, '卸货费'],[23, '代办费'],[24, '物流费']
                 */
                feeType?:
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 17
                  | 18
                  | 16
                  | 20
                  | 21
                  | 22
                  | 23
                  | 24;

                /**
                 * @description 单价
                 */
                unitFee?: string;

                /**
                 * @description 件数
                 */
                num?: number;

                /**
                 * @description 单位
                 */
                unit?: string;

                /**
                 * @description 来源类型
                 */
                sourceType?: number;

                /**
                 * @description 来源id
                 */
                sourceId?: number;

                /**
                 * @description 总价
                 */
                totalFee?: string;

                /**
                 * @description 是否可用
                 */
                status?: number;

                /**
                 * @description 是否删除
                 */
                state?: number;

                /**
                 * @description 创建时间
                 */
                createTime?: string;

                /**
                 * @description 更新时间
                 */
                updateTime?: string;

                unitStr?: string;

                feeTypeName?: string;

                remark?: string;

                feeTypeDesc?: string;

                /**
                 * @description 其他信息
                 */
                featureDTO?: {
                  /**
                   * @description 调整金额
                   */
                  feeAdjustmentDTO?: {
                    /**
                     * @description [1, '货值调整'],[2, '缺斤少两'],[3, '退赔'],[4, '抹零'],[5, '活动支持'],[6, '质量问题'],[7, '品级不符'],[8, '其他'],[9, '供应商扣款']
                     */
                    adjustType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

                    /**
                     * @description [0, '减'],[1, '加']
                     */
                    addSubType?: 0 | 1;

                    /**
                     * @description 调整金额
                     */
                    adjustFee?: string;

                    /**
                     * @description 备注
                     */
                    adjustComment?: string;
                  };
                };
              }>;

              /**
               * @description 采购价格是否为预估值
               */
              priceForecast?: number;

              /**
               * @description 装货单
               */
              loadOrders?: Array<{
                /**
                 * @description 装货单id（shipmentId）
                 */
                loadOrderId?: string;

                /**
                 * @description 装货子单id
                 */
                shipmentDetailId?: string;

                /**
                 * @description 装货地(省)
                 */
                loadProvince?: string;

                /**
                 * @description 装货地(市)
                 */
                loadCity?: string;

                /**
                 * @description 装货地(区)
                 */
                loadArea?: string;

                /**
                 * @description 装货地详细地址
                 */
                loadDetailAddress?: string;

                /**
                 * @description 应装数量
                 */
                estLoadNum?: number;

                /**
                 * @description 应装重量
                 */
                estLoadWeight?: number;

                /**
                 * @description 实装数量
                 */
                actLoadNum?: number;

                /**
                 * @description 实装重量
                 */
                actLoadWeight?: number;

                /**
                 * @description 装车时间
                 */
                loadCarTime?: string;

                /**
                 * @description 卸货点
                 */
                unloadSiteInfos?: Array<{
                  /**
                   * @description 卸货点id
                   */
                  siteId?: number;

                  /**
                   * @description 卸货点名称
                   */
                  siteName?: string;

                  /**
                   * @description 卸货点地址
                   */
                  siteAddress?: string;

                  /**
                   * @description 应卸数量
                   */
                  estUnloadNum?: number;

                  /**
                   * @description 应卸重量
                   */
                  estUnloadWeight?: number;

                  /**
                   * @description 实卸数量
                   */
                  actUnloadNum?: number;

                  /**
                   * @description 实卸重量
                   */
                  actUnloadWeight?: number;
                }>;
              }>;

              /**
               * @description 供应商手机号
               */
              supplierPhone?: string;

              /**
               * @description 采买类别 1-按件采买 2-按斤采买
               */
              purchaseType?: number;

              /**
               * @description 卸货城市
               */
              unloadCity?: string;

              /**
               * @description 请款状态
               */
              requestPayoutStatusDesc?: string;

              /**
               * @description 物流状态
               */
              statusDesc?: string;

              /**
               * @description 商品分组
               */
              skuGroups?: string;

              /**
               * @description 物流类型：1非自营，2自营
               */
              logisticsType?: number;

              /**
               * @description 账期描述
               */
              paymentDaysDesc?: string;

              /**
               * @description 属性
               */
              properties?: string;

              edition?: number;

              /**
               * @description 实装重量
               */
              deliveryWeight?: number;

              /**
               * @description 差额原因
               */
              payDiffReason?: string;

              /**
               * @description 借款人
               */
              payer?: string;

              /**
               * @description 净重
               */
              netWeight?: number;

              /**
               * @description 属性集
               */
              props?: Array<{
                /**
                 * @description 属性id
                 */
                propertyId?: number;

                /**
                 * @description 属性名
                 */
                propertyName?: string;

                /**
                 * @description 父属性id
                 */
                parentPropertyId?: number;

                /**
                 * @description 属性类型
                 */
                propertyType?: number;

                /**
                 * @description 属性类型名称
                 */
                propertyTypeName?: string;

                /**
                 * @description ,属性层级
                 */
                propertyLevel?: number;

                /**
                 * @description 属性值列表
                 */
                propValues?: Array<{
                  /**
                   * @description 属性值id
                   */
                  valueId?: number;

                  /**
                   * @description 属性值
                   */
                  valueData?: string;
                }>;
              }>;

              /**
               * @description 采购单号
               */
              purchaseOrderNo?: string;

              /**
               * @description 采购批次号
               */
              purchaseBatchNo?: string;

              /**
               * @description 业务时间
               */
              businessTime?: string;

              /**
               * @description 备注
               */
              remark?: string;

              /**
               * @description 签收重量
               */
              signWeight?: number;

              /**
               * @description 结算重量
               */
              settleWeight?: number;

              /**
               * @description 需求单价开始
               */
              requirementUnitFeeBegin?: string;

              /**
               * @description 需求单价结束
               */
              requirementUnitFeeEnd?: string;

              /**
               * @description 需求重量开始
               */
              requirementWeightBegin?: number;

              /**
               * @description 需求重量结束
               */
              requirementWeightEnd?: number;

              /**
               * @description 发货价
               */
              deliveryUnitFee?: string;

              /**
               * @description 调整金额
               */
              materialExtendFeatureDTO?: {
                /**
                 * @description 调整金额
                 */
                feeAdjustmentDTO?: {
                  /**
                   * @description [1, '货值调整'],[2, '缺斤少两'],[3, '退赔'],[4, '抹零'],[5, '活动支持'],[6, '质量问题'],[7, '品级不符'],[8, '其他'],[9, '供应商扣款']
                   */
                  adjustType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

                  /**
                   * @description [0, '减'],[1, '加']
                   */
                  addSubType?: 0 | 1;

                  /**
                   * @description 调整金额
                   */
                  adjustFee?: string;

                  /**
                   * @description 备注
                   */
                  adjustComment?: string;
                };
              };
            };

            /**
             * @description 原始采购单发往中心仓城市
             */
            originalStorehouseCityName?: string;

            /**
             * @description 最终挂靠采购单子单信息
             */
            purchaseSkuDTO?: {
              /**
               * @description 采购子单
               */
              purchaseOrderId?: number;

              /**
               * @description 主单id
               */
              parentPurchaseOrderId?: number;

              /**
               * @description 采购单类型
               */
              type?: number;

              /**
               * @description skuid
               */
              skuId?: number;

              /**
               * @description sku名称
               */
              skuName?: string;

              /**
               * @description 品类名称
               */
              catName?: string;

              /**
               * @description 品类id
               */
              catId?: number;

              /**
               * @description 别名
               */
              aliasName?: string;

              /**
               * @description 属性值
               */
              propValues?: Array<string>;

              /**
               * @description 采购数量
               */
              purchaseNum?: number;

              /**
               * @description 发货数量
               */
              deliveryNum?: number;

              /**
               * @description 采购单价
               */
              unitFee?: string;

              /**
               * @description 手续费
               */
              procedureFee?: string;

              /**
               * @description 交易税费
               */
              transactionFee?: string;

              /**
               * @description 小工费
               */
              laborFee?: string;

              /**
               * @description 重量单位
               */
              weightUnit?: number;

              /**
               * @description 单位描述
               */
              weightUnitDesc?: string;

              /**
               * @description 价格单位
               */
              feeUnit?: number;

              /**
               * @description 单位描述
               */
              feeUnitDesc?: string;

              /**
               * @description 毛重
               */
              productWeight?: number;

              /**
               * @description 重量
               */
              weight?: number;

              /**
               * @description 商品总价
               */
              skuTotalFee?: string;

              /**
               * @description 账期
               */
              paymentDays?: number;

              /**
               * @description p5价
               */
              p5Price?: number;

              /**
               * @description 扩展信息
               */
              extMap?: {};

              /**
               * @description spuId
               */
              spuId?: number;

              /**
               * @description spu名称
               */
              spuName?: string;

              /**
               * @description [-1, '已取消'],[0, '初始状态'],[1, '待请款'],[2, '待结算'],[3, '已结算']
               */
              requestPayoutStatus?: -1 | 0 | 1 | 2 | 3;

              /**
               * @description [-2, '待接单'],[-1, '已取消'],[0, '已关闭'],[1, '待发货'],[2, '采购完结'],[3, '数量配送完成'],[4, '配送数量存在问题'],[7, '已签收'],[10, '待承运'],[-3, '供应商拒绝接单'],[12, '待签收'],[11, '部分签收']
               */
              status?: -2 | -1 | 0 | 1 | 2 | 3 | 4 | 7 | 10 | -3 | 11;

              /**
               * @description 供应商id
               */
              supplierId?: number;

              /**
               * @description 创建时间
               */
              createTime?: string;

              /**
               * @description 修改时间
               */
              updateTime?: string;

              /**
               * @description 总价
               */
              totalFee?: string;

              /**
               * @description 付款方式
               */
              payPattern?: number;

              /**
               * @description 城市
               */
              cityCode?: number;

              /**
               * @description 流程类型
               */
              processType?: number;

              /**
               * @description 签收数量
               */
              signNum?: number;

              /**
               * @description 供应商姓名
               */
              supplierName?: string;

              /**
               * @description customerId
               */
              customerId?: number;

              version?: number;

              /**
               * @description 采购员id
               */
              ownerId?: number;

              /**
               * @description 已付金额（实付金额）
               */
              paidFee?: string;

              /**
               * @description 应付金额
               */
              payableFee?: string;

              /**
               * @description 子单操作流水
               */
              recordDTOS?: Array<{
                /**
                 * @description 操作者名称
                 */
                operatorName?: string;

                /**
                 * @description 操作内容
                 */
                operatorContents?: Array<string>;

                /**
                 * @description 调整类型(-1.取消订单 1.创建订单 2.接受订单 3.发货 4.签收)
                 */
                operationType?: number;

                /**
                 * @description 创建时间
                 */
                createTime?: string;
              }>;

              /**
               * @description 费用列表
               */
              feeRecordDTOS?: Array<{
                id?: number;

                /**
                 * @description [1, '转卖费'],[2, '打包带费'],[3, '外箱费'],[4, '内袋费'],[5, '垫纸费'],[6, '胶带费'],[7, '代办费'],[8, '转运费'],[9, '转运力费'],[10, '套网费'],[11, '打包费'],[12, '钟点工费'],[13, '上车费'],[14, '杂物费'],[15, '手续费'],[17, '交易税费'],[18, '小工费'],[16, '配送费'],[20, '杂费'],[21, '运费'],[22, '卸货费'],[23, '代办费'],[24, '物流费']
                 */
                feeType?:
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 17
                  | 18
                  | 16
                  | 20
                  | 21
                  | 22
                  | 23
                  | 24;

                /**
                 * @description 单价
                 */
                unitFee?: string;

                /**
                 * @description 件数
                 */
                num?: number;

                /**
                 * @description 单位
                 */
                unit?: string;

                /**
                 * @description 来源类型
                 */
                sourceType?: number;

                /**
                 * @description 来源id
                 */
                sourceId?: number;

                /**
                 * @description 总价
                 */
                totalFee?: string;

                /**
                 * @description 是否可用
                 */
                status?: number;

                /**
                 * @description 是否删除
                 */
                state?: number;

                /**
                 * @description 创建时间
                 */
                createTime?: string;

                /**
                 * @description 更新时间
                 */
                updateTime?: string;

                unitStr?: string;

                feeTypeName?: string;

                remark?: string;

                feeTypeDesc?: string;

                /**
                 * @description 其他信息
                 */
                featureDTO?: {
                  /**
                   * @description 调整金额
                   */
                  feeAdjustmentDTO?: {
                    /**
                     * @description [1, '货值调整'],[2, '缺斤少两'],[3, '退赔'],[4, '抹零'],[5, '活动支持'],[6, '质量问题'],[7, '品级不符'],[8, '其他'],[9, '供应商扣款']
                     */
                    adjustType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

                    /**
                     * @description [0, '减'],[1, '加']
                     */
                    addSubType?: 0 | 1;

                    /**
                     * @description 调整金额
                     */
                    adjustFee?: string;

                    /**
                     * @description 备注
                     */
                    adjustComment?: string;
                  };
                };
              }>;

              /**
               * @description 采购价格是否为预估值
               */
              priceForecast?: number;

              /**
               * @description 装货单
               */
              loadOrders?: Array<{
                /**
                 * @description 装货单id（shipmentId）
                 */
                loadOrderId?: string;

                /**
                 * @description 装货子单id
                 */
                shipmentDetailId?: string;

                /**
                 * @description 装货地(省)
                 */
                loadProvince?: string;

                /**
                 * @description 装货地(市)
                 */
                loadCity?: string;

                /**
                 * @description 装货地(区)
                 */
                loadArea?: string;

                /**
                 * @description 装货地详细地址
                 */
                loadDetailAddress?: string;

                /**
                 * @description 应装数量
                 */
                estLoadNum?: number;

                /**
                 * @description 应装重量
                 */
                estLoadWeight?: number;

                /**
                 * @description 实装数量
                 */
                actLoadNum?: number;

                /**
                 * @description 实装重量
                 */
                actLoadWeight?: number;

                /**
                 * @description 装车时间
                 */
                loadCarTime?: string;

                /**
                 * @description 卸货点
                 */
                unloadSiteInfos?: Array<{
                  /**
                   * @description 卸货点id
                   */
                  siteId?: number;

                  /**
                   * @description 卸货点名称
                   */
                  siteName?: string;

                  /**
                   * @description 卸货点地址
                   */
                  siteAddress?: string;

                  /**
                   * @description 应卸数量
                   */
                  estUnloadNum?: number;

                  /**
                   * @description 应卸重量
                   */
                  estUnloadWeight?: number;

                  /**
                   * @description 实卸数量
                   */
                  actUnloadNum?: number;

                  /**
                   * @description 实卸重量
                   */
                  actUnloadWeight?: number;
                }>;
              }>;

              /**
               * @description 供应商手机号
               */
              supplierPhone?: string;

              /**
               * @description 采买类别 1-按件采买 2-按斤采买
               */
              purchaseType?: number;

              /**
               * @description 卸货城市
               */
              unloadCity?: string;

              /**
               * @description 请款状态
               */
              requestPayoutStatusDesc?: string;

              /**
               * @description 物流状态
               */
              statusDesc?: string;

              /**
               * @description 商品分组
               */
              skuGroups?: string;

              /**
               * @description 物流类型：1非自营，2自营
               */
              logisticsType?: number;

              /**
               * @description 账期描述
               */
              paymentDaysDesc?: string;

              /**
               * @description 属性
               */
              properties?: string;

              edition?: number;

              /**
               * @description 实装重量
               */
              deliveryWeight?: number;

              /**
               * @description 差额原因
               */
              payDiffReason?: string;

              /**
               * @description 借款人
               */
              payer?: string;

              /**
               * @description 净重
               */
              netWeight?: number;

              /**
               * @description 属性集
               */
              props?: Array<{
                /**
                 * @description 属性id
                 */
                propertyId?: number;

                /**
                 * @description 属性名
                 */
                propertyName?: string;

                /**
                 * @description 父属性id
                 */
                parentPropertyId?: number;

                /**
                 * @description 属性类型
                 */
                propertyType?: number;

                /**
                 * @description 属性类型名称
                 */
                propertyTypeName?: string;

                /**
                 * @description ,属性层级
                 */
                propertyLevel?: number;

                /**
                 * @description 属性值列表
                 */
                propValues?: Array<{
                  /**
                   * @description 属性值id
                   */
                  valueId?: number;

                  /**
                   * @description 属性值
                   */
                  valueData?: string;
                }>;
              }>;

              /**
               * @description 采购单号
               */
              purchaseOrderNo?: string;

              /**
               * @description 采购批次号
               */
              purchaseBatchNo?: string;

              /**
               * @description 业务时间
               */
              businessTime?: string;

              /**
               * @description 备注
               */
              remark?: string;

              /**
               * @description 签收重量
               */
              signWeight?: number;

              /**
               * @description 结算重量
               */
              settleWeight?: number;

              /**
               * @description 需求单价开始
               */
              requirementUnitFeeBegin?: string;

              /**
               * @description 需求单价结束
               */
              requirementUnitFeeEnd?: string;

              /**
               * @description 需求重量开始
               */
              requirementWeightBegin?: number;

              /**
               * @description 需求重量结束
               */
              requirementWeightEnd?: number;

              /**
               * @description 发货价
               */
              deliveryUnitFee?: string;

              /**
               * @description 调整金额
               */
              materialExtendFeatureDTO?: {
                /**
                 * @description 调整金额
                 */
                feeAdjustmentDTO?: {
                  /**
                   * @description [1, '货值调整'],[2, '缺斤少两'],[3, '退赔'],[4, '抹零'],[5, '活动支持'],[6, '质量问题'],[7, '品级不符'],[8, '其他'],[9, '供应商扣款']
                   */
                  adjustType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

                  /**
                   * @description [0, '减'],[1, '加']
                   */
                  addSubType?: 0 | 1;

                  /**
                   * @description 调整金额
                   */
                  adjustFee?: string;

                  /**
                   * @description 备注
                   */
                  adjustComment?: string;
                };
              };
            };

            /**
             * @description 请款单列表
             */
            requestPayoutOrderList?: Array<{
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
               * @description 提交时间
               */
              createTime?: string;

              /**
               * @description [-1, '已取消'],[0, '初始状态'],[1, '待请款'],[2, '待结算'],[3, '已结算']
               */
              status?: -1 | 0 | 1 | 2 | 3;

              /**
               * @description 请款单状态名称
               */
              statusName?: string;

              /**
               * @description 财务结款时间
               */
              payTime?: string;
            }>;
          }>;
        };
      }
    }
  }
}
