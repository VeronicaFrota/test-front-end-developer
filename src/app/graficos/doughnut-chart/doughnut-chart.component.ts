import { Component, OnInit } from '@angular/core';
import { Parlamentar } from 'src/app/model/parlamentar.model';
import { ParlamentarService } from 'src/app/service/parlamentar.service';
import { Despesa } from 'src/app/model/despesa.model';
import { DespesasDashboardService } from 'src/app/service/despesas-dashboard.service';

@Component({
	selector: 'app-doughnut-chart',
	templateUrl: './doughnut-chart.component.html',
	styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

	despesa: Despesa
	parlamentar: Parlamentar
	parlamentarInfo

	// Utilizado para receber as informações que serão utilizados no grafico
	doughnutChartLabels: string[] = [];
	doughnutChartData: number[] = [];
	doughnutChartType: string = 'doughnut';
	doughnutChartOptions: any = {
		'backgroundColor': [
			"#FF6384",
			"#4BC0C0",
			"#FFCE56",
			"#E7E9ED",
			"#36A2EB"
		]
	}

	constructor(
		private service: DespesasDashboardService,
		private serviceparlamentar: ParlamentarService
	) { }

	ngOnInit() {
		// Informações referentes a um deputado
		this.serviceparlamentar.findParlamentar().subscribe(
			(retorno) => {
				this.parlamentar = retorno
				this.parlamentarInfo = this.parlamentar.dados.ultimoStatus
			}
		)

		// Despesas do parlamentar - Grafico
		this.service.findDespesasParlamentar().subscribe(
			(retorno: Despesa) => {
				this.despesa = retorno 
				this.doughnutChartLabels = retorno['dados'].map(retorno => retorno.nomeFornecedor)
				this.doughnutChartData = retorno['dados'].map(retorno => retorno.valorDocumento)
			}
		)
	}

}
