import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {path: '',
    canActivate: [AuthGuard],
    component: AdminComponent,
  children: [
    {path: 'users', component: UsersComponent},
    {path: 'edit-user', component: EditUserComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'edit-post', component: EditPostComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
