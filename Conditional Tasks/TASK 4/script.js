let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here
if (machineActive === true) {
    machineResult = 'The machine is switched on';

    pwd === 'cheese'
        ? pwdResult = 'You have logged in successfully'
        : pwdResult = 'Login attempt unsuccessful'
    
} else {
    machineResult = 'Machine is turned off. To view results, switch machine on.'
}
// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);


// const greeting = isBirthday
//     ? 'Happy birthday Mrs. Smith — we hope you have a great day!'
//     : 'Good morning Mrs. Smith.';


// select.value === 'black'
//     ? update('black', 'white')
//     : update('white', 'black')