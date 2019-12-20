import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Despesa } from 'src/app/model/despesa.model';
import { DespesasDashboardService } from 'src/app/service/despesas-dashboard.service';

@Component({
	selector: 'app-line-chart',
	templateUrl: './line-chart.component.html',
	styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

	despesa: Despesa

	constructor(
		private service: DespesasDashboardService
	) { }

	barChartOptions = {
		scaleShowVerticalLines: false,
		responsive: true
	};

	barChartLabels = [];
	barChartType = 'bar';
	barChartLegend = true;
	barChartData = [
		{ data: [], label: 'Series A' }
	];

	ngOnInit() {
		this.service.findDespesasParlamentar().subscribe(
			(retorno) => {
				this.despesa = retorno
				this.barChartLabels = retorno['dados'].map(retorno => retorno.tipoDocumento)
				this.barChartData['data'] = retorno['dados'].map(retorno => retorno.valorLiquido)
			})

	}

}
