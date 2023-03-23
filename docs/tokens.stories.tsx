import React, { useMemo } from 'react';
import { defaultTheme, Text, Box, Flex, FlexItem } from 'coral-system';

export default {
  title: 'Design Tokens',
};

const renderColor = (value: string) => <Box display="inline-block" size="32px" bg={value} />;
const renderFontSizes = (value: string) => <Text fontSize={value}>Hello World, 你好世界</Text>;
const renderBorders = (value: string) => (
  <Box display="inline-block" height="32px" width="60px" borderColor="black" border={value} />
);
const renderRadii = (value: string) => (
  <Box
    display="inline-block"
    size="32px"
    bg="brand"
    border="solid"
    borderColor="brand"
    borderRadius={value}
  />
);
const renderShadows = (value: string) => (
  <Box height="32px" width="60px" bg="white" boxShadow={value}></Box>
);
const renderSpace = (value: string) => (
  <Flex display="inline-flex" spacing={value}>
    {renderColor('brand')}
    {renderColor('brand')}
    {renderColor('brand')}
  </Flex>
);

const renderMap = {
  colors: renderColor,
  fontSizes: renderFontSizes,
  borders: renderBorders,
  radii: renderRadii,
  shadows: renderShadows,
  space: renderSpace,
  default: (): React.ReactNode => null,
};

function TokenBlock({
  name,
  comment,
  value,
  renderBlock = () => null,
}: {
  name: string;
  comment: string;
  value: string;
  renderBlock?: (value: string) => React.ReactNode;
}) {
  return (
    <Flex px="l" py="s" borderBottom="solid" borderBottomColor="line.normal">
      <FlexItem>{name}</FlexItem>
      <FlexItem>{comment}</FlexItem>
      <FlexItem>{value}</FlexItem>
      <FlexItem display="flex" alignItems="center">
        {renderBlock(value)}
      </FlexItem>
    </Flex>
  );
}

const commentMap = {
  'colors-brand': '品牌色',
  'colors-highlight': '高亮',
  'colors-text-title': '标题',
  'colors-text-body': '正文',
  'colors-text-note': '辅助文本',
  'colors-text-placeholder': '占位符，禁用色',
  'colors-line1': '浅',
  'colors-line2': '一般',
  'colors-line3': '深，悬浮',
  'colors-line4': '重，按钮描边',
  'colors-fill1': '浅，禁用',
  'colors-fill2': '一般，常规，白底悬浮',
  'colors-fill3': '深，灰底悬浮',
  'colors-fill4': '重，特殊场景',
  'colors-fill5': '重，按钮描边',
  'colors-text1': '强调，标题',
  'colors-text2': '次强调，正文',
  'colors-text3': '次要信息',
  'colors-text4': '置灰信息',
  'colors-text5': '白色文本',
};

function TokenGroup({ title, tokens }: { title: string; tokens: Record<string, any> }) {
  const collecting = useMemo(() => {
    let memo = {};

    const parseToken = (value: any, prefix: string) => {
      if (typeof value === 'string') {
        memo[prefix] = value;
      }

      if (typeof value === 'object') {
        Object.keys(value).forEach((v) => {
          parseToken(value[v], `${prefix}-${v}`);
        });
      }
    };

    parseToken(tokens, title);

    return memo;
  }, [tokens, title]);

  const renderBlock = renderMap[title] || renderMap.default;

  return (
    <Box border="solid" borderColor="line.normal" mb="l">
      <Box
        px="l"
        py="m"
        borderBottom="solid"
        borderBottomColor="line.normal"
        fontWeight="bold"
        fontSize="title"
      >
        {title}
      </Box>
      <Box>
        {Object.keys(collecting).map((token) => (
          <TokenBlock
            key={token}
            name={token}
            comment={commentMap[token]}
            value={collecting[token]}
            renderBlock={renderBlock}
          />
        ))}
      </Box>
    </Box>
  );
}

export function Basic() {
  return (
    <Box fontSize="14px" color="text.normal">
      {Object.keys(defaultTheme).map((key) => (
        <TokenGroup key={key} title={key} tokens={defaultTheme[key]} />
      ))}
    </Box>
  );
}
