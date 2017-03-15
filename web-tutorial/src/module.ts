import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { TutorialApp } from './tutorial.app';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        TutorialApp
    ],
    bootstrap: [TutorialApp]
})
export class AppModule { }