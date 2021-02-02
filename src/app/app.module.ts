import { NgModule         } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent     } from './app.component';
import { ProductsModule   } from './products/products.module';
import { OrdersModule     } from './orders/orders.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    OrdersModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
