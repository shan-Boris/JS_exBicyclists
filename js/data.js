'use strict';

const RUS = new National('RUS', 'https://www.megaflag.ru/sites/default/files/images/shop/products/flag_rf_enl.jpg');
const SVK = new National('SVK', 'https://www.megaflag.ru/sites/default/files/images/directory_names/flag_slovakija_enl.jpg');
const ESP = new National('ESP', 'https://www.megaflag.ru/sites/default/files/images/shop/products/flag_ispanija_new.jpg');
const BEL = new National('BEL', 'https://www.megaflag.ru/sites/default/files/images/directory_names/flag_belgija_enl.jpg');
const AUS = new National('AUS', 'https://www.megaflag.ru/sites/default/files/images/directory_names/flag_avstraliya_enl.jpg');
const GBR = new National('GBR', 'https://www.megaflag.ru/sites/default/files/images/shop/products/flag_velikobritanija_new.jpg');
const FRA = new National('FRA', 'https://www.megaflag.ru/sites/default/files/images/shop/products/flag_frantsija_new.jpg');
const ITA = new National('ITA', 'https://www.megaflag.ru/sites/default/files/images/directory_names/flag_italija_enl.jpg');
const rusRider1 = new Rider('Ильнур', 'Закарин', RUS, 7.2, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Ilnur_Zakarin.jpg/640px-Ilnur_Zakarin.jpg');
const rusRider2 = new Rider('Татьяна', 'Антошина', RUS, 7.0, 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Tatiana_Antoshina%2C_London_2012_Time_Trial_-_Aug_2012.jpg/245px-Tatiana_Antoshina%2C_London_2012_Time_Trial_-_Aug_2012.jpg');
const rusRider3 = new Rider('Михаил', 'Игнатьев', RUS, 8.3, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mikhail_Ignatyev_IMG_1233_%28cropped%29.JPG/250px-Mikhail_Ignatyev_IMG_1233_%28cropped%29.JPG');
const rusRider4 = new Rider('Дмитрий', 'Конышев', RUS, 7.3, 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Dmitri_Konyshev.jpg/250px-Dmitri_Konyshev.jpg');
const svkRider1 = new Rider('Петер', 'Саган', SVK, 9.0, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Peter_Sagan_TDF2022.jpg/640px-Peter_Sagan_TDF2022.jpg');
const svkRider2 = new Rider('Юрай', 'Саган', SVK, 7.0, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Juraj_Sagan_TDB_2013_%28Cropping%29.jpg/233px-Juraj_Sagan_TDB_2013_%28Cropping%29.jpg');
const svkRider3 = new Rider('Мартин', 'Велиц', SVK, 7.5, 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Koolskamp_%28Ardooie%29_-_Kampioenschap_van_Vlaanderen%2C_18_september_2015_%28B73%29.JPG/242px-Koolskamp_%28Ardooie%29_-_Kampioenschap_van_Vlaanderen%2C_18_september_2015_%28B73%29.JPG');
const svkRider4 = new Rider('Эрик', 'Башка', SVK, 7.2, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Oudenaarde_-_Ronde_van_Vlaanderen_Beloften%2C_11_april_2015_%28B106%29.JPG/230px-Oudenaarde_-_Ronde_van_Vlaanderen_Beloften%2C_11_april_2015_%28B106%29.JPG');
const espRider1 = new Rider('Хоаким', 'Родригес', ESP, 8.2, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Joaquim_Rodr%C3%ADguez_Giro_2011.jpg/466px-Joaquim_Rodr%C3%ADguez_Giro_2011.jpg');
const espRider2 = new Rider('Альберто', 'Контадор', ESP, 7.2, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2015_Tour_de_France_team_presentation%2C_Alberto_Contador.jpg/466px-2015_Tour_de_France_team_presentation%2C_Alberto_Contador.jpg');
const espRider3 = new Rider('Луис Леон', 'Санчес', ESP, 7.6, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Luis_Leon_Sanchez_CD.jpg/466px-Luis_Leon_Sanchez_CD.jpg');
const espRider4 = new Rider('Самуэль', 'Санчес', ESP, 7.4, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Antwerpen_-_Tour_de_France%2C_%C3%A9tape_3%2C_6_juillet_2015%2C_d%C3%A9part_%28232%29.JPG/640px-Antwerpen_-_Tour_de_France%2C_%C3%A9tape_3%2C_6_juillet_2015%2C_d%C3%A9part_%28232%29.JPG');
const belRider1 = new Rider('Филипп', 'Жильбер', BEL, 8.4, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Overijse_-_Brabantse_Pijl%2C_15_april_2015%2C_aankomst_%28B08%29.JPG/500px-Overijse_-_Brabantse_Pijl%2C_15_april_2015%2C_aankomst_%28B08%29.JPG');
const belRider2 = new Rider('Эдди', 'Меркс', BEL, 8.5, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Eddy_Merckx_Molteni_1973.jpg/221px-Eddy_Merckx_Molteni_1973.jpg');
const belRider3 = new Rider('Ремко', 'Эвенепул', BEL, 7.1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/20180925_UCI_Road_World_Championships_Innsbruck_Men_Juniors_ITT_Remco_Evenepoel_%28BEL%29_850_8528.jpg/250px-20180925_UCI_Road_World_Championships_Innsbruck_Men_Juniors_ITT_Remco_Evenepoel_%28BEL%29_850_8528.jpg');
const belRider4 = new Rider('Ваут', 'Ван Арт', BEL, 7.4, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/WVA_Paris-Roubaix_2022.jpg/250px-WVA_Paris-Roubaix_2022.jpg');
const ausRider1 = new Rider('Кэдел', 'Эванс', AUS, 7.4, 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Cadel_Evans_-_Criterium_du_Dauphin%C3%A9_2012_-_1ere_%C3%A9tape_%28cropped%29.jpg/640px-Cadel_Evans_-_Criterium_du_Dauphin%C3%A9_2012_-_1ere_%C3%A9tape_%28cropped%29.jpg');
const ausRider2 = new Rider('Джей', 'Хиндли', AUS, 7.9, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Oudenaarde_-_Ronde_van_Vlaanderen_Beloften%2C_9_april_2016_%28B100%29.JPG/250px-Oudenaarde_-_Ronde_van_Vlaanderen_Beloften%2C_9_april_2016_%28B100%29.JPG');
const ausRider3 = new Rider('Саймон', 'Кларк', AUS, 8.9, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Simon_Clarke.jpg/250px-Simon_Clarke.jpg');
const ausRider4 = new Rider('Пейдж', 'Греко', AUS, 7.1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Greco_Paige_01_CC.jpg/250px-Greco_Paige_01_CC.jpg');
const gbrRider1 = new Rider('Крис', 'Фрум', GBR, 7.7, 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sportsfile_%28Web_Summit%29_%2822758666251%29_%28cropped%29.jpg/500px-Sportsfile_%28Web_Summit%29_%2822758666251%29_%28cropped%29.jpg');
const gbrRider2 = new Rider('Грэм', 'Обри', GBR, 7.4, 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Graeme_obree.jpg');
const gbrRider3 = new Rider('Адам', 'Йейтс', GBR, 8.4, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Adam_Yates_2015TOA.jpg/244px-Adam_Yates_2015TOA.jpg');
const gbrRider4 = new Rider('Том', 'Симпсон', GBR, 8.9, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Tom_Simpson_c1966.jpg/250px-Tom_Simpson_c1966.jpg');
const fraRider1 = new Rider('Ромен', 'Барде', FRA, 8.4, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Tour_de_l%27Ain_2014_-_Romain_Bardet.jpg/640px-Tour_de_l%27Ain_2014_-_Romain_Bardet.jpg');
const fraRider2 = new Rider('Кристоф', 'Лапорт', FRA, 8.4, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Christophe_Laporte_Paris-Roubaix_2022.jpg/233px-Christophe_Laporte_Paris-Roubaix_2022.jpg');
const fraRider3 = new Rider('Николя', 'Порталь', FRA, 8.0, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Nicolas_Portal_Giro_2011.jpg/233px-Nicolas_Portal_Giro_2011.jpg');
const fraRider4 = new Rider('Ромен', 'Сегль', FRA, 9.0, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/2020_Waalse_Pijl_153.jpg/250px-2020_Waalse_Pijl_153.jpg');
const itaRider1 = new Rider('Винченцо', 'Нибали', ITA, 7.0, 'https://upload.wikimedia.org/wikipedia/commons/5/50/Vincenzo_Nibali_%28cropped%29.jpg');
const itaRider2 = new Rider('Марко', 'Пантани', ITA, 7.8, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Marco_Pantani%2C_1997.jpg/250px-Marco_Pantani%2C_1997.jpg');
const itaRider3 = new Rider('Джанни', 'Да Рос', ITA, 7.8, 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Gianni_da_Ros_2.JPG/250px-Gianni_da_Ros_2.JPG');
const itaRider4 = new Rider('Даниеле', 'Понтони', ITA, 8.3, 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/1992_World_Cyclocross_Championships_%2815171882700%29.jpg/250px-1992_World_Cyclocross_Championships_%2815171882700%29.jpg');
