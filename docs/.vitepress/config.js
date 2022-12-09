import { defineConfig } from 'vitepress';


export default defineConfig({
  title: 'Sakurairo',
    themeConfig: {
      logo: 'https://s.nmxc.ltd/sakurairo_wiki/icon.png',
      siteTitle: 'Sakurairo',
      sidebar: [
        {text: '开始',
          items: [
            { text: '安装 WordPress', link: '/Guide/' },
            { text: '安装主题', link: '/Guide-Install/'}
        ]},
        {text: '设置',
          items: [
            { text: '主题设置', link: '/Settings/' }
        ]}
      ],
      nav: [
          { text: '主页', link: '/'},
          { text: '安装向导', link: '/Guide/'},
          { text: '配置', link: '/Settings/'},
          { text: '使用博客', link: '/demo/'},
          { text: '又拍云', link: 'https://www.upyun.com/'}
        ],
      footer: {
          copyright: 'MIT Licensed | Copyright © 2020-2022 Fuukei™',
        }
      }
});