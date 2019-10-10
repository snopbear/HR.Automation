import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AutomationComponent } from './automation/automation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './partials/nav/nav.component';
import { UserConfigurationComponent } from './user-configuration/user-configuration.component';
import { DirectivesModule } from './shared/_directives/directives.module';
import { ModulesModule } from './shared/_modules/modules.module';




@NgModule({
   declarations: [
      AppComponent,
      AutomationComponent,
      LoginComponent,
      RegisterComponent,
      NavComponent,
      UserConfigurationComponent

   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      NgSelectModule,
      DirectivesModule,
      ModulesModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
