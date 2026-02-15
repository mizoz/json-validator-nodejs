# JSON Validator Node.js

[![npm Version](https://img.shields.io/npm/v/json-validator-nodejs?style=flat-square)](https://www.npmjs.com/package/json-validator-nodejs)
[![npm Downloads](https://img.shields.io/npm/dm/json-validator-nodejs?style=flat-square)](https://www.npmjs.com/package/json-validator-nodejs)
[![License](https://img.shields.io/npm/l/json-validator-nodejs?style=flat-square)](LICENSE)
[![Node Version](https://img.shields.io/node/v/json-validator-nodejs?style=flat-square)](https://www.npmjs.com/package/json-validator-nodejs)
[![GitHub Stars](https://img.shields.io/github/stars/mizoz/json-validator-nodejs?style=flat-square)](https://github.com/mizoz/json-validator-nodejs)

> A fast and reliable Node.js CLI tool for validating JSON syntax.

## Features

- Validate JSON syntax quickly
- Format and prettify JSON
- Minify JSON
- Check for common JSON errors
- Batch file validation
- JavaScript/TypeScript API

## Installation

### From npm

```bash
npm install -g json-validator-nodejs
```

### From Source

```bash
git clone https://github.com/mizoz/json-validator-nodejs.git
cd json-validator-nodejs
npm install
```

## Usage

### Command Line

```bash
# Validate JSON
json-validate "{\"name\": \"test\"}"

# Validate a file
json-validate --file data.json

# Prettify JSON
json-validate --prettify "{\"name\":\"test\"}"

# Minify JSON
json-validate --minify {
