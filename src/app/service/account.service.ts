import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Account } from '../account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl = 'http://localhost:8090/api/accounts/all/accounts';

  constructor(private httpClient: HttpClient) {}

  getAllAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.baseUrl}`).pipe(
      tap(data => console.log('Received data:', data)),
      catchError(error => {
        console.error('Error occurred:', error);
        throw error; 
      })
    );
  }
}
