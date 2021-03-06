# NPS: Net Promoter Score
### Projeto desenvolvido durante a semana do evento NLW#4 da Rocktseat.
### Para executar o projeto:

- Instalar dependências
    - `yarn install`
- Renomear o arquivo `.env.example` para `.env`
- Ininiciar projeto
    - `yarn dev`

## Aula 01
#### Iniciando projeto
- Iniciar projeto via yarn
  - `yarn init -y`
- Instalar express como dependência
  - `yarn add express`
- Instalar pacote de tipagem do express (ajuda no autocomplete). 
  - Parâmetro '-D' indica que é uma dependência apenas do ambiente de desenvolvimento.
    - `yarn add  @types/express -D`
- Instalar typescript como dependência de desenvolvimento
    - `yarn add typescript -D`

### Iniciar typescript no projeto
- Criar arquivo de configuração com nome tsconfig.json
  - `yarn tsc --init`
- Em tempo de execução ele converte o código TS para Javascript, para que possa ser interpretado
  - `yarn add ts-node-dev -D`

### Executando arquivo TS 
- Adicionar no package.json como um comando ex 'dev', para que o comando abaixo possa ser executado apenas com `yarn dev`
  - `ts-node-dev src/server.ts`

 ## Aula 02 - Banco de Dados
### Instalação do TypeORM
  - `yarn add typeorm reflect-metadata`

- Instalar um driver de conexão com o banco de dados
  - `yarn add sqlite3`
- Criar um arquivo de configuração do typeorm
  - `ormconfig.js`
- Adicionar comando typeorm em package.json
  - `"typeorm": "ts-node-dev node_modules/typeorm/cli.js"`

### Criando migrations
- Definindo caminho dos arquivos de migration
    - Acrescentar configuração no arquivo ormconfig.json indicando o diretório que as migrations serão criadas
- Criando migrations
  - `yarn typeorm migrations:create -n CreateUsers`
- Executando migration
  - `yarn typeorm migrations:run`
- Revertendo última migration
  - `yarn typeorm migrations:revert`
### Instaçação da biblioteca UUID
  - `yarn add uuid`
  - `yarn add @types/uuid -D`

 ## Aula 03 - Testando aplicação
### Configurando nova Entidade *Survey* e criando testes
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
        - `yarn test -i`
            - Em alguns momentos a execução dos testes fallhou, pois provavelmente ocorreram suas execuções simultâneas do método runMIgrations que é execuatdo na classe de testes. Com o parametro -i ele força a execução individual dos arquivos.
    - Instando nova ferramenta de testes, que possibilita testar as rotas
        - `yarn add supertest @types/supertest -D`
    - Entendendo as variáveis de ambiente
        - Configurar variável de ambiente de testes no package.json
            - `"test": "NOD_ENV=test jest"`
    - Configurar script para apagar banco de dados após a execução dos testes
        - `"posttest": "rm ./src/database/database.test.sqlite"`

 ## Aula 04 - Enviando Email
### Criando SurveyUser

- Criar nova entidade `SurveyUser` (Model, Entity, Repository)
- Criar controller `SendMailController` e implementar método `execute` para criação da pesquisa e disparo do e-mail.
- Adicionar nova rota `/send` que acionará o novo Controller que foi criado
- Definir relacionamentos entre as tabelas dentro do Model utilizando as anotations do TypeORM

### Envio de email
- Uso da biblioteca `nodemailer`
    - `yarn add nodemailer`
    - `yarn add @types/nodemailer -D`
- Uso da biblioteca `Ethereal` (https://ethereal.email) para fazer a simulação dos envios sem necessidade de servidor SMTP configurado em ambiente de densenvolvimento
- Configurando **Handlebar**
    - Linguagem de template, para criação de emails
    - Instalando
        - `yarn add handlebars`
    - Criar pasta para salvar os templates e criar um arquivo com nome `npnMail.hbs`
- Configurar variável de ambiente `.env` **na raiz do projeto** e adicionar uma variável que representa a URL_MAIL do sistema

 ## Aula 05 - Finalizando API com validações
 ### Novas implementações
  - Criar controller `AnswerController` que é responsável por receber as respostas através dos botões de notas, que é enviado por email.
  - Criar controller `NpsController`, que é responsável por fazer os cálculos do NPS.
### Criar validações
  - Instalar a *Yup Validation*
      - `yarn add yup`
  - Configurar validações no Controller de Users
### Refatorações
  - Removido `posttest` do package.json
  - Configurar nos testes o `afterAll` para que exclua o database após os testes
### Tratamento de erros
  - Criação de classe de erro `AppError`
      - Refatorado o código para inclusão da classe de erro.
      - Criação de midleware para tratar as exceções lançadas
      - Instalar pacote `yarn add express-async-errors` e importar logo após a importação do `express` para que lide com os erros
      

## Dicas
### Erro ao iniciar projeto
- Erro `[ERROR] 11:11:22 Error: listen EADDRINUSE: address already in use :::3333` ao tentar iniciar o projeto com `yarn dev`
    - Matar todos os processos do NODE referente a execução do projeto. No Linux, execute:
        - `ps aux | grep node | grep NOMEDAPASTADOPROJETO | awk {'print $2'} | xargs kill -9` 
- Caso as **variáveis de ambiente** não estejam sendo carregadas, segue os seguintes passos:
    - Instalar um pacote chamado dotenv, com o seguinte comando: `yarn add dotenv`
    - No arquivo server.ts adicionar a seguinte importação no topo do arquivo: `import 'dotenv/config';`














