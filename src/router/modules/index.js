import home from './home'
import about from './about'


const index = {
  path: '/',
  redirect: '/home',
  // redirect: {name:'我的主页'}, // 这个和上面方法都可以
  // XXXX 这里没起作用？是因为写了 component 这个配置应该写在reirect 属性身上
  // component: () => import('@/views/home/index.vue'),
  // 在写 redirect 的时候，可以省略 component 配置，因为它从来没有被直接访问过，所以没有组件要渲染。唯一的例外是嵌套路由：如果一个路由记录有 children 和 redirect 属性，它也应该有 component 属性。
}
const routes = [index, home, about]

export default routes
