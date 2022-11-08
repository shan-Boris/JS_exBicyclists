'use strict';

class National {
    static all = [];

    constructor(country, flagImg) {
        this.country = country;
        this.flagImg = flagImg;
        this.riders = [];
        National.all.push(this);
    }
}

class Rider {
    static all = [];

    constructor(name, surname, national, rating, photo) {
        this.name = name
        this.surname = surname
        this.number = Rider.all.length + 1
        this.rating = rating
        this.photo = photo
        this.country = national.country
        this.flagImg = national.flagImg

        Rider.all.push(this);
        national.riders.push(this);
    }

    ride = () => Math.round((Math.random() * 900 + 200 * (10 - this.rating)) * 1000) / 1000;
}

class Ring {

    constructor(stages, riders, define, sortCountryIfEqual) {
        this.stages = stages
        this.riders = riders
        this.define = define // =best, если определяем место страны на этапе по-лучшему гонщику
        this.sortCountryIfEqual = sortCountryIfEqual // =best, если определяем место страны на круге по-лучшему гонщику в случае равенства мест
        this.resultsCountryRing = {}
        this.resultsRidersRing = {}
        this.topCountryRing = []
        this.topRidersRing = []
    }

    #getPositionCountry(topRiders) {
        const nationalRes = [];

        topRiders.forEach(rider => {
            if (this.define == 'best') { // если определяем место страны по лучшему гонщику 
                if (!nationalRes.includes(rider.country)) {
                    nationalRes.push(rider.country)
                }
            } else { // если определяем место страны по худшему гонщику 
                if (!nationalRes.includes(rider.country)) {
                    nationalRes.push(rider.country)
                } else {
                    nationalRes.splice(nationalRes.indexOf(rider.country), 1)
                    nationalRes.push(rider.country)
                }
            }
        })
        return nationalRes; // [countryName, ...]
    }

    #goStage() {
        let ridersResults = [];
        this.riders.forEach(rider => {
            ridersResults.push([rider, rider.ride()])
        })
        ridersResults.sort((a, b) => a[1] - b[1]);
        return ridersResults.map(v => v[0]).flat(); // [rider(obj), ...]
    }

    ringGo() {

        
        for (let i = 0; i < this.stages; i++) {

            const topRidersStage = this.#goStage();
                 

            topRidersStage.forEach((rider, position) => {
                if (i == 0) this.resultsRidersRing[rider.number] = position + 1
                else this.resultsRidersRing[rider.number] += position + 1; // складываем места гонщика
            })

            const topCountryStage = this.#getPositionCountry(topRidersStage);
            topCountryStage.forEach((country, position) => {
                if (i == 0 ) this.resultsCountryRing[country] = position + 1 
                else this.resultsCountryRing[country] += position + 1; // складываем места страны

            })

        }   
    }

    sortResults() {
        this.topRidersRing = Object.entries(this.resultsRidersRing)
            .map(v => [Rider.all[v[0] - 1], v[1]])
            .sort((a, b) => {
                if (a[1] != b[1]) return a[1] - b[1]
                else return b[0].rating - a[0].rating // если у гонщиков сумма мест равна, то сортируем по рейтингу
            }); // [[rider(obj), sumPositionRing], ...]

        this.topCountryRing = Object.entries(this.resultsCountryRing) 
            .map(country_result => {
                for (let national of National.all) {
                    if (national.country == country_result[0]) return [national, country_result[1]]
                }
            });

        this.topCountryRing.sort((a, b) => {
            if (a[1] != b[1]) return a[1] - b[1]
            else if (this.sortCountryIfEqual == 'best') { //если у стран одинаковые места, то сортируем по лучшему гонщику
                for (let riderAndPosition of this.topRidersRing) {
                    if (riderAndPosition[0].country == a[0].country) return -1
                    else if (riderAndPosition[0].country == b[0].country) return 1;
                }
            } else { //сортируем по средне арифметическому значению рейтинга всех гонщиков страны
                const aMediumRate = a[0].riders.map(rider => rider.rating)
                    .reduce((res, rating) => res + rating / 4, 0);
                const bMediumRate = b[0].riders.map(rider => rider.rating)
                    .reduce((res, rating) => res + rating / 4, 0);
                return bMediumRate - aMediumRate;
            }
        }); // [[national(obj), sumPositionRing], ...]
    }
}

