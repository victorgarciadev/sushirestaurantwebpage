import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SushiComponent } from './sushi/sushi.component';
import { SushiDetailComponent } from './sushi-detail/sushi-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SushiSearchComponent } from './sushi-search/sushi-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SushiComponent,
    SushiDetailComponent,
    MessagesComponent,
    SushiSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
