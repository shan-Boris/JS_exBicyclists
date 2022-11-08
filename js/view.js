'use strict';

class CompetitionView {
	#inputPlace = document.querySelector('input');
	#buttonRing1Go = document.querySelector('button');
	#message = document.querySelector('.message');
	#rightCollum = document.querySelector('.rightCollum');
	#form = document.querySelector('form');
	#leftTable = document.querySelector('.leftTable');
	#compController = new CompetitionController();


	#showTableRiders(headline, riders, columResult = false) {

		let table;
		table = `<div class="container__text headline">
							${headline}
							</div>
							<table class="table">
				<thead>
					<tr>
										<th>№</th>
										<th>Фото</th>
										<th>Номер</th>
										<th>Фамилия Имя</th>`
		if (columResult) table += '<th>' + columResult[0] + '</th>';
					table += `<th>Рейтинг</th>
					<th>Страна</th>
					</tr>
				</thead>
				<tbody>`;

		for (let i = 0; i < riders.length; i++) {
			table += `<tr>
				<td>${i + 1}</td>
				<td><div class="table__img"><img src="${riders[i].photo}"></img></div></td>
				<td>${riders[i].number}</td>
				<td>${riders[i].surname} ${riders[i].name}</td>`
			if (columResult) table += '<td>' + columResult[1][i] + '</td>';
			table += `<td>${riders[i].rating}</td>
				<td><div class="table__img_flag"><img src="${riders[i].flagImg}" alt="${riders[i].country}"></img></div></td>
				</tr>`;
		}
		table += `</tbody> </table>`;
		return table;
	};

	#showTableCountry(headline, topNationals) {
		let table;
		table = `<div class="container__text headline">
							${headline}
							</div>
							<table class="table">
				<thead>
					<tr>
										<th>Место</th>
										<th>Страна</th>
										<th>Сумма мест</th>
					</tr>
				</thead>
				<tbody>`;

		for (let i = 0; i < topNationals.length; i++) {
			table += `<tr>
				<td>${i + 1}</td>
				<td><div class="table__img_flag"><img src="${topNationals[i][0].flagImg}"></img></div> ${topNationals[i][0].country}</td>
				<td>${topNationals[i][1]}</td>
				</tr>`;
			}
			table += `</tbody> </table>`;
			return table;
		};

	#showResults(nameTableCountry, nameTableRiders, ring) {

		this.#leftTable.classList.remove('show');
		setTimeout(() => {
			this.#leftTable.classList.add('show');
			this.#leftTable.innerHTML = this.#showTableCountry(nameTableCountry, ring.topCountryRing);
			this.#rightCollum.innerHTML = this.#showTableRiders(nameTableRiders, ring.topRidersRing.map(v => v[0]), ['Сумма мест', ring.topRidersRing.map(v => v[1])]);
		}, 200);
	}; 	
		
	#showInputEror(input) {
		input.style.outline = '2px solid red';
		this.#message.textContent = 'Введите верное число';
	}

	init() {
		this.#rightCollum.innerHTML = this.#showTableRiders('Все участники', Rider.all);
		this.#inputPlace.addEventListener('input', e => {
			if(!this.#compController.validateInput(this.#inputPlace.value)) {
				this.#showInputEror(this.#inputPlace)
			} else {
				this.#inputPlace.style.outline = '';
				this.#message.textContent = '';
			}
		});
		
		this.#buttonRing1Go.addEventListener('click', (e) => {
			e.preventDefault(); 
		
			if (!this.#compController.validateInput(this.#inputPlace.value)) {
				this.#showInputEror(this.#inputPlace)
			}
		
			if (this.#compController.dataOk) {
		
				const stages = +this.#inputPlace.value;
				const ring1 = this.#compController.goRing1(stages);
				this.#showResults('Результаты 1 круга', 'Топ гонщиков 1 круга', ring1);
		
		
				this.#form.innerHTML = `<button id='ring2start'>Старт 2-го круга</button>`;
		
		
				const buttonRing2Go = document.querySelector('#ring2start');
				buttonRing2Go.addEventListener('click', (e) => {
					e.preventDefault();
		
					const ring2 = this.#compController.goRing2();
					this.#showResults('Результаты соревнований', 'Личный зачет', ring2);
					this.#form.innerHTML = `
						<div class="finish"> 
							<img  src="${ring2.topCountryRing[0][0].flagImg}" alt="">
							<img src="https://pngimg.com/uploads/golden_cup/golden_cup_PNG14546.png" alt="">
						</div>
						<button>Провести ещё соревнование</button>`;
					
					});
				
			};
		});
	}
}
