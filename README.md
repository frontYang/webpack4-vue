打包工具：webpack webpack-cli

合并工具: webpack-merge

vueLoader相关：vue-loader vue-template-compiler

样式相关：style-loader postcss-loader autoprefixer sass-loader node-sass css-loader

babel：babel-loader @babel/core @babel/preset-env

html: html-webpack-plugin

ts: typescript ts-loader

图片/字体: file-loader url-loader 

图片优化：responsive-loader jimp

localhost server: webpack-dev-server

可视化性能面板：webpack-bundle-analyzer

样式优化：mini-css-extract-plugin ptimize-css-assets-webpack-plugin

js压缩：uglifyjs-webpack-plugin

清除打包目录: clean-webpack-plugin

错误汇总提示： friendly-errors-webpack-plugin

代码校验：eslint eslint-loader eslint-plugin-vue

ts代码校验: @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest

eslint 规则生成命令行：eslint --init

git 提交限制：husky lint-staged

跨平台设置环境变量：cross-env

单元测试(unit test) jest: jest jest-serializer-vue vue-jest babel-jest jest-transform-stub

其他规则配置：
webpack: build/*js
postcss: postcss.config.js
babel: babel.config.js
eslint: .eslintrc.js  .eslintignore
git: .gitignore
yarn: .yarnrc
typescript: tsconfig.json
jest: jest.config.json