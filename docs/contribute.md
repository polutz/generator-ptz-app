# How to help


## Setup

[pt-br](https://github.com/polutz/generator-ptz-app/docs/contribute.pt-br.md)
[en-us](https://github.com/polutz/generator-ptz-app/docs/contribute.md)

### Download project
```
    git clone https://github.com/polutz/generator-ptz-app.git
```

### Go to project folder
```
    cd generator-ptz-app
```

### Install dependencies
```
    npm install -g yo
```

```
    npm install && typings install
```

### Make it globally

With 'npm link', you can run 'yo ptz-app' from anywhere on your machine,
and it will always points to this directory

```
    npm link
```


## Tests
```
    npm test
```

## Integration Test

### Create test project folder
```
    mkdir ptz-app-test && cd ptz-app-test 
```

### Clean test project folder
```
    cd .. && rm -r ptz-app-test && mkdir ptz-app-test && cd ptz-app-test
```

### Run Yeoman
```
    yo ptz-app
```
