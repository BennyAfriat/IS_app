import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';



const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'getAllUserBuys', component:  PurchaseHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

  
 }
