import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonUserComponent } from './json-user/json-user.component';

const routes: Routes = [
  {
    path: '',
    component: JsonUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
