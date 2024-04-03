import $ from 'jquery';
import _ from 'lodash';

const button = $('<button>Click me</button>');
let counter = 0;
button.on('click', () => {
  counter++;
  alert(`Counter: ${counter}`);
});

$('body').append(button);