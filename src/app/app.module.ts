import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './mainComponent/app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { HomeComponent } from './home/home.component';
import { HeaderService } from './header/header.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cabinet',
    component: CabinetComponent
  },
  /*{
   path: 'hero/:id',
   component: HeroDetailComponent
   },
   {
   path: 'heroes',
   component: HeroListComponent,
   data: { title: 'Heroes List' }
   },
   {
   path: '**', component: PageNotFoundComponent
   }*/
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CabinetComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HeaderService
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
