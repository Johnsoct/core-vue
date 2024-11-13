import type { ComponentDataAttributes } from '@ts/cypress';

export const BASE_BANNER = {
  buttons: {
    action: '[data-cy="base-banner-action-btn"]',
    close: '[data-cy="base-banner-close-btn"]',
  },
  icons: {
    alertTriangle: '[data-cy="base-banner-icon-alert-triangle"]',
    checkCircle: '[data-cy="base-banner-icon-check-circle"]',
    message: '[data-cy="base-banner-icon-message"]',
    stars: '[data-cy="base-banner-icon-stars"]',
    xClose: '[data-cy="base-banner-icon-x-close"]',
  },
  labels: {
    header: '[data-cy="base-banner-header"]',
    subheader: '[data-cy="base-banner-subheader"]',
  },
  wrappers: {
    error: '[data-cy="base-banner-error"]',
    info: '[data-cy="base-banner-info"]',
    persistent: '[data-cy="base-banner-persistent"]',
    success: '[data-cy="base-banner-success"]',
  },
} satisfies ComponentDataAttributes;

export const BASE_BUTTON = {
  icons: {
    default: '[data-cy="base-button-icon-default"]',
    ellipsis: '[data-cy="base-button-loader"]',
  },
  wrappers: {
    button: '[data-cy="base-button"]',
  },
} satisfies ComponentDataAttributes;

export const BASE_INPUT = {
  icons: {
    password: '[data-cy="base-input-password-view-icon"]',
  },
  inputs: {
    input: '[data-cy="base-input-input"]',
  },
  labels: {
    hint: '[data-cy="base-input-hint"]',
    inputLabel: '[data-cy="base-input-label"]',
    instructions: '[data-cy="base-input-instructions"]',
  },
} satisfies ComponentDataAttributes;

export const BASE_MODAL = {
  icons: {
    close: '[data-cy="base-modal-close-icon"]',
    slot: '[data-cy="base-modal-text-content-icon"]',
  },
  labels: {
    header: '[data-cy="base-modal-text-content-header"]',
    subheader: '[data-cy="base-modal-text-content-subheader"]',
  },
  wrappers: {
    bg: '[data-cy="base-modal"]',
    content: '[data-cy="base-modal-content"]',
    modal: '[data-cy="base-modal-modal"]',
  },
} satisfies ComponentDataAttributes;

export const BASE_RADIO_INPUT = {
  inputs: {
    input: '[data-cy="base-radio-input-input"]',
  },
  labels: {
    label: '[data-cy="base-radio-input-label"]',
    supportingLabel: '[data-cy="base-radio-input-supporting-label"]',
  },
  wrappers: {
    radioInput: '[data-cy="base-radio-input"]',
  },
} satisfies ComponentDataAttributes;

export const BASE_SELECT = {
  buttons: {
    clear: '.vs__clear',
    open: '.vs__actions',
  },
  icons: {
    deselect: '',
    openIndicator: '[data-cy="base-select-open-indicator-icon"]',
  },
  inputs: {
    search: '.vs__search',
  },
  labels: {
    dropdownOption: '.vs__dropdown-option',
    inputLabel: '[data-cy="base-select-label"]',
    noOptions: '.vs__no-options',
    selected: '.vs__selected',
  },
  wrappers: {
    baseSelect: '[data-cy="base-select"]',
    dropdownMenu: '.vs__dropdown-menu',
    select: '[data-cy="base-select-select"]',
  },
} satisfies ComponentDataAttributes;

export const BASE_TAG = {
  icons: {
    icon: '[data-cy="base-tag-icon"]',
  },
  labels: {
    tag: '[data-cy="base-tag"]',
  },
} satisfies ComponentDataAttributes;
