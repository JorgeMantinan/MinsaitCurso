import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from '../cmp-servicios/tarea';
import { environment } from 'src/environments/environment';
import { map, mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

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

  getTareasConCategorias(id: number) {
    return this.http.get<Tarea>(`${environment.BASE_URL_API}/tareas/${id}`)
      .pipe(
        mergeMap((tarea: any) => {
          const peticionesACategorias = tarea.categoriaId.map((cId: any) => {
            return this.http.get(`${environment.BASE_URL_API}/categorias/${cId}`)
          })
          return forkJoin(peticionesACategorias).pipe( //Obtiene el resultado de varios observables para luego volver a hacer un map si quieres
            map(categorias => {
              console.log(categorias);
              delete tarea.categoriaId;
              return { ...tarea, categorias }
            })
          )
        })
      )
  }
  
  getTareasPorCategorias(categoriaId: number){
    return this.getTareas()
      .pipe(
        map((tareas: any) => {
          return tareas.filter((t: any) => t.categoriaId.includes(categoriaId));
        })
      )
  }

  getTareasConCategorias1() {
    return this.http.get(`${environment.BASE_URL_API}/tareas`)
    .pipe(
      mergeMap((tareas: any) => {
        const arrayCategoriasIds = tareas.map((t: any) => t.categoriaId);
        // [[1,3],[3],[1,2,3]]
        const todasLasCategoriasIds = arrayCategoriasIds.flat();
        // [1,3,3,1,2,3]
        const categoriasIdsUnicas = [ ... new Set(todasLasCategoriasIds)];
        // [1,2,3]
        const peticionesDeCategoriasIds = categoriasIdsUnicas.map(id => {
          return this.http.get(`${environment.BASE_URL_API}/categorias/${id}`)
        })
        return forkJoin(peticionesDeCategoriasIds)
          .pipe(
            map(categorias => {
              tareas.forEach((t: any) => {
                const categoriasDeTarea = categorias.filter((c: any) => t.categoriaId.includes(c.id))
                t.categorias = categoriasDeTarea;
                delete t.categoriaId;
              })
              return tareas
            })
          )
      })
    )
  }

  guardarTarea(tarea: any) {
    return this.http.post<Tarea>(`${environment.BASE_URL_API}/tareas`, tarea, {
      // headers: {
      //   'Authorization': '1234'
      // }
    });
  }

  completarTarea(tareaId: number, completada: boolean) {
    return this.http.patch<Tarea>(`${environment.BASE_URL_API}/tareas/${tareaId}`, { completada }, {
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
