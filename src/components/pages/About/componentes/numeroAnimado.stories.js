// NumeroAnimado.stories.js
import NumeroAnimado from './numeroAnimado';


export default {
  title: 'components/pages/About/componentes/numeroAnimado',
  component: NumeroAnimado,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    numero: {
      control: 'number', // Control de input para el prop 'numero'
    },
  },
};

/**
 * Efecto de contador en ascenso
 */

export const primary ={
  args : {
    numero: 100, // Valor por defecto para el prop 'numero'
  }
};

