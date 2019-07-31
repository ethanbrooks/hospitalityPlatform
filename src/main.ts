// import { AppBrowserModule } from './app/app.browser.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(PluginModule).then(ref => {

// document.addEventListener('DOMContentLoaded', () => {
platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    console.log('bootstrapModule');
  })
  .catch(err => console.log(err));
// });

