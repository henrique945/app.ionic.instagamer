import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpAsyncFactory } from './factories/http-async.factory';
import { HttpAsyncService } from './services/http-async.service.ts/http-async.service';
import { StorageService } from './services/storage/storage.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql'],
    }),
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: HttpAsyncService, useFactory: httpAsyncFactory, deps: [HttpClient, StorageService] },
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
