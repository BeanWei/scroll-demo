<template>
  <div id="ScrollDemo">
    <div class="container" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" :items="data">
      <div class="content" v-for="item in data" :key="item.id">
        <h3>{{item.title}}</h3>
        <p>{{item.updated_at}}</p>
        <!-- <div v-html="item.content"></div> -->
      </div>
    </div>
    <p>···正在拼命加载···</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      busy: false,
      page: 0
    }
  },
  methods: {
    getList () {
      this.$http.get(`http://gank.io/api/history/content/10/${this.page}`).then(res => {
        this.data = this.data.concat(res.data.results)
        if (res.data.results.length === 0) {
          this.busy = true
        } else {
          this.busy = false
        }
      })
    },
    loadMore () {
      setTimeout(() => {
        this.page++
        this.getList()
      }, 1000)
    }
  }
}
</script>

<style scoped>
  .content {
    margin: 7px auto;
    text-align: justify;
    padding: 2px;
    width: 50%;
    border: 2px solid #3a3a3a;
  }
  .content p {
    margin: 2px auto;
    font-size: 14px;
  }
</style>
