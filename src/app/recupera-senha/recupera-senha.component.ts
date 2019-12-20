import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-recupera-senha',
	templateUrl: './recupera-senha.component.html',
	styleUrls: ['./recupera-senha.component.css']
})
export class RecuperaSenhaComponent implements OnInit {

	loginForm: FormGroup

	constructor(
		private fb: FormBuilder
	) { 
		this.loginForm = this.fb.group({
			email: this.fb.control('', Validators.required)
		})
	}

	ngOnInit() {
	}

}
