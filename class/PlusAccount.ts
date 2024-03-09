import { DioAccount } from "./DioAccount";

export class PlusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  public deposit = (valor: number): void => {
    this.setBalance(valor + 10);
  };
}
