<template>
  <div>
    <p>发布商品</p>
    <div>
      <p>商品发布</p>
      <a-menu>
        <a-menu-item>基础信息</a-menu-item>
        <a-menu-item>销售信息</a-menu-item>
        <a-menu-item>物流信息</a-menu-item>
        <a-menu-item>支付信息</a-menu-item>
        <a-menu-item>图文描述</a-menu-item>
        <a-menu-item>售后服务</a-menu-item>
      </a-menu>
      <div>
        <p>基础信息</p>
        <hr />
        <a-form>
          <a-form-item label="物品类型">
            <a-radio>全新</a-radio>
            <a-radio>二手</a-radio>
          </a-form-item>
          <a-form-item label="物品标题">
            <a-input placeholder="最多允许输入30个汉字(60个字符)"></a-input>
          </a-form-item>
          <a-form-item label="导购标题">
            <a-input-group compact>
              <a-input placeholder="demo"></a-input>
              <a-select>
                <a-select-option value="1"> item1 </a-select-option>
                <a-select-option value="2"> item2 </a-select-option>
              </a-select>
            </a-input-group>
            <a-input-group compact>
              <a-input placeholder="请输入袖长"></a-input>
              <a-select>
                <a-select-option value="1"> item1 </a-select-option>
              </a-select>
            </a-input-group>
            <a-input-group compact>
              <a-input placeholder="请输入适用对象"></a-input>
              <a-select>
                <a-select-option value="1"> item1 </a-select-option>
              </a-select>
            </a-input-group>
            <a-input-group compact>
              <a-input placeholder="请输入亮点"></a-input>
              <a-button>删除</a-button>
            </a-input-group>
            <a-input-group compact>
              <a-input placeholder="请输入品类词"></a-input>
              <a-select>
                <a-select-option value="1"> item1 </a-select-option>
              </a-select>
            </a-input-group>
            <a-input-group compact>
              <a-input placeholder="请输入利益点"></a-input>
              <a-button>删除</a-button>
            </a-input-group>
            <a-button>新增</a-button>
            <p>(0/30)</p>
            展示效果
            <a-button>开始排序</a-button>
            <p class="descript">
              导购标题在不影响商品在搜索排序的前提下，会优先在搜索、详情、购物车、直播等场域，替代原长标题优先展示。为了方便消费者了解商品，提升商品转化效率，建议您填写简明准确的标题内容，避免文字重复表达
            </p>
          </a-form-item>
          <a-form-item label="类目属性">
            <p>重要属性1/13</p>
            <b>填完*项即可发布上架</b>
            <a-row :gutter="24">
              <a-col :span="12">
                <a-form-item label="品牌">
                  <a-select placeholder="请选择" show-search>
                    <a-select-option value="1"> item </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="货号">
                  <a-input></a-input>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="袖长">
                  <a-select placeholder="请选择" show-search>
                    <a-select-option value="1"> item </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="领型">
                  <a-select placeholder="请选择" show-search>
                    <a-select-option value="1"> item </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="版型">
                  <a-select placeholder="请选择" show-search>
                    <a-select-option value="1"> item </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="基础风格">
                  <a-select placeholder="请选择" show-search>
                    <a-select-option value="1"> item </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="材质成分">
                  <a-select placeholder="请选择" show-search>
                    <a-select-option value="1"> item </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="品牌类型">
                  <a-select placeholder="请选择" show-search>
                    <a-select-option value="1"> item </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="面料">
                  <a-select placeholder="请选择" show-search>
                    <a-select-option value="1"> item </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <div>
                  <a-form-item label="袖长">
                    <a-select placeholder="请选择材质" show-search>
                      <a-select-option value="1"> item </a-select-option>
                    </a-select>
                  </a-form-item>
                  <a-button>删除</a-button>
                </div>
                <div>
                  <a-form-item label="袖长">
                    <a-select placeholder="请选择材质" show-search>
                      <a-select-option value="1"> item </a-select-option>
                    </a-select>
                  </a-form-item>
                  <a-button>删除</a-button>
                </div>
                <a-button>添加材质成分</a-button>
              </a-col>
            </a-row>
            <a-row :gutter="24">
              <a-col>
                其他属性 0/8
                <p>其他参数的补充说明</p>
              </a-col>
              <a-col :span="12">
                <a-form-item label="印花主题">
                  <a-select placeholder="请选择" show-search>
                    <a-select-option value="1"> item </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="面料分类">
                  <a-select placeholder="请选择" show-search>
                    <a-select-option value="1"> item </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="款式细节">
                  <a-button>设置</a-button>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="服饰工艺">
                  <a-select placeholder="请选择" show-search>
                    <a-select-option value="1"> item </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="适用季节">
                  <a-select placeholder="请选择" show-search>
                    <a-select-option value="1"> item </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="适用场景">
                  <a-select placeholder="请选择" show-search>
                    <a-select-option value="1"> item </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="适用对象">
                  <a-select placeholder="请选择" show-search>
                    <a-select-option value="1"> item </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form-item>
          <a-form-item label="物品定制">
            <a-radio>否</a-radio>
            <a-radio>支持</a-radio>
          </a-form-item>
          <a-form-item label="采购地">
            <a-radio>中国内地(大陆)</a-radio>
            <a-radio>中国港澳台地区及其他国家和地区</a-radio>
          </a-form-item>
        </a-form>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "AddItem",

}
</script>

<style>
</style>