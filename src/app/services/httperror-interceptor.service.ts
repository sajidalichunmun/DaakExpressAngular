import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../shared/notification.service';

@Injectable({
    providedIn:'root'
})

export class HttpErrorInterceptorService implements HttpInterceptor{
    constructor(private snakBar: MatSnackBar){}
    intercept(request: HttpRequest<any>, next: HttpHandler){
        console.log('HTTP Request started');
        const config:MatSnackBarConfig = {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
            panelClass: ['blue-snackbar']
        }
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    const errorMessage = this.setError(error);
                    console.log(errorMessage);
                    this.snakBar.open(errorMessage['message'],'',config);
                    return throwError(errorMessage);
                })
            );
    }

    setError(error: HttpErrorResponse): string{
        let errorMessage="Unknown error occured";
        if(error.error instanceof ErrorEvent){
            // client side error
            errorMessage = error.error.message;
        }else{
            //server side error
            if(error.error !== 0)
            {
                errorMessage = error.error;
            }
        }
        return errorMessage;
    }
}