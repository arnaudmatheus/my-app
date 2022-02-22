import { photoProps } from './../../photo/photo';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { photoRedererProps } from './photo-renderer';

@Component({
  selector: 'ap-photo-renderer',
  templateUrl: './photo-renderer.component.html',
  styleUrls: ['./photo-renderer.component.scss'],
})
export class PhotoRendererComponent implements OnChanges {
  @Input() photos: photoProps[] = [];
  rows: any[] = [];
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photos']) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: photoProps[]) {
    const newRows: any[] = [];
    console.log(photos);
    for (let i = 0; i < photos.length; i += 3) {
      newRows.push(photos.slice(i, i + 3));
    }

    return newRows;
  }
}
