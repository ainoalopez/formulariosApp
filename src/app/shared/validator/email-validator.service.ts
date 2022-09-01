import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  // validación asíncrona

  constructor( private http: HttpClient ) { }

  validate( control: AbstractControl ): Observable<ValidationErrors | null> {

    const email = control.value;
    console.log(email);

    // si la respuesta.length es igual a 0 entonces el correo lo puedo utilizar (null)
    // en caso contrario, si tenemos algún valor, retornamos un objeto (emilTomado)

    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${ email }`)
                .pipe(
                  // delay(3000),
                  map( resp => {
                   return ( resp.length === 0 ) ? null : { emailTomado: true }
                  })
                )
    
  }

}
