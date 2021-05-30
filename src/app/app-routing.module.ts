import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreLoadService } from './services/customPreload.service';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./../app/lazyLoading/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'teachers',
    data: {preload: true},
    loadChildren: () =>
      import('./../app/lazyLoading/teachers/teachers.module').then(m => m.TeachersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreLoadService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
