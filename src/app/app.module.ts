import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransazioneListComponent } from './components/transazione-list/transazione-list.component';
import { TransazioneItemComponent } from './components/transazione-item/transazione-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TransazioneListComponent,
    TransazioneItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
