import React from 'react';
import { forwardRef } from '../forward-ref';
import { Flex, FlexItem, FlexProps } from './flex';

export interface LabelProps extends FlexProps {
  label?: string;
  labelSpan?: number;
  contentSpan?: number;
}

export const Label = forwardRef<LabelProps, 'label'>((props, ref) => {
  const { label, children, labelSpan, contentSpan, ...rest } = props;

  return (
    <Flex as="label" display="inline-flex" align="center" {...rest} ref={ref}>
      <FlexItem span={labelSpan} fontSize="body" color="text.note" textAlign="right" mr="m">
        {label}
      </FlexItem>
      <FlexItem span={contentSpan}>{children}</FlexItem>
    </Flex>
  );
});
