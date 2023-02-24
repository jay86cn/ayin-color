
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
  
"gyA01:chroma(bk).set('hsl.l',",
"gyA02:chroma(bk).set('hsl.l',",
"gyA03:chroma(bk).set('hsl.l',",
"gyA04:chroma(bk).set('hsl.l',",
"gyA05:chroma(bk).set('hsl.l',",
"gyA06:chroma(bk).set('hsl.l',",
"gyA07:chroma(bk).set('hsl.l',",
"gyA08:chroma(bk).set('hsl.l',",
"gyA09:chroma(bk).set('hsl.l',",
"gyA10:chroma(bk).set('hsl.l',",
"gyA11:chroma(bk).set('hsl.l',",
"gyA12:chroma(bk).set('hsl.l',",
"gyA13:chroma(bk).set('hsl.l',",
"gyA14:chroma(bk).set('hsl.l',",
"gyA15:chroma(bk).set('hsl.l',",
"gyA16:chroma(bk).set('hsl.l',",
"gyA17:chroma(bk).set('hsl.l',",
"gyA18:chroma(bk).set('hsl.l',",
"gyA19:chroma(bk).set('hsl.l',",
"gyB01:chroma(bk).set('hsl.l',",
"gyB02:chroma(bk).set('hsl.l',",
"gyB03:chroma(bk).set('hsl.l',",
"gyB04:chroma(bk).set('hsl.l',",
"gyB05:chroma(bk).set('hsl.l',",
"gyB06:chroma(bk).set('hsl.l',",
"gyB07:chroma(bk).set('hsl.l',",
"gyB08:chroma(bk).set('hsl.l',",
"gyB09:chroma(bk).set('hsl.l',",
"gyB10:chroma(bk).set('hsl.l',",
"gyB11:chroma(bk).set('hsl.l',",
"gyB12:chroma(bk).set('hsl.l',",
"gyB13:chroma(bk).set('hsl.l',",
"gyB14:chroma(bk).set('hsl.l',",
"gyB15:chroma(bk).set('hsl.l',",
"gyB16:chroma(bk).set('hsl.l',",
"gyB17:chroma(bk).set('hsl.l',",
"gyB18:chroma(bk).set('hsl.l',",
"gyB19:chroma(bk).set('hsl.l',",
"gyC01:chroma(bk).set('hsl.l',",
"gyC02:chroma(bk).set('hsl.l',",
"gyC03:chroma(bk).set('hsl.l',",
"gyC04:chroma(bk).set('hsl.l',",
"gyC05:chroma(bk).set('hsl.l',",
"gyC06:chroma(bk).set('hsl.l',",
"gyC07:chroma(bk).set('hsl.l',",
"gyC08:chroma(bk).set('hsl.l',",
"gyC09:chroma(bk).set('hsl.l',",
"gyC10:chroma(bk).set('hsl.l',",
"gyC11:chroma(bk).set('hsl.l',",
"gyC12:chroma(bk).set('hsl.l',",
"gyC13:chroma(bk).set('hsl.l',",
"gyC14:chroma(bk).set('hsl.l',",
"gyC15:chroma(bk).set('hsl.l',",
"gyC16:chroma(bk).set('hsl.l',",
"gyC17:chroma(bk).set('hsl.l',",
"gyC18:chroma(bk).set('hsl.l',",
"gyC19:chroma(bk).set('hsl.l',",
"gyD01:chroma(bk).set('hsl.l',",
"gyD02:chroma(bk).set('hsl.l',",
"gyD03:chroma(bk).set('hsl.l',",
"gyD04:chroma(bk).set('hsl.l',",
"gyD05:chroma(bk).set('hsl.l',",
"gyD06:chroma(bk).set('hsl.l',",
"gyD07:chroma(bk).set('hsl.l',",
"gyD08:chroma(bk).set('hsl.l',",
"gyD09:chroma(bk).set('hsl.l',",
"gyD10:chroma(bk).set('hsl.l',",
"gyD11:chroma(bk).set('hsl.l',",
"gyD12:chroma(bk).set('hsl.l',",
"gyD13:chroma(bk).set('hsl.l',",
"gyD14:chroma(bk).set('hsl.l',",
"gyD15:chroma(bk).set('hsl.l',",
"gyD16:chroma(bk).set('hsl.l',",
"gyD17:chroma(bk).set('hsl.l',",
"gyD18:chroma(bk).set('hsl.l',",
"gyD19:chroma(bk).set('hsl.l',",
"gyE01:chroma(bk).set('hsl.l',",
"gyE02:chroma(bk).set('hsl.l',",
"gyE03:chroma(bk).set('hsl.l',",
"gyE04:chroma(bk).set('hsl.l',",
"gyE05:chroma(bk).set('hsl.l',",
"gyE06:chroma(bk).set('hsl.l',",
"gyE07:chroma(bk).set('hsl.l',",
"gyE08:chroma(bk).set('hsl.l',",
"gyE09:chroma(bk).set('hsl.l',",
"gyE10:chroma(bk).set('hsl.l',",
"gyE11:chroma(bk).set('hsl.l',",
"gyE12:chroma(bk).set('hsl.l',",
"gyE13:chroma(bk).set('hsl.l',",
"gyE14:chroma(bk).set('hsl.l',",
"gyE15:chroma(bk).set('hsl.l',",
"gyE16:chroma(bk).set('hsl.l',",
"gyE17:chroma(bk).set('hsl.l',",
"gyE18:chroma(bk).set('hsl.l',",
"gyE19:chroma(bk).set('hsl.l',",
"gyF01:chroma(bk).set('hsl.l',",
"gyF02:chroma(bk).set('hsl.l',",
"gyF03:chroma(bk).set('hsl.l',",
"gyF04:chroma(bk).set('hsl.l',",
"gyF05:chroma(bk).set('hsl.l',",
"gyF06:chroma(bk).set('hsl.l',",
"gyF07:chroma(bk).set('hsl.l',",
"gyF08:chroma(bk).set('hsl.l',",
"gyF09:chroma(bk).set('hsl.l',",
"gyF10:chroma(bk).set('hsl.l',",
"gyF11:chroma(bk).set('hsl.l',",
"gyF12:chroma(bk).set('hsl.l',",
"gyF13:chroma(bk).set('hsl.l',",
"gyF14:chroma(bk).set('hsl.l',",
"gyF15:chroma(bk).set('hsl.l',",
"gyF16:chroma(bk).set('hsl.l',",
"gyF17:chroma(bk).set('hsl.l',",
"gyF18:chroma(bk).set('hsl.l',",
"gyF19:chroma(bk).set('hsl.l',",
]
</script>
<template>
  <div class="generate">
    gy01:chroma(bk).set('hsl.l',.9754).hex(),<br><br>
    <span v-for="(item,index) in fullLevel">
        <span v-for="(item2,index2) in lightDark">
          "gy{{item+item2}}:chroma(bk).set('hsl.l',",<br>
        </span>
    </span>
    <hr>
    <span class="test" v-for="(item,index) in grayList" :key="'gx-'+index">
      {{item}} {{  ((100-(100/114)*index)/100).toFixed(3)}}).hex(), <br>
    </span>

    <hr>
    <span v-for="(item,index) in colors" :key="'g2-'+index">
        {{item.short}},<br>
    </span><br>
    <span v-for="(item,index) in colors" :key="'g3-'+index">
        <span v-for="(item2,index2) in fullLevel" :key="index2">
          {{item.short}}{{item2}},
          <span v-for="(item3,index3) in lightDark" :key="'g4-'+index3">
            <!--.bg-{{item.short}}{{item2}}{{item3}}{background-color:@{{item.short}}{{item2}}{{item3}};}<br>-->
          </span>
          <br>
        </span>
        <br>
      </span>
    <hr>
    <span v-for="(item,index) in colors" :key="'g5-'+index">
        {{item.short}}=chroma(basered).set("hsl.h",{{index*15}}).hex(),<br>
    </span>
    <hr>
    <span v-for="(item,index) in colors" :key="'g6-'+index">
        <span v-for="(item2,index2) in fullLevel" :key="'g7-'+index2">
          {{item.short}}{{item2}}=chroma({{item.short}}).set("hsl.s",$c{{item2}}).hex(),
          <span v-for="(item3,index3) in lightDark" :key="index3">
            <!--.bg-{{item.short}}{{item2}}{{item3}}{background-color:@{{item.short}}{{item2}}{{item3}};}<br>-->
          </span>
          <br>
        </span>
        <br>
      </span>
      <hr>
      <span v-for="(item,index) in colors" :key="'g8-'+index">
        <span v-for="(item2,index2) in fullLevel" :key="'g9-'+index2">
          <span v-for="(item3,index3) in lightDark" :key="'g0-'+index3">
            <span>
              {{item.short}}{{item2}}{{item3}}:chroma({{item.short}}{{item2}}).set("hsl.l",$level{{item3}}).hex(),<br>
            </span>
            
          </span>
          <br>
        </span>
      </span>
    </div>
</template>
<style lang="less">

</style>



