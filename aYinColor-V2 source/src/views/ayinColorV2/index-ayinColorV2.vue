
<script setup>
import colorViewF from "./full/colorView.vue"
import generateLessF from "./full/generateLess.vue"
import generateBGF from "./full/generateBG.vue"
import generateJsF from "./full/generateJs.vue"

import colorViewE from "./expand/colorView.vue"
import generateLessE from "./expand/generateLess.vue"
import generateBGE from "./expand/generateBG.vue"
import generateJsE from "./expand/generateJs.vue"
const current=ref(0);
const comps=[
  {name:"新ayin颜色表Expand",component:colorViewE},
  {name:"less生成器Expand",component:generateLessE},
  {name:"lessBG生成器Expand",component:generateBGE},
  {name:"js生成器Expand",component:generateJsE},
  {name:"新ayin颜色表Full",component:colorViewF},
  //{name:"less生成器Full",component:generateLessF},
  //{name:"lessBG生成器Full",component:generateBGF},
  //{name:"js生成器Full",component:generateJsF},
]
const navAct=(item,index)=>{
  current.value=index;
}
</script>
<template>
  <!-- <ul class="aYin-Color-Nav">
    <li v-for="(item,index) in comps" @click="navAct(item,index)">{{item.name}}</li>
  </ul> -->
  <el-radio-group v-model="current" size="large" class="aYin-Color-Nav">
    <el-radio-button v-for="(item,index) in comps" @click="navAct(item,index)" :label="index">{{item.name}}</el-radio-button>
  </el-radio-group>
  <component :is='comps[current].component'></component>
</template>
<style lang="less">
.aYin-Color-Nav{margin:40px 0 20px 40px;
  li{display:inline-block; margin:5px; padding:10px; .bgc(@gyr9); .fc(@wh); .bdr(5px);}
}
.generate{ margin:20px 40px; .bgc(var(--com-staBG)); padding:40px; .bd(var(--com-staBD)); .bdr;}
</style>



