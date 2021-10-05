import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from '../cmp-servicios/tarea';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http: HttpClient) { }


  getTareas() {
    return this.http.get<Tarea>(`${environment.BASE_URL_API}/tareas`, {
      // headers: {
      //   'Authorization': '1234'
      // }
    });
  }

  guardarTarea(tarea: any) {
    return this.http.post<Tarea>(`${environment.BASE_URL_API}/tareas`, tarea,{
      // headers: {
      //   'Authorization': '1234'
      // }
    });
  }

  completarTarea(tareaId: number, completada: boolean) {
    return this.http.patch<Tarea>(`${environment.BASE_URL_API}/tareas/${tareaId}`, {completada},{
      // headers: {
      //   'Authorization': '1234'
      // }
    });
  }

  eliminarTarea(tareaId: number) {
    return this.http.delete<Tarea>(`${environment.BASE_URL_API}/tareas/${tareaId}`, {
      // headers: {
      //   'Authorization': '1234'
      // },
      observe: 'response'
    });
  }

}
