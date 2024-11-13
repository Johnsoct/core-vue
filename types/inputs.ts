// Packages
import Big from 'big.js';

export interface BaseInputCurrencyOutput {
  big: Big,
  cleaned: string,
}
export type BaseInputEmit = BaseInputCurrencyOutput | string;
export type BaseInputCurrencyEmit = BaseInputEmit | undefined;
