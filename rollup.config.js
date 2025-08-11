import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: false,
    },
  ],
  external: ['zod'], // mark zod as external to avoid bundling it
  plugins: [
    resolve(), // resolve node_modules imports
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: 'dist/types',
          outDir: 'dist/temp', // temporary out dir for internal use by plugin
          moduleResolution: 'node', // fix TS module resolution
        },
      },
    }),
  ],
};
