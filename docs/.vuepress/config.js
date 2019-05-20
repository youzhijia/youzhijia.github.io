const basePath = 'blog'

module.exports = {
  title: '由志佳-前端积累',
  description: '种一棵树最好的时间是十年前，其次就是现在',
  head: [
    ['link', { rel: 'icon', href: 'imgs/favicon.png' }], 
    ['link', { rel: 'manifest', href: 'public/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: 'favicon.png' }],
  ],
  dest: './docs/.vuepress/dist',
  base: `/${basePath}/`,
  serviceWorker: true,
  evergreen: true,
  ga: 'UA-112738831-1',
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
                link: '/article/essay/'
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
      '/article/essay/': ['/article/essay/aaa'],
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
  }
}