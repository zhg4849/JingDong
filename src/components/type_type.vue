<template>
  <div class="right">
    <div class="right_title">
      <h4>{{t.title}}</h4>
    </div>
    <ul class="right_con">
      <li v-for="(item,index) in t.list">
        <img :src="item.src" alt="">
        <p>{{item.des}}</p>
      </li>
    </ul>
    <div class="right_title">
      <h4>{{t.title1}}</h4>
    </div>
    <ul class="right_con">
      <li v-for="(item,index) in t.list1">
        <img :src="item.src" alt="">
        <p>{{item.des}}</p>
      </li>
    </ul>
    <div class="right_title">
      <h4>{{t.title2}}</h4>
    </div>
    <ul class="right_con">
      <li v-for="(item,index) in t.list2">
        <img :src="item.src" alt="">
        <p>{{item.des}}</p>
      </li>
    </ul>
    <div class="right_title">
      <h4>{{t.title3}}</h4>
    </div>
    <ul class="right_con">
      <li v-for="(item,index) in t.list3">
        <img :src="item.src" alt="">
        <p>{{item.des}}</p>
      </li>
    </ul>
    <div class="right_title">
      <h4>{{t.title4}}</h4>
    </div>
    <ul class="right_con">
      <li v-for="(item,index) in t.list4">
        <img :src="item.src" alt="">
        <p>{{item.des}}</p>
      </li>
    </ul>
    <div class="right_title">
      <h4>{{t.title5}}</h4>
    </div>
    <ul class="right_con">
      <li v-for="(item,index) in t.list5">
        <img :src="item.src" alt="">
        <p>{{item.des}}</p>
      </li>
    </ul>
    <div class="right_title">
      <h4>{{t.title6}}</h4>
    </div>
    <ul class="right_con">
      <li v-for="(item,index) in t.list6">
        <img :src="item.src" alt="">
        <p>{{item.des}}</p>
      </li>
    </ul>
    <div class="right_title">
      <h4>{{t.title7}}</h4>
    </div>
    <ul class="right_con">
      <li v-for="(item,index) in t.list7">
        <img :src="item.src" alt="">
        <p>{{item.des}}</p>
      </li>
    </ul>
    <div class="right_title">
      <h4>{{t.title8}}</h4>
    </div>
    <ul class="right_con">
      <li v-for="(item,index) in t.list8">
        <img :src="item.src" alt="">
        <p>{{item.des}}</p>
      </li>
    </ul>
    <div class="right_title">
      <h4>{{t.title9}}</h4>
    </div>
    <ul class="right_con">
      <li v-for="(item,index) in t.list9">
        <img :src="item.src" alt="">
        <p>{{item.des}}</p>
      </li>
    </ul>
    <div class="right_title">
      <h4>{{t.title10}}</h4>
    </div>
    <ul class="right_con">
      <li v-for="(item,index) in t.list10">
        <img :src="item.src" alt="">
        <p>{{item.des}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['t'],
    data() {
      return {
        list: '',
        list1: '',
        list2: '',
        list3: '',
        list4: '',
        list5: '',
        list6: '',
        list7: '',
        list8: '',
      }
    },
  }

</script>

<style>

</style>
