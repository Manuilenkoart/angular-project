import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

const Material = [
  MatButtonModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatListModule,
  MatInputModule,
  MatCardModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
