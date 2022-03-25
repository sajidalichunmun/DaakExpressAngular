import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { AccountService } from "../services/acount/account.service";
import { throwError } from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService : AccountService,private router : Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(
                tap(
                    event => { },
                    // err => {
                    //     console.log(err);
                        
                    //     if (err.error.auth == false) {
                    //         this.router.navigateByUrl('/');
                    //     }
                    // },
                    catchError((error: HttpErrorResponse) => {
                        if(error instanceof HttpErrorResponse)
                        {
                            //server side error
                            console.log(error);
                            
                            return throwError(error);
                        }
                        else
                        {
                            // client side error
                            //console.log(error);
                            
                            return throwError(error);
                        }
                    })
                )
            );
        }
    }
}