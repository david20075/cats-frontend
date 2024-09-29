import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedSelectorComponent } from './components/breed-selector/breed-selector.component';
import { BreedsTableComponent } from './components/breeds-table/breeds-table.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AuthGuard } from './guards/auth.guard';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
  { path: '', component: BreedSelectorComponent },
  { path: 'breeds/id', component: BreedsTableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-info', component: UserInfoComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
