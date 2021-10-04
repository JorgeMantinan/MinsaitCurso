import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from '../cmp-servicios/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http: HttpClient) { }


  getTareas() {
    return this.http.get<Tarea>('http://localhost:3000/tareas', {
      headers: {
        'Authorization': '1234'
      }
    });
  }

  guardarTarea(tarea: any) {
    return this.http.post<Tarea>('http://localhost:3000/tareas', tarea,{
      headers: {
        'Authorization': '1234'
      }
    });
  }

  completarTarea(tareaId: number, completada: boolean) {
    return this.http.patch<Tarea>(`http://localhost:3000/tareas/${tareaId}`, {completada},{
      headers: {
        'Authorization': '1234'
      }
    });
  }

  eliminarTarea(tareaId: number) {
    return this.http.delete<Tarea>(`http://localhost:3000/tareas/${tareaId}`, {
      headers: {
        'Authorization': '1234'
      },
      observe: 'response'
    });
  }

}
