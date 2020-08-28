<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lp
 * @Date: 2020-08-22 11:24:59
 * @LastEditors: lp
 * @LastEditTime: 2020-08-28 13:28:54
 * @FilePath: \前端课程\vue\vue\jingdong\src\components\type.vue
-->
<template>
  <main>
    <div class="type_header">
      <span class="left"><img src="../assets/images/type_a1.png" alt="" @click="back()"></span>
      <div class="center">
        <i></i>
        <input type="text" placeholder="苹果平板电脑" class="search_input">
      </div>
    </div>
    <div class="type_con">
      <ul class="left">
        <li v-for="(item,index) in list" @click="change(item,index)" :class="{current:num==index}">
          {{item.typeName}}</li>
      </ul>
      <main>
        <component :is="msg" :r="re" :t="ty"></component>
      </main>
    </div>
  </main>
</template>

<script>
  import type_recommend from './type_recommend.vue';
  import type_type from './type_type.vue';

  export default {
    components: {
      't-recommend': type_recommend,
      't-type': type_type
    },
    mounted() {
      this.change(this.list[0], 0)
    },
    data() {
      return {
        num: 0,
        list: [{
            typeName: '热门推荐',
            id: 't-recommend'
          },
          {
            typeName: '手机数码',
            id: 't-type'
          },
          {
            typeName: '电脑办公',
            id: 't-type'
          },
          {
            typeName: '家用电器',
            id: 't-type'
          },
          {
            typeName: '计生情趣',
            id: 't-type'
          },
          {
            typeName: '美妆护肤',
            id: 't-type'
          },
          {
            typeName: '个人清洁',
            id: 't-type'
          },
          {
            typeName: '汽车生活',
            id: 't-type'
          },
          {
            typeName: '京东超市',
            id: 't-type'
          },
          {
            typeName: '男装',
            id: 't-type'
          },
          {
            typeName: '男鞋',
            id: 't-type'
          },
          {
            typeName: '女装',
            id: 't-type'
          },
          {
            typeName: '女鞋',
            id: 't-type'
          },
          {
            typeName: '母婴童装',
            id: 't-type'
          },
          {
            typeName: '图书音像'
          },
          {
            typeName: '运动户外'
          },
          {
            typeName: '内衣配饰'
          },
          {
            typeName: '食品生鲜'
          },
          {
            typeName: '酒水饮料'
          },
          {
            typeName: '家具家装'
          },
          {
            typeName: '家具厨具'
          },
          {
            typeName: '箱包手袋'
          },
          {
            typeName: '钟表珠宝'
          },
          {
            typeName: '玩具乐器'
          },
          {
            typeName: '医药保健'
          },
          {
            typeName: '宠物生活'
          },
          {
            typeName: '礼品鲜花'
          },
          {
            typeName: '农资绿植'
          },
          {
            typeName: '生活旅行'
          },
          {
            typeName: '奢侈品'
          },
          {
            typeName: '京东国际'
          },
          {
            typeName: '艺术邮币'
          },
          {
            typeName: '二手商品'
          },
          {
            typeName: '特产馆'
          },
          {
            typeName: '京东金融'
          },
          {
            typeName: '国际名牌'
          },
          {
            typeName: '拍卖'
          },
          {
            typeName: '房产'
          },
          {
            typeName: '工业品'
          },
        ],
        msg: 't-recommend',
        re: '',
        ty: ''

      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      change(a, b) {
        // 修改num值，控制类
        this.num = b;
        // 修改msg值，控制占位符
        this.msg = a.id;

        if (a.typeName == '热门推荐') {
          this.re = {
            // title:'热销推荐',
            list: [{
                src: './src/assets/images/type_c1.png',
                des: '空调'
              },
              {
                src: './src/assets/images/type_c2.png',
                des: '冰箱'
              },
              {
                src: './src/assets/images/type_c3.png',
                des: '电脑'
              },
              {
                src: './src/assets/images/type_c4.png',
                des: '手机'
              },
              {
                src: './src/assets/images/type_c5.png',
                des: '全面屏手机'
              },
              {
                src: './src/assets/images/type_c6.png',
                des: '游戏手机'
              },
              {
                src: './src/assets/images/type_c7.png',
                des: '保健品'
              },
              {
                src: './src/assets/images/type_c8.png',
                des: '口罩'
              },
              {
                src: './src/assets/images/type_c9.png',
                des: '驱蚊用品'
              },
              {
                src: './src/assets/images/type_c10.png',
                des: '电磁炉'
              },
              {
                src: './src/assets/images/type_c11.png',
                des: '电热水壶'
              },
              {
                src: './src/assets/images/type_c12.png',
                des: '数据线'
              },
              {
                src: './src/assets/images/type_c13.png',
                des: '图书'
              },
              {
                src: './src/assets/images/type_c14.png',
                des: '美妆护肤'
              },
              {
                src: './src/assets/images/type_c15.png',
                des: '除菌液'
              },
              {
                src: './src/assets/images/type_c16.png',
                des: '休闲零食'
              },
              {
                src: './src/assets/images/type_c17.png',
                des: '充电宝'
              },
              {
                src: './src/assets/images/type_c18.png',
                des: '体温计'
              },
              {
                src: './src/assets/images/type_c19.png',
                des: '投影仪'
              },
              {
                src: './src/assets/images/type_c20.png',
                des: '游戏机'
              }
            ]
          }
        } else if (a.typeName == '手机数码') {
          this.ty = {
            title: '智能设备',
            list: [{
                src: './src/assets/images/type_d1.png',
                des: '小米'
              },
              {
                src: './src/assets/images/type_d2.png',
                des: '华为'
              },
              {
                src: './src/assets/images/type_d3.png',
                des: '荣耀'
              },
              {
                src: './src/assets/images/type_d4.png',
                des: 'iPhone'
              },
              {
                src: './src/assets/images/type_d5.png',
                des: 'vivo'
              },
              {
                src: './src/assets/images/type_d6.png',
                des: 'OPPO'
              },
              {
                src: './src/assets/images/type_d7.png',
                des: '魅族'
              },
              {
                src: './src/assets/images/type_d8.png',
                des: '三星'
              },
              {
                src: './src/assets/images/type_d9.png',
                des: '一加'
              },
              {
                src: './src/assets/images/type_d10.png',
                des: '360手机'
              },
              {
                src: './src/assets/images/type_d11.png',
                des: '锤子手机'
              },
              {
                src: './src/assets/images/type_d12.png',
                des: '努比亚'
              }
            ],
            title1: '手机通讯',
            list1: [{
                src: './src/assets/images/type_d13.png',
                des: '老人机'
              },
              {
                src: './src/assets/images/type_d14.png',
                des: '手机'
              },
              {
                src: './src/assets/images/type_d15.png',
                des: '全面屏手机'
              },
              {
                src: './src/assets/images/type_d16.png',
                des: '游戏手机'
              },
              {
                src: './src/assets/images/type_d17.png',
                des: '拍照手机'
              },
              {
                src: './src/assets/images/type_d18.png',
                des: '对讲机'
              },
              {
                src: './src/assets/images/type_d19.png',
                des: '东京回收'
              },
              {
                src: './src/assets/images/type_d20.png',
                des: '女性手机'
              },
              {
                src: './src/assets/images/type_d21.png',
                des: '京东维修'
              }
            ],
            title2: '运营商',
            list2: [{
                src: './src/assets/images/type_d22.png',
                des: '合约机'
              },
              {
                src: './src/assets/images/type_d23.png',
                des: '选号卡'
              },
              {
                src: './src/assets/images/type_d24.png',
                des: '办套餐'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              }
            ],
            title3: '手机配件',
            list3: [{
                src: './src/assets/images/type_d26.png',
                des: '数据线'
              },
              {
                src: './src/assets/images/type_d27.png',
                des: '手机存储卡'
              },
              {
                src: './src/assets/images/type_d28.png',
                des: '充电宝'
              },
              {
                src: './src/assets/images/type_d29.png',
                des: '手机贴膜'
              },
              {
                src: './src/assets/images/type_d30.png',
                des: '手机耳机'
              },
              {
                src: './src/assets/images/type_d31.png',
                des: '蓝牙耳机'
              },
              {
                src: './src/assets/images/type_d32.png',
                des: '手机支架'
              },
              {
                src: './src/assets/images/type_d33.png',
                des: '手机饰品'
              },
              {
                src: './src/assets/images/type_d34.png',
                des: '车载配件'
              },
              {
                src: './src/assets/images/type_d35.png',
                des: '充电器'
              },
              {
                src: './src/assets/images/type_d36.png',
                des: '手机电池'
              },
              {
                src: './src/assets/images/type_d37.png',
                des: '创意配件'
              },
              {
                src: './src/assets/images/type_d38.png',
                des: '拍照配件'
              },
              {
                src: './src/assets/images/type_d39.png',
                des: '苹果周边'
              },
              {
                src: './src/assets/images/type_d40.png',
                des: '手机壳/保护套'
              },
              {
                src: './src/assets/images/type_d41.png',
                des: '无线充电器'
              },
              {
                src: './src/assets/images/type_d42.png',
                des: '背夹充电宝'
              },
              {
                src: './src/assets/images/type_d43.png',
                des: '手机转接'
              }
            ],
            title4: '摄影摄像',
            list4: [{
                src: './src/assets/images/type_d44.png',
                des: '单反相机'
              },
              {
                src: './src/assets/images/type_d45.png',
                des: '数码相机'
              },
              {
                src: './src/assets/images/type_d46.png',
                des: '拍立得'
              },
              {
                src: './src/assets/images/type_d47.png',
                des: '户外器材'
              },
              {
                src: './src/assets/images/type_d48.png',
                des: '单电/微单相机'
              },
              {
                src: './src/assets/images/type_d49.png',
                des: '摄像机'
              },
              {
                src: './src/assets/images/type_d50.png',
                des: '运动相机'
              },
              {
                src: './src/assets/images/type_d51.png',
                des: '镜头'
              },
              {
                src: './src/assets/images/type_d52.png',
                des: '冲印服务'
              }
            ],
            title5: '影音娱乐',
            list5: [{
                src: './src/assets/images/type_d53.png',
                des: '便携/无线音箱'
              },
              {
                src: './src/assets/images/type_d54.png',
                des: '音箱/音响'
              },
              {
                src: './src/assets/images/type_d55.png',
                des: 'MP3/MP4'
              },
              {
                src: './src/assets/images/type_d56.png',
                des: '耳机/耳麦'
              },
              {
                src: './src/assets/images/type_d57.png',
                des: '麦克风'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
            ],
            title6: '数码配件',
            list6: [{
                src: './src/assets/images/type_d59.png',
                des: '存储卡'
              },
              {
                src: './src/assets/images/type_d60.png',
                des: '三脚架'
              },
              {
                src: './src/assets/images/type_d61.png',
                des: '数码支架'
              },
              {
                src: './src/assets/images/type_d62.png',
                des: '读卡器'
              },
              {
                src: './src/assets/images/type_d63.png',
                des: '滤镜'
              },
              {
                src: './src/assets/images/type_d64.png',
                des: '相机清洁/贴膜'
              },
              {
                src: './src/assets/images/type_d65.png',
                des: '相机包'
              },
              {
                src: './src/assets/images/type_d66.png',
                des: '闪光灯/手柄'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              }
            ],
            title7: '智能设备',
            list7: [{
                src: './src/assets/images/type_d68.png',
                des: '智能手环'
              },
              {
                src: './src/assets/images/type_d69.png',
                des: '智能手表'
              },
              {
                src: './src/assets/images/type_d70.png',
                des: '智能家居'
              },
              {
                src: './src/assets/images/type_d71.png',
                des: '智能机器人'
              },
              {
                src: './src/assets/images/type_d72.png',
                des: '体感车'
              },
              {
                src: './src/assets/images/type_d73.png',
                des: '无人机'
              },
              {
                src: './src/assets/images/type_d74.png',
                des: '其他配件'
              },
              {
                src: './src/assets/images/type_d75.png',
                des: 'VR眼镜'
              },
              {
                src: './src/assets/images/type_d76.png',
                des: '智能配饰'
              }
            ],
            title8: '电子教育',
            list8: [{
                src: './src/assets/images/type_d77.png',
                des: '学生平板'
              },
              {
                src: './src/assets/images/type_d78.png',
                des: '电纸书'
              },
              {
                src: './src/assets/images/type_d79.png',
                des: '录音笔'
              },
              {
                src: './src/assets/images/type_d80.png',
                des: '早教益智'
              },
              {
                src: './src/assets/images/type_d81.png',
                des: '点读机/笔'
              },
              {
                src: './src/assets/images/type_d82.png',
                des: '复读机'
              }
            ]
          }
        } else if (a.typeName == '电脑办公') {
          this.ty = {
            title: '热卖分类',
            list: [{
                src: './src/assets/images/type_e1.png',
                des: '轻薄本'
              },
              {
                src: './src/assets/images/type_e1.png',
                des: '游戏本'
              },
              {
                src: './src/assets/images/type_e1.png',
                des: '机械键盘'
              },
              {
                src: './src/assets/images/type_e1.png',
                des: '组装电脑'
              },
              {
                src: './src/assets/images/type_e1.png',
                des: '移动硬盘'
              },
              {
                src: './src/assets/images/type_e1.png',
                des: '显卡'
              },
              {
                src: './src/assets/images/type_e1.png',
                des: '游戏台式机'
              },
              {
                src: './src/assets/images/type_e1.png',
                des: '家用打印机'
              },
              {
                src: './src/assets/images/type_e1.png',
                des: '吃鸡装备'
              },
              {
                src: './src/assets/images/type_e1.png',
                des: '曲屏显示器'
              },
              {
                src: './src/assets/images/type_e1.png',
                des: '投影机'
              },
              {
                src: './src/assets/images/type_e1.png',
                des: '日本文具'
              }
            ],
            title1: '电脑整机',
            list1: [{
                src: './src/assets/images/type_e13.png',
                des: '笔记本'
              },
              {
                src: './src/assets/images/type_e13.png',
                des: '平板电脑'
              },
              {
                src: './src/assets/images/type_e13.png',
                des: '一体机'
              },
              {
                src: './src/assets/images/type_e13.png',
                des: '台式机'
              },
              {
                src: './src/assets/images/type_e13.png',
                des: '笔记本配件'
              },
              {
                src: './src/assets/images/type_e13.png',
                des: '游戏台式机'
              },
              {
                src: './src/assets/images/type_e13.png',
                des: '商用台式机'
              },
              {
                src: './src/assets/images/type_e13.png',
                des: '游戏本'
              },
              {
                src: './src/assets/images/type_e13.png',
                des: '平板电脑配件'
              },
              {
                src: './src/assets/images/type_e13.png',
                des: '轻薄本'
              },
              {
                src: './src/assets/images/type_e13.png',
                des: '二台一平板'
              },
              {
                src: './src/assets/images/type_e13.png',
                des: '服务器/工作站'
              }
            ],
            title2: '外设产品',
            list2: [{
                src: './src/assets/images/type_d22.png',
                des: '合约机'
              },
              {
                src: './src/assets/images/type_d23.png',
                des: '选号卡'
              },
              {
                src: './src/assets/images/type_d24.png',
                des: '办套餐'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
            ],
            title3: '电脑配件',
            list3: [{
                src: './src/assets/images/type_d26.png',
                des: '数据线'
              },
              {
                src: './src/assets/images/type_d27.png',
                des: '手机存储卡'
              },
              {
                src: './src/assets/images/type_d28.png',
                des: '充电宝'
              },
              {
                src: './src/assets/images/type_d29.png',
                des: '手机贴膜'
              },
              {
                src: './src/assets/images/type_d30.png',
                des: '手机耳机'
              },
              {
                src: './src/assets/images/type_d31.png',
                des: '蓝牙耳机'
              },
              {
                src: './src/assets/images/type_d32.png',
                des: '手机支架'
              },
              {
                src: './src/assets/images/type_d33.png',
                des: '手机饰品'
              },
              {
                src: './src/assets/images/type_d34.png',
                des: '车载配件'
              },
              {
                src: './src/assets/images/type_d35.png',
                des: '充电器'
              },
              {
                src: './src/assets/images/type_d36.png',
                des: '手机电池'
              },
              {
                src: './src/assets/images/type_d37.png',
                des: '创意配件'
              }
            ],
            title4: '网络产品',
            list4: [{
                src: './src/assets/images/type_d44.png',
                des: '单反相机'
              },
              {
                src: './src/assets/images/type_d45.png',
                des: '数码相机'
              },
              {
                src: './src/assets/images/type_d46.png',
                des: '拍立得'
              },
              {
                src: './src/assets/images/type_d47.png',
                des: '户外器材'
              },
              {
                src: './src/assets/images/type_d48.png',
                des: '单电/微单相机'
              },
              {
                src: './src/assets/images/type_d49.png',
                des: '摄像机'
              }
            ],
            title5: '办公设备',
            list5: [{
                src: './src/assets/images/type_d53.png',
                des: '便携/无线音箱'
              },
              {
                src: './src/assets/images/type_d54.png',
                des: '音箱/音响'
              },
              {
                src: './src/assets/images/type_d55.png',
                des: 'MP3/MP4'
              },
              {
                src: './src/assets/images/type_d56.png',
                des: '耳机/耳麦'
              },
              {
                src: './src/assets/images/type_d57.png',
                des: '麦克风'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
            ],
            title6: '文具耗材',
            list6: [{
                src: './src/assets/images/type_d59.png',
                des: '存储卡'
              },
              {
                src: './src/assets/images/type_d60.png',
                des: '三脚架'
              },
              {
                src: './src/assets/images/type_d61.png',
                des: '数码支架'
              },
              {
                src: './src/assets/images/type_d62.png',
                des: '读卡器'
              },
              {
                src: './src/assets/images/type_d63.png',
                des: '滤镜'
              },
              {
                src: './src/assets/images/type_d64.png',
                des: '相机清洁/贴膜'
              },
              {
                src: './src/assets/images/type_d65.png',
                des: '相机包'
              },
              {
                src: './src/assets/images/type_d66.png',
                des: '闪光灯/手柄'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              }
            ],
            title7: '游戏设备',
            list7: [{
                src: './src/assets/images/type_d68.png',
                des: '智能手环'
              },
              {
                src: './src/assets/images/type_d69.png',
                des: '智能手表'
              },
              {
                src: './src/assets/images/type_d70.png',
                des: '智能家居'
              }
            ]
          }
        } else if (a.typeName == '家用电器') {
          this.ty = {
            title: '厨房小电',
            list: [{
                src: './src/assets/images/type_f1.png',
                des: '电压力锅'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '电水壶/热水器'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '电饭煲'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '电磁炉'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '微波炉'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '电饼铛'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '豆浆机'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '多用途锅'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '料理机'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '榨汁机/原汁机'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '电烤箱'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '养生壶/煎药壶'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '电炖锅'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '电烧烤炉'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '面包机'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '咖啡机'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '煮蛋器'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '电热饭盒'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '面条机'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '酸奶机'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '空气炸锅'
              },
              {
                src: './src/assets/images/type_f1.png',
                des: '蔬菜解毒机'
              }
            ],
            title1: '个户健康',
            list1: [{
                src: './src/assets/images/type_d13.png',
                des: '老人机'
              },
              {
                src: './src/assets/images/type_d14.png',
                des: '手机'
              },
              {
                src: './src/assets/images/type_d15.png',
                des: '全面屏手机'
              },
              {
                src: './src/assets/images/type_d16.png',
                des: '游戏手机'
              },
              {
                src: './src/assets/images/type_d17.png',
                des: '拍照手机'
              },
              {
                src: './src/assets/images/type_d18.png',
                des: '对讲机'
              },
              {
                src: './src/assets/images/type_d19.png',
                des: '东京回收'
              },
              {
                src: './src/assets/images/type_d20.png',
                des: '女性手机'
              },
              {
                src: './src/assets/images/type_d21.png',
                des: '京东维修'
              },
              {
                src: './src/assets/images/type_d21.png',
                des: '京东维修'
              },
              {
                src: './src/assets/images/type_d21.png',
                des: '京东维修'
              },
              {
                src: './src/assets/images/type_d21.png',
                des: '京东维修'
              }
            ],
            title2: '冰箱',
            list2: [{
                src: './src/assets/images/type_d22.png',
                des: '合约机'
              },
              {
                src: './src/assets/images/type_d23.png',
                des: '选号卡'
              },
              {
                src: './src/assets/images/type_d24.png',
                des: '办套餐'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              },
              {
                src: './src/assets/images/type_d25.png',
                des: '京东网厅'
              }
            ],
            title3: '洗衣机',
            list3: [{
                src: './src/assets/images/type_d26.png',
                des: '数据线'
              },
              {
                src: './src/assets/images/type_d27.png',
                des: '手机存储卡'
              },
              {
                src: './src/assets/images/type_d28.png',
                des: '充电宝'
              },
              {
                src: './src/assets/images/type_d29.png',
                des: '手机贴膜'
              },
              {
                src: './src/assets/images/type_d30.png',
                des: '手机耳机'
              },
              {
                src: './src/assets/images/type_d31.png',
                des: '蓝牙耳机'
              }
            ],
            title4: '厨卫大电',
            list4: [{
                src: './src/assets/images/type_d44.png',
                des: '单反相机'
              },
              {
                src: './src/assets/images/type_d45.png',
                des: '数码相机'
              },
              {
                src: './src/assets/images/type_d46.png',
                des: '拍立得'
              },
              {
                src: './src/assets/images/type_d47.png',
                des: '户外器材'
              },
              {
                src: './src/assets/images/type_d48.png',
                des: '单电/微单相机'
              },
              {
                src: './src/assets/images/type_d49.png',
                des: '摄像机'
              },
              {
                src: './src/assets/images/type_d50.png',
                des: '运动相机'
              }
            ],
            title5: '电视',
            list5: [{
                src: './src/assets/images/type_d53.png',
                des: '便携/无线音箱'
              },
              {
                src: './src/assets/images/type_d54.png',
                des: '音箱/音响'
              },
              {
                src: './src/assets/images/type_d55.png',
                des: 'MP3/MP4'
              },
              {
                src: './src/assets/images/type_d56.png',
                des: '耳机/耳麦'
              },
              {
                src: './src/assets/images/type_d57.png',
                des: '麦克风'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              },
              {
                src: './src/assets/images/type_d58.png',
                des: '专业音频'
              }
            ],
            title6: '生活电器',
            list6: [{
                src: './src/assets/images/type_d59.png',
                des: '存储卡'
              },
              {
                src: './src/assets/images/type_d60.png',
                des: '三脚架'
              },
              {
                src: './src/assets/images/type_d61.png',
                des: '数码支架'
              },
              {
                src: './src/assets/images/type_d62.png',
                des: '读卡器'
              },
              {
                src: './src/assets/images/type_d63.png',
                des: '滤镜'
              },
              {
                src: './src/assets/images/type_d64.png',
                des: '相机清洁/贴膜'
              },
              {
                src: './src/assets/images/type_d65.png',
                des: '相机包'
              },
              {
                src: './src/assets/images/type_d66.png',
                des: '闪光灯/手柄'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
              {
                src: './src/assets/images/type_d67.png',
                des: '电池/充电器'
              },
            ],
            title7: '空调',
            list7: [{
                src: './src/assets/images/type_d68.png',
                des: '智能手环'
              },
              {
                src: './src/assets/images/type_d69.png',
                des: '智能手表'
              },
              {
                src: './src/assets/images/type_d70.png',
                des: '智能家居'
              },
              {
                src: './src/assets/images/type_d71.png',
                des: '智能机器人'
              }
            ],
            title8: '家庭影音',
            list8: [{
                src: './src/assets/images/type_d68.png',
                des: '智能手环'
              },
              {
                src: './src/assets/images/type_d69.png',
                des: '智能手表'
              },
              {
                src: './src/assets/images/type_d70.png',
                des: '智能家居'
              },
              {
                src: './src/assets/images/type_d71.png',
                des: '智能机器人'
              },
              {
                src: './src/assets/images/type_d72.png',
                des: '体感车'
              },
              {
                src: './src/assets/images/type_d73.png',
                des: '无人机'
              }
            ],
            title9: '推荐品牌',
            list9: [{
                src: './src/assets/images/type_d68.png',
                des: '智能手环'
              },
              {
                src: './src/assets/images/type_d69.png',
                des: '智能手表'
              },
              {
                src: './src/assets/images/type_d70.png',
                des: '智能家居'
              }
            ],
            title10: '进口电器',
            list10: [{
              src: './src/assets/images/type_d68.png',
              des: '智能手环'
            }]
          }
        }
      }
    }
  }

</script>

<style scoped>
  .type_header {
    width: 100%;
    height: 42px;
    border: 2px solid #f6f6f6;
  }

  .type_con .left .current {
    color: #e93b3d;
    background-color: #fff;
  }

</style>

<style>
  .type_header .left {
    width: 10%;
    line-height: 45px;
    text-align: center;
    float: left;
  }

  .type_header .left img {
    width: 20px;
    margin-top: 12px;
  }

  .type_header .center {
    width: 80%;
    line-height: 40px;
    float: left;
    overflow: hidden;
    position: relative;
  }

  .type_header .center .search_input {
    width: 100%;
    height: 30px;
    border-radius: 15px;
    font-size: 12px;
    box-sizing: border-box;
    padding-left: 45px;
    margin-top: 6px;
    border: none;
    background-color: #f7f7f7;
  }

  .type_header .center i {
    position: absolute;
    width: 30px;
    height: 30px;
    background: url(../assets/images/jd-sprites.png) no-repeat -166px 0px;
    transform: scale(0.5);
    left: 10px;
    top: 7px;
  }

  .type_con {
    width: 100%;
    overflow: auto;
  }

  .type_con .left {
    width: 21%;
    height: calc(100vh - 100px);
    overflow: auto;
    float: left;
    background-color: #fafafa;
  }

  .type_con .left li {
    height: 46px;
    line-height: 46px;
    font-size: 14px;
    color: #333;
    text-align: center;
  }


  .type_con .right {
    width: 79%;
    height: calc(100vh - 100px);
    overflow: auto;
  }

  .type_con .right .right_title {
    width: 92%;
    height: 30px;
    margin: 15px auto;
  }

  .type_con .right h4 {
    font-size: 14px;
    color: #333;
    font-weight: bold;
    float: left;
  }

  .type_con .right .type_b1 {
    width: 12px;
    float: right;
  }

  .type_con .right .type_b2 {
    width: 12px;
    margin-left: 4px;
    float: right;
  }

  .type_con .right span {
    font-size: 10px;
    color: #868686;
    margin-left: 4px;
    float: right;
  }

  .type_con .right .right_con {
    width: 92%;
    margin: 0px auto;
    overflow: auto;
  }

  .type_con .right li {
    width: 33.33%;
    float: left;
    text-align: center;
  }

  .type_con .right img {
    width: 70%;
  }

  .type_con .right .right_con p {
    color: #333;
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 20px;
  }

</style>
