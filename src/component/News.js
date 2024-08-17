import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "tristan carballeda",
      title:
        "Apple veut tirer le meilleur de l’iPad et du HomePod dans un nouvel appareil",
      description:
        "Apple veut apporter de nouveaux produits dans sa gamme, notamment pour se renforcer sur le marché de la robotique.",
      url: "https://www.journaldugeek.com/2024/08/16/apple-veut-tirer-le-meilleur-de-lipad-et-du-homepod-dans-un-nouvel-appareil/",
      urlToImage:
        "https://www.journaldugeek.com/app/uploads/2024/05/ipad-pro-apple-pencil-pro.jpg",
      publishedAt: "2024-08-16T14:09:50Z",
      content:
        "La domotique est l’un des grands points de travail d’Apple. La firme de Cupertino est bien consciente de l’essor des appareils comme les Amazon Echo Show, ou les Google Next. De son côté, la marque à… [+3020 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "tristan carballeda",
      title: "Epic Games sort le chéquier pour concurrencer l’App Store",
      description:
        "Epic Games ne prend pas de vacances, surtout quand il est question de faire de l'ombre à l'App Store.",
      url: "https://www.journaldugeek.com/2024/08/16/epic-games-sort-le-chequier-pour-concurrencer-lapp-store/",
      urlToImage:
        "https://www.journaldugeek.com/app/uploads/2024/03/epic-games-store-app-store.jpg",
      publishedAt: "2024-08-16T10:03:29Z",
      content:
        "Si vous n’avez pas suivi l’actualité technologique ces dernières années, il est possible de résumer la situation entre Epic Games et Apple en une phrase. Les deux entreprises ne s’aiment pas beaucoup… [+2631 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Anh Phan",
      title:
        "L’Epic Game Store se lance sur iOS et Android avec Fortnite, Fall Guys et Rocket League",
      description:
        "C'est maintenant officiel, l'Epic Game Store est désormais disponible sur iOS et Android. Les trois premiers jeux disponibles ne sont autres que Fortnite, Rocket League SideSwipe et surtout Fall Guys",
      url: "https://www.journaldugeek.com/2024/08/16/lepic-game-store-se-lance-sur-ios-et-android-avec-fortnite-fall-guys-et-rocket-league/",
      urlToImage:
        "https://www.journaldugeek.com/app/uploads/2024/08/FR_EGS_Key-Art.jpg",
      publishedAt: "2024-08-16T11:00:55Z",
      content:
        "Après des années de batailles légales, de déclarations toutes plus virulentes les unes que les autres, cest enfin officiel ! En effet, lEpic Game Store vient dêtre lancé officiellement sur iOS et And… [+3904 chars]",
    },
    {
      source: {
        id: null,
        name: "Core77.com",
      },
      author: "Rain Noe",
      title: "Industrial Design Case Study: A Self-Coiling Charging Cable",
      description:
        "This Lup Cable, conceived of by ex-Apple mechanical engineer John Hanna, is a self-coiling charging cable. To turn it into a finished product, Hanna and his company, Reaction Labs, tapped industrial design and engineering consultancy Design 1st.Product Design…",
      url: "https://www.core77.com/posts/133340/Industrial-Design-Case-Study-A-Self-Coiling-Charging-Cable",
      urlToImage:
        "https://s3files.core77.com/blog/images/lead_n_spotlight/1564908_lead_400_133340_.jpg",
      publishedAt: "2024-08-16T14:00:00Z",
      content:
        "This Lup Cable, conceived of by ex-Apple mechanical engineer John Hanna, is a self-coiling charging cable. To turn it into a finished product, Hanna and his company, Reaction Labs, tapped industrial … [+2497 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Guille Lomener",
      title:
        "Apple ha perdido la batalla de los precios en China pero puede ganar la guerra con el iPhone 16",
      description:
        "Apple es una de las empresas más valiosas del mundo, y buena parte de ello lo podemos comprobar cuando presentan sus resultados financieros. En su último informe económico, Apple sacó pecho de unos ingresos líderes y de un mayor aumento de su división de serv…",
      url: "https://www.applesfera.com/iphone/apple-ha-perdido-batalla-precios-china-puede-ganar-guerra-iphone-16",
      urlToImage: "https://i.blogs.es/91783e/iphone-16/840_560.jpeg",
      publishedAt: "2024-08-16T11:02:50Z",
      content:
        "Apple es una de las empresas más valiosas del mundo, y buena parte de ello lo podemos comprobar cuando presentan sus resultados financieros. En su último informe económico, Apple sacó pecho de unos i… [+3702 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "José A. Lizana",
      title:
        "Warren Buffett vendió la mitad de sus acciones de Apple. Ahora tiene que pagar en impuestos una cifra similar a lo que gana YouTube en publicidad",
      description:
        "Warren Buffet es considerado como uno de los mayores inversores a nivel mundial, así como el mayor accionista y CEO de Berkshier Hathaway. Pero las inversiones no siempre permanentes, y van fluctuando a unos niveles vertiginosos, que a veces se puede escapar …",
      url: "https://www.applesfera.com/apple-1/warren-buffett-vendio-mitad-sus-acciones-apple-ahora-tiene-que-pagar-impuestos-cifra-similar-a-que-gana-youtube-publicidad",
      urlToImage: "https://i.blogs.es/ad4e60/buffet-apple/840_560.jpeg",
      publishedAt: "2024-08-16T09:01:41Z",
      content:
        "Warren Buffet es considerado como uno de los mayores inversores a nivel mundial, así como el mayor accionista y CEO de Berkshier Hathaway. Pero las inversiones no siempre permanentes, y van fluctuand… [+2903 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Guille Lomener",
      title:
        '"¿Quieres copia?" Lo que tienes que responder según el Banco de España pese a que hayas pagado con tu iPhone',
      description:
        '¿Recuerdas cuando había que pagar con tarjeta, te pedían el DNI, tenías que firmar en un papel...? Cómo ha cambiado todo desde la llegada del contactless y, sobre todo, con Apple Pay. Reconozco que soy "adicto" a pagar con el Apple Watch o el iPhone. Y es que…',
      url: "https://www.applesfera.com/general/quieres-copia-que-tienes-que-responder-banco-espana-pese-a-que-hayas-pagado-tu-iphone",
      urlToImage: "https://i.blogs.es/5f04c4/pago-movil/840_560.jpeg",
      publishedAt: "2024-08-16T08:01:42Z",
      content:
        "¿Recuerdas cuando había que pagar con tarjeta, te pedían el DNI, tenías que firmar en un papel...? Cómo ha cambiado todo desde la llegada del contactless y, sobre todo, con Apple Pay. Reconozco que s… [+4005 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Roberto Méndez",
      title:
        "Ni AirPods ni Beats: estos auriculares Bluetooth baratos con cancelación de ruido son una maravilla y están a mitad de precio",
      description:
        "Conseguir unos auriculares inalámbricos con cancelación de ruido y buen sonido para sacarle partido a tu suscripción de Apple Music en iPhone no tiene por qué salir caro. Un ejemplo de ellos son los Jabra Elite 4 Active, que ahora puedes encontrarlos con su m…",
      url: "https://www.applesfera.com/seleccion/airpods-beats-estos-auriculares-bluetooth-baratos-cancelacion-ruido-maravilla-para-iphone-a-mitad-precio",
      urlToImage:
        "https://i.blogs.es/899bc2/auriculares-tws-con-cancelacion-de-ruido-baratos-ideal-para-iphone-rebajados-a-mitad-de-precio/840_560.jpeg",
      publishedAt: "2024-08-16T11:12:38Z",
      content:
        "Conseguir unos auriculares inalámbricos con cancelación de ruido y buen sonido para sacarle partido a tu suscripción de Apple Music en iPhone no tiene por qué salir caro. Un ejemplo de ellos son los … [+1807 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Guille Lomener",
      title:
        "Epic lanza por sorpresa su tienda oficial en iOS: tras años de espera, ya estoy jugando a Fortnite en mi iPhone sin bloqueos",
      description:
        "La historia entre Apple y Fortnite es una de las batallas más intensas que hemos tenido en los últimos años. Todo comenzó con una discrepancia entre Epic Games y las comisiones que tenía la App Store. Todo esto terminó con Fortnite fuera de la App Store y cie…",
      url: "https://www.applesfera.com/juegos-ios/epic-lanza-sorpresa-su-tienda-oficial-ios-anos-espera-estoy-jugando-a-fortnite-mi-iphone-bloqueos",
      urlToImage: "https://i.blogs.es/7868f4/portadilla/840_560.jpeg",
      publishedAt: "2024-08-16T12:05:23Z",
      content:
        "La historia entre Apple y Fortnite es una de las batallas más intensas que hemos tenido en los últimos años. Todo comenzó con una discrepancia entre Epic Games y las comisiones que tenía la App Store… [+2951 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Isra Fdez",
      title:
        '"Objeto indefinido hecho de aluminio y cristal". Así es el superyate diseñado por Steve Jobs que nunca pudo estrenar',
      description:
        "Es sabido que Steve Jobs siguió trabajando hasta sus últimos días, pese a estar retirado de la vida pública e incluso de su rol como CEO en Apple. Uno de los bretes que intentaba resolver era clave para el futuro de la marca: cómo integrar la televisión dentr…",
      url: "https://www.applesfera.com/curiosidades/objeto-indefinido-hecho-aluminio-cristal-asi-superyate-disenado-steve-jobs-que-nunca-pudo-estrenar-1",
      urlToImage: "https://i.blogs.es/c4c525/superyate-venus/840_560.jpeg",
      publishedAt: "2024-08-16T14:01:48Z",
      content:
        "Es sabido que Steve Jobs siguió trabajando hasta sus últimos días, pese a estar retirado de la vida pública e incluso de su rol como CEO en Apple. Uno de los bretes que intentaba resolver era clave p… [+4425 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Guille Lomener",
      title:
        'Odio el mensaje "El iPhone retomará la carga cuando baje la temperatura." Así evito que se caliente cuando uso Carplay',
      description:
        "Estamos en verano y esto es sinónimo de calor, sol y muchos viajes en el coche. CarPlay es el mejor sistema de navegación, y ya uses Apple Maps, Google Maps o Waze, tendrás una experiencia de diez. Podrás ver con todo detalle los carriles, límites de velocida…",
      url: "https://www.applesfera.com/iphone/odio-mensaje-iphone-retomara-carga-cuando-baje-temperatura-asi-evito-que-se-caliente-cuando-uso-carplay",
      urlToImage: "https://i.blogs.es/69ea76/iphone-calor/840_560.jpeg",
      publishedAt: "2024-08-16T10:01:43Z",
      content:
        "Estamos en verano y esto es sinónimo de calor, sol y muchos viajes en el coche. CarPlay es el mejor sistema de navegación, y ya uses Apple Maps, Google Maps o Waze, tendrás una experiencia de diez. P… [+4372 chars]",
    },
    {
      source: {
        id: null,
        name: "Golem.de",
      },
      author: "Tobias Költzsch",
      title:
        "In der EU: Mobiler Epic Games Store bringt Fortnite für iPhones zurück",
      description:
        "Fortnite ist zurück auf dem iPhone - zumindest in der EU: Epic hat seinen mobilen Games Store gestartet und will seine Spiele auch auf andere App-Marktplätze bringen. (Epic Games, Apple)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fin-der-eu-mobiler-epic-games-store-bringt-fortnite-fuer-iphones-zurueck-2408-188099.html&referer=https%3A%2F%2Ft.co%2F2466098e18",
      urlToImage: null,
      publishedAt: "2024-08-16T13:35:02Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
    },
    {
      source: {
        id: null,
        name: "Openculture.com",
      },
      author: "OC",
      title:
        "Hear the Very First Adaptation of George Orwell’s 1984 in a Radio Play Starring David Niven (1949)",
      description:
        "Since George Orwell published his landmark political fable 1984, each generation has found ample reason to make reference to the grim near-future envisioned by the novel. Whether Orwell had some prophetic vision or was simply a very astute reader of the insti…",
      url: "https://www.openculture.com/2024/08/hear-the-very-first-adaptation-of-george-orwells-1984.html",
      urlToImage:
        "https://cdn8.openculture.com/wp-content/uploads/2015/08/10011740/bigbrother1-1024x535.png",
      publishedAt: "2024-08-16T07:20:41Z",
      content:
        "Since George Orwell pub­lished his land­mark polit­i­cal fable 1984, each gen­er­a­tion has found ample rea­son to make ref­er­ence to the grim near-future envi­sioned by the nov­el. Whether Orwell h… [+3580 chars]",
    },
    {
      source: {
        id: null,
        name: "Pitchfork",
      },
      author: "Jazz Monroe",
      title:
        "9 New Albums You Should Listen to Now: Post Malone, Tinashe, and More",
      description:
        "Stream new releases from Post Malone, Tinashe, Charly Bliss, Chuck Johnson, Wishy, Horse Jumper of Love, Durkalini & Surf Gang, Delicate Steve, and NoCap",
      url: "https://pitchfork.com/news/9-new-albums-you-should-listen-to-now-post-malone-tinashe/",
      urlToImage:
        "https://media.pitchfork.com/photos/66bb7a9994a5342306c4b61d/16:9/w_1280,c_limit/Post-Malone.jpg",
      publishedAt: "2024-08-16T12:23:38Z",
      content:
        "With so much good music being released all the time, it can be hard to determine what to listen to first. Every week, Pitchfork offers a run-down of significant new releases available on streaming se… [+1074 chars]",
    },
    {
      source: {
        id: null,
        name: "XDA Developers",
      },
      author: "Adam Conway",
      title: "9 weirdest tech stories you probably didnt know about",
      description:
        "The tech world has some pretty crazy stories, and these are some of the weirdest out there.",
      url: "https://www.xda-developers.com/9-weirdest-tech-stories/",
      urlToImage:
        "https://static1.xdaimages.com/wordpress/wp-content/uploads/2024/08/atari_e-t-_dig-_alamogordo-_new_mexico_-14036097792.jpg",
      publishedAt: "2024-08-16T11:00:13Z",
      content:
        "Key Takeaways\r\n<ul><li>\r\n Apple Maps sent people to the Australian desert once - a big fail for Apple Maps back in 2012.\r\n </li><li>\r\n Twitch Plays Pokémon was a massive hit in 2014 - viewers could c… [+11903 chars]",
    },
    {
      source: {
        id: null,
        name: "Ritholtz.com",
      },
      author: "Barry Ritholtz",
      title: "MiB: Mike Greene, Simplify Asset Management",
      description:
        "﻿     This week, we speak with Mike Greene, portfolio manager and chief strategist for Simplify Asset Management Inc. He previously served in the same roles for Logica Capital Advisers LLC. Prior to Logica, Michael managed macro strategies at Thiel Macro LLC;…",
      url: "https://ritholtz.com/2024/08/mib-mike-greene/",
      urlToImage:
        "https://ritholtz.com/wp-content/uploads/2023/02/Mib-tile.png",
      publishedAt: "2024-08-16T12:30:35Z",
      content:
        "This week, we speak with Mike Greene, portfolio manager and chief strategist for Simplify Asset Management Inc. He previously served in the same roles for Logica Capital Advisers LLC. Prior to Logica… [+1173 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka Android",
      },
      author: "Sergio Asenjo",
      title:
        "Google se enfrenta a su peor pesadilla: que la troceen. La consideración de monopolio tiene la culpa",
      description:
        "Hace tan solo unos días conocíamos el dictamen de un juez federal en Estados Unidos, que afirmaba que Google es un monopolio en el sector de los buscadores en Internet. Se trata de un duro golpe para la compañía y podría cambiar por completo el panorama actua…",
      url: "https://www.xatakandroid.com/mercado/google-se-enfrenta-a-su-peor-pesadilla-que-troceen-consideracion-monopolio-tiene-culpa",
      urlToImage: "https://i.blogs.es/b79e2c/google-portada/840_560.jpeg",
      publishedAt: "2024-08-16T12:31:48Z",
      content:
        "Hace tan solo unos días conocíamos el dictamen de un juez federal en Estados Unidos, que afirmaba que Google es un monopolio en el sector de los buscadores en Internet. Se trata de un duro golpe para… [+2347 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka Android",
      },
      author: "Pepu Ricca",
      title:
        "Epic Games Store debuta en Android junto a 'Fall Guys'. Así puedes descargar la nueva tienda de videojuegos",
      description:
        "Al contrario que en el sistema operativo de Apple, Android cuenta con uno de los juegos más populares de todos los tiempos: Fornite se puede instalar en cualquier móvil gracias al APK que la empresa distribuye, incluso en móviles no compatibles. Ahora, la emp…",
      url: "https://www.xatakandroid.com/aplicaciones-android/epic-games-store-debuta-android-a-fall-guys-asi-puedes-descargar-nueva-tienda-videojuegos",
      urlToImage:
        "https://i.blogs.es/3c475c/epic-games-store-android/840_560.jpeg",
      publishedAt: "2024-08-16T13:15:49Z",
      content:
        "Al contrario que en el sistema operativo de Apple, Android cuenta con uno de los juegos más populares de todos los tiempos: Fornite se puede instalar en cualquier móvil gracias al APK que la empresa … [+2975 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Authority",
      },
      author: "Aamir Siddiqui",
      title: "iPhone 16 Pro Max leak shows off new gold-like color",
      description:
        "Apple is rumored to opt for a gold-like color for the iPhone 16 Pro, and we get our first look at it in this dummy unit leak. Check it out!",
      url: "https://www.androidauthority.com/iphone-16-pro-max-leak-gold-like-color-3472229/",
      urlToImage:
        "https://www.androidauthority.com/wp-content/uploads/2024/08/iPhone-16-Pro-Max-dummy-unit-leak-Bronze-Gold-color.jpg",
      publishedAt: "2024-08-16T11:21:23Z",
      content:
        "<ul><li>A new dummy unit leak has shown off a gold-like color for the iPhone 16 Pro.</li><li>Apple has been rumored to replace the Blue Titanium color with a gold-like color, so this dummy unit leak … [+2138 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Authority",
      },
      author: "Hadlee Simons",
      title:
        "Pixel chief says ‘very few’ Pixel users are coming from Samsung phones",
      description:
        "Which brands are Pixel owners coming from? Well, a Google executive says they're certainly not coming from Samsung.",
      url: "https://www.androidauthority.com/few-google-pixel-users-coming-samsung-3471904/",
      urlToImage:
        "https://www.androidauthority.com/wp-content/uploads/2024/08/Google-Pixel-9-Pro-in-Obsidian-laying-face-down-on-a-table-with-an-official-Google-case-next-to-it.jpg",
      publishedAt: "2024-08-16T07:06:55Z",
      content:
        "<ul><li>Googles Pixel chief has claimed that very few Pixel owners are coming from Samsung Galaxy phones.</li><li>The executive asserts that some Pixel owners are coming from brands that left the mar… [+2288 chars]",
    },
    {
      source: {
        id: null,
        name: "Space.com",
      },
      author: "Keumars Afifi-Sabet",
      title: "Lenovo ThinkPad X1 Fold Gen 2 laptop review",
      description:
        "When you look past its stunningly immersive and expansive display, the Lenovo ThinkPad X1 Fold Gen 2 begins to fall flat.",
      url: "https://www.space.com/lenovo-thinkpad-x1-fold-gen-2-laptop-review",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/p3H7ZYqNUfcGsZDESTbYxV-1200-80.jpg",
      publishedAt: "2024-08-16T13:20:50Z",
      content:
        "'Foldable' devices have been growing in stature and popularity in recent years, and on paper, one of the best 'foldable laptops' on the market is the LG ThinkPad X1 Fold, which boasts an immersive 16… [+8476 chars]",
    },
    {
      source: {
        id: "die-zeit",
        name: "Die Zeit",
      },
      author: "ZEIT ONLINE: Games - Luis Kumpfmüller",
      title: 'Epic Games Store: iPhone-Nutzer können wieder "Fortnite" spielen',
      description:
        'Der Spieleentwickler Epic Games wollte keine Gebühren an Apple zahlen – und nahm Spiele wie "Fortnite" aus dem Appstore. Jetzt kehrt er zurück: mit einem eigenen Store.',
      url: "https://www.zeit.de/digital/games/2024-08/epic-games-store-apple-app-store-eu-kommission-klage",
      urlToImage:
        "https://img.zeit.de/spiele/2024-08/alternativer-appstore-epic-games-store-iphone-bild/wide__1300x731",
      publishedAt: "2024-08-16T11:01:00Z",
      content:
        "Der Spieleentwickler Epic Games bietet ab sofort einen alternativen App Store für iPhones innerhalb der Europäischen Union an. Auf Android-Geräten ist er weltweit verfügbar. Nutzerinnen und Nutzer kö… [+3881 chars]",
    },
    {
      source: {
        id: "die-zeit",
        name: "Die Zeit",
      },
      author: "ZEIT ONLINE: News ",
      title: "App-Store-Streit: «Fortnite» wieder zurück auf iPhones in der EU",
      description:
        'Hier finden Sie Informationen zu dem Thema „App-Store-Streit“. Lesen Sie jetzt „"Fortnite" wieder zurück auf iPhones in der EU“.',
      url: "https://www.zeit.de/news/2024-08/16/fortnite-wieder-zurueck-auf-iphones-in-der-eu",
      urlToImage:
        "https://img.zeit.de/news/2024-08/16/fortnite-wieder-zurueck-auf-iphones-in-der-eu-image-group/wide__1300x731",
      publishedAt: "2024-08-16T11:00:35Z",
      content:
        "Das Online-Spiel «Fortnite» ist nach vier Jahren erstmals wieder auf iPhones verfügbar. Das gilt allerdings nur für die EU, wo das neue Digitalgesetz DMA Apple zwang, alternative App Stores zuzulasse… [+2590 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Authority",
      },
      author: "Pranob Mehrotra",
      title: "Google Wallet will support California IDs in the coming weeks",
      description:
        "Google Wallet will get support for California IDs in the coming weeks, but the digital IDs won't replace physical cards.",
      url: "https://www.androidauthority.com/google-wallet-california-id-3472202/",
      urlToImage:
        "https://www.androidauthority.com/wp-content/uploads/2023/04/Google-Wallet-logo-on-smartphone-next-to-credit-cards-and-cash-Stock-photo-2.jpg",
      publishedAt: "2024-08-16T10:47:12Z",
      content:
        "Google Wallet received support for government IDs and drivers licenses in June last year. However, the feature was only available in Maryland at the time. A few months after the launch, Google added … [+1270 chars]",
    },
    {
      source: {
        id: null,
        name: "Vox",
      },
      author: "Jessica Craig",
      title:
        "Antibiotics are failing. The US has a plan to launch a research renaissance.",
      description:
        "In November 2012, 18-year-old Meredith Littlejohn was a high school senior eagerly awaiting college acceptance letters, prom, and graduation when she was diagnosed with acute myeloid leukemia, a type of rapidly progressing blood and bone cancer. Littlejohn un…",
      url: "https://www.vox.com/future-perfect/365053/antibiotics-resistance-bacteria-pasteur-act-big-phrama",
      urlToImage:
        "https://platform.vox.com/wp-content/uploads/sites/2/2024/07/gettyimages-1026582844.jpg?quality=90&strip=all&crop=0%2C7.1363329587309%2C100%2C85.727334082538&w=1200",
      publishedAt: "2024-08-16T12:34:22Z",
      content:
        "In November 2012, 18-year-old Meredith Littlejohn was a high school senior eagerly awaiting college acceptance letters, prom, and graduation when she was diagnosed with acute myeloid leukemia, a type… [+14426 chars]",
    },
    {
      source: {
        id: null,
        name: "Les Numériques",
      },
      author: "Diogo Ribeiro",
      title:
        "Actualité : Un nouvel iMac grand format serait toujours en chantier chez Apple",
      description:
        "Après avoir abandonné l'iMac 27 pouces en faveur du plus petit format 24 pouces, la solution tout-en-un d'Apple pourrait faire son retour avec un plus grand écran.",
      url: "https://www.lesnumeriques.com/ordinateur/un-nouvel-imac-grand-format-serait-toujours-en-chantier-chez-apple-n225294.html",
      urlToImage:
        "https://cdn.lesnumeriques.com/optim/news/22/225294/ef044e26-un-nouvel-imac-grand-format-serait-toujours-en-chantier-chez-apple__1200_678__0-109-3072-1721.jpg",
      publishedAt: "2024-08-16T14:48:00Z",
      content:
        "Avec la mise en retrait des iMac 27 pouces fonctionnant sur puce Intel de 2017, un gouffre s'est formé pour les consommateurs désireux d'avoir toute l'expérience Apple bureautique sans avoir à craque… [+1763 chars]",
    },
    {
      source: {
        id: null,
        name: "Xatakamovil.com",
      },
      author: "Pepu Ricca",
      title:
        "La tienda de Epic Games acaba de llegar a iOS. Y eso significa dos cosas: la vuelta de Fornite al iPhone y el debut de Fall Guys",
      description:
        "El iPhone ha cambiado para siempre en Europa: tras las exigencias de la UE, iOS se ha abierto por primera vez en la historia a la instalación de tiendas alternativas a la App Store, a la vez que también permite la instalación de aplicaciones vía web. Esto, ha…",
      url: "https://www.xatakamovil.com/aplicaciones/tienda-epic-games-acaba-llegar-a-ios-eso-significa-dos-cosas-vuelta-fornite-al-iphone-debut-fall-guys",
      urlToImage: "https://i.blogs.es/ef32c8/epic-games-iphone/840_560.jpeg",
      publishedAt: "2024-08-16T12:10:59Z",
      content:
        "El iPhone ha cambiado para siempre en Europa: tras las exigencias de la UE, iOS se ha abierto por primera vez en la historia a la instalación de tiendas alternativas a la App Store, a la vez que tamb… [+2712 chars]",
    },
    {
      source: {
        id: null,
        name: "Xatakamovil.com",
      },
      author: "Sergio Asenjo",
      title:
        "Rebajas en Samsung y Realme, iPhone 15 Pro y Google Pixel 8a a un precio tentador y relojes inteligentes en oferta: Cazando Gangas",
      description:
        "Estamos afrontando la recta final del verano y qué mejor que unas ofertas para ahorrar algo de dinero si estabas pensando en renovar el móvil. En esta edición de Cazando Gangas traemos varios móviles de Realme a precio de derribo, el buque insignia de Samsung…",
      url: "https://www.xatakamovil.com/guias-de-compra/rebajas-samsung-realme-iphone-15-pro-google-pixel-8a-a-precio-tentador-relojes-inteligentes-oferta-cazando-gangas",
      urlToImage:
        "https://i.blogs.es/ad89a4/cazando-gangas-portada-galaxy-s24/840_560.jpeg",
      publishedAt: "2024-08-16T09:26:10Z",
      content:
        "Estamos afrontando la recta final del verano y qué mejor que unas ofertas para ahorrar algo de dinero si estabas pensando en renovar el móvil. En esta edición de Cazando Gangas traemos varios móviles… [+4879 chars]",
    },
    {
      source: {
        id: null,
        name: "TMZ",
      },
      author: "TMZ Staff",
      title: "Dakota Johnson and Chris Martin Split After 7 Years Together",
      description:
        "Dakota Johnson and her fiancé Chris Martin's romance has tanked ... they're reportedly packing it in after 7 years of dating. The apparent cause of the split -- irreconcilable work schedules ... the Daily Mail cites that as the reason for the…",
      url: "https://www.tmz.com/2024/08/16/dakota-johnson-chris-martin-coldplay-split/",
      urlToImage:
        "https://imagez.tmz.com/image/52/16by9/2024/08/16/522ebf31dc00473fa0432356ef29ba33_xl.jpg",
      publishedAt: "2024-08-16T14:45:16Z",
      content:
        "Chris ex, Gwyneth Paltrow, was all in for the couple tying the knot ... and was totally cool with Dakota playing stepmom to her and Chris' 2 kids, Apple, 20, and Moses, 18 -- but looks like family dy… [+35 chars]",
    },
    {
      source: {
        id: null,
        name: "Rolling Stone",
      },
      author: "Kory Grow",
      title: "Eugene and Dan Levy to Host 2024 Emmy Awards",
      description: "Eugene and Dan Levy will host the 2024 Emmys.",
      url: "http://www.rollingstone.com/tv-movies/tv-movie-news/eugene-levy-dan-levy-emmys-hosts-1235081586/",
      urlToImage:
        "https://www.rollingstone.com/wp-content/uploads/2024/08/eugene-dan-levy-host.jpg?crop=202px%2C76px%2C1382px%2C778px&resize=1600%2C900",
      publishedAt: "2024-08-16T14:14:31Z",
      content:
        "Four years afterSchitt’s Creek’s series finale, the show’s Rosebuds — father Eugene and son Dan Levy — will reunite on screen as hosts for ABC’s airing of the primetime Emmys at 8 p.m. on Sept. 15. T… [+1491 chars]",
    },
    {
      source: {
        id: null,
        name: "The Points Guy",
      },
      author: "Lyndsey Matthews",
      title:
        "Brooklyn’s William Vale hotel offers a resortlike escape from city life",
      description:
        "[circuit type=review circuit_id=”8656″] Editor’s note: The William Vale provided TPG with a complimentary two-night stay and some on-site meals and experiences so that we could get an inside look at the hotel and its amenities. The opinions expressed below ar…",
      url: "https://thepointsguy.com/reviews/william-vale-brooklyn-hotel-review/",
      urlToImage:
        "https://thepointsguy.global.ssl.fastly.net/us/originals/2024/08/20240812_William-Vale-Brooklyn_william-vale_brooklyn_pool_6268_LMatthews_73.jpg",
      publishedAt: "2024-08-16T13:30:10Z",
      content:
        "LYNDSEY MATTHEWS/THE POINTS GUY\r\nWhen The William Vale opened in 2016 on the corner of Wythe Avenue and North 12th Street in Williamsburg, Brooklyn, the 22-story glass and concrete hotel replaced a s… [+18872 chars]",
    },
    {
      source: {
        id: null,
        name: "Caschys Blog",
      },
      author: "Olli",
      title: "Geekbench ab sofort mit KI-Benchmark",
      description:
        "Wer sich etwas mit Technik beschäftigt und Vergleiche anstellen möchte, kommt um die harten Benchmarks meist nicht drumrum. Zu den bekanntesten Tools in diesem Bereich zählt mittlerweile Geekbench. Die Software bietet allerlei Benchmarks an, für CPU, GPU oder…",
      url: "https://stadt-bremerhaven.de/geekbench-ab-sofort-mit-ki-benchmark/",
      urlToImage:
        "https://stadt-bremerhaven.de/wp-content/uploads/2024/08/banff-windows-screenshot.jpg",
      publishedAt: "2024-08-16T07:30:03Z",
      content:
        "Wer sich etwas mit Technik beschäftigt und Vergleiche anstellen möchte, kommt um die harten Benchmarks meist nicht drumrum. Zu den bekanntesten Tools in diesem Bereich zählt mittlerweile Geekbench. D… [+1578 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Corentin Béchade",
      title: "Un « robot » Apple à moins de 1000 $, ça vous tente ?",
      description:
        "L’iPhone, le Vision Pro… et bientôt un robot domestique ? D’après les dernières rumeurs, Apple travaillerait sur un Homepod robotique avec un iPad en guide d’écran. On vous explique.",
      url: "https://www.frandroid.com/marques/2307148_un-robot-apple-a-moins-de-1000-ca-vous-tente",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/08/capture-decran-du-2024-08-16-07-30-59-1200x675-1.jpg",
      publishedAt: "2024-08-16T05:48:00Z",
      content:
        "L’iPhone, le Vision Pro… et bientôt un robot domestique ? D’après les dernières rumeurs, Apple travaillerait sur un Homepod robotique avec un iPad en guide d’écran. On vous explique.\r\nLe Belkin Stand… [+2635 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Corentin Béchade",
      title: "Un « robot » Apple à moins de 1000 $, ça vous tente ?",
      description:
        "L’iPhone, le Vision Pro… et bientôt un robot domestique ? D’après les dernières rumeurs, Apple travaillerait sur un Homepod robotique avec un iPad en guide d’écran. On vous explique.",
      url: "https://www.frandroid.com/marques/apple/2307148_un-robot-apple-a-moins-de-1000-ca-vous-tente",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/08/capture-decran-du-2024-08-16-07-30-59-1200x675-1.jpg",
      publishedAt: "2024-08-16T05:48:00Z",
      content:
        "L’iPhone, le Vision Pro… et bientôt un robot domestique ? D’après les dernières rumeurs, Apple travaillerait sur un Homepod robotique avec un iPad en guide d’écran. On vous explique.\r\nLe Belkin Stand… [+2676 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Cassim Montilla",
      title:
        "L’Epic Games Store arrive de façon imminente sur iPhone, avec Fortnite, Rocket League Sideswipe et un nouveau champion",
      description:
        "L'App Store d'Apple est sur le point de découvrir son plus gros concurrent à ce jour : l'Epic Game Store. Pour l'occasion, l'éditeur proposerait Fortnite, Rocket League Sideswipe, mais aussi Fall Guys en version mobile.",
      url: "https://www.frandroid.com/marques/apple/2305084_lepic-games-store-arrive-de-facon-imminente-sur-iphone-avec-fortnite-et-rocket-league-sideswipe",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/08/fortnite-1200x675-1.webp",
      publishedAt: "2024-08-16T09:42:19Z",
      content:
        "L’App Store d’Apple est sur le point de découvrir son plus gros concurrent à ce jour : l’Epic Game Store. Pour l’occasion, l’éditeur proposerait Fortnite, Rocket League Sideswipe, mais aussi Fall Guy… [+2207 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Corentin Béchade",
      title:
        "iPhone : Le concurrent de l’App Store le plus connu devient (enfin) gratuit",
      description:
        "Premier rival de l’App Store à s’être lancé sur iPhone depuis l’ouverture à la concurrence de la plateforme, l’AltStore Pal passe du modèle payant au tout gratuit.",
      url: "https://www.frandroid.com/marques/apple/2307176_iphone-le-concurrent-de-lapp-store-le-plus-connu-devient-enfin-gratuit",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/08/altstore-1200x900-1.jpg",
      publishedAt: "2024-08-16T06:54:00Z",
      content:
        "Premier rival de l’App Store à s’être lancé sur iPhone depuis l’ouverture à la concurrence de la plateforme, l’AltStore Pal passe du modèle payant au tout gratuit.\r\nSource : Frandroid\r\nOn ne peut pas… [+2634 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Cassim Montilla",
      title:
        "L’Epic Games Store débarque sur iPhone, avec Fortnite, Rocket League Sideswipe et un nouveau champion",
      description:
        "L'App Store d'Apple découvre son plus gros concurrent à ce jour : l'Epic Game Store. Pour l'occasion, l'éditeur propose Fortnite, Rocket League Sideswipe, mais aussi Fall Guys en version mobile.",
      url: "https://www.frandroid.com/marques/apple/2305084_lepic-games-store-debarque-sur-iphone-avec-fall-guys-fortnite-et-rocket-league-sideswipe",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/08/epic-game-store-iphone.jpeg",
      publishedAt: "2024-08-16T11:18:29Z",
      content:
        "L’App Store d’Apple découvre son plus gros concurrent à ce jour : l’Epic Game Store. Pour l’occasion, l’éditeur propose Fortnite, Rocket League Sideswipe, mais aussi Fall Guys en version mobile.\r\nMis… [+3459 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Mélanie Capelli",
      title:
        "Vous l’aviez loupé ? Le MacBook Air M2 d’Apple est déjà de retour à moins de 1 000 €",
      description:
        "Le MacBook Air 2022 est un PC portable de choix chez Apple. Il embarque la puce M2, qui a su démontrer sa puissance et son efficacité. Et, si son prix de départ était un frein, aujourd'hui, le laptop de la Pomme repasse sous la barre symbolique des 1 000 euro…",
      url: "https://www.frandroid.com/bons-plans/2079382_vous-laviez-loupe-le-macbook-air-m2-dapple-est-deja-de-retour-a-moins-de-1-000-euros",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2023/06/apple-macbook-air-m2-15-pouces-test-8-scaled.jpg",
      publishedAt: "2024-08-16T12:16:00Z",
      content:
        "Le MacBook Air 2022 est un PC portable de choix chez Apple. Il embarque la puce M2, qui a su démontrer sa puissance et son efficacité. Et, si son prix de départ était un frein, aujourd’hui, le laptop… [+3267 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Hugo Bernard",
      title:
        "La sortie des MacBook Pro M4 se rapproche : plus que quelques mois à patienter",
      description:
        "Une nouvelle rumeur vient renforcer l'idée d'une sortie des MacBook Pro M4 pour l'automne. Les écrans arriveraient dans les usines d'assemblage afin de préparer les stocks pour le jour J.",
      url: "https://www.frandroid.com/marques/apple/2307252_la-sortie-des-macbook-pro-m4-se-rapproche-plus-que-quelques-mois-a-patienter",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/08/macbook-pro-m3-ecran-1200x802-1.jpeg",
      publishedAt: "2024-08-16T10:15:00Z",
      content:
        "Une nouvelle rumeur vient renforcer l’idée d’une sortie des MacBook Pro M4 pour l’automne. Les écrans arriveraient dans les usines d’assemblage afin de préparer les stocks pour le jour J. \r\nMacBook P… [+2128 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Geoffroy Husson",
      title:
        "Pixel 9 : c’est grâce à Garmin que Google peut proposer cette nouvelle fonctionnalité",
      description:
        "Au lancement de ses nouveaux Pixel 9, Google a dévoilé une nouvelle fonctionnalité de message d'urgence par satellite. Une fonctionnalité mise en œuvre grâce à un partenariat avec Garmin et Skylo.",
      url: "https://www.frandroid.com/marques/google/2307250_pixel-9-cest-grace-a-garmin-que-google-peut-proposer-cette-nouvelle-fonctionnalite",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/08/google-pixel-9-pro-xp-03-1200x675-3.jpg",
      publishedAt: "2024-08-16T09:10:28Z",
      content:
        "Au lancement de ses nouveaux Pixel 9, Google a dévoilé une nouvelle fonctionnalité de message d’urgence par satellite. Une fonctionnalité mise en œuvre grâce à un partenariat avec Garmin et Skylo. \r\n… [+1824 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Nathan Le Gohlisse",
      title:
        "Voici à quel point Windows inflige une claque à MacOS aux États-Unis",
      description:
        "Dans un contexte d'inflation persistante, les ventes de Mac outre-Atlantique déclinent. On apprend que sur les premiers mois de l'année 2024, les parts de marché détenues par macOS sur le marché américain se sont par conséquent affaissées... au profit de Wind…",
      url: "https://www.frandroid.com/os/macos/2307002_voici-a-quel-point-windows-inflige-une-claque-a-macos-aux-etats-unis",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/08/apple-macbook-air-m3-design-3-1200x800-1.jpeg",
      publishedAt: "2024-08-16T10:23:33Z",
      content:
        "Dans un contexte d’inflation persistante, les ventes de Mac outre-Atlantique déclinent. On apprend que sur les premiers mois de l’année 2024, les parts de marché détenues par macOS sur le marché amér… [+2289 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Marie Lizak",
      title:
        "L’une des voitures électriques les plus aérodynamiques du monde, rivale de la Xiaomi SU7, fait ses grands débuts",
      description:
        "Dévoilée au mois de juin dernier, la nouvelle Lynk & Co Z10 est officiellement disponible à la commande en Chine, à environ 27 500 euros. Un prix qui sera cependant revu à la hausse si elle sort en Europe, elle qui fait partie des voitures électriques les plu…",
      url: "https://www.frandroid.com/survoltes/voitures-electriques/2307224_lune-des-voitures-electriques-les-plus-aerodynamiques-du-monde-rivale-de-la-xiaomi-su7-fait-ses-grands-debuts",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/08/lynk-co-z10-2024-3-1200x800-1.jpg",
      publishedAt: "2024-08-16T13:21:02Z",
      content:
        "Dévoilée au mois de juin dernier, la nouvelle Lynk &amp; Co Z10 est officiellement disponible à la commande en Chine, à environ 27 500 euros. Un prix qui sera cependant revu à la hausse si elle sort … [+4188 chars]",
    },
    {
      source: {
        id: null,
        name: "Wwwhatsnew.com",
      },
      author: "Juan Diego Polo",
      title:
        "EEUU considera una medida antimonopolio histórica: dividir a google",
      description:
        "La discusión sobre la posibilidad de dividir a Google, una de las empresas tecnológicas más grandes y poderosas del mundo, ha generado un debate intenso en ee.uu. Esta medida, que sería la más radical desde que el gobierno estadounidense desmanteló a at&t en …",
      url: "https://wwwhatsnew.com/2024/08/16/eeuu-considera-una-medida-antimonopolio-historica-dividir-a-google/",
      urlToImage:
        "https://wwwhatsnew.com/wp-content/uploads/2024/08/google-3.webp",
      publishedAt: "2024-08-16T06:00:13Z",
      content:
        "La discusión sobre la posibilidad de dividir a Google, una de las empresas tecnológicas más grandes y poderosas del mundo, ha generado un debate intenso en ee.uu. Esta medida, que sería la más radica… [+3755 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "John Viljoen",
      title: "Stocks Poised to Close Out Best Week of the Year: Markets Wrap",
      description:
        "(Bloomberg) -- A flurry of data showing the American economy’s resilience has put US stocks on course for their strongest week of the year.Most Read from...",
      url: "https://finance.yahoo.com/news/stocks-poised-close-best-week-113335188.html",
      urlToImage:
        "https://media.zenfs.com/en/bloomberg_technology_68/736fc3d12a822560d4d68c0c0e6ded35",
      publishedAt: "2024-08-16T11:33:35Z",
      content:
        "(Bloomberg) -- A flurry of data showing the American economys resilience has put US stocks on course for their strongest week of the year.\r\nMost Read from Bloomberg\r\nThe latest readings, from inflati… [+4040 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "Fortnite back on Android mobiles and some iPhones",
      description:
        "Fortnite, which is one of the most popular games in the world, has been unavailable for four years.",
      url: "https://www.bbc.com/news/articles/c70j5rx72yvo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/9844/live/9f697060-5bcf-11ef-99f7-3dae98c58eb1.jpg",
      publishedAt: "2024-08-16T13:38:06Z",
      content:
        "Fortnite, one of the world's biggest video games, is available as a mobile phone app for the first time in four years.\r\nIt's back, via the newly launched Epic Games Store, on Android phones worldwide… [+2832 chars]",
    },
    {
      source: {
        id: null,
        name: "PCWorld",
      },
      author: "Michael Crider",
      title: "The ROG Ally is $200 off at Best Buy right now",
      description:
        "Asus was the first major vendor to make a real competitor to Valve’s Steam Deck. And even though Windows-based gaming handhelds still aren’t as well-regarded as Valve’s SteamOS-based original, the ROG Ally is probably the best of the first batch.\r\n\n\n\n\nAnd it …",
      url: "https://www.pcworld.com/article/2429171/get-the-rog-ally-for-200-off-at-best-buy.html",
      urlToImage:
        "https://www.pcworld.com/wp-content/uploads/2024/08/PXL_20240509_153032486.MPb_.jpg?quality=50&strip=all&w=1024",
      publishedAt: "2024-08-16T14:21:11Z",
      content:
        "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAsus was the first m… [+2087 chars]",
    },
    {
      source: {
        id: null,
        name: "PCWorld",
      },
      author: "Ashley Biancuzzo",
      title:
        "How to choose the right laptop for your college major: A comprehensive guide",
      description:
        "Laptops are used for all sorts of things in college. In addition to completing assignments and researching topics, they’re also used for general web browsing as well as streaming the hottest shows and playing games. That said, graphic design majors (depending…",
      url: "https://www.pcworld.com/article/2414739/how-to-choose-the-right-laptop-for-your-college-major-a-comprehensive-guide.html",
      urlToImage:
        "https://www.pcworld.com/wp-content/uploads/2024/08/acer-swift-edge-16-2024-1-1.jpg?quality=50&strip=all&w=1024",
      publishedAt: "2024-08-16T10:30:00Z",
      content:
        "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nLaptops are used for… [+8524 chars]",
    },
    {
      source: {
        id: null,
        name: "Eurogamer.net",
      },
      author: "Tom Phillips",
      title:
        'Tim Sweeney: "No regrets" on Fortnite app store drama, as Epic Game Store launches on mobile in Europe',
      description:
        "Epic Games boss Tim Sweeney has said he has \"no regrets\" over his company's decision to break Apple and Google's terms of service back in August 2020 - something that saw the hugely-popular Fortnite booted off both iPhone and Android storefronts.\n\nThe careful…",
      url: "https://www.eurogamer.net/tim-sweeney-no-regrets-on-fortnite-app-store-drama-as-epic-game-store-launches-on-mobile-in-europe",
      urlToImage:
        "https://assetsio.gnwcdn.com/14br-freefortnite-europe-newsheader-1920x1080-transparent-1280x720-a6a9cee868e8.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      publishedAt: "2024-08-16T11:00:00Z",
      content:
        "Epic Games boss Tim Sweeney has said he has \"no regrets\" over his company's decision to break Apple and Google's terms of service back in August 2020 - something that saw the hugely-popular Fortnite … [+6942 chars]",
    },
    {
      source: {
        id: null,
        name: "Eurogamer.net",
      },
      author: "Vikki Blake",
      title:
        "The Elder Scrolls: Castles mobile game launches next month, pre-registration now open",
      description:
        "The Elder Scrolls mobile game, The Elder Scrolls: Castles, is set to launch on 10th September.The Elder Scrolls: Castles - which was quietly released into early access in September 2023 - is now open for pre-registration on both Apple and Android.From the sam…",
      url: "https://www.eurogamer.net/the-elder-scrolls-castles-mobile-game-launches-next-month-pre-registration-now-open",
      urlToImage:
        "https://assetsio.gnwcdn.com/CastlesBackground.webp?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      publishedAt: "2024-08-16T12:31:09Z",
      content:
        "The Elder Scrolls mobile game, The Elder Scrolls: Castles, is set to launch on 10th September.\r\nThe Elder Scrolls: Castles - which was quietly released into early access in September 2023 - is now op… [+1057 chars]",
    },
    {
      source: {
        id: null,
        name: "Smartworld.it",
      },
      author: "Alessandro Nodari",
      title:
        "L'HomePod con braccio robotico di Apple potrebbe arrivare nel 2026. E indovinate un po': non costerà poco",
      description:
        "Un iPad, un HomePod e un robot alimentato dall'intelligenza artificiale: scoprite quando arriverà e quanto costerà il nuovo dispositivo Apple\r\nL'articolo L'HomePod con braccio robotico di Apple potrebbe arrivare nel 2026. E indovinate un po': non costerà poco…",
      url: "https://www.smartworld.it/news/smart-display-apple-intelligence-2026-leak.html",
      urlToImage:
        "https://www.smartworld.it/images/2024/07/09/homepod-robot-2_1200x675.jpg",
      publishedAt: "2024-08-16T07:25:00Z",
      content:
        "Una delle novità maggiori di quest'anno di Apple è Apple Intelligence, la suite di funzioni IA della casa di Cupertino che con un po' di pazienza potete provare subito anche voi.\r\nMessa alle strette … [+1599 chars]",
    },
    {
      source: {
        id: null,
        name: "Smartworld.it",
      },
      author: "Vezio Ceniccola",
      title:
        "Novità tech della settimana: l'anello smart più atteso, due CPU da record e un Lumia che non lo era",
      description:
        "Scoprite tutti i prodotti più interessanti che abbiamo provato questa settimana. Abbiamo raccolto le migliori recensioni fatte dalla nostra redazione.\r\nL'articolo Novità tech della settimana: l'anello smart più atteso, due CPU da record e un Lumia che non lo …",
      url: "https://www.smartworld.it/news/novita-tech-settimana-16-agosto-2024.html",
      urlToImage:
        "https://www.smartworld.it/images/2024/08/12/samsung-galaxy-ring-def-011_1200x675.jpg",
      publishedAt: "2024-08-16T09:10:00Z",
      content:
        "Avete fame di novità tech anche a metà agosto? Ci pensiamo noi a salvare la situazione, con la nostra raccolta delle migliori recensioni che abbiamo realizzato questa settimana. Oggi vi proponiamo pr… [+4615 chars]",
    },
    {
      source: {
        id: null,
        name: "Creative Bloq",
      },
      author: "Daniel John",
      title:
        "'Anti-intelligent' photo app turns your iPhone into a classic camera",
      description:
        "Halide's Process zero could be the antidote to your AI photo woes.",
      url: "https://www.creativebloq.com/photography/anti-intelligent-photo-app-turns-your-iphone-into-a-classic-camera",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/hgARsusQ5xyyByiiN3924f-1200-80.png",
      publishedAt: "2024-08-16T09:43:23Z",
      content:
        "While iPhone cameras have become increasingly powerful over the last decade, growing from a single lens to three, there are some who find the on-device processing a little invasive. There's little yo… [+3221 chars]",
    },
    {
      source: {
        id: null,
        name: "Marketingdirecto.com",
      },
      author: "Valeria Rodriguez",
      title:
        "EE.UU. contempla dividir Google: Android y Google Ads serían empresas independientes",
      description:
        "El Departamento de Justicia de EE.UU. se está planteando la posibilidad de dividir a Google, separando Android y Google Ads en compañías independientes. \nLa entrada EE.UU. contempla dividir Google: Android y Google Ads serían empresas independientes se public…",
      url: "https://www.marketingdirecto.com/digital-general/digital/ee-uu-considera-dividir-google-android-google-ads-como-empresas-independientes",
      urlToImage:
        "https://www.marketingdirecto.com/wp-content/uploads/2024/08/Google-y-Android-.jpg",
      publishedAt: "2024-08-16T07:26:44Z",
      content:
        "El Departamento de Justicia de EE.UU. se está planteando la posibilidad de dividir a Google, separando Android y Google Ads en compañías independientes.El Departamento de Justicia de Estados Unidos h… [+3226 chars]",
    },
    {
      source: {
        id: null,
        name: "La Vanguardia",
      },
      author: "Fran Besora",
      title:
        "El Apple Watch tendrá una de las mejores funciones de Apple Intelligence",
      description:
        "Aunque el Apple Watch no soporta las funciones de Apple Intelligence, una de ellas sí llegará: el resumen de notificaciones. Una gran función que nos ayuda a saber rápidamente qué nos han dicho en grupos o en varios mensajes, y que podremos usar desde la muñe…",
      url: "https://www.lavanguardia.com/andro4all/apple/el-apple-watch-tendra-una-de-las-mejores-funciones-de-apple-intelligence",
      urlToImage:
        "https://www.lavanguardia.com/andro4all/hero/2024/08/apple-watch-notificaciones-ai.jpg?width=1200",
      publishedAt: "2024-08-16T10:14:41Z",
      content:
        "Apple Intelligence también llegará al Apple Watch\r\nAunque el Apple Watch no soporta las funciones de Apple Intelligence, una de ellas sí llegará: el resumen de notificaciones. Una gran función que no… [+2126 chars]",
    },
    {
      source: {
        id: null,
        name: "La Vanguardia",
      },
      author: "Fran Besora",
      title: "Apple lanzaría un dispositivo robótico para el hogar en 2026",
      description:
        "Apple estaría trabajando en el desarrollo de un dispositivo robótico de mesa para el hogar, que se lanzaría en 2026 si todo sigue como hasta ahora, ya que el desarrollo avanza rápidamente. Este dispositivo tendría una pantalla montada sobre un brazo robótico …",
      url: "https://www.lavanguardia.com/andro4all/apple/apple-lanzaria-un-dispositivo-robotico-para-el-hogar-en-2026",
      urlToImage:
        "https://www.lavanguardia.com/andro4all/hero/2024/08/robot-apple-hogar.jpg?width=1200",
      publishedAt: "2024-08-16T12:41:08Z",
      content:
        "Apple estaría desarrollando el dispositivo definitivo para el hogar\r\nApple estaría trabajando en el desarrollo de un dispositivo robótico de mesa para el hogar, que se lanzaría en 2026 si todo sigue … [+2032 chars]",
    },
    {
      source: {
        id: null,
        name: "La Vanguardia",
      },
      author: "Fran Besora",
      title:
        "El último y más potente MacBook Pro de Apple se hunde 130 euros en esta oferta",
      description:
        "Apple lanzó los MacBook Pro con procesador M3 el pasado mes de octubre y son los más nuevos y potentes dentro de esta gama de ordenadores de la compañía. Y es justamente este modelo el que podrías llevarte con un descuento de 130 euros si aprovechas esta incr…",
      url: "https://www.lavanguardia.com/andro4all/ofertas/el-ultimo-y-mas-potente-macbook-pro-de-apple-se-hunde-130-euros-en-esta-oferta",
      urlToImage:
        "https://www.lavanguardia.com/andro4all/hero/2024/08/macbook-pro-de-14.1723797408.7938.jpg?width=1200",
      publishedAt: "2024-08-16T12:30:53Z",
      content:
        "El MacBook Pro M3 tiene una gran oferta en Amazon\r\nApple lanzó los MacBook Pro con procesador M3 el pasado mes de octubre y son los más nuevos y potentes dentro de esta gama de ordenadores de la comp… [+2737 chars]",
    },
  ];
  constructor() {
    super();
    console.log("fvdf");
    this.state = {
      articles: this.articles,
      loading:false
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItems 
                title={element.title} 
                description={element.description} 
                imageurl={element.imageurl} 
                newsUrl={element.newsUrl}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
}