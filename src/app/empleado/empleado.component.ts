import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
	selector: 'empleado-tag',
	templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
	public titulo = 'Componente Empleados:';

	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	

	constructor(){
		this.empleado = new Empleado('David Lopez', 45, 'Cocinero', true);
		this.trabajadores = [
			new Empleado('Manolo Martinez', 35, 'Administrativo', false),
			new Empleado('Ana Lopez', 25, 'Cocinera', true),
			new Empleado('Víctor Robles', 66, 'Programador', false)
		];

		this.trabajador_externo = true;
	}

	ngOnInit(){
		console.log(this.empleado);
		console.log(this.trabajadores);
	}

	cambiarExterno(valor){
		this.trabajador_externo = valor;
	}

}