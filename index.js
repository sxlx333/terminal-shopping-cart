const firstShoppingList = [
    {
        id: 1,
        name: 'Pomidoras',
        amount: 1000000,
        unitPrice: 199,
    },
    {
        id: 3,
        name: 'Agurkas',
        amount: 2,
        unitPrice: 50,
    },
    {
        id: 7,
        name: 'Svogūnas',
        amount: 1,
        unitPrice: 45,
    },
];








function shoppingList (a) {
    if (Array.isArray(a) === false) {
        return 'Kintamasis turi būti masyvas';
    }
    if (a.length === 0) {
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';
    }
    return '10 is 10';  // PATOBULINTI FUNKCIJA SHOPPING LIST
};

/********************TESTINIMAS************************** */
const emptyList = [];
console.log(shoppingList(emptyList));
console.log('');
/********************TESTINIMAS************************** */

function productDetails (a, b) {
    if (Array.isArray(a) === false) {
        return 'Pirmoji reikšmė turi būti masyvas';
    }
    if (a.length === 0) {
        return 'Pirmoji reikšmė, masyvas turi turėti objektą';
    }
    // Check if the array contains only objects and that none of them are empty
    if (!a.every(
            item => typeof item === 'object' 
            && item !== null 
            && !Array.isArray(item) 
            && Object.keys(item).length > 0)
        ){
        return 'Pirmoji reikšmė - masyve turi būti tik objektai ir jie turi būti ne tušti';
    } else {
    return 'teisinga'; // patobutinti funkcija
    }
};

console.log('1.', productDetails('a', 1));
console.log('2.',productDetails(1, 1));
console.log('3.',productDetails(NaN, 1));
console.log('4.',productDetails(Infinity, 1));
console.log('5.',productDetails({}, 1));
console.log('6.',productDetails('srrtr srtr', 1));
console.log('7.',productDetails([], 1));
console.log('8.',productDetails([1, {}], 1));
console.log('9.',productDetails([Infinity, {}], 1));
console.log('10.',productDetails([{}], 1));
console.log('11.',productDetails([{name: 'Jonas'}], 1));
console.log('12.',productDetails(firstShoppingList, 1));




// console.log(productDetails(emptyList, 42069));

// /*
// Prekė, su ID: 42069 neegzistuoja.
// */







// console.log(shoppingList(firstShoppingList));
// /*
// Jūsų prekių krepšelyje yra 3 prekės:
// -----------------------------------------------------------
// Pavadinimas  | Kiekis      | Vieneto kaina | Viso mokėti
// -----------------------------------------------------------
// 1. Pomidoras | 1000000 vnt | 1.99 Eur      | 1990000.00 Eur
// 2. Agurkas   | 2 vnt       | 0.50 Eur      | 1.00 Eur
// 3. Svogūnas  | 1 vnt       | 0.45 Eur      | 0.45 Eur
// -----------------------------------------------------------
// */

// console.log(productDetails(firstShoppingList, 42069));
// /*
// Prekė, su ID: 42069 neegzistuoja.
// */

// console.log(productDetails(firstShoppingList, 1));
// /*
// ------------------------------
// Prekės informacija
// ------------------------------
// ID            | 1
// Pavadinimas   | Pomidoras
// Kiekis        | 1000000 vnt
// Vieneto kaina | 1.99 Eur
// Viso mokėti   | 1990000.00 Eur
// ------------------------------
// */

// console.log(productDetails(firstShoppingList, 3));
// /*
// ------------------------
// Prekės informacija
// ------------------------
// ID            | 3
// Pavadinimas   | Agurkas
// Kiekis        | 2 vnt
// Vieneto kaina | 0.50 Eur
// Viso mokėti   | 1.00 Eur
// ------------------------
// */

// console.log(productDetails(firstShoppingList, 7));
// /*
// ------------------------
// Prekės informacija
// ------------------------
// ID            | 7
// Pavadinimas   | Svogūnas
// Kiekis        | 1 vnt
// Vieneto kaina | 0.45 Eur
// Viso mokėti   | 0.45 Eur
// ------------------------
// */

// const singleProductShoppingList = [
//     {
//         id: 2,
//         name: 'Kivi',
//         amount: 23,
//         unitPrice: 14,
//     },
// ];

// console.log(shoppingList(singleProductShoppingList));
// /*
// Jūsų prekių krepšelyje yra 1 prekė:
// --------------------------------------------------
// Pavadinimas | Kiekis | Vieneto kaina | Viso mokėti
// --------------------------------------------------
// 1. Kivi     | 23 vnt | 0.14 Eur      | 3.22 Eur
// --------------------------------------------------
// */

// console.log(productDetails(singleProductShoppingList, 42069));
// /*
// Prekė, su ID: 42069 neegzistuoja.
// */

// console.log(productDetails(singleProductShoppingList, 2));
// /*
// ------------------------
// Prekės informacija
// ------------------------
// ID            | 2
// Pavadinimas   | Kivi
// Kiekis        | 23 vnt
// Vieneto kaina | 0.14 Eur
// Viso mokėti   | 3.22 Eur
// ------------------------
// */