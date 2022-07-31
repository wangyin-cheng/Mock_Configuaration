<template>
  <div class="home-page-warp">
    <el-row class="search-row">
      <el-col :span="18">
        <el-col :span="8" class="col-span-search">
          <label>功能号：</label>
          <el-input v-model="functionId" placeholder="请输入内容"></el-input>
        </el-col>
      </el-col>
      <el-col :span="6" class="search-button">
        <el-button type="primary" size="medium">查询</el-button>
      </el-col>
    </el-row>
    <div class="table-top-button">
      <el-button type="primary" size="medium">新增</el-button>
    </div>
    <div>
      <el-table
          :data="tableData"
          border
          style="width: 100%">
        <el-table-column
            align="center"
            prop="serialNum"
            label="序号"
            width="150">
        </el-table-column>
        <el-table-column
            align="center"
            prop="functionId"
            label="功能号"
            width="150">
        </el-table-column>
        <el-table-column
            align="center"
            prop="name"
            label="用例">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="200">
          <template>
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          class="table-bottom-page"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="10"
          layout="total, sizes, prev, pager, next"
          :total="pageTotal">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageTotal: 0,
      pageIndex: 1,
      pageSize: 10,
      functionId: ''
    }
  },
  mounted() {
    this.initPage();
  },
  methods: {
    initPage() {
      this.initTableFunc()
    },
    initTableFunc() {
      const params= {
        function_Id: this.functionId,
        page_index: this.pageIndex,
        page_size: this.pageSize
      }
      // this.$services.test({
      //   method: 'get',
      //   data: {}
      // })
      this.$services.test({data: params}).then((res) => {
        if(res && res.data) {
          this.tableData = res.data.map((item,index) => {
            return {
              ...item,
              serialNum: index + 1,
              functionId : item.ff
            }
          })
          this.pageTotal = Number(res.total)
        }
      })
    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
  }
}
</script>

<style lang="less" scoped>
.home-page-warp {
  padding: 16px;
  box-sizing: border-box;

  .table-top-button {
    margin-bottom: 10px;
  }

  .table-bottom-page {
    margin-top: 10px;
    text-align: right;
  }

  .search-row {
    margin-bottom: 10px;
  }

  .search-button {
    text-align: center;
  }

  .col-span-search {
    display: flex;
    align-items: center;

    label {
      min-width: 70px;
    }
  }
}
</style>
