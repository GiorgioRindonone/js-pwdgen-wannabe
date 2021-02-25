var nome = prompt("Scrivi il tuo nome");
var cognome = prompt("Scrivi il tuo cognome");
var eta = prompt("Ora scrivi la tua età...");
var gatto = prompt("...Il nome del tuo gatto? (se non ce l'hai non scrivere)");
var gattobis = prompt("Se non hai mai avuto un gatto, come l'avresti chiamato????(se hai risposto prima non scrivere)");
var cibo = prompt("...una cosa che hai mangiato ieri?");


var password = cognome + cibo + nome + eta;
var gattofinal = gatto + gattobis;
var aggiunta = "27";

document.getElementById('password-super').innerHTML = "Puoi cambiare la tua password bancaria con " + password + aggiunta;
document.getElementById('gatto-super').innerHTML = "Il nome di " + gattofinal + " non mi serviva, era solo curiosità!";
