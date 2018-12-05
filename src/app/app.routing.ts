import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderCompleteComponent } from './modules/orders/order_complete/order.component';
import { HomeComponent } from './modules/home/home.component';
import { SyncDevicesComponent } from './modules/sync_devices/sync_devices.component';
import { ConnectAppComponent } from './modules/connect_apps/connect_app.component';
import { VoiceAudioComponent } from './modules/voice_audio/voice_audio.component';
import { ChargingSettingsComponent } from './modules/charge_settings/charge_settings.component';
import { CimateComfortComponent } from './modules/climate_comfort/climate_comfort.component';
import { OrderConfirmComponent } from './modules/orders/order_confirmation/order.confirmation';
import { LoginComponent } from './modules/login/login';

const routes: Routes = [
  { path: 'order/complete', component: OrderCompleteComponent },
  { path: 'order/confirm', component: OrderConfirmComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sync_devices', component: SyncDevicesComponent },
  { path: 'connect_apps', component: ConnectAppComponent },
  { path: 'voice_audio', component: VoiceAudioComponent },
  { path: 'charging_settings', component: ChargingSettingsComponent},
  { path: 'climate_comfort', component: CimateComfortComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes, { useHash: true });
