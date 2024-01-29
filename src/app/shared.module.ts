import { MaterialModule } from "./material.module";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FotterComponent } from "./fotter/fotter.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        HeaderComponent,
        FotterComponent
      ],
    imports:[
        MaterialModule,
        RouterModule,
        CommonModule
    ],
    exports:[
        MaterialModule,
        HeaderComponent,
        FotterComponent
    ]
})
export class SharedModule{}