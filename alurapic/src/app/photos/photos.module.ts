import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';

import { NgModule } from '@angular/core';
import { ImmediateClickModule } from '../shared/directives/immediate-click/immediate-click.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
    ImmediateClickModule,
    PhotoDetailsModule, //19CC- importar esse module, depois ir ate app.roiuting.module.ts
    
  ]
})
export class PhotosModule { }
