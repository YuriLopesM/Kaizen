import 'styled-components';

declare module 'styled-components' {

    interface Colors {
        dark_blue: string,
        blue_600: string,
        blue_400: string,
        light_blue: string,
    
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