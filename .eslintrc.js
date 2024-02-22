module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    extraFileExtensions: [".vue"],
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ["vue", "@typescript-eslint"],
  extends: [
    "plugin:json/recommended",
    "plugin:vue/vue3-recommended",
    "@vue/airbnb",
    "@vue/typescript/recommended",
    './.eslintrc-auto-import.json',
  ],
  rules: {
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: ["interface", "type"],
        next: "*",
      },
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "function",
      },
    ],
    "brace-style": ["error", "1tbs", { allowSingleLine: false }],
    "eol-last": ["error", "always"],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    quotes: ["error", "single"],
    "jsx-quotes": ["error", "prefer-double"],
    "vue/html-quotes": ["error", "double", { avoidEscape: true }],
    "max-statements-per-line": ["error", { max: 1 }],
    "vue/multiline-html-element-content-newline": ["error"], // 多行html中的内容是否独占一行
    "vue/singleline-html-element-content-newline": ["error"],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    "array-element-newline": ["error", "consistent"],
    "array-bracket-newline": ["error", "consistent"], // []新一行
    "vue/array-bracket-newline": ["error", "consistent"],
    "comma-dangle": ["error", "always-multiline"], // 最后一个对象元素加逗号
    "object-property-newline": ["error", { allowAllPropertiesOnSameLine: false }],
    "vue/object-property-newline": ["error", { allowAllPropertiesOnSameLine: false }],
    // 'vue/space-infix-ops': ['error', { int32Hint: true }],
    "vue/multi-word-component-names": 0,

    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    curly: "error", // 强制if括号包裹，无效
    "max-len": ["error", { code: 150, ignoreStrings: true }],
    "vuejs-accessibility/click-events-have-key-events": "off",
    "linebreak-style":["error", "windows"]
  },
  overrides: [
    {
      files: ["**/*.vue"],
      rules: {
        "max-len": "off",
        "vue/max-len": [
          "error",
          {
            code: 200,
            template: 150,
            ignoreStrings: true,
          },
        ],
      },
    },
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
  globals: {
    CustomRequired: true,
    CustomPartial: true,
    ListFormType: true,
    LabelType: true,
    KeyValue: true,
    ErrorType: true,
    defineProps: true,
    defineEmits: true,
    defineExpose: true,
    RemoteComponentRef: true,
  },
};
