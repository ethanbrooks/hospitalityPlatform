import { Injectable } from '@angular/core';
import * as Core from '@uppy/core';


import { set, lensProp, compose, reduce, __ } from 'ramda';


@Injectable()
export class UppyService/* extends Uppy*/ {
  readonly Core = Core;

  configure(pluginConfig, uuid): any {
    const plugins = pluginConfig.map(([plugin, conf]) => {
      const config =
        plugin !== 'Dashboard' && conf.target ? set(lensProp('target'), Core[conf.target], conf) :
          set(lensProp('target'), '.DashboardContainer-' + uuid, conf);

      return [Core[plugin], config];
    });

    const addPlugin = (uppy: any, [name, conf]: [string, any]) => uppy.use(name, conf);

    const uppyInstance = compose(
      (u: any) => u.run(),
      reduce(addPlugin, __, plugins),
      Core
    )({ autoProceed: false });

    return uppyInstance;
  }
}
