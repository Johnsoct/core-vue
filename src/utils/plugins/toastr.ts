 
// Packages
import {
    type App,
} from 'vue';
import Toast, {
    type PluginOptions,
    POSITION,
    type ToastInterface,
    useToast,
} from 'vue-toastification';

import 'vue-toastification/dist/index.css';
import '@src/styles/toastrs.css';

// Component
import BaseBanner from '@src/components/base/base-banner.vue';
// Helpers
import Key from '@src/utils/keys/toastr';

declare type ToastID = number | string; // Copied from Vue-Toastification
interface componentProps {
    actionCallback?: object,
    actionText?: string,
    close?: boolean,
    header?: string,
    subheader?: string,
}

const DEFAULT_OPTIONS: PluginOptions = {
    // Toastr's default options based on: https://codeseven.github.io/toastr/demo.html
    closeButton: false,
    closeOnClick: false,
    draggable: true, // Whether or not the toast can be dismissed by being dragged to the side
    hideProgressBar: true,
    icon: false,
    newestOnTop: false,
    position: POSITION.TOP_CENTER,
    timeout: 4000, // How long it lasts w/o any interaction
};

export const customInstanceOfToast = (): ToastInterface => {
    const ToastInterface = useToast();

    const originalErrorMethod = ToastInterface.error;
    ToastInterface.error = (content: componentProps, options?: PluginOptions): ToastID => {
        const componentContent = {
            component: BaseBanner,
            props: content,
        };

        return originalErrorMethod(componentContent, options);
    };

    const originalInfoMethod = ToastInterface.info;
    ToastInterface.info = (content: componentProps, options?: PluginOptions): ToastID => {
        const componentContent = {
            component: BaseBanner,
            props: content,
        };

        return originalInfoMethod(componentContent, options);
    };

    const originalSuccessMethod = ToastInterface.success;
    ToastInterface.success = (content: componentProps, options?: PluginOptions): ToastID => {
        const componentContent = {
            component: BaseBanner,
            props: content,
        };

        return originalSuccessMethod(componentContent, options);
    };

    return ToastInterface;
};

export const ToastrPlugin = {
    install (app: App, options?: PluginOptions) {
        if (options?.shareAppContext) {
            options.shareAppContext = app;
        }
        app.use(Toast, {
            ...DEFAULT_OPTIONS,
            ...options,
        });
        app.provide(Key, customInstanceOfToast());
    },
};
