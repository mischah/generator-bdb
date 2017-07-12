'use strict';
var fs = require('fs')
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var fruitChoice 

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the spectacular ' + chalk.red('generator-bdb') + ' generator!'
    ));


//    {
//       type: 'confirm',
//       name: 'someAnswer',
//       message: 'Would you like to enable this option?',
//       default: true
//     },{
//       type    : 'input',
//       name    : 'name',
//       message : 'Your project name',
//       default : this.appname // Default to current folder name
//     },


    var prompts = [{
        type: 'list',
        name: "project",
        message: "Which template do you want to use?",
        choices: [{
            name: 'Webpack',
            value: ['webpack']
        }, {
            name: 'Advertisement',
            value: ['advertisment']
        }]
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      console.log(this.props.project[0]);
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath(this.props.project[0]),
      this.destinationPath('./')
    );

    // Copy all dotfiles
    this.fs.copy(
      this.templatePath(this.props.project[0]+'/.*'),
      this.destinationRoot('./')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
