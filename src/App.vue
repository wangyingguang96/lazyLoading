<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <h1>没有使用懒加载:</h1>
    <img src="http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg" alt="" >
    <img src="http://pic2.52pk.com/files/160216/5329500_160443_1.png" alt="" >
    <img src="http://img.zcool.cn/community/0125fd5770dfa50000018c1b486f15.jpg@1280w_1l_2o_100sh.jpg" alt="" >
    <img src="http://img.zcool.cn/community/01690955496f930000019ae92f3a4e.jpg@2o.jpg" alt="" >
    <img src="http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg" alt="" >

    <h1>使用懒加载:</h1>
    <!-- 注意：v-lazy是一个指令，所以它的值不能直接写一个图片路径，而是需要一个变量 -->
    <img v-lazy="item" v-for="item in imgs" alt="" >
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){

    return {
      imgs:["http://pic.pptbz.com/201506/2015070581208537.JPG","http://pic.58pic.com/58pic/15/63/07/42Q58PIC42U_1024.jpg","http://pic.58pic.com/58pic/14/62/50/62558PICxm8_1024.jpg","http://txt25-2.book118.com/2017/0420/book99787/99786555.jpg","http://5b0988e595225.cdn.sohucs.com/images/20170906/58cdb24be3624488ad3e8d3d00b4585f.jpeg"]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
