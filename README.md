# generator-ptz-app

[![Build Status](https://travis-ci.org/polutz/generator-ptz-app.svg)](https://travis-ci.org/polutz/generator-ptz-app)
[![codecov.io](http://codecov.io/github/polutz/generator-ptz-app/coverage.svg)](http://codecov.io/github/polutz/generator-ptz-app)
[![Dependency Status](https://gemnasium.com/polutz/generator-ptz-app.svg)](https://gemnasium.com/polutz/generator-ptz-app)
[![bitHound Score](https://www.bithound.io/github/gotwarlost/istanbul/badges/score.svg)](https://www.bithound.io/github/polutz/generator-ptz-app)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Yeoman generator to create polutz app modules.

## How to contribute
[pt-br](https://github.com/polutz/generator-ptz-app/blob/master/docs/contribute.pt-br.md)
[en-us](https://github.com/polutz/generator-ptz-app/blob/master/docs/contribute.md)

## Install
You can remove 'yo typings' if you already have them installed
```
    npm install -g generator-ptz-app yo typings
```

## Create your project
Go to your project folder and run:
```    
    yo ptz-app && typings install
```

## Create an Entity class
replace 'EntityName' with your class name, using first letter as upercase
```    
    yo ptz-app:entity EntityName
```
