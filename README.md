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

# Aula 02 - Banco de Dados
## Instalação do TypeORM
`yarn add typeorm reflect-metadata`

## Instalar um driver de conexão com o banco de dados
`yarn add sqlite3`
## Criar um arquivo de configuração do typeorm
`ormconfig.js`

## Adicionar comando typeorm em package.json
`"typeorm": "ts-node-dev node_modules/typeorm/cli.js"`

## Criando migrations
### Definindo caminho dos arquivos de migration
Acrescentar configuração no arquivo ormconfig.json indicando o diretório que as migrations serão criadas
### Criando migrations
`yarn typeorm migrations:create -n CreateUsers`
### Executando migration
`yarn typeorm migrations:run`
### Revertendo última migration
`yarn typeorm migrations:revert`
### Instaçação da biblioteca UUID
`yarn add uuid`
`yarn add @types/uuid -D`

# Aula 03 - Testando aplicação

## Configurando nova Entidade *Survey* e criando testes
- Criado um repository para entidade de User
- Alterado no controller para usar o repository que foi criado
- Dica: `alt+shif+o` no vscode para remover importações não utilizadas
- Nova migration de Surveys
    - `yarn typeorm migration:create -n CreateSurveys`
    - `yarn typeorm migration:run`
- Criado model, controller e repository, baseado no que foi feito para User, bem como a rota para acesso.
- Criar uma rota de listagem de Surveys
- Introdução a Testes automatizados
    - **Tipos de testes**
      1. *Testes unitários*
          - Não testa integração com API ou banco de dados
      2. *Teste de integração*
          - Testa toda a aplicação, inclusive salvando no banco de dados
      3. P*onta a ponta (E2E)*
          - Testa completo desde a interface até o resultado final da ação do usuário
   - **Configurando Jest**
       - Instalação do Jest para execução dos testes automatizados
           - `yarn add jest @types/jest -D`
       - Criação do arquivo de configuração do Jest
           - `yarn jest --init`
       - Adicionar pacote que indica que usaremos TS para os testes
           - `yarn add ts-jest -D`
           - Após instalado, configurar o preset no arquivo *jest.config.ts* com o valor *preset: "ts-jest"*
    - **Executar testes**
        - `yarn test`
    - Instando nova ferramenta de testes, que possibilita testar as rotas
        - `yarn add supertest @types/supertest -D`
    - Entendendo as variáveis de ambiente
        - Configurar variável de ambiente de testes no package.json
            - `"test": "NOD_ENV=test jest"`
    - Configurar script para apagar banco de dados após a execução dos testes
        - `"posttest": "rm ./src/database/database.test.sqlite"`
















