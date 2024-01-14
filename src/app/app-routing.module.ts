import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'our-project', component: AboutUsComponent},
  {path: 'investors-relations', component: AboutUsComponent},
  {path: 'news', component: AboutUsComponent},
  {path: 'gallery', component: AboutUsComponent},
  {path: 'contact-us', component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
