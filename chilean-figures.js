// Chilean figures data
const chileanFigures = [
  // Literary Figures
  {
    name: "Gabriela Mistral",
    image: "images/gabriela-mistral.jpeg",
    zodiac: "Aries (April 7, 1889)",
    description: "The eternal spinster, this bisexual vixen wrote some of the most enduring lines in Spanish-language poetry while looking stylish every step of the way. A friend in self-exile with Stefan Zweig in Brazil, she Christened Chile her 'country of absence'.",
    traits: ["Composed demeanor", "Poetic expression", "Moderate politics", "Deep passion"],
    category: "Literary Figures"
  },
  {
    name: "Isabel Allende",
    image: "images/isabel-allende.jpeg",
    zodiac: "Leo (August 2, 1942)",
    description: "In the grand tradition of Corín Tellado, Allende writes to inspire the Latin American masses. Her fashion style is Miami billionaire. Like most people in the god-forsaken state of Florida, she has slowly turned anti-woke.",
    traits: ["Expressive demeanor", "Popular expression", "Traditional politics", "Steady passion"],
    category: "Literary Figures"
  },
  {
    name: "Juan Luis Martínez",
    image: "images/juan-luis-martinez.jpeg",
    zodiac: "Gemini (June 7, 1942)",
    description: "The reclusive avant-garde poet who never showed his face in public and published books sold by himself for 100 dollars each. Once you open one of them, your sense of reality is bound to shift. A hipster's hipster's hipster Chilean before hipster's hipster's hipsters were a thing.",
    traits: ["Reserved demeanor", "Experimental expression", "Artistic politics", "Cerebral passion"],
    category: "Literary Figures"
  },
  {
    name: "María Luisa Bombal",
    image: "images/maria-luisa-bombal.jpeg",
    zodiac: "Gemini (June 8, 1910)",
    description: "A modernist literary powerhouse whose surrealist stories of women's inner lives were decades ahead of their time. Her themes of female desire and alienation seeped into her life when she shot and wounded a former ex-lover point-blank in downtown Santiago, Agustinas with Bandera.",
    traits: ["Intense demeanor", "Surreal expression", "Artistic politics", "Intense passion"],
    category: "Literary Figures"
  },
  {
    name: "Nicanor Parra",
    image: "images/nicanor-parra.jpeg",
    zodiac: "Virgo (September 5, 1914)",
    description: "The anti-poet who lived to 103 and trolled the literary establishment with books of unusual humor and beauty. Defined his work as 'a roller coaster ride' that will leave the reader 'bleeding from their nose and mouth'. Wrote the best translation of \"King Lear\" in existence.",
    traits: ["Provocative demeanor", "Ironic expression", "Chaotic politics", "Playful passion"],
    category: "Literary Figures"
  },
  {
    name: "José Donoso",
    image: "images/jose-donoso.jpeg",
    zodiac: "Libra (October 5, 1924)",
    description: "The bourgeois asshole novelist who aired all of Chile's dirty aristocratic laundry. Wrote a surrealist masterpiece so complex it's the ultimate 'I've read it but I didn't understand it' book. Lived in self-imposed exile because Chile wasn't literary enough for him. His diary was so mean it lead his daughter to suicide.",
    traits: ["Reserved demeanor", "Complex expression", "Traditional politics", "Cerebral passion"],
    category: "Literary Figures"
  },
  {
    name: "Rodrigo Lira",
    image: "images/rodrigo-lira.jpeg",
    zodiac: "Capricorn (December 26, 1949)",
    description: "The tragic enfant terrible of Chilean poetry who committed suicide at 32 after prodding the literary establishment with devastating parodies. His dark, experimental work blended surrealism and wordplay. Posthumously became a cult hero to disaffected youth.",
    traits: ["Provocative demeanor", "Experimental expression", "Chaotic politics", "Extreme passion"],
    category: "Literary Figures"
  },
  {
    name: "Roberto Bolaño",
    image: "images/roberto-bolano.jpeg",
    zodiac: "Taurus (April 28, 1953)",
    description: "A literary nomad who wrote feverishly while his liver failed. His sprawling novels blend high and low culture, detective fiction and academic satire. Died just before global fame hit, becoming the perfect literary martyr.",
    traits: ["Intense demeanor", "Grandiose expression", "Revolutionary politics", "Intense passion"],
    category: "Literary Figures"
  },
  {
    name: "Pablo de Rokha",
    image: "images/pablo-de-rokha.jpeg",
    zodiac: "Libra (October 17, 1894)",
    description: "The volcanic avant-garde poet who despised Pablo Neruda with the fire of a thousand suns. Known for his torrential verse, communist politics, and epic feuds. Shot himself at 73 after losing his wife and son.",
    traits: ["Confrontational demeanor", "Grandiose expression", "Revolutionary politics", "Extreme passion"],
    category: "Literary Figures"
  },
  {
    name: "Soledad Fariña",
    image: "images/soledad-farina.jpeg",
    zodiac: "Virgo (September 15, 1943)",
    description: "The neo-avant-garde poet who somehow slipped through the dictatorship's censors with her experimental work exploring womanhood, prehistoric cultures, and the limits of language. Has been quietly collecting awards and blowing minds since the 1980s.",
    traits: ["Reserved demeanor", "Experimental expression", "Artistic politics", "Idealistic passion"],
    category: "Literary Figures"
  },
  {
    name: "Diamela Eltit",
    image: "images/diamela-eltit.jpeg",
    zodiac: "Virgo (August 24, 1947)",
    description: "The experimental novelist who once cut herself in a brothel and called it performance art. Her dense, fragmented prose drove the dictators crazy because they couldn't understand it well enough to censor it. Academics worldwide go gaga for her.",
    traits: ["Provocative demeanor", "Provocative expression", "Revolutionary politics", "Extreme passion"],
    category: "Literary Figures"
  },
  {
    name: "Alone (Hernán Díaz Arrieta)",
    image: "images/alone.jpeg",
    zodiac: "Taurus (May 11, 1891)",
    description: "The acid-tongued literary critic whose weekly column could make or break a writer's career. His devastating pen name says it all—forever alone with his judgmental opinions. Could dismiss an author's entire life's work with a single snarky paragraph.",
    traits: ["Confrontational demeanor", "Disciplined expression", "Traditional politics", "Cerebral passion"],
    category: "Literary Figures"
  },
  {
    name: "Elvira Hernández",
    image: "images/elvira-hernandez.jpeg",
    zodiac: "Cancer (July 2, 1951)",
    description: "The dissident poet who wrote 'La bandera de Chile' after being detained by Pinochet's secret police. Her samizdat verses circulated underground for a decade before publishing. Took a pen name to avoid further persecution. Refuses to call herself neo-avant-garde.",
    traits: ["Reserved demeanor", "Provocative expression", "Revolutionary politics", "Idealistic passion"],
    category: "Literary Figures"
  },
  {
    name: "Bruno Vidal",
    image: "images/bruno-vidal.jpeg",
    zodiac: "Unknown (birth date classified)",
    description: "The poet who adopted the persona of a fascist writer to expose Chile's collective trauma. His meticulously crafted right-wing psychopath act fooled many into thinking he was actually a monster. I'm still not sure whether it's an act or not.",
    traits: ["Provocative demeanor", "Provocative expression", "Chaotic politics", "Extreme passion"],
    category: "Literary Figures"
  },
  {
    name: "Vicente Huidobro",
    image: "images/vicente-huidobro.jpeg",
    zodiac: "Capricorn (January 10, 1893)",
    description: "The self-declared 'creator of Creationism' who revolutionized Spanish-language poetry. Aristocratic, avant-garde, and utterly convinced of his own genius. Declared that 'the poet is a small god' and lived like one, feuding with Neruda and conquering Parisian literary salons.",
    traits: ["Expressive demeanor", "Experimental expression", "Artistic politics", "Grandiose passion"],
    category: "Literary Figures"
  },
  {
    name: "Pedro Lemebel",
    image: "images/pedro-lemebel.jpeg",
    zodiac: "Scorpio (November 21, 1952)",
    description: "The flamboyant queer chronicler who strutted through Santiago in high heels and feathers during the dictatorship. His razor-sharp chronicles exposed the hypocrisy of Chilean society and gave voice to the marginalized. Part performance artist, part literary revolutionary.",
    traits: ["Provocative demeanor", "Poetic expression", "Revolutionary politics", "Intense passion"],
    category: "Literary Figures"
  },
  
  // Musical Figures
  {
    name: "Violeta Parra",
    image: "images/violeta-parra.jpeg",
    zodiac: "Libra (October 4, 1917)",
    description: "The quintessential Chilean folk singer, a poet of singular lucidity, a lover of unbridled passion, and perhaps the most influential Chilean artist of the 20th century. A Chilean's favorite Chilean if there ever was one.",
    traits: ["Composed demeanor", "Poetic expression", "Harmonious politics", "Deep passion"],
    category: "Musical Figures"
  },
  {
    name: "Víctor Jara",
    image: "images/victor-jara.jpeg",
    zodiac: "Virgo (September 28, 1932)",
    description: "The folk singer who became a martyr when Pinochet's goons killed him in the national stadium after breaking his hands. Now the ultimate t-shirt icon and a name dropped by cool leftists everywhere.",
    traits: ["Composed demeanor", "Popular expression", "Revolutionary politics", "Idealistic passion"],
    category: "Musical Figures"
  },
  {
    name: "Mon Laferte",
    image: "images/mon-laferte.jpeg",
    zodiac: "Taurus (May 2, 1983)",
    description: "The tattooed chanteuse who went from Chilean talent show contestant to Latin Grammy winner. Bounces between rock, bolero, and ranchera. Will protest topless if the situation demands it.",
    traits: ["Provocative demeanor", "Experimental expression", "Revolutionary politics", "Intense passion"],
    category: "Musical Figures"
  },
  {
    name: "Jorge González",
    image: "images/jorge-gonzalez.jpeg",
    zodiac: "Sagittarius (December 6, 1964)",
    description: "Fearless frontman of Los Prisioneros who wrote anthems of resistance during the Pinochet era. Part punk prophet, part electronic pioneer, he's suffered a stroke but refuses to die.",
    traits: ["Confrontational demeanor", "Provocative expression", "Revolutionary politics", "Idealistic passion"],
    category: "Musical Figures"
  },
  {
    name: "Ana Tijoux",
    image: "images/ana-tijoux.jpeg",
    zodiac: "Gemini (June 12, 1977)",
    description: "The French-Chilean hip-hop firebrand whose socially conscious lyrics have been called the spiritual heir to Violeta Parra. Raps about feminism, inequality, and imperialism while sampling Andean folk instruments.",
    traits: ["Provocative demeanor", "Popular expression", "Revolutionary politics", "Idealistic passion"],
    category: "Musical Figures"
  },
  {
    name: "Margot Loyola",
    image: "images/margot-loyola.jpeg",
    zodiac: "Virgo (September 15, 1918)",
    description: "The formidable folklorist who traveled every inch of Chile documenting traditional music and dances when no one else cared. Performed and taught for seven decades. Made cuecas cool before it was cool. The spiritual grandmother to all Chilean folk.",
    traits: ["Composed demeanor", "Disciplined expression", "Traditional politics", "Steady passion"],
    category: "Musical Figures"
  },
  {
    name: "Pailita",
    image: "images/pailita.jpeg",
    zodiac: "Taurus (May 4, 2000)",
    description: "The Gen Z icon who went from recording songs on his phone to headlining festivals. His street cred is only matched by his ability to make middle-aged Chileans say 'what's that noise?'",
    traits: ["Provocative demeanor", "Experimental expression", "Chaotic politics", "Playful passion"],
    category: "Musical Figures"
  },
  
  // Visual Artists
  {
    name: "Roberto Matta",
    image: "images/roberto-matta.jpeg",
    zodiac: "Scorpio (November 11, 1911)",
    description: "Chile's best 20th century painter, Matta painted his vision of a future in which bodies are tortured in twisted assembly lines of pain. In other words, he painted visions of our present.",
    traits: ["Reserved demeanor", "Experimental expression", "Artistic politics", "Intense passion"],
    category: "Visual Artists"
  },
  {
    name: "Cecilia Vicuña",
    image: "images/cecilia-vicuna.jpeg",
    zodiac: "Capricorn (January 22, 1948)",
    description: "How did one of Chile's top experimental poets became one of New York's top experimental visual artists?",
    traits: ["Reserved demeanor", "Experimental expression", "Artistic politics", "Idealistic passion"],
    category: "Visual Artists"
  },
  {
    name: "Alejandro Jodorowsky",
    image: "images/alejandro-jodorowsky.jpeg",
    zodiac: "Pisces (February 17, 1929)",
    description: "Deranged, or a genius? A French comics writer, an American experimental filmmaker, and a psycho-magician who uses tarot and his personality disorder to heal people, and charges a pretty penny for it.",
    traits: ["Provocative demeanor", "Experimental expression", "Chaotic politics", "Extreme passion"],
    category: "Visual Artists"
  },
  {
    name: "Raúl Zurita",
    image: "images/raul-zurita.jpeg",
    zodiac: "Capricorn (January 10, 1950)",
    description: "The poetic madman who carved poems in the Atacama Desert, tattooed them on his face, and wrote them in the sky over New York. Bulldozed landscapes into verse while fighting Pinochet and Parkinson's. Calls his self-harm 'beautiful' and poetry his salvation.",
    traits: ["Intense demeanor", "Grandiose expression", "Revolutionary politics", "Extreme passion"],
    category: "Visual Artists"
  },
  {
    name: "Themo Lobos",
    image: "images/themo-lobos.jpeg",
    zodiac: "Cancer (July 4, 1928)",
    description: "The mastermind behind Chilean comic book classics like 'Mampato' who drew an entire generation into fantastical adventures through time and space. His distinctive illustration style is as Chilean as completos and earthquakes. The Walt Disney of Chile, minus the questionable politics.",
    traits: ["Composed demeanor", "Popular expression", "Harmonious politics", "Playful passion"],
    category: "Visual Artists"
  },
  
  // Performers
  {
    name: "Claudio Arrau",
    image: "images/claudio-arrau.jpeg",
    zodiac: "Aquarius (February 6, 1903)",
    description: "A pianist of incomparable style, and a model of incomparable panache. For the lover of old century formal vibes.",
    traits: ["Composed demeanor", "Disciplined expression", "Traditional politics", "Steady passion"],
    category: "Performers"
  },
  {
    name: "Rafa Araneda",
    image: "images/rafa-araneda.jpeg",
    zodiac: "Pisces (March 18, 1969)",
    description: "The human equivalent of a TV dinner – comforting, reliable, and always the same. Has hosted every conceivable format of Chilean television and somehow still has perfect hair. National treasure or national embarrassment?",
    traits: ["Composed demeanor", "Popular expression", "Harmonious politics", "Steady passion"],
    category: "Performers"
  },
  {
    name: "Felipe Camiroaga",
    image: "images/felipe-camiroaga.jpeg",
    zodiac: "Libra (October 8, 1966)",
    description: "TV's golden boy whose tragic death in a plane crash transformed him from morning show host to literal saint. Chilean mothers still light candles to him and swoon at the mention of 'El Halcón de Chicureo.'",
    traits: ["Composed demeanor", "Popular expression", "Harmonious politics", "Idealistic passion"],
    category: "Performers"
  },
  {
    name: "Pedro Pascal",
    image: "images/pedro-pascal.jpeg",
    zodiac: "Aries (April 2, 1975)",
    description: "The internet's daddy who fled Chile as a baby and returned as a star. Built a career playing characters who protect small green aliens and fungus zombies. Has the unique power of making the entire world thirsty simultaneously.",
    traits: ["Composed demeanor", "Popular expression", "Artistic politics", "Intense passion"],
    category: "Performers"
  },
  
  // Sports Figures
  {
    name: "Alexis Sánchez",
    image: "images/alexis-sanchez.jpeg",
    zodiac: "Sagittarius (December 19, 1988)",
    description: "Come for the soccer. Stay for the pretty smiles.",
    traits: ["Expressive demeanor", "Popular expression", "Harmonious politics", "Playful passion"],
    category: "Sports Figures"
  },
  {
    name: "Cóndor Rojas",
    image: "images/condor-rojas.jpeg",
    zodiac: "Leo (August 8, 1957)",
    description: "The goalkeeper who tried to cheat Brazil out of a World Cup spot by slashing his own face with a razor blade hidden in his glove and blaming it on a flare. His spectacular fraud got Chile banned from the 1994 World Cup. Football's greatest villain or misunderstood patriot?",
    traits: ["Confrontational demeanor", "Provocative expression", "Chaotic politics", "Extreme passion"],
    category: "Sports Figures"
  },
  
  // Political Figures
  {
    name: "Salvador Allende",
    image: "images/salvador-allende.jpeg",
    zodiac: "Cancer (June 26, 1908)",
    description: "The first democratically elected Marxist president who died in a military coup with a gun in his hand and poetry in his heart. His glasses became an icon, his economic policies a battleground. The left's eternal martyr whose last radio address still brings tears to our eyes.",
    traits: ["Composed demeanor", "Disciplined expression", "Revolutionary politics", "Idealistic passion"],
    category: "Political Figures"
  },
  {
    name: "Michelle Bachelet",
    image: "images/michelle-bachelet.jpeg",
    zodiac: "Virgo (September 29, 1951)",
    description: "The first woman president of Chile, and the one signed into law free college for the country's poorest 80%.",
    traits: ["Composed demeanor", "Disciplined expression", "Revolutionary politics", "Steady passion"],
    category: "Political Figures"
  },
  {
    name: "La Tía Pikachu",
    image: "images/tia-pikachu.jpeg",
    zodiac: "Gemini (May 28, 1957)",
    description: "The revolutionary in a Pikachu costume who became the unlikely face of Chile's social uprising. Went from battling police in the streets to battling political elites in Congress. Proof that sometimes the most serious political movements come in the silliest packaging.",
    traits: ["Provocative demeanor", "Provocative expression", "Revolutionary politics", "Playful passion"],
    category: "Political Figures"
  },
  {
    name: "Pascal Allende",
    image: "images/pascal-allende.jpeg",
    zodiac: "Aries (March 27, 1945)",
    description: "The revolutionary theorist and nephew of Salvador who co-founded the MIR and lived a life of exile, clandestine resistance, and ultimately political rehabilitation. Has enough dramatic stories to fill ten action movies. Still unclear whether he was brave or just plain stupid.",
    traits: ["Reserved demeanor", "Disciplined expression", "Revolutionary politics", "Idealistic passion"],
    category: "Political Figures"
  },
  
  // Other Notable Chileans
  {
    name: "Arturo Prat",
    image: "images/arturo-prat.jpeg",
    zodiac: "Aries (April 4, 1848)",
    description: "A lawyer and soldier who lost a naval battle and, in the face of defeat, called his men to rally and push forward anyway, giving a reportedly beautiful speech. He was captured and executed. For this abject failure Chile turned him into a national myth.",
    traits: ["Confrontational demeanor", "Grandiose expression", "Traditional politics", "Extreme passion"],
    category: "Other Notable Chileans"
  },
  {
    name: "Merkén",
    image: "images/merken.jpeg",
    zodiac: "N/A (Eternal Being of Flavor)",
    description: "Not a person but a spice that deserves personhood. This smoky Mapuche chile blend is the taste of Chilean identity in powdered form. Has colonized kitchens worldwide with its addictive flavor profile.",
    traits: ["Provocative demeanor", "Provocative expression", "Indigenous politics", "Intense passion"],
    category: "Other Notable Chileans"
  }
];

export default chileanFigures;
