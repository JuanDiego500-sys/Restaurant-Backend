const city = require('../../Models/city');

function createCities() {
    city.bulkCreate(
        [
            {
                "cityId": 5001,
                "cityName": "Medellín",
                "departmentId": 5
            },
            {
                "cityId": 5002,
                "cityName": "Abejorral",
                "departmentId": 5
            },
            {
                "cityId": 5004,
                "cityName": "Abriaquí",
                "departmentId": 5
            },
            {
                "cityId": 5021,
                "cityName": "Alejandría",
                "departmentId": 5
            },
            {
                "cityId": 503,
                "cityName": "Amagá",
                "departmentId": 5
            },
            {
                "cityId": 5031,
                "cityName": "Amalfi",
                "departmentId": 5
            },
            {
                "cityId": 5034,
                "cityName": "Andes",
                "departmentId": 5
            },
            {
                "cityId": 5036,
                "cityName": "Angelópolis",
                "departmentId": 5
            },
            {
                "cityId": 5038,
                "cityName": "Angostura",
                "departmentId": 5
            },
            {
                "cityId": 504,
                "cityName": "Anorí",
                "departmentId": 5
            },
            {
                "cityId": 15832,
                "cityName": "Tununguá",
                "departmentId": 15
            },
            {
                "cityId": 5044,
                "cityName": "Anza",
                "departmentId": 5
            },
            {
                "cityId": 5045,
                "cityName": "Apartadó",
                "departmentId": 5
            },
            {
                "cityId": 5051,
                "cityName": "Arboletes",
                "departmentId": 5
            },
            {
                "cityId": 5055,
                "cityName": "Argelia",
                "departmentId": 5
            },
            {
                "cityId": 5059,
                "cityName": "Armenia",
                "departmentId": 5
            },
            {
                "cityId": 5079,
                "cityName": "Barbosa",
                "departmentId": 5
            },
            {
                "cityId": 5088,
                "cityName": "Bello",
                "departmentId": 5
            },
            {
                "cityId": 5091,
                "cityName": "Betania",
                "departmentId": 5
            },
            {
                "cityId": 5093,
                "cityName": "Betulia",
                "departmentId": 5
            },
            {
                "cityId": 5101,
                "cityName": "Ciudad Bolívar",
                "departmentId": 5
            },
            {
                "cityId": 5107,
                "cityName": "Briceño",
                "departmentId": 5
            },
            {
                "cityId": 5113,
                "cityName": "Buriticá",
                "departmentId": 5
            },
            {
                "cityId": 512,
                "cityName": "Cáceres",
                "departmentId": 5
            },
            {
                "cityId": 5125,
                "cityName": "Caicedo",
                "departmentId": 5
            },
            {
                "cityId": 5129,
                "cityName": "Caldas",
                "departmentId": 5
            },
            {
                "cityId": 5134,
                "cityName": "Campamento",
                "departmentId": 5
            },
            {
                "cityId": 5138,
                "cityName": "Cañasgordas",
                "departmentId": 5
            },
            {
                "cityId": 5142,
                "cityName": "Caracolí",
                "departmentId": 5
            },
            {
                "cityId": 5145,
                "cityName": "Caramanta",
                "departmentId": 5
            },
            {
                "cityId": 5147,
                "cityName": "Carepa",
                "departmentId": 5
            },
            {
                "cityId": 15476,
                "cityName": "Motavita",
                "departmentId": 15
            },
            {
                "cityId": 515,
                "cityName": "Carolina",
                "departmentId": 5
            },
            {
                "cityId": 5154,
                "cityName": "Caucasia",
                "departmentId": 5
            },
            {
                "cityId": 5172,
                "cityName": "Chigorodó",
                "departmentId": 5
            },
            {
                "cityId": 519,
                "cityName": "Cisneros",
                "departmentId": 5
            },
            {
                "cityId": 5197,
                "cityName": "Cocorná",
                "departmentId": 5
            },
            {
                "cityId": 5206,
                "cityName": "Concepción",
                "departmentId": 5
            },
            {
                "cityId": 5209,
                "cityName": "Concordia",
                "departmentId": 5
            },
            {
                "cityId": 5212,
                "cityName": "Copacabana",
                "departmentId": 5
            },
            {
                "cityId": 5234,
                "cityName": "Dabeiba",
                "departmentId": 5
            },
            {
                "cityId": 5237,
                "cityName": "Don Matías",
                "departmentId": 5
            },
            {
                "cityId": 524,
                "cityName": "Ebéjico",
                "departmentId": 5
            },
            {
                "cityId": 525,
                "cityName": "El Bagre",
                "departmentId": 5
            },
            {
                "cityId": 5264,
                "cityName": "Entrerrios",
                "departmentId": 5
            },
            {
                "cityId": 5266,
                "cityName": "Envigado",
                "departmentId": 5
            },
            {
                "cityId": 5282,
                "cityName": "Fredonia",
                "departmentId": 5
            },
            {
                "cityId": 23675,
                "cityName": "San Bernardo del Viento",
                "departmentId": 23
            },
            {
                "cityId": 5306,
                "cityName": "Giraldo",
                "departmentId": 5
            },
            {
                "cityId": 5308,
                "cityName": "Girardota",
                "departmentId": 5
            },
            {
                "cityId": 531,
                "cityName": "Gómez Plata",
                "departmentId": 5
            },
            {
                "cityId": 27361,
                "cityName": "Istmina",
                "departmentId": 27
            },
            {
                "cityId": 5315,
                "cityName": "Guadalupe",
                "departmentId": 5
            },
            {
                "cityId": 5318,
                "cityName": "Guarne",
                "departmentId": 5
            },
            {
                "cityId": 5321,
                "cityName": "Guatapé",
                "departmentId": 5
            },
            {
                "cityId": 5347,
                "cityName": "Heliconia",
                "departmentId": 5
            },
            {
                "cityId": 5353,
                "cityName": "Hispania",
                "departmentId": 5
            },
            {
                "cityId": 536,
                "cityName": "Itagui",
                "departmentId": 5
            },
            {
                "cityId": 5361,
                "cityName": "Ituango",
                "departmentId": 5
            },
            {
                "cityId": 5086,
                "cityName": "Belmira",
                "departmentId": 5
            },
            {
                "cityId": 5368,
                "cityName": "Jericó",
                "departmentId": 5
            },
            {
                "cityId": 5376,
                "cityName": "La Ceja",
                "departmentId": 5
            },
            {
                "cityId": 538,
                "cityName": "La Estrella",
                "departmentId": 5
            },
            {
                "cityId": 539,
                "cityName": "La Pintada",
                "departmentId": 5
            },
            {
                "cityId": 54,
                "cityName": "La Unión",
                "departmentId": 5
            },
            {
                "cityId": 5411,
                "cityName": "Liborina",
                "departmentId": 5
            },
            {
                "cityId": 5425,
                "cityName": "Maceo",
                "departmentId": 5
            },
            {
                "cityId": 544,
                "cityName": "Marinilla",
                "departmentId": 5
            },
            {
                "cityId": 5467,
                "cityName": "Montebello",
                "departmentId": 5
            },
            {
                "cityId": 5475,
                "cityName": "Murindó",
                "departmentId": 5
            },
            {
                "cityId": 548,
                "cityName": "Mutatá",
                "departmentId": 5
            },
            {
                "cityId": 5483,
                "cityName": "Nariño",
                "departmentId": 5
            },
            {
                "cityId": 549,
                "cityName": "Necoclí",
                "departmentId": 5
            },
            {
                "cityId": 5495,
                "cityName": "Nechí",
                "departmentId": 5
            },
            {
                "cityId": 5501,
                "cityName": "Olaya",
                "departmentId": 5
            },
            {
                "cityId": 5541,
                "cityName": "Peñol",
                "departmentId": 5
            },
            {
                "cityId": 5543,
                "cityName": "Peque",
                "departmentId": 5
            },
            {
                "cityId": 5576,
                "cityName": "Pueblorrico",
                "departmentId": 5
            },
            {
                "cityId": 5579,
                "cityName": "Puerto Berrío",
                "departmentId": 5
            },
            {
                "cityId": 5585,
                "cityName": "Puerto Nare",
                "departmentId": 5
            },
            {
                "cityId": 5591,
                "cityName": "Puerto Triunfo",
                "departmentId": 5
            },
            {
                "cityId": 5604,
                "cityName": "Remedios",
                "departmentId": 5
            },
            {
                "cityId": 5607,
                "cityName": "Retiro",
                "departmentId": 5
            },
            {
                "cityId": 5615,
                "cityName": "Rionegro",
                "departmentId": 5
            },
            {
                "cityId": 5628,
                "cityName": "Sabanalarga",
                "departmentId": 5
            },
            {
                "cityId": 5631,
                "cityName": "Sabaneta",
                "departmentId": 5
            },
            {
                "cityId": 5642,
                "cityName": "Salgar",
                "departmentId": 5
            },
            {
                "cityId": 15189,
                "cityName": "Ciénega",
                "departmentId": 15
            },
            {
                "cityId": 52699,
                "cityName": "Santacruz",
                "departmentId": 52
            },
            {
                "cityId": 5652,
                "cityName": "San Francisco",
                "departmentId": 5
            },
            {
                "cityId": 5656,
                "cityName": "San Jerónimo",
                "departmentId": 5
            },
            {
                "cityId": 68575,
                "cityName": "Puerto Wilches",
                "departmentId": 68
            },
            {
                "cityId": 68573,
                "cityName": "Puerto Parra",
                "departmentId": 68
            },
            {
                "cityId": 566,
                "cityName": "San Luis",
                "departmentId": 5
            },
            {
                "cityId": 5664,
                "cityName": "San Pedro",
                "departmentId": 5
            },
            {
                "cityId": 5667,
                "cityName": "San Rafael",
                "departmentId": 5
            },
            {
                "cityId": 567,
                "cityName": "San Roque",
                "departmentId": 5
            },
            {
                "cityId": 5674,
                "cityName": "San Vicente",
                "departmentId": 5
            },
            {
                "cityId": 5679,
                "cityName": "Santa Bárbara",
                "departmentId": 5
            },
            {
                "cityId": 569,
                "cityName": "Santo Domingo",
                "departmentId": 5
            },
            {
                "cityId": 5697,
                "cityName": "El Santuario",
                "departmentId": 5
            },
            {
                "cityId": 5736,
                "cityName": "Segovia",
                "departmentId": 5
            },
            {
                "cityId": 5761,
                "cityName": "Sopetrán",
                "departmentId": 5
            },
            {
                "cityId": 5037,
                "cityName": "Uribe",
                "departmentId": 50
            },
            {
                "cityId": 5789,
                "cityName": "Támesis",
                "departmentId": 5
            },
            {
                "cityId": 579,
                "cityName": "Tarazá",
                "departmentId": 5
            },
            {
                "cityId": 5792,
                "cityName": "Tarso",
                "departmentId": 5
            },
            {
                "cityId": 5809,
                "cityName": "Titiribí",
                "departmentId": 5
            },
            {
                "cityId": 5819,
                "cityName": "Toledo",
                "departmentId": 5
            },
            {
                "cityId": 5837,
                "cityName": "Turbo",
                "departmentId": 5
            },
            {
                "cityId": 5842,
                "cityName": "Uramita",
                "departmentId": 5
            },
            {
                "cityId": 5847,
                "cityName": "Urrao",
                "departmentId": 5
            },
            {
                "cityId": 5854,
                "cityName": "Valdivia",
                "departmentId": 5
            },
            {
                "cityId": 5856,
                "cityName": "Valparaíso",
                "departmentId": 5
            },
            {
                "cityId": 5858,
                "cityName": "Vegachí",
                "departmentId": 5
            },
            {
                "cityId": 5861,
                "cityName": "Venecia",
                "departmentId": 5
            },
            {
                "cityId": 5885,
                "cityName": "Yalí",
                "departmentId": 5
            },
            {
                "cityId": 5887,
                "cityName": "Yarumal",
                "departmentId": 5
            },
            {
                "cityId": 589,
                "cityName": "Yolombó",
                "departmentId": 5
            },
            {
                "cityId": 5893,
                "cityName": "Yondó",
                "departmentId": 5
            },
            {
                "cityId": 5895,
                "cityName": "Zaragoza",
                "departmentId": 5
            },
            {
                "cityId": 8001,
                "cityName": "Barranquilla",
                "departmentId": 8
            },
            {
                "cityId": 8078,
                "cityName": "Baranoa",
                "departmentId": 8
            },
            {
                "cityId": 8141,
                "cityName": "Candelaria",
                "departmentId": 8
            },
            {
                "cityId": 8296,
                "cityName": "Galapa",
                "departmentId": 8
            },
            {
                "cityId": 8421,
                "cityName": "Luruaco",
                "departmentId": 8
            },
            {
                "cityId": 8433,
                "cityName": "Malambo",
                "departmentId": 8
            },
            {
                "cityId": 8436,
                "cityName": "Manatí",
                "departmentId": 8
            },
            {
                "cityId": 8549,
                "cityName": "Piojó",
                "departmentId": 8
            },
            {
                "cityId": 8558,
                "cityName": "Polonuevo",
                "departmentId": 8
            },
            {
                "cityId": 8634,
                "cityName": "Sabanagrande",
                "departmentId": 8
            },
            {
                "cityId": 8638,
                "cityName": "Sabanalarga",
                "departmentId": 8
            },
            {
                "cityId": 8675,
                "cityName": "Santa Lucía",
                "departmentId": 8
            },
            {
                "cityId": 8685,
                "cityName": "Santo Tomás",
                "departmentId": 8
            },
            {
                "cityId": 8758,
                "cityName": "Soledad",
                "departmentId": 8
            },
            {
                "cityId": 877,
                "cityName": "Suan",
                "departmentId": 8
            },
            {
                "cityId": 8832,
                "cityName": "Tubará",
                "departmentId": 8
            },
            {
                "cityId": 8849,
                "cityName": "Usiacurí",
                "departmentId": 8
            },
            {
                "cityId": 13006,
                "cityName": "Achí",
                "departmentId": 13
            },
            {
                "cityId": 13042,
                "cityName": "Arenal",
                "departmentId": 13
            },
            {
                "cityId": 13052,
                "cityName": "Arjona",
                "departmentId": 13
            },
            {
                "cityId": 13062,
                "cityName": "Arroyohondo",
                "departmentId": 13
            },
            {
                "cityId": 1314,
                "cityName": "Calamar",
                "departmentId": 13
            },
            {
                "cityId": 1316,
                "cityName": "Cantagallo",
                "departmentId": 13
            },
            {
                "cityId": 13188,
                "cityName": "Cicuco",
                "departmentId": 13
            },
            {
                "cityId": 13212,
                "cityName": "Córdoba",
                "departmentId": 13
            },
            {
                "cityId": 13222,
                "cityName": "Clemencia",
                "departmentId": 13
            },
            {
                "cityId": 13248,
                "cityName": "El Guamo",
                "departmentId": 13
            },
            {
                "cityId": 1343,
                "cityName": "Magangué",
                "departmentId": 13
            },
            {
                "cityId": 13433,
                "cityName": "Mahates",
                "departmentId": 13
            },
            {
                "cityId": 1344,
                "cityName": "Margarita",
                "departmentId": 13
            },
            {
                "cityId": 13458,
                "cityName": "Montecristo",
                "departmentId": 13
            },
            {
                "cityId": 13468,
                "cityName": "Mompós",
                "departmentId": 13
            },
            {
                "cityId": 13473,
                "cityName": "Morales",
                "departmentId": 13
            },
            {
                "cityId": 1349,
                "cityName": "Norosí",
                "departmentId": 13
            },
            {
                "cityId": 13549,
                "cityName": "Pinillos",
                "departmentId": 13
            },
            {
                "cityId": 1358,
                "cityName": "Regidor",
                "departmentId": 13
            },
            {
                "cityId": 136,
                "cityName": "Río Viejo",
                "departmentId": 13
            },
            {
                "cityId": 13647,
                "cityName": "San Estanislao",
                "departmentId": 13
            },
            {
                "cityId": 1365,
                "cityName": "San Fernando",
                "departmentId": 13
            },
            {
                "cityId": 13657,
                "cityName": "San Juan Nepomuceno",
                "departmentId": 13
            },
            {
                "cityId": 13673,
                "cityName": "Santa Catalina",
                "departmentId": 13
            },
            {
                "cityId": 13683,
                "cityName": "Santa Rosa",
                "departmentId": 13
            },
            {
                "cityId": 13744,
                "cityName": "Simití",
                "departmentId": 13
            },
            {
                "cityId": 1376,
                "cityName": "Soplaviento",
                "departmentId": 13
            },
            {
                "cityId": 1378,
                "cityName": "Talaigua Nuevo",
                "departmentId": 13
            },
            {
                "cityId": 1381,
                "cityName": "Tiquisio",
                "departmentId": 13
            },
            {
                "cityId": 13836,
                "cityName": "Turbaco",
                "departmentId": 13
            },
            {
                "cityId": 13838,
                "cityName": "Turbaná",
                "departmentId": 13
            },
            {
                "cityId": 13873,
                "cityName": "Villanueva",
                "departmentId": 13
            },
            {
                "cityId": 15001,
                "cityName": "Tunja",
                "departmentId": 15
            },
            {
                "cityId": 15022,
                "cityName": "Almeida",
                "departmentId": 15
            },
            {
                "cityId": 15047,
                "cityName": "Aquitania",
                "departmentId": 15
            },
            {
                "cityId": 15051,
                "cityName": "Arcabuco",
                "departmentId": 15
            },
            {
                "cityId": 1509,
                "cityName": "Berbeo",
                "departmentId": 15
            },
            {
                "cityId": 15092,
                "cityName": "Betéitiva",
                "departmentId": 15
            },
            {
                "cityId": 15097,
                "cityName": "Boavita",
                "departmentId": 15
            },
            {
                "cityId": 15104,
                "cityName": "Boyacá",
                "departmentId": 15
            },
            {
                "cityId": 15106,
                "cityName": "Briceño",
                "departmentId": 15
            },
            {
                "cityId": 15109,
                "cityName": "Buena Vista",
                "departmentId": 15
            },
            {
                "cityId": 15114,
                "cityName": "Busbanzá",
                "departmentId": 15
            },
            {
                "cityId": 15131,
                "cityName": "Caldas",
                "departmentId": 15
            },
            {
                "cityId": 15135,
                "cityName": "Campohermoso",
                "departmentId": 15
            },
            {
                "cityId": 15162,
                "cityName": "Cerinza",
                "departmentId": 15
            },
            {
                "cityId": 15172,
                "cityName": "Chinavita",
                "departmentId": 15
            },
            {
                "cityId": 15176,
                "cityName": "Chiquinquirá",
                "departmentId": 15
            },
            {
                "cityId": 1518,
                "cityName": "Chiscas",
                "departmentId": 15
            },
            {
                "cityId": 15183,
                "cityName": "Chita",
                "departmentId": 15
            },
            {
                "cityId": 15185,
                "cityName": "Chitaraque",
                "departmentId": 15
            },
            {
                "cityId": 15187,
                "cityName": "Chivatá",
                "departmentId": 15
            },
            {
                "cityId": 15204,
                "cityName": "Cómbita",
                "departmentId": 15
            },
            {
                "cityId": 15212,
                "cityName": "Coper",
                "departmentId": 15
            },
            {
                "cityId": 15215,
                "cityName": "Corrales",
                "departmentId": 15
            },
            {
                "cityId": 15218,
                "cityName": "Covarachía",
                "departmentId": 15
            },
            {
                "cityId": 15223,
                "cityName": "Cubará",
                "departmentId": 15
            },
            {
                "cityId": 15224,
                "cityName": "Cucaita",
                "departmentId": 15
            },
            {
                "cityId": 15226,
                "cityName": "Cuítiva",
                "departmentId": 15
            },
            {
                "cityId": 15232,
                "cityName": "Chíquiza",
                "departmentId": 15
            },
            {
                "cityId": 15236,
                "cityName": "Chivor",
                "departmentId": 15
            },
            {
                "cityId": 15238,
                "cityName": "Duitama",
                "departmentId": 15
            },
            {
                "cityId": 15244,
                "cityName": "El Cocuy",
                "departmentId": 15
            },
            {
                "cityId": 15248,
                "cityName": "El Espino",
                "departmentId": 15
            },
            {
                "cityId": 15272,
                "cityName": "Firavitoba",
                "departmentId": 15
            },
            {
                "cityId": 15276,
                "cityName": "Floresta",
                "departmentId": 15
            },
            {
                "cityId": 15293,
                "cityName": "Gachantivá",
                "departmentId": 15
            },
            {
                "cityId": 15296,
                "cityName": "Gameza",
                "departmentId": 15
            },
            {
                "cityId": 15299,
                "cityName": "Garagoa",
                "departmentId": 15
            },
            {
                "cityId": 15317,
                "cityName": "Guacamayas",
                "departmentId": 15
            },
            {
                "cityId": 15322,
                "cityName": "Guateque",
                "departmentId": 15
            },
            {
                "cityId": 15325,
                "cityName": "Guayatá",
                "departmentId": 15
            },
            {
                "cityId": 15332,
                "cityName": "Güicán",
                "departmentId": 15
            },
            {
                "cityId": 15362,
                "cityName": "Iza",
                "departmentId": 15
            },
            {
                "cityId": 15367,
                "cityName": "Jenesano",
                "departmentId": 15
            },
            {
                "cityId": 15368,
                "cityName": "Jericó",
                "departmentId": 15
            },
            {
                "cityId": 15377,
                "cityName": "Labranzagrande",
                "departmentId": 15
            },
            {
                "cityId": 1538,
                "cityName": "La Capilla",
                "departmentId": 15
            },
            {
                "cityId": 15401,
                "cityName": "La Victoria",
                "departmentId": 15
            },
            {
                "cityId": 15425,
                "cityName": "Macanal",
                "departmentId": 15
            },
            {
                "cityId": 15442,
                "cityName": "Maripí",
                "departmentId": 15
            },
            {
                "cityId": 15455,
                "cityName": "Miraflores",
                "departmentId": 15
            },
            {
                "cityId": 15464,
                "cityName": "Mongua",
                "departmentId": 15
            },
            {
                "cityId": 15466,
                "cityName": "Monguí",
                "departmentId": 15
            },
            {
                "cityId": 15469,
                "cityName": "Moniquirá",
                "departmentId": 15
            },
            {
                "cityId": 1548,
                "cityName": "Muzo",
                "departmentId": 15
            },
            {
                "cityId": 15491,
                "cityName": "Nobsa",
                "departmentId": 15
            },
            {
                "cityId": 15494,
                "cityName": "Nuevo Colón",
                "departmentId": 15
            },
            {
                "cityId": 155,
                "cityName": "Oicatá",
                "departmentId": 15
            },
            {
                "cityId": 15507,
                "cityName": "Otanche",
                "departmentId": 15
            },
            {
                "cityId": 15511,
                "cityName": "Pachavita",
                "departmentId": 15
            },
            {
                "cityId": 15514,
                "cityName": "Páez",
                "departmentId": 15
            },
            {
                "cityId": 15516,
                "cityName": "Paipa",
                "departmentId": 15
            },
            {
                "cityId": 15518,
                "cityName": "Pajarito",
                "departmentId": 15
            },
            {
                "cityId": 15522,
                "cityName": "Panqueba",
                "departmentId": 15
            },
            {
                "cityId": 15531,
                "cityName": "Pauna",
                "departmentId": 15
            },
            {
                "cityId": 15533,
                "cityName": "Paya",
                "departmentId": 15
            },
            {
                "cityId": 15542,
                "cityName": "Pesca",
                "departmentId": 15
            },
            {
                "cityId": 1555,
                "cityName": "Pisba",
                "departmentId": 15
            },
            {
                "cityId": 15572,
                "cityName": "Puerto Boyacá",
                "departmentId": 15
            },
            {
                "cityId": 1558,
                "cityName": "Quípama",
                "departmentId": 15
            },
            {
                "cityId": 15599,
                "cityName": "Ramiriquí",
                "departmentId": 15
            },
            {
                "cityId": 156,
                "cityName": "Ráquira",
                "departmentId": 15
            },
            {
                "cityId": 15621,
                "cityName": "Rondón",
                "departmentId": 15
            },
            {
                "cityId": 15632,
                "cityName": "Saboyá",
                "departmentId": 15
            },
            {
                "cityId": 15638,
                "cityName": "Sáchica",
                "departmentId": 15
            },
            {
                "cityId": 15646,
                "cityName": "Samacá",
                "departmentId": 15
            },
            {
                "cityId": 1566,
                "cityName": "San Eduardo",
                "departmentId": 15
            },
            {
                "cityId": 15673,
                "cityName": "San Mateo",
                "departmentId": 15
            },
            {
                "cityId": 15686,
                "cityName": "Santana",
                "departmentId": 15
            },
            {
                "cityId": 1569,
                "cityName": "Santa María",
                "departmentId": 15
            },
            {
                "cityId": 15696,
                "cityName": "Santa Sofía",
                "departmentId": 15
            },
            {
                "cityId": 1572,
                "cityName": "Sativanorte",
                "departmentId": 15
            },
            {
                "cityId": 15723,
                "cityName": "Sativasur",
                "departmentId": 15
            },
            {
                "cityId": 1574,
                "cityName": "Siachoque",
                "departmentId": 15
            },
            {
                "cityId": 15753,
                "cityName": "Soatá",
                "departmentId": 15
            },
            {
                "cityId": 15755,
                "cityName": "Socotá",
                "departmentId": 15
            },
            {
                "cityId": 15757,
                "cityName": "Socha",
                "departmentId": 15
            },
            {
                "cityId": 15759,
                "cityName": "Sogamoso",
                "departmentId": 15
            },
            {
                "cityId": 15761,
                "cityName": "Somondoco",
                "departmentId": 15
            },
            {
                "cityId": 15762,
                "cityName": "Sora",
                "departmentId": 15
            },
            {
                "cityId": 15763,
                "cityName": "Sotaquirá",
                "departmentId": 15
            },
            {
                "cityId": 15764,
                "cityName": "Soracá",
                "departmentId": 15
            },
            {
                "cityId": 15774,
                "cityName": "Susacón",
                "departmentId": 15
            },
            {
                "cityId": 15776,
                "cityName": "Sutamarchán",
                "departmentId": 15
            },
            {
                "cityId": 15778,
                "cityName": "Sutatenza",
                "departmentId": 15
            },
            {
                "cityId": 1579,
                "cityName": "Tasco",
                "departmentId": 15
            },
            {
                "cityId": 15798,
                "cityName": "Tenza",
                "departmentId": 15
            },
            {
                "cityId": 15804,
                "cityName": "Tibaná",
                "departmentId": 15
            },
            {
                "cityId": 15808,
                "cityName": "Tinjacá",
                "departmentId": 15
            },
            {
                "cityId": 1581,
                "cityName": "Tipacoque",
                "departmentId": 15
            },
            {
                "cityId": 15814,
                "cityName": "Toca",
                "departmentId": 15
            },
            {
                "cityId": 1582,
                "cityName": "Tópaga",
                "departmentId": 15
            },
            {
                "cityId": 15822,
                "cityName": "Tota",
                "departmentId": 15
            },
            {
                "cityId": 15835,
                "cityName": "Turmequé",
                "departmentId": 15
            },
            {
                "cityId": 15839,
                "cityName": "Tutazá",
                "departmentId": 15
            },
            {
                "cityId": 15842,
                "cityName": "Umbita",
                "departmentId": 15
            },
            {
                "cityId": 15861,
                "cityName": "Ventaquemada",
                "departmentId": 15
            },
            {
                "cityId": 15879,
                "cityName": "Viracachá",
                "departmentId": 15
            },
            {
                "cityId": 15897,
                "cityName": "Zetaquira",
                "departmentId": 15
            },
            {
                "cityId": 17001,
                "cityName": "Manizales",
                "departmentId": 17
            },
            {
                "cityId": 17013,
                "cityName": "Aguadas",
                "departmentId": 17
            },
            {
                "cityId": 17042,
                "cityName": "Anserma",
                "departmentId": 17
            },
            {
                "cityId": 1705,
                "cityName": "Aranzazu",
                "departmentId": 17
            },
            {
                "cityId": 17088,
                "cityName": "Belalcázar",
                "departmentId": 17
            },
            {
                "cityId": 17174,
                "cityName": "Chinchiná",
                "departmentId": 17
            },
            {
                "cityId": 17272,
                "cityName": "Filadelfia",
                "departmentId": 17
            },
            {
                "cityId": 1738,
                "cityName": "La Dorada",
                "departmentId": 17
            },
            {
                "cityId": 17388,
                "cityName": "La Merced",
                "departmentId": 17
            },
            {
                "cityId": 17433,
                "cityName": "Manzanares",
                "departmentId": 17
            },
            {
                "cityId": 17442,
                "cityName": "Marmato",
                "departmentId": 17
            },
            {
                "cityId": 17446,
                "cityName": "Marulanda",
                "departmentId": 17
            },
            {
                "cityId": 17486,
                "cityName": "Neira",
                "departmentId": 17
            },
            {
                "cityId": 17495,
                "cityName": "Norcasia",
                "departmentId": 17
            },
            {
                "cityId": 17513,
                "cityName": "Pácora",
                "departmentId": 17
            },
            {
                "cityId": 17524,
                "cityName": "Palestina",
                "departmentId": 17
            },
            {
                "cityId": 17541,
                "cityName": "Pensilvania",
                "departmentId": 17
            },
            {
                "cityId": 17614,
                "cityName": "Riosucio",
                "departmentId": 17
            },
            {
                "cityId": 17616,
                "cityName": "Risaralda",
                "departmentId": 17
            },
            {
                "cityId": 17653,
                "cityName": "Salamina",
                "departmentId": 17
            },
            {
                "cityId": 17662,
                "cityName": "Samaná",
                "departmentId": 17
            },
            {
                "cityId": 17665,
                "cityName": "San José",
                "departmentId": 17
            },
            {
                "cityId": 17777,
                "cityName": "Supía",
                "departmentId": 17
            },
            {
                "cityId": 17867,
                "cityName": "Victoria",
                "departmentId": 17
            },
            {
                "cityId": 17873,
                "cityName": "Villamaría",
                "departmentId": 17
            },
            {
                "cityId": 17877,
                "cityName": "Viterbo",
                "departmentId": 17
            },
            {
                "cityId": 18001,
                "cityName": "Florencia",
                "departmentId": 18
            },
            {
                "cityId": 18029,
                "cityName": "Albania",
                "departmentId": 18
            },
            {
                "cityId": 18205,
                "cityName": "Curillo",
                "departmentId": 18
            },
            {
                "cityId": 18247,
                "cityName": "El Doncello",
                "departmentId": 18
            },
            {
                "cityId": 18256,
                "cityName": "El Paujil",
                "departmentId": 18
            },
            {
                "cityId": 18479,
                "cityName": "Morelia",
                "departmentId": 18
            },
            {
                "cityId": 18592,
                "cityName": "Puerto Rico",
                "departmentId": 18
            },
            {
                "cityId": 18756,
                "cityName": "Solano",
                "departmentId": 18
            },
            {
                "cityId": 18785,
                "cityName": "Solita",
                "departmentId": 18
            },
            {
                "cityId": 1886,
                "cityName": "Valparaíso",
                "departmentId": 18
            },
            {
                "cityId": 19001,
                "cityName": "Popayán",
                "departmentId": 19
            },
            {
                "cityId": 19022,
                "cityName": "Almaguer",
                "departmentId": 19
            },
            {
                "cityId": 1905,
                "cityName": "Argelia",
                "departmentId": 19
            },
            {
                "cityId": 19075,
                "cityName": "Balboa",
                "departmentId": 19
            },
            {
                "cityId": 191,
                "cityName": "Bolívar",
                "departmentId": 19
            },
            {
                "cityId": 1911,
                "cityName": "Buenos Aires",
                "departmentId": 19
            },
            {
                "cityId": 1913,
                "cityName": "Cajibío",
                "departmentId": 19
            },
            {
                "cityId": 19137,
                "cityName": "Caldono",
                "departmentId": 19
            },
            {
                "cityId": 19142,
                "cityName": "Caloto",
                "departmentId": 19
            },
            {
                "cityId": 19212,
                "cityName": "Corinto",
                "departmentId": 19
            },
            {
                "cityId": 19256,
                "cityName": "El Tambo",
                "departmentId": 19
            },
            {
                "cityId": 1929,
                "cityName": "Florencia",
                "departmentId": 19
            },
            {
                "cityId": 193,
                "cityName": "Guachené",
                "departmentId": 19
            },
            {
                "cityId": 19318,
                "cityName": "Guapi",
                "departmentId": 19
            },
            {
                "cityId": 19355,
                "cityName": "Inzá",
                "departmentId": 19
            },
            {
                "cityId": 19364,
                "cityName": "Jambaló",
                "departmentId": 19
            },
            {
                "cityId": 19392,
                "cityName": "La Sierra",
                "departmentId": 19
            },
            {
                "cityId": 19397,
                "cityName": "La Vega",
                "departmentId": 19
            },
            {
                "cityId": 19418,
                "cityName": "López",
                "departmentId": 19
            },
            {
                "cityId": 1945,
                "cityName": "Mercaderes",
                "departmentId": 19
            },
            {
                "cityId": 19455,
                "cityName": "Miranda",
                "departmentId": 19
            },
            {
                "cityId": 19473,
                "cityName": "Morales",
                "departmentId": 19
            },
            {
                "cityId": 19513,
                "cityName": "Padilla",
                "departmentId": 19
            },
            {
                "cityId": 19532,
                "cityName": "Patía",
                "departmentId": 19
            },
            {
                "cityId": 19533,
                "cityName": "Piamonte",
                "departmentId": 19
            },
            {
                "cityId": 19548,
                "cityName": "Piendamó",
                "departmentId": 19
            },
            {
                "cityId": 19573,
                "cityName": "Puerto Tejada",
                "departmentId": 19
            },
            {
                "cityId": 19585,
                "cityName": "Puracé",
                "departmentId": 19
            },
            {
                "cityId": 19622,
                "cityName": "Rosas",
                "departmentId": 19
            },
            {
                "cityId": 19701,
                "cityName": "Santa Rosa",
                "departmentId": 19
            },
            {
                "cityId": 19743,
                "cityName": "Silvia",
                "departmentId": 19
            },
            {
                "cityId": 1976,
                "cityName": "Sotara",
                "departmentId": 19
            },
            {
                "cityId": 1978,
                "cityName": "Suárez",
                "departmentId": 19
            },
            {
                "cityId": 19785,
                "cityName": "Sucre",
                "departmentId": 19
            },
            {
                "cityId": 19807,
                "cityName": "Timbpio",
                "departmentId": 19
            },
            {
                "cityId": 19809,
                "cityName": "Timbiquí",
                "departmentId": 19
            },
            {
                "cityId": 19821,
                "cityName": "Toribio",
                "departmentId": 19
            },
            {
                "cityId": 19824,
                "cityName": "Totoró",
                "departmentId": 19
            },
            {
                "cityId": 19845,
                "cityName": "Villa Rica",
                "departmentId": 19
            },
            {
                "cityId": 20001,
                "cityName": "Valledupar",
                "departmentId": 20
            },
            {
                "cityId": 20011,
                "cityName": "Aguachica",
                "departmentId": 20
            },
            {
                "cityId": 20013,
                "cityName": "Agustín Codazzi",
                "departmentId": 20
            },
            {
                "cityId": 20032,
                "cityName": "Astrea",
                "departmentId": 20
            },
            {
                "cityId": 20045,
                "cityName": "Becerril",
                "departmentId": 20
            },
            {
                "cityId": 2006,
                "cityName": "Bosconia",
                "departmentId": 20
            },
            {
                "cityId": 20175,
                "cityName": "Chimichagua",
                "departmentId": 20
            },
            {
                "cityId": 20178,
                "cityName": "Chiriguaná",
                "departmentId": 20
            },
            {
                "cityId": 20228,
                "cityName": "Curumaní",
                "departmentId": 20
            },
            {
                "cityId": 20238,
                "cityName": "El Copey",
                "departmentId": 20
            },
            {
                "cityId": 2025,
                "cityName": "El Paso",
                "departmentId": 20
            },
            {
                "cityId": 20295,
                "cityName": "Gamarra",
                "departmentId": 20
            },
            {
                "cityId": 2031,
                "cityName": "González",
                "departmentId": 20
            },
            {
                "cityId": 20383,
                "cityName": "La Gloria",
                "departmentId": 20
            },
            {
                "cityId": 20443,
                "cityName": "Manaure",
                "departmentId": 20
            },
            {
                "cityId": 20517,
                "cityName": "Pailitas",
                "departmentId": 20
            },
            {
                "cityId": 2055,
                "cityName": "Pelaya",
                "departmentId": 20
            },
            {
                "cityId": 2057,
                "cityName": "Pueblo Bello",
                "departmentId": 20
            },
            {
                "cityId": 20621,
                "cityName": "La Paz",
                "departmentId": 20
            },
            {
                "cityId": 2071,
                "cityName": "San Alberto",
                "departmentId": 20
            },
            {
                "cityId": 2075,
                "cityName": "San Diego",
                "departmentId": 20
            },
            {
                "cityId": 2077,
                "cityName": "San Martín",
                "departmentId": 20
            },
            {
                "cityId": 20787,
                "cityName": "Tamalameque",
                "departmentId": 20
            },
            {
                "cityId": 23001,
                "cityName": "Montería",
                "departmentId": 23
            },
            {
                "cityId": 23068,
                "cityName": "Ayapel",
                "departmentId": 23
            },
            {
                "cityId": 23079,
                "cityName": "Buenavista",
                "departmentId": 23
            },
            {
                "cityId": 2309,
                "cityName": "Canalete",
                "departmentId": 23
            },
            {
                "cityId": 23162,
                "cityName": "Cereté",
                "departmentId": 23
            },
            {
                "cityId": 23168,
                "cityName": "Chimá",
                "departmentId": 23
            },
            {
                "cityId": 23182,
                "cityName": "Chinú",
                "departmentId": 23
            },
            {
                "cityId": 233,
                "cityName": "Cotorra",
                "departmentId": 23
            },
            {
                "cityId": 23417,
                "cityName": "Lorica",
                "departmentId": 23
            },
            {
                "cityId": 23419,
                "cityName": "Los Córdobas",
                "departmentId": 23
            },
            {
                "cityId": 23464,
                "cityName": "Momil",
                "departmentId": 23
            },
            {
                "cityId": 235,
                "cityName": "Moñitos",
                "departmentId": 23
            },
            {
                "cityId": 23555,
                "cityName": "Planeta Rica",
                "departmentId": 23
            },
            {
                "cityId": 2357,
                "cityName": "Pueblo Nuevo",
                "departmentId": 23
            },
            {
                "cityId": 23574,
                "cityName": "Puerto Escondido",
                "departmentId": 23
            },
            {
                "cityId": 23586,
                "cityName": "Purísima",
                "departmentId": 23
            },
            {
                "cityId": 2366,
                "cityName": "Sahagún",
                "departmentId": 23
            },
            {
                "cityId": 2367,
                "cityName": "San Andrés Sotavento",
                "departmentId": 23
            },
            {
                "cityId": 23672,
                "cityName": "San Antero",
                "departmentId": 23
            },
            {
                "cityId": 23686,
                "cityName": "San Pelayo",
                "departmentId": 23
            },
            {
                "cityId": 23807,
                "cityName": "Tierralta",
                "departmentId": 23
            },
            {
                "cityId": 23815,
                "cityName": "Tuchín",
                "departmentId": 23
            },
            {
                "cityId": 23855,
                "cityName": "Valencia",
                "departmentId": 23
            },
            {
                "cityId": 25035,
                "cityName": "Anapoima",
                "departmentId": 25
            },
            {
                "cityId": 25053,
                "cityName": "Arbeláez",
                "departmentId": 25
            },
            {
                "cityId": 25086,
                "cityName": "Beltrán",
                "departmentId": 25
            },
            {
                "cityId": 25095,
                "cityName": "Bituima",
                "departmentId": 25
            },
            {
                "cityId": 25099,
                "cityName": "Bojacá",
                "departmentId": 25
            },
            {
                "cityId": 2512,
                "cityName": "Cabrera",
                "departmentId": 25
            },
            {
                "cityId": 25123,
                "cityName": "Cachipay",
                "departmentId": 25
            },
            {
                "cityId": 25126,
                "cityName": "Cajicá",
                "departmentId": 25
            },
            {
                "cityId": 25148,
                "cityName": "Caparrapí",
                "departmentId": 25
            },
            {
                "cityId": 25151,
                "cityName": "Caqueza",
                "departmentId": 25
            },
            {
                "cityId": 25168,
                "cityName": "Chaguaní",
                "departmentId": 25
            },
            {
                "cityId": 25178,
                "cityName": "Chipaque",
                "departmentId": 25
            },
            {
                "cityId": 25181,
                "cityName": "Choachí",
                "departmentId": 25
            },
            {
                "cityId": 25183,
                "cityName": "Chocontá",
                "departmentId": 25
            },
            {
                "cityId": 252,
                "cityName": "Cogua",
                "departmentId": 25
            },
            {
                "cityId": 25214,
                "cityName": "Cota",
                "departmentId": 25
            },
            {
                "cityId": 25224,
                "cityName": "Cucunubá",
                "departmentId": 25
            },
            {
                "cityId": 25245,
                "cityName": "El Colegio",
                "departmentId": 25
            },
            {
                "cityId": 2526,
                "cityName": "El Rosal",
                "departmentId": 25
            },
            {
                "cityId": 25279,
                "cityName": "Fomeque",
                "departmentId": 25
            },
            {
                "cityId": 25281,
                "cityName": "Fosca",
                "departmentId": 25
            },
            {
                "cityId": 25286,
                "cityName": "Funza",
                "departmentId": 25
            },
            {
                "cityId": 25288,
                "cityName": "Fúquene",
                "departmentId": 25
            },
            {
                "cityId": 25293,
                "cityName": "Gachala",
                "departmentId": 25
            },
            {
                "cityId": 25295,
                "cityName": "Gachancipá",
                "departmentId": 25
            },
            {
                "cityId": 25297,
                "cityName": "Gachetá",
                "departmentId": 25
            },
            {
                "cityId": 25307,
                "cityName": "Girardot",
                "departmentId": 25
            },
            {
                "cityId": 25312,
                "cityName": "Granada",
                "departmentId": 25
            },
            {
                "cityId": 25317,
                "cityName": "Guachetá",
                "departmentId": 25
            },
            {
                "cityId": 2532,
                "cityName": "Guaduas",
                "departmentId": 25
            },
            {
                "cityId": 25322,
                "cityName": "Guasca",
                "departmentId": 25
            },
            {
                "cityId": 25324,
                "cityName": "Guataquí",
                "departmentId": 25
            },
            {
                "cityId": 25326,
                "cityName": "Guatavita",
                "departmentId": 25
            },
            {
                "cityId": 25335,
                "cityName": "Guayabetal",
                "departmentId": 25
            },
            {
                "cityId": 25339,
                "cityName": "Gutiérrez",
                "departmentId": 25
            },
            {
                "cityId": 25368,
                "cityName": "Jerusalén",
                "departmentId": 25
            },
            {
                "cityId": 25372,
                "cityName": "Junín",
                "departmentId": 25
            },
            {
                "cityId": 25377,
                "cityName": "La Calera",
                "departmentId": 25
            },
            {
                "cityId": 25386,
                "cityName": "La Mesa",
                "departmentId": 25
            },
            {
                "cityId": 25394,
                "cityName": "La Palma",
                "departmentId": 25
            },
            {
                "cityId": 25398,
                "cityName": "La Peña",
                "departmentId": 25
            },
            {
                "cityId": 25402,
                "cityName": "La Vega",
                "departmentId": 25
            },
            {
                "cityId": 25407,
                "cityName": "Lenguazaque",
                "departmentId": 25
            },
            {
                "cityId": 25426,
                "cityName": "Macheta",
                "departmentId": 25
            },
            {
                "cityId": 2543,
                "cityName": "Madrid",
                "departmentId": 25
            },
            {
                "cityId": 25436,
                "cityName": "Manta",
                "departmentId": 25
            },
            {
                "cityId": 25438,
                "cityName": "Medina",
                "departmentId": 25
            },
            {
                "cityId": 25473,
                "cityName": "Mosquera",
                "departmentId": 25
            },
            {
                "cityId": 25483,
                "cityName": "Nariño",
                "departmentId": 25
            },
            {
                "cityId": 25486,
                "cityName": "Nemocón",
                "departmentId": 25
            },
            {
                "cityId": 25488,
                "cityName": "Nilo",
                "departmentId": 25
            },
            {
                "cityId": 25489,
                "cityName": "Nimaima",
                "departmentId": 25
            },
            {
                "cityId": 25491,
                "cityName": "Nocaima",
                "departmentId": 25
            },
            {
                "cityId": 25506,
                "cityName": "Venecia",
                "departmentId": 25
            },
            {
                "cityId": 25513,
                "cityName": "Pacho",
                "departmentId": 25
            },
            {
                "cityId": 25518,
                "cityName": "Paime",
                "departmentId": 25
            },
            {
                "cityId": 25524,
                "cityName": "Pandi",
                "departmentId": 25
            },
            {
                "cityId": 2553,
                "cityName": "Paratebueno",
                "departmentId": 25
            },
            {
                "cityId": 25535,
                "cityName": "Pasca",
                "departmentId": 25
            },
            {
                "cityId": 25572,
                "cityName": "Puerto Salgar",
                "departmentId": 25
            },
            {
                "cityId": 2558,
                "cityName": "Pulí",
                "departmentId": 25
            },
            {
                "cityId": 25592,
                "cityName": "Quebradanegra",
                "departmentId": 25
            },
            {
                "cityId": 25594,
                "cityName": "Quetame",
                "departmentId": 25
            },
            {
                "cityId": 25596,
                "cityName": "Quipile",
                "departmentId": 25
            },
            {
                "cityId": 25599,
                "cityName": "Apulo",
                "departmentId": 25
            },
            {
                "cityId": 25612,
                "cityName": "Ricaurte",
                "departmentId": 25
            },
            {
                "cityId": 25649,
                "cityName": "San Bernardo",
                "departmentId": 25
            },
            {
                "cityId": 25653,
                "cityName": "San Cayetano",
                "departmentId": 25
            },
            {
                "cityId": 25658,
                "cityName": "San Francisco",
                "departmentId": 25
            },
            {
                "cityId": 25736,
                "cityName": "Sesquilé",
                "departmentId": 25
            },
            {
                "cityId": 2574,
                "cityName": "Sibaté",
                "departmentId": 25
            },
            {
                "cityId": 25743,
                "cityName": "Silvania",
                "departmentId": 25
            },
            {
                "cityId": 25745,
                "cityName": "Simijaca",
                "departmentId": 25
            },
            {
                "cityId": 25754,
                "cityName": "Soacha",
                "departmentId": 25
            },
            {
                "cityId": 25769,
                "cityName": "Subachoque",
                "departmentId": 25
            },
            {
                "cityId": 25772,
                "cityName": "Suesca",
                "departmentId": 25
            },
            {
                "cityId": 25777,
                "cityName": "Supatá",
                "departmentId": 25
            },
            {
                "cityId": 25779,
                "cityName": "Susa",
                "departmentId": 25
            },
            {
                "cityId": 25781,
                "cityName": "Sutatausa",
                "departmentId": 25
            },
            {
                "cityId": 25785,
                "cityName": "Tabio",
                "departmentId": 25
            },
            {
                "cityId": 25793,
                "cityName": "Tausa",
                "departmentId": 25
            },
            {
                "cityId": 25797,
                "cityName": "Tena",
                "departmentId": 25
            },
            {
                "cityId": 25799,
                "cityName": "Tenjo",
                "departmentId": 25
            },
            {
                "cityId": 25805,
                "cityName": "Tibacuy",
                "departmentId": 25
            },
            {
                "cityId": 25807,
                "cityName": "Tibirita",
                "departmentId": 25
            },
            {
                "cityId": 25815,
                "cityName": "Tocaima",
                "departmentId": 25
            },
            {
                "cityId": 25817,
                "cityName": "Tocancipá",
                "departmentId": 25
            },
            {
                "cityId": 25823,
                "cityName": "Topaipí",
                "departmentId": 25
            },
            {
                "cityId": 25839,
                "cityName": "Ubalá",
                "departmentId": 25
            },
            {
                "cityId": 25841,
                "cityName": "Ubaque",
                "departmentId": 25
            },
            {
                "cityId": 25845,
                "cityName": "Une",
                "departmentId": 25
            },
            {
                "cityId": 25851,
                "cityName": "Útica",
                "departmentId": 25
            },
            {
                "cityId": 25867,
                "cityName": "Vianí",
                "departmentId": 25
            },
            {
                "cityId": 25871,
                "cityName": "Villagómez",
                "departmentId": 25
            },
            {
                "cityId": 25873,
                "cityName": "Villapinzón",
                "departmentId": 25
            },
            {
                "cityId": 25875,
                "cityName": "Villeta",
                "departmentId": 25
            },
            {
                "cityId": 25878,
                "cityName": "Viotá",
                "departmentId": 25
            },
            {
                "cityId": 25898,
                "cityName": "Zipacón",
                "departmentId": 25
            },
            {
                "cityId": 27001,
                "cityName": "Quibdó",
                "departmentId": 27
            },
            {
                "cityId": 27006,
                "cityName": "Acandí",
                "departmentId": 27
            },
            {
                "cityId": 27025,
                "cityName": "Alto Baudo",
                "departmentId": 27
            },
            {
                "cityId": 2705,
                "cityName": "Atrato",
                "departmentId": 27
            },
            {
                "cityId": 27073,
                "cityName": "Bagadó",
                "departmentId": 27
            },
            {
                "cityId": 27075,
                "cityName": "Bahía Solano",
                "departmentId": 27
            },
            {
                "cityId": 27077,
                "cityName": "Bajo Baudó",
                "departmentId": 27
            },
            {
                "cityId": 27099,
                "cityName": "Bojaya",
                "departmentId": 27
            },
            {
                "cityId": 2716,
                "cityName": "Cértegui",
                "departmentId": 27
            },
            {
                "cityId": 27205,
                "cityName": "Condoto",
                "departmentId": 27
            },
            {
                "cityId": 27372,
                "cityName": "Juradó",
                "departmentId": 27
            },
            {
                "cityId": 27413,
                "cityName": "Lloró",
                "departmentId": 27
            },
            {
                "cityId": 27425,
                "cityName": "Medio Atrato",
                "departmentId": 27
            },
            {
                "cityId": 2743,
                "cityName": "Medio Baudó",
                "departmentId": 27
            },
            {
                "cityId": 2745,
                "cityName": "Medio San Juan",
                "departmentId": 27
            },
            {
                "cityId": 27491,
                "cityName": "Nóvita",
                "departmentId": 27
            },
            {
                "cityId": 27495,
                "cityName": "Nuquí",
                "departmentId": 27
            },
            {
                "cityId": 2758,
                "cityName": "Río Iro",
                "departmentId": 27
            },
            {
                "cityId": 276,
                "cityName": "Río Quito",
                "departmentId": 27
            },
            {
                "cityId": 27615,
                "cityName": "Riosucio",
                "departmentId": 27
            },
            {
                "cityId": 27745,
                "cityName": "Sipí",
                "departmentId": 27
            },
            {
                "cityId": 278,
                "cityName": "Unguía",
                "departmentId": 27
            },
            {
                "cityId": 41001,
                "cityName": "Neiva",
                "departmentId": 41
            },
            {
                "cityId": 41006,
                "cityName": "Acevedo",
                "departmentId": 41
            },
            {
                "cityId": 41013,
                "cityName": "Agrado",
                "departmentId": 41
            },
            {
                "cityId": 41016,
                "cityName": "Aipe",
                "departmentId": 41
            },
            {
                "cityId": 4102,
                "cityName": "Algeciras",
                "departmentId": 41
            },
            {
                "cityId": 41026,
                "cityName": "Altamira",
                "departmentId": 41
            },
            {
                "cityId": 41078,
                "cityName": "Baraya",
                "departmentId": 41
            },
            {
                "cityId": 41132,
                "cityName": "Campoalegre",
                "departmentId": 41
            },
            {
                "cityId": 41206,
                "cityName": "Colombia",
                "departmentId": 41
            },
            {
                "cityId": 41244,
                "cityName": "Elías",
                "departmentId": 41
            },
            {
                "cityId": 41298,
                "cityName": "Garzón",
                "departmentId": 41
            },
            {
                "cityId": 41306,
                "cityName": "Gigante",
                "departmentId": 41
            },
            {
                "cityId": 41319,
                "cityName": "Guadalupe",
                "departmentId": 41
            },
            {
                "cityId": 41349,
                "cityName": "Hobo",
                "departmentId": 41
            },
            {
                "cityId": 41357,
                "cityName": "Iquira",
                "departmentId": 41
            },
            {
                "cityId": 41359,
                "cityName": "Isnos",
                "departmentId": 41
            },
            {
                "cityId": 41378,
                "cityName": "La Argentina",
                "departmentId": 41
            },
            {
                "cityId": 41396,
                "cityName": "La Plata",
                "departmentId": 41
            },
            {
                "cityId": 41483,
                "cityName": "Nátaga",
                "departmentId": 41
            },
            {
                "cityId": 41503,
                "cityName": "Oporapa",
                "departmentId": 41
            },
            {
                "cityId": 41518,
                "cityName": "Paicol",
                "departmentId": 41
            },
            {
                "cityId": 41524,
                "cityName": "Palermo",
                "departmentId": 41
            },
            {
                "cityId": 4153,
                "cityName": "Palestina",
                "departmentId": 41
            },
            {
                "cityId": 41548,
                "cityName": "Pital",
                "departmentId": 41
            },
            {
                "cityId": 41551,
                "cityName": "Pitalito",
                "departmentId": 41
            },
            {
                "cityId": 41615,
                "cityName": "Rivera",
                "departmentId": 41
            },
            {
                "cityId": 4166,
                "cityName": "Saladoblanco",
                "departmentId": 41
            },
            {
                "cityId": 41676,
                "cityName": "Santa María",
                "departmentId": 41
            },
            {
                "cityId": 4177,
                "cityName": "Suaza",
                "departmentId": 41
            },
            {
                "cityId": 41791,
                "cityName": "Tarqui",
                "departmentId": 41
            },
            {
                "cityId": 41797,
                "cityName": "Tesalia",
                "departmentId": 41
            },
            {
                "cityId": 41799,
                "cityName": "Tello",
                "departmentId": 41
            },
            {
                "cityId": 41801,
                "cityName": "Teruel",
                "departmentId": 41
            },
            {
                "cityId": 41807,
                "cityName": "Timaná",
                "departmentId": 41
            },
            {
                "cityId": 41872,
                "cityName": "Villavieja",
                "departmentId": 41
            },
            {
                "cityId": 41885,
                "cityName": "Yaguará",
                "departmentId": 41
            },
            {
                "cityId": 44001,
                "cityName": "Riohacha",
                "departmentId": 44
            },
            {
                "cityId": 44035,
                "cityName": "Albania",
                "departmentId": 44
            },
            {
                "cityId": 44078,
                "cityName": "Barrancas",
                "departmentId": 44
            },
            {
                "cityId": 4409,
                "cityName": "Dibula",
                "departmentId": 44
            },
            {
                "cityId": 44098,
                "cityName": "Distracción",
                "departmentId": 44
            },
            {
                "cityId": 4411,
                "cityName": "El Molino",
                "departmentId": 44
            },
            {
                "cityId": 44279,
                "cityName": "Fonseca",
                "departmentId": 44
            },
            {
                "cityId": 44378,
                "cityName": "Hatonuevo",
                "departmentId": 44
            },
            {
                "cityId": 4443,
                "cityName": "Maicao",
                "departmentId": 44
            },
            {
                "cityId": 4456,
                "cityName": "Manaure",
                "departmentId": 44
            },
            {
                "cityId": 44847,
                "cityName": "Uribia",
                "departmentId": 44
            },
            {
                "cityId": 44855,
                "cityName": "Urumita",
                "departmentId": 44
            },
            {
                "cityId": 44874,
                "cityName": "Villanueva",
                "departmentId": 44
            },
            {
                "cityId": 47001,
                "cityName": "Santa Marta",
                "departmentId": 47
            },
            {
                "cityId": 4703,
                "cityName": "Algarrobo",
                "departmentId": 47
            },
            {
                "cityId": 47053,
                "cityName": "Aracataca",
                "departmentId": 47
            },
            {
                "cityId": 47058,
                "cityName": "Ariguaní",
                "departmentId": 47
            },
            {
                "cityId": 47161,
                "cityName": "Cerro San Antonio",
                "departmentId": 47
            },
            {
                "cityId": 4717,
                "cityName": "Chivolo",
                "departmentId": 47
            },
            {
                "cityId": 47205,
                "cityName": "Concordia",
                "departmentId": 47
            },
            {
                "cityId": 47245,
                "cityName": "El Banco",
                "departmentId": 47
            },
            {
                "cityId": 47258,
                "cityName": "El Piñon",
                "departmentId": 47
            },
            {
                "cityId": 47268,
                "cityName": "El Retén",
                "departmentId": 47
            },
            {
                "cityId": 47288,
                "cityName": "Fundación",
                "departmentId": 47
            },
            {
                "cityId": 47318,
                "cityName": "Guamal",
                "departmentId": 47
            },
            {
                "cityId": 4746,
                "cityName": "Nueva Granada",
                "departmentId": 47
            },
            {
                "cityId": 47541,
                "cityName": "Pedraza",
                "departmentId": 47
            },
            {
                "cityId": 47551,
                "cityName": "Pivijay",
                "departmentId": 47
            },
            {
                "cityId": 47555,
                "cityName": "Plato",
                "departmentId": 47
            },
            {
                "cityId": 47605,
                "cityName": "Remolino",
                "departmentId": 47
            },
            {
                "cityId": 47675,
                "cityName": "Salamina",
                "departmentId": 47
            },
            {
                "cityId": 47703,
                "cityName": "San Zenón",
                "departmentId": 47
            },
            {
                "cityId": 47707,
                "cityName": "Santa Ana",
                "departmentId": 47
            },
            {
                "cityId": 47745,
                "cityName": "Sitionuevo",
                "departmentId": 47
            },
            {
                "cityId": 47798,
                "cityName": "Tenerife",
                "departmentId": 47
            },
            {
                "cityId": 4796,
                "cityName": "Zapayán",
                "departmentId": 47
            },
            {
                "cityId": 4798,
                "cityName": "Zona Bananera",
                "departmentId": 47
            },
            {
                "cityId": 50001,
                "cityName": "Villavicencio",
                "departmentId": 50
            },
            {
                "cityId": 50006,
                "cityName": "Acacias",
                "departmentId": 50
            },
            {
                "cityId": 50124,
                "cityName": "Cabuyaro",
                "departmentId": 50
            },
            {
                "cityId": 50223,
                "cityName": "Cubarral",
                "departmentId": 50
            },
            {
                "cityId": 50226,
                "cityName": "Cumaral",
                "departmentId": 50
            },
            {
                "cityId": 50245,
                "cityName": "El Calvario",
                "departmentId": 50
            },
            {
                "cityId": 50251,
                "cityName": "El Castillo",
                "departmentId": 50
            },
            {
                "cityId": 5027,
                "cityName": "El Dorado",
                "departmentId": 50
            },
            {
                "cityId": 50313,
                "cityName": "Granada",
                "departmentId": 50
            },
            {
                "cityId": 50318,
                "cityName": "Guamal",
                "departmentId": 50
            },
            {
                "cityId": 50325,
                "cityName": "Mapiripán",
                "departmentId": 50
            },
            {
                "cityId": 5033,
                "cityName": "Mesetas",
                "departmentId": 50
            },
            {
                "cityId": 5035,
                "cityName": "La Macarena",
                "departmentId": 50
            },
            {
                "cityId": 504,
                "cityName": "Lejanías",
                "departmentId": 50
            },
            {
                "cityId": 5045,
                "cityName": "Puerto Concordia",
                "departmentId": 50
            },
            {
                "cityId": 50568,
                "cityName": "Puerto Gaitán",
                "departmentId": 50
            },
            {
                "cityId": 50573,
                "cityName": "Puerto López",
                "departmentId": 50
            },
            {
                "cityId": 50577,
                "cityName": "Puerto Lleras",
                "departmentId": 50
            },
            {
                "cityId": 5059,
                "cityName": "Puerto Rico",
                "departmentId": 50
            },
            {
                "cityId": 50606,
                "cityName": "Restrepo",
                "departmentId": 50
            },
            {
                "cityId": 50686,
                "cityName": "San Juanito",
                "departmentId": 50
            },
            {
                "cityId": 50689,
                "cityName": "San Martín",
                "departmentId": 50
            },
            {
                "cityId": 50711,
                "cityName": "Vista Hermosa",
                "departmentId": 50
            },
            {
                "cityId": 52001,
                "cityName": "Pasto",
                "departmentId": 52
            },
            {
                "cityId": 52019,
                "cityName": "Albán",
                "departmentId": 52
            },
            {
                "cityId": 52022,
                "cityName": "Aldana",
                "departmentId": 52
            },
            {
                "cityId": 52036,
                "cityName": "Ancuyá",
                "departmentId": 52
            },
            {
                "cityId": 52079,
                "cityName": "Barbacoas",
                "departmentId": 52
            },
            {
                "cityId": 52203,
                "cityName": "Colón",
                "departmentId": 52
            },
            {
                "cityId": 52207,
                "cityName": "Consaca",
                "departmentId": 52
            },
            {
                "cityId": 5221,
                "cityName": "Contadero",
                "departmentId": 52
            },
            {
                "cityId": 52215,
                "cityName": "Córdoba",
                "departmentId": 52
            },
            {
                "cityId": 52224,
                "cityName": "Cuaspud",
                "departmentId": 52
            },
            {
                "cityId": 52227,
                "cityName": "Cumbal",
                "departmentId": 52
            },
            {
                "cityId": 52233,
                "cityName": "Cumbitara",
                "departmentId": 52
            },
            {
                "cityId": 5225,
                "cityName": "El Charco",
                "departmentId": 52
            },
            {
                "cityId": 52254,
                "cityName": "El Peñol",
                "departmentId": 52
            },
            {
                "cityId": 52256,
                "cityName": "El Rosario",
                "departmentId": 52
            },
            {
                "cityId": 5226,
                "cityName": "El Tambo",
                "departmentId": 52
            },
            {
                "cityId": 52287,
                "cityName": "Funes",
                "departmentId": 52
            },
            {
                "cityId": 52317,
                "cityName": "Guachucal",
                "departmentId": 52
            },
            {
                "cityId": 5232,
                "cityName": "Guaitarilla",
                "departmentId": 52
            },
            {
                "cityId": 52323,
                "cityName": "Gualmatán",
                "departmentId": 52
            },
            {
                "cityId": 52352,
                "cityName": "Iles",
                "departmentId": 52
            },
            {
                "cityId": 52354,
                "cityName": "Imués",
                "departmentId": 52
            },
            {
                "cityId": 52356,
                "cityName": "Ipiales",
                "departmentId": 52
            },
            {
                "cityId": 52378,
                "cityName": "La Cruz",
                "departmentId": 52
            },
            {
                "cityId": 52381,
                "cityName": "La Florida",
                "departmentId": 52
            },
            {
                "cityId": 52385,
                "cityName": "La Llanada",
                "departmentId": 52
            },
            {
                "cityId": 5239,
                "cityName": "La Tola",
                "departmentId": 52
            },
            {
                "cityId": 52399,
                "cityName": "La Unión",
                "departmentId": 52
            },
            {
                "cityId": 52405,
                "cityName": "Leiva",
                "departmentId": 52
            },
            {
                "cityId": 52411,
                "cityName": "Linares",
                "departmentId": 52
            },
            {
                "cityId": 52418,
                "cityName": "Los Andes",
                "departmentId": 52
            },
            {
                "cityId": 52427,
                "cityName": "Magüí",
                "departmentId": 52
            },
            {
                "cityId": 52435,
                "cityName": "Mallama",
                "departmentId": 52
            },
            {
                "cityId": 52473,
                "cityName": "Mosquera",
                "departmentId": 52
            },
            {
                "cityId": 5248,
                "cityName": "Nariño",
                "departmentId": 52
            },
            {
                "cityId": 5249,
                "cityName": "Olaya Herrera",
                "departmentId": 52
            },
            {
                "cityId": 52506,
                "cityName": "Ospina",
                "departmentId": 52
            },
            {
                "cityId": 5252,
                "cityName": "Francisco Pizarro",
                "departmentId": 52
            },
            {
                "cityId": 5254,
                "cityName": "Policarpa",
                "departmentId": 52
            },
            {
                "cityId": 5256,
                "cityName": "Potosí",
                "departmentId": 52
            },
            {
                "cityId": 52565,
                "cityName": "Providencia",
                "departmentId": 52
            },
            {
                "cityId": 52573,
                "cityName": "Puerres",
                "departmentId": 52
            },
            {
                "cityId": 52585,
                "cityName": "Pupiales",
                "departmentId": 52
            },
            {
                "cityId": 52612,
                "cityName": "Ricaurte",
                "departmentId": 52
            },
            {
                "cityId": 52621,
                "cityName": "Roberto Payán",
                "departmentId": 52
            },
            {
                "cityId": 52678,
                "cityName": "Samaniego",
                "departmentId": 52
            },
            {
                "cityId": 52683,
                "cityName": "Sandoná",
                "departmentId": 52
            },
            {
                "cityId": 52685,
                "cityName": "San Bernardo",
                "departmentId": 52
            },
            {
                "cityId": 52687,
                "cityName": "San Lorenzo",
                "departmentId": 52
            },
            {
                "cityId": 52693,
                "cityName": "San Pablo",
                "departmentId": 52
            },
            {
                "cityId": 52696,
                "cityName": "Santa Bárbara",
                "departmentId": 52
            },
            {
                "cityId": 5272,
                "cityName": "Sapuyes",
                "departmentId": 52
            },
            {
                "cityId": 52786,
                "cityName": "Taminango",
                "departmentId": 52
            },
            {
                "cityId": 52788,
                "cityName": "Tangua",
                "departmentId": 52
            },
            {
                "cityId": 52838,
                "cityName": "Túquerres",
                "departmentId": 52
            },
            {
                "cityId": 52885,
                "cityName": "Yacuanquer",
                "departmentId": 52
            },
            {
                "cityId": 63001,
                "cityName": "Armenia",
                "departmentId": 63
            },
            {
                "cityId": 63111,
                "cityName": "Buenavista",
                "departmentId": 63
            },
            {
                "cityId": 6319,
                "cityName": "Circasia",
                "departmentId": 63
            },
            {
                "cityId": 63212,
                "cityName": "Córdoba",
                "departmentId": 63
            },
            {
                "cityId": 63272,
                "cityName": "Filandia",
                "departmentId": 63
            },
            {
                "cityId": 63401,
                "cityName": "La Tebaida",
                "departmentId": 63
            },
            {
                "cityId": 6347,
                "cityName": "Montenegro",
                "departmentId": 63
            },
            {
                "cityId": 63548,
                "cityName": "Pijao",
                "departmentId": 63
            },
            {
                "cityId": 63594,
                "cityName": "Quimbaya",
                "departmentId": 63
            },
            {
                "cityId": 6369,
                "cityName": "Salento",
                "departmentId": 63
            },
            {
                "cityId": 66001,
                "cityName": "Pereira",
                "departmentId": 66
            },
            {
                "cityId": 66045,
                "cityName": "Apía",
                "departmentId": 66
            },
            {
                "cityId": 66075,
                "cityName": "Balboa",
                "departmentId": 66
            },
            {
                "cityId": 6617,
                "cityName": "Dosquebradas",
                "departmentId": 66
            },
            {
                "cityId": 66318,
                "cityName": "Guática",
                "departmentId": 66
            },
            {
                "cityId": 66383,
                "cityName": "La Celia",
                "departmentId": 66
            },
            {
                "cityId": 664,
                "cityName": "La Virginia",
                "departmentId": 66
            },
            {
                "cityId": 6644,
                "cityName": "Marsella",
                "departmentId": 66
            },
            {
                "cityId": 66456,
                "cityName": "Mistrató",
                "departmentId": 66
            },
            {
                "cityId": 66572,
                "cityName": "Pueblo Rico",
                "departmentId": 66
            },
            {
                "cityId": 66594,
                "cityName": "Quinchía",
                "departmentId": 66
            },
            {
                "cityId": 66687,
                "cityName": "Santuario",
                "departmentId": 66
            },
            {
                "cityId": 68001,
                "cityName": "Bucaramanga",
                "departmentId": 68
            },
            {
                "cityId": 68013,
                "cityName": "Aguada",
                "departmentId": 68
            },
            {
                "cityId": 6802,
                "cityName": "Albania",
                "departmentId": 68
            },
            {
                "cityId": 68051,
                "cityName": "Aratoca",
                "departmentId": 68
            },
            {
                "cityId": 68077,
                "cityName": "Barbosa",
                "departmentId": 68
            },
            {
                "cityId": 68079,
                "cityName": "Barichara",
                "departmentId": 68
            },
            {
                "cityId": 68081,
                "cityName": "Barrancabermeja",
                "departmentId": 68
            },
            {
                "cityId": 68092,
                "cityName": "Betulia",
                "departmentId": 68
            },
            {
                "cityId": 68101,
                "cityName": "Bolívar",
                "departmentId": 68
            },
            {
                "cityId": 68121,
                "cityName": "Cabrera",
                "departmentId": 68
            },
            {
                "cityId": 68132,
                "cityName": "California",
                "departmentId": 68
            },
            {
                "cityId": 68152,
                "cityName": "Carcasí",
                "departmentId": 68
            },
            {
                "cityId": 6816,
                "cityName": "Cepitá",
                "departmentId": 68
            },
            {
                "cityId": 68162,
                "cityName": "Cerrito",
                "departmentId": 68
            },
            {
                "cityId": 68167,
                "cityName": "Charalá",
                "departmentId": 68
            },
            {
                "cityId": 68169,
                "cityName": "Charta",
                "departmentId": 68
            },
            {
                "cityId": 68179,
                "cityName": "Chipatá",
                "departmentId": 68
            },
            {
                "cityId": 6819,
                "cityName": "Cimitarra",
                "departmentId": 68
            },
            {
                "cityId": 68207,
                "cityName": "Concepción",
                "departmentId": 68
            },
            {
                "cityId": 68209,
                "cityName": "Confines",
                "departmentId": 68
            },
            {
                "cityId": 68211,
                "cityName": "Contratación",
                "departmentId": 68
            },
            {
                "cityId": 68217,
                "cityName": "Coromoro",
                "departmentId": 68
            },
            {
                "cityId": 68229,
                "cityName": "Curití",
                "departmentId": 68
            },
            {
                "cityId": 68245,
                "cityName": "El Guacamayo",
                "departmentId": 68
            },
            {
                "cityId": 68255,
                "cityName": "El Playón",
                "departmentId": 68
            },
            {
                "cityId": 68264,
                "cityName": "Encino",
                "departmentId": 68
            },
            {
                "cityId": 68266,
                "cityName": "Enciso",
                "departmentId": 68
            },
            {
                "cityId": 68271,
                "cityName": "Florián",
                "departmentId": 68
            },
            {
                "cityId": 68276,
                "cityName": "Floridablanca",
                "departmentId": 68
            },
            {
                "cityId": 68296,
                "cityName": "Galán",
                "departmentId": 68
            },
            {
                "cityId": 68298,
                "cityName": "Gambita",
                "departmentId": 68
            },
            {
                "cityId": 68307,
                "cityName": "Girón",
                "departmentId": 68
            },
            {
                "cityId": 68318,
                "cityName": "Guaca",
                "departmentId": 68
            },
            {
                "cityId": 6832,
                "cityName": "Guadalupe",
                "departmentId": 68
            },
            {
                "cityId": 68322,
                "cityName": "Guapotá",
                "departmentId": 68
            },
            {
                "cityId": 68324,
                "cityName": "Guavatá",
                "departmentId": 68
            },
            {
                "cityId": 68327,
                "cityName": "Güepsa",
                "departmentId": 68
            },
            {
                "cityId": 68368,
                "cityName": "Jesús María",
                "departmentId": 68
            },
            {
                "cityId": 6837,
                "cityName": "Jordán",
                "departmentId": 68
            },
            {
                "cityId": 68377,
                "cityName": "La Belleza",
                "departmentId": 68
            },
            {
                "cityId": 68385,
                "cityName": "Landázuri",
                "departmentId": 68
            },
            {
                "cityId": 68397,
                "cityName": "La Paz",
                "departmentId": 68
            },
            {
                "cityId": 68406,
                "cityName": "Lebríja",
                "departmentId": 68
            },
            {
                "cityId": 68418,
                "cityName": "Los Santos",
                "departmentId": 68
            },
            {
                "cityId": 68425,
                "cityName": "Macaravita",
                "departmentId": 68
            },
            {
                "cityId": 68432,
                "cityName": "Málaga",
                "departmentId": 68
            },
            {
                "cityId": 68444,
                "cityName": "Matanza",
                "departmentId": 68
            },
            {
                "cityId": 68464,
                "cityName": "Mogotes",
                "departmentId": 68
            },
            {
                "cityId": 68468,
                "cityName": "Molagavita",
                "departmentId": 68
            },
            {
                "cityId": 68498,
                "cityName": "Ocamonte",
                "departmentId": 68
            },
            {
                "cityId": 685,
                "cityName": "Oiba",
                "departmentId": 68
            },
            {
                "cityId": 68502,
                "cityName": "Onzaga",
                "departmentId": 68
            },
            {
                "cityId": 68522,
                "cityName": "Palmar",
                "departmentId": 68
            },
            {
                "cityId": 68533,
                "cityName": "Páramo",
                "departmentId": 68
            },
            {
                "cityId": 68547,
                "cityName": "Piedecuesta",
                "departmentId": 68
            },
            {
                "cityId": 68549,
                "cityName": "Pinchote",
                "departmentId": 68
            },
            {
                "cityId": 68572,
                "cityName": "Puente Nacional",
                "departmentId": 68
            },
            {
                "cityId": 68615,
                "cityName": "Rionegro",
                "departmentId": 68
            },
            {
                "cityId": 68669,
                "cityName": "San Andrés",
                "departmentId": 68
            },
            {
                "cityId": 68679,
                "cityName": "San Gil",
                "departmentId": 68
            },
            {
                "cityId": 68682,
                "cityName": "San Joaquín",
                "departmentId": 68
            },
            {
                "cityId": 68686,
                "cityName": "San Miguel",
                "departmentId": 68
            },
            {
                "cityId": 68705,
                "cityName": "Santa Bárbara",
                "departmentId": 68
            },
            {
                "cityId": 68745,
                "cityName": "Simacota",
                "departmentId": 68
            },
            {
                "cityId": 68755,
                "cityName": "Socorro",
                "departmentId": 68
            },
            {
                "cityId": 6877,
                "cityName": "Suaita",
                "departmentId": 68
            },
            {
                "cityId": 68773,
                "cityName": "Sucre",
                "departmentId": 68
            },
            {
                "cityId": 6878,
                "cityName": "Suratá",
                "departmentId": 68
            },
            {
                "cityId": 6882,
                "cityName": "Tona",
                "departmentId": 68
            },
            {
                "cityId": 68861,
                "cityName": "Vélez",
                "departmentId": 68
            },
            {
                "cityId": 68867,
                "cityName": "Vetas",
                "departmentId": 68
            },
            {
                "cityId": 68872,
                "cityName": "Villanueva",
                "departmentId": 68
            },
            {
                "cityId": 68895,
                "cityName": "Zapatoca",
                "departmentId": 68
            },
            {
                "cityId": 70001,
                "cityName": "Sincelejo",
                "departmentId": 70
            },
            {
                "cityId": 7011,
                "cityName": "Buenavista",
                "departmentId": 70
            },
            {
                "cityId": 70124,
                "cityName": "Caimito",
                "departmentId": 70
            },
            {
                "cityId": 70204,
                "cityName": "Coloso",
                "departmentId": 70
            },
            {
                "cityId": 70221,
                "cityName": "Coveñas",
                "departmentId": 70
            },
            {
                "cityId": 7023,
                "cityName": "Chalán",
                "departmentId": 70
            },
            {
                "cityId": 70233,
                "cityName": "El Roble",
                "departmentId": 70
            },
            {
                "cityId": 70235,
                "cityName": "Galeras",
                "departmentId": 70
            },
            {
                "cityId": 70265,
                "cityName": "Guaranda",
                "departmentId": 70
            },
            {
                "cityId": 704,
                "cityName": "La Unión",
                "departmentId": 70
            },
            {
                "cityId": 70418,
                "cityName": "Los Palmitos",
                "departmentId": 70
            },
            {
                "cityId": 70429,
                "cityName": "Majagual",
                "departmentId": 70
            },
            {
                "cityId": 70473,
                "cityName": "Morroa",
                "departmentId": 70
            },
            {
                "cityId": 70508,
                "cityName": "Ovejas",
                "departmentId": 70
            },
            {
                "cityId": 70523,
                "cityName": "Palmito",
                "departmentId": 70
            },
            {
                "cityId": 70678,
                "cityName": "San Benito Abad",
                "departmentId": 70
            },
            {
                "cityId": 70708,
                "cityName": "San Marcos",
                "departmentId": 70
            },
            {
                "cityId": 70713,
                "cityName": "San Onofre",
                "departmentId": 70
            },
            {
                "cityId": 70717,
                "cityName": "San Pedro",
                "departmentId": 70
            },
            {
                "cityId": 70771,
                "cityName": "Sucre",
                "departmentId": 70
            },
            {
                "cityId": 70823,
                "cityName": "Tolú Viejo",
                "departmentId": 70
            },
            {
                "cityId": 73024,
                "cityName": "Alpujarra",
                "departmentId": 73
            },
            {
                "cityId": 73026,
                "cityName": "Alvarado",
                "departmentId": 73
            },
            {
                "cityId": 7303,
                "cityName": "Ambalema",
                "departmentId": 73
            },
            {
                "cityId": 73055,
                "cityName": "Armero",
                "departmentId": 73
            },
            {
                "cityId": 73067,
                "cityName": "Ataco",
                "departmentId": 73
            },
            {
                "cityId": 73124,
                "cityName": "Cajamarca",
                "departmentId": 73
            },
            {
                "cityId": 73168,
                "cityName": "Chaparral",
                "departmentId": 73
            },
            {
                "cityId": 732,
                "cityName": "Coello",
                "departmentId": 73
            },
            {
                "cityId": 73217,
                "cityName": "Coyaima",
                "departmentId": 73
            },
            {
                "cityId": 73226,
                "cityName": "Cunday",
                "departmentId": 73
            },
            {
                "cityId": 73236,
                "cityName": "Dolores",
                "departmentId": 73
            },
            {
                "cityId": 73268,
                "cityName": "Espinal",
                "departmentId": 73
            },
            {
                "cityId": 7327,
                "cityName": "Falan",
                "departmentId": 73
            },
            {
                "cityId": 73275,
                "cityName": "Flandes",
                "departmentId": 73
            },
            {
                "cityId": 73283,
                "cityName": "Fresno",
                "departmentId": 73
            },
            {
                "cityId": 73319,
                "cityName": "Guamo",
                "departmentId": 73
            },
            {
                "cityId": 73347,
                "cityName": "Herveo",
                "departmentId": 73
            },
            {
                "cityId": 73349,
                "cityName": "Honda",
                "departmentId": 73
            },
            {
                "cityId": 73352,
                "cityName": "Icononzo",
                "departmentId": 73
            },
            {
                "cityId": 73443,
                "cityName": "Mariquita",
                "departmentId": 73
            },
            {
                "cityId": 73449,
                "cityName": "Melgar",
                "departmentId": 73
            },
            {
                "cityId": 73461,
                "cityName": "Murillo",
                "departmentId": 73
            },
            {
                "cityId": 73483,
                "cityName": "Natagaima",
                "departmentId": 73
            },
            {
                "cityId": 73504,
                "cityName": "Ortega",
                "departmentId": 73
            },
            {
                "cityId": 7352,
                "cityName": "Palocabildo",
                "departmentId": 73
            },
            {
                "cityId": 73547,
                "cityName": "Piedras",
                "departmentId": 73
            },
            {
                "cityId": 73555,
                "cityName": "Planadas",
                "departmentId": 73
            },
            {
                "cityId": 73563,
                "cityName": "Prado",
                "departmentId": 73
            },
            {
                "cityId": 73585,
                "cityName": "Purificación",
                "departmentId": 73
            },
            {
                "cityId": 73616,
                "cityName": "Rio Blanco",
                "departmentId": 73
            },
            {
                "cityId": 73622,
                "cityName": "Roncesvalles",
                "departmentId": 73
            },
            {
                "cityId": 73624,
                "cityName": "Rovira",
                "departmentId": 73
            },
            {
                "cityId": 73671,
                "cityName": "Saldaña",
                "departmentId": 73
            },
            {
                "cityId": 73686,
                "cityName": "Santa Isabel",
                "departmentId": 73
            },
            {
                "cityId": 73861,
                "cityName": "Venadillo",
                "departmentId": 73
            },
            {
                "cityId": 7387,
                "cityName": "Villahermosa",
                "departmentId": 73
            },
            {
                "cityId": 73873,
                "cityName": "Villarrica",
                "departmentId": 73
            },
            {
                "cityId": 81065,
                "cityName": "Arauquita",
                "departmentId": 81
            },
            {
                "cityId": 8122,
                "cityName": "Cravo Norte",
                "departmentId": 81
            },
            {
                "cityId": 813,
                "cityName": "Fortul",
                "departmentId": 81
            },
            {
                "cityId": 81591,
                "cityName": "Puerto Rondón",
                "departmentId": 81
            },
            {
                "cityId": 81736,
                "cityName": "Saravena",
                "departmentId": 81
            },
            {
                "cityId": 81794,
                "cityName": "Tame",
                "departmentId": 81
            },
            {
                "cityId": 81001,
                "cityName": "Arauca",
                "departmentId": 81
            },
            {
                "cityId": 85001,
                "cityName": "Yopal",
                "departmentId": 85
            },
            {
                "cityId": 8501,
                "cityName": "Aguazul",
                "departmentId": 85
            },
            {
                "cityId": 85015,
                "cityName": "Chámeza",
                "departmentId": 85
            },
            {
                "cityId": 85125,
                "cityName": "Hato Corozal",
                "departmentId": 85
            },
            {
                "cityId": 85136,
                "cityName": "La Salina",
                "departmentId": 85
            },
            {
                "cityId": 85162,
                "cityName": "Monterrey",
                "departmentId": 85
            },
            {
                "cityId": 85263,
                "cityName": "Pore",
                "departmentId": 85
            },
            {
                "cityId": 85279,
                "cityName": "Recetor",
                "departmentId": 85
            },
            {
                "cityId": 853,
                "cityName": "Sabanalarga",
                "departmentId": 85
            },
            {
                "cityId": 85315,
                "cityName": "Sácama",
                "departmentId": 85
            },
            {
                "cityId": 8541,
                "cityName": "Tauramena",
                "departmentId": 85
            },
            {
                "cityId": 8543,
                "cityName": "Trinidad",
                "departmentId": 85
            },
            {
                "cityId": 8544,
                "cityName": "Villanueva",
                "departmentId": 85
            },
            {
                "cityId": 86001,
                "cityName": "Mocoa",
                "departmentId": 86
            },
            {
                "cityId": 86219,
                "cityName": "Colón",
                "departmentId": 86
            },
            {
                "cityId": 8632,
                "cityName": "Orito",
                "departmentId": 86
            },
            {
                "cityId": 86569,
                "cityName": "Puerto Caicedo",
                "departmentId": 86
            },
            {
                "cityId": 86571,
                "cityName": "Puerto Guzmán",
                "departmentId": 86
            },
            {
                "cityId": 86573,
                "cityName": "Leguízamo",
                "departmentId": 86
            },
            {
                "cityId": 86749,
                "cityName": "Sibundoy",
                "departmentId": 86
            },
            {
                "cityId": 86755,
                "cityName": "San Francisco",
                "departmentId": 86
            },
            {
                "cityId": 86757,
                "cityName": "San Miguel",
                "departmentId": 86
            },
            {
                "cityId": 8676,
                "cityName": "Santiago",
                "departmentId": 86
            },
            {
                "cityId": 91001,
                "cityName": "Leticia",
                "departmentId": 91
            },
            {
                "cityId": 91263,
                "cityName": "El Encanto",
                "departmentId": 91
            },
            {
                "cityId": 91405,
                "cityName": "La Chorrera",
                "departmentId": 91
            },
            {
                "cityId": 91407,
                "cityName": "La Pedrera",
                "departmentId": 91
            },
            {
                "cityId": 9143,
                "cityName": "La Victoria",
                "departmentId": 91
            },
            {
                "cityId": 91536,
                "cityName": "Puerto Arica",
                "departmentId": 91
            },
            {
                "cityId": 9154,
                "cityName": "Puerto Nariño",
                "departmentId": 91
            },
            {
                "cityId": 91669,
                "cityName": "Puerto Santander",
                "departmentId": 91
            },
            {
                "cityId": 91798,
                "cityName": "Tarapacá",
                "departmentId": 91
            },
            {
                "cityId": 94001,
                "cityName": "Inírida",
                "departmentId": 94
            },
            {
                "cityId": 94343,
                "cityName": "Barranco Minas",
                "departmentId": 94
            },
            {
                "cityId": 94663,
                "cityName": "Mapiripana",
                "departmentId": 94
            },
            {
                "cityId": 94883,
                "cityName": "San Felipe",
                "departmentId": 94
            },
            {
                "cityId": 94884,
                "cityName": "Puerto Colombia",
                "departmentId": 94
            },
            {
                "cityId": 94885,
                "cityName": "La Guadalupe",
                "departmentId": 94
            },
            {
                "cityId": 94886,
                "cityName": "Cacahual",
                "departmentId": 94
            },
            {
                "cityId": 94887,
                "cityName": "Pana Pana",
                "departmentId": 94
            },
            {
                "cityId": 97001,
                "cityName": "Mitú",
                "departmentId": 97
            },
            {
                "cityId": 97161,
                "cityName": "Carurú",
                "departmentId": 97
            },
            {
                "cityId": 97666,
                "cityName": "Taraira",
                "departmentId": 97
            },
            {
                "cityId": 97777,
                "cityName": "Papunahua",
                "departmentId": 97
            },
            {
                "cityId": 97889,
                "cityName": "Yavaraté",
                "departmentId": 97
            },
            {
                "cityId": 97511,
                "cityName": "Pacoa",
                "departmentId": 97
            },
            {
                "cityId": 94888,
                "cityName": "Morichal",
                "departmentId": 94
            },
            {
                "cityId": 99001,
                "cityName": "Puerto Carreño",
                "departmentId": 99
            },
            {
                "cityId": 99524,
                "cityName": "La Primavera",
                "departmentId": 99
            },
            {
                "cityId": 99624,
                "cityName": "Santa Rosalía",
                "departmentId": 99
            },
            {
                "cityId": 99773,
                "cityName": "Cumaribo",
                "departmentId": 99
            },
            {
                "cityId": 1861,
                "cityName": "San José del Fragua",
                "departmentId": 18
            },
            {
                "cityId": 5011,
                "cityName": "Barranca de Upía",
                "departmentId": 50
            },
            {
                "cityId": 68524,
                "cityName": "Palmas del Socorro",
                "departmentId": 68
            },
            {
                "cityId": 25662,
                "cityName": "San Juan de Río Seco",
                "departmentId": 25
            },
            {
                "cityId": 8372,
                "cityName": "Juan de Acosta",
                "departmentId": 8
            },
            {
                "cityId": 50287,
                "cityName": "Fuente de Oro",
                "departmentId": 50
            },
            {
                "cityId": 85325,
                "cityName": "San Luis de Gaceno",
                "departmentId": 85
            },
            {
                "cityId": 2725,
                "cityName": "El Litoral del San Juan",
                "departmentId": 27
            },
            {
                "cityId": 25843,
                "cityName": "Villa de San Diego de Ubate",
                "departmentId": 25
            },
            {
                "cityId": 13074,
                "cityName": "Barranco de Loba",
                "departmentId": 13
            },
            {
                "cityId": 15816,
                "cityName": "Togüí",
                "departmentId": 15
            },
            {
                "cityId": 13688,
                "cityName": "Santa Rosa del Sur",
                "departmentId": 13
            },
            {
                "cityId": 27135,
                "cityName": "El Cantón del San Pablo",
                "departmentId": 27
            },
            {
                "cityId": 15407,
                "cityName": "Villa de Leyva",
                "departmentId": 15
            },
            {
                "cityId": 47692,
                "cityName": "San Sebastián de Buenavista",
                "departmentId": 47
            },
            {
                "cityId": 15537,
                "cityName": "Paz de Río",
                "departmentId": 15
            },
            {
                "cityId": 133,
                "cityName": "Hatillo de Loba",
                "departmentId": 13
            },
            {
                "cityId": 4766,
                "cityName": "Sabanas de San Angel",
                "departmentId": 47
            },
            {
                "cityId": 95015,
                "cityName": "Calamar",
                "departmentId": 95
            },
            {
                "cityId": 20614,
                "cityName": "Río de Oro",
                "departmentId": 20
            },
            {
                "cityId": 5665,
                "cityName": "San Pedro de Uraba",
                "departmentId": 5
            },
            {
                "cityId": 95001,
                "cityName": "San José del Guaviare",
                "departmentId": 95
            },
            {
                "cityId": 15693,
                "cityName": "Santa Rosa de Viterbo",
                "departmentId": 15
            },
            {
                "cityId": 19698,
                "cityName": "Santander de Quilichao",
                "departmentId": 19
            },
            {
                "cityId": 952,
                "cityName": "Miraflores",
                "departmentId": 95
            },
            {
                "cityId": 5042,
                "cityName": "Santafé de Antioquia",
                "departmentId": 5
            },
            {
                "cityId": 5068,
                "cityName": "San Carlos de Guaroa",
                "departmentId": 50
            },
            {
                "cityId": 852,
                "cityName": "Palmar de Varela",
                "departmentId": 8
            },
            {
                "cityId": 5686,
                "cityName": "Santa Rosa de Osos",
                "departmentId": 5
            },
            {
                "cityId": 5647,
                "cityName": "San Andrés de Cuerquía",
                "departmentId": 5
            },
            {
                "cityId": 73854,
                "cityName": "Valle de San Juan",
                "departmentId": 73
            },
            {
                "cityId": 68689,
                "cityName": "San Vicente de Chucurpi",
                "departmentId": 68
            },
            {
                "cityId": 68684,
                "cityName": "San José de Miranda",
                "departmentId": 68
            },
            {
                "cityId": 88564,
                "cityName": "Providencia",
                "departmentId": 88
            },
            {
                "cityId": 66682,
                "cityName": "Santa Rosa de Cabal",
                "departmentId": 66
            },
            {
                "cityId": 25328,
                "cityName": "Guayabal de Siquima",
                "departmentId": 25
            },
            {
                "cityId": 18094,
                "cityName": "Belén de Los Andaquies",
                "departmentId": 18
            },
            {
                "cityId": 8525,
                "cityName": "Paz de Ariporo",
                "departmentId": 85
            },
            {
                "cityId": 6872,
                "cityName": "Santa Helena del Opón",
                "departmentId": 68
            },
            {
                "cityId": 15681,
                "cityName": "San Pablo de Borbur",
                "departmentId": 15
            },
            {
                "cityId": 4442,
                "cityName": "La Jagua del Pilar",
                "departmentId": 44
            },
            {
                "cityId": 204,
                "cityName": "La Jagua de Ibirico",
                "departmentId": 20
            },
            {
                "cityId": 70742,
                "cityName": "San Luis de Sincé",
                "departmentId": 70
            },
            {
                "cityId": 15667,
                "cityName": "San Luis de Gaceno",
                "departmentId": 15
            },
            {
                "cityId": 13244,
                "cityName": "El Carmen de Bolívar",
                "departmentId": 13
            },
            {
                "cityId": 27245,
                "cityName": "El Carmen de Atrato",
                "departmentId": 27
            },
            {
                "cityId": 70702,
                "cityName": "San Juan de Betulia",
                "departmentId": 70
            },
            {
                "cityId": 47545,
                "cityName": "Pijiño del Carmen",
                "departmentId": 47
            },
            {
                "cityId": 5873,
                "cityName": "Vigía del Fuerte",
                "departmentId": 5
            },
            {
                "cityId": 13667,
                "cityName": "San Martín de Loba",
                "departmentId": 13
            },
            {
                "cityId": 1303,
                "cityName": "Altos del Rosario",
                "departmentId": 13
            },
            {
                "cityId": 73148,
                "cityName": "Carmen de Apicala",
                "departmentId": 73
            },
            {
                "cityId": 25645,
                "cityName": "San Antonio del Tequendama",
                "departmentId": 25
            },
            {
                "cityId": 68655,
                "cityName": "Sabana de Torres",
                "departmentId": 68
            },
            {
                "cityId": 95025,
                "cityName": "El Retorno",
                "departmentId": 95
            },
            {
                "cityId": 23682,
                "cityName": "San José de Uré",
                "departmentId": 23
            },
            {
                "cityId": 52694,
                "cityName": "San Pedro de Cartago",
                "departmentId": 52
            },
            {
                "cityId": 8137,
                "cityName": "Campo de La Cruz",
                "departmentId": 8
            },
            {
                "cityId": 50683,
                "cityName": "San Juan de Arama",
                "departmentId": 50
            },
            {
                "cityId": 5658,
                "cityName": "San José de La Montaña",
                "departmentId": 5
            },
            {
                "cityId": 1815,
                "cityName": "Cartagena del Chairá",
                "departmentId": 18
            },
            {
                "cityId": 2766,
                "cityName": "San José del Palmar",
                "departmentId": 27
            },
            {
                "cityId": 25001,
                "cityName": "Agua de Dios",
                "departmentId": 25
            },
            {
                "cityId": 13655,
                "cityName": "San Jacinto del Cauca",
                "departmentId": 13
            },
            {
                "cityId": 41668,
                "cityName": "San Agustín",
                "departmentId": 41
            },
            {
                "cityId": 52258,
                "cityName": "El Tablón de Gómez",
                "departmentId": 52
            },
            {
                "cityId": 88001,
                "cityName": "San Andrés",
                "departmentId": 88
            },
            {
                "cityId": 15664,
                "cityName": "San José de Pare",
                "departmentId": 15
            },
            {
                "cityId": 86865,
                "cityName": "Valle de Guamez",
                "departmentId": 86
            },
            {
                "cityId": 1367,
                "cityName": "San Pablo de Borbur",
                "departmentId": 13
            },
            {
                "cityId": 7082,
                "cityName": "Santiago de Tolú",
                "departmentId": 70
            },
            {
                "cityId": 11001,
                "cityName": "Bogotá D.C.",
                "departmentId": 11
            },
            {
                "cityId": 25154,
                "cityName": "Carmen de Carupa",
                "departmentId": 25
            },
            {
                "cityId": 23189,
                "cityName": "Ciénaga de Oro",
                "departmentId": 23
            },
            {
                "cityId": 5659,
                "cityName": "San Juan de Urabá",
                "departmentId": 5
            },
            {
                "cityId": 4465,
                "cityName": "San Juan del Cesar",
                "departmentId": 44
            },
            {
                "cityId": 68235,
                "cityName": "El Carmen de Chucurí",
                "departmentId": 68
            },
            {
                "cityId": 5148,
                "cityName": "El Carmen de Viboral",
                "departmentId": 5
            },
            {
                "cityId": 66088,
                "cityName": "Belén de Umbría",
                "departmentId": 66
            },
            {
                "cityId": 27086,
                "cityName": "Belén de Bajira",
                "departmentId": 27
            },
            {
                "cityId": 68855,
                "cityName": "Valle de San José",
                "departmentId": 68
            },
            {
                "cityId": 73678,
                "cityName": "San Luis",
                "departmentId": 73
            },
            {
                "cityId": 15676,
                "cityName": "San Miguel de Sema",
                "departmentId": 15
            },
            {
                "cityId": 73675,
                "cityName": "San Antonio",
                "departmentId": 73
            },
            {
                "cityId": 68673,
                "cityName": "San Benito",
                "departmentId": 68
            },
            {
                "cityId": 25862,
                "cityName": "Vergara",
                "departmentId": 25
            },
            {
                "cityId": 23678,
                "cityName": "San Carlos",
                "departmentId": 23
            },
            {
                "cityId": 9153,
                "cityName": "Puerto Alegría",
                "departmentId": 91
            },
            {
                "cityId": 68344,
                "cityName": "Hato",
                "departmentId": 68
            },
            {
                "cityId": 13654,
                "cityName": "San Jacinto",
                "departmentId": 13
            },
            {
                "cityId": 19693,
                "cityName": "San Sebastián",
                "departmentId": 19
            },
            {
                "cityId": 5649,
                "cityName": "San Carlos",
                "departmentId": 5
            },
            {
                "cityId": 15837,
                "cityName": "Tuta",
                "departmentId": 15
            },
            {
                "cityId": 54743,
                "cityName": "Silos",
                "departmentId": 54
            },
            {
                "cityId": 54125,
                "cityName": "Cácota",
                "departmentId": 54
            },
            {
                "cityId": 7625,
                "cityName": "El Dovio",
                "departmentId": 76
            },
            {
                "cityId": 5482,
                "cityName": "Toledo",
                "departmentId": 54
            },
            {
                "cityId": 76622,
                "cityName": "Roldanillo",
                "departmentId": 76
            },
            {
                "cityId": 5448,
                "cityName": "Mutiscua",
                "departmentId": 54
            },
            {
                "cityId": 76054,
                "cityName": "Argelia",
                "departmentId": 76
            },
            {
                "cityId": 54261,
                "cityName": "El Zulia",
                "departmentId": 54
            },
            {
                "cityId": 5466,
                "cityName": "Salazar",
                "departmentId": 54
            },
            {
                "cityId": 76736,
                "cityName": "Sevilla",
                "departmentId": 76
            },
            {
                "cityId": 76895,
                "cityName": "Zarzal",
                "departmentId": 76
            },
            {
                "cityId": 54223,
                "cityName": "Cucutilla",
                "departmentId": 54
            },
            {
                "cityId": 76248,
                "cityName": "El Cerrito",
                "departmentId": 76
            },
            {
                "cityId": 76147,
                "cityName": "Cartago",
                "departmentId": 76
            },
            {
                "cityId": 76122,
                "cityName": "Caicedonia",
                "departmentId": 76
            },
            {
                "cityId": 54553,
                "cityName": "Puerto Santander",
                "departmentId": 54
            },
            {
                "cityId": 54313,
                "cityName": "Gramalote",
                "departmentId": 54
            },
            {
                "cityId": 76246,
                "cityName": "El Cairo",
                "departmentId": 76
            },
            {
                "cityId": 5425,
                "cityName": "El Tarra",
                "departmentId": 54
            },
            {
                "cityId": 764,
                "cityName": "La Unión",
                "departmentId": 76
            },
            {
                "cityId": 76606,
                "cityName": "Restrepo",
                "departmentId": 76
            },
            {
                "cityId": 548,
                "cityName": "Teorama",
                "departmentId": 54
            },
            {
                "cityId": 76233,
                "cityName": "Dagua",
                "departmentId": 76
            },
            {
                "cityId": 54051,
                "cityName": "Arboledas",
                "departmentId": 54
            },
            {
                "cityId": 76318,
                "cityName": "Guacarí",
                "departmentId": 76
            },
            {
                "cityId": 54418,
                "cityName": "Lourdes",
                "departmentId": 54
            },
            {
                "cityId": 76041,
                "cityName": "Ansermanuevo",
                "departmentId": 76
            },
            {
                "cityId": 54099,
                "cityName": "Bochalema",
                "departmentId": 54
            },
            {
                "cityId": 76113,
                "cityName": "Bugalagrande",
                "departmentId": 76
            },
            {
                "cityId": 54206,
                "cityName": "Convención",
                "departmentId": 54
            },
            {
                "cityId": 54344,
                "cityName": "Hacarí",
                "departmentId": 54
            },
            {
                "cityId": 76403,
                "cityName": "La Victoria",
                "departmentId": 76
            },
            {
                "cityId": 54347,
                "cityName": "Herrán",
                "departmentId": 54
            },
            {
                "cityId": 76306,
                "cityName": "Ginebra",
                "departmentId": 76
            },
            {
                "cityId": 76892,
                "cityName": "Yumbo",
                "departmentId": 76
            },
            {
                "cityId": 76497,
                "cityName": "Obando",
                "departmentId": 76
            },
            {
                "cityId": 5481,
                "cityName": "Tibú",
                "departmentId": 54
            },
            {
                "cityId": 54673,
                "cityName": "San Cayetano",
                "departmentId": 54
            },
            {
                "cityId": 5467,
                "cityName": "San Calixto",
                "departmentId": 54
            },
            {
                "cityId": 761,
                "cityName": "Bolívar",
                "departmentId": 76
            },
            {
                "cityId": 54398,
                "cityName": "La Playa",
                "departmentId": 54
            },
            {
                "cityId": 76001,
                "cityName": "Cali",
                "departmentId": 76
            },
            {
                "cityId": 7667,
                "cityName": "San Pedro",
                "departmentId": 76
            },
            {
                "cityId": 76111,
                "cityName": "Guadalajara de Buga",
                "departmentId": 76
            },
            {
                "cityId": 54172,
                "cityName": "Chinácota",
                "departmentId": 54
            },
            {
                "cityId": 54599,
                "cityName": "Ragonvalia",
                "departmentId": 54
            },
            {
                "cityId": 54385,
                "cityName": "La Esperanza",
                "departmentId": 54
            },
            {
                "cityId": 54874,
                "cityName": "Villa del Rosario",
                "departmentId": 54
            },
            {
                "cityId": 54174,
                "cityName": "Chitagá",
                "departmentId": 54
            },
            {
                "cityId": 76126,
                "cityName": "Calima",
                "departmentId": 76
            },
            {
                "cityId": 5472,
                "cityName": "Sardinata",
                "departmentId": 54
            },
            {
                "cityId": 76036,
                "cityName": "Andalucía",
                "departmentId": 76
            },
            {
                "cityId": 76563,
                "cityName": "Pradera",
                "departmentId": 76
            },
            {
                "cityId": 54003,
                "cityName": "Abrego",
                "departmentId": 54
            },
            {
                "cityId": 54405,
                "cityName": "Los Patios",
                "departmentId": 54
            },
            {
                "cityId": 54498,
                "cityName": "Ocaña",
                "departmentId": 54
            },
            {
                "cityId": 54109,
                "cityName": "Bucarasica",
                "departmentId": 54
            },
            {
                "cityId": 7689,
                "cityName": "Yotoco",
                "departmentId": 76
            },
            {
                "cityId": 7652,
                "cityName": "Palmira",
                "departmentId": 76
            },
            {
                "cityId": 76616,
                "cityName": "Riofrío",
                "departmentId": 76
            },
            {
                "cityId": 5468,
                "cityName": "Santiago",
                "departmentId": 54
            },
            {
                "cityId": 7602,
                "cityName": "Alcalá",
                "departmentId": 76
            },
            {
                "cityId": 76863,
                "cityName": "Versalles",
                "departmentId": 76
            },
            {
                "cityId": 54377,
                "cityName": "Labateca",
                "departmentId": 54
            },
            {
                "cityId": 54128,
                "cityName": "Cachirá",
                "departmentId": 54
            },
            {
                "cityId": 54871,
                "cityName": "Villa Caro",
                "departmentId": 54
            },
            {
                "cityId": 54239,
                "cityName": "Durania",
                "departmentId": 54
            },
            {
                "cityId": 76243,
                "cityName": "El Águila",
                "departmentId": 76
            },
            {
                "cityId": 76823,
                "cityName": "Toro",
                "departmentId": 76
            },
            {
                "cityId": 7613,
                "cityName": "Candelaria",
                "departmentId": 76
            },
            {
                "cityId": 76377,
                "cityName": "La Cumbre",
                "departmentId": 76
            },
            {
                "cityId": 76845,
                "cityName": "Ulloa",
                "departmentId": 76
            },
            {
                "cityId": 76828,
                "cityName": "Trujillo",
                "departmentId": 76
            },
            {
                "cityId": 76869,
                "cityName": "Vijes",
                "departmentId": 76
            },
            {
                "cityId": 68176,
                "cityName": "Chimá",
                "departmentId": 68
            },
            {
                "cityId": 7067,
                "cityName": "Sampués",
                "departmentId": 70
            },
            {
                "cityId": 85225,
                "cityName": "Nunchía",
                "departmentId": 85
            },
            {
                "cityId": 54518,
                "cityName": "Pamplona",
                "departmentId": 54
            },
            {
                "cityId": 25019,
                "cityName": "Albán",
                "departmentId": 25
            },
            {
                "cityId": 23466,
                "cityName": "Montelíbano",
                "departmentId": 23
            },
            {
                "cityId": 86568,
                "cityName": "Puerto Asís",
                "departmentId": 86
            },
            {
                "cityId": 70215,
                "cityName": "Corozal",
                "departmentId": 70
            },
            {
                "cityId": 5211,
                "cityName": "Buesaco",
                "departmentId": 52
            },
            {
                "cityId": 85139,
                "cityName": "Maní",
                "departmentId": 85
            },
            {
                "cityId": 13268,
                "cityName": "El Peñón",
                "departmentId": 13
            },
            {
                "cityId": 76834,
                "cityName": "Tuluá",
                "departmentId": 76
            },
            {
                "cityId": 73152,
                "cityName": "Casabianca",
                "departmentId": 73
            },
            {
                "cityId": 2504,
                "cityName": "Anolaima",
                "departmentId": 25
            },
            {
                "cityId": 25175,
                "cityName": "Chía",
                "departmentId": 25
            },
            {
                "cityId": 52835,
                "cityName": "San Andrés de Tumaco",
                "departmentId": 52
            },
            {
                "cityId": 1846,
                "cityName": "Milán",
                "departmentId": 18
            },
            {
                "cityId": 68147,
                "cityName": "Capitanejo",
                "departmentId": 68
            },
            {
                "cityId": 73043,
                "cityName": "Anzoátegui",
                "departmentId": 73
            },
            {
                "cityId": 76275,
                "cityName": "Florida",
                "departmentId": 76
            },
            {
                "cityId": 8606,
                "cityName": "Repelón",
                "departmentId": 8
            },
            {
                "cityId": 5284,
                "cityName": "Frontino",
                "departmentId": 5
            },
            {
                "cityId": 25258,
                "cityName": "El Peñón",
                "departmentId": 25
            },
            {
                "cityId": 5452,
                "cityName": "Pamplonita",
                "departmentId": 54
            },
            {
                "cityId": 9146,
                "cityName": "Miriti Paraná",
                "departmentId": 91
            },
            {
                "cityId": 854,
                "cityName": "Támara",
                "departmentId": 85
            },
            {
                "cityId": 15806,
                "cityName": "Tibasosa",
                "departmentId": 15
            },
            {
                "cityId": 19517,
                "cityName": "Páez",
                "departmentId": 19
            },
            {
                "cityId": 73001,
                "cityName": "Ibagué",
                "departmentId": 73
            },
            {
                "cityId": 8573,
                "cityName": "Puerto Colombia",
                "departmentId": 8
            },
            {
                "cityId": 52083,
                "cityName": "Belén",
                "departmentId": 52
            },
            {
                "cityId": 25758,
                "cityName": "Sopó",
                "departmentId": 25
            },
            {
                "cityId": 2715,
                "cityName": "Carmen del Darien",
                "departmentId": 27
            },
            {
                "cityId": 25299,
                "cityName": "Gama",
                "departmentId": 25
            },
            {
                "cityId": 25718,
                "cityName": "Sasaima",
                "departmentId": 25
            },
            {
                "cityId": 5224,
                "cityName": "Chachagüí",
                "departmentId": 52
            },
            {
                "cityId": 54001,
                "cityName": "Cúcuta",
                "departmentId": 54
            },
            {
                "cityId": 13001,
                "cityName": "Cartagena",
                "departmentId": 13
            },
            {
                "cityId": 5313,
                "cityName": "Granada",
                "departmentId": 5
            },
            {
                "cityId": 4772,
                "cityName": "Santa Bárbara de Pinto",
                "departmentId": 47
            },
            {
                "cityId": 13442,
                "cityName": "María la Baja",
                "departmentId": 13
            },
            {
                "cityId": 1841,
                "cityName": "La Montañita",
                "departmentId": 18
            },
            {
                "cityId": 18753,
                "cityName": "San Vicente del Caguán",
                "departmentId": 18
            },
            {
                "cityId": 6825,
                "cityName": "El Peñón",
                "departmentId": 68
            },
            {
                "cityId": 5364,
                "cityName": "Jardín",
                "departmentId": 5
            },
            {
                "cityId": 76364,
                "cityName": "Jamundí",
                "departmentId": 76
            },
            {
                "cityId": 27787,
                "cityName": "Tadó",
                "departmentId": 27
            },
            {
                "cityId": 8523,
                "cityName": "Orocué",
                "departmentId": 85
            },
            {
                "cityId": 73411,
                "cityName": "Líbano",
                "departmentId": 73
            },
            {
                "cityId": 25885,
                "cityName": "Yacopí",
                "departmentId": 25
            },
            {
                "cityId": 6313,
                "cityName": "Calarcá",
                "departmentId": 63
            },
            {
                "cityId": 5756,
                "cityName": "Sonsón",
                "departmentId": 5
            },
            {
                "cityId": 54245,
                "cityName": "El Carmen",
                "departmentId": 54
            },
            {
                "cityId": 73408,
                "cityName": "Lérida",
                "departmentId": 73
            },
            {
                "cityId": 2335,
                "cityName": "La Apartada",
                "departmentId": 23
            },
            {
                "cityId": 1362,
                "cityName": "San Cristóbal",
                "departmentId": 13
            },
            {
                "cityId": 2529,
                "cityName": "Fusagasugá",
                "departmentId": 25
            },
            {
                "cityId": 13894,
                "cityName": "Zambrano",
                "departmentId": 13
            },
            {
                "cityId": 15403,
                "cityName": "La Uvita",
                "departmentId": 15
            },
            {
                "cityId": 25899,
                "cityName": "Zipaquirá",
                "departmentId": 25
            },
            {
                "cityId": 63302,
                "cityName": "Génova",
                "departmentId": 63
            },
            {
                "cityId": 7377,
                "cityName": "Suárez",
                "departmentId": 73
            },
            {
                "cityId": 5015,
                "cityName": "Castilla la Nueva",
                "departmentId": 50
            },
            {
                "cityId": 15087,
                "cityName": "Belén",
                "departmentId": 15
            },
            {
                "cityId": 2781,
                "cityName": "Unión Panamericana",
                "departmentId": 27
            },
            {
                "cityId": 4757,
                "cityName": "Pueblo Viejo",
                "departmentId": 47
            },
            {
                "cityId": 86885,
                "cityName": "Villagarzón",
                "departmentId": 86
            },
            {
                "cityId": 25269,
                "cityName": "Facatativá",
                "departmentId": 25
            },
            {
                "cityId": 2358,
                "cityName": "Puerto Libertador",
                "departmentId": 23
            },
            {
                "cityId": 17444,
                "cityName": "Marquetalia",
                "departmentId": 17
            },
            {
                "cityId": 52051,
                "cityName": "Arboleda",
                "departmentId": 52
            },
            {
                "cityId": 76109,
                "cityName": "Buenaventura",
                "departmentId": 76
            },
            {
                "cityId": 47189,
                "cityName": "Ciénaga",
                "departmentId": 47
            },
            {
                "cityId": 856,
                "cityName": "Ponedera",
                "departmentId": 8
            }
        ],
        {
            ignoreDuplicates: true,
        }
    ).then(() => console.log("Cities were successfully created"));
}

module.exports = {
    createCities,
};