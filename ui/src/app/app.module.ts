import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlondesComponent } from './blondes/blondes.component';
import { BrunesComponent } from './brunes/brunes.component';
import { AmbreesComponent } from './ambrees/ambrees.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { ProduitComponent } from './produit/produit.component';

const appRoutes: Routes = [
  { path: 'blondes', component: BlondesComponent },
  { path: 'brunes', component: BrunesComponent },
  { path: 'ambrees', component: AmbreesComponent },
  { path: '',  component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlondesComponent,
    BrunesComponent,
    AmbreesComponent,
    ListProduitsComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule ,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
