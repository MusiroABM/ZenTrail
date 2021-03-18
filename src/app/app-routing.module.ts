import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './componentes/about/about.component';
import { HolaMundo } from './componentes/holamundo/holamundo.component';
import { TestingPageComponent } from './componentes/testing-page/testing-page.component';

const routes: Routes = [
  {path: '', component: HolaMundo},
  {path: 'about', component: AboutComponent},
  {path: 'testing', component: TestingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
