import chroma from "chroma-js";
import json from "./ayin-color.json"
/*
code by ayin86@163.com 
chsname:["红","红橙","橙","橙黄","黄","黄草","草绿","草绿-绿","绿","绿-水绿","水绿","水绿-青","青","青蓝","蓝","蓝靛","靛","靛紫","紫","紫粉","粉","粉-洋红","洋红","洋红-红","灰"],
engname:["red","red-orange","orange","orange-yellow","yellow","yellow-chartreuse","chartreuse","chartreuse-green","green","green-aquamarine","aquamarine","aquamarine-cyan","cyan","cyan-blue","blue","blue-indigo","indigo","indigo-purple","purple","purple-pink","pink","pink-violetred","violetred","violetred-red","gray"],
colors:["re","ro","or","oy","ye","yc","ch","cg","gr","ga","aq","ac","cy","cb","bl","bi","in","ip","pu","pp","pi","pv","vi","vr","gy"],
*/
//chroma.hsl(hue, saturation, lightness)
//chroma.hsv(hue, saturation, value)
//chroma.lab(Lightness, a, b)
//chroma.lch(Lightness, chroma, hue)
//chroma.hcl(hue, chroma, lightness)
//chroma.cmyk(cy, magenta, ye, black)
//chroma.gl(re, gr, bl, [alpha])
let illegal="Illegal color !"
const ca=chroma;
const coFuncs={
  fade:(color,num)=>{
    try{
      let a=json[color]?json[color]:color
      return chroma(a).alpha(num).css();
    }catch(e){
      console.warn(illegal,color,num)
    }
  },
  //hue色相,saturation饱和度,lightness明暗
  hslh:(color,num)=>{//hue色相调整
    try{
      let a=json[color]?json[color]:color
      return chroma(a).set('hsl.h', num).hex(); 
    }catch(e){
      console.warn(illegal,color,num)
    }
  },
  hsls:(color,num)=>{//saturation饱和度
    try{
      let a=json[color]?json[color]:color
      return chroma(a).set('hsl.s', num).hex(); 
    }catch(e){
      console.warn(illegal,color,num)
    }
  },
  hsll:(color,num)=>{//lightness明暗
    try{
      let a=json[color]?json[color]:color
      return chroma(a).set('hsl.l', num).hex(); 
    }catch(e){
      console.warn(illegal,color,num)
    }
  },
  scale:(arry,num,mode)=>{
    try{
      let mo,mu//lch,hsl,lab,lrgb
      if(mode){mo=mode}else{mo="lch"}
      if(num){mu=num}else{mu=6}
      return chroma.scale(arry).mode(mo).colors(mu)
    }catch(e){
      console.warn(illegal,color,num)
    }
  },
  darken:(color,num)=>{ 
    try{
      let a=json[color]?json[color]:color
      return chroma(a).darken(num).hex(); 
    }catch(e){
      console.warn(illegal,color,num)
    }
  }, 
  lighten:(color,num)=>{
    try{
      let a=json[color]?json[color]:color
      return chroma(a).brighten(num).hex(); 
    }catch(e){
      console.warn(illegal,color,num)
    }
  },
}
const co = Object.assign(coFuncs, json);
export {ca,co}