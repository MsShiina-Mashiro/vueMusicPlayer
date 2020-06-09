<template>
  <!-- 轮播图 -->
  <div class="discovery-container">
    <el-carousel :interval="4000" type="card" height="230px">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <el-image :src="item.imageUrl" :alt="item.typeTitle"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "discovery",
  data() {
    return {
      banners: []
    };
  },
  created() {
    // 轮播图接口
    this.getBanners();
  },
  methods: {
    async getBanners() {
      const res = await this.$http.get("banner");
      this.banners = res.data.banners;
    }
  }
};
</script>

<style lang="less" scoped>
.discovery-container{
  .el-carousel__container{
    width: 50vw;
  }
}
</style>
