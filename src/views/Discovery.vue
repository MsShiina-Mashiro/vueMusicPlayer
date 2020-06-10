<template>
  <div class="discovery-container">
    <!-- 轮播图 -->
    <el-carousel :interval="4000" type="card" height="230px" class="banner">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <el-image :src="item.imageUrl" :alt="item.typeTitle"></el-image>
      </el-carousel-item>
    </el-carousel>

    <!-- 推荐歌单 -->
    <div class="recommend">
      <h3 class="title">推荐歌单</h3>
      <div class="items">
        <div class="item" :key="index" v-for="(item, index) in songlists">
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{ item.copywriter }}</span>
            </div>
            <el-image :src="item.picUrl" fit="cover">
              <template v-slot:load>
                <i class="el-icon-loading"></i>
                <strong>图片正在加载中</strong>
              </template>
              <template v-slot:error>
                <i class="el-icon-picture-outline"></i>
                <strong>加载失败</strong>
              </template>
            </el-image>
            <i class="iconfont icon-icon_Play"></i>
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "discovery",
  data() {
    return {
      banners: [],
      songlists: []
    };
  },
  created() {
    // 轮播图接口
    this.getBanners();
    this.getSongLists();
  },
  methods: {
    async getBanners() {
      const res = await this.$http.get("banner");
      this.banners = res.data.banners;
    },
    async getSongLists() {
      const res = await this.$http.get("personalized", {
        params: { limit: 10 }
      });
      console.log(res);
      this.songlists = res.data.result;
    }
  }
};
</script>

<style lang="less" scoped>

.banner {
  width: 70vw;
}

// 推荐歌单
.recommend .items {
  display: flex;
  width: 70vw;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 80px;

  .item {
    width: 18%;
    overflow: hidden;

    &:hover .img-wrap .desc-wrap {
      top: 0px;
      z-index: 1;
    }

    &:nth-child(n + 6) {
      margin-top: 25px;
    }

    .img-wrap {
      position: relative;
      width: 100%;
      .icon-icon_Play {
        display: flex;
        position: absolute;
        right: 20px;
        bottom: 20px;
        width: 55px;
        height: 55px;
        color: #dd6d60;
        font-size: 40px;
        border-radius: 50%;
        transition: all 0.5s;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.8);
        opacity: 0;

        &::before {
          transform: translateX(1px);
        }

        &:hover > .icon-icon_Play {
          opacity: 1;
        }
      }

      .el-image {
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        i {
          font-size: 30px;
        }
      }

      .desc-wrap {
        position: absolute;
        width: 100%;
        top: -50px;
        left: 0;
        font-size: 16px;
        transition: all 0.5s;
        color: white;
        background: rgba(0, 0, 0, 0.5);
        max-height: 50px;
        padding: 5px;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;

        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
