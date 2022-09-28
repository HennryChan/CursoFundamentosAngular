import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-store';
  name = 'Hennry';
  lastname = 'Chan';

  Datos = {
    nombre: 'Hennry Roberto',
    apellido: 'Chan Pacheco'

  }
}
