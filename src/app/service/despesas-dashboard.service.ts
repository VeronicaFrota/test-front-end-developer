import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Despesa } from '../model/despesa.model';

@Injectable({
	providedIn: 'root'
})
export class DespesasDashboardService {

	constructor(
		private httpClient: HttpClient
	) { }

	mes: Despesa

	findDespesasParlamentar(): Observable<any> {
		return this.httpClient.get<any>(`https://dadosabertos.camara.leg.br/api/v2/deputados/141401/despesas?mes=9&ordem=ASC&ordenarPor=ano`)
	}

}
