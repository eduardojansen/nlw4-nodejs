# Aula 01 - NLW4 com NODEJS

## Iniciar projeto
`yarn init -y`

## Instalar express como dependência
`yarn add express`

## Instalar pacote de tipagem do express (ajuda no autocomplete). 
### Parâmetro '-D' indica que é uma dependência apenas do ambiente de desenvolvimento.
`yarn add  @types/express -D`

## Instalar typescript como dependência de desenvolvimento
`yarn add typescript -D`

## Iniciar typescript no projeto
### Será criado um arquivo de configuração com nome tsconfig.json
`yarn tsc --init`

## Em tempo de execução ele converte o código TS para Javascript, para que possa ser interpretado
`yarn add ts-node-dev -D`

## Executando arquivo TS 
### adicionar no package.json como um comando ex 'dev', para que o comando abaixo possa ser executado apenas com `yarn dev`
`ts-node-dev src/server.ts`
