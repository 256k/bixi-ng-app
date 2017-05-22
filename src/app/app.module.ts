import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BixiMapComponent } from './bixi-map/bixi-map.component';
import { BixiInformationComponent } from './bixi-information/bixi-information.component';
import { BixiResultComponent } from './bixi-result/bixi-result.component';

@NgModule({
  declarations: [
    AppComponent,
    BixiMapComponent,
    BixiInformationComponent,
    BixiResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
