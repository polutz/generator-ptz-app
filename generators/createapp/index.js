'use strict';

var Generator = require('yeoman-generator'),
    _ = require('lodash');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
        this.argument('entity', { type: String, required: true });
    }

    //writing - Where you write the generator specific files (routes, controllers, etc)
    writing() {

        var vars = {
            appClassName: this.options.entity + 'App',
            appClassVarName: this.options.entity.toLowerCase() + 'App',
            repositoryName: this.options.entity + 'Repository',
            repositoryVarName: this.options.entity.toLowerCase() + 'Repository',
            entity: this.options.entity,
            entityVar: this.options.entity.toLowerCase(),
            domain: 'ptz-' + this.options.entity.toLowerCase() + '-domain'
        };

        this.fs.copyTpl(
            this.templatePath('src/_App.ts'),
            this.destinationPath('src/' +  vars.appClassName + '.ts'),
            vars);

        this.fs.copyTpl(
            this.templatePath('src/_App.test.ts'),
            this.destinationPath('src/' + vars.appClassName + '.test.ts'),
            vars);
    }
};
