declare namespace SxcGw {
  export namespace cloudspeed {
    export namespace docApiQuery {
      /**
       * @description 根据apiName 查询 api文档详情
       */
      export namespace queryByApiName {
        export interface params {
          apiName: string;
        }

        /**
         * @description 返回参数内容
         */
        export type result = {
          /**
           * @description 版本信息
           */
          versionDTOList?: Array<{
            /**
             * @description 版本号
             */
            versionNo?: string;

            /**
             * @description 修改人
             */
            modifier?: string;

            /**
             * @description 修改时间
             */
            modifyTime?: string;

            /**
             * @description 修改人电话
             */
            phoneNumber?: string;

            /**
             * @description 变更内容
             */
            changeContent?: string;
          }>;

          /**
           * @description api名称
           */
          apiName?: string;

          /**
           * @description api描述
           */
          apiDesc?: string;

          /**
           * @description api用法介绍
           */
          introduce?: string;

          /**
           * @description 是否允许覆盖：1-是；0-否
           */
          overwrite?: number;

          /**
           * @description 是否网关API：1-是；0-否
           */
          gatewayApiFlag?: number;

          /**
           * @description 文档api必填项是否被锁定
           */
          requiredLock?: number;

          /**
           * @description 请求参数
           */
          docApiRequestDTO?: {
            /**
             * @description 参数明细
             */
            parameterDTOList?: Array<{
              /**
               * @description 参数名称
               */
              name: string;

              /**
               * @description 类型
               */
              type: string;

              /**
               * @description 描述
               */
              desc?: string;

              /**
               * @description 是否必填
               */
              required?: boolean;

              /**
               * @description 递归、循环依赖标志
               */
              recursion?: boolean;

              child?: Array<{
                /**
                 * @description 参数名称
                 */
                name: string;

                /**
                 * @description 类型
                 */
                type: string;

                /**
                 * @description 描述
                 */
                desc?: string;

                /**
                 * @description 是否必填
                 */
                required?: boolean;

                /**
                 * @description 递归、循环依赖标志
                 */
                recursion?: boolean;

                child?: Array<{}>;

                /**
                 * @description 是否人工添加
                 */
                manuallyAdd: boolean;

                /**
                 * @description result 参数特有选项，需要用户编辑，用来mock数据和前端渲染的
                 */
                schema?: string;
              }>;

              /**
               * @description 是否人工添加
               */
              manuallyAdd: boolean;

              /**
               * @description result 参数特有选项，需要用户编辑，用来mock数据和前端渲染的
               */
              schema?: string;
            }>;

            /**
             * @description 参数json格式化
             */
            paramsJsonStr?: string;
          };

          /**
           * @description 响应参数
           */
          docApiResultDTO?: {
            /**
             * @description 参数明细
             */
            parameterDTOList?: Array<{
              /**
               * @description 参数名称
               */
              name: string;

              /**
               * @description 类型
               */
              type: string;

              /**
               * @description 描述
               */
              desc?: string;

              /**
               * @description 是否必填
               */
              required?: boolean;

              /**
               * @description 递归、循环依赖标志
               */
              recursion?: boolean;

              child?: Array<{
                /**
                 * @description 参数名称
                 */
                name: string;

                /**
                 * @description 类型
                 */
                type: string;

                /**
                 * @description 描述
                 */
                desc?: string;

                /**
                 * @description 是否必填
                 */
                required?: boolean;

                /**
                 * @description 递归、循环依赖标志
                 */
                recursion?: boolean;

                child?: Array<{}>;

                /**
                 * @description 是否人工添加
                 */
                manuallyAdd: boolean;

                /**
                 * @description result 参数特有选项，需要用户编辑，用来mock数据和前端渲染的
                 */
                schema?: string;
              }>;

              /**
               * @description 是否人工添加
               */
              manuallyAdd: boolean;

              /**
               * @description result 参数特有选项，需要用户编辑，用来mock数据和前端渲染的
               */
              schema?: string;
            }>;

            /**
             * @description 参数json格式化
             */
            paramsJsonStr?: string;

            /**
             * @description mock示例
             */
            mockExample?: string;
          };
        };
      }
    }
  }
}
