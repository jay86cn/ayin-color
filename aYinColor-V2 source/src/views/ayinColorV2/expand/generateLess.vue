
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
  //{short:"gy",eng:"gray",chs:"灰"}
],
fullLevel=["A","B","C","D","E","F"],
lightDark=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19"],
grayList=[
  "@gyA01:lighten(@bk,",
  "@gyA02:lighten(@bk,",
  "@gyA03:lighten(@bk,",
  "@gyA04:lighten(@bk,",
  "@gyA05:lighten(@bk,",
  "@gyA06:lighten(@bk,",
  "@gyA07:lighten(@bk,",
  "@gyA08:lighten(@bk,",
  "@gyA09:lighten(@bk,",
  "@gyA10:lighten(@bk,",
  "@gyA11:lighten(@bk,",
  "@gyA12:lighten(@bk,",
  "@gyA13:lighten(@bk,",
  "@gyA14:lighten(@bk,",
  "@gyA15:lighten(@bk,",
  "@gyA16:lighten(@bk,",
  "@gyA17:lighten(@bk,",
  "@gyA18:lighten(@bk,",
  "@gyA19:lighten(@bk,",

  "@gyB01:lighten(@bk,",
  "@gyB02:lighten(@bk,",
  "@gyB03:lighten(@bk,",
  "@gyB04:lighten(@bk,",
  "@gyB05:lighten(@bk,",
  "@gyB06:lighten(@bk,",
  "@gyB07:lighten(@bk,",
  "@gyB08:lighten(@bk,",
  "@gyB09:lighten(@bk,",
  "@gyB10:lighten(@bk,",
  "@gyB11:lighten(@bk,",
  "@gyB12:lighten(@bk,",
  "@gyB13:lighten(@bk,",
  "@gyB14:lighten(@bk,",
  "@gyB15:lighten(@bk,",
  "@gyB16:lighten(@bk,",
  "@gyB17:lighten(@bk,",
  "@gyB18:lighten(@bk,",
  "@gyB19:lighten(@bk,",

  "@gyC01:lighten(@bk,",
  "@gyC02:lighten(@bk,",
  "@gyC03:lighten(@bk,",
  "@gyC04:lighten(@bk,",
  "@gyC05:lighten(@bk,",
  "@gyC06:lighten(@bk,",
  "@gyC07:lighten(@bk,",
  "@gyC08:lighten(@bk,",
  "@gyC09:lighten(@bk,",
  "@gyC10:lighten(@bk,",
  "@gyC11:lighten(@bk,",
  "@gyC12:lighten(@bk,",
  "@gyC13:lighten(@bk,",
  "@gyC14:lighten(@bk,",
  "@gyC15:lighten(@bk,",
  "@gyC16:lighten(@bk,",
  "@gyC17:lighten(@bk,",
  "@gyC18:lighten(@bk,",
  "@gyC19:lighten(@bk,",

  "@gyD01:lighten(@bk,",
  "@gyD02:lighten(@bk,",
  "@gyD03:lighten(@bk,",
  "@gyD04:lighten(@bk,",
  "@gyD05:lighten(@bk,",
  "@gyD06:lighten(@bk,",
  "@gyD07:lighten(@bk,",
  "@gyD08:lighten(@bk,",
  "@gyD09:lighten(@bk,",
  "@gyD10:lighten(@bk,",
  "@gyD11:lighten(@bk,",
  "@gyD12:lighten(@bk,",
  "@gyD13:lighten(@bk,",
  "@gyD14:lighten(@bk,",
  "@gyD15:lighten(@bk,",
  "@gyD16:lighten(@bk,",
  "@gyD17:lighten(@bk,",
  "@gyD18:lighten(@bk,",
  "@gyD19:lighten(@bk,",

  "@gyE01:lighten(@bk,",
  "@gyE02:lighten(@bk,",
  "@gyE03:lighten(@bk,",
  "@gyE04:lighten(@bk,",
  "@gyE05:lighten(@bk,",
  "@gyE06:lighten(@bk,",
  "@gyE07:lighten(@bk,",
  "@gyE08:lighten(@bk,",
  "@gyE09:lighten(@bk,",
  "@gyE10:lighten(@bk,",
  "@gyE11:lighten(@bk,",
  "@gyE12:lighten(@bk,",
  "@gyE13:lighten(@bk,",
  "@gyE14:lighten(@bk,",
  "@gyE15:lighten(@bk,",
  "@gyE16:lighten(@bk,",
  "@gyE17:lighten(@bk,",
  "@gyE18:lighten(@bk,",
  "@gyE19:lighten(@bk,",

  "@gyF01:lighten(@bk,",
  "@gyF02:lighten(@bk,",
  "@gyF03:lighten(@bk,",
  "@gyF04:lighten(@bk,",
  "@gyF05:lighten(@bk,",
  "@gyF06:lighten(@bk,",
  "@gyF07:lighten(@bk,",
  "@gyF08:lighten(@bk,",
  "@gyF09:lighten(@bk,",
  "@gyF10:lighten(@bk,",
  "@gyF11:lighten(@bk,",
  "@gyF12:lighten(@bk,",
  "@gyF13:lighten(@bk,",
  "@gyF14:lighten(@bk,",
  "@gyF15:lighten(@bk,",
  "@gyF16:lighten(@bk,",
  "@gyF17:lighten(@bk,",
  "@gyF18:lighten(@bk,",
  "@gyF19:lighten(@bk,",
]

</script>
<template>
  <div class="generate">
    <h1>Gray Color</h1>
    <span class="test" v-for="(item,index) in fullLevel" :key="'g0-'+index">
      <span v-for="(item2,index2) in lightDark" :key="'g1x-'+index2">
        "@gy{{item}}{{item2}}:lighten(@bk,",<br>
      </span>
      <br>
    </span>
    <hr>
    <span class="test" v-for="(item,index) in grayList" :key="'gx-'+index">
      {{item}}{{(100-(100/114)*index).toFixed(2)}}%); <br>
    </span>
    <hr>
    <span class="test" v-for="(item,index) in 28" :key="'g1-'+index">
      index{{index}}--{{90/28*(28-index)}}<br>
    </span>
    <hr>
    <span v-for="(item,index) in colors" :key="'g2-'+index">
        @{{item.short}}:spin(@basered,{{index*15}});<br>
    </span>
    <hr>
    <span v-for="(item,index) in colors" :key="'g3-'+index">
      <span v-for="(item2,index2) in fullLevel" :key="'g4-'+index2">
        @{{item.short}}{{item2}}:saturate(@{{item.short}},@saturate{{item2}});
        <span v-for="(item3,index3) in lightDark" :key="'g5-'+index3">
          <!--.bg-{{item.short}}{{item2}}{{item3}}{background-color:@{{item.short}}{{item2}}{{item3}};}<br>-->
        </span>
        <br>
      </span>
      <br>
    </span>
    <hr>
    <span v-for="(item,index) in colors" :key="'g6-'+index">
      <span v-for="(item2,index2) in fullLevel" :key="'g7-'+index2">
        <span v-for="(item3,index3) in lightDark" :key="'g8-'+index3">
          <span v-if="index3<10">
            @{{item.short}}{{item2}}{{item3}}:lighten(@{{item.short}}{{item2}},@level{{9-index3}});<br>
          </span>
          <span v-if="index3>9">
            @{{item.short}}{{item2}}{{item3}}:darken(@{{item.short}}{{item2}},@level{{index3-9}});<br>
          </span>
        </span>
        <br>
      </span>
    </span>
  </div>
</template>
<style lang="less">

</style>



