
<script setup>
const colors=[
  {short:"re",eng:"red",chs:"红"},
  {short:"ro",eng:"red-orange",chs:"红橙"},
  {short:"or",eng:"orange",chs:"橙"},
  {short:"oy",eng:"orange-yellow",chs:"橙黄"},
  {short:"ye",eng:"yellow",chs:"黄"},
  {short:"yc",eng:"yellow",chs:"黄"},
  {short:"ch",eng:"chartreuse",chs:"草绿"},
  {short:"cg",eng:"chartreuse-green",chs:"草绿-绿"},
  {short:"gr",eng:"green",chs:"绿"},
  {short:"ga",eng:"green-aquamarine",chs:"绿-水绿"},
  {short:"aq",eng:"aquamarine",chs:"水绿"},
  {short:"ac",eng:"aquamarine-cyan",chs:"水绿-青"},
  {short:"cy",eng:"cyan",chs:"青"},
  {short:"cb",eng:"cyan-blue",chs:"青蓝"},
  {short:"bl",eng:"blue",chs:"蓝"},
  {short:"bi",eng:"blue-indigo",chs:"蓝靛"},
  {short:"in",eng:"indigo",chs:"靛"},
  {short:"ip",eng:"indigo-purple",chs:"靛紫"},
  {short:"pu",eng:"purple",chs:"紫"},
  {short:"pp",eng:"purple-pink",chs:"紫粉"},
  {short:"pi",eng:"pink",chs:"粉"},
  {short:"pv",eng:"pink-violetred",chs:"粉-洋红"},
  {short:"vi",eng:"violetred",chs:"紫红"},
  {short:"vr",eng:"violetred-red",chs:"紫红-红"},
  {short:"gy",eng:"gray",chs:"灰"}
],
fullLevel=["9","8","7","6","5","4","3","2","1","0"],
lightDark=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19"]

</script>
<template>
  <div class="generate">
    <span v-for="(item,index) in colors" :key="index">
        <span v-for="(item2,index2) in fullLevel" :key="index2">
          <span v-for="(item3,index3) in lightDark" :key="index3">
            .bg-{{item.short}}{{item2}}{{item3}}{.bgc(@{{item.short}}{{item2}}{{item3}});}<br>
          </span>
          <br>
        </span>
        <br>
      </span>
  </div>
</template>
<style lang="less">

</style>



