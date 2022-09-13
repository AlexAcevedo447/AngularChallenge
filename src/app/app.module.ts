import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { ObjToArrayPipe } from './resources/pipes/ObjToArray.pipe';
import { MealSectionComponent } from './components/meal-section/meal-section.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FilterPipe } from './resources/pipes/filter.pipe';
import { StringTrim } from './resources/pipes/stringTrim.pipe';
import { InfoModalComponent } from './components/info-modal/info-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    HomeComponent,
    FooterComponent,
    RecipeCardComponent,
    ObjToArrayPipe,
    MealSectionComponent,
    SearchFormComponent,
    FilterPipe,
    StringTrim,
    InfoModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
