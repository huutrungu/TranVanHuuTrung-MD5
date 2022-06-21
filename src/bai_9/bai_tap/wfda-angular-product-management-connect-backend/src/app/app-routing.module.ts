import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListBusComponent} from './bus/list-bus/list-bus.component';
import {EditBusComponent} from './bus/edit-bus/edit-bus.component';
import {CreateBusComponent} from './bus/create-bus/create-bus.component';


const routes: Routes = [
  {
    path: '', component: ListBusComponent,
  },
  {
    path: 'buses', component: ListBusComponent,
  },
  {
    path: 'create-bus', component: CreateBusComponent,
  },
  {
    path: 'edit/:id', component: EditBusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
