import { BigNumber } from 'bignumber.js';

export function strToDecimal(value: string): BigNumber {
  try {
    const converted = new BigNumber(value);
    return converted;
  } catch (error) {
    return null;
  }
}
