import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { AppRoutingModule } from './app-routing.module';
import { CocaColaComponent } from './coca-cola/coca-cola.component';
import { BKRComponent } from './bkr/bkr.component';
import { DominosComponent } from './dominos/dominos.component';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    CocaColaComponent,
    BKRComponent,
    DominosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
