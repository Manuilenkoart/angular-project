import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const Material = [
  MatButtonModule,
  MatCardModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
