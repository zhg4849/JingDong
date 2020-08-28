<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lp
 * @Date: 2020-08-22 11:13:49
 * @LastEditors: lp
 * @LastEditTime: 2020-08-28 10:28:27
 * @FilePath: \前端课程\vue\vue\jingdong\src\components\surp.vue
-->
<template>
  <main>
    <button @click="back()">返回</button>
    <h1>这是京喜</h1>
  </main>
</template>

<script>
  export default {
    methods: {
      back() {
        this.$router.go(-1)
      }
    },
  }

</script>
