import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars';
import cssnano from 'cssnano';

export default {
	entry: 'src/js/App.jsx',
	dest: 'src/app.min.js',
	format: 'iife',
	sourceMap: 'inline',
    external: [ 'react' ],
	plugins: [
		postcss({
			plugins: [
         		simplevars(),
        		cssnano(),
       		],
			extensions: [ '.css' ],
		}),
		resolve({
			jsnext: true,
			main: true,
			browser: true,
		}),
		commonjs(),
		babel({
			exclude: 'node_modules/**',
			runtimeHelpers: true,
		}),
	    /*eslint({
	      exclude: [
	        'src/css/**',
	      ]
	  }),*/
		(process.env.NODE_ENV === 'production' && uglify()),
  ],
};