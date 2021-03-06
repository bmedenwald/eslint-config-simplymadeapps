module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "xo",
    "plugin:unicorn/recommended",
    "prettier",
    "prettier/react"
  ],
  "globals": {
    "afterAll": true,
    "afterEach": true,
    "beforeAll": true,
    "beforeEach": true,
    "describe": true,
    "expect": true,
    "it": true,
    "jest": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "import",
    "prettier",
    "react",
    "sort-class-members",
    "unicorn"
  ],
  "rules": {
    "capitalized-comments": "off",
    "eqeqeq": [
      "error",
      "always",
      {
        "null": "never"
      }
    ],
    "guard-for-in": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unassigned-import": "off",
    "import/no-unresolved": "off",
    "import/order": "off",
    "no-alert": "off",
    "no-eq-null": "off",
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "React"
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "printWidth": 120
      }
    ],
    "radix": [
      "error",
      "as-needed"
    ],
    "react/jsx-no-literals": 1,
    "react/jsx-uses-vars": 1,
    "sort-class-members/sort-class-members": [
      2,
      {
        "groups": {
          "other-methods": [
            {
              "name": "/^(?!render|constructor).+/",
              "sort": "alphabetical",
              "type": "method"
            }
          ],
          "render-methods": [
            {
              "name": "/render.+/",
              "sort": "alphabetical",
              "type": "method"
            }
          ]
        },
        "order": [
          "constructor",
          "[other-methods]",
          "[render-methods]"
        ],
        "stopAfterFirstProblem": true
      }
    ],
    "valid-jsdoc": [
      "error",
      {
        "requireReturn": false,
        "requireReturnDescription": false
      }
    ]
  }
};
