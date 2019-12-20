import { Component, OnInit, ViewChild } from '@angular/core';
import { DespesasDashboardService } from 'src/app/service/despesas-dashboard.service';
import { Parlamentar } from 'src/app/model/parlamentar.model';
import { ParlamentarService } from 'src/app/service/parlamentar.service';
import { MatTableDataSource } from '@angular/material/table';
import { Despesa } from 'src/app/model/despesa.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
	selector: 'app-despesas-parlamentar',
	templateUrl: './despesas-parlamentar.component.html',
	styleUrls: ['./despesas-parlamentar.component.css']
})
export class DespesasParlamentarComponent implements OnInit {

	despesas: Despesa
	parlamentar: Parlamentar
	parlamentarInfo

	// Paginador
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	// Para exibição das tabelas
	displayedColumnsParlamentar = ['dataDocumento', 'tipoDespesa', 'tipoDocumento', 'numDocumento', 'valorDocumento', 'nomeFornecedor', 'cnpjCpfFornecedor'];
	dataSourceParlamentar = new MatTableDataSource<any>();

	constructor(
		private service: DespesasDashboardService,
		private serviceParlamentar: ParlamentarService
	) { }

	ngOnInit() {
		// atribui os dados do paginador para o datasource da table
		this.dataSourceParlamentar.paginator = this.paginator

		this.service.findDespesasParlamentar().subscribe(
			(retorno) => {
				this.despesas = retorno
				this.dataSourceParlamentar.data = this.despesas.dados
			}
		)

		this.serviceParlamentar.findParlamentar().subscribe(
			(retorno) => {
				this.parlamentar = retorno
				this.parlamentarInfo = this.parlamentar.dados.ultimoStatus
			}
		)
	}

}
