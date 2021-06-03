<template>
  <div class="home">
    <div class="div1">div1</div>
    <div class="div2">div2</div>
    <div class="div3">div3</div>
    <el-row :gutter="20">
      <el-col :span="4"
        ><el-input v-model="input" placeholder="请输入内容"></el-input
      ></el-col>
      <el-col :span="8"
        ><el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option> </el-select
      ></el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      input: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
};
</script>
<style lang="less" scoped>
.div1,
.div2,
.div3 {
  height: 100px;
}
.div1 {
  width: 200px;
  background: red;
  font-size: 20px;
}
.div2 {
  width: 400px;
  background: green;
  font-size: 30px;
}
.div3 {
  width: 600px;
  background: yellow;
  font-size: 40px;
}
</style>
