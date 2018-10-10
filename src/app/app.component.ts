import { Component } from '@angular/core';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primera pagina Angular 6';
  texto: String = '';
  links: String [] = [];
  visible = false;

  constructor() {
    this.texto = '';
  }

  agregarLink(): void {
    if ( this.texto.trim().toString() !== '') {
      if ( this.texto.trim().localeCompare('https://www.youtube.com/') === 1 ) {
        this.links.push(this.texto);
        this.visible = true;
    } else {
      alert('Por favor ingrese un link valido a youtube.' ); }
    } else {
      alert('Debe ingresar almenos 1 link para descargar.' ); }
  }

  eliminarLink(link: String): void {
    for (let i = 0; i < this.links.length; i++) {
      console.log('entre 1');
      if ( this.links[i].trim().toString() === link) {
        console.log('entre 2');
        this.links.splice(i, 1);
        break;
      }
    }
  }

  convertir(): void {
    
  }
}
