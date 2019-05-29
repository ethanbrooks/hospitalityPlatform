import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { PluginModule } from './app/plugin.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PluginModule).then(ref => {  
  // Otherise, log the boot error
}).catch(err => console.error(err));