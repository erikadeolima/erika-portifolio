/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    theme: {
      container: {
        center: true,
      },
    },
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
  },
};
