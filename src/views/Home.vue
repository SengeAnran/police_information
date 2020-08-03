<template>
  <div  class="home">
    <div class="home_img">
      <img src="@/assets/home/top_img.jpg">
    </div>
    <a ></a><div class="home_img">
      <img src="@/assets/home/img1.png">
    </div>
  </div>
</template>

<script>
  import {getNewsType} from  '@/api/news'
export default {
  name: 'Home',
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
  // 获取新闻列表
  getNewsList() {
    this.newsList = []
    this.loading = true

    this.name = this.$route.params.name
    this.typeId = this.$route.params.typeId
    this.page = (this.$route.query.page - 1) || 0
    const query = {
      typeId: this.typeId,
      page: this.page,
      size: this.size,
      enabled: true
    }
    getNewsList(query).then(res => {
      this.newsList = res.content
      this.totalElements = res.totalElements
    }).finally(() => {
      setTimeout(() => { this.loading = false }, 100)
    })
  },
  }
}
</script>

<style scoped lang="scss">
.home{
  .home_img{
    img{
      width: 100%;
    }
  }
}
</style>
