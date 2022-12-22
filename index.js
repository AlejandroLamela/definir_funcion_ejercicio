const pasarLaNavidad = function (character, ubication, secondCharacter, holidaysDestination, endHistory, myName, boolean, typeData){
        console.log(`Eran las 3AM cuando el ${character} entró por la ventana`);
        console.log("EStaba " + ubication[0] + "cuando dije" );
        ubication[1]();
        console.log(` ${ubication[2]} la Sierra, nadie me escuchó, ni si quiera ${secondCharacter}`);
        console.log(`Me levanté por la mañana y todo era un sueño, pero al lado de mi, habia una carta que ponía ${myName}`);
        console.log(`La carta ponía que el día ${holidaysDestination.dia} habrá una ${holidaysDestination.noche} en ${holidaysDestination.destinoVacaciones[4]} para ${holidaysDestination.medioDia}`);
        console.log(`Si esta carta no es una broma, no podré pasar `);
        holidaysDestination.function();
        console.log(`con mi familia en el ${holidaysDestination.destinoVacaciones[2]} donde ${ubication[3]} de Reyes Magos`);
        console.log(`${endHistory()}, espero que penséis que todo esto es ${boolean} y no haberme equivocado con ningún ${typeData}`);

        

}





// Ejercicio. Define la función.
pasarLaNavidad('grinch', [
    'Solo en casa',
    function say() {
        return console.log('AaRrrrGgggggg ¡Llegan los ladrones!')
    },
    'Como vivo en', // ¿Santa o Reyes magos?
    'Recibimos los regalos el día'
], 'Michael Knight', {
    medioDia: 'Comer con los amigos',
    dia: 24,
    noche: 'Cena familiar',
    destinoVacaciones: [
        'Honolulu',
        'Polo Norte',
        'Caribe',
        'Torrevieja',
        'Badajoz',
    ],
    function() {
        return console.log('Mis vacaciones');
    },
}, function() {
    return 'Fin de la Historia';
}, 'Alejandro', true, undefined);
