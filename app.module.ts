import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzCarouselModule,
    NzImageModule,
    NzGridModule,
    NzDescriptionsModule,
    NzIconModule,
    NzCardModule,
    NzAvatarModule,
    NzTimelineModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
