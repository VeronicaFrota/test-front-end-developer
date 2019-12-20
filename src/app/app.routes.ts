import { Routes } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component'
import { CadastroParlamentarComponent } from './cadastro-parlamentar/cadastro-parlamentar.component'
import { RecuperaSenhaComponent } from './recupera-senha/recupera-senha.component'
import { MainNavComponent } from './main-nav/main-nav.component'
import { AlteraSenhaComponent } from './altera-senha/altera-senha.component'

export const ROUTES: Routes = [

    { path: '', component: LoginComponent },
    { path: 'recupera-senha', component: RecuperaSenhaComponent },
    
    {
        path:'app',  component: MainNavComponent,
        children: [
            { path: 'dashborad', component: DashboardComponent },
            { path: 'cadastro-parlamentar', component: CadastroParlamentarComponent },
            { path: 'altera-senha', component: AlteraSenhaComponent }
        ]
    }

]

