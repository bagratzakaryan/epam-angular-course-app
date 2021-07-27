import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({
  name: 'exponential',
})
export class ExponentialPipe implements PipeTransform {
  transform(value: number, exponent = 1, multiply: number): number {
    return multiply * Math.pow(value, exponent);
  }
}
