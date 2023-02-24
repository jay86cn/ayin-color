<script>
export default {name:'ayinColorMatch'}
</script>
<script setup>
import dialogChange from "./dialogComp.vue"
console.log("ayincolor Expand Js Test",$c.blF05)

const dialogConfig=reactive({
  show:false,
  level:[],
  LD:[],
  type:""
})

const showDialog=(type)=>{
  console.log("showDialog",type)
  if(type=='exp'){
    dialogConfig.level=expLevel;
    dialogConfig.LD=expLD;
    dialogConfig.type="exp";
  }else if(type=='bas'){
    dialogConfig.level=basLevel;
    dialogConfig.LD=basLD;
    dialogConfig.type="bas";
  }
  dialogConfig.show=true;
}

const reciveFromDialog=(parmas)=>{
  //console.log("reciveParmas",parmas);
  if(parmas.type=="exp"){
    console.log("exp",parmas.color+parmas.saturation+parmas.lightness,$c[parmas.color+parmas.saturation+parmas.lightness]);
    distanceExp.value=chroma.distance($c[parmas.color+parmas.saturation+parmas.lightness], inputSearch.value)
    similarColorExp.value=parmas.color+parmas.saturation+parmas.lightness
  }else{
    console.log("bas",parmas.color+parmas.saturation+parmas.lightness,$c[parmas.color+parmas.saturation+parmas.lightness]);
    distance.value=chroma.distance($c[parmas.color+parmas.saturation+parmas.lightness], inputSearch.value)
    similarColor.value=parmas.color+parmas.saturation+parmas.lightness
  }
  dialogConfig.show=false
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


const basLevel=["l","m","r","d"]
const basLD=[1,2,3,4,5,6,7,8,9]
const inputSearch=ref("");

const expLevel=["A","B","C","D","E","F"]
const expLD=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19"]

const distance=ref(0);
const distanceAdv=ref(0);
const distanceExp=ref(0);
const distanceFixed=computed(()=>{
  return distance.value.toFixed(2);
})
const distanceExpFixed=computed(()=>{
  return distanceExp.value.toFixed(2);
})
const similarColor=ref("");
const similarColorAdv=ref([]);
const similarColorExp=ref("");
const similarColorHex=computed(()=>{
  return $c[similarColor.value]
})
const similarColorExpHex=computed(()=>{
  return $c[similarColorExp.value]
})

const similarColorAdvIndex=ref(0);


const matchColor=()=>{

  //在ayin color base中匹配颜色
  distance.value=9999999
  //console.log("color",inputSearch.value);
  colors.forEach((color,i)=>{
    basLevel.forEach((level,j)=>{
      basLD.forEach((LD,i)=>{
        //console.log($c[color.short+level+LD]);
        let distanceCurrent=chroma.distance($c[color.short+level+LD], inputSearch.value)
        if(distance.value>distanceCurrent){
          distance.value=distanceCurrent;
          similarColor.value=color.short+level+LD;
        }
        //console.log(color.short+level+LD,$c[color.short+level+LD],chroma.distance($c[color.short+level+LD], '#ff0000'));
      })
    })
  })
  
  //console.log('done',distance.value,similarColor.value,$c[similarColor.value])
  similarColorAdv.value=[];
  
  //可用高度匹配到相似的颜色，但是太复杂了！
  // for(var i=0;i<10;i++){
  //   for(var j=0;j<10;j++){
  //     similarColorAdv.value.push(
  //       chroma(chroma($c[similarColor.value]).darken((10-i)*.1).css()).set("hsl.s", (10-j)*.1).hex()
  //     )
  //   }
  // }
  // for(var i=0;i<10;i++){
  //   for(var j=0;j<10;j++){
  //     similarColorAdv.value.push(
  //       chroma(chroma($c[similarColor.value]).brighten((i+1)*.1).css()).set("hsl.s", (10-j)*.1).hex()
  //     )
  //   }
  // }

  // for(var j=0;j<10;j++){
  //   similarColorAdv.value.push({name:"",color:chroma($c[similarColor.value]).set("hsl.s", (j+1)*.1).hex()})
  // }

  //通过变换匹配到的颜色的明暗度来生成一些其他颜色用于二次匹配
  for(var i=0;i<10;i++){
    similarColorAdv.value.push({name:'darken(@'+similarColor.value+','+((10-i)*.1).toFixed(1)+')',color:chroma($c[similarColor.value]).darken((10-i)*.1).hex()})
  }
  for(var i=0;i<10;i++){
    similarColorAdv.value.push({name:'lighten(@'+similarColor.value+','+((10-i)*.1).toFixed(1)+')',color:chroma($c[similarColor.value]).brighten((i+1)*.1).hex()})
  }
  distanceAdv.value=999999
  similarColorAdv.value.forEach((item,i)=>{
    let distanceCurrent=chroma.distance(item.color, inputSearch.value)
    if(distanceAdv.value>distanceCurrent){
      distanceAdv.value=distanceCurrent;
      similarColorAdvIndex.value=i;
    }
    item.distance=chroma.distance(item.color, inputSearch.value).toFixed(1);
    //console.log("simAdv",chroma.distance(item.color, inputSearch.value),i,item.name);
  })
  //console.log("advColor",distanceAdv.value, similarColorAdvIndex.value, similarColorAdv.value[similarColorAdvIndex.value].name);



  //匹配ayinColor Expand颜色表
  distanceExp.value=9999999
  colors.forEach((color,i)=>{
    expLevel.forEach((level,j)=>{
      expLD.forEach((LD,i)=>{
        //console.log($c[color.short+level+LD]);
        let distanceCurrent=chroma.distance($c[color.short+level+LD], inputSearch.value)
        if(distanceExp.value>distanceCurrent){
          distanceExp.value=distanceCurrent;
          similarColorExp.value=color.short+level+LD;
        }
      })
    })
  })
  console.log("ayinColorExpand",distanceExp.value,similarColorExp.value);
}
const searchChange=()=>{
  similarColor.value=""
}


</script>
<template>
<div class="color-match-wrap">
  <div class="search-wrap">
    <i class="icon-palette"></i>
    <h1>aYinColor 调色盘</h1>
    <el-input v-model="inputSearch" class="color-search-input" @input="searchChange" size="large"  placeholder="请输入颜色值从aYinColor颜色库中匹配相似颜色">
      <template #prefix>
        <el-icon class="el-input__icon fa fa-search"></el-icon>
      </template>
      <template #append>
        <el-button @click="matchColor" type="primary">查找</el-button>
      </template>
    </el-input>
  </div>
  <div class="match-result" v-if="similarColor">
    <h1>aYin Color Expand 匹配结果</h1>
    <el-row>
      <el-col :span="12">
        <div class="color-show color-origin">
          <span class="desc">输入</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="color-show color-matchedExp" @click="showDialog('exp')">
          <span class="desc">匹配</span>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="group">
                <span class="label">距离：</span>
                <span class="content">{{distanceExpFixed}}</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="group">
                <span class="label">颜色：</span>
                <span span class="content">{{similarColorExp}}</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    
    <h1>aYin Color Base 匹配结果</h1>
    <el-row>
      <el-col :span="12">
        <div class="color-show color-origin">
          <span class="desc">输入</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="color-show color-matched" @click="showDialog('bas')">
          <span class="desc">匹配</span>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="group">
                <span class="label">距离：</span>
                <span class="content">{{distanceFixed}}</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="group">
                <span class="label">颜色：</span>
                <span span class="content">{{similarColor}}</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="color-show color-expand">
          <div class="colorExp" v-for="(item,index) in similarColorAdv" :style="'background-color:'+item.color+';'" :class="similarColorAdvIndex==index?'active':''">
            <div class="detail">
              <span class="destance">{{item.distance}}</span>
              <span class="name">{{item.name}}</span>
            </div>
            <div class="origin"></div>
          </div>
        </div>
      </el-col>
    </el-row>

    
  </div>
</div>
<dialogChange @pushParmas="reciveFromDialog" :dialogConfig="dialogConfig" :colors="colors"></dialogChange>
</template>
<style lang="less">
.color-match-wrap{width: 1000px; padding:50px; .bgc(var(--com-staBG)); .poa; min-height: 100%; left:50%; .fix-c("x"); top:0; .bdr(5px);  
  .search-wrap{text-align: center; padding:20px; 
    .icon-palette{ -webkit-mask-image: url("./palette.svg"); .bgc(@orl4); display:inline-block; -webkit-mask-position:center; -webkit-mask-repeat:no-repeat; min-width: 48px; min-height: 48px; }
    h1{font-size: 24px;font-weight: bold; .fc(var(--el-color-primary));}
    .el-input{
      .el-input__inner{ text-align: center; font-size: 18px;}
      .el-input__prefix{}
      .el-input-group__append{.bgc(var(--el-color-primary)); .fc(var(--el-color-white)); box-shadow: none;
        .el-button{}
        &:hover{.bgc(var(--el-color-primary-light-3)); .fc(@wh);}
      }
    }
  }
  .match-result{text-align: center; padding:20px;
    .el-row{margin:0 0 20px 0;}
    .color-show{width:100%;  height: 100px;  display:inline-block; position: relative;
      .desc{.poa; .bgc(fade(@bk,70%)); .fc(@wh); padding:5px 20px; }
      .group{display:inline-block; font-size: 20px;  line-height: 100px;
        .label,
        .content{  .fc(@wh);.txs(50%,3px,1px,1px);}
      }
      &.color-origin{.bgc(v-bind(inputSearch)); .bdr(10px 0 0 10px); .desc{ top:0; left:0; .bdr(10px 0 10px 0);} }
      &.color-matched,
      &.color-matchedExp{.bdr(0 10px 10px 0);  .desc{ top:0; right:0;.bdr(0 10px 0 10px);} }
      &.color-matched{.bgc(v-bind(similarColorHex));}
      &.color-matchedExp{.bgc(v-bind(similarColorExpHex));}
      &.color-expand{height:auto; display:flex;flex-direction: row; flex-wrap: nowrap; flex-wrap: wrap; flex-wrap: wrap-reverse;
        .colorExp{display:inline-block; width:20%; height: 50px; .bd(var(--com-staBG),3px); .bdr(5px); position: relative;
          .detail{opacity: 0;.poa; .fullbox; .bdr(5px); .bgc(fade(@bk,30%)); padding:5px;
            span{display:block; line-height: 20px; height: 20px; font-size: 12px; .fc(@wh);.txs(50%,3px,1px,1px);
              &.distance{}
              &.name{ }
            }

          }
          .origin{.bgc(v-bind(inputSearch)); opacity: 0; position: absolute; .fullbox; left:auto; width: 50%;}
          &:before{content:" "; position: absolute; left:5px; top:5px; width: 5px; height: 5px; .bdr(5px); .bgc(@bk); opacity: 0;}
          &:hover{.detail{opacity: 1;}}
          &.active{ &:before{opacity: 1;}}
        }
        .desc{ bottom:-31px; left:50%; .fix-c("x"); .bdr(0 0 10px 10px);} 
      }
    }
    
    .adv-btn{display:block; margin:20px auto;}
  }
}
</style>
