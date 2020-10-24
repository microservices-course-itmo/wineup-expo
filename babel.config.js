module.exports = (api) => {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.ts',
            '.tsx',
            '.android.ts',
            '.android.tsx',
            '.ios.ts',
            '.ios.tsx',
          ],
          root: ['src'],
          alias: {
            '@molecules': 'molecules',
            '@atoms': 'atoms',
            '@screens': 'screens',
            '@libs': 'libs',
          },
        },
      ],
    ],
  }
}
