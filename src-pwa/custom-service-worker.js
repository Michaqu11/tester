/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.config.js > pwa > workboxPluginMode is set to "InjectManifest"
 */

import { precacheAndRoute } from 'workbox-precaching'

// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST)

 self.__WB_DISABLE_DEV_LOGS = true

//cashing stategies
import {registerRoute} from 'workbox-routing';
import {NetworkFirst} from 'workbox-strategies';

registerRoute(
  ({url}) => url.pathname.startsWith('/templates'),
  new NetworkFirst()
);


let backgroundSyncSupported = 'sync' in self.registration ? true : false;
//console.log('backSync', backgroundSyncSupported)

