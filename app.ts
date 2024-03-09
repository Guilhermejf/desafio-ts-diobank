import{ PeopleAccount } from "./class/PeopleAccount"
import{ CompanyAccount } from "./class/CompanyAccount"
import { PlusAccount } from "./class/PlusAccount";


const peopleAccount: PeopleAccount = new PeopleAccount(48548765, "Guilherme", 3);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 2);
const plusAccount: PlusAccount = new PlusAccount("Juca",1);

// Operações com conta peopleAccount
peopleAccount.setStatus(false)
peopleAccount.deposit(32)
peopleAccount.getBalance();

// Operações com conta companyAccount
companyAccount.deposit(12)
companyAccount.deposit(45)
companyAccount.widthraw(155)
companyAccount.getLoan(210);
companyAccount.getBalance();

// Operações com conta PlusAccount
plusAccount.deposit(190);
plusAccount.widthraw(15)


