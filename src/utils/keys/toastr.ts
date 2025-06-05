import {
    type InjectionKey,
} from 'vue';
import {
    type ToastInterface,
} from 'vue-toastification';

export default Symbol() as InjectionKey<ToastInterface>;
