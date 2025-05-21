
export interface FilmInterface {
  id: string
  slug: string
  title: string
  author: {
    name: string,
    image: string,
    bio: string
  }, 
  description: string
  bgImage: string
  youtubeUrl: string
  logLine?: string
}

export const all_films: FilmInterface[] = [
  {
    id: '1',
    slug: 'home',
    title: 'Home',
    author: {
        name: 'Adelle Onyango',
        image: '/images/Home Director.png',
        bio: 'Adelle Onyango is a Kenyan media entrepreneur, poet, published author and women rights activist who has gained international recognition for her efforts to empower African women and youth. She has been celebrated as one of Top 100 Kenyans 2023, MIPAD Top 100 Africans 2020, Facebook 2019 Icons of Change; Africa Youth Awards 100 Most Influential Young Africans for 2019; OkayAfrica’s 100 extraordinary African women for 2018; and BBC 100 inspirational and innovative women in the world for 2017. Adelle Onyango has over 10 years experience in the radio industry. She began as a drive show host on 1FM then moved to Kenya top media house; Radio Africa Group as a presenter & producer on their radio station, KissFM. In 2019 she left, creating Legally Clueless Africa, a new media empire that amplifies African stories through its audio podcast, video series & tour series. It is a platform that prioritises stories by African women and creates wellness opportunities for them through the company’s group therapy sessions & wellness talks. Adelle Onyango started writing poetry when she was 13 years old and by the time she was 19 years old was hosting an Open Mic poetry event in Nairobi, where she and other poets would share their art. Adelle’s poetry has always taken a contemporary form and is focused on the unique journey of Africa women. In 2022, Adelle began writing an anthology dubbed Home that explores an African woman’s journey back to her body. She then joined the Kenya Creates writing room open to exploring the synergies between poetry & film. This proved to be the first time she would be having any technical contact with film as well as the first time she would write a film script. The experience in the writers’ room was expanding and resulted in the development of the title poem from her anthology and its translation to film. This is Adelle’s first film, first film script and first time directing. Home aims to spark a liberation of all African women to journey back to their bodies which is their one true home. This project has sparked an interest in Adelle, to explore how to marry film & poetry so much so, she’s already working on her next script.'
    },

    logLine: "The title poem “Home” exists as a short film that follows a young Kenyan girl’s relationship with her body, her name is Adhis",
    description:
      'The title poem “Home” exists as a short film that follows a young Kenyan girl’s relationship with her body, her name is Adhis. It begins in the past, weaving through a time in Africa where a woman’s body housed joy, confidence and was celebrated in dressing & dance. The poem brings us to Adhis’ childhood where this joy continues as she discovers her love for the outdoors. The joy is interrupted by Adhis’ mum who introduces a bright red shame and makes Adhis more conscious of her body. The poem then takes us to a teenage Adhis, desperate to love her body again but this time shame is introduced by the Catholic sisters in her school. Adhis battles with viewing her body from the male gaze. The poem highlights words Adhis carries with her that have complicated her relationship with her body. It ends with the proverbial phoenix (Adhis) rising from the ashes and her fight to come back home to herself.',
    bgImage: '/images/film_home_bg.png',
    youtubeUrl: 'https://youtu.be/x6xRNS3zgAU',
  },
  {
    id: '2',
    slug: 'bella-is-dying-maybe-next-week',
    title: 'Bella Is Dying, Maybe Next Week',
    logLine: '12 year old Bella decides something is deeply wrong with her because of one rookie mistake: checking her symptoms on the internet. Little does she know that everyone - including her parents - is just as clueless as her.',
    
    author: {
        name: 'Abigail Arunga',
        image: '/images/Bela Director.png',
        bio: 'Abigail Arunga is a writer, columnist, scriptwriter, and author who has been working in the writing industry for the last 15 years. You can see her work in the Daily Nation, Sinema Focus, Akoroko, and Debunk Media. She has previously worked on writing, editing and documentation for organizations such as the Bill and Melinda Gates Foundation, Girls’ Globe, Nomad Africa, Home and Living East Africa, and the Storymoja Career Encyclopaedia, among others. In film, her first script writing job was at Spielworks Media, with the production Higher Learning (Season 3, NTV) under Dorothy Ghettuba. From then, she became a staff writer, and then the Consultant Head of Development, in charge of finding, streamlining, and supervising the scripts at Spielworks Media. The shows she worked on there include Lies That Bind (which won the Kalasha Award for Best Drama, KTN), and Block D (KBC). At StoryLab Limited, under Erica Anyadike and in the same scriptwriting and storylining role, as well as publicity, she worked on Usaliti, How To Find A Husband (Maisha Magic), Majaribu (Star Times), and Wrath (Fox Africa). With Insignia Productions, she wrote for the comedy Junior (Showmax), and with Jareke Media, she wrote the show Mascara, now showing on Gidi Box Office. Her most recent television show, Pepeta, was one of the most viewed shows on Showmax in 2023. 4Play, which started airing on Showmax in November of 2024, is her first stint as a Head Writer. Most recently, Abigail wrote and directed her first short film, Bella Is Dying Maybe Next Week, under the Kenya Creates project, commissioned by Docubox and IRIS-marking her directorial debut.'
    },
    description:
      'Bella’s morning starts with a broken plate and parental indifference. At school, a health lesson on drug-resistant gonorrhea sends her into a spiral—she’s convinced her pimples and period changes mean she has it. Misinformed friends only fuel her panic. Meanwhile, Bella’s mother, Sheila, grapples with how to discuss sex with her daughter after overhearing alarmist reactions from other parents. Realizing she and her husband were once just as uninformed, she decides it’s time for open conversations. But Bella’s father would rather avoid it—until Sheila makes it clear that change is coming. A story about misinformation, generational gaps, and the courage to have honest conversations.',
    bgImage: '/images/bella_is_film.png',
    youtubeUrl: 'https://youtu.be/QBWFxjQPDqU',
  },
  {
    id: '3',
    slug: 'know-thy-body-know-thyself',
    title: 'Know Thy Body, Know Thyself',
    author: {
        name: 'TY Ngachira',
        image: '/images/Know Thyself Director.png',
        bio: 'Ty is a lawyer, MC, and host of the critically acclaimed TV news satire show Too Much Information with Ty (TMI with Ty) on NTV. He’s one of the most prolific stand-up comics in the country—if not the region—having headlined shows in Nairobi, Dar es Salaam, and Cape Town. He also represented Kenya at the Bloemfontein Comedy Festival in South Africa and was awarded Best Performance in a TV Show at the last Kalasha Awards. His first one-hour comedy special, Being Kenyan, sold out two consecutive shows and received critical acclaim. Most recently, Ty brought his signature wit to film, directing the comedy Know Thy Body, Know Thyself under the Kenya Creates project. Blending humor with sharp social commentary, the film unpacks the unspoken pressures and awkward realities of navigating body awareness and sexual health as a young man.'
    },
    description: 'In Know Thy Body, Know ThySelf, Ty tells it like it is—raw, real, and ridiculously funny. Growing up, he remembers the first time he heard about sex as a kid: confusing, weird, and full of half-truths. As he gets older, things don’t get any smoother—there’s the awkwardness of healthcare visits with his parents, the sweaty terror of trying to buy condoms for the first time, and the silent pressure that men must always be “ready” and in control. Ty doesn’t stop at the laughs. He dives into body image, the unhealthy influence of porn and peer pressure, and how young men are rarely included in honest conversations about sex and self-awareness. Instead of feeling attacked, Ty’s humor breaks the ice, tackling the mental blocks that hold men back. In the end, he leaves teens with a simple truth: you’ll figure it out, life will change, and it’s okay not to have all the answers—because knowing yourself starts with knowing your body',
    bgImage: '/images/know_thy_body_films_page.png',
    youtubeUrl: 'https://youtu.be/RZVXW4TW_uQ',
    logLine: 'Ty takes us on a hilarious and unfiltered ride through his life as an African man, from childhood confusion about sex to awkward adult encounters with healthcare, condoms, and society’s impossible expectations—proving humor is the best way to know your body and yourself.'
  },
  {
    id: '4',
    slug: 'float',
    title: 'Float',
    logLine: 'A fourteen-year-old swimming Champion is dreading the first day of practice with her team, after a long Christmas break.. As Wendo struggles to get comfortable in her own skin, during the grueling swimming practice, she finds an ally in MARIAM, a Muslim cleaner with a totally different perspective of what constitutes a ‘great body’. Their swimming session becomes an exchange, with Wendo teaching Mariam how to get comfortable in the water and Mariam teaching Wendo how to become comfortable in her own skin.',
    author: {
        name: "Lydia Matata",
        image: '/images/Float Director.png',
        bio: 'Lydia Matata is a filmmaker from Nairobi, Kenya, who is interested in making films about the issues, experiences and people that move her. She is one of the writers of Country Queen, a Kenyan drama series streaming on Netflix, and Igiza, a limited drama series streaming on Showmax. Her films include Sungura, a narrative short that screened at the Pan African Film Festival at Cannes and has won several awards, including the Best Extended Cinema Award at the Malatesta Short Film Festival in Italy and the Best Women in Film Award at Ghana’s Black Star International Film Festival. She co-wrote the short film Ziwa with filmmaker Samuel Tebandeke. The film had its premiere at FESPACO and has recently screened at the Zanzibar International Film Festival.'
    },
    description:'WENDO, a fourteen - year - old swimming Champion is dreading the first day of practice with her team, after a long Christmas break. Wendo’s body has gone through noticeable changes over the Christmas holidays. On the first day back with her swim team, she endured taunts from her younger brother DEDE (8/9) on the way to the gym, about her weight, and then later, during swimming practice, ‘polite’ comments from her male swimming coach, about how ‘big’ she’s gotten. As Wendo struggles to get comfortable in her own skin, during the gruelling swimming practice, she finds an ally in MARIAM, a Muslim cleaner with a totally different perspective of what constitutes a ‘great body’. After Wendo finds Mariam, struggling to teach herself how to swim, hours after the training session has ended, Wendo offers to teach her how to float. Their swimming session becomes an exchange, with Wendo teaching Mariam how to get comfortable in the water and Mariam teaching Wendo how to become comfortable in her own skin.',
    bgImage: '/images/float_film_photo.png',
    youtubeUrl: 'https://youtu.be/hRyx_-FfSX8',
  },
]

