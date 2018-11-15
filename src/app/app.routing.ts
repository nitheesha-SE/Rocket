import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderCompleteComponent } from './modules/orders/order_complete/order.component';
import { HomeComponent } from './modules/home/home.component';
import { SyncDevicesComponent } from './modules/sync_devices/sync_devices.component';


const routes: Routes = [
  { path: 'order/complete', component: OrderCompleteComponent },
  { path: 'home', component: HomeComponent },
  { path :'sync_devices/:id',  component: SyncDevicesComponent},
  { path: '**', redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes, { useHash: true });
