import nextConfig from 'eslint-config-next'

const configs = Array.isArray(nextConfig) ? nextConfig : [nextConfig]
const [baseConfig, ...rest] = configs

const finalConfig = [
  {
    ...baseConfig,
    rules: {
      ...baseConfig.rules,
      '@next/next/no-img-element': 'off',
    },
  },
  ...rest,
]

export default finalConfig
