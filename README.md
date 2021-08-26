# coral-system

React primitve ui components built with styled-system

## Usage

```tsx
import { Box, SystemProvider } from 'coral-system';

function App() {
  return (<SystemProvider>
    <Box>hello</Box>
  </SystemProvider>)
}
```

## Development

```bash
# install
$ yarn

# start
$ yarn start
```

## Todo

- [x] 自定义 styled system 解析
- [x] 支持 css variables
- [x] 支持主题内 tokens 的嵌套调用
- [x] 自定义 ThemeProvider
- [ ] 支持自定义主题 token 解析
