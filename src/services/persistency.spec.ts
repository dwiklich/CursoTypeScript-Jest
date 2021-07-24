import { Persistency } from './persistency';

const createSut = () => {
  return new Persistency();
};

describe('Persistency', () => {
  //depois dos testes => limpe todos os mocks
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // sut - System under test
    const sut = createSut();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();

    // criando um espião jest.spyOn(Objeto, 'metodo');
    const consoleSpy = jest.spyOn(console, 'log');

    //chamando o metodo q tem o objeto a ser espionado
    sut.saveOrder();

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso"', () => {
    const sut = createSut();

    const consoleSpy = jest.spyOn(console, 'log');

    sut.saveOrder();

    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso');
  });
});
