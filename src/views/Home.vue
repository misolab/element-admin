<template>
  <div class="home-content">
    <el-table :data="tableData" @row-click="onClick">
      <el-table-column prop="id" label="번호" width="100"></el-table-column>
      <el-table-column prop="title" label="제목"></el-table-column>
      <el-table-column prop="content" label="내용"></el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import { reqHomeList } from '@/api/home'

export default {
  name: 'posts',
  mounted() {
    this.fetch()
  },
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    fetch() {
      reqHomeList().then((body) => {
        this.tableData = body.items
      })
    },
    onClick(row, column, event) {
      this.$message(`click ${JSON.stringify(row)}`)
    }
  }
}
</script>
