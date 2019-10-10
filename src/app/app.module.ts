import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomationComponent } from './automation/automation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './partials/nav/nav.component';
import { UserConfigurationComponent } from './user-configuration/user-configuration.component';
import { SharedModule } from './shared/shared.module';
import { ErrorInterceptorProvider } from './core/_interceptors/error/error.interceptor';




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
      SharedModule
   ],
   providers: [
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
