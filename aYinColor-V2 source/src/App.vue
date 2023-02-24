<script setup>
const store=useStore();
const router = useRouter();
const route = useRoute();
const current=ref(0);
const comps=[
  {name:"aYinColorV1",path:"/ayinColor"},
  {name:"aYinColorV2",path:"/ayinColorV2"},
  {name:"aYinColor调色盘",path:"/ayinColorMatch"},
]
onMounted(()=>{
})
const navAct=(item,index)=>{
  router.push(item.path)
}
</script>
<template>
  <div class="intor">
    <el-radio-group v-model="current" size="large">
      <el-radio-button v-for="(item,index) in comps" @click="navAct(item,index)" :label="index">{{item.name}}</el-radio-button>
    </el-radio-group>
    <router-view></router-view>
  </div>
</template>
<style lang="less">
.el-radio-group{margin:40px 0 20px 40px;}
</style>
