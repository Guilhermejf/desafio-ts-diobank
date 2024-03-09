export abstract class DioAccount {
  private name: string;
  private accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    (this.accountNumber = accountNumber), (this.name = name);
  }

  public deposit = (valor: number): void => {
    if (this.validedateStatus() && valor > 0) {
      this.balance += valor;
      console.log(`Voce fez um deposito de ${valor}`);
    } else {
      console.log("Conta inativa ou valor invalido.");
    }
  };

  public widthraw = (valor: number) => {
    if (this.validedateStatus() && this.balance > valor) {
      this.balance -= valor;
      console.log(`Você sacou ${valor} dinheiro`);
    } else {
      console.log(`Você não tem saldo nem credito para este valor de saque`);
    }
  };

  public getBalance = (): void => {
    console.log(`Seu saldo é ${this.balance}`);
  };

  public setBalance = (valor: number): void => {
    this.balance += valor;
  };

  public setStatus = (status: boolean) => {
    this.status = status;
  };

  public validedateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    } else {
      console.log("Conta inativa");
      return false;
    }
  };

  public setName = (name: string) => {
    this.name = name;
    console.log(`Nome alterado para ${name}`);
  };

  public getName = (): string => {
    return this.name;
  };
}
