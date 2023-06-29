import 'styled-components';

declare module 'styled-components' {

    interface Colors {
        blue_100: string,
        blue_100: string,
        blue_90: string,
        blue_80: string,
        blue_70: string,
        blue_60: string,
        blue_50: string,
        blue_40: string,
        blue_30: string,
        blue_20: string,
        blue_10: string,
    
        dark_orange: string,
        orange: string,
    
        gray: string,
        light_gray: string,
        white: string,
        black: string,
    }


    export interface DefaultTheme {
        title: string,
        colors: Colors
    }
}