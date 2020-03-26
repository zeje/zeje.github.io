module.exports = {
    title: '择捷工作室',
    serviceWorker: true,
    head: [
        ['link', { rel: 'icon', href: '/img/logo.jpg' }]
    ],
    markdown: {
      // 显示代码行号
      lineNumbers: false
    },
    themeConfig: {
        logo:"/img/logo.jpg",
        nav: [
          { text: '首页', link: '/timeLine/' },
          { text: '个人简介', link:'/about/'},
          { text: '工作经验', link:'/work/'},
          { text: '项目经验',link: '/project/' },
          { text: '链接',
            items: [
                {text:'博客园',link: 'https://www.cnblogs.com/zeje' },
                {text:'GitHub',link: 'https://github.com/zeje' },
                {text:'简书',link: 'https://www.jianshu.com/u/ab4229112a36' },
                {text:'码云',link: 'https://gitee.com/zeje' },
            ]
          }
        ],
        lastUpdated: 'Last Updated', 
      }
  }