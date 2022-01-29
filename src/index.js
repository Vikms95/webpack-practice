import _ from 'lodash';
import myName from './myName';
import './style.css';
import image from './site-logo.1fcab817090e78435061.svg'

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.textContent = myName('Cody');
    element.classList.add('hello');

    // Add image to our existing div
    const myIcon = new Image();
    myIcon.src = image;
    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());