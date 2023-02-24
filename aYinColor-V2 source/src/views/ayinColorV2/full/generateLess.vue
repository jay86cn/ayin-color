
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
fullLevel=["9","8","7","6","5","4","3","2","1","0"],
lightDark=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19"],
grayList=[
  "@gy901:lighten(@bk,",
  "@gy902:lighten(@bk,",
  "@gy903:lighten(@bk,",
  "@gy904:lighten(@bk,",
  "@gy905:lighten(@bk,",
  "@gy906:lighten(@bk,",
  "@gy907:lighten(@bk,",
  "@gy908:lighten(@bk,",
  "@gy909:lighten(@bk,",
  "@gy910:lighten(@bk,",
  "@gy911:lighten(@bk,",
  "@gy912:lighten(@bk,",
  "@gy913:lighten(@bk,",
  "@gy914:lighten(@bk,",
  "@gy915:lighten(@bk,",
  "@gy916:lighten(@bk,",
  "@gy917:lighten(@bk,",
  "@gy918:lighten(@bk,",
  "@gy919:lighten(@bk,",

  "@gy801:lighten(@bk,",
  "@gy802:lighten(@bk,",
  "@gy803:lighten(@bk,",
  "@gy804:lighten(@bk,",
  "@gy805:lighten(@bk,",
  "@gy806:lighten(@bk,",
  "@gy807:lighten(@bk,",
  "@gy808:lighten(@bk,",
  "@gy809:lighten(@bk,",
  "@gy810:lighten(@bk,",
  "@gy811:lighten(@bk,",
  "@gy812:lighten(@bk,",
  "@gy813:lighten(@bk,",
  "@gy814:lighten(@bk,",
  "@gy815:lighten(@bk,",
  "@gy816:lighten(@bk,",
  "@gy817:lighten(@bk,",
  "@gy818:lighten(@bk,",
  "@gy819:lighten(@bk,",

  "@gy701:lighten(@bk,",
  "@gy702:lighten(@bk,",
  "@gy703:lighten(@bk,",
  "@gy704:lighten(@bk,",
  "@gy705:lighten(@bk,",
  "@gy706:lighten(@bk,",
  "@gy707:lighten(@bk,",
  "@gy708:lighten(@bk,",
  "@gy709:lighten(@bk,",
  "@gy710:lighten(@bk,",
  "@gy711:lighten(@bk,",
  "@gy712:lighten(@bk,",
  "@gy713:lighten(@bk,",
  "@gy714:lighten(@bk,",
  "@gy715:lighten(@bk,",
  "@gy716:lighten(@bk,",
  "@gy717:lighten(@bk,",
  "@gy718:lighten(@bk,",
  "@gy719:lighten(@bk,",

  "@gy601:lighten(@bk,",
  "@gy602:lighten(@bk,",
  "@gy603:lighten(@bk,",
  "@gy604:lighten(@bk,",
  "@gy605:lighten(@bk,",
  "@gy606:lighten(@bk,",
  "@gy607:lighten(@bk,",
  "@gy608:lighten(@bk,",
  "@gy609:lighten(@bk,",
  "@gy610:lighten(@bk,",
  "@gy611:lighten(@bk,",
  "@gy612:lighten(@bk,",
  "@gy613:lighten(@bk,",
  "@gy614:lighten(@bk,",
  "@gy615:lighten(@bk,",
  "@gy616:lighten(@bk,",
  "@gy617:lighten(@bk,",
  "@gy618:lighten(@bk,",
  "@gy619:lighten(@bk,",

  "@gy501:lighten(@bk,",
  "@gy502:lighten(@bk,",
  "@gy503:lighten(@bk,",
  "@gy504:lighten(@bk,",
  "@gy505:lighten(@bk,",
  "@gy506:lighten(@bk,",
  "@gy507:lighten(@bk,",
  "@gy508:lighten(@bk,",
  "@gy509:lighten(@bk,",
  "@gy510:lighten(@bk,",
  "@gy511:lighten(@bk,",
  "@gy512:lighten(@bk,",
  "@gy513:lighten(@bk,",
  "@gy514:lighten(@bk,",
  "@gy515:lighten(@bk,",
  "@gy516:lighten(@bk,",
  "@gy517:lighten(@bk,",
  "@gy518:lighten(@bk,",
  "@gy519:lighten(@bk,",

  "@gy401:lighten(@bk,",
  "@gy402:lighten(@bk,",
  "@gy403:lighten(@bk,",
  "@gy404:lighten(@bk,",
  "@gy405:lighten(@bk,",
  "@gy406:lighten(@bk,",
  "@gy407:lighten(@bk,",
  "@gy408:lighten(@bk,",
  "@gy409:lighten(@bk,",
  "@gy410:lighten(@bk,",
  "@gy411:lighten(@bk,",
  "@gy412:lighten(@bk,",
  "@gy413:lighten(@bk,",
  "@gy414:lighten(@bk,",
  "@gy415:lighten(@bk,",
  "@gy416:lighten(@bk,",
  "@gy417:lighten(@bk,",
  "@gy418:lighten(@bk,",
  "@gy419:lighten(@bk,",

  "@gy301:lighten(@bk,",
  "@gy302:lighten(@bk,",
  "@gy303:lighten(@bk,",
  "@gy304:lighten(@bk,",
  "@gy305:lighten(@bk,",
  "@gy306:lighten(@bk,",
  "@gy307:lighten(@bk,",
  "@gy308:lighten(@bk,",
  "@gy309:lighten(@bk,",
  "@gy310:lighten(@bk,",
  "@gy311:lighten(@bk,",
  "@gy312:lighten(@bk,",
  "@gy313:lighten(@bk,",
  "@gy314:lighten(@bk,",
  "@gy315:lighten(@bk,",
  "@gy316:lighten(@bk,",
  "@gy317:lighten(@bk,",
  "@gy318:lighten(@bk,",
  "@gy319:lighten(@bk,",

  "@gy201:lighten(@bk,",
  "@gy202:lighten(@bk,",
  "@gy203:lighten(@bk,",
  "@gy204:lighten(@bk,",
  "@gy205:lighten(@bk,",
  "@gy206:lighten(@bk,",
  "@gy207:lighten(@bk,",
  "@gy208:lighten(@bk,",
  "@gy209:lighten(@bk,",
  "@gy210:lighten(@bk,",
  "@gy211:lighten(@bk,",
  "@gy212:lighten(@bk,",
  "@gy213:lighten(@bk,",
  "@gy214:lighten(@bk,",
  "@gy215:lighten(@bk,",
  "@gy216:lighten(@bk,",
  "@gy217:lighten(@bk,",
  "@gy218:lighten(@bk,",
  "@gy219:lighten(@bk,",

  "@gy101:lighten(@bk,",
  "@gy102:lighten(@bk,",
  "@gy103:lighten(@bk,",
  "@gy104:lighten(@bk,",
  "@gy105:lighten(@bk,",
  "@gy106:lighten(@bk,",
  "@gy107:lighten(@bk,",
  "@gy108:lighten(@bk,",
  "@gy109:lighten(@bk,",
  "@gy110:lighten(@bk,",
  "@gy111:lighten(@bk,",
  "@gy112:lighten(@bk,",
  "@gy113:lighten(@bk,",
  "@gy114:lighten(@bk,",
  "@gy115:lighten(@bk,",
  "@gy116:lighten(@bk,",
  "@gy117:lighten(@bk,",
  "@gy118:lighten(@bk,",
  "@gy119:lighten(@bk,",

  "@gy000:lighten(@bk,",
  "@gy001:lighten(@bk,",
  "@gy002:lighten(@bk,",
  "@gy003:lighten(@bk,",
  "@gy004:lighten(@bk,",
  "@gy005:lighten(@bk,",
  "@gy006:lighten(@bk,",
  "@gy007:lighten(@bk,",
  "@gy008:lighten(@bk,",
  "@gy009:lighten(@bk,",
  "@gy010:lighten(@bk,",
  "@gy011:lighten(@bk,",
  "@gy012:lighten(@bk,",
  "@gy013:lighten(@bk,",
  "@gy014:lighten(@bk,",
  "@gy015:lighten(@bk,",
  "@gy016:lighten(@bk,",
  "@gy017:lighten(@bk,",
  "@gy018:lighten(@bk,",
  "@gy019:lighten(@bk,",
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
      {{item}}{{(100-(100/190)*index).toFixed(2)}}%); <br>
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



