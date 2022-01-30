module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)', '../**/stories.@(js|jsx|ts|tsx)'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}