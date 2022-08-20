import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';



const routes: Routes = [
  {path: 'detail/:id', component: DictionaryDetailComponent},
  {path: '', component: DictionaryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
