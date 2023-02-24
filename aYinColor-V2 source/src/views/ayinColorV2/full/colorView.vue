
<script setup>
import cf from "./ayincolor-full-vue.js"
const jscolor=(val)=>{
  return $c[val];
}
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
//fullLevel:[0,1,2,3,4,5,6,7,8,9],
fullLevel=["9","8","7","6","5","4","3","2","1","0"],
lightDark=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19"]
</script>
<template>
  <div class="ayincolor-full">
    <h1>ayin's color full (2020年4月23日 完成开发,于2022年3月15日改造后集成到vue3版本的ayin platform)</h1>
    <p>由 ayin86@163.com 开发。包含less color 和 js color。less颜色表基于less.js开发。js颜色表基于chroma.js开发。</p>
    <p>用vue生成的整合代码，full版约15000多行代码。一共24种颜色。每种颜色现在分为10种饱和度，19种明暗，每种颜色190种变化。 </p>
    <p>less中使用方式如@re001，@bl919这样的格式。也考虑过使用@res0l01，@bls9l19这样的写法，re\bl等代表色相，S代表饱和度，L代表明暗。但这种写法格式上太臃肿，所以拿掉了代表饱和度的s和明暗的l</p>
    <p>拆分解释比如 @ re 0 01  其中re代表色相，0代表饱和度，01代表亮度。其中饱和度有9个等级，明暗有19个等级</p>
    <p>饱和度为9-0，9为最高饱和度，0为最低饱和度，但0不代表饱和度真的为0，但是接近0，否则所有饱和度为0的颜色都是灰色系。</p>
    <p>亮度为01-19，共19个等级，01为最亮接近白色，19为最暗接近黑色</p>
    <div class="color-row">
      
      <div class="css-color color-column">
        <p class="title1st bg-blue-">CSS Color</p><!--CSS Color-->
        <div class="group-wrapper" v-for="(item,index) in colors" :key="'g1-'+index">
          <p class="title">{{index+1}}-{{item.short}}-{{item.chs}}-{{item.eng}}</p>
          <div class="color-wrapper" :class="'color-'+item.short+'-wrapper'" >
            <div class="sub-wrapper" v-for="(item2,index2) in fullLevel" :key="'g2-'+index2">
              <p class="title-sub" >{{item.short}}-{{item2}}</p>
              <ul class="color-group "><!--+colors[i]+"-"+sort[j]+""-->
                  <li :class="'bg-'+item.short+item2+item3" v-for="(item3,index3) in lightDark" :key="'g3-'+index3">{{item2+item3}}</li><!--"+colors[i]+"-"+sort[j]+k+"-->
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="js-color color-column">
        <p class="title1st">JS Color</p><!--JS Color-->
        <div class="group-wrapper" v-for="(item,index) in colors" :key="'g4-'+index">
          <p class="title">{{index+1}}-{{item.short}}-{{item.chs}}-{{item.eng}}</p>
          <div class="color-wrapper" :class="'color-'+item.short+'-wrapper'" >
            <div class="sub-wrapper" v-for="(item2,index2) in fullLevel" :key="'g5-'+index2">
              <p class="title-sub">{{item.short}}-{{item2}}</p>
              <ul class="color-group "><!--+colors[i]+"-"+sort[j]+""-->
                  <li :ref="'jscolor-'+item.short+item2+item3" :style="'background-color:'+cf[item.short+item2+item3]" v-for="(item3,index3) in lightDark" :key="'g6-'+index3">{{item2+item3}}</li><!--"+colors[i]+"-"+sort[j]+k+"-->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
   
    
  </div>
</template>

<style lang="less">
@import "./ayincolor-full.less";
@import "./ayincolor-fullbg.less";

.ayincolor-full{
  h1{.fc(var(--com-actPriBG));}
  h1,p{padding:0 40px; }
  
  .color-wrapper{.bgc(var(--com-staBG)); .bd(var(--com-staBD)); .bdr(6px); padding:1rem; margin:1rem; display:block;
    .title-sub{font-size: 1rem;  text-indent: 1rem; color:#999; margin:0; display:none;}
    .color-group{display:table;width: 100%;
      li{font-size: 12px; width:3rem;height:3rem; text-shadow: 1px 1px 3px rgba(0,0,0,.8);  display:table-cell; margin:.5rem;line-height: 3rem; color:fade(@wh,80%);text-align: center;}
    }
  }

  .color-row{display:table;width:100%;
    .color-column{display:table-cell; width: 1%; height: 100px;
      .title1st{.bgc(var(--com-staBG)); .bdt(var(--com-staBD));.bdb(var(--com-staBD)); .fc(var(--com-actPriBG)); font-size: 3rem; font-weight:bold;text-transform:uppercase; text-indent: 1rem; padding:6rem 0 3rem 0; }
      .group-wrapper{
        .title{font-size: 1.2rem; font-weight:bold;text-transform:uppercase; text-indent: 1rem; .fc(var(--com-staFC)); margin-top:3rem;}
      }
    }
    .css-color{content:""}
    .js-color{content:""}
  }
}

</style>



