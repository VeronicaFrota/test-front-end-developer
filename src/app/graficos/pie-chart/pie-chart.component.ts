import { Component, OnInit } from '@angular/core';
import { Parlamentar } from 'src/app/model/parlamentar.model';
import { ParlamentarService } from 'src/app/service/parlamentar.service';
import { Despesa } from 'src/app/model/despesa.model';
import { DespesasDashboardService } from 'src/app/service/despesas-dashboard.service';

@Component({
	selector: 'app-pie-chart',
	templateUrl: './pie-chart.component.html',
	styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

	despesa: Despesa
	parlamentar: Parlamentar
	deputadoInfo

	// Utilizado para receber as informações que serão utilizados no grafico
	pieChartLabels: string[] = [];
	pieChartData: number[] = [];
	pieChartType: string = 'pie';
	pieChartOptions: any = {
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
		private serviceParlamentar: ParlamentarService
	) { }

	ngOnInit() {
		// Despesas do parlamentar - Grafico
		this.service.findDespesasParlamentar().subscribe(
			(retorno) => {
				this.despesa = retorno
				this.pieChartLabels = retorno['dados'].map(retorno => retorno.tipoDocumento)
				this.pieChartData = retorno['dados'].map(retorno => retorno.valorLiquido)
			}
		)

		// Informações referentes a um deputado
		this.serviceParlamentar.findParlamentar().subscribe(
			(retorno) => {
				this.parlamentar = retorno
				this.deputadoInfo = this.parlamentar.dados.ultimoStatus
			}
		)
	}

}
