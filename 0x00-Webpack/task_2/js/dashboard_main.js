import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';

// Encapsulate the code inside an IIFE
(function () {
    $(document).ready(function () {
        $('body').append(`<p>Holberton Dashboard</p>`);
        $('body').append(`<p>Dashboard data for the students</p>`);
        $('body').append(`<button>Click here to get started</button>`);
        $('body').append(`<p id="count"></p>`);
        $('body').append(`<p>Copyright - Holberton School</p>`);

        $('button').on('click', _.debounce(updateCounter, 500));

        let count = 0;
        function updateCounter() {
            count++;
            $('#count').text(`${count} clicks on the button`);
        }
    });
})();
