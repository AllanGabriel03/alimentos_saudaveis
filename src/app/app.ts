import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProdutos } from './lista-produtos/lista-produtos'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ListaProdutos');
}
