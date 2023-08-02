import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { SigninComponent } from './pages/signin/signin.component';
import { WorkComponent } from './pages/work/work.component';
import { DetailsComponent } from './pages/details/details.component';
import { AgreementComponent } from './pages/agreement/agreement.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'loading',
    component: LoadingComponent
  } ,


  {path: '', component:  LayoutComponent,  children: [
    {
      path: 'home',
      component: HomeComponent
    } ,
    {
      path: 'confirm',
      component: ConfirmComponent
    } ,
    {
      path: 'signin',
      component: SigninComponent
    } ,
    {
      path: 'work',
      component: WorkComponent
    } ,
    {
      path: 'details',
      component: DetailsComponent
    } ,
    {
      path: 'agreement',
      component: AgreementComponent
    } ,
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
