const wordArrays = {
    premierLeague : [
        {
            club: 'arsenal',
            hint: '13 Premier league titles'
        },
        {
            club: 'bournemouth',
            hint: 'club nickname: cherry'
        },
        {
            club: 'chelsea',
            hint: 'stadium name: Stamford bridge'
        },
        {
            club: 'aston-villa',
            hint: 'club from Birmingham'
        },
        {
            club: 'brighton',
            hint: 'coach: Roberto De Zerbi'
        },
        {
            club: 'fulham',
            hint: 'club founded in 1879'
        },
        {
            club: 'liverpool',
            hint: '6 league of champions titles'
        },
        {
            club: 'leeds',
            hint: 'captain: Liam Cooper'
        },
        {
            club: 'manchester-united',
            hint: 'the most trophy club in England'
        },
        {
            club: 'manchester-city',
            hint: 'coach: Pep Gvardiola'
        },
        {
            club: 'tottenham',
            hint: 'nickname: The Lilywhites'
        },
        {
            club: 'everton',
            hint: 'location: Liverpool'
        },
        {
            club: 'wolves',
            hint: 'stadium: Molineux'
        },
        {
            club: 'newcastle',
            hint: '4 times Premier League winners'
        },
        {
            club: 'brentford',
            hint: 'captain: Pontus Jansson'
        },
        {
            club: 'crystal-palace',
            hint: 'coach: Patrick Viera'
        },
        {
            club: 'leicester',
            hint: 'Premier League title winners of 2015-16'
        },
        {
            club: 'southampton',
            hint: 'nickname: The Saints'
        },
        {
            club: 'west-ham',
            hint: 'stadium: Olympic'
        },
        {
            club: 'nottingham-forest',
            hint: 'two times CL winners'
        },
    ],

    laLiga : [
        {
            club: 'barcelona',
            hint: '5 UEFA Champions League Titles'
        },
        {
            club: 'real-madrid',
            hint: 'club founded: 1902'
        },
        {
            club: 'real-sociedad',
            hint: 'captain: Mikel Oyarzabal'
        },
        {
            club: 'atletico-madrid',
            hint: 'stadium: Metropolitano'
        },
        {
            club: 'athletic-bilbao',
            hint: 'coach: Ernesto Valverde'
        },
        {
            club: 'betis',
            hint: '1 La Liga title (1935)'
        },
        {
            club: 'villarreal',
            hint: 'captain: Raul Albiol'
        },
        {
            club: 'rayo-vallecano',
            hint: 'stadium: Campo de Futbol de Vallecas'
        },
        {
            club: 'osasuna',
            hint: 'location: Pamplona'
        },
        {
            club: 'valencia',
            hint: 'coach: Gennaro Gattuso'
        },
        {
            club: 'mallorca',
            hint: '0 La Liga titles'
        },
        {
            club: 'girona',
            hint: 'Segunda B Winners (2007/08)'
        },
        {
            club: 'almeria',
            hint: 'captain: Cesar de la Hoz'
        },
        {
            club: 'getafe',
            hint: 'coach: Quique Sánchez Flores'
        },
        {
            club: 'valladolid',
            hint: 'Club Owner: Ronaldo Nazario'
        },
        {
            club: 'espanyol',
            hint: '4 times Copa Del Rey Winners'
        },
        {
            club: 'celta-vigo',
            hint: 'captain: Hugo Mallo'
        },
        {
            club: 'sevilla',
            hint: '6 times Europa League winners'
        },
        {
            club: 'cadiz',
            hint: 'stadium: Estadio Nuevo Mirandilla'
        },
        {
            club: 'elche',
            hint: 'club founded: 1923'
        },
    ],
    seriaA: [
        {
            club: 'napoli',
            hint: 'Stadium: Diego Armando Maradona'
        },
        {
            club: 'inter',
            hint: 'coach: Simone Inzaghi'
        },
        {
            club: 'juventus',
            hint: 'Club founded 1897'
        },
        {
            club: 'milan',
            hint: 'Seven Champions League Titles'
        },
        {
            club: 'lazio',
            hint: '2 Times Seria A Winners'
        },
        {
            club: 'roma',
            hint: '9 Coppa Italia Titles'
        },
        {
            club: 'atalanta',
            hint: 'Stadium: Gewiss Stadium'
        },
        {
            club: 'udinese',
            hint: 'Nickname: Bianconeri'
        },
        {
            club: 'torino',
            hint: 'Coach: Ivan Juric'
        },
        {
            club: 'fiorentina',
            hint: '1960/61 UEFA Cup Winners'
        },
        {
            club: 'bologna',
            hint: 'Club founded 1909'
        },
        {
            club: 'lecce',
            hint: 'Stadium: Via Del Mare'
        },
        {
            club: 'empoli',
            hint: 'Captain: Filippo Bandinelli'
        },
        {
            club: 'salernitana',
            hint: 'Coach: Davide Nicola'
        },
        {
            club: 'monza',
            hint: '4 Times Coppa Italia Seria C Winners'
        },
        {
            club: 'sassuolo',
            hint: 'Stadium: Citta Del Tricolore'
        },
        {
            club: 'spezia',
            hint: 'Club founded 1906'
        },
        {
            club: 'sampdoria',
            hint: '1992 lost in final UEFA Cl'
        },
        {
            club: 'cremonese',
            hint: 'Coach: Massimiliano Alvini'
        },
        {
            club: 'verona',
            hint: '1984/85 Seria A Winners'
        },
    ],
    bundesLiga: [
        {
            club: 'bayern',
            hint: '32 Times Bundesleague Winners'
        },
        {
            club: 'freiburg',
            hint: 'Stadium: Europa-park'
        },
        {
            club: 'leipzig',
            hint: 'Coach: Marco Rose'
        },
        {
            club: 'eintracht-frankfurt',
            hint: '5 Times DFB Pokal Winners'
        },
        {
            club: 'union-berlin',
            hint: 'Club founded 1966'
        },
        {
            club: 'borussia-dortmund',
            hint: '1996/97 UEFA Champions League Winners'
        },
        {
            club: 'wolfsburg',
            hint: '2008/09 Bundesliga Winners'
        },
        {
            club: 'borussia-monchengladbach',
            hint: 'Coach: Daniel Farke'
        },
        {
            club: 'werder-bremen',
            hint: 'Captain: Marco Friedl'
        },
        {
            club: 'mainz',
            hint: 'Stadium: MEWA Arena'
        },
        {
            club: 'hoffenheim',
            hint: 'Club founded 1899'
        },
        {
            club: 'beyer-leverkusen',
            hint: '3 Times Bundesliga Winners'
        },
        {
            club: 'koln',
            hint: 'Stadium: RheinEnergie Stadion'
        },
        {
            club: 'augsburg',
            hint: 'Coach: Enrico Maaßen'
        },
        {
            club: 'hertha',
            hint: 'Captain: Marvin Plattenhardt'
        },
        {
            club: 'stuttgart',
            hint: '2 times Bundesliga Winners'
        },
        {
            club: 'bochum',
            hint: 'stadium: Vonovia Ruhrstadion'
        },
        {
            club: 'schalke',
            hint: '7 times Bundesliga Winners'
        },
    ]
};