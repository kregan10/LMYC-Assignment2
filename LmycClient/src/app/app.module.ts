import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		DynamicFormComponent,
		DynamicFormQuestionComponent,
		HomeComponent,
		ContactComponent,
		LoginComponent,
		RegisterComponent
	],
    imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpModule,
		ReactiveFormsModule
	],
	// providers: [AuthService],
	bootstrap: [AppComponent]
})
export class AppModule { }
