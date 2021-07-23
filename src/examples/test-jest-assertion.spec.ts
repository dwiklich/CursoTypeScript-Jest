describe('Primitive value', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10); //toBe para valores concretos
    expect(number).toEqual(10); //toEqual é para Object
    expect(number).not.toBeNull(); //not.toBeNull não.éNull
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
    // expect(number). toBe varios metodos de teste ja pronto

    expect(number).toBeGreaterThan(9); //toBeGreaterThan maior que
    expect(number).toBeGreaterThanOrEqual(10); //toBeGreaterThan maior ou igual a que
    expect(number).toBeLessThan(11); //toBeGreaterThan menor que
    expect(number).toBeLessThanOrEqual(10); //toBeGreaterThan menor ou igual a que

    expect(number).toBeCloseTo(10); //toBeCloseTo perto de

    expect(number).not.toBeUndefined();
    expect(number).not.toBeNull();

    expect(number).not.toHaveProperty('toString'); //toHaveProperty ter Propriedade
  });
});
