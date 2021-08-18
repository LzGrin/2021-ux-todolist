import { NgModule } from "@angular/core";
import { CommonModule as NgCommonModule } from "@angular/common";
import { AngularSvgIconModule } from "angular-svg-icon";
import { PageTitleComponent } from "./page-title/page-title.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

const components = [PageTitleComponent];

@NgModule({
  imports: [
    NgCommonModule,
    AngularSvgIconModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: components,
  exports: components
})
export class CommonModule {}
