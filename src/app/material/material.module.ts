import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

const Material = [MatDialogModule, MatInputModule, MatButtonModule, MatTableModule];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
