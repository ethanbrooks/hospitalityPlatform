import { Injectable } from '@angular/core';

export class Item {
    ImageSrc: string;
    VideoSrc: string;
    Name?: string;
    Meta?: any;
    ID?: string;
    heightRatio?: number;
    widthRatio?: number;
}

export class Meta {
    Name: string;
    Value: any;
}

const items: Item[] = [
    {
        ImageSrc: '/assets/img/menu/91162384-gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-.jpg',
        VideoSrc: '/assets/video/menu/26892133-tunatartar.mp4',
        Name: 'Swiss fondue with assorted cheeses',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Appetizers']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/93437225-gourmet-bread-on-the-wooden-table.jpg',
        VideoSrc: '/assets/video/menu/26893096-vegge.mp4',
        Name: 'Gourmet bread',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Appetizers']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/94665540-canape-with-salami-for-catering.jpg',
        VideoSrc: '/assets/video/menu/1951195-salad.mp4',
        Name: 'Canape with salami',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Appetizers']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/103517730-gourmet-fancy-charcuterie-board-with-meat-cheese-and-grapes.jpg',
        VideoSrc: '/assets/video/menu/26892907-antipasta.mp4',
        Name: 'Charcuterie board with meat cheese and grapes',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Appetizers']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/50911199-portion-of-stuffed-baked-potato-at-wooden-table.jpg',
        VideoSrc: '/assets/video/menu/26893096-vegge.mp4',
        Name: 'Stuffed baked potato',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Appetizers']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/52992319-black-risotto-with-parmesan-on-white-plate-wooden-table.jpg',
        VideoSrc: '/assets/video/menu/1951195-salad.mp4',
        Name: 'Black risotto with parmesan',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Appetizers']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/56630606-haute-cuisine-gourmet-food-scallops-with-asparagus-and-lardo-bacon.jpg',
        VideoSrc: '/assets/video/menu/26893096-vegge.mp4',
        Name: 'Scallops with sparagus and lardo bacon',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Appetizers']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/65193890-beautiful-chinese-food-and-sushi-rolls-on-wooden-background.jpg',
        VideoSrc: '/assets/video/menu/26892133-tunatartar.mp4',
        Name: 'Sushi rolls',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Appetizers']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/66541197-freshly-baked-bread-on-rustic-wooden-table.jpg',
        VideoSrc: '/assets/video/menu/26892907-antipasta.mp4',
        Name: 'Freshly baked bread',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Appetizers']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/72261797-purple-sauerkraut-made-with-apples-and-vinegar-and-plated-with-mint-leaves-for-a-gourmet-meal.jpg',
        VideoSrc: '/assets/video/menu/1951195-salad.mp4',
        Name: 'Purple sauerkraut',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Appetizers']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/73926114-latin-american-food-puchero-soup-with-corn-and-parsley-on-wooden-table-traditional-dish-of-uruguay-p.jpg',
        VideoSrc: '/assets/video/menu/26893096-vegge.mp4',
        Name: 'Puchero soup with corn and parsley',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Appetizers']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/75988917-gourmet-starter-of-white-asparagus-with-mayonnaise-and-thin-slices-of-ham-with-baby-potatoes-to-the-.jpg',
        VideoSrc: '/assets/video/menu/26892907-antipasta.mp4',
        Name: 'White asparagus and ham with baby potatoes',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Appetizers']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/68025054-start-your-day-with-homemade-gourmet-danish-pastry-raspberry-and-icing-on-the-wood-table.jpg',
        VideoSrc: '/assets/video/menu/1890616-pancakes.mp4',
        Name: 'Raspberry danish',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Breakfast', 'Dessert']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/95819102-gourmet-homemade-polish-paczki-donuts-with-jelly-filling.jpg',
        VideoSrc: '/assets/video/menu/1890616-pancakes.mp4',
        Name: 'Donuts with jelly filling',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Breakfast', 'Dessert']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/105416725-delicious-chocolate-croissant-with-chocolate-topping-gourmet-eating-scene-with-wooden-table-and-fres.jpg',
        VideoSrc: '/assets/video/menu/1890616-pancakes.mp4',
        Name: 'Chocolate croissant with chocolate topping',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Breakfast', 'Dessert']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/39249521-gourmet-tasty-egg-omelette-with-asparagus-and-cheese-on-top-of-wooden-round-cutting-board-served-on-.jpg',
        VideoSrc: '/assets/video/menu/1890616-pancakes.mp4',
        Name: 'Omelette with asparagus and cheese',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Breakfast']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/39291134-gourmet-breakfast-camembert-with-berry-jam-toast-coffee-and-grapes-on-wooden-table-close-up.jpg',
        VideoSrc: '/assets/video/menu/1890616-pancakes.mp4',
        Name: 'Camember with berry jam, toast, coffee and grapes',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Breakfast']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/54747586-stack-of-pancakes-with-flowing-honey-and-nuts-on-vintage-wooden-table-background-traditional-america.jpg',
        VideoSrc: '/assets/video/menu/1890616-pancakes.mp4',
        Name: 'Pancakes with honey and nuts',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Breakfast']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/106992844-sandwich-with-prosciutto-or-salami-or-crudo-antipasti-gourmet-bruschetta-snack.jpg',
        VideoSrc: '/assets/video/menu/26892904-pork.mp4',
        Name: 'Prosciutto sandwich',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Lunch']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/81279849-restaurant-hot-starter-food-rare-beef-waffle-sandwich-gourmet-restaurant-appetizers-menu-rare-beef-w.jpg',
        VideoSrc: '/assets/video/menu/26892904-pork.mp4',
        Name: 'Rare beef waffle sandwich',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Lunch']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/86107813-gourmet-gourmet-queso-jamón-de-queso-con-papas-fritas.jpg',
        VideoSrc: '/assets/video/menu/26892904-pork.mp4',
        Name: 'Queso jamón de queso con papas fritas',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Lunch']}
        ]

    }, {
        ImageSrc: '/assets/img/menu/84115709-picanha-steak-with-fries-and-beer.jpg',
        VideoSrc: '/assets/video/menu/26892904-pork.mp4',
        Name: 'Picanha steak with fries',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Lunch']}
        ]

    }, {
        ImageSrc: '/assets/img/menu/93209259-beer-being-poured-into-glass-with-gourmet-steak-and-french-fries-on-wooden-background-.jpg',
        VideoSrc: '/assets/video/menu/26892904-pork.mp4',
        Name: 'Steak and french fries',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Lunch']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/93513509-selection-of-three-different-gourmet-burgers-with-a-fish-seafood-burger-surf-and-turf-with-bacon-and.jpg',
        VideoSrc: '/assets/video/menu/26892904-pork.mp4',
        Name: 'Gourmet seafood burger with bacon',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Lunch', 'Dinner']}
        ]
    }, {
        ImageSrc: '/assets/img/menu/106915470-gourmet-seafood-scampi-or-langoustine-or-norway-lobster-are-served-on-a-black-plate-with-sauce-and-l.jpg',
        VideoSrc: '/assets/video/menu/26892904-seafood.mp4',
        Name: 'Seafood scampi',
        Meta: [
            {Name: 'Price', Value: '31.00'},
            {Name: 'Description', Value: 'gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-'},
            {Name: 'Gallery', Value: ['Appetizers']}
        ]
    }
    /*,{
        ImageSrc:"/assets/img/menu/117402049-national-homemade-georgian-dish-pilaf-chaykhansky-with-meat-and-vegetables-on-a-wooden-table-in-a-re.jpg",
        VideoSrc: "/assets/video/menu/26892904-pasta.mp4",
        Name: "Pilaf chaykhansky with meat and vegetables",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dinner"]
    },{
        ImageSrc:"/assets/img/menu/31645232-italian-spaghetti-on-rustic-wooden-table.jpg",
        VideoSrc: "/assets/video/menu/26892904-pasta.mp4",
        Name: "Spaghetti",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dinner",  "Lunch"]
    },{
        ImageSrc:"/assets/img/menu/79441689-gourmet-portuguese-fried-octopus-calamari-style-seafood-set-meal-with-fries.jpg",
        VideoSrc: "/assets/video/menu/26892904-seafood.mp4",
        Name: "Portuguese fried octopus calamari with fries",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Appetizers"]
    },{
        ImageSrc:"/assets/img/menu/83559318-gourmet-meeresfrüchte-valencia-paella-mit-frischen-langustinen-muscheln-muscheln-und-tintenfisch-auf-pika.jpg",
        VideoSrc: "/assets/video/menu/26892904-pasta.mp4",
        Name: "Meeresfrüchte valencia paella",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dinner"]
    },{
        ImageSrc:"/assets/img/menu/84423653-plate-with-delicious-steak-salad-sauce-and-rice-on-a-wooden-table-healthy-gourmet-food-made-of-meat-.jpg",
        VideoSrc: "/assets/video/menu/26892904-pasta.mp4",
        Name: "Steak with salad, sauce and rice",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dinner",  "Lunch"]
    },{
        ImageSrc:"/assets/img/menu/88855737-plate-with-delicious-grilled-salmon-fish-steak-and-salad-on-a-wooden-table-healthy-gourmet-food-made.jpg",
        VideoSrc: "/assets/video/menu/26892904-seafood.mp4",
        Name: "Grilled salmon steak and salad",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dinner",  "Lunch"]
    },{
        ImageSrc:"/assets/img/menu/89704744-grilled-salmon-fish-steak-with-vegetable-salad-on-a-plate-gourmet-seafood-meal-made-of-fish-and-vege.jpg",
        VideoSrc: "/assets/video/menu/26892904-pork.mp4",
        Name: "Grilled salmon with vegetable salad",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dinner",  "Lunch"]
    },{
        ImageSrc:"/assets/img/menu/89829134-gourmet-grill-restaurant-beef-steak-menu-skirt-steak-on-wooden-plate-black-angus-beef-steak-beef-ste.jpg",
        VideoSrc: "/assets/video/menu/26892904-pasta.mp4",
        Name: "Skirt-steak black-angus",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dinner"]
    },{
        ImageSrc:"/assets/img/menu/89967683-gourmet-grill-restaurant-steak-menu-t-bone-beef-steak-on-wooden-background-black-angus-prime-beef-st.jpg",
        VideoSrc: "/assets/video/menu/26892904-pasta.mp4",
        Name: "T-bone black angus prime-beef",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dinner"]
    },{
        ImageSrc:"/assets/img/menu/92233282-gourmet-homemade-steak-and-shrimp-surf-n-turf.jpg",
        VideoSrc: "/assets/video/menu/26892904-seafood.mp4",
        Name: "Steak and shrimp",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dinner"]
    },{
        ImageSrc:"/assets/img/menu/98756191-plate-with-medium-rare-meat-steak-sauce-and-salad-on-a-wooden-table-healthy-gourmet-food-made-of-mea.jpg",
        VideoSrc: "/assets/video/menu/26892904-pasta.mp4",
        Name: "Steak and steak sauce and salad",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dinner"]
    },{
        ImageSrc:"/assets/img/menu/88607510-gourmet-sweet-fancy-candy-apples-for-halloween.jpg",
        VideoSrc: "/assets/video/menu/1951210-desert.mp4",
        Name: "Candy apples",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dessert"]
    },{
        ImageSrc:"/assets/img/menu/81600111-gourmet-chocolate-cake-topped-with-frosting-candy-and-cupcakes.jpg",
        VideoSrc: "/assets/video/menu/1951210-desert.mp4",
        Name: "Chocolate cake topped with frosting candy and cupcakes",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dessert"]
    },{
        ImageSrc:"/assets/img/menu/97595409-border-of-assorted-flavours-of-gourmet-artisanal-ice-cream-served-in-sugar-cones-over-textures-grey-.jpg",
        VideoSrc: "/assets/video/menu/1951210-desert.mp4",
        Name: "Artisanal ice-cream",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dessert"]
    },{
        ImageSrc:"/assets/img/menu/18785494-gourmet-banana-split.jpg",
        VideoSrc: "/assets/video/menu/1951210-desert.mp4",
        Name: "Gourmet Banana Split",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dessert"]
    },{
        ImageSrc:"/assets/img/menu/24323493-a-slice-of-gourmet-chocolate-espresso-cake.jpg",
        VideoSrc: "/assets/video/menu/1951210-desert.mp4",
        Name: "Chocolate espresso cake",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dessert"]
    },{
        ImageSrc:"/assets/img/menu/27930277-assorted-fancy-gourmet-cupcakes-with-frosting-on-a-background.jpg",
        VideoSrc: "/assets/video/menu/1951210-desert.mp4",
        Name: "Cupcakes",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dessert"]
    },{
        ImageSrc:"/assets/img/menu/38051632-gourmet-chocolate-fruit-and-nuts-dessert-platter.jpg",
        VideoSrc: "/assets/video/menu/1951210-desert.mp4",
        Name: "Chocolate with fruit and nuts",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dessert"]
    },{
        ImageSrc:"/assets/img/menu/43616727-american-cookies-on-wooden-table.jpg",
        VideoSrc: "/assets/video/menu/1951210-desert.mp4",
        Name: "Cookies",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dessert"]
    },{
        ImageSrc:"/assets/img/menu/49087749-gourmet-assorted-chocolates-on-the-table-.jpg",
        VideoSrc: "/assets/video/menu/1951210-desert.mp4",
        Name: "Chocolates",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dessert"]
    },{
        ImageSrc:"/assets/img/menu/60335594-delicious-vegetarian-brownie-slice-for-gourmet-on-wooden-table-.jpg",
        VideoSrc: "/assets/video/menu/1951210-desert.mp4",
        Name: "Vegetarian brownie",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dessert"]
    },{
        ImageSrc:"/assets/img/menu/67961178-chocolate-pie-with-pear-autumn-homemade-traditional-american-holiday-baked-pastry-dessert-gourmet-fo.jpg",
        VideoSrc: "/assets/video/menu/1951210-desert.mp4",
        Name: "Chocolate pie with pear",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dessert"]
    },{
        ImageSrc:"/assets/img/menu/84925604-oats-brownies-with-measuring-spoon-on-the-wooden-table.jpg",
        VideoSrc: "/assets/video/menu/1951210-desert.mp4",
        Name: "Oats brownies",
        Meta: [
            {Name:'Price', Value: '31.00'},
            {Name: "Description", Value: "gourmet-swiss-fondue-dinner-on-a-winter-evening-with-assorted-cheeses-on-a-board-alongside-a-heated-"}
        ],
        Gallery: ["Dessert"]
    }*/
    ];

@Injectable()
export class GalleryService {
    getItems(): Item[] {
        return items;
    }
}
