/**
 * Created by Truong on 23-Jun-16.
 */
import {Pipe, PipeTransform} from '@angular/core';

/*
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
 */

@Pipe({
    name: 'myPipe'
})

export class CustomPipe implements PipeTransform {
    // The transform method is essential to a pipe.
    transform(value: number, exponent: string): number {
        let exp = parseFloat(exponent);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    }
}