const LoadingComp = '<div>...loading</div>'
const ErrorComp = '<div>Error!!</div>'

const AsyncButton = () => ({
  // 需要加载的组件. 应当是一个 Promise
  component: import('./Button.vue'),
  // loading 时应当渲染的组件
  loading: LoadingComp,
  // 出错时渲染的组件
  error: ErrorComp,
  // 渲染 loading 组件前的等待时间。默认：200ms.
  delay: 2000,
  // 最长等待时间。超出此时间则渲染 error 组件。默认：Infinity
  timeout: 3000
})

// export default Button
export default AsyncButton
