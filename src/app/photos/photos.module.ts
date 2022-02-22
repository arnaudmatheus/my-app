import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';
import { PhotoComponent } from './photo/photo.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoRendererComponent } from './photo-list/photo-renderer/photo-renderer.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotoRendererComponent,
    FilterByDescriptionPipe,
  ],
  exports: [PhotoComponent, PhotoListComponent],
  imports: [HttpClientModule, CommonModule],
})
export class PhotosModule {}
