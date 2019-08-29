<template>
  <div class="app-container">
    <el-row>
      <el-col :span="4">
        <el-tree
          ref="tree"
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
        />
      </el-col>
      <el-col :span="20">
        <div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="用户名">
              <el-input v-model="formInline.user" placeholder="用户名" />
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="formInline.user" placeholder="姓名" />
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="formInline.user" placeholder="邮箱" />
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="formInline.user" placeholder="手机号" />
            </el-form-item>
            <el-form-item label="QQ号">
              <el-input v-model="formInline.user" placeholder="QQ号" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">新增</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-table
            :data="tableData"
            border
            style="width: 100%"
          >
            <el-table-column
              fixed
              prop="date"
              label="日期"
              width="150"
            />
            <el-table-column
              prop="name"
              label="姓名"
              width="120"
            />
            <el-table-column
              prop="province"
              label="省份"
              width="120"
            />
            <el-table-column
              prop="city"
              label="市区"
              width="120"
            />
            <el-table-column
              prop="address"
              label="地址"
              width="300"
            />
            <el-table-column
              prop="zip"
              label="邮编"
              width="120"
            />
            <el-table-column
              fixed="right"
              label="操作"
              width="100"
            >
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="block">
          <el-pagination
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage4: 4,
      formInline: {
        user: '',
        region: ''
      },
      filterText: '',
      data: [{
        id: 1,
        label: '禾泰通信',
        children: [{
          id: 4,
          label: '南京分公司',
          children: [{
            id: 9,
            label: '部门1'
          }, {
            id: 10,
            label: '部门2'
          }]
        },
        {
          id: 4,
          label: '南通分公司',
          children: [{
            id: 9,
            label: '部门1'
          }, {
            id: 10,
            label: '部门2'
          }]
        },
        {
          id: 4,
          label: '镇江分公司',
          children: [{
            id: 9,
            label: '部门1'
          }, {
            id: 10,
            label: '部门2'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    handleClick(row) {
      console.log(row)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
