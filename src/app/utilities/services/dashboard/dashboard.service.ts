import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { BarOrderDetail } from '../../models/bar-order-detail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private _http = inject(HttpClient)
  url:string = 'https://localhost:7216';
  errorMessage:any;
  constructor() { }

  getOrderDetails(): Observable<BarOrderDetail[]> {
    return this._http.get<BarOrderDetail[]>(`${this.url}/Dashboard/totals`)
    .pipe( 
      tap(items => {
        console.log(this.url)
      }),
      catchError(this.handleError),
    )
  }

  private handleError(error: Response) {
    console.error(error);
    return throwError(() => error || 'Server error');
  }
}
