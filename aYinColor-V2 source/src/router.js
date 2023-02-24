
import { createRouter, createWebHistory,useRoute } from 'vue-router'

//createWebHashHistory  使用此模式，地址栏中无#


const modules = import.meta.glob('../views/*/*.vue')
const router = createRouter({
  history: createWebHistory(),
  routes :[
    {
      path: "/",
      name: "home",
      redirect:"/ayinColor",
    },
    {
      path: "/ayinColor",
      name: "ayinColor",
      component:()=>import("@/views/ayinColor/ayinColor.vue"),
    }, 
    {
      path: "/ayinColorV2",
      name: "ayinColorV2",
      component:()=>import("@/views/ayinColorV2/index-ayinColorV2.vue"),
    }, 
    {
      path: "/ayinColorMatch",
      name: "ayinColorMatch",
      component:()=>import("@/views/ayinColorMatch/index-ayinColorMatch.vue"),
    }, 
    
  ]
});

export default router;

