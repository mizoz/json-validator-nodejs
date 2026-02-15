#!/usr/bin/env node
/** JSON validator */
const fs=require('fs');
const a=process.argv.slice(2);
if(!a[0]){console.log('Usage: json-validator.js <file.json>');process.exit(1);}
try{JSON.parse(fs.readFileSync(a[0]));console.log('Valid JSON ✓');}catch(e){console.log('Invalid:',e.message);process.exit(1);}
