/*
 * @Author: liukai 1587680247@qq.com
 * @Date: 2024-06-04 10:10:26
 * @LastEditors: liukai 1587680247@qq.com
 * @LastEditTime: 2024-06-04 17:43:12
 * @FilePath: \H5Audit\postcss.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import tailwind from 'tailwindcss';
import tailwindConfig from './tailwind.config.js';
import autoprefixer from 'autoprefixer';
// import pxtorem from 'postcss-pxtorem';
export default {
	plugins: [
    // pxtorem({
    //   fontSize: 16,
    //   rootValue: 75,
    //   propList: ['*'],
    //   replace: false
    // }),
    tailwind(tailwindConfig), 
    autoprefixer
    
  ],
};
