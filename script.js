/*global console*/

/*eslint-disabled no-console */
const section = document.querySelector('section');

let season = 'summer';
let response;

// Add your code here
switch (season) {
    case 'summer':
        response = 'Summer season is hot and humid. Make sure to wear enough sunscreen.'
        break;
    case 'winter':
        response = 'Winter is very cold. Make sure to wear enough layers to keep warm.'
    default:
        response = 'I don\t know what season it is'
        break;
}
// Don't edit the code below here!


let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);