import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private router : Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token')


    if(token){
      request = request.clone({
        setHeaders :{
          Authorization : `Bearer ${token}`
        }
      }) 
    }
    return next.handle(request);
  }
}
