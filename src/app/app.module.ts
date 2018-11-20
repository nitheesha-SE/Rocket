import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './modules/headers/header.component';
import { OrderCompleteComponent } from './modules/orders/order_complete/order.component';
import { FooterComponent } from './modules/footers/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { SyncDevicesComponent } from './modules/sync_devices/sync_devices.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ConnectAppComponent } from './modules/connect_apps/connect_app.component';
import { VoiceAudioComponent } from './modules/voice_audio/voice_audio.component';
import { NouisliderModule } from 'ng2-nouislider';
import { ChargingSettingsComponent } from './modules/charge_settings/charge_settings.component';
import { CimateComfortComponent } from './modules/climate_comfort/climate_comfort.component';
import { OrderConfirmComponent } from './modules/orders/order_confirmation/order.confirmation';
import { LoginComponent } from './modules/login/login';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OrderCompleteComponent,
    HomeComponent,
    SyncDevicesComponent,
    ConnectAppComponent,
    VoiceAudioComponent,
    ChargingSettingsComponent,
    CimateComfortComponent,
    OrderConfirmComponent,
    LoginComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    UiSwitchModule,
    NouisliderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
