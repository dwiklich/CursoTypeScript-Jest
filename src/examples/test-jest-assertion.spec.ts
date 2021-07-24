describe('Primitive value', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10); //toBe para valores concretos
    expect(number).toEqual(10); //toEqual é para Object
    expect(number).not.toBeNull(); //not.toBeNull não.éNull
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
    // expect(number). toBe varios metodos de teste ja pronto
  });

  it('should split test', () => {
    const number = 10;
    expect(number).toBeGreaterThan(9); //toBeGreaterThan maior que
    expect(number).toBeGreaterThanOrEqual(10); //toBeGreaterThan maior ou igual a que
    expect(number).toBeLessThan(11); //toBeGreaterThan menor que
    expect(number).toBeLessThanOrEqual(10); //toBeGreaterThan menor ou igual a que

    expect(number).toBeCloseTo(10); //toBeCloseTo perto de

    expect(number).not.toBeUndefined();
    expect(number).not.toBeNull();

    expect(number).toHaveProperty('toString'); //toHaveProperty ter Propriedade
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Daniel', age: 26 };
    const aotherPerson = { ...person };

    expect(person).toEqual(aotherPerson);
    expect(person).not.toHaveProperty('firstName'); //não tem propriedade firstName
    expect(person).toHaveProperty('age'); //tem propriedade age
    expect(person).toHaveProperty('age', 26); //tem propriedade age e valor 26
    expect(person.name).toBe('Daniel'); //toBe em object pega o valor primitivo, por isso person.name
  });
});
