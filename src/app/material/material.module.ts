import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

const Material = [MatDialogModule, MatInputModule, MatButtonModule, MatTableModule, MatCardModule];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
