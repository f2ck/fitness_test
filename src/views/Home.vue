<template>
  <div class="home">
    <div class="index-container"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button, Icon } from 'vant';
export default {
  name: 'Home',
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
  },
  created() {
    // 查看环境变量
    console.log(process.env);
  },
};
</script>

<style lang="less" scoped>
.text {
  color: @theme-color;
}
.index-container {
}
</style>
