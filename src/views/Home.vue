<template>
  <div class="home">
    <div class="div1">div1</div>
    <div class="div2">div2</div>
    <div class="div3">div3</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
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
