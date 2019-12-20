import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-altera-senha',
	templateUrl: './altera-senha.component.html',
	styleUrls: ['./altera-senha.component.css']
})
export class AlteraSenhaComponent implements OnInit {

	alteraSenhaForm: FormGroup

	constructor(
		private fb:  FormBuilder
	) { }

	ngOnInit() {
		this.alteraSenhaForm = this.fb.group({
			senhaAntiga: this.fb.control('', [Validators.required, Validators.minLength(6)]),
			novaSenha: this.fb.control('', [Validators.required, Validators.minLength(6)]),
			confirmaNovaSenha: this.fb.control('', [Validators.required, Validators.minLength(6)])
		})
	}

}
