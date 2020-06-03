module.exports = {
  "presets": [
    "@babel/preset-react",
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/plugin-proposal-object-rest-spread",
    "lodash",
    [
      "babel-plugin-root-import",
      {
        "paths": [
          {
            "rootPathSuffix": "./",
            "rootPathPrefix": "~/"
          },
          {
            "rootPathSuffix": "./app/assets/javascripts/components",
            "rootPathPrefix": "@components/"
          },
          {
            "rootPathSuffix": "./app/assets/javascripts/constants",
            "rootPathPrefix": "@constants/"
          }
        ]
      }
    ]
  ],
  "env": {
    "test": {
      "plugins": [
        "@babel/plugin-transform-modules-commonjs",
        "@babel/plugin-transform-runtime"
      ],
      "ignore": [
        "i18n/*.js"
      ]
    }
  }
}
