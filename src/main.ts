// Packages
import {
  type App,
  createApp,
} from 'vue';
// Components
import * as components from '@src/components';
import Styleguide from '@src/Styleguide.vue';
// Plugins
import { ToastrPlugin } from '@src/utils/plugins/toastr';
// Styles
import '@src/styles/main.scss';

const app = createApp(Styleguide);

app.use(ToastrPlugin, {
  shareAppContext: true,
});

app.mount('#styleguide');

// Exports the entire library as a plugin, which allows it to be installed via app.use()
const CoreFrontend = {
  install: (app: App) => {
    for (const key in components) {
      // @ts-expect-error - There is nothing wrong with this statement, and it works
      app.component(key, components[key]);
    }

    app.use(ToastrPlugin, {
      shareAppContext: true,
    });
  },
};

export default CoreFrontend;
export * from '@cypress/support/utils/colors';
export * from '@src/components';
export * from '@src/utils/keys';
export * from '@src/utils/math/big';
