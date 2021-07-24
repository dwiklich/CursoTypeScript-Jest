import { Persistency } from './persistency';

describe('Persistency', () => {
  //depois dos testes => limpe todos os mocks
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // sut - System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency();

    // criando um espião jest.spyOn(Objeto, 'metodo');
    const consoleSpy = jest.spyOn(console, 'log');

    //chamando o metodo q tem o objeto a ser espionado
    sut.saveOrder();

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso"', () => {
    const sut = new Persistency();

    const consoleSpy = jest.spyOn(console, 'log');

    sut.saveOrder();

    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso');
  });
});
