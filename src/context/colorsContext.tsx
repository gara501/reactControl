import { createContext, useContext } from 'react';

export enum ColorBg {
	bg = '#fff'
}

export type ColorBgContextType = {
	bg: string;
	setBg: (ColorBg: string) => void;
}

export const ColorContext = createContext<ColorBgContextType>({ bg: ColorBg.bg, setBg: bg => console.warn('Default Bg')});
export const useBg = () => useContext(ColorContext);

export default ColorContext;