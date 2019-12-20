import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'services',
    redirectTo: ''
  },
  {
    path: 'photos',
    redirectTo: ''
  },
  {
    path: 'references',
    redirectTo: ''
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'apply',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
