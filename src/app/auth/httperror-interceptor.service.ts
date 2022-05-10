import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountService } from '../services/acount/account.service';
import { NotificationService } from '../shared/notification.service';

@Injectable({
    providedIn:'root'
})

export class HttpErrorInterceptorService implements HttpInterceptor{
    constructor(
        private userService : AccountService,
        private router : Router,
        private snakBar: MatSnackBar
        ){}
    intercept(request: HttpRequest<any>, next: HttpHandler){
        let clonereq = null;
        console.log('HTTP Request started');
        const config:MatSnackBarConfig = {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
            panelClass: ['blue-snackbar']
        }
        // console.log(this.userService.getToken());
        if (!this.userService.isLoggedIn()){
            let clonedreq =  request.clone();
            return next.handle(clonedreq)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    const errorMessage = this.setError(error);
                    this.snakBar.open(errorMessage,'',config);
                    return throwError(errorMessage);
                })
            );
        }else {
            let clonedreq = request.clone({
                //headers: request.headers.set("Authorization", "Bearer " + this.userService.getToken())
                setHeaders: {
                    Authorization: "Bearer " + this.userService.getToken()
                }
            });
            return next.handle(clonedreq)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    const errorMessage = this.setError(error);
                    this.snakBar.open(errorMessage,'',config);
                    return throwError(errorMessage);
                })
            );
        }
    }

    setError(error: HttpErrorResponse): string{
        let errorMessage="Unknown error occured";
        
        if(error.error instanceof ErrorEvent){
            // client side error
            errorMessage = error.error.message;
            console.log('client side error');
            console.log(error);
        }else{
            //server side error
            console.log('server side error');
            console.log();
            
            if(error.status !== 0)
            {
                if(error.status !== 500)
                    errorMessage = error.error.error;
            }
        }
        return errorMessage;
    }
}