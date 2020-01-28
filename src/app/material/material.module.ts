import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

const MaterialComponents = [
    MatButtonModule, 
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule
  ];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }