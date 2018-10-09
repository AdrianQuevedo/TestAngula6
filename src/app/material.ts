import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule { }
