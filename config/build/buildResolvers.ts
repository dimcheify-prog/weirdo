import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    // mainFields: ['index'], с этим параметром были проблемы с использованием node_modules, когда не находил у них index файла
    // внести ли строку src для alias
    alias: { '@/*': options.paths.src + '/*' },
    fallback: {
      events: require.resolve('events/'),
      'set-cookie-parser': require.resolve('set-cookie-parser'),
    },
  };
}
