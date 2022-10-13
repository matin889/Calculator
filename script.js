//Skapa variabel för att lagra data för miniräknarevisning från indexfil
let display = document.getElementById('display');
//Skapa variabel för att lagra data för räknarknappar från indexfil
let buttons = Array.from(document.getElementsByClassName('buttons'));
//Skapa funktion för att räknaren fungerar korrekt
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            //När AC-knappen kommer att klickas kommer den att radera all data från displayen
            case 'AC':
                display.innerText = '';
                break;
            //när = knappen kommer att klickas så kommer den att visa det matematiska resultatet
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                //Om en oväntad ekvation ställs in visar den ett felmeddelande
                    display.innerText = 'Error';
                }
                break;
                //Den visar knappvärdena när du klickar på knappen
            default:
                display.innerText += e.target.innerText;
        }
    })
})
