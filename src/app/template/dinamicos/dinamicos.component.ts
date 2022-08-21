import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {

  nombre:    string;
  favoritos: Favorito[];

}

interface Favorito {

  id:     number;
  nombre: string;

}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild ('miFormulario') miFormulario!: NgForm;

  nuevoJuego: string = '';

  persona: Persona = {

    nombre: 'Ainhoa',
    favoritos: [

      {id: 1, nombre: 'Zelda: Breath of the Wild'},
      {id: 2, nombre: 'Hollow Knight'},
      {id: 3, nombre: 'Death Stranding'}

    ]
  }

  nombreInvalido(): any {

    return (

      this.miFormulario?.form.controls['nombre']?.errors &&
      this.miFormulario?.form.controls['nombre']?.touched
    
    )

  }

  agregarJuego() {

    const nuevoFavorito: Favorito = {
      
      id:     this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego

    };

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';

  }

  eliminar( index: number ) {

    this.persona.favoritos.splice(index, 1)
    
  }

  guardar() {

    console.log('Formulario posteado');
    
  }

}
