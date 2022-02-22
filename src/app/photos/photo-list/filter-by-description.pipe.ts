import { photoProps } from './../photo/photo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescriptionPipe implements PipeTransform {
  transform(photos: photoProps[], description: string): photoProps[] {
    description = description.trim().toLowerCase();
    return photos.filter((photo) =>
      photo.description.toLowerCase().includes(description)
    );
  }
}
