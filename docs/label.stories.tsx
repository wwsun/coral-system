import React from 'react';
import { Group, Label } from 'coral-system';

export default {
  title: 'components/Label',
  component: Label,
};

export const Basic = () => (
  <Label label="按钮">
    <button>hello</button>
  </Label>
);

export const LabelList = () => (
  <Group display="flex" flexDirection="column" rowGap="l">
    <Label label="按钮" labelSpan={2}>
      <button>hello</button>
    </Label>
    <Label label="输入框" labelSpan={2}>
      <input />
    </Label>
  </Group>
);
