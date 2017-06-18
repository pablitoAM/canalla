import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { LoginComponent } from './components/login/login.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { AgmCoreModule } from '@agm/core';
import { TabsContainerComponent } from './components/tabs-container/tabs-container.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,    
    MapComponent, LoginComponent, TabsComponent, TabsContainerComponent, TabComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'xxxx'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
