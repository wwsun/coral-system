# coral-system

一个轻量级的 React 原子组件库，为上层提供灵活和轻量级的样式布局方案。

## Features

- [x] 支持 css in js
- [x] 支持 css variables
- [x] 支持 prefix 自定义
- [x] 提供标准化的 Design Token 支持
- [ ] 提供 FusionDesign 主题的导入支持
- [ ] 响应式支持

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
```
