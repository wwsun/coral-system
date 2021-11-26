# coral-system

一个轻量级的样式系统和 React 布局原子组件库。

文档地址：https://wwsun.github.io/coral-system/

## Features

- [x] 支持 css in js
- [x] 支持 css variables
- [x] 支持 prefix 自定义
- [x] 提供标准化的 Design Token 支持
- [ ] 提供 FusionDesign 主题的导入支持
- [ ] 响应式支持
- [ ] 常用伪类支持 _hover...
- [ ] 常用布局原子：List/...
- [ ] pointerEvents

## Usage

```tsx
import { Box, SystemProvider } from 'coral-system';

function App() {
  return (
    <SystemProvider prefix="--coral" theme={YOUR_THEME}>
      <Box>hello</Box>
    </SystemProvider>
  );
}
```

## Development

```bash
# install
$ yarn

# start
$ yarn start

# Change version
$ yarn version

# publish
$ npm publish

# push
$ git push

# push tags
$ git push --tags
```

## Deploy documents

deploy to github pages

```bash
$ yarn story:deploy
```
