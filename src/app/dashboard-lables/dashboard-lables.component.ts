import { Component, OnInit } from '@angular/core';
import { DespesasDashboardService } from '../service/despesas-dashboard.service';
import { Despesa } from '../model/despesa.model';

@Component({
	selector: 'app-dashboard-lables',
	templateUrl: './dashboard-lables.component.html',
	styleUrls: ['./dashboard-lables.component.css']
})
export class DashboardLablesComponent implements OnInit {

	despesas: Despesa
	despesaMes
	despesaAno

	constructor(
		private service: DespesasDashboardService
	) { }

	ngOnInit() {
		this.service.findDespesasParlamentar().subscribe(
			(retorno) => {
				this.despesas = retorno
				this.despesaMes = retorno.dados[0]				// Retorna o mes relativo a despesa
				this.despesaAno = retorno.dados[0]				// Retorna ao ano relativo a despesa
			}
		)
	}

}
