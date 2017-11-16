<template>
  <div id="home" class="home">
    <header class="head">
      <div class="titleBar">
        <el-button @click="visible = true">按钮</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
          <p>欢迎使用 Element</p>
        </el-dialog>
        <el-button>论坛</el-button>
        <el-button>登录</el-button>
        <el-button type="primary">主要按钮</el-button>
      </div>
    </header>
    <div class="titleBar">titleBar</div>
  </div>
</template>

<style>
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; }
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
</style>

<script>
  import Vue from 'vue'
  export default Vue.extend({
    name: 'home',
    data () {
      return { visible: false }
    }
  })
</script>