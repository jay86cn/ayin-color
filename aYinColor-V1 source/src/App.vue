<template>
  <div id="app">
    <ul class="nav">
      <li v-for="(item,index) in nav" :key="index" @click="navAct(item)">
        {{item}}
      </li>
    </ul>
    <div :is="currentNav" :class="test('a')"></div>
  </div>
</template>

<script>
import demo from "./demo.vue";
import bgcss from "./generate-bgcss.vue";
import bgcssHue from "./generate-bgcss-hue.vue";
import lessmixin from "./generate-lessmixin.vue";
import lessmixinHue from "./generate-lessmixin-hue.vue";
import jscolor from "./generate-jscolor.vue";
import jscolorHue from "./generate-jscolor-hue.vue";
import $test from "./test.js";

export default {
  name: 'App',
  components: {
    demo,
    bgcss,
    bgcssHue,
    lessmixin,
    lessmixinHue,
    jscolor,
    jscolorHue
  },
  
  data() {
    return {
      nav:["demo","bgcss","bgcssHue","lessmixin","lessmixinHue","jscolor","jscolorHue"],
      currentNav:"demo"
    }
  },
  computed:{
    
  },
  methods:{
    navAct(label){
      this.currentNav=label;
    },
    test(val){
      return $test[val];
    }
  },
  mounted(){
    //console.log(test.a);
  }
}
</script>
<style lang="less">
html{font-size:14px; height: 100%; width: 100%;}
body { height: 100%; width: 100%; padding: 20px;margin: 0; color:#666; font: 14px/150%  "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;-webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased;}
ul{margin:0; padding:0;}
li{list-style: none;}
a{cursor: pointer;text-decoration: none!important;}
a,input,button{outline:none!important;}
img{vertical-align: middle;border-radius: 2px;}
.hidden{display:none;}
*{box-sizing: border-box; outline: none!important;}
.nav{width: 100%;
   li{display:inline-block; background-color: #000; color:#fff; padding:10px; margin:0 10px;}
}
</style>



