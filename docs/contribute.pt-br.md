# Como contribuir

[pt-br](https://github.com/polutz/generator-ptz-app/docs/contribute.pt-br.md)
[en-us](https://github.com/polutz/generator-ptz-app/docs/contribute.md)


## Setup

### Download do projeto
```
    git clone https://github.com/polutz/generator-ptz-app.git
```

### Abrir pasta do projeto
```
    cd generator-ptz-app
```

### Instalar dependencias
```
    npm install -g yo
```

```
    npm install && typings install
```

### Instalar globalmente

With 'npm link', you can run 'yo ptz-app' from anywhere on your machine,
and it will always points to this directory

```
    npm link
```


## Testes
```
    npm test
```

## Teste de integração

### Criar pasta do projeto teste
```
    mkdir ptz-app-test && cd ptz-app-test 
```

### Limpar pasta do projeto teste
```
    cd .. && rm -r ptz-app-test && mkdir ptz-app-test && cd ptz-app-test
```

### Criar base do projeto com Yeoman
```
    yo ptz-app
```
