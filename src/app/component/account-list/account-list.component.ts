import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../service/account.service';
import { Account } from '../../account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'] 
})
export class AccountListComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAllAccounts().subscribe(data => {
      this.accounts = data;
      console.log("Accounts: ", this.accounts);  
    });
  }
}
