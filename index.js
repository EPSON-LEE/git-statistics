/*
 * @Author: lijiahao
 * @Date: 2019-10-23 17:49:28
 * @LastEditors: superYipe
 * @LastEditTime: 2019-10-23 18:05:08
 */

const program = require('commander')
const CFonts = require('cfonts');
const { version } = require('./package.json')
const shell = require('shelljs')

// CFonts.say('Git statistics', {
//   font: 'block',              // define the font face
//   align: 'center',              // define text alignment
//   colors: ['cyan'],         // define all colors
//   background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
//   letterSpacing: 1,           // define letter spacing
//   lineHeight: 1,              // define the line height
//   space: true,                // define if the output text should have empty lines on top and on the bottom
//   maxLength: '0',             // define how many character can be on one line
// })

program.command('count')
  .alias('ct')
  .description('Count number of lines in a git repository')
  .action((name) => {
    shell.exec('git status')
  })

program.version(version)
  .parse(process.argv)