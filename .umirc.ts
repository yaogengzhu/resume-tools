import { defineConfig } from 'umi';

export default defineConfig({
  title: '文档生成器',
  publicPath: 'https://yaogengzhu.github.io/resume-tools/',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
