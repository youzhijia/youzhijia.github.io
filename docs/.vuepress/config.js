const basePath = 'blog'

module.exports = {
  title: '由志佳-前端积累',
  description: '种一棵树最好的时间是十年前，其次就是现在',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.png' }], 
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/favicon.png' }],
  ],
  dest: './docs/.vuepress/dist',
  // base: `/${basePath}/`,
  serviceWorker: true,
  evergreen: true,
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '学习', link: '/yideng/'},
      {
        text: '工作',
        items: [
            {
                text: '链家网（贝壳）',
                link: '/lianjia/'
            }
        ]
      },
      {
        text: '标签',
        items: [
            {
                text: 'awesome-bookmarks',
                link: 'https://panjiachen.github.io/awesome-bookmarks/'
            }
        ]
      },
      {text: 'Github', link: 'https://github.com/youzhijia'},
      {text: '关于', link: '/about/'},
    ],
    sidebar: {
      '/yideng/': [{
        title: '预读',
        children: ['week0/ES5', 'week0/HTML']
      }, {
        title: 'javascript语言新发展',
        children: ['week1/JS_QA']
      }, {
        title: '大话NodeJS72般变化',
        children: ['week2/NodeJS']
      }, {
        title: '前端工程化那些事',
        children: ['week3/webpack']
      }, {
        title: '前端性能优化与工程化',
        children: ['week4/server']
      }, {
        title: 'CSS古话今说与网站重构',
        children: ['week5/CSS']
      }, {
        title: 'MVC MVVM架构那些事',
        children: ['week6/Typescript', 'week6/Vue', 'week6/React']
      }, {
        title: '前端跨界AI&iOS&PC&Android&IOT',
        children: ['week7/Android']
      }, {
        title: '数据结构与算法JavaScript实践',
        children: ['week8/algorithms']
      }, {
        title: 'JavaScript图形学和H5游戏',
        children: ['week9/Canvas']
      }, {
        title: '设计模式与网络安全专场',
        children: ['week10/designMode']
      }],
      '/lianjia/': [{
        title: '基础',
        children: ['basic/standard', 'basic/git']
      }, {
        title: '项目',
        children: ['project/1']
      }, {
        title: '团队',
        children: ['team/standard']
      }, {
        title: '业务',
        children: ['business/1']
      }, {
        title: '绩效',
        children: ['performance/1']
      }, {
        title: '分享',
        children: ['share/1']
      }],
      '/about/': ['resume', 'interview'],
    },
    sidebarDepth: 3,
    lastUpdated: 'Last Updated'
  }
}