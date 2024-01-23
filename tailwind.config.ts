import type {Config} from 'tailwindcss'
import {nextui} from '@nextui-org/react'
import plugin from "tailwindcss/plugin";


const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './containers/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                backgroundDark: '#1A1A1A',
                componentDark: '#2A2A2A',
                borderDark: '#606060',
                subtext: '#A3A3A3',
                inactive: '#666666',
                themeBlue: '#0070EF',
                themeGreen: '#29C244',
                themeRed: '#EF4643',
                themeYellow: '#F7BB1F',
                themeError:'#E23A47',
                themeErrorDark:'#DF454C',
                themeSuccess:'#01AB49',
                themeSuccessDark:'#009B3B'
            },
            width: {
                desktop: '1280px',
            },
            minWidth: {
                desktop: '1280px',
            }
        },
    },
    darkMode: 'class',
    plugins: [
        nextui(),
        require('@tailwindcss/forms'),
        plugin(({ addComponents }) => {
            addComponents({
                ".customInput": {
                    flex:'1',
                    backgroundColor:'white',
                    placeholder:'#8DA4B1',
                    border:'1px solid #cdd8de',
                    borderRadius:'8px',
                    appearance:'none',
                    '&:focus':{
                        border:'none',
                        outline:'none'
                    }
                },
                ".dark .customInput":{
                    backgroundColor:'#3B3C3B',
                    placeholder:'#879EA8',
                    border:'1px solid #808587',
                    '&:focus':{
                        border:'none',
                        outline:'none'
                    }
                },
                ".userBoardSection":{
                    borderRadius:'8px',
                    boxShadow:'0 0px 8px 1px rgba(0,0,0,.18)'
                },
                ".dark .userBoardSection":{
                    backgroundColor:'#2A2A2A',
                    boxShadow:'0 0px 8px 2px rgba(0,0,0,.5)'
                }
            });
        }),
    ],
    mode: "jit",
}
export default config
