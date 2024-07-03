/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
export class Formatter {
    public static currency(value: number):string{
        return new Intl.NumberFormat('en-US', {
            style:'currency',
            currency:'USD',
        }).format(value);
    }
}