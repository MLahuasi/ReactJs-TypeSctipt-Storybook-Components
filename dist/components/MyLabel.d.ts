/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Texto del label
     */
    label: string;
    /**
     * Tamaño del texto del label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Color del texto
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Colocar Texto en mayúsculas
     */
    allCaps?: boolean;
    /**
     * Color Personalizado del texto
     */
    fontColor?: string;
    /**
     * Color Personalizado del fondo del texto
     */
    backGroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backGroundColor }: MyLabelProps) => JSX.Element;
