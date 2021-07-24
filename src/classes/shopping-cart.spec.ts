import { Discount } from './discount';
import { ProductInterface } from './interfaces/product';
import { Product } from './product';
import { ShoppingCart } from './shopping-cart';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

//Mock DiscountMock
const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

//Mock ProductMock
const createProductMock = (name: string, price: number): Product => {
  class ProductMock implements ProductInterface {
    constructor(public name: string, public price: number) {}
  }
  return new ProductMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const product1 = createProductMock('Caneta', 10);
  const product2 = createProductMock('Calça', 100);
  const product3 = createProductMock('Camisa', 60);
  sut.addProduct(product1);
  sut.addProduct(product2);
  sut.addProduct(product3);

  return { sut, discountMock };
};

describe('Shopping Cart', () => {
  afterEach(() => jest.clearAllMocks());

  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 products', () => {
    const { sut } = createSut();
    const product1 = createProductMock('Caneta', 10);
    const product2 = createProductMock('Calça', 100);

    sut.addProduct(product1);
    sut.addProduct(product2);

    expect(sut.product.length).toBe(2);
  });

  it('should test method valueTotal and totalWithDiscount', () => {
    const { sut } = createSutWithProducts();

    expect(sut.valueTotal()).toBe(170);
    expect(sut.totalWithDiscount()).toBe(170);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.product.length).toBe(3);
    sut.clear();
    expect(sut.product.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove last product', () => {
    const { sut } = createSutWithProducts();
    const lastProduct = sut.product.length - 1;
    sut.removeProduct(lastProduct);
    expect(sut.product.length).toBe(2);
    expect(sut.product[lastProduct]).toBe(undefined);
  });
});
