import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule { }
