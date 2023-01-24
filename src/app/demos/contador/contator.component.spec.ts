import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContadorComponent } from './contator.component';

describe('ContatorComponent', () => {

    let component: ContadorComponent;
    let fixture: ComponentFixture<ContadorComponent>;

    beforeEach(() => {//se tiver 10 testes ela vai ser executada 10 vezes, a instancia de um teste eh statless nao carrega o estado anterior
        TestBed.configureTestingModule({
            declarations: [
                ContadorComponent
            ]
        });

        fixture = TestBed.createComponent(ContadorComponent);
        component = fixture.componentInstance;

        component.valor = 0;
    });

    it('Deve incrementar corretamente', () => {
        component.incrementar()
        expect(component.valor).toBe(1);
    });

    it('Deve decrementar corretamente', () => {
        component.incrementar()
        expect(component.valor).toBe(1);
        component.decrementar()
        expect(component.valor).toBe(0);
    });

    it('não deve decrementar abaixo do valor permitido', () => {
        component.incrementar()
        expect(component.valor).toBe(1);
        component.decrementar()
        expect(component.valor).toBe(0);
        component.decrementar()
        expect(component.valor).toBe(0);
    });

    it('não deve incrementar acima do valor permitido', () => {
        for (let i = 0; i < 200; i++) {
            component.incrementar();
        }
        expect(component.valor).toBe(100);
    });
});