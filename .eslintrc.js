module.exports = {
  "extends": "airbnb",
  "globals": {
    "window": true,
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    }
  },
  "rules": {
    "semi": ["error", "never"],
    "max-len": ["error", 120],
    "global-require": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-closing-bracket-location": "off",
    "no-mixed-operators": ["error", {"allowSamePrecedence": true}],
    "eol-last": ["error", "never"],
    "react/sort-comp": ["error", {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ]
      }
    }],
  }
};
