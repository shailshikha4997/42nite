import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:'',component:ProfileComponent
  }
]


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
