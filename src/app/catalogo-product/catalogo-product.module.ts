import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CatalogoProductRoutingModule } from './catalogo-product-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CatalogoProductComponent } from './catalogo-product/catalogo-product.component';


@NgModule({
  declarations: [CatalogoProductComponent],
  imports: [
    CatalogoProductRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [CatalogoProductComponent]
})
export class CatalogoProductModule { }
