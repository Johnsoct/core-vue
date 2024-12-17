<script setup lang="ts">
// Packages
import {
        inject,
        ref,
        type StyleValue,
} from 'vue';
// Components
import BaseBanner from '@src/components/base/base-banner.vue';
import BaseButton from '@src/components/base/base-button.vue';
import BaseInput from '@src/components/base/base-input.vue';
import BaseModal from '@src/components/base/base-modal.vue';
import BaseRadioInput from '@src/components/base/base-radio-input.vue';
import BaseSelect from '@src/components/base/base-select.vue';
import AlertTriangle from '@src/components/svg/alert-triangle.vue';
// Helpers
import ToastrKey from '@src/utils/keys/toastr';

interface typeDetails {
        css: {
                fontSize: string,
                letterSpacing?: string,
                lineHeight: string,
        },
        labels: {
                fontSize: string,
                lineHeight: string,
                title: string,
                tracking: string,
        },
}

const buttonSizes = [
        'md',
        'lg',
        'xl',
];
const buttonStyles = [
        'error',
        'primary',
        'secondary',
        'tertiary',
];

const filledInput = ref('House 12 Street 1 Block C');

const colorIdentifiers: string[] = [
        '25',
        '50',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
];
const colorsBaseBG: string[] = [
        '#FFFFFF',
        '#000000',
];
const colorsErrorBG: string[] = [
        '#FFFBFA',
        '#FEF3F2',
        '#FEE4E2',
        '#FECDCA',
        '#FDA29B',
        '#F97066',
        '#F04438',
        '#D92D20',
        '#B42318',
        '#912D17',
        '#7A271A',
];
const colorsSecondaryBG: string[] = [
        '#FCFCFD',
        '#F9FAFB',
        '#F2F4F7',
        '#EAECF0',
        '#D0D5DD',
        '#98A2B3',
        '#667085',
        '#475467',
        '#344054',
        '#1D2939',
        '#101828',
];
const colorsPrimaryBG: string[] = [
        '#E6EEEE',
        '#E6EEEE',
        '#E6EEEE',
        '#CDDEBB',
        '#B3CDCB',
        '#9ABDBA',
        '#689B98',
        '#035953',
        '#024742',
        '#024742',
        '#012421',
];
const colorsSuccessBG: string[] = [
        '#F6FEF9',
        '#ECFDF3',
        '#D1FADF',
        '#A6F4C5',
        '#6CE9A6',
        '#32D583',
        '#12B76A',
        '#039855',
        '#027A4B',
        '#05603A',
        '#054F31',
];
const colorsWarningBG: string[] = [
        '#FFFCF5',
        '#FFFAEB',
        '#FEF0C7',
        '#FEDF89',
        '#FEC84B',
        '#FDB022',
        '#F7A326',
        '#DC6803',
        '#B54708',
        '#93370D',
        '#7A2E0E',
];
const colorsBGs = [
        colorsBaseBG,
        colorsPrimaryBG,
        colorsSecondaryBG,
        colorsErrorBG,
        colorsWarningBG,
        colorsSuccessBG,
];
const colorsBaseText: string[] = [
        '#000000',
        '#FFFFFF',
];
const colorsErrorText: string[] = [
        '#B42318',
        '#B42318',
        '#B42318',
        '#B42318',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
];
const colorsPrimaryText: string[] = [
        '#024742',
        '#024742',
        '#024742',
        '#024742',
        '#024742',
        '#024742',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
];
const colorsSecondaryText: string[] = [
        '#667085',
        '#667085',
        '#667085',
        '#667085',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
];
const colorsSuccessText: string[] = [
        '#027A48',
        '#027A48',
        '#027A48',
        '#027A48',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
];
const colorsWarningText: string[] = [
        '#B54708',
        '#B54708',
        '#B54708',
        '#B54708',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
];
const colorsTexts = [
        colorsBaseText,
        colorsPrimaryText,
        colorsSecondaryText,
        colorsErrorText,
        colorsWarningText,
        colorsSuccessText,
];
const colorsTypes = [
        'Base',
        'Primary',
        'Secondary',
        'Error',
        'Warning',
        'Success',
];

const display2XL: typeDetails = {
        css: {
                fontSize: '72px',
                letterSpacing: '0.02rem',
                lineHeight: '90px',
        },
        labels: {
                fontSize: '72px / 4.5rem',
                lineHeight: '90px / 5.625rem',
                title: 'Display 2xl',
                tracking: '-2% (0.02rem)',
        },
};
const displayXL: typeDetails = {
        css: {
                fontSize: '60px',
                letterSpacing: '0.02rem',
                lineHeight: '72px',
        },
        labels: {
                fontSize: '60px / 3.75rem',
                lineHeight: '72px / 4.5rem',
                title: 'Display xl',
                tracking: '-2% (0.02rem)',
        },
};
const displayLG: typeDetails = {
        css: {
                fontSize: '48px',
                letterSpacing: '0.02rem',
                lineHeight: '60px',
        },
        labels: {
                fontSize: '48px / 3rem',
                lineHeight: '60px / 3.75rem',
                title: 'Display lg',
                tracking: '-2% (0.02rem)',
        },
};
const displayMD: typeDetails = {
        css: {
                fontSize: '36px',
                letterSpacing: '0.02rem',
                lineHeight: '44px',
        },
        labels: {
                fontSize: '36px / 2.25rem',
                lineHeight: '44px / 2.75rem',
                title: 'Display md',
                tracking: '-2% (0.02rem)',
        },
};
const displaySM: typeDetails = {
        css: {
                fontSize: '30px',
                lineHeight: '38px',
        },
        labels: {
                fontSize: '30px / 1.875rem',
                lineHeight: '38px / 2.375rem',
                title: 'Display sm',
                tracking: '',
        },
};
const displayXS: typeDetails = {
        css: {
                fontSize: '24px',
                lineHeight: '32px',
        },
        labels: {
                fontSize: '24px / 1.5rem',
                lineHeight: '32px / 2rem',
                title: 'Display xs',
                tracking: '',
        },
};
const textXL: typeDetails = {
        css: {
                fontSize: '20px',
                lineHeight: '30px',
        },
        labels: {
                fontSize: '20px / 1.25rem',
                lineHeight: '30px / 1.875rem',
                title: 'Text xl',
                tracking: '',
        },
};
const textLG: typeDetails = {
        css: {
                fontSize: '18px',
                lineHeight: '28px',
        },
        labels: {
                fontSize: '18px / 1.125rem',
                lineHeight: '28px / 1.75rem',
                title: 'Text lg',
                tracking: '',
        },
};
const textMD: typeDetails = {
        css: {
                fontSize: '16px',
                lineHeight: '24px',
        },
        labels: {
                fontSize: '16px / 1rem',
                lineHeight: '24px / 1.5rem',
                title: 'Text md',
                tracking: '',
        },
};
const textSM: typeDetails = {
        css: {
                fontSize: '14px',
                lineHeight: '20px',
        },
        labels: {
                fontSize: '14px / 0.875rem',
                lineHeight: '20px / 1.25rem',
                title: 'Text sm',
                tracking: '',
        },
};
const textXS: typeDetails = {
        css: {
                fontSize: '12px',
                lineHeight: '18px',
        },
        labels: {
                fontSize: '12px / 0.75rem',
                lineHeight: '18px / 1.125rem',
                title: 'Text xs',
                tracking: '',
        },
};

const spacings = [
        {
                name: '1',
                px: '4',
                rem: '0.25rem',
        },
        {
                name: '2',
                px: '8',
                rem: '0.5',
        },
        {
                name: '3',
                px: '12',
                rem: '0.75',
        },
        {
                name: '4',
                px: '16',
                rem: '1',
        },
        {
                name: '5',
                px: '20',
                rem: '1.25',
        },
        {
                name: '6',
                px: '24',
                rem: '1.5',
        },
        {
                name: '8',
                px: '32',
                rem: '2',
        },
        {
                name: '10',
                px: '40',
                rem: '2.5',
        },
        {
                name: '12',
                px: '48',
                rem: '3',
        },
        {
                name: '16',
                px: '64',
                rem: '4',
        },
        {
                name: '20',
                px: '80',
                rem: '5',
        },
        {
                name: '24',
                px: '96',
                rem: '6',
        },
        {
                name: '32',
                px: '128',
                rem: '8',
        },
        {
                name: '40',
                px: '160',
                rem: '10',
        },
        {
                name: '48',
                px: '192',
                rem: '12',
        },
        {
                name: '56',
                px: '224',
                rem: '14',
        },
        {
                name: '64',
                px: '256',
                rem: '16',
        },
];

const desktopTypes: { category: typeDetails, tag: string }[] = [
        {
                category: display2XL,
                tag: 'H1',
        },
        {
                category: displayXL,
                tag: 'H2',
        },
        {
                category: displayLG,
                tag: 'H3',
        },
        {
                category: displayMD,
                tag: 'H4',
        },
        {
                category: displaySM,
                tag: 'H5',
        },
        {
                category: displayXS,
                tag: 'H6',
        },
        {
                category: textXL,
                tag: 'Subtitle 1',
        },
        {
                category: textLG,
                tag: 'Subtitle 2',
        },
        {
                category: textMD,
                tag: 'Button',
        },
        {
                category: textSM,
                tag: 'Body 1',
        },
        {
                category: textXS,
                tag: 'Body 2',
        },
];
const mobileTypes: { category: typeDetails, tag: string }[] = [
        {
                category: displayLG,
                tag: 'H1',
        },
        {
                category: displayMD,
                tag: 'H2',
        },
        {
                category: displaySM,
                tag: 'H3',
        },
        {
                category: displayXS,
                tag: 'H4',
        },
        {
                category: textXL,
                tag: 'H5',
        },
        {
                category: textLG,
                tag: 'H6',
        },
        {
                category: textMD,
                tag: 'Subtitle 1',
        },
        {
                category: textSM,
                tag: 'Subtitle 2',
        },
        {
                category: textMD,
                tag: 'Button',
        },
        {
                category: textSM,
                tag: 'Body 1',
        },
        {
                category: textXS,
                tag: 'Body 2',
        },
];
const typeOptions: typeDetails[] = [
        display2XL,
        displayXL,
        displayLG,
        displayMD,
        displaySM,
        displayXS,
        textXL,
        textLG,
        textMD,
        textSM,
        textXS,
];

const generateTypographyHeader = (type: typeDetails): string => {
        const fontSize = `Font size: ${type.labels.fontSize}`;
        const lineHeight = `Line height: ${type.labels.lineHeight}`;
        const tracking = type.labels.tracking
                ? ` | Tracking: ${type.labels.tracking}`
                : '';
        return `${fontSize} | ${lineHeight}${tracking}`;
};
const generateTypographyStyles = (type: typeDetails): StyleValue => {
        return {
                fontSize: type.css.fontSize,
                letterSpacing: type.css?.letterSpacing || '0',
                lineHeight: type.css.lineHeight,
        };
};

const Toastr = inject(ToastrKey);

const triggerActionToastr = (): void => {
        Toastr?.success(
                {
                        actionCallback: () => {
                                console.log('You pressed the button!');
                        },
                        actionText: 'Button Example',
                        close: true,
                        header: 'This is an info toastr',
                        type: 'info',
                }
        );
};
const triggerErrorToastr = (): void => {
        Toastr?.error(
                {
                        close: true,
                        header: 'This is an error toastr',
                        type: 'error',
                }
        );
};
const triggerInfoToastr = (): void => {
        Toastr?.info(
                {
                        close: true,
                        header: 'This is an info toastr',
                        type: 'info',
                }
        );
};
const triggerSuccessToastr = (): void => {
        Toastr?.success(
                {
                        close: true,
                        header: 'This is an success toastr',
                        type: 'success',
                }
        );
};
</script>

<template>
        <main class="Styleguide">
                <div class="Styleguide__section">
                        <div class="Styleguide__section-title">
                                <h6>Typography</h6>
                        </div>
                        <section>
                                <h3 class="mb-4">Inter</h3>
                                <h1>Ag</h1>

                                <div class="Styleguide__section-subheader mt-16 mb-16">
                                        <p class="Styleguide__section-subheader-p">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                                        <p class="Styleguide__section-subheader-p">abcdefghijklmnopqrstuvwxyz</p>
                                        <p class="Styleguide__section-subheader-p">0123456789 !@#$%^&*()</p>
                                </div>

                                <div v-for="(type, index) in typeOptions" :key="`type-${index}`" class="mb-16">
                                        <div class="Styleguide__typography-header mb-8 pb-4">
                                                <label class="Styleguide__typography-header-label">{{ type.labels.title
                                                        }}</label>
                                                <label class="Styleguide__typography-header-label">
                                                        {{ generateTypographyHeader(type) }}
                                                </label>
                                        </div>

                                        <div class="Styleguide__typography-examples">
                                                <div class="Styleguide__typography-example">
                                                        <label class="Styleguide__typography-example-label mb-16"
                                                                :style="generateTypographyStyles(type)">
                                                                {{ type.labels.title }}
                                                        </label>
                                                        <label class="Styleguide__typography-example-label"
                                                                :style="generateTypographyStyles(type)">
                                                                Regular
                                                        </label>
                                                </div>

                                                <div class="Styleguide__typography-example">
                                                        <label class="Styleguide__typography-example-label fw-med mb-16"
                                                                :style="generateTypographyStyles(type)">
                                                                {{ type.labels.title }}
                                                        </label>
                                                        <label class="Styleguide__typography-example-label fw-med"
                                                                :style="generateTypographyStyles(type)">
                                                                Medium
                                                        </label>
                                                </div>

                                                <div class="Styleguide__typography-example">
                                                        <label class="Styleguide__typography-example-label fw-semi-bold mb-16"
                                                                :style="generateTypographyStyles(type)">
                                                                {{ type.labels.title }}
                                                        </label>
                                                        <label class="Styleguide__typography-example-label fw-semi-bold"
                                                                :style="generateTypographyStyles(type)">
                                                                Semibold
                                                        </label>
                                                </div>

                                                <div class="Styleguide__typography-example">
                                                        <label class="Styleguide__typography-example-label fw-semi-bold mb-16"
                                                                :style="generateTypographyStyles(type)">
                                                                {{ type.labels.title }}
                                                        </label>
                                                        <label class="Styleguide__typography-example-label fw-semi-bold"
                                                                :style="generateTypographyStyles(type)">
                                                                Bold
                                                        </label>
                                                </div>
                                        </div>
                                </div>

                                <div class="Styleguide__typography-device-differences mt-32">
                                        <div class="Styleguide__typography-device-examples pr-12">
                                                <label
                                                        class="Styleguide__typography-device-examples-header mb-12">Mobile</label>
                                                <div v-for="(type, index) in mobileTypes" :key="`type-${index}`"
                                                        class="Styleguide__typography-device-example mb-12">
                                                        <label class="cap"
                                                                :style="generateTypographyStyles(type.category)">
                                                                {{ type.tag }}
                                                        </label>

                                                        <label class="Styleguide__typography-header-label">
                                                                {{ generateTypographyHeader(type.category) }}
                                                        </label>
                                                </div>
                                        </div>
                                        <div class="Styleguide__typography-device-examples">
                                                <label
                                                        class="Styleguide__typography-device-examples-header mb-12">Desktop</label>
                                                <div v-for="(type, index) in desktopTypes" :key="`type-${index}`"
                                                        class="Styleguide__typography-device-example mb-12">
                                                        <label class="cap"
                                                                :style="generateTypographyStyles(type.category)">
                                                                {{ type.tag }}
                                                        </label>

                                                        <label class="Styleguide__typography-header-label">
                                                                {{ generateTypographyHeader(type.category) }}
                                                        </label>
                                                </div>
                                        </div>
                                </div>
                        </section>
                </div>

                <div class="Styleguide__section">
                        <div class="Styleguide__section-title">
                                <h6>Colors</h6>
                        </div>

                        <section>
                                <div v-for="(bgColorCategory, colorsBGsIndex) in colorsBGs"
                                        :key="`colors-${colorsBGsIndex}`" class="Styleguide__color-category mb-16">
                                        <label class="Styleguide__color-category-header mr-8">{{
                                                colorsTypes[colorsBGsIndex] }}</label>

                                        <div class="Styleguide__color-category-cards">
                                                <div v-for="(bgColor, bgColorCategoryIndex) in bgColorCategory"
                                                        :key="`base-colors-${bgColorCategoryIndex}`"
                                                        class="Styleguide__color-category-card mr-8">
                                                        <div class="Styleguide__color-category-card-top"
                                                                :style="{ backgroundColor: bgColor }">
                                                                <label class="Styleguide__color-category-card-text"
                                                                        :style="{ color: colorsTexts?.[colorsBGsIndex]?.[bgColorCategoryIndex] }">
                                                                        Text
                                                                </label>
                                                        </div>
                                                        <div class="Styleguide__color-category-card-bottom">
                                                                <label
                                                                        class="Styleguide__color-category-card-identifier">
                                                                        {{ colorIdentifiers[bgColorCategoryIndex] }}
                                                                </label>
                                                                <label class="Styleguide__color-category-card-hex">
                                                                        {{ bgColor }}
                                                                </label>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </section>
                </div>

                <div class="Styleguide__section">
                        <div class="Styleguide__section-title">
                                <h6>Spacing system guides</h6>
                        </div>

                        <section>
                                <div class="Styleguide__spacing-header">
                                        <label class="Styleguide__spacing-header-label">Name</label>
                                        <label class="Styleguide__spacing-header-label">REMs (16px base)</label>
                                        <label class="Styleguide__spacing-header-label">Pixels</label>
                                </div>

                                <div class="Styleguide__spacing-table">
                                        <div v-for="spacing in spacings" :key="`spacing-${spacing}`"
                                                class="Styleguide__spacing-table-row">
                                                <label class="Styleguide__spacing-table-column">{{ spacing.name
                                                        }}</label>
                                                <label class="Styleguide__spacing-table-column">{{ spacing.rem
                                                        }}rem</label>
                                                <label class="Styleguide__spacing-table-column">{{ spacing.px
                                                        }}px</label>
                                                <div class="Styleguide__spacing-table-column">
                                                        <label>{{ spacing.px }}px</label>
                                                        <progress class="Styleguide__spacing-table-row-progress"
                                                                :max="spacings?.[spacings.length - 1]?.px"
                                                                :value="spacing.px" />
                                                </div>
                                        </div>
                                </div>
                        </section>
                </div>

                <div class="Styleguide__section">
                        <div class="Styleguide__section-title">
                                <h6>Buttons</h6>
                        </div>

                        <section>
                                <template v-for="(style) in buttonStyles" :key="`buttons-${style}`">
                                        <label class="Styleguide__buttons-subheader subtitle-1 capitalize">{{ style
                                                }}</label>

                                        <div class="Styleguide__buttons-example">
                                                <template v-for="size in buttonSizes" :key="`buttons-${size}`">
                                                        <label class="subtitle-2">{{ size }}</label>

                                                        <div class="Styleguide__buttons-buttons mt-6 mb-6">
                                                                <div class="Styleguide__buttons-buttons-example">
                                                                        <label
                                                                                class="Styleguide__buttons-buttons-example-label subtitle-1 mr-3 capitalize">Rest</label>
                                                                        <base-button :size="size" :type="style">
                                                                                Button CTA
                                                                        </base-button>
                                                                </div>
                                                                <div class="Styleguide__buttons-buttons-example">
                                                                        <label
                                                                                class="Styleguide__buttons-buttons-example-label subtitle-1 mr-3 capitalize">Hover</label>
                                                                        <base-button :size="size" :type="style">
                                                                                Button CTA
                                                                        </base-button>
                                                                </div>
                                                                <div class="Styleguide__buttons-buttons-example">
                                                                        <label
                                                                                class="Styleguide__buttons-buttons-example-label subtitle-1 mr-3 capitalize">Focused</label>
                                                                        <base-button :size="size" :type="style">
                                                                                Button CTA
                                                                        </base-button>
                                                                </div>
                                                                <div class="Styleguide__buttons-buttons-example">
                                                                        <label
                                                                                class="Styleguide__buttons-buttons-example-label subtitle-1 mr-3 capitalize">Disabled</label>
                                                                        <base-button :disabled="true" :size="size"
                                                                                :type="style">
                                                                                Button CTA
                                                                        </base-button>
                                                                </div>
                                                                <div class="Styleguide__buttons-buttons-example">
                                                                        <label
                                                                                class="Styleguide__buttons-buttons-example-label subtitle-1 mr-3 capitalize">Loading</label>
                                                                        <base-button :loading="true" :size="size"
                                                                                :type="style">
                                                                                Button CTA
                                                                        </base-button>
                                                                </div>
                                                        </div>
                                                </template>
                                        </div>
                                </template>
                        </section>
                </div>

                <div class="Styleguide__section">
                        <div class="Styleguide__section-title">
                                <h6>Inputs</h6>
                        </div>

                        <section>
                                <div class="Styleguide__input-category mb-6">
                                        <base-input :label="true" :label-for="'input-rest'"
                                                :placeholder="'Enter the number and street'">
                                                Business address
                                        </base-input>
                                        <label class="Styleguide__input-category-label ml-24">Rest</label>
                                </div>

                                <div class="Styleguide__input-category mb-6">
                                        <base-input :label="true" :label-for="'input-focused'"
                                                :placeholder="'Enter the number and street'">
                                                Business address
                                        </base-input>
                                        <label class="Styleguide__input-category-label ml-24">Focused</label>
                                </div>

                                <div class="Styleguide__input-category mb-6">
                                        <base-input v-model="filledInput" :label="true" :label-for="'input-filled'"
                                                :placeholder="'Enter the number and street'">
                                                Business address
                                        </base-input>
                                        <label class="Styleguide__input-category-label ml-24">Filled</label>
                                </div>

                                <div class="Styleguide__input-category mb-6">
                                        <base-input v-model="filledInput" :disabled="true" :label="true"
                                                :label-for="'input-disabled'"
                                                :placeholder="'Enter the number and street'">
                                                Business address
                                        </base-input>
                                        <label class="Styleguide__input-category-label ml-24">Disabled</label>
                                </div>

                                <div class="Styleguide__input-category mb-6">
                                        <base-input v-model="filledInput" :instructions="'This is an error message.'"
                                                :label="true" :label-for="'input-error'"
                                                :placeholder="'Enter the number and street'" :valid="false">
                                                Business address
                                        </base-input>
                                        <label class="Styleguide__input-category-label ml-24">Error</label>
                                </div>

                                <div class="Styleguide__input-category mb-6">
                                        <base-input v-model="filledInput" :hint="'This is a hint to help the user.'"
                                                :instructions="'This is an error message.'" :label="true"
                                                :label-for="'input-hint'" :placeholder="'Enter the number and street'">
                                                Business address
                                        </base-input>
                                        <label class="Styleguide__input-category-label ml-24">Hint</label>
                                </div>

                                <div class="Styleguide__input-category mb-6">
                                        <base-input v-model="filledInput" :label="true" :label-for="'input-password'"
                                                :placeholder="'Enter the number and street'" :type="'password'">
                                                Business address
                                        </base-input>
                                        <label class="Styleguide__input-category-label ml-24">Password</label>
                                </div>

                                <div class="Styleguide__input-category mb-6">
                                        <base-input :instructions="'You\'ve been a baaaaaad boy'" :label="true"
                                                :label-for="'input-required'"
                                                :placeholder="'Enter the number and street'" :required="true">
                                                Business address
                                        </base-input>
                                        <label class="Styleguide__input-category-label ml-24">Required</label>
                                </div>
                        </section>
                </div>

                <div class="Styleguide__section">
                        <div class="Styleguide__section-title">
                                <h6>Modals</h6>
                        </div>

                        <section>
                                <div class="Styleguide__base-modals">
                                        <base-modal @close="() => console.log('Close')" class="Styleguide__base-modal"
                                                :header="'Possible Duplicate!'" :is-closable="true"
                                                :subheader="'This invoice may have been submitted before. Are you sure you want to submit it again?'">
                                                <template #icon>
                                                        <alert-triangle class="Styleguide__base-model-alert-triangle" />
                                                </template>
                                                <template #content>
                                                        <base-button class="width-100 mr-3" :size="'lg'"
                                                                :type="'tertiary'">
                                                                No, cancel
                                                        </base-button>
                                                        <base-button class="width-100" :size="'lg'">
                                                                Yes, submit
                                                        </base-button>
                                                </template>
                                        </base-modal>
                                        <base-modal @close="() => console.log('Close')" class="Styleguide__base-modal"
                                                :header="'No internet connection'" :is-closable="true"
                                                :subheader="'Please try again when you have a strong and stable internet connection'">
                                                <template #content>
                                                        <base-button class="width-100" :size="'lg'">
                                                                Okay
                                                        </base-button>
                                                </template>
                                        </base-modal>
                                </div>
                        </section>
                </div>

                <div class="Styleguide__section">
                        <div class="Styleguide__section-title">
                                <h6>Radio</h6>
                        </div>

                        <section>
                                <h6 class="Styleguide__subtitle mt-0">Without supporting text</h6>

                                <div class="Styleguide__input-category mb-6">
                                        <base-radio-input :label="true" :label-for="'radio-selected'" :value="true">
                                                <template #default>Expedited ($18)</template>
                                        </base-radio-input>
                                        <label class="Styleguide__input-category-label ml-24">Selected</label>
                                </div>
                                <div class="Styleguide__input-category mb-6">
                                        <base-radio-input :label="true" :label-for="'radio-unselected'">
                                                <template #default>Expedited ($18)</template>
                                        </base-radio-input>
                                        <label class="Styleguide__input-category-label ml-24">Unselected</label>
                                </div>
                                <div class="Styleguide__input-category mb-6">
                                        <base-radio-input :label="true" :label-for="'radio-hover'" :value="true">
                                                <template #default>Expedited ($18)</template>
                                        </base-radio-input>
                                        <label class="Styleguide__input-category-label ml-24">Hover/Focused</label>
                                </div>
                                <div class="Styleguide__input-category mb-6">
                                        <base-radio-input :disabled="true" :label="true" :label-for="'radio-hover'"
                                                :value="true">
                                                <template #default>Expedited ($18)</template>
                                        </base-radio-input>
                                        <label class="Styleguide__input-category-label ml-24">Hover/Focused</label>
                                </div>

                                <h6 class="Styleguide__subtitle">With supporting text</h6>

                                <div class="Styleguide__input-category mb-6">
                                        <base-radio-input :label="true" :label-for="'radio-selected'"
                                                :supporting-label="true" :supporting-label-for="'radio-selected'"
                                                :value="true">
                                                <template #default>Expedited ($18)</template>
                                                <template #supporting>Should arrive within 3 hours</template>
                                        </base-radio-input>
                                        <label class="Styleguide__input-category-label ml-24">Selected</label>
                                </div>
                                <div class="Styleguide__input-category mb-6">
                                        <base-radio-input :label="true" :label-for="'radio-unselected'"
                                                :supporting-label="true" :supporting-label-for="'radio-unselected'">
                                                <template #default>Expedited ($18)</template>
                                                <template #supporting>Should arrive within 3 hours</template>
                                        </base-radio-input>
                                        <label class="Styleguide__input-category-label ml-24">Unselected</label>
                                </div>
                                <div class="Styleguide__input-category mb-6">
                                        <base-radio-input :label="true" :label-for="'radio-hover'"
                                                :supporting-label="true" :supporting-label-for="'radio-hover'"
                                                :value="true">
                                                <template #default>Expedited ($18)</template>
                                                <template #supporting>Should arrive within 3 hours</template>
                                        </base-radio-input>
                                        <label class="Styleguide__input-category-label ml-24">Hover/Focused</label>
                                </div>
                                <div class="Styleguide__input-category mb-6">
                                        <base-radio-input :disabled="true" :label="true" :label-for="'radio-hover'"
                                                :supporting-label="true" :supporting-label-for="'radio-hover'"
                                                :value="true">
                                                <template #default>Expedited ($18)</template>
                                                <template #supporting>Should arrive within 3 hours</template>
                                        </base-radio-input>
                                        <label class="Styleguide__input-category-label ml-24">Hover/Focused</label>
                                </div>
                        </section>
                </div>

                <div class="Styleguide__section">
                        <div class="Styleguide__section-title">
                                <h6>Select</h6>
                        </div>

                        <section>
                                <div class="Styleguide__input-category mb-6">
                                        <base-select :options="['Option A', 'Option B']" :placeholder="'Filter by'" />
                                        <label class="Styleguide__input-category-label ml-24">Rest (no label)</label>
                                </div>
                                <div class="Styleguide__input-category mb-6">
                                        <base-select :label="true" :label-for="'base-select-rest'"
                                                :options="['Option A', 'Option B']" :placeholder="'Filter by'">
                                                Label
                                        </base-select>
                                        <label class="Styleguide__input-category-label ml-24">Rest</label>
                                </div>
                                <div class="Styleguide__input-category mb-6">
                                        <base-select :disabled="true" :label="true" :label-for="'base-select-disabled'"
                                                :options="['Option A', 'Option B']" :placeholder="'Filter by'">
                                                Label
                                        </base-select>
                                        <label class="Styleguide__input-category-label ml-24">Disabled</label>
                                </div>
                                <div class="Styleguide__input-category mb-6">
                                        <base-select :label="true" :label-for="'base-select-disabled'" :options="[
                                                {
                                                        firstName: 'Dick',
                                                        lastName: 'Head',
                                                },
                                                {
                                                        firstName: 'Butter',
                                                        lastName: 'Finger',
                                                },
                                        ]" :placeholder="'Filter by'">
                                                <template #default>Label</template>

                                                <template #option="{ firstName, lastName }">
                                                        {{ firstName }} {{ lastName }}
                                                </template>

                                                <template #selected-option="{ firstName, lastName }">
                                                        {{ firstName }} {{ lastName }}
                                                </template>
                                        </base-select>
                                        <label class="Styleguide__input-category-label ml-24">Formatted options</label>
                                </div>
                        </section>
                </div>

                <div class="Styleguide__section">
                        <div class="Styleguide__section-title">
                                <h6>Banners (persistent)</h6>
                        </div>

                        <section>
                                <base-banner @close-toast="() => console.log('banana sundae!')"
                                        :action-callback="() => { }" :action-text="'Click Me'" :close="true"
                                        data-cy="styleguide-base-banner-persistent"
                                        :header="'Please note that there is a bank holiday on Monday November 24, 2023.'"
                                        :subheader="'There could be a delay of 1-3 business days on the stated ETA of the transfer'"
                                        :type="'persistent'" />
                        </section>
                </div>

                <div class="Styleguide__section">
                        <div class="Styleguide__section-title">
                                <h6>Toastr (temporary)</h6>
                        </div>

                        <section id="toastr-section">
                                <base-banner :action-callback="() => { }" :action-text="'Action'" class="mb-10"
                                        :close="true" data-cy="styleguide-base-banner-error"
                                        :header="'Please note that there is a bank holiday on Monday November 24, 2023.'"
                                        :subheader="'There could be a delay of 1-3 business days on the stated ETA of the transfer'"
                                        :type="'error'" />
                                <base-banner :action-callback="() => { }" :action-text="'Action'" class="mb-10"
                                        :close="true" data-cy="styleguide-base-banner-info"
                                        :header="'Please note that there is a bank holiday on Monday November 24, 2023.'"
                                        :subheader="'There could be a delay of 1-3 business days on the stated ETA of the transfer'"
                                        :type="'info'" />
                                <base-banner :action-callback="() => { }" :action-text="'Action'" class="mb-10"
                                        :close="true" data-cy="styleguide-base-banner-success"
                                        :header="'Please note that there is a bank holiday on Monday November 24, 2023.'"
                                        :subheader="'There could be a delay of 1-3 business days on the stated ETA of the transfer'"
                                        :type="'success'" />
                                <div class="Styleguide__toastrs-buttons">
                                        <base-button @click="triggerErrorToastr" data-cy="styleguide-error-toastr-btn"
                                                :type="'tertiary'">
                                                Test Error Toastr
                                        </base-button>

                                        <base-button @click="triggerInfoToastr" data-cy="styleguide-info-toastr-btn"
                                                :type="'tertiary'">
                                                Test Info Toastr
                                        </base-button>

                                        <base-button @click="triggerSuccessToastr"
                                                data-cy="styleguide-success-toastr-btn" :type="'tertiary'">
                                                Test Success Toastr
                                        </base-button>

                                        <base-button @click="triggerActionToastr" :type="'tertiary'">
                                                Test Action Toastr
                                        </base-button>
                                </div>
                        </section>
                </div>
        </main>
