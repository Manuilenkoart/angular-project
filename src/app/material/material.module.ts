import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const Material = [MatDialogModule, MatInputModule, MatButtonModule, MatTableModule, MatCardModule, MatProgressSpinnerModule];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
