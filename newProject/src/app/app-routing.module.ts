import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsWithDiscountsComponent } from './products-with-discounts/products-with-discounts.component';
import { ProductsWithoutDiscountsComponent } from './products-without-discounts/products-without-discounts.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:ProductsComponent},
  {path:'Products',component:ProductsComponent,
    children: [
      {path:"WithDiscounts", component:ProductsWithDiscountsComponent},
      {path:"WithoutDiscounts", component:ProductsWithoutDiscountsComponent},
    ],
  },
  {path:'Users',component:UsersComponent},
  {path:'Posts',component:PostsComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'Notes',component:NotesComponent},
  {path:'**',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
