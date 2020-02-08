import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SpecialtiesComponent } from './pages/specialties/specialties.component';
import { ReferencesComponent } from './pages/references/references.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    ContactComponent,
    SpecialtiesComponent,
    ReferencesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
