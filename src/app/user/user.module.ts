import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";
import { RouterModule } from "@angular/router";
import { UserRoutingModule } from "./user-routing.module";
import { UserListComponent } from "./user-list.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [UserComponent, UserListComponent],
  imports: [CommonModule, RouterModule, UserRoutingModule],
})
export class UserModule {}