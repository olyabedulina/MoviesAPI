const { defaults } = require('jest-config');

module.exports = {
    verbose: true,
    testEnvironment: 'jsdom',
    testRegex: "((\\.|/*.)(test))\\.js?$",
    moduleFileExtensions: [
        ...defaults.moduleFileExtensions, 'css', 'pcss', 'ts', 'tsx', 'jsx', 'json', "js", "node"
    ],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest',
        ".+\\.(css|styl|less|sass|scss|pcss)$": "jest-css-modules-transform",
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-file",
    },
    collectCoverage: true,
    coverageDirectory: 'coverage-report-tests',
    coveragePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"]
}
