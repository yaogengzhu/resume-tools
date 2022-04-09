import { defineConfig } from 'umi';

export default defineConfig({
  title: '文档生成器',
  publicPath:
    process.env.NODE_ENV === 'development'
      ? '/'
      : 'https://yaogengzhu.github.io/resume-tools/',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  history: { type: 'hash' },
});
