# Core Frontend Library

This template should help get you started developing any web-based, Vue product. Each component and function comes with test coverage, but you're free to add your own tests within the application exercising this library.


<br><br>
Don't forget!
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

<br><br>
## Included components
### Actionable components
* BaseBanner
* BaseBeatLoader
* BaseButton
* BaseInput
* BaseInvoiceTag
* BaseModal
* BaseRadioInput
* BaseReservesTag
* BaseSelect
* BaseTransfersTag
### SVG components to be utilized directly within templates for dynamic style adjustments
* AlertCircle
* AlertTriangle
* CheckCircle
* Ellipsis
* Eye
* FilterLines
* LightningBolt
* Message
* Ring
* Stars
* XClose

<br><br>
## Downloading and using this NPM package with GitHub

### Installing
#### Any live environment (recommended for most use cases)
1. Create a personal access token within GitHub for the GitHub NPM Package Registry (https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens). Make sure you check all the boxes related to packages.
2. Run this command in the CLI: `npm login --scope=@username --auth-type=legacy --registry=https://npm.pkg.github.com`
3. Use your GitHub username for "username"
4. Use your personal access token created in step #1 for "password"

You now have access to the private core-frontend package and can install it at @username/core.

#### Locally (when testing changes to the library itself)
1. Checkout the core library repo
2. Run `npm link`
3. Copy the outputed named, which is the `name` property within `package.json`
4. Within the directory of your application, run `npm link @username/core`

Now your directory is linked to the core "package" as if you were consuming it like a NPM package, and when you updated and rebuild the core library locally, it will automatically update it within your directory.

### Using
You can either import the entire library as a plugin:
```
import Core from '@username/core';
import '@username/core/dist/style.css';

...

app.use(Core);
```
or use components individually:
```
import { BaseButton } from '@username/core';
import '@username/core/dist/style.css';

...

<base-button>Example Button</base-button>
```

<br><br>
## How to create a new package update within this repo
![image](https://github.com/username/core/assets/6319532/4c9d8ea4-1289-4cd6-810a-9e9ba015438d)
1. Create a new release with a tag that is a correct iteration above the last tag
2. Give it a proper title and description fitting the new release
3. Publish the release
4. Check GitHub actions to ensure the "Node.js Package" action completes successfully

<br><br>
## Type Support for `.vue` Imports in TS
**not yet updated**

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
3. Install Volar

<br><br>
## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run Component Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:component
```

This runs the component tests against the Vite development server.
It is much faster than the production build.

