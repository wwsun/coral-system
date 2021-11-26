import React from 'react';
import { Box, Grid, GridItem } from 'coral-system';

export default {
  title: 'Grid',
  component: Grid,
  subcomponents: { GridItem },
};

/**
 * 多列
 */
export function Columns() {
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
export function AutoResponsive() {
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
export function Spacing() {
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
export function ColSpan() {
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
export function Complex() {
  return (
    <Grid height="200px" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" spacing="m">
      <GridItem rowSpan={2} colSpan={1} bg="black" />
      <GridItem colSpan={2} bg="orange" />
      <GridItem colSpan={2} bg="orange" />
      <GridItem colSpan={4} bg="black" />
    </Grid>
  );
}

export function StartEnd() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" spacing="m">
      <GridItem colSpan={2} height="40px" bg="tomato" />
      <GridItem colStart={4} colEnd={6} height="40px" bg="papayawhip" />
    </Grid>
  );
}
