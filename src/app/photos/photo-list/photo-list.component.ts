import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { photoProps } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  photos: photoProps[] = [];
  filter: string = '';
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params['userName'];
    this.photoService.listerFromUser(userName).subscribe((photos) => {
      this.photos = photos;
    });
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
