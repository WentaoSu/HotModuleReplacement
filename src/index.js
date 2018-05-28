//import _ from 'lodash';
import { cube } from './math.js';
import './style.css';
//test is a alias that is defined in webpack.config.js, 
//the $ after the name syntax is for exact match. If 
//it's not a exact match, it is then treated as a common path.
import Icon from 'test';

import printMe from './print.js';

function component() {
    //var element = document.createElement('div');
    var element = document.createElement('pre');

    var btn = document.createElement('button');

    // Lodash, now imported by this script
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    element.classList.add('hello');

    // Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}