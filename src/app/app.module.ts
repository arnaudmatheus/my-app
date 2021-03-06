import { ErrorsModule } from './errors/errors.module';
import { PhotosModule } from './photos/photos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    AppRoutingModule,
    ErrorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
