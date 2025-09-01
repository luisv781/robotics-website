/** @type {import('postcss-load-config').Config} */
import autoprefixer from 'autoprefixer';
import tailwindcss from '@tailwindcss/postcss';
const config = {
    plugins: [autoprefixer, tailwindcss],
};

module.exports = config;
