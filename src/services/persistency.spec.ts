// tanto it() quanto test() faz a mesmo coisa
//describe é um grupo de teste
describe('Grupo de teste 1', () => {
  //primeiro parametro é a descrição, segundo parametro é a funcao para o teste
  it('Descrição do teste (IT)', () => {
    const number = 1;
    expect(number).toBe(1);
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
