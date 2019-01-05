import { Component } from '@angular/core';

@Component({
	selector: 'color',
	templateUrl: './color.component.html'
})
export class ColorComponent{
    public color:string;
    public titulo:string;
    public color_seleccionado:string;

    constructor(){
        this.color = 'green';
        this.color_seleccionado = '#ccc';
        this.titulo = 'Componente Color';
    }

    logColorSeleccionado(){
		console.log(this.color_seleccionado);
	}
}