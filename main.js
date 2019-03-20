/* Show me how to calculate the average price of all items.
 */

var totalPrice = items.reduce(function(a, b) {
    return a + b.price;
}, 0);

var avgPrice = totalPrice / items.length;

document.querySelector('#answer1').innerHTML = `The average price is $${avgPrice.toFixed(2)}`;

/* Show me how to get an array of items that cost between $14.00 and $18.00 USD
 */

var finalArrayQ2 = [];

finalArrayQ2 = items.filter(function(item) {
    if (Number(item.price) > 14.00 && Number(item.price) < 18.00) {
        return true;
    }
}).map(function(item) {
    return item.title;
}).join('\n\n');

document.querySelector('#answer2').innerHTML = finalArrayQ2;

/* Which item has a "GBP" currency code? Display it's name and price.
 */

var finalArrayQ3 = [];

finalArrayQ3 = items.filter(function(item) {
    if (item.currency_code === 'GBP') {
        return true;
    }
});

document.querySelector('#answer3').innerHTML = `${finalArrayQ3[0].title} costs \u00A3${finalArrayQ3[0].price}`;

/* Display a list of all items who are made of wood.
 */

var finalArrayQ4 = [];

finalArrayQ4 = items.filter(function(item) {
    return item.materials.includes('wood');
}).map(function(item) {
    return item.title;
}).join(' is made of wood\n\n');

document.querySelector('#answer4').innerHTML = finalArrayQ4;


/* Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
 */

var finalStringQ5 = [];

finalStringQ5 = items.filter(function(item) {
    return item.materials.length >= 8;
}).map(function(a) {
    return `${a.title} has ${a.materials.length} materials:\n\n${a.materials.join('\n')}`;
}).join('\n\n');

document.querySelector('#answer5').innerHTML = finalStringQ5;

/* How many items were made by their sellers?
 */

var numItemsMadeBySeller = 0;

items.forEach(function(item) {
    if (item.who_made === 'i_did') {
        numItemsMadeBySeller++;
    }
});

document.querySelector('#answer6').innerHTML = `${numItemsMadeBySeller} were made by their sellers`;