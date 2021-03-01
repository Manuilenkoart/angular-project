import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

const Material = [MatDialogModule];

@NgModule({

  imports: [
    Material
  ],
  exports: [Material]
})
export class MaterialModule { }
