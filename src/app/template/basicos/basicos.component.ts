import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm: any = {

    producto: 'RTX 4080ti',
    precio: 10,
    existencias: 10

  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreInvalido(): boolean {

    return (

      this.miFormulario?.form.controls['producto']?.invalid &&
      this.miFormulario?.form.controls['producto']?.touched

    )

  }

  precioInvalido(): boolean {

    return (

      this.miFormulario?.form.controls['precio']?.value < 0 &&
      this.miFormulario?.form.controls['precio']?.touched

    )

  }

  guardar() {

    // console.log( this.miFormulario.form );
    console.log('Posteo correcto');

    this.miFormulario.resetForm({

      producto: '',
      precio: 0,
      existencias: 0

    });
    
    
  }

}
