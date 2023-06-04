class ThemeConfig {
  blue = {
    token: {
      fontFamily: 'var(--font-family-base)',
      fontSize: 16,

      colorBgBase: '#fff',

      colorBorder: 'rgb(41, 182, 246, 0.2)',

      colorPrimary: '#1565c0',
      colorLinkHover: '#1565c0',
      colorBgSpotlight: '#1565c0',

      colorTextBase: "rgb(28, 49, 68)",
      colorLink: "rgb(28, 49, 68)",
    }
  };

  red = {
    token: {
      fontFamily: 'var(--font-family-base)',
      fontSize: 16,

      colorBgBase: '#fff6c3',

      colorBorder: 'rgba(220, 0, 0, 0.2)',

      colorPrimary: '#850000',
      colorLinkHover: '#850000',
      colorBgSpotlight: '#850000',

      colorTextBase: "rgb(28, 49, 68)",
      colorLink: "rgb(28, 49, 68)",
    }
  };

  green = {
    token: {
      fontFamily: 'var(--font-family-base)',
      fontSize: 16,

      colorBgBase: '#282c16',

      colorBorder: 'rgba(220, 253, 2, 0.2)',

      colorPrimary: '#b1cc02',
      colorLinkHover: '#b1cc02',
      colorBgSpotlight: '#b1cc02',

      colorTextBase: "#fff",
      colorLink: "#fff",

      colorTextLightSolid: '#373c1f',
    }
  };

  dark = {
    token: {
      fontFamily: 'var(--font-family-base)',
      fontSize: 16,

      colorBgBase: '#2c3333',

      colorBorder: 'rgba(165, 201, 202, 0.2)',

      colorPrimary: '#e7f6f2',
      colorLinkHover: '#e7f6f2',
      colorBgSpotlight: '#e7f6f2',

      colorTextBase: 'rgb(231, 246, 242)',
      colorLink: 'rgb(231, 246, 242)',

      colorTextLightSolid: '#395b64',
    }
  };
}

export const themeConfig = new ThemeConfig();
