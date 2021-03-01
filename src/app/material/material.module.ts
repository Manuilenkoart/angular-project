import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

const Material = [MatDialogModule, MatInputModule, MatButtonModule];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
