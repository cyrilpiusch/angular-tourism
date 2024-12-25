import { Routes } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { SingleStateComponent } from './page/single-state/single-state.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'single-state',
        component:SingleStateComponent
      },
      {
        path: 'destination',
        component: DestinationComponent
      },
      {
        path:'destination/:id',component:SingleStateComponent
      },
      {
        path: 'contact',
        component:ContactComponent
      }
      

];
