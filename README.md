
[English](./README.en.md) | 简体中文


<p align="center">
  <a href="https://ayin86.com/">数字魔方演示站</a> •
  <a href="https://doc.ayin86.com/">数字魔方文档</a> •
  <a href="https://www.npmjs.com/package/ayin-color">AyinColor Npm</a> •
  <a href="https://space.bilibili.com/302402751">Bili视频博客</a> •
  <a href="https://github.com/ayin86/ayin-color">Github</a> •
  <a href="https://gitee.com/ayin86/ayin-color">Gitee</a>
</p>

<h1 align="center">
<b>AyinColor</b>
</h1>
<div align="center">AyinColor是一款颜色库工具，为了免于记忆类似#FF000、RGB(255,0,0)、这样的颜色值，方便在开发中调用各种预设的颜色，所以开发了此工具。</div>

# 目录介绍

主要为以下3个目录：
- **aYinColor-V1 source**-第一版的源码
- **aYinColor-V2 source**-第二版的源码
- **npm publish package**-发布到npm打包后的版本

如果只是使用的话，请阅读说明文档后，根据 【项目中使用】小节配置，如果需要二次迭代开发，请下载V1和V2的源码修改迭代。



**颜色表预览和视频教程，请到这里** 

- **[V1颜色表](https://doc.ayin86.com/component/b04--ayin-color#%E9%A2%9C%E8%89%B2%E8%A1%A8v1)**   
- **[V2颜色表](https://doc.ayin86.com/component/b04--ayin-color#%E9%A2%9C%E8%89%B2%E8%A1%A8v2)**

- **[视频教程](https://www.bilibili.com/video/BV1kG411h7Px/)**

Gitee无法识别html标签中的颜色值，所以无法在本页面展现颜色表。




# 简介

<img src="./demo/AyinColorV1-top.png" width="800"/>

取色案例如下：

- 红色-`rel5`
- 淡红色-`rel1`
- 深红色-`rel9`
- 蓝色-`bll5`
- 蓝色低饱和度-`bld5`
- 淡蓝色低饱和度-`bld1`

AyinColor 最早的版本于2018年10月份开发完毕V1版本。

AyinColor颜色库包含两个版本：

- **JS版本-基于chroma.js库开发**

- **CSS版本-基于Less.js开发**

其设计思路是，根据纯正红色的十六进制颜色值`#FF0000`，通过**改变色相、饱和度、明暗**来生成颜色表中的所有其他色值。

在第一个版本开发完毕之后，迭代过很多个版本，其本质仅仅是增加饱和度和明暗的变化数量。

但都没用起来，根本原因是V1版本颜色虽然较少，但也容易掌控，且在一般的项目开发中足够用了。

视频介绍请点击 [这里](https://www.bilibili.com/video/BV1kG411h7Px/?vd_source=4f3738cd3388bbbb606cea36d41d0899) 查看

-----

# 基础色

**基础色的选取，本质上是色相角度的调整。**

<img src="./demo/AyinColorBase.png" width="400" style="border-radius:10px" />

**从0度开始，色相每偏转30度，生成一个基础色值，获得了12个基础颜色值**

- **红**-hue=0
- **橙**-hue=30
- **黄**-hue=60
- **草绿**-hue=90
- **绿**-hue=120
- **水绿**-hue=150
- **青**-hue=180
- **蓝**-hue=210
- **靛**-hue=240
- **紫**-hue=270
- **粉**-hue=300
- **罗兰红**-hue=330

如果再次偏移30度，330+30=360度，实际上回到了0度的位置



这12个基础色值，色相差异太大，所以把色相偏转度改为15度，相当于上面的每个基础色值中间穿插了一个中间值，获得了24个基础色值。
24基础色，再额外加一个灰色，一共**25个基础色**诞生。

如下图：

<img src="./demo/AyinColorList.png" width="260" style="border-radius:10px" />



**25个基础色的中、英文名称、以及简写：**

- **红**-red `re`
  - 红橙-red-orange `ro`
- **橙**-orange `or`
  - 橙黄-orange-yellow `oy`
- **黄**-yellow `ye`
  - 黄-草绿-yellow-chartreuse `yc`
- **草绿**-chartreuse `ch`
  - 草绿-绿-chartreuse-green `cg`
- **绿**-green `gr`
  - 绿-水绿-green-aquamarine `ga`
- **水绿**-aquamarine `aq`
  - 水绿-青-aquamarine-cyan `ac`
- **青**-cyan `cy`
  - 青蓝-cyan-blue `cb`
- **蓝**-blue `bl`
  - 蓝靛-blue-indigo `bi`
- **靛**-indigo `in`
  - 靛紫-indigo-purple `ip`
- **紫**-purple `pu`
  - 紫粉-purple-pink `pp`
- **粉**-pink `pi`
  - 粉-洋红-pink-violetred `pv`
- **罗兰红**-violetred `vi`
  - 罗兰红-红-violetred-red `vr`
- **灰**-gray `gy`



当时对12基础色进行中英文命名的时候，查阅了大量的资料和文献后定下来的，但哪怕现在也不确定这样命名是否准确，姑且这么用吧。

-----



# 饱和度变化

V1的饱和度分为4种

- light `l`
- middle `m`
- rost `r`
- dark `d` 

最早的AyinColor的饱和度分为三种，light、middle、dark，但感觉颜色在饱和度的变化太少了，所以才引入了一个rost（烤、烘烤、烤焦），此时V1版本正式定型。

如下图，**纵轴方向**的变化即为饱和度的变化

<img src="./demo/AyinColorV1-demoBlue.png" width="800" style="border-radius:10px" />

**V2版本**的饱和度变化分为**A、B、C、D、E、F**六种，因为找不到合适的单词表述这6种饱和度的变化，所以就用大写字母A-F直接替代了。

如下图，**纵轴方向**的变化即为饱和度的变化

<img src="./demo/AyinColorV2-demoBlue.png" width="800" style="border-radius:10px" />

-----

# 明暗的变化

**V1的明暗变化分为9种，用数字1-9代替**

如下图，**横轴方向**的变化即为明暗变化

<img src="./demo/AyinColorV1-demoRed.png" width="800" style="border-radius:10px" />

**V2的明暗变化分为19种，用数字01-19代替**

如下图，**横轴方向**的变化即为明暗变化

<img src="./demo/AyinColorV2-demoRed.png" width="800" style="border-radius:10px" />

中间也开发过其他的不同的版本，比如其中代号为AyinColorFull的饱和度变化分了10种，明暗分了19种，每种基础色变形出了190个颜色值，相邻颜色之间的差异非常小，在脑海中取色的时候因为饱和度和明暗的层级太多了，犹如一团浆糊，到后来也没用起来。

V2的开发，是因为后来在开发数据可视化框架的时候，在做配色工作时，感觉V1的饱和度、明暗变化太少了，需要更细腻的颜色表，所以才于2022年3月左右，基于之前开发的AyinColorFull，改造后重命名为V2，集成到框架中。

V2版本是基于AyinColorFull把饱和度从10种减少到6种后而来。

目前作者在开发项目的过程中，使用最多的还是V1版本，因为其变化较少，易于掌握，其颜色的变化在一般的项目开发中使用已经绰绰有余。只有在开发诸如大屏可视化框架遇到一些需要更细致颜色的时候，才会调用V2配色表。

-----



# 项目中使用

**AyinColorV1、V2的JS版本和CSS版均已开源**，可以随意在任意项目上使用和修改。

**npm地址如下 [AyinColor](https://www.npmjs.com/package/ayin-color?activeTab=readme)**


其内部文件列表如下：

- ayin-color.less（V1 for CSS版本）
- ayin-color-expand.less（V2 for CSS版本）
- ayin-color.js（for JS版本）
- ayin-color.json（JS版本的对应的静态颜色值）
- index.js（入口文件）

JS版本使用方式：

```js
//npm安装，推荐cnpm或者pnpm
npm i ayin-color --save

//在main.js中引入
import {AyinColor} from "ayin-color"
Vue.use(AyinColor)
```



CSS版本使用方式：

```js
//vue2 在vue.config.js中配置
//需要在配置前先安装 less、less-loader、style-resources-loader
pluginOptions: {
    'style-resources-loader': {
        preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, "./node_modules/ayin-color/ayin-color.less"),
                path.resolve(__dirname, "./node_modules/ayin-color/ayin-color-expand.less")
            ]
    }
},
    
//vue3+vite中使用 在 vite.config.js 中配置
//需要在配置前先安装 less、less-loader
css: {
    preprocessorOptions: {
        less: {
            javascriptEnabled: true,
            additionalData:`
          		@import "${path.resolve(__dirname, './node_modules/ayin-color/ayincolor.less')}";
          		@import "${path.resolve(__dirname, './node_modules/ayin-color/ayincolor-expand.less')}";
         	`
        }
    }
},
```

-----

# JS代码中使用

当在项目中配置完毕后，即可全局使用AyinColorV1和V2的JS版本。

使用案例代码：

```js
//AyinColor V1
let color=$c.rel5
//AyinColor V2
let color=$c.reA10
```

-----

# CSS代码中使用

**因为CSS的颜色表基于Less开发，所以需要安装less组件。**

在此框架中已经集成了AyinColorV1和V2的Less版本，可以直接使用。

使用案例代码：
```less
//AyinColor V1
.text{color:@rel5; background-color:@bll5; border:1px solid @gyd4;}

//AyinColor V2
.text{color:@reA10; background-color:@blA03; border:1px solid @gyE05;}
```

后续可能会开发一套原生CSS的颜色组件，比如把颜色值挂载到CSS的 `:root` 下通过 `var(--color-rel5)`这样的方式取调用。挖个坑等有时间再开发。

-----



# 颜色值的进阶处理

如果需要把bll5，改为0.5的透明度

JS代码

```js
let color=$c.fade('bll5',.5)
```

Less代码

```less
.text{color:fade(@bll5,50%);}
```



**JS中提供了以下进阶处理函数：**

- **fade**-透明度
- **hslh**-色相
- **hsls**-饱和度
- **hsll**-明暗
- **darken**-加深
- **lighten**-减淡
  - 以上的处理函数，使用方式均为 `$c.xxxx(color,num)`参考上方的JS代码案例。
  - 以上函数是用chroma.js中的颜色处理函数封装而来。
  - 其中num值的传入有些许的不同，比如透明度是浮点数，色相是度数，具体使用方式和传参，请参考chroma.js中的相关章节。
- **scale**-计算多个颜色之间的区间值
  - scale的使用方式为，`$c.scale([color1,color2,.....colorN],num,type)`
  - 传入的颜色数组最少2个，无上限
  - num是需要获取的颜色数量
  - type是处理方式，非必填，默认值为 `lch` 备选值为 `lch`、`hsl`、`lab`、`lrgb`



**Less中提供了以下的处理函数：**

- **fade** 透明
- **fadein** 增加透明度
- **fadeout** 降低透明度
- **lighten** 明度
- **darken** 变暗
- **spin** 色相
- **saturate** 饱和度+
- **desaturate** 饱和度-
- **tint** 与白色混合减少颜色比例
- **shade** 与黑色混合减少颜色比例
- **greyscale** 丢失饱和度
- **contrast** 对比度
- **mix** 混合两种颜色

常用的无非也就是fade、lighten、darken 等，其余的使用方式和详细介绍，请参考LESS文档中的颜色操作一节


-----




# 颜色转换工具

在使用AyinColor做开发的过程中，经常需要把普通的16进制颜色或者RGBA颜色转换为AyinColor中的颜色，因此开发了一个颜色转换工具。



<img src="./demo/AyinColorPalette.png" width="800" style="border-radius:10px" />

此工具，可以输入任意颜色值，如，red，#FF0000，rgb(5,245,230) 

返回AyinColor两个版本中的匹配结果，返回结果中的**距离**参数越小，则说明与原始颜色越接近。

**此工具位于aYinColor-V2 source目录中。**