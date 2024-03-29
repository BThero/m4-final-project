import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  :root {
    /* Gray */
    --color-gray-25: #fcfcfd;
    --color-gray-50: #f9fafb;
    --color-gray-100: #f2f4f7;
    --color-gray-200: #e4e7ec;
    --color-gray-300: #d0d5dd;
    --color-gray-400: #98a2b3;
    --color-gray-500: #667085;
    --color-gray-600: #475467;
    --color-gray-700: #344054;
    --color-gray-800: #1d2939;
    --color-gray-900: #101828;
    /* Primary */
    --color-primary-25: #fcfaff;
    --color-primary-50: #f9f5ff;
    --color-primary-100: #f4ebff;
    --color-primary-200: #e9d7fe;
    --color-primary-300: #d6bbfb;
    --color-primary-400: #b692f6;
    --color-primary-500: #9e77ed;
    --color-primary-600: #7f56d9;
    --color-primary-700: #6941c6;
    --color-primary-800: #53389e;
    --color-primary-900: #42307d;
    /* Error */
    --color-error-25: #fffbfa;
    --color-error-50: #fef3f2;
    --color-error-100: #fee4e2;
    --color-error-200: #fecdca;
    --color-error-300: #fda29b;
    --color-error-400: #f97066;
    --color-error-500: #f04438;
    --color-error-600: #d92d20;
    --color-error-700: #b42318;
    --color-error-800: #912018;
    --color-error-900: #7a271a;
    /* Warning */
    --color-warning-25: #fffcf5;
    --color-warning-50: #fffaeb;
    --color-warning-100: #fef0c7;
    --color-warning-200: #fedf89;
    --color-warning-300: #fec84b;
    --color-warning-400: #fdb022;
    --color-warning-500: #f79009;
    --color-warning-600: #dc6803;
    --color-warning-700: #b54708;
    --color-warning-800: #93370d;
    --color-warning-900: #7a2e0e;
    /* Success */
    --color-success-25: #f6fef9;
    --color-success-50: #ecfdf3;
    --color-success-100: #d1fadf;
    --color-success-200: #a6f4c5;
    --color-success-300: #6ce9a6;
    --color-success-400: #32d583;
    --color-success-500: #12b76a;
    --color-success-600: #039855;
    --color-success-700: #027a48;
    --color-success-800: #05603a;
    --color-success-900: #054f31;
    /* blue-gray */
    --color-blue-gray-25: #fcfcfd;
    --color-blue-gray-50: #f8f9fc;
    --color-blue-gray-100: #eaecf5;
    --color-blue-gray-200: #c8cce5;
    --color-blue-gray-300: #9ea5d1;
    --color-blue-gray-400: #717bbc;
    --color-blue-gray-500: #4e5ba6;
    --color-blue-gray-600: #3e4784;
    --color-blue-gray-700: #363f72;
    --color-blue-gray-800: #293056;
    --color-blue-gray-900: #101323;
    /* blue-light */
    --color-blue-light-25: #f5fbff;
    --color-blue-light-50: #f0f9ff;
    --color-blue-light-100: #e0f2fe;
    --color-blue-light-200: #b9e6fe;
    --color-blue-light-300: #7cd4fd;
    --color-blue-light-400: #36bffa;
    --color-blue-light-500: #0ba5ec;
    --color-blue-light-600: #0086c9;
    --color-blue-light-700: #026aa2;
    --color-blue-light-800: #065986;
    --color-blue-light-900: #0b4a6f;
    /* blue */
    --color-blue-25: #f5faff;
    --color-blue-50: #eff8ff;
    --color-blue-100: #d1e9ff;
    --color-blue-200: #b2ddff;
    --color-blue-300: #84caff;
    --color-blue-400: #53b1fd;
    --color-blue-500: #2e90fa;
    --color-blue-600: #1570ef;
    --color-blue-700: #175cd3;
    --color-blue-800: #1849a9;
    --color-blue-900: #194185;
    /* indigo */
    --color-indigo-25: #f5f8ff;
    --color-indigo-50: #eef4ff;
    --color-indigo-100: #e0eaff;
    --color-indigo-200: #c7d7fe;
    --color-indigo-300: #a4bcfd;
    --color-indigo-400: #8098f9;
    --color-indigo-500: #6172f3;
    --color-indigo-600: #444ce7;
    --color-indigo-700: #3538cd;
    --color-indigo-800: #2d31a6;
    --color-indigo-900: #2d3282;
    /* purple */
    --color-purple-25: #fafaff;
    --color-purple-50: #f4f3ff;
    --color-purple-100: #ebe9fe;
    --color-purple-200: #d9d6fe;
    --color-purple-300: #bdb4fe;
    --color-purple-400: #9b8afb;
    --color-purple-500: #7a5af8;
    --color-purple-600: #6938ef;
    --color-purple-700: #5925dc;
    --color-purple-800: #4a1fb8;
    --color-purple-900: #3e1c96;
    /* pink */
    --color-pink-25: #fef6fb;
    --color-pink-50: #fdf2fa;
    --color-pink-100: #fce7f6;
    --color-pink-200: #fcceee;
    --color-pink-300: #faa7e0;
    --color-pink-400: #f670c7;
    --color-pink-500: #ee46bc;
    --color-pink-600: #dd2590;
    --color-pink-700: #c11574;
    --color-pink-800: #9e165f;
    --color-pink-900: #851651;
    /* rose */
    --color-rose-25: #fff5f6;
    --color-rose-50: #fff1f3;
    --color-rose-100: #ffe4e8;
    --color-rose-200: #fecdd6;
    --color-rose-300: #fea3b4;
    --color-rose-400: #fd6f8e;
    --color-rose-500: #f63d68;
    --color-rose-600: #e31b54;
    --color-rose-700: #c01048;
    --color-rose-800: #a11043;
    --color-rose-900: #89123e;
    /* orange */
    --color-orange-25: #fffaf5;
    --color-orange-50: #fff6ed;
    --color-orange-100: #ffead5;
    --color-orange-200: #fddcab;
    --color-orange-300: #feb273;
    --color-orange-400: #fd853a;
    --color-orange-500: #fb6514;
    --color-orange-600: #ec4a0a;
    --color-orange-700: #c4320a;
    --color-orange-800: #9c2a10;
    --color-orange-900: #7e2410;
    /* custom */
    --color-bg: #111111;

    /* these colors are used in blurs.css */
    --color-blur-light: #ffffff99;
    --color-blur-dark: #34405499;
    /* these colors are used in shadows.css */
    --color-shadow-xs: #1018280d;
    --color-shadow-sm-first: #1018281a;
    --color-shadow-sm-second: #1018280f;
    --color-shadow-md-first: #1018281a;
    --color-shadow-md-second: #1018280f;
    --color-shadow-lg-first: #1018281a;
    --color-shadow-lg-second: #1018280d;
    --color-shadow-xl-first: #1018281a;
    --color-shadow-xl-second: #1018280a;
    --color-shadow-2xl: #10182840;
    --color-shadow-3xl: #10182833;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;
