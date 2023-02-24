<template>
  <div class="generate">
      <span v-for="(item,index) in colors" :key="index">
          <span v-for="(item2,index2) in normal" :key="index2">
            <span v-for="(item3,index3) in 9" :key="index3">
              .bg-{{item.short}}{{item2}}{{item3}}{background-color:@{{item.short}}{{item2}}{{item3}};}<br>
            </span>
            <br>
          </span>
          <br>
        </span>
    </div>
</template>

<script>
export default {
  data() {
    return {
      colors:[
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
      normal:["l","m","r","d"],
      variation:["hl","hm","hr","hd"]//variation
    }
  },
  methods:{
  },
  mounted(){

  }
}
</script>
<style lang="less">
</style>



