// import {session,resizeAny,timer,handleClass,randomString,randomData,randomNumber} from "@/utils/ayin"
import ElementPlus from 'element-plus';
import {ElMessage,ElMessageBox,ElLoading,ElNotification} from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css';
import "@/assets/less/main.less";


export default function(app){
  //ayin
  // window.session=session
  // window.handleClass=handleClass
  // window.resizeAny=resizeAny
  // window.timer=timer
  // window.randomString=randomString
  // window.randomData=randomData
  // window.randomNumber=randomNumber
  window.ElMessage=ElMessage
  window.ElMessageBox=ElMessageBox
  window.ElLoading=ElLoading
  window.ElNotification=ElNotification
  app.use(ElementPlus, {
    locale: zhCn,
  })
}

