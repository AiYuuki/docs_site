---
title: 其他设置
---
# 其他设置 <Badge type="warning" text="内容尚未更新" />

## 登录界面和仪表盘相关设置

### 登录页面

#### 登录界面背景图片

设置登录界面背景图片 URL

> 此选项留空则显示默认背景

#### 登录界面背景虚化

设置登录界面背景虚化是否开启

#### 登录界面 Logo

设置登录界面 Logo 图片 URL

#### 登录后跳转

设置登录后跳转是否开启

> 开启之后管理员跳转至后台，用户跳转至主页

#### 登录界面语言选项

开启之后登录界面将显示语言选项

### 仪表盘背景图片

设置仪表盘背景图片

> 设置你的仪表盘背景图片，此选项留空则显示白色背景

### 仪表板设置菜单样式

- ![](https://s.nmxc.ltd/sakurairo_vision/@2.5/options/admin_left_style_v1.webp)
- ![](https://s.nmxc.ltd/sakurairo_vision/@2.5/options/admin_left_style_v2.webp)
### 仪表盘一级菜单颜色

设置仪表盘一级菜单颜色

### 仪表盘二级菜单颜色

设置仪表盘二级菜单颜色

### 仪表盘强调颜色

设置仪表盘强调颜色

### 仪表盘按钮颜色

设置仪表盘按钮颜色

### 仪表盘文本颜色

设置仪表盘文本颜色

## 低使用设置

### 统计接口

> 你可以选择 WP-Statistics 插件统计或者主题内建统计作为统计结果

- 主题内建统计：精度较低，基本上每次点击一遍文章就会计算
- WP-Statistics 插件统计：统计精度较高

### 统计数据显示格式

设置统计数据显示格式

- 23333 次访问
- 23,333 次访问
- 23 333 次访问
- 23k 次访问

### 实时搜索

设置实时搜索是否开启

> 开启之后将在前台实现实时搜索，调用 Rest API 每小时更新一次缓存，可在 api.php 里手动设置缓存时间

### 实时搜索评论支援

设置实时搜索评论支援是否开启

> 开启之后将在可在实时搜索中搜索评论（如果网站评论数量太多不建议开启）

### 谷歌统计代码

设置谷歌统计代码

### 自定义 CSS 样式

设置自定义 CSS 样式

> 填写 CSS 代码，不需要写 style 标签

### 自定义插入 Header 代码
​
在前插入HTML代码

### 时区修正

设置时区修正

> 滑动滑块，如果评论出现时差问题在这里调整，填入一个整数，计算方法：实际时间=显示错误的时间-你输入的整数（单位：小时）

### Gravatar 服务

Cravatar 服务： Cravatar 服务 是 Gravatar 服务 在中国的替代方案，你可以自由的上传和分享头像。前往 <a href="https://cravatar.cn/">官方站点</a> 获取更多信息

#### Gravatar 服务代理

设置 Gravatar 服务代理

你可以选择多种代理作为 Gravatar 服务代理(Cravatar 服务、极兔族、loli net、官方、官方中国镜像)。

默认使用 Cravatar 服务作为 Gravatar 服务代理。

### 灯箱

#### BaguetteBox 灯箱效果

设置 BaguetteBox 灯箱效果是否开启

> 开启之后将替换 Fancybox 作为图片灯箱效果，不建议使用

> BaguetteBox 灯箱使用方法`[![图片标题](../example.th.png)](../example.png)`

#### FancyBox 灯箱效果

`!{alt}(url)[th_url] 或者 !{alt}(url)`

- alt：图片标题；
- url：原图链接；
- th_url：缩略图链接。在指定了缩略图链接的时候，页面上优先显示缩略图，点击查看原图。

例：

```
!{image 1}(https://s.nmxc.ltd/sakurairo_wiki/TVKDX147_006.png)[https://s.nmxc.ltd/sakurairo_wiki/TVKDX147_006.th.png]

!{image 2}(https://s.nmxc.ltd/sakurairo_wiki/PID50489279by.jpg)
```

**注意：** 这不是标准的 Markdown 语法，如果为了文章将来的兼容性，你很介意这一点，那么可以改用 `fancybox` 定义的标准 html 标签：

```
<a data-fancybox="gallery" href="big_1.jpg"><img src="small_1.jpg"></a>
<a data-fancybox="gallery" href="big_2.jpg"><img src="small_2.jpg"></a>
```
### 代码高亮

代码高亮程序

**Highlight.js**： 默认值，自动识别语言。

**Prism.js**： 需要指定语言，使用方法请参阅 [基本用法](https://prismjs.com/#basic-usage) 和 [如何代码高亮动态载入的文件](https://prismjs.com/%20plugins/file-highlight/)。

**自定义**： 适用于另有配置的情况。

### 图片 CDN

如想使用图片 CDN

> 注意：填写格式为 http(s)://你的 CDN 域名/。也就是说，原路径为 http://your.domain/wp-content/uploads/2018/05/xx.png 的图片将从 http://你的CDN域名/2018/05/xx.png 加载


### 文章分类（不显示）

设置不显示的文章分类

> 填写分类 ID，多个用英文“ , ”分开

### 图片展示分类

设置图片展示分类

> 填写分类 ID，多个用英文“ , ”分开

### 指定登录地址

设置指定登录地址

> 填写后 强制不使用 WordPress 登录页面地址登录，填写新建的登陆页面地址，比如：http://www.xxx.com/login。注意填写前先测试下你新建的页面是可以正常打开的，以免造成无法进入后台等情况

### 指定注册地址

设置指定注册地址

> 该地址在登录页面作为注册入口，如果你指定了登录地址，则建议填写

### 版本控制

设置版本控制

> 用于更新前端 Cookie 和浏览器缓存，可使用任意字符串
