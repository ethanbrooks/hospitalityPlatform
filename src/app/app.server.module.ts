import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
    BrowserModule.withServerTransition({appId: 'app-root'}),
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
