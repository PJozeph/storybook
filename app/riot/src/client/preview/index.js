import { start } from '@storybook/core/client';

import './globals';
import riot, { tag2, mount as vendorMount } from 'riot';
import render from './render';
import { compileNow as unboundCompileNow, asCompiledCode } from './compileNow';

const { clientApi, configApi, forceReRender } = start(render);

export const {
  storiesOf,
  setAddon,
  addDecorator,
  addParameters,
  clearDecorators,
  getStorybook,
} = clientApi;

export const { configure } = configApi;
const mount = vendorMount.bind(riot, '#root');
const compileNow = unboundCompileNow.bind(null, tag2);
export { forceReRender, render, tag2 as tag, mount, compileNow, asCompiledCode };
