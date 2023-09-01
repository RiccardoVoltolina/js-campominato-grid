/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento. */

/* esecuzione */


/* 
-utilizzo  append per stampare gli elementi in pagina
-creo una funzione che si attiva al click del bottone
*/


const containerElement = document.querySelector('.container')
const numeri = 100
let stampaNumeri = 0




document.querySelector('.generate').addEventListener('click' , function () {
    if (containerElement.className = 'none') {
        containerElement.className = 'container'
    }
    for (let i = 0; i < numeri; i++) {
        const quadratoElement = document.createElement('div');
        quadratoElement.className = 'square'
        quadratoElement.innerText = i + 1
        containerElement.append(quadratoElement)
        quadratoElement.addEventListener('click' , function() {
            console.log('Il numero selezionato è il : ' + quadratoElement.innerText);
            quadratoElement.className = 'blue'
            quadratoElement.addEventListener('click' , function() {
            if (quadratoElement) {
                quadratoElement.className = 'square'
            }
            })
            document.querySelector('.delete').addEventListener('click' , function(){
                if (containerElement) {
                    containerElement.className = 'none'
                }
            })
            

        })
    }
})



