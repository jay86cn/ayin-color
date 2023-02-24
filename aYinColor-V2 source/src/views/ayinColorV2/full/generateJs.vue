
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
  "gy901:chroma(bk).set('hsl.l',",
  "gy902:chroma(bk).set('hsl.l',",
  "gy903:chroma(bk).set('hsl.l',",
  "gy904:chroma(bk).set('hsl.l',",
  "gy905:chroma(bk).set('hsl.l',",
  "gy906:chroma(bk).set('hsl.l',",
  "gy907:chroma(bk).set('hsl.l',",
  "gy908:chroma(bk).set('hsl.l',",
  "gy909:chroma(bk).set('hsl.l',",
  "gy910:chroma(bk).set('hsl.l',",
  "gy911:chroma(bk).set('hsl.l',",
  "gy912:chroma(bk).set('hsl.l',",
  "gy913:chroma(bk).set('hsl.l',",
  "gy914:chroma(bk).set('hsl.l',",
  "gy915:chroma(bk).set('hsl.l',",
  "gy916:chroma(bk).set('hsl.l',",
  "gy917:chroma(bk).set('hsl.l',",
  "gy918:chroma(bk).set('hsl.l',",
  "gy919:chroma(bk).set('hsl.l',",
  
  "gy801:chroma(bk).set('hsl.l',",
  "gy802:chroma(bk).set('hsl.l',",
  "gy803:chroma(bk).set('hsl.l',",
  "gy804:chroma(bk).set('hsl.l',",
  "gy805:chroma(bk).set('hsl.l',",
  "gy806:chroma(bk).set('hsl.l',",
  "gy807:chroma(bk).set('hsl.l',",
  "gy808:chroma(bk).set('hsl.l',",
  "gy809:chroma(bk).set('hsl.l',",
  "gy810:chroma(bk).set('hsl.l',",
  "gy811:chroma(bk).set('hsl.l',",
  "gy812:chroma(bk).set('hsl.l',",
  "gy813:chroma(bk).set('hsl.l',",
  "gy814:chroma(bk).set('hsl.l',",
  "gy815:chroma(bk).set('hsl.l',",
  "gy816:chroma(bk).set('hsl.l',",
  "gy817:chroma(bk).set('hsl.l',",
  "gy818:chroma(bk).set('hsl.l',",
  "gy819:chroma(bk).set('hsl.l',",
  
  "gy701:chroma(bk).set('hsl.l',",
  "gy702:chroma(bk).set('hsl.l',",
  "gy703:chroma(bk).set('hsl.l',",
  "gy704:chroma(bk).set('hsl.l',",
  "gy705:chroma(bk).set('hsl.l',",
  "gy706:chroma(bk).set('hsl.l',",
  "gy707:chroma(bk).set('hsl.l',",
  "gy708:chroma(bk).set('hsl.l',",
  "gy709:chroma(bk).set('hsl.l',",
  "gy710:chroma(bk).set('hsl.l',",
  "gy711:chroma(bk).set('hsl.l',",
  "gy712:chroma(bk).set('hsl.l',",
  "gy713:chroma(bk).set('hsl.l',",
  "gy714:chroma(bk).set('hsl.l',",
  "gy715:chroma(bk).set('hsl.l',",
  "gy716:chroma(bk).set('hsl.l',",
  "gy717:chroma(bk).set('hsl.l',",
  "gy718:chroma(bk).set('hsl.l',",
  "gy719:chroma(bk).set('hsl.l',",

  "gy601:chroma(bk).set('hsl.l',",
  "gy602:chroma(bk).set('hsl.l',",
  "gy603:chroma(bk).set('hsl.l',",
  "gy604:chroma(bk).set('hsl.l',",
  "gy605:chroma(bk).set('hsl.l',",
  "gy606:chroma(bk).set('hsl.l',",
  "gy607:chroma(bk).set('hsl.l',",
  "gy608:chroma(bk).set('hsl.l',",
  "gy609:chroma(bk).set('hsl.l',",
  "gy610:chroma(bk).set('hsl.l',",
  "gy611:chroma(bk).set('hsl.l',",
  "gy612:chroma(bk).set('hsl.l',",
  "gy613:chroma(bk).set('hsl.l',",
  "gy614:chroma(bk).set('hsl.l',",
  "gy615:chroma(bk).set('hsl.l',",
  "gy616:chroma(bk).set('hsl.l',",
  "gy617:chroma(bk).set('hsl.l',",
  "gy618:chroma(bk).set('hsl.l',",
  "gy619:chroma(bk).set('hsl.l',",
  
  "gy501:chroma(bk).set('hsl.l',",
  "gy502:chroma(bk).set('hsl.l',",
  "gy503:chroma(bk).set('hsl.l',",
  "gy504:chroma(bk).set('hsl.l',",
  "gy505:chroma(bk).set('hsl.l',",
  "gy506:chroma(bk).set('hsl.l',",
  "gy507:chroma(bk).set('hsl.l',",
  "gy508:chroma(bk).set('hsl.l',",
  "gy509:chroma(bk).set('hsl.l',",
  "gy510:chroma(bk).set('hsl.l',",
  "gy511:chroma(bk).set('hsl.l',",
  "gy512:chroma(bk).set('hsl.l',",
  "gy513:chroma(bk).set('hsl.l',",
  "gy514:chroma(bk).set('hsl.l',",
  "gy515:chroma(bk).set('hsl.l',",
  "gy516:chroma(bk).set('hsl.l',",
  "gy517:chroma(bk).set('hsl.l',",
  "gy518:chroma(bk).set('hsl.l',",
  "gy519:chroma(bk).set('hsl.l',",

  "gy401:chroma(bk).set('hsl.l',",
  "gy402:chroma(bk).set('hsl.l',",
  "gy403:chroma(bk).set('hsl.l',",
  "gy404:chroma(bk).set('hsl.l',",
  "gy405:chroma(bk).set('hsl.l',",
  "gy406:chroma(bk).set('hsl.l',",
  "gy407:chroma(bk).set('hsl.l',",
  "gy408:chroma(bk).set('hsl.l',",
  "gy409:chroma(bk).set('hsl.l',",
  "gy410:chroma(bk).set('hsl.l',",
  "gy411:chroma(bk).set('hsl.l',",
  "gy412:chroma(bk).set('hsl.l',",
  "gy413:chroma(bk).set('hsl.l',",
  "gy414:chroma(bk).set('hsl.l',",
  "gy415:chroma(bk).set('hsl.l',",
  "gy416:chroma(bk).set('hsl.l',",
  "gy417:chroma(bk).set('hsl.l',",
  "gy418:chroma(bk).set('hsl.l',",
  "gy419:chroma(bk).set('hsl.l',",

  "gy301:chroma(bk).set('hsl.l',",
  "gy302:chroma(bk).set('hsl.l',",
  "gy303:chroma(bk).set('hsl.l',",
  "gy304:chroma(bk).set('hsl.l',",
  "gy305:chroma(bk).set('hsl.l',",
  "gy306:chroma(bk).set('hsl.l',",
  "gy307:chroma(bk).set('hsl.l',",
  "gy308:chroma(bk).set('hsl.l',",
  "gy309:chroma(bk).set('hsl.l',",
  "gy310:chroma(bk).set('hsl.l',",
  "gy311:chroma(bk).set('hsl.l',",
  "gy312:chroma(bk).set('hsl.l',",
  "gy313:chroma(bk).set('hsl.l',",
  "gy314:chroma(bk).set('hsl.l',",
  "gy315:chroma(bk).set('hsl.l',",
  "gy316:chroma(bk).set('hsl.l',",
  "gy317:chroma(bk).set('hsl.l',",
  "gy318:chroma(bk).set('hsl.l',",
  "gy319:chroma(bk).set('hsl.l',",

  "gy201:chroma(bk).set('hsl.l',",
  "gy202:chroma(bk).set('hsl.l',",
  "gy203:chroma(bk).set('hsl.l',",
  "gy204:chroma(bk).set('hsl.l',",
  "gy205:chroma(bk).set('hsl.l',",
  "gy206:chroma(bk).set('hsl.l',",
  "gy207:chroma(bk).set('hsl.l',",
  "gy208:chroma(bk).set('hsl.l',",
  "gy209:chroma(bk).set('hsl.l',",
  "gy210:chroma(bk).set('hsl.l',",
  "gy211:chroma(bk).set('hsl.l',",
  "gy212:chroma(bk).set('hsl.l',",
  "gy213:chroma(bk).set('hsl.l',",
  "gy214:chroma(bk).set('hsl.l',",
  "gy215:chroma(bk).set('hsl.l',",
  "gy216:chroma(bk).set('hsl.l',",
  "gy217:chroma(bk).set('hsl.l',",
  "gy218:chroma(bk).set('hsl.l',",
  "gy219:chroma(bk).set('hsl.l',",
  
  "gy101:chroma(bk).set('hsl.l',",
  "gy102:chroma(bk).set('hsl.l',",
  "gy103:chroma(bk).set('hsl.l',",
  "gy104:chroma(bk).set('hsl.l',",
  "gy105:chroma(bk).set('hsl.l',",
  "gy106:chroma(bk).set('hsl.l',",
  "gy107:chroma(bk).set('hsl.l',",
  "gy108:chroma(bk).set('hsl.l',",
  "gy109:chroma(bk).set('hsl.l',",
  "gy110:chroma(bk).set('hsl.l',",
  "gy111:chroma(bk).set('hsl.l',",
  "gy112:chroma(bk).set('hsl.l',",
  "gy113:chroma(bk).set('hsl.l',",
  "gy114:chroma(bk).set('hsl.l',",
  "gy115:chroma(bk).set('hsl.l',",
  "gy116:chroma(bk).set('hsl.l',",
  "gy117:chroma(bk).set('hsl.l',",
  "gy118:chroma(bk).set('hsl.l',",
  "gy119:chroma(bk).set('hsl.l',",

  "gy000:chroma(bk).set('hsl.l',",
  "gy001:chroma(bk).set('hsl.l',",
  "gy002:chroma(bk).set('hsl.l',",
  "gy003:chroma(bk).set('hsl.l',",
  "gy004:chroma(bk).set('hsl.l',",
  "gy005:chroma(bk).set('hsl.l',",
  "gy006:chroma(bk).set('hsl.l',",
  "gy007:chroma(bk).set('hsl.l',",
  "gy008:chroma(bk).set('hsl.l',",
  "gy009:chroma(bk).set('hsl.l',",
  "gy010:chroma(bk).set('hsl.l',",
  "gy011:chroma(bk).set('hsl.l',",
  "gy012:chroma(bk).set('hsl.l',",
  "gy013:chroma(bk).set('hsl.l',",
  "gy014:chroma(bk).set('hsl.l',",
  "gy015:chroma(bk).set('hsl.l',",
  "gy016:chroma(bk).set('hsl.l',",
  "gy017:chroma(bk).set('hsl.l',",
  "gy018:chroma(bk).set('hsl.l',",
  "gy019:chroma(bk).set('hsl.l',",
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
      {{item}} {{  ((100-(100/191)*index)/100).toFixed(3)}}).hex(), <br>
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



