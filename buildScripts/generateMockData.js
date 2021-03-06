/*  This script generate mock data for local development.
    This way you dont't have to point to an actual API,
    but you can enjoy realistic, but randomized data,
    and rapid page loads due to local, static data.
*/

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const outputFile = './src/api/db.json';

jsf.extend('faker', function() {
  return require('faker');
});

jsf.resolve(schema).then(function(result) {
  fs.writeFile(outputFile, JSON.stringify(result, null, 2), function(err) {
    if (err) {
      return console.log(chalk.red(err.message));
    } else {
      console.log(chalk.green(`Mock Data Generated Here: ${outputFile}`));
    }
  });
});
