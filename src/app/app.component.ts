import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primera pagina Angular 6';
  texto: String = '';

  constructor() {
    this.texto = '';
  }
}
