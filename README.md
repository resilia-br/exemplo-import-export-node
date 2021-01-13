# exemplo import/export node

## Introdução

Esse repositório tem como objetivo exemplificar a importação e exportação de código utilizando o Javascript.

## Informações do projeto

### Formato

O node utiliza o método do CommonJS (CSJ):
- Para exportar código, utiliza a diretiva `module.exports`
- Para importar código, utiliza a diretiva `require`

### Estrutura

O projeto conta com 5 arquivos: 4 módulos independentes e um arquivo que é responsável por importar e unificar os códigos.

### Exportações

- `exportador-var.js`: exporta uma variável
- `exportador-func.js`: exporta uma função
- `exportador-obj.js`: exporta um objeto
- `exportador-obj-destruct.js`: exporta um objeto para ser importado utilizando desestruturação

## Rodando o projeto

Para rodar o projeto, basta executar o arquivo `importador.js`:

```$ node importador.js```
