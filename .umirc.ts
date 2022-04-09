import { defineConfig } from 'umi'

export default defineConfig({
  title: '文档生成器',
  // publicPath: '',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/',component: '@/pages/index' },
  ],
  fastRefresh: {},
})
