import React from 'react';
import { Box, Grid, GridItem } from 'coral-system';

export default {
  title: 'components/Grid',
  component: Grid,
  subcomponents: { GridItem },
};

/**
 * 多列
 */
export function Columns(args: any) {
  return (
    <Grid columns={3} spacing="l">
      <Box bg="brand" height="80px" />
      <Box bg="brand" height="80px" />
      <Box bg="brand" height="80px" />
      <Box bg="brand" height="80px" />
      <Box bg="brand" height="80px" />
      <Box bg="brand" height="80px" />
    </Grid>
  );
}

/**
 * 自动响应式
 */
export function AutoResponsive(args: any) {
  return (
    <Grid minChildWidth="120px" spacing="l">
      <Box bg="brand" height="80px" />
      <Box bg="brand" height="80px" />
      <Box bg="brand" height="80px" />
      <Box bg="brand" height="80px" />
      <Box bg="brand" height="80px" />
      <Box bg="brand" height="80px" />
    </Grid>
  );
}

/**
 * 间距
 */
export function Spacing(args: any) {
  return (
    <Grid columns={3} spacingX="m" spacingY="l">
      <Box bg="brand" height="80px" />
      <Box bg="brand" height="80px" />
      <Box bg="brand" height="80px" />
      <Box bg="brand" height="80px" />
      <Box bg="brand" height="80px" />
      <Box bg="brand" height="80px" />
    </Grid>
  );
}

/**
 * 不同列宽
 */
export function ColSpan(args: any) {
  return (
    <Grid height="100px" templateColumns="repeat(12, 1fr)" spacing="4px">
      <GridItem colSpan={4} bg="brand" />
      <GridItem colSpan={8} bg="orange" />
    </Grid>
  );
}

/**
 * 自定义用法
 */
export function Complex(args: any) {
  return (
    <Grid height="200px" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" spacing="m">
      <GridItem rowSpan={2} colSpan={1} bg="black" />
      <GridItem colSpan={2} bg="orange" />
      <GridItem colSpan={2} bg="orange" />
      <GridItem colSpan={4} bg="black" />
    </Grid>
  );
}

export function StartEnd(args: any) {
  return (
    <Grid templateColumns="repeat(12, 1fr)" spacing="m">
      <GridItem colStart={2} colSpan={2} height="40px" bg="tomato" />
      <GridItem colStart={11} colEnd={13} height="40px" bg="orange" />
    </Grid>
  );
}
