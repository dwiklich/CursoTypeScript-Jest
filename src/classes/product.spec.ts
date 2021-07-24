import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have property "name" value "Caneta" and "price" value 4.99', () => {
    const sut = createSut('Caneta', 4.99);
    expect(sut).toHaveProperty('name', 'Caneta');
    expect(sut.price).toBeCloseTo(4.99); // testando por ponto flutuante
  });
});
