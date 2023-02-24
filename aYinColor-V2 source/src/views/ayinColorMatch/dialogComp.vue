<script setup>
const props=defineProps({ dialogConfig:Object, colors:Array})
const {proxy}=getCurrentInstance();
console.log("props",props)

const emits = defineEmits(["pushParmas"])

const dialogConfim=()=>{
  //console.log("props.dialogConfig",props.dialogConfig);
  select.type=props.dialogConfig.type
  emits("pushParmas",select)
}

const select=reactive({
  color:"",
  saturation:"",
  lightness:"",
  type:""
});


</script>
<template>
  <el-dialog v-model="dialogConfig.show" title="选择颜色" width="50%" >
    <div class="dialog-content">
      <h3>选择颜色</h3>
      <el-radio-group v-model="select.color">
        <el-radio v-for="(item,index) in colors" :label="item.short" border>{{item.short}}-{{item.chs}}</el-radio>
      </el-radio-group>
      <h3>选择饱和度</h3>
      <el-radio-group v-model="select.saturation">
        <el-radio v-for="(item,index) in dialogConfig.level" :label="item" border>{{item}}</el-radio>
      </el-radio-group>
      <h3>选择亮度</h3>
      <el-radio-group v-model="select.lightness">
        <el-radio v-for="(item,index) in dialogConfig.LD" :label="item" border>{{item}}</el-radio>
      </el-radio-group>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogConfig.show = false">Cancel</el-button>
        <el-button type="primary" @click="dialogConfim" >Confirm</el-button >
      </span>
    </template>
  </el-dialog>
</template>
<style lang="less">
.dialog-content{
  .el-radio-group{
    .el-radio{margin:5px; width: 116px;}
  }
}
</style>
