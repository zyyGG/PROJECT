<template>
  <div>
    <div class="addItem">
      <a-form :label-col="{ span: 3 }" :wrapper-col="{ span: 20 }" :form="form">
        <a-form-item label="标题">
          <a-input placeholder="你的物品标题" v-model="itemTitle" />
        </a-form-item>
        <a-form-item label="物品特点" :wrapper-col="{ span: 10 }">
          <a-input
            v-for="(item, index) in itemPoint"
            :key="index"
            v-model="item.content"
          ></a-input>
          <a-button @click="addPoint"> <a-icon type="plus" /></a-button>
        </a-form-item>
        <a-form-item label="物品状态">
          <a-radio-group v-model="itemState">
            <a-radio value="newBrand"> 全新 </a-radio>
            <a-radio value="opend"> 开封/未使用 </a-radio>
            <a-radio value="used"> 二手 </a-radio>
            <a-radio value="more"> 三手以及更多 </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="多属性">
          <a-button><a-icon type="plus" />多属性</a-button>
        </a-form-item>
        <a-form-item label="上传图片">
          <a-upload
            :file-list="fileList"
            list-type="picture-card"
            action="https://notHaveServer"
          >
            <div
              v-if="fileList.length < 8"
              style="border:dashed,width:50px;height:50px"
            >
              <a-icon type="plus" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
        </a-form-item>
        <a-form-item label="物品详情" :label-col="{ span: 3 }">
          <a-form-item label="颜色" :wrapper-col="{ span: 10 }">
            <a-input v-model="itemColor"></a-input>
          </a-form-item>
          <a-form-item label="尺码" :wrapper-col="{ span: 10 }">
            <a-input v-model="itemSize"></a-input>
          </a-form-item>
          <a-form-item label="图案" :wrapper-col="{ span: 10 }">
            <a-input v-model="itemPatten"></a-input>
          </a-form-item>
          <a-form-item label="模板" :wrapper-col="{ span: 10 }">
            <a-input></a-input>
          </a-form-item>
        </a-form-item>
        <a-form-item label="售卖详情" :label-col="{ span: 3 }">
          <a-form-item label="价格/个" :wrapper-col="{ span: 10 }">
            <a-input v-model="itemPrice" type="number" prefix="￥"></a-input>
          </a-form-item>
          <a-form-item label="数量" :wrapper-col="{ span: 10 }">
            <a-input v-model="itemCount" type="number"></a-input>
          </a-form-item>
        </a-form-item>
        <a-form-item
          label="发货地址"
          :label-col="{ span: 3 }"
          :wrapper-col="{ span: 20 }"
        >
          <a-input-group compact>
            <a-select default-value="hubei">
              <a-select-option value="hubei">湖北省</a-select-option>
              <a-select-option value="beijin">北京省</a-select-option>
            </a-select>
            <a-select default-value="shiyan">
              <a-select-option value="shiyan">十堰市</a-select-option>
              <a-select-option value="wuhan">武汉市</a-select-option>
            </a-select>
            <a-select default-value="maojian">
              <a-select-option value="maojian">茅箭区</a-select-option>
            </a-select>
          </a-input-group>
        </a-form-item>
        <a-form-item label="运费" :wrapper-col="{ span: 5 }">
          <a-input prefix="￥"></a-input>
        </a-form-item>
        <a-button type="primary" @click="submit">提交</a-button>
        <a-button type="default">取消</a-button>
      </a-form>
    </div>
    <div></div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data () {
    return {
      itemTitle: "",//物品标题
      itemState: "",//物品状态
      itemColor: "",//物品颜色
      itemPatten: "",//物品图案
      itemPrice: "",//物品价格
      itemCount: "",//物品数量
      itemSize: "",//物品尺码

      itemPoint: [{ key: 0, content: "" }, { key: 1, content: "" }],//物品特点表
      fileList: [
      ],//上传的图片列表
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  methods: {
    //   增加一个物品特点
    addPoint () {
      let key = this.itemPoint[this.itemPoint.length - 1].key
      const newPoint = { key: key + 1, content: "" }
      this.itemPoint.push(newPoint)
    },
    // 提交数据
    submit () {
      const newItem = {
        // 检查数据的格式是否正确 -- 省略
        itemTitle: this.itemTitle,
        itemState: this.itemState,
        itemColor: this.itemColor,
        itemPatten: this.itemPatten,
        itemPrice: this.itemPrice,
        itemCount: this.itemCount,
        itemSize: this.itemSize,
        itemPoint: this.itemPoint
      }
      axios.post("http://localhost:10002/api/submit",newItem)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        }),
      console.log("发送成功",newItem)
    }
  }
}
</script>

<style scoped>
.addItem {
  width: 800px;
  padding: 0px 30px;
  /* border: 1px solid black; */
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>