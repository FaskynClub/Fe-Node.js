import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BooksComponent } from './components/books/books.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
