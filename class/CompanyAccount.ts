import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }
  getLoan = (valor: number) => {
    if (this.validedateStatus()) {
      this.setBalance(valor);

      console.log("Você pegou um emprestimo");
    } else {
      console.log("Conta Inativa");
    }
  };
}
