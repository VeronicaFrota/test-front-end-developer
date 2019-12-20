import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ParlamentarService {

	constructor(
		private httpClient: HttpClient
	) { }

	findParlamentar(): Observable<any> {
		return this.httpClient.get<any>(`https://dadosabertos.camara.leg.br/api/v2/deputados/141401`)
	}

}
