import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [

  {
    path: 'post', // child route path
    component: PostComponent, // child route component that the router renders
  },
  {
    path: 'post/detail/:id',
    component: PostComponent, // another child route component that the router renders
  },
  {
    path: '',
    redirectTo: '/post',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
