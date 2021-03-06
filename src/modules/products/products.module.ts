import { RegisterproductsComponent } from './registerproducts/registerproducts.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  declarations: [RegisterproductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    AutocompleteLibModule,
  ],
})
export class ProductsModule {}
