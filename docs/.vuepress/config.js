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
  base: `/${basePath}/`,
  serviceWorker: true,
  evergreen: true,
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '工作', link: '/working/'},
      {text: '学习', link: '/yideng/'},
      {
        text: '文章',
        items: [
            {
                text: '随笔',
                link: '/essay/'
            }
        ]
      },
      {text: '关于我', link: '/about/'},
      {text: 'Github', link: 'https://github.com/youzhijia'},
    ],
    sidebar: {
      '/yideng/': [{
        title: '预读班',
        children: ['week0/fn']
      }, {
        title: '第一周',
        children: ['week1/fn']
      }, {
        title: '第二周',
        children: ['week2/fn']
      }],
      '/about/': [['info','个人信息']],
      '/essay/': ['/essay/aaa'],
    },
    sidebarDepth: 3,
    lastUpdated: 'Last Updated'
  }
}