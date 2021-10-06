import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      // Primer campo = valor por defecto
      username: new FormControl('', [Validators.required, this.esStark, this.minLengthNuestro(4)]),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(5),
        Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')],
        updateOn: 'blur' //para que compruebe el cambio
      }),
    })
  }

  login() {
    console.log(this.formulario);
  }

  //this.esStark(['tony', 'rickon', 'arya', 'sansa', 'robb'])
  // esStark(usuariosStark: Array<string>) {

  //   return (control: AbstractControl): ValidationErrors | null => {
  //     if (usuariosStark.includes(control.value)) {
  //       return null //Si la validacion es correcta
  //     }
  //     return {
  //       esStark: false
  //     } //Si la validacion es correcta.
  //   }
  // }

  // this.esStark
  esStark(control: AbstractControl): ValidationErrors | null {
    const usuariosStark = ['tony', 'rickon', 'arya', 'sansa', 'robb'];
    if (usuariosStark.includes(control.value)) {
      return null //Si la validacion es correcta
    }
    return {
      esStark: false
    } //Si la validacion es correcta. 
  }

  minLengthNuestro(min: number){
    //Le tenemos que pasar el parametro a Angular para que Angular ejecute la validacion con el AbstractControl
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length >= min){
        return null
      }
      return {
        minlength: { //minlength es la key del switch del error.component.ts para pintar el texto del error
          actualLength: control.value.length,
          requiredLength: min
        }
      }
    }
  }

}
