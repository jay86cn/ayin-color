
<script setup>
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
]
const normal=["l","m","r","d"]
const variation=["vl","vm","vr","vd"]//variation
</script>
<template>
  <div class="ayinColor">
    <div class="mainDesc">
      <h1>aYin's Color</h1>
      <p>包含less color 和 js color，由 ayin86@163.com 开发</p>
      <p>一共25种颜色："红","红橙","橙","橙黄","黄","黄草","草绿","草绿-绿","绿","绿-水绿","水绿","水绿-青","青","青蓝","蓝","蓝靛","靛","靛紫","紫","紫粉","粉","粉-洋红","洋红","洋红-红","灰"</p>
      <p>用vue代码生成的，近5000行代码。每种颜色现在分为4种饱和度，9种明暗，每种颜色36种变化。 一共24种颜色。</p>
      <p>额外还有一种Hue颜色表。</p>
      <p>Includes less color and js color, developed by ayin86@163.com</p>
      <p>Generated with vue code, nearly 5000 lines of code. Each color is now divided into 4 saturations, 9 shades, and 36 variations for each color. A total of 24 colors.</p>
      <p>There is also a Hue color table.</p>
    </div>
    <div class="color-row">
      
      <div class="css-color color-column">
        <p class="title1st bg-blue-">CSS Color</p><!--CSS Color-->
        <div class="group-wrapper" v-for="(item,index) in colors" :key="'g1-'+index">
          <p class="title">{{index+1}}-{{item.short}}-{{item.chs}}-{{item.eng}}</p>
          <div class="color-wrapper" :class="'color-'+item.short+'-wrapper'" >
            <div class="sub-wrapper" v-for="(item2,index2) in normal" :key="'g2-'+index2">
              <p class="title-sub">{{item.short}}-{{item2}}</p>
              <ul class="color-group "><!--+colors[i]+"-"+sort[j]+""-->
                  <li :class="'bg-'+item.short+item2+item3" v-for="(item3,index3) in 9" :key="'g3-'+index3">{{index3+1}}</li><!--"+colors[i]+"-"+sort[j]+k+"-->
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
            <div class="sub-wrapper" v-for="(item2,index2) in normal" :key="'g5-'+index2">
              <p class="title-sub">{{item.short}}-{{item2}}</p>
              <ul class="color-group "><!--+colors[i]+"-"+sort[j]+""-->
                  <li :ref="'jscolor-'+item.short+item2+item3" :style="'background-color:'+jscolor(item.short+item2+item3)" v-for="(item3,index3) in 9" :key="'g6-'+index3">{{index3+1}}</li><!--"+colors[i]+"-"+sort[j]+k+"-->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="color-row">
      <div class="css-color-h color-column">
        <p class="title1st bg-blue-">CSS Color Hue+-</p><!--CSS Color Hue-+-->
        <div class="group-wrapper" v-for="(item,index) in colors.slice(0,24)" :key="'g7-'+index">
          <p class="title">{{index+1}}-HUE-{{item.short}}-{{item.chs}}-{{item.eng}}</p>
          <div class="color-wrapper" :class="'color-'+item.short+'-wrapper'" >
            <div class="sub-wrapper" v-for="(item2,index2) in normal" :key="'g8-'+index2">
              <p class="title-sub">{{item.short}}-{{item2}}</p>
              <ul class="color-group "><!--+colors[i]+"-"+sort[j]+""-->
                  <li :class="'bg-'+item.short+'h'+item2+item3" v-for="(item3,index3) in 9" :key="'g9-'+index3">{{index3+1}}</li><!--"+colors[i]+"-"+sort[j]+k+"-->
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="js-color-h color-column">
        <p class="title1st">JS Color Hue+-</p><!--JS Color  Hue-+-->
        <div class="group-wrapper" v-for="(item,index) in colors.slice(0,24)" :key="'g10-'+index">
          <p class="title">{{index+1}}-HUE-{{item.short}}-{{item.chs}}-{{item.eng}}</p>
          <div class="color-wrapper" :class="'color-'+item.short+'-wrapper'" >
            <div class="sub-wrapper" v-for="(item2,index2) in normal" :key="'g11-'+index2">
              <p class="title-sub">{{item.short}}-{{item2}}</p>
              <ul class="color-group "><!--+colors[i]+"-"+sort[j]+""-->
                  <li :ref="'jscolor-'+item.short+item2+item3" :style="'background-color:'+jscolor(item.short+'h'+item2+item3)" :class="item.short+'h'+item2+item3" v-for="(item3,index3) in 9" :key="'g12-'+index3">{{index3+1}}</li><!--"+colors[i]+"-"+sort[j]+k+"-->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style lang="less">
@import "./ayinColor-bg.less";

.ayinColor{
  .mainDesc{.bgc(var(--com-staBGAlt)); padding:40px; .fc(var(--com-staFC));
    h1{font-size: 24px; font-weight: bold; .fc(var(--com-actPriBG));}
  }
  .color-row{display:table;width:100%;
    .color-column{display:table-cell; width: 1%; height: 100px;
      .title1st{.bgc(var(--com-staBG)); .bdt(var(--com-staBD));.bdb(var(--com-staBD)); .fc(var(--com-actPriBG)); font-size: 3rem; font-weight:bold;text-transform:uppercase; text-indent: 1rem; padding:6rem 0 3rem 0; }
    }
  }
  .group-wrapper{
    .title{font-size: 1.2rem; font-weight:bold;text-transform:uppercase; text-indent: 1rem; .fc(var(--com-staFC)); margin-top:3rem;}
    .color-wrapper{.bgc(var(--com-staBG)); .bd(var(--com-staBD)); .bdr(6px);  padding:1rem; margin:1rem; display:block;
      .sub-wrapper{
        .title-sub{font-size: 1rem;  text-indent: 1rem; color:#999; margin:0;}
        .color-group{display:table;width: 100%; padding:0; margin:0;
          li{width:3rem;height:3rem; text-shadow: 0 0 1px #666;  display:table-cell; margin:.5rem;line-height: 3rem; color:#fff; text-align: center;}
        }
      }
    }
  }
}


</style>



