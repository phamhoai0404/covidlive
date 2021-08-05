import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ServiceHttpService {

    constructor(private http: HttpClient) { }

    private API_BASIC = 'https://api.covid19api.com/live/country/VN/status/:status';

    public getDataCurrent(){
        return this.http.get<any>(this.API_BASIC).pipe(catchError(this.handleError));
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` + `body was: ${error.error}`
            );
        }
        return throwError('Something bad happened; please try again later.');
    }
}
