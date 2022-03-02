import './mylabel.css';

export interface MyLabelProps {
  /**
   * Texto del label
   */
  label: string;
  /**
   * Tamaño del texto del label
   */
  size: 'normal'|'h1'|'h2'|'h3';
  /**
   * Color del texto
   */
  color?: 'primary'|'secondary'|'tertiary'

  /**
   * Colocar Texto en mayúsculas
   */
  allCaps?: boolean

  /**
   * Color Personalizado del texto
   */
  fontColor?: string
}

export const MyLabel = ( {
    label = 'Sin label',
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor

}: MyLabelProps ) => {

  return (
    <span
      className={ `label ${ size }  text-${color} ${allCaps && 'text-upper'} `}
      style={{color:fontColor}}
    >
        { label }
    </span>
  )
}
