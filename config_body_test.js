var Transaction = 'Commande FR';
var Catalog = 'Catalog Buyers';
var blocks_config = {
    'free_shipping': {
        text: "Frais de port offert à partir de ",
        field: "TSAFrancoReel",
        svg: "https://storage.pepperi.com/General/Icons/truck.svg"
    },
    'account_balance': {
        text: "Frais de port offert à partir de",
        field: "TSAFrancoReel",
        measure_unit: "\u20ac",
        svg: "https://storage.pepperi.com/General/Icons/truck.svg"
    },
    'active-order':
    {
        name: "Commande en cours",
        buttonText: "Retour Commande",
        table: [{
            text: "Sous-Total",
            field: "SubTotal",
            measure_unit: "\u20ac"
        }, {
            text: "Total Quantit\u00e9",
            field: "QuantitiesTotal"
        }, {
            text: "Total HT",
            field: "GrandTotal",
            measure_unit: "\u20ac"
        }]
    }
}
var Brands = [
    
      {
        title: "padding:5px 5px 5px 5px;text-align:center",
        text:"Cordes - Nylon",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo'
    },
    {
        title: "padding:5px 5px 5px 5px;text-align:center",
        text:"Cordes - Polyethylène",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo'
    },
    {
        title: "padding:5px 5px 5px 5px;text-align:center",
        text:"Cordes - Hempex",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo'
    },
     {
       title: "padding:5px 5px 5px 5px;text-align:center",
        text:"Cordes - Synthétique divers",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo'
    },
    {
        title: "padding:5px 5px 5px 5px;text-align:center",
        text:"Cordes - Sisal",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo'
    },
    {
        title: "padding:5px 5px 5px 5px;text-align:center",
        text:"Cordes - Cotton",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo'
    },
    {         
        title: "padding:5px 5px 5px 5px;text-align:center",        
        text:"Cordes - Chanvre",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo'
    },
{         
title: "padding:5px 5px 5px 5px;text-align:center",        
text:"Cordes - Jute",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Cordes Naturel divers",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Chaine",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Câbles d'acier",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Fil laguture",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Quincaillerie",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Sangles de levage",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Sangles de cerclage",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Sangles d'arrimage",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Elingues rondes",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Sandow",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Filets",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Matériel de volets",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Matériel d’emballage",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Paillassons - Synthétique",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Paillassons - Cotton",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Paillassons - Coco",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Paillassons - Caoutchouc",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Paillassons - Astroturf",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Divers",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Matières premières",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Emaballage",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Rolplanken",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Wielen",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Cordes - Polyester",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Ambachten",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
},
{         title: "padding:5px 5px 5px 5px;text-align:center",        text:"Stellingmateriaal",
link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
image: 'https://ludopepperi.github.io/Corbeo'
}

    
    
    ]

//Promotions block
var Promotions = [
    {
        title: "Titre 1",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo'
    }
    ]
var Promotions2 = [
    {
        title: "Titre 2",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%221fed1213-9371-4267-8e07-c83c56b057e1%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo'
    }
    ]
var Promotions3 = [    
    {
        title: "Titre 3",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2209fd1d0b-e9f8-414f-9c10-e3e4b72049ee%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo'
    }
    ]
var Promotions4 = [
    {
        title: "Titre 4",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%2202837f2a-b9c3-4bbd-a455-5c090d211c89%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo'
    }
]

var CaruselData = [
    {

        title: '',
        imageURL: 'https://ludopepperi.github.io/Corbeo',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
    {

        title: '',
        imageURL: 'https://ludopepperi.github.io/Corbeo ',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
    {

        title: '',
        imageURL: 'https://ludopepperi.github.io/Corbeo',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
    {

        title: '',
        imageURL: 'https://ludopepperi.github.io/Corbeo',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
];
customHomepage.test = "test"
