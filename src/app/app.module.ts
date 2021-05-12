import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowInViewDirective } from './shared/directives/show-in-view.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowInViewDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
