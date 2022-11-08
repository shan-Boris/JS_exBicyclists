'use strict';

class CompetitionController {
    dataOk = true

    validateInput(value) {
        this.dataOk = value?.match(/^[0-9]*$/) && +value > 0;
        return this.dataOk;
    }

    #admittedToRing2 = []
  
    goRing1(stages) {
        const ring1 = new Ring(stages, Rider.all, 'worst', 'best');
        ring1.ringGo(); 
        ring1.sortResults();

        for (let i = 0; i < 4; i++) { // во второй круг проходит 4 страны имеющие лучший результат
			this.#admittedToRing2.push(ring1.topCountryRing[i][0])
		};
		this.#admittedToRing2 = this.#admittedToRing2.map(national => national.riders).flat();
        return ring1;
    }
    
    goRing2() {
        const ring2 = new Ring(2, this.#admittedToRing2, 'best', 'mediumRate');
        ring2.ringGo(); 
        ring2.sortResults();
        return ring2;
    }
}


