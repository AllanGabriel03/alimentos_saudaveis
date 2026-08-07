import { Injectable } from '@angular/core';
import { Item } from './item';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private itens: Item[] = []

  tamanhoArray() {
    return this.itens.length
  }

  adicionar(item: Item) {
    this.itens.push(item)
  }

  listar(): Item[] {
    return this.itens
  }

  buscarPorId(id: number) {
    const item = this.itens.find(elem => elem.id == id)
    
    return of(item)
  }

  editar(item: Item) {
    const posArray = this.itens.findIndex(elem => elem.id === item.id)

    if (posArray !== -1) {
      this.itens[posArray] = item
    }
  }

  excluir(id: number) {
    this.itens = this.itens.filter(elem => elem.id !== id)
  }


}