</template>

<style lang="sass">
.Styleguide
  $block: &
  background-color: $app-bg
  padding: $spacing-16

  hr
    color: $secondary-900-bg

  section
    padding: $spacing-12 $spacing-6

  &__base-modal
    height: 50vh
    width: 50%

    .BaseModal__modal
      width: rems(400px)

  &__base-model-alert-triangle
    stroke: $error-500-bg

  &__base-modals
    +flex()

  &__buttons-buttons
    +flex($align: center, $justify: space-between)
    background-color: $secondary-50-bg
    border: rems(1px) solid $secondary-200-bg
    padding: $spacing-10

  &__buttons-buttons-example
    +flex($align: center)

  &__buttons-buttons-example-label
    color: $secondary-600-bg

  &__buttons-subheader
    display: block
    font-weight: $fw-semi-bold
    margin: $spacing-20 0

  &__color-category
    +flex($justify: space-between)

  &__color-category-card-bottom
    +flex($direction: column)
    padding: $spacing-3

  &__color-category-card
    +flex($direction: column)
    border-radius: $border-radius
    box-shadow: $dialog-shadow
    width: rems(160px)

  &__color-category-cards
    +flex()

  &__color-category-card-hex
    +text-md
    color: $secondary-600-bg

  &__color-category-card-identifier
    +text-lg
    font-weight: $fw-medium

  &__color-category-card-text
    +text-lg

  &__color-category-card-top
    +flex($align: center, $justify: center)
    border-radius: $border-radius $border-radius 0 0
    padding: $spacing-6 $spacing-2
    width: 100%

  &__color-category-header
    +text-lg
    font-weight: $fw-semi-bold
    width: rems(150px)

  &__input-category
    +flex($align: flex-end)

  &__section
    overflow-x: scroll

  &__section-header
    width: 100%

  &__section-subheader
    width: 100%

  &__section-subheader-p
    +display-lg

  &__section-title
    +secondary-900
    padding: $spacing-6

  &__spacing-header
    +flex
    border-bottom: rems(1px) solid $border
    margin-bottom: $spacing-4
    padding-bottom: $spacing-4
    width: 100%

  &__spacing-header-label
    +text-md
    color: $secondary-600-bg
    display: block

    &:nth-child(1)
      width: rems(100px)

    &:nth-child(2)
      width: rems(185px)

    &:nth-child(3)
      width: rems(100px)

  &__spacing-table
    #{$block}__spacing-table-row:first-child
      #{$block}__spacing-table-column
        &:last-child
          border-radius: $border-radius
          border-top: 1px dashed rgba(123, 97, 255, 1)

    #{$block}__spacing-table-row:last-child
      #{$block}__spacing-table-column
        &:last-child
          border-radius: $border-radius
          border-bottom: 1px dashed rgba(123, 97, 255, 1)


  &__spacing-table-column
    color: $secondary-900-bg
    display: block

    &:nth-child(1)
      width: rems(100px)

    &:nth-child(2)
      width: rems(185px)

    &:nth-child(3)
      width: rems(100px)

    &:nth-child(4)
      border-left: 1px dashed rgba(123, 97, 255, 1)
      border-right: 1px dashed rgba(123, 97, 255, 1)
      padding: $spacing-4
      position: relative
      width: 300px

    &--extralong
      width: rems(1324px) !important

      label
        +text-xs
        color: $primary-700-bg
        padding: 0 $spacing-1

  &__spacing-table-row
    +flex($align: center)
    height: rems(47px)

  &__spacing-table-row-progress
    position: absolute
    left: rems(16px)
    top: rems(13.5px)
    z-index: -1
    /* Reset the default appearance */
    -webkit-appearance: none
    -moz-appearance: none
    appearance: none
    border: none
    border-radius: 0
    display: inline-block
    height: rems(20px)
    width: rems(256px)

    &::-webkit-progress-bar
      background-color: transparent
      height: 100%
      width: 100%
      border: none
      border-radius: 0

    &::-webkit-progress-value
      background-color: rgba(158, 119, 237, 0.1)

  &__subtitle
    +text-md
    margin: rems(92px) 0

  &__toastrs-buttons
    +flex($justify: space-between)

  &__typography-example
    +flex($direction: column, $basis: 25%)

  &__typography-example-label
    color: $secondary-900-bg
    display: block

  &__typography-examples
    +flex()

  &__typography-header
    +flex($justify: space-between)
    border-bottom: rems(1px) solid $border

  &__typography-header-label
    color: $secondary-600-bg
    font-size: $text-md-font-size

  &__typography-device-example
    +flex($align: center, $justify: space-between)
    width: 100%

  &__typography-device-examples
    +flex($direction: column, $justify: space-between)
    width: 50%

  &__typography-device-examples-header
    color: $primary-600-bg
    font-weight: $fw-bold

  &__typography-device-differences
    +flex()
</style>
