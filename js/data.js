/**
 * This file is where all the data of the website are stored
 * Then we can use it everywhere
 */

const nameWebsite = "xtsen.me";

const Websites = [
    {
        title: "Gallery",
        desc: "Gallery est un projet personnel afin de m'améliorer. Ce site a pour but de créer une galerie originale. Ce site ne contenant qu'une seule page m'a demandé environ 5h de travail.",
        url: "https://xtsen.github.io/portfolioExample/"
    },
    {
        title: "Nihfagou Products",
        desc: "Nihfagou Products est un site de revente de téléphones reconditionnés mais aussi d'autres produites informatiques et technologiques. Ce design a été inspiré de backmarket. Ce projet a nécessité environ 30h de travail.",
        url: "https://xtsen.github.io/nihfagou-market/"
    },
    {
        title: "YKA",
        desc: "YKA est un site de vente de vêtements, ce site intègre un système de panel de connexion ainsi qu'un panier. pour ce site, 50h ont été nécessaires.",
        url: "http://yka.epizy.com/"
    },
    {
        title: "Ishy",
        desc: "Ishy est un site 'vitrine' pour un robot discord. Ce genre de site est très répandu. Ce site à nécessité 10h de travail.",
        url: "https://xtsen.github.io/Ishy/"
    },
    {
        title: "SFDApp",
        desc: "Ici je suis parti sur un domaine un peu plus éducatif, j'avais pour objectif de re-designer le site internet de mon lycée. Pour faire ce site, il m'a fallu environ 40h.",
        url: "https://xtsen.github.io/le-site-sfda/"
    },
    {
        title: "Skate In Peace",
        desc: "Skate In Peace était mon projet de fin d'année de première. J'y ai intégré des fonctionnalités assez compliquées c'est pour cela que ce projet a nécessité environ 20h.",
        url: "https://xtsen.github.io/Everyweb/Skate-in-peace/home.html"
    },
]

const articles = [
    {
        title: 'Bienvenue',
        content: "Bonjour, je vous souhaite la bienvenue sur mon nouveau site : xtsen.me. Tout d'abord je me présente je suis Nesta Loisy, élève au lycée Saint Francois d'Assise à la Roche sur Yon. Je code depuis maintenant 3 ans et durant cette dernière année, je me suis décidé à participer a des projets. Je raconterai mes expériences futures dans cet espace en espérant pouvoir donner envie à des personnes de se lancer dans le code.",
        date: '27 novembre 2021'
    }
]
const priceCookie = 2

const Packages = [
    {
        title: "Standard",
        price: 50, 
        benefits : [
            "Nombre de pages : 1", 
            "Nombre de revisions : 2",
            "Temps de livraison : 7"
        ],
        desc: "Le pack Standard est un pack idéal pour une galerie, un portfolio ou encore une page de présentation. Ce pack ne contient pas beaucoup d'avantages mais est livré rapidement."
    },
    {
        title: "Pro",
        price: 100, 
        benefits : [
            "Nombre de pages : 2-4", 
            "Nombre de revisions : 4",
            "Temps de livraison : 10-15",
            "Code source livré",
            "Support de payment",
            "Nom de domaine personalisé"
        ],
        desc: "Le pack Pro est idéal pour un portfolio, un site vitrine ou encore un site pour une association. Ce pack a pour seul désavantage un nombre limité de pages mais le temps de livraison reste tout de même très court."
    },
    {
        title: "Premium",
        price: 150, 
        benefits : [
            "Nombre de pages : illimité", 
            "Nombre de revisions : 5",
            "Temps de livraison : 15-30",
            "Code source livré",
            "Support de payment",
            "Nom de domaine personalisé"
        ],
        desc: "Le pack Premium est parfait pour tout type de site. Il est autant adapté pour un site de drop shipping que pour un portfolio développé. Ce pack peut aussi être idéal pour un site tel que pour un site de documentation."
    }
]