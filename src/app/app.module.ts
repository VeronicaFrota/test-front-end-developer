import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { CadastroParlamentarComponent } from './cadastro-parlamentar/cadastro-parlamentar.component';
import { LoginComponent } from './login/login.component';
import { RecuperaSenhaComponent } from './recupera-senha/recupera-senha.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './graficos/line-chart/line-chart.component';
import { DoughnutChartComponent } from './graficos/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './graficos/pie-chart/pie-chart.component';
import { DespesasParlamentarComponent } from './dashboard-tabelas/despesas-parlamentar/despesas-parlamentar.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DashboardLablesComponent } from './dashboard-lables/dashboard-lables.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { AlteraSenhaComponent } from './altera-senha/altera-senha.component';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		CadastroParlamentarComponent,
		LoginComponent,
		RecuperaSenhaComponent,
		MainNavComponent,
		LineChartComponent,
		DoughnutChartComponent,
		PieChartComponent,
		DespesasParlamentarComponent,
		DashboardLablesComponent,
		AlteraSenhaComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(ROUTES),
		BrowserAnimationsModule,
		MatSliderModule,
		MatInputModule,
		HttpClientModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		FormsModule,
		ReactiveFormsModule,
		ChartsModule,
		MatTableModule,
		MatPaginatorModule,
		MatCardModule,
		MatRadioModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatTooltipModule,
		MatMenuModule
	],
	providers: [
		MatDatepickerModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
