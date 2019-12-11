const basePath = 'blog'

module.exports = {
  title: '小幼稚-FE',
  description: '日复一日的积累才有收获，才能成功！学习这件事，不是缺乏时间，而是缺乏努力！',
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
      {text: '积累', link: '/accumulate/'},
      {
        text: '学习',
        items: [
          {
            text: '书籍',
            link: '/studying/'
          },
          {
            text: '京程一灯',
            link: '/yideng/'
          },
          {
            text: '慕课网',
            link: '/muke/'
          }
        ]
      },
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
        text: '生活',
        items: [
          {
            text: '阅读',
            link: '/reading/'
          },
          {
            text: '育儿',
            link: '/education/'
          },
          {
            text: '健身',
            link: '/fitness/'
          }
        ]
      },
      {
        text: '面试',
        items: [
          {
            text: '技术题库',
            link: '/tech-QA/'
          },
          {
            text: '项目题库',
            link: '/project-QA/'
          },
          {
            text: '开放题库', 
            link: '/open-QA/'
          },
          {
            text: '面经', 
            link: '/others-QA/'
          },
        ]
      },
      {
        text: '博客',
        items: [
          {
            text: 'awesome-bookmarks',
            link: 'https://panjiachen.github.io/awesome-bookmarks/'
          },
          {
            text: 'yhlben',
            link: 'https://yhlben.github.io/blog/'
          }
        ]
      },
      {
        text: 'Github',
        items: [
          {
            text: '我的Github',
            link: 'https://github.com/youzhijia'
          }
        ]
      },
    ],
    sidebar: {
      '/accumulate/':[
        {
          title: '正则表达式',
          children: ['RegExp']
        },{
          title: 'CSS',
          children: ['css/css-api-1', 'css/css-api-2']
        }
      ],
      '/studying/':[

      ],
      '/yideng/': [{
        title: '预读',
        children: ['week0/HTML', 'week0/CSS3d', 'week0/CSS3-1', 'week0/CSS3-2', 'week0/CSS-math', 'week0/ES5','week0/jQuery', 'week0/BackEnd.md', 'week0/BackEnd-Language']
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
        children: ['week6/Typescript', 'week6/Vue', 'week6/Vue-deep', 'week6/React']
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
      '/muke/':[
        {
          title: '免费课',
          children: []
        }, {
          title: '实战课',
          children: []
        },
      ],
      '/lianjia/': [{
        title: '基础',
        children: ['basic/standard', 'basic/gitBase']
      }, {
        title: '项目',
        children: []
      }, {
        title: '团队',
        children: ['team/standard']
      }, {
        title: '业务',
        children: []
      }, {
        title: '绩效',
        children: []
      }, {
        title: '分享',
        children: []
      }],
      '/reading/':[

      ],
      '/education/':[

      ],
      '/fitness/':[

      ],
      '/tech-QA/':[
        {
          title: 'HTML',
          children: ['html/HFQ-1']
        }, {
          title: 'CSS',
          children: ['css/HFQ-1', 'css/49-1']
        }, {
          title: 'JS',
          children: ['js/HFQ-0', 'js/HFQ-1']
        }, {
          title: 'ES6',
          children: []
        }, {
          title: 'React',
          children: ['react/life-cycle', 'react/fiber', 'react/HOC', 'react/setState', 'react/transaction', 'react/redux', 'react/reactHooks', 'react/fn-pro']
        }, {
          title: 'Vue',
          children: []
        }, {
          title: '算法',
          children: []
        }, {
          title: '浏览器',
          children: ['浏览器/HFQ-1']
        }, {
          title: '性能优化',
          children: []
        }, {
          title: 'Webpack',
          children: []
        }, {
          title: 'Node',
          children: []
        }, {
          title: 'Typescript',
          children: []
        }, 
      ],
      '/project-QA/':[

      ],
      '/open-QA/':[

      ],
      '/others-QA/':[

      ],
    },
    sidebarDepth: 3,
    lastUpdated: 'Last Updated'
  }
}