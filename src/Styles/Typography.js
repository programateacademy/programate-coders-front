import { createGlobalStyle } from 'styled-components';
import GilroyExtraBold from '../assets/fonts/Gilroy-ExtraBold.ttf';
import GilroyLight from '../assets/fonts/Gilroy-Light.ttf';


const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy ExtraBold';
    src: url(${GilroyExtraBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy Light';
    src: url(${GilroyLight});
    font-style: normal;
  }

  html{
    font-family: 'Gilroy Light';
  }
  *{
    font-family: 'Gilroy Light';
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Gilroy ExtraBold';
  }
`;

export default Typography;