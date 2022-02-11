"use strict";

require("@rushstack/eslint-patch/modern-module-resolution");

const basic = require("./src/basic");
const react = require("./src/react");
const translations = require("./src/translations");
const jest = require("./src/jest");
const emotion = require("./src/emotion");
const storybook = require("./src/storybook");
const redux = require("./src/redux");

const configs = {
  basic,
  react,
  translations,
  jest,
  emotion,
  storybook,
  redux,
};

module.exports = {
  configs,
};
