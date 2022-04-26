import React from 'react';
import { Text, Link, css } from 'coral-system';

export default {
  title: 'components/Link',
  component: Link,
};

export const Basic = (args: any) => <Link>Coral System</Link>;

export const ExternalLink = () => (
  <Link href="https://www.163.com" isExternal>
    open 163.com
  </Link>
);

export const LinkInlineWithText = () => (
  <Text>
    The address of NetEase is{' '}
    <Link href="https://www.163.com" isExternal>
      www.163.com
    </Link>
  </Text>
);
