export default {
  plugins: [
    require('@tailwindcss/postcss')({
      config: './tailwind.config.ts',
    }),
    require('autoprefixer'),
  ],
};