import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Pasa por el interceptor...');

    const token = localStorage.getItem('jwtToken')
    if (token) {
      const authHeader = `Bearer ${token}`
      //Para crear una peticion diferente, al igual que clonamos objetos para crear otros nuevos.
      // headers: request.headers.append('Authorization', '1234' //sin la configuracion del token
      const nuevaRequest = request.clone({
        headers: request.headers.append('Authorization', authHeader)
      })
      return next.handle(nuevaRequest)
    }

    return next.handle(request)
    // .pipe(
    //   map(resp => {
    //     console.log(resp);
    //     return resp;
    //   })
    // );
  }
}
