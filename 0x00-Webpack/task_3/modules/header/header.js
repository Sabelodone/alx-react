import $ from 'jquery';

console.log('Init header');

const header = `
  <div>
    <img src="logo.png" alt="Holberton Logo">
    <h1>Holberton Dashboard</h1>
  </div>
`;

$('body').prepend(header);