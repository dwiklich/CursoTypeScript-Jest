import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  className: new (
    firstName: string,
    lastName: string,
    cpf: string,
  ) => IndividualCustomer,
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new className(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string) => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  const sut = createIndividualCustomer(IndividualCustomer, 'Dan', 'Wik', '123');

  it('should have firstName, lastName, cpf', () => {
    expect(sut).toHaveProperty('firstName', 'Dan');
    expect(sut).toHaveProperty('lastName', 'Wik');
    expect(sut).toHaveProperty('cpf', '123');
  });

  it('should have methods to get name and idn for individual customer', () => {
    expect(sut.getName()).toBe('Dan Wik');
    expect(sut.getIDN()).toBe('123');
  });
});

describe('EnterpriseCustomer', () => {
  const sut = createEnterpriseCustomer('Empresa Biscouto', '22222');

  it('should have name, cnpj', () => {
    expect(sut).toHaveProperty('name', 'Empresa Biscouto');
    expect(sut).toHaveProperty('cnpj', '22222');
  });

  it('should have methods to get name and idn for enterprise customer', () => {
    expect(sut.getName()).toBe('Empresa Biscouto');
    expect(sut.getIDN()).toBe('22222');
  });
});
