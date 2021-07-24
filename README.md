# CursoTypeScript-Jest

## Seção sobre testes com Jest ##

Terminal:
  npm i jest @types/jest ts-jest -D

  npx jest --init
apos responder questionario para o comando acima (criara o arquivo jest.config.ts)
mas neste curso utilizaremos o ts-jest e criaremos um arquivo para tal para usar o jest,
sendo um arquivo mais simplificado. Logo vamos deletar o arquivo jest.config.ts criado pelo comando acima

Terminal:
  npx ts-jest config:init
tera menos modificações

  npx jest
comando para procurar testes no programa, ele procura teste em pastas com nome **/__tests__/**
ou arquivos com nome **/?(*.)+(spec|test).[tj]s?(x)  é expressao regular   -> ( ... | .spec.tsx | .spec.ts | test.tsx | test.ts | ... ) .spec para testes unitarios e .test para teste de integração

----------------------------------------------------------------------------------------------
Nesta seção utilizaremos testes unitarios... logo arquivos de teste sera .spec.

// tanto it() quanto test() faz a mesmo coisa
//describe é um grupo de teste
describe('Grupo de teste 1', () => {
  //primeiro parametro é a descrição, segundo parametro é a funcao para o teste
  it('Descrição do teste (IT)', () => {
    const number = 1;
    expect(number).not.toBe(1);
  });
  test('Descrição do teste (TEST)', () => {
    const nome = 'Daniel';
    expect(nome).toBe('Daniel');
  });
});

describe('Grupo de teste 2', () => {
  test('Descrição do teste (TEST)', () => {
    const nome = 'Dani';
    expect(nome).toBe('Dani');
  });
});


REPOSITORIO GIT: luizomf/typescript-jest-test

package.json -> scripts
  "test:silent": "jest --watchAll --silent --noStackTrace"

Terminal: npm run test:silent
para o jest ficar assistindo e atualizando os teste por conta do (--watchAll ),
(--silent) para silenciar o console.log dos testes,
(--noStackTrace) não trazer a pilha de erros de todos os testes.


Terminal: npx jest --clearCache
para limpar o cache dos testes do jest, pq quando se faz muito teste e muda
muito o codigo dos teste, algo pode ficar em cache e dar bug e mostrar q sempre
tem erro, por isso é importante limpar o cache para verificar se não é algo
em cache do jest que esta ocasionando o problema.
