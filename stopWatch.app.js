function majDixiemes(dixiemes) {
    if (dixiemes < 100) {
        dixiemes ++;
        if (dixiemes < 10) {
            document.querySelector('.dixiemes').textContent = '0' + String(dixiemes);
        } else {
            document.querySelector('.dixiemes').textContent = dixiemes;
        }
        
    }
}

function majSecondes(dixiemes, secondes) {
    if (dixiemes == 100) {
        document.querySelector('.dixiemes').textContent = '00';
        if (secondes < 60){
            secondes++;
            if (secondes < 10) {
                document.querySelector('.secondes').textContent = '0' + String(secondes);
            } else {
                document.querySelector('.secondes').textContent = secondes;
            }
        }
    }
}

function majMinutes(secondes, minutes) {
    if (secondes == 59) {
        document.querySelector('.secondes').textContent = '00';
        minutes++
        if (minutes < 10) {
            document.querySelector('.minutes').textContent = '0' + String(minutes);
        } else {
            document.querySelector('.minutes').textContent = minutes;
        }
    }
}

function majHeures(minutes, heures) {
    if (minutes == 59) { 
        document.querySelector('.minutes').textContent = '00';
        heures++;
        if (heures < 10) {
            document.querySelector('.heures').textContent = '0' + String(heures);
        } else {
            document.querySelector('.heures').textContent = heures;
        }
    }
}

function addLap() {
    
    let laps = document.querySelector('#laps');
    let heuresTour = document.querySelector('.heures').textContent;
    let minutesTour = document.querySelector('.minutes').textContent;
    let secondesTour = document.querySelector('.secondes').textContent;
    let dixiemesTour = document.querySelector('.dixiemes').textContent;
    console.log(laps.childElementCount);

    let para = document.createElement('p');
    para.classList.add('tour');
    para.textContent = `Lap : ${heuresTour} : ${minutesTour} : ${secondesTour} : ${dixiemesTour}`;
    console.log(para);
    laps.appendChild(para);
}

function clearAll() {

    document.querySelector('.heures').textContent = '00';
    document.querySelector('.minutes').textContent = '00';
    document.querySelector('.secondes').textContent = '00';
    document.querySelector('.dixiemes').textContent = '00';

    let lapChild = document.querySelector('#laps');
    
    let child = lapChild.lastElementChild;

    while (child) {
        lapChild.removeChild(child);
        child = lapChild.lastElementChild;
    }
}
document.querySelector("#start").addEventListener('click', function() {

    let stopwatch = setInterval(function () {
        
        let heures = Number(document.querySelector('.heures').textContent);
        let minutes = Number(document.querySelector('.minutes').textContent);
        let secondes = Number(document.querySelector('.secondes').textContent);
        let dixiemes = Number(document.querySelector('.dixiemes').textContent);

        majDixiemes(dixiemes);

        majSecondes(dixiemes, secondes);        

        majMinutes(secondes, minutes);
        
        majHeures(minutes, heures);

    }, 10);

    document.querySelector('#lap').addEventListener('click', function() {
        
        addLap();
    })

    document.querySelector('#stop').addEventListener('click', function() { clearInterval(stopwatch); })

    document.querySelector('#clear').addEventListener('click', function() {
        clearAll();
        clearInterval(stopwatch);
        location.reload();
    })
})

document.querySelector('#switch').addEventListener('click', function(){
    
    let titre = document.querySelector('h1');
    let divSwitch = document.querySelector('#switch');

    switch (titre.textContent) {
        case 'Stopwatch':
            titre.textContent = 'Timer';
            divSwitch.textContent = 'Switch to stopwatch';
        break;
        case 'Timer':
            titre.textContent = 'Stopwatch';
            divSwitch.textContent = 'Switch to Timer';
        break;
    }
        
})

