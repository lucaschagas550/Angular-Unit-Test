import { TestBed } from '@angular/core/testing';

import { Produto } from '../models/produto';
import { ProdutoService } from './produto.service';

const produtosFake: Produto[] = [{
    id: 1,
    nome: 'Teste',
    ativo: true,
    valor: 100,
    imagem: 'celular.jpg'
},
{
    id: 2,
    nome: 'Teste 2',
    ativo: true,
    valor: 200,
    imagem: 'gopro.jpg'
},
{
    id: 3,
    nome: 'Teste 3',
    ativo: true,
    valor: 300,
    imagem: 'laptop.jpg'
}];

const produtoFake: Produto =
{
    id: 2,
    nome: 'Teste 2',
    ativo: true,
    valor: 200,
    imagem: 'gopro.jpg'
};

describe('ProdutoService', () => {

    let service: ProdutoService;

    beforeEach(() => {
        const bed = TestBed.configureTestingModule({
            providers: [
                ProdutoService
            ]
        });

        service = bed.get(ProdutoService);// devolve a instancia do objeto declarado como provider
    });

    it('Deve retornar uma lista de produtos', () => {
        spyOn(service, 'obterTodos').and.returnValue(produtosFake); //spyOn => Mock para returnar os produtosFake quando metodo obterTodos for chamado

        let result = service.obterTodos('ativos');

        expect(result.length).toBe(3);

        expect(result).toEqual(produtosFake);
    });

    it('Deve retornar um produto', () => {
        spyOn(service, 'obterPorId').and.returnValue(produtoFake);

        let result = service.obterPorId(2)

        expect(result).toEqual(produtoFake);
        expect(result.id).toEqual(2);
    });
});
