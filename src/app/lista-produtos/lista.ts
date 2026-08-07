import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemService } from './item-service';
import { Item } from './item';

@Component({
  selector: 'app-lista-produtos',
  imports: [FormsModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class Lista {

  descricao_produto: string = '';
  valor_unitario: number = 0.0;

  // Guarda o item que está sendo editado
  itemEditando: Item | null = null;

  constructor(private itemService: ItemService) {}

  listaProdutos(): Item[] {
    return this.itemService.listar();
  }

  addItem() {

    // Se estiver editando, salva a alteração
    if (this.itemEditando !== null) {

      this.itemEditando.descricaoProduto = this.descricao_produto;
      this.itemEditando.valorUnitario = this.valor_unitario;

      this.itemService.editar(this.itemEditando);

      // Finaliza edição
      this.itemEditando = null;

    } else {

      // Criando novo item
      let item = new Item();

      item.id = this.itemService.tamanhoArray() + 1;
      item.descricaoProduto = this.descricao_produto;
      item.valorUnitario = this.valor_unitario;

      this.itemService.adicionar(item);
    }

    // Limpa os campos
    this.descricao_produto = '';
    this.valor_unitario = 0.0;
  }

  buscarPorId(pObjItem: Item) {

    // Guarda o item que será editado
    this.itemEditando = pObjItem;

    // Coloca os dados nos campos
    this.descricao_produto = pObjItem.descricaoProduto ?? '';
    this.valor_unitario = pObjItem.valorUnitario ?? 0;
  }

  exluir(pObjItem: Item) {

    if (confirm("Tem certeza que deseja Excluir o Produto?")) {
      this.itemService.excluir(Number(pObjItem.id));
    }
  }

  limparTudo() {

    const itens = this.itemService.listar();

    itens.forEach(item => {
      this.itemService.excluir(Number(item.id));
    });

    this.descricao_produto = '';
    this.valor_unitario = 0.0;
    this.itemEditando = null;
  }

}

