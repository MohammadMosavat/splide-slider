
import './src/slider/index.js'
import './node_modules/@splidejs/splide/dist/css/splide.min.css'
import './node_modules/@splidejs/splide/dist/js/splide.min.js'
import slider from './src/slider/index.js'
import Splide from '@splidejs/splide';


  const app = document.getElementById('app')

  app.append(slider())
  new Splide( '.splide' ).mount();

var splide = new Splide( '.splide', {
  type   : 'loop',
  padding: '2rem',
} );

splide.mount();

  
export default app


