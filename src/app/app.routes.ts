import {RouterModule,Routes}from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {RopasComponent} from './components/ropas/ropas.component';
import {AboutComponent} from './components/about/about.component';
import {NofoundComponent} from './components/nofound/nofound.component';
import { DetalleComponent } from './components/detalle/detalle.component';
    import { from } from 'rxjs';


//Header y Footer se llaman directamente porque se repiten en todas las paginas
// import {FooterComponent} from './components/footer/footer.component';
// import {HeaderComponent} from './components/header/header.component';  





const APP_ROUTE: Routes = [
    {path:'home',component:HomeComponent,},
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'about',component:AboutComponent,},
    {path:'ropas',component:RopasComponent,},
    {path:"detalle/:id",component:DetalleComponent},
    // {path:'footer',component:FooterComponent,},
    // {path:'header',component:HeaderComponent},    
    {path:'**',component:NofoundComponent},
    

]

export const app_routing = RouterModule.forRoot(APP_ROUTE);