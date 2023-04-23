<template>
  <div class="tags">
    <el-tag v-for="(item, index) in tags" :key="item.path" :closable="item.name !== 'home'" :effect="$route.name === item.name ? 'dark' : 'plain'" @click="changeMenu(item)" @close="handleClose(item, index)" size="small">
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CommonTag',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabList
    })
  },
  methods: {
    ...mapMutations(['closeTag']),
    // 点击tag实现路由跳转
    changeMenu(item) {
      this.$router.push({ name: item.name })
    },
    // 点击tag删除的功能
    handleClose(item, index) {
      // 修改vuex中tabList的值
      this.closeTag(item)
      // 删除当前tag后实现对应的路由跳转
      const length = this.tags.length

      if (item.name !== this.$route.name) {
        return
      }
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name
        })
      } else {
        this.$router.push({
          name: this.tags[index].name
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tags {
  padding: 20px;
  .el-tag {
    cursor: pointer;
    margin-right: 15px;
  }
}
</style>
