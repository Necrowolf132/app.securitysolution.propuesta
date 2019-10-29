import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CatalogoProductComponent } from './catalogo-product/catalogo-product.component';


const routes: Routes = [
  { path: "", component: CatalogoProductComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class CatalogoProductRoutingModule { }
