console.log('ok');

/**
 * Scrivi un programma che stampi i numeri da 1 a 100, ma:
    per i multipli di 3 stampi “Fizz” al posto del numero
    per i multipli di 5 stampi Buzz. 
    per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
 */

// Stampare i numeri da 1 a 100

var range100 = 101

for (var i = 1; i < range100; i++) {
    
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('POROPOO');
    } else if (i % 3 == 0) {
        console.log('PORO');
        
    } else if (i % 5 == 0) {
        console.log('POOO');
    } else {
        console.log('PO');    
    }
}