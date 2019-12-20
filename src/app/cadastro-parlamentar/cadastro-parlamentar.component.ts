import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-cadastro-parlamentar',
	templateUrl: './cadastro-parlamentar.component.html',
	styleUrls: ['./cadastro-parlamentar.component.css']
})
export class CadastroParlamentarComponent implements OnInit {

	cadForm: FormGroup

	constructor(
		private fb: FormBuilder
	) {
		this.cadForm = this.fb.group({
			nome: this.fb.control('', [Validators.required, Validators.minLength(5)]),
			nomeCivil: this.fb.control('', [Validators.required, Validators.minLength(5)]),
			email: this.fb.control('', [Validators.required, Validators.email])
		})
	}

	ngOnInit() {
	}

}
