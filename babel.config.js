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
          root: ['./src'],
          alias: {
            components: './src/components',
            screens: './src/screens',
            libs: './src/libs',
          },
        },
      ],
    ],
  }
}
