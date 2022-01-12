# coral-system

一个轻量级的样式系统和 React 布局原子组件库。

文档地址：https://wwsun.github.io/coral-system/

## Features

- [x] 原子化 css 生成
- [x] 支持 css in js
- [x] 支持 css variables
- [x] 支持 prefix 自定义
- [x] 提供标准化的 Design Token 支持
- [x] css 传入自定义属性 `css={css}`
- [x] css 逻辑的动态表达 `css=[css1, css2]`
- [x] Coral Factory: ` coral('input', css``, { prefix: '' }); `
- [ ] SystemProvider 支持主题快速生成：`primaryColor="hexColor"`
- [ ] 提供 FusionDesign 主题的导入支持
- [ ] 提供 Antd 主题的导入支持
- [ ] 响应式支持
- [ ] 常用伪类支持 \_hover...
- [ ] 常用布局原子：List/Center/...
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

### Factory

使用 coral 方法可以创建具备 style props 的组件。

```tsx
import { coral } from 'coral-system';

const Section = coral('section');

function App() {
  return <Section bg="brand">hello</Section>
}
```

### prefix 优先级

```
props prefix > theme context prefix > option prefix
```

## Development

```bash
# install
$ yarn

# start
$ yarn start
```

## Release

```bash
# publish
$ yarn release

# deploy to github pages
$ yarn story:deploy
```
