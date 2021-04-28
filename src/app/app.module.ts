import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './const/header/header.component';
import {FooterComponent} from './const/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {GteDirective} from './gte.directive';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ModelDrivenFormComponent } from './const/footer/model-driven-form/model-driven-form.component';
import {GteValidatorService} from './const/footer/model-driven-form/gte-validator.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GteDirective,
    ModelDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  providers: [GteValidatorService],
  bootstrap: [AppComponent]
})

export class AppModule { }
