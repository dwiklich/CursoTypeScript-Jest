import { Discount } from './discount';
import { ShoppingCart } from './shopping-cart';

describe('Shopping Cart', () => {
  afterEach(() => jest.clearAllMocks());

  //Mock
  class DiscountMock extends Discount {}

  it('should be an empty cart when no product is added', () => {
    const sut = new ShoppingCart(new DiscountMock());
    expect(sut.isEmpty()).toBe(true);
  });
});
