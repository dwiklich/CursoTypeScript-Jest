// tanto it() quanto test() faz a mesmo coisa
//primeiro parametro é a descrição, segundo parametro é a funcao para o teste
it('Descrição do teste (IT)', () => {
  const number = 1;
  expect(number).toBe(1);
});
test('Descrição do teste (TEST)', () => {
  const nome = 'Daniel';
  expect(nome).toBe('Daniel');
});
