<style>
  header.head {
    height: 225px;
    background: url("../../source/homeBanner.jpg") no-repeat center;
  }
  header.head .titleBar {
    height: 30px;
    margin: 0 180px;
    display: flex;
    justify-content: space-between;
  }
  .titleBar .el-button.barBottun {
    height: 30px;
    padding: 0 20px;
    background-color: transparent;
    color: #ffffff;
    border: none;
  }
  .titleBar .el-button.barBottun:hover
  {
    background-color: #ffffff;
    background-color:rgba(255,255,255,0.2);
  }
</style>

<template>
  <div id="home" class="home">
    <header class="head">
      <div class="titleBar">
        <el-button class="barBottun">论坛</el-button>
        <div>
          <el-button class="barBottun">浏览记录</el-button>
          <el-button v-on:hover="personalCenter" class="barBottun">个人中心</el-button>
        </div>

      </div>
    </header>
    <div class="titleBar">titleBar</div>
  </div>
</template>


<script>
  import Vue from 'vue'
  export default Vue.extend({
    name: 'home',
    data () {
      return { visible: false }
    }
  })
</script>