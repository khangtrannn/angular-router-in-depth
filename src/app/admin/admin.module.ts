import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { MatDialogModule } from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ListComponent } from './list/list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffListExperimentalComponent } from './staff-list-experimental/staff-list-experimental.component';

const declarations = [
  WelcomeComponent,
  AddUserComponent,
  AddProductComponent,
  ListComponent,
  StaffListComponent,
  StaffListExperimentalComponent,
];

@NgModule({
  declarations: [declarations],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    AdminRoutingModule,
  ],
  exports: [declarations],
})
export class AdminModule {}
