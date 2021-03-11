export default {
  expo: {
    name: 'WineUp',
    slug: 'wineup-expo',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      STORYBOOK: process.env.STORYBOOK,
    },
    packagerOpts: {
      sourceExts: ['cjs'],
    },
  },
}
