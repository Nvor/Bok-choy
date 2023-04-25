import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BokHomeComponent } from './modules/bok-home/bok-home.component';
import { BokSettingsComponent } from './modules/bok-settings/bok-settings.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: BokHomeComponent
  },{
    path: 'settings',
    component: BokSettingsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
