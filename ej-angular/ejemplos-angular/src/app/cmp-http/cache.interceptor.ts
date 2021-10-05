import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    console.log(request.method);
    const method = request.method;
    if (method === 'GET') {
      const datos = localStorage.getItem(request.url);
      if (!datos) {
        return next.handle(request)
          .pipe(
            map((resp: any) => {
              localStorage.setItem(request.url, JSON.stringify(resp.body));
              console.log(resp.body)
              return resp;
            })
          );
      } else {
        return new Observable((observer) => {
          observer.next(new HttpResponse({
            body: JSON.parse(datos)
          }));
        })
      }
    }

    //TODO , QUITARLO LUEGO
    return next.handle(request);
  }
}
