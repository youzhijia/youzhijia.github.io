
# 自动部署脚本  
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 构建
npm run build

# 导航到构建输出目录
cd docs/.vuepress/dist

git init
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io 推到仓库的 master 分支
# git push -f git@github.com:youzhijia/youzhijia.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:youzhijia/blog.git master:gh-pages

cd -