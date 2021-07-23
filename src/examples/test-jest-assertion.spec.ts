describe('Primitive value', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10); //toBe para valores concretos
    expect(number).toEqual(10); //toEqual é para Object
  });
});
