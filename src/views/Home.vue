<template>
  <div>
    <el-row>
      <el-col :span="8" style="padding-right: 10px">
        <el-card class="box-card">
          <div class="user">
            <img src="../assets/images/user.png" alt="" />
            <div class="user-info">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间:<span>2021-7-9</span></p>
            <p>上次登陆地点:<span>武汉</span></p>
          </div>
        </el-card>
        <el-card class="box-card" style="margin-top: 20px; height: 460px">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val"> </el-table-column>
            <!-- <el-table-column prop="name" label="品牌"> </el-table-column>
            <el-table-column prop="todayBuy" label="今日购买"> </el-table-column>
            <el-table-column prop="monthBuy" label="本月购买"> </el-table-column>
            <el-table-column prop="totalBuy" label="总购买"> </el-table-column> -->
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16" style="padding-left: 10px">
        <div class="num">
          <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
            <i class="icon" :class="`el-icon-${item.icon}`" :style="{ backgroundColor: item.color }"></i>
            <div class="detail">
              <p class="price">¥{{ item.value }}</p>
              <p class="desc">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
        <el-card style="height: 280px">
          <!-- 折线图 -->
        </el-card>
        <div class="graph">
          <el-card style="height: 260px"></el-card>
          <el-card style="height: 260px"></el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getData } from '../api/index.js'
export default {
  data() {
    return {
      tableData: [],
      tableLabel: {
        name: '品牌',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ]
    }
  },
  mounted() {
    getData().then(({ data }) => {
      const { tableData } = data.data
      this.tableData = tableData
    })
  }
}
</script>

<style scoped lang="less">
.user {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  margin-bottom: 20px;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }
  .user-info {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999999;
    }
  }
}
.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;
    span {
      color: #666;
      margin-left: 60px;
    }
  }
}
.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }
  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .detail {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .price {
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
    }
    .desc {
      font-size: 14px;
      color: #999999;
      text-align: center;
    }
  }
}
.graph {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .el-card {
    width: 48%;
  }
}
</style>
