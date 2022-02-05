import React, { ReactElement } from 'react';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#FFFDF9',
    persianGreen: '#06B49A',
    ming: '#006775',
    lightMing: '#028585',
    onyx: '#36313D',
    orange: '#F46036',
    platinum: '#EAEAEA',
    lightGreen: '#7ADFBB',
    cambrigeBlue: '#ABC4AB',
    grey: '#bbbbbb',
  },
};

type ThemeType = {
  children: ReactElement;
};

const Theme = ({ children }: ThemeType) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
