/// <reference path="node_modules/@types/node/index.d.ts" />
import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './src/app.module';

if (process.env.ENV === 'production') {
    enableProdMode();
}

document.addEventListener("DOMContentLoaded", function (event) {
    platformBrowserDynamic().bootstrapModule(AppModule);
});
