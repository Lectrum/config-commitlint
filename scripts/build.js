// Core
import { transformFileSync } from '@babel/core';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

// Paths
const input = resolve(__dirname, '../src/index.js');
const output = resolve(__dirname, '../index.js');
const babelrc = resolve(__dirname, '../.babelrc');

// Transformation
const { code } = transformFileSync(input, {
    extends: babelrc,
});

writeFileSync(output, code);