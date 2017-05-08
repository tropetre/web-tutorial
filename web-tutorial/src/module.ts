import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DevExtremeModule } from 'devextreme-angular';
import { TutorialApp } from './tutorial.app';


@NgModule({
    imports: [
        BrowserModule,
        DevExtremeModule
    ],
    declarations: [
        TutorialApp
    ],
    bootstrap: [TutorialApp]
})
export class AppModule { }