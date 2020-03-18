export const SERVER_ADDRESS = 'http://127.0.0.1:8000';
export const LOGIN_API_URL = SERVER_ADDRESS + '/api/verifyUser';
export const ADD_VENDOR_API_URL = SERVER_ADDRESS + '/api/user';
export const ADD_PRODUCT_API_URL = SERVER_ADDRESS + '/api/product';
export const ADD_PRODUCT_MODAL_API_URL = SERVER_ADDRESS + '/api/storeViaModal';
export const GET_VENDORS_API_URL = SERVER_ADDRESS + '/api/user';
export const GET_API_STORES_API_URL = SERVER_ADDRESS + '/api/getApiStores';
export const SHARAF_DG_API_URL = SERVER_ADDRESS + '/api/getProductsFromSharafDGAPI';
export const GET_CATEGORIES = SERVER_ADDRESS + '/api/getCategories';
export const IMAGE_PATH = SERVER_ADDRESS + '/images/';
export const API_URL = 'http://dealstimer-admin.toortechnologies.com/test/index.php';

 
export const TYPE_CATEGORY_VIEW= [
    {
        'value':'fashion',
        'label':'Fashion',
        'children':[
            {
                'value':'watches',
                'label':'Watches',
                'children':[
                    {
                        'value':'womenswatchs',
                        'label':'Women\'s Watches',
                        'children':[]
                    },
                    {
                        'value':'menswatchs',
                        'label':'Men\'s Watches',
                        'children':[]
                    },
                    {
                        'value':'unisexwatches',
                        'label':'Unisex Watches',
                        'children':[]
                    },
                ]
            },
            {
                'value':'eyewear',
                'label':'Eyewear',
                'children':[
                    {
                        'value':'womenssunglasses',
                        'label':'Women\'s Sunglasses',
                        'children':[]
                    },
                    {
                        'value':'menssunglasses',
                        'label':'Men\'s Sunglasses',
                        'children':[]
                    },
                    {
                        'value':'frames',
                        'label':'Frames',
                        'children':[]
                    },
                    {
                        'value':'contactlenses',
                        'label':'Contact Lenses',
                        'children':[]
                    },
                ]
            },
            {
                'value':'womenbagsandaccessories',
                'label':'Women Bags & Accessories',
                'children':[
                    {
                        'value':'handbags',
                        'label':'Hand Bags',
                        'children':[]
                    },
                    {
                        'value':'slingbags',
                        'label':'Sling Bags',
                        'children':[]
                    },
                    {
                        'value':'walletsandclutches',
                        'label':'Wallets & Clutches',
                        'children':[]
                    },
                    {
                        'value':'cardholders',
                        'label':'Card Holders',
                        'children':[]
                    },
                    {
                        'value':'backpacks',
                        'label':'Backpacks',
                        'children':[]
                    },
                    {
                        'value':'jewellery',
                        'label':'Jewellery',
                        'children':[]
                    }
                ]
            },
            {
                'value':'watchesbybrands',
                'label':'Watches By Brands',
                'children':[
                    {
                        'value':'gshockandbabyg',
                        'label':'Gshock & Baby G',
                        'children':[]
                    },
                    {
                        'value':'fossil',
                        'label':'Fossil',
                        'children':[]
                    },
                    {
                        'value':'diesel',
                        'label':'Diesel',
                        'children':[]
                    },
                    {
                        'value':'rivolibrands',
                        'label':'Rivoli Brands',
                        'children':[]
                    },
                    {
                        'value':'casio',
                        'label':'Casio',
                        'children':[]
                    }
                ]
            },            
            {
                'value':'sunglassesbybrands',
                'label':'Sunglasses By Brands',
                'children':[
                    {
                        'value':'rayban',
                        'label':'Ray-Ban',
                        'children':[]
                    },
                    {
                        'value':'guess',
                        'label':'Guess',
                        'children':[]
                    },
                    {
                        'value':'diesel',
                        'label':'Diesel',
                        'children':[]
                    },
                    {
                        'value':'rovertocavalli',
                        'label':'Roberto Cavalli',
                        'children':[]
                    },
                    {
                        'value':'swarovski',
                        'label':'Swarovski',
                        'children':[]
                    },
                    {
                        'value':'timberland',
                        'label':'Timberland',
                        'children':[]
                    },
                    {
                        'value':'gant',
                        'label':'Gant',
                        'children':[]
                    },
                ]
            },



//             //{
//     category: 'sunglassesbybrands',
//     subCategory: ['rayban', 'guess', 'diesel', 'rovertocavalli', 'swarovski', 'timberland', 'gant'],
//     subCategoryName: ['Ray-Ban', 'Guess', 'Diesel', 'Roberto Cavalli', 'Swarovski', 'Timberland', 'Gant']
// },
// {
//     category: 'highlights',
//     subCategory: ['mensclothing', 'womensclothing', 'luggageandtravelessentials', 'fragrances', 'beauty'],
//     subCategoryName: ['Men\'s Clothing', 'Women\'s Clothing', 'Luggage & Travel Essentials', 'Fragrances', 'Beauty']
// },
// {
//     category: 'smartphones',
//     subCategory: ['iphone11and11pro', 'samsunggalaxynote10', 'samsunggalaxys10', 'iphonexsandiphonexsmax', 'oporeno', 'huaweip30series', 'iphonexr', 'iphonex', 'iphone8and8plus', 'midrangesmartphones'],
//     subCategoryName: ['Iphone 11 & 11 Pro', 'Samsung Galaxy Note 10', 'Samsung Galaxy S10', 'Iphone XS & Iphone XS Max', 'Oppo Reno', 'Huawei P30 Series', 'Iphone XR', 'Iphone X', 'Iphone 8 & 8 Plus', 'Mid-Range Smartphones']
// },
// {
//     category: 'tablets',
//     subCategory: ['thenewipadpro', 'ipads', 'samsungtabs', 'lenovo', 'microsoftsurfacepro', 'huaweimediapad'],
//     subCategoryName: ['The New iPad Pro', 'iPads', 'Samsung Tabs', 'Lenovo', 'Microsoft Surface Pro', 'Huawei MediaPad']
// },

            {
                'value':'highlights',
                'label':'Highlights',
                'children':[
                    {
                        'value':'mensclothing',
                        'label':'Men\'s Clothing',
                        'children':[]
                    },
                    {
                        'value':'womensclothing',
                        'label':'Women\'s Clothing',
                        'children':[]
                    },
                    {
                        'value':'luggageandtravelessentials',
                        'label':'Luggage & Travel Essentials',
                        'children':[]
                    },
                    {
                        'value':'fragrances',
                        'label':'Fragrances',
                        'children':[]
                    },
                    {
                        'value':'beauty',
                        'label':'Beauty',
                        'children':[]
                    },

                ]
            }
        ]
    },
    {
        'value':'mobiles',
        'label':'Mobiles',
        'children':[
            {
                'value':'smartphones',
                'label':'Smartphones',
                'children':[
                    {
                        'value':'iphone11and11pro',
                        'label':'Iphone 11 & 11 Pro',
                        'children':[]
                    },
                    {
                        'value':'samsunggalaxynote10',
                        'label':'Samsung Galaxy Note 10',
                        'children':[]
                    },
                    {
                        'value':'samsunggalaxys10',
                        'label':'Samsung Galaxy S10',
                        'children':[]
                    },
                    {
                        'value':'iphonexsandiphonexsmax',
                        'label':'Iphone XS & Iphone XS Max',
                        'children':[]
                    },
                    {
                        'value':'oporeno',
                        'label':'Oppo Reno',
                        'children':[]
                    },
                    {
                        'value':'huaweip30series',
                        'label':'Huawei P30 Series',
                        'children':[]
                    },
                    {
                        'value':'iphonexr',
                        'label':'Iphone XR',
                        'children':[]
                    },
                    {
                        'value':'iphonex',
                        'label':'Iphone X',
                        'children':[]
                    },
                    {
                        'value':'iphone8and8plus',
                        'label':'Iphone 8 & 8 Plus',
                        'children':[]
                    },
                    {
                        'value':'midrangesmartphones',
                        'label':'Mid-Range Smartphones',
                        'children':[]
                    },


                ]
            },
            {
                'value':'tablets',
                'label':'Tablets',
                'children':[
                    {
                        'value':'thenewipadpro',
                        'label':'The New iPad Pro',
                        'children':[]
                    },
                    {
                        'value':'ipads',
                        'label':'iPads',
                        'children':[]
                    },
                    {
                        'value':'samsungtabs',
                        'label':'Samsung Tabs',
                        'children':[]
                    },
                    {
                        'value':'lenovo',
                        'label':'Lenovo',
                        'children':[]
                    },
                    {
                        'value':'microsoftsurfacepro',
                        'label':'Microsoft Surface Pro',
                        'children':[]
                    },
                    {
                        'value':'huaweimediapad',
                        'label':'Huawei MediaPad',
                        'children':[]
                    }, 
                ]
            },
            {
                'value':'accessories',
                'label':'Accessories',
                'children':[
                    {
                        'value':'usbcconnectorsandcables',
                        'label':'USB C Connectors',
                        'children':[]
                    },
                    {
                        'value':'screenprotectors',
                        'label':'Screen Protectors',
                        'children':[]
                    },
                    {
                        'value':'powerbanks',
                        'label':'Power Banks',
                        'children':[]
                    },
                    {
                        'value':'memorycards',
                        'label':'Memory Cards',
                        'children':[]
                    },
                    {
                        'value':'earphonesandheadphones',
                        'label':'Earphones & Headphones',
                        'children':[]
                    },
                    {
                        'value':'more',
                        'label':'More',
                        'children':[]
                    }, 
                ]
            },
            {
                'value':'bybrands',
                'label':'By Brands',
                'children':[
                    {
                        'value':'iphones',
                        'label':'iPhones',
                        'children':[]
                    },
                    {
                        'value':'samsung',
                        'label':'Samsung',
                        'children':[]
                    },
                    {
                        'value':'huawei',
                        'label':'Huawei',
                        'children':[]
                    },
                    {
                        'value':'honor',
                        'label':'Honor',
                        'children':[]
                    },
                    {
                        'value':'nokia',
                        'label':'Nokia',
                        'children':[]
                    }, 
                ]
            },
            {
                'value':'wearables',
                'label':'Wearables',
                'children':[
                    {
                        'value':'applewatch',
                        'label':'Apple Watch',
                        'children':[]
                    },
                    {
                        'value':'samsungwatch',
                        'label':'Samsung Watch',
                        'children':[]
                    },
                    {
                        'value':'huaweiwatch',
                        'label':'Huawei Watch',
                        'children':[]
                    },
                    {
                        'value':'fitnesstrackers',
                        'label':'Fitness Trackers',
                        'children':[]
                    },
                    {
                        'value':'smartwatches',
                        'label':'Smartwatches',
                        'children':[]
                    },
                    {
                        'value':'budgetsmartwatches',
                        'label':'Budget Smartwatches',
                        'children':[]
                    }, 
                ]
            },
        ]
    },
    {
        'value':'electronics',
        'label':'Electronics',
        'children':[
            {
                'value':'televisions',
                'label':'Televisions',
                'children':[
                    {
                        'value':'8ktelevisions',
                        'label':'8K Televisions',
                        'children':[]
                    },
                    {
                        'value':'4kuhd',
                        'label':'4K UHD',
                        'children':[]
                    },
                    {
                        'value':'oledtvs',
                        'label':'OLED TV\'s',
                        'children':[]
                    },
                    {
                        'value':'65inchandabove',
                        'label':'65\' and above',
                        'children':[]
                    },
                    {
                        'value':'55inchand65inch',
                        'label':'55\' to 65\'',
                        'children':[]
                    }, 
                ]
            },
            {
                'value':'laptops',
                'label':'Laptops',
                'children':[
                    {
                        'value':'macbook',
                        'label':'Macbook',
                        'children':[]
                    },
                    {
                        'value':'microsoftsurface',
                        'label':'Microsoft Surface',
                        'children':[]
                    },
                    {
                        'value':'gaminglaptops',
                        'label':'Gaming Laptops',
                        'children':[]
                    },
                    {
                        'value':'modernlaptops',
                        'label':'Modern Laptops',
                        'children':[]
                    },
                    {
                        'value':'hp',
                        'label':'HP',
                        'children':[]
                    },
                    {
                        'value':'dell',
                        'label':'Dell',
                        'children':[]
                    },
                    {
                        'value':'lenovo',
                        'label':'Lenovo',
                        'children':[]
                    },
                    {
                        'value':'asus',
                        'label':'Asus',
                        'children':[]
                    },
                    {
                        'value':'acer',
                        'label':'Acer',
                        'children':[]
                    },
                     
                ]
            },
            {
                'value':'cameras',
                'label':'Cameras',
                'children':[
                    {
                        'value':'dslrs',
                        'label':'DSLRs',
                        'children':[]
                    },
                    {
                        'value':'digitalcameras',
                        'label':'Digital Cameras',
                        'children':[]
                    },
                    {
                        'value':'instantcameras',
                        'label':'Instant Cameras',
                        'children':[]
                    },
                    {
                        'value':'securityandsurveillance',
                        'label':'Security and Surveillance',
                        'children':[]
                    },
                    {
                        'value':'accessories',
                        'label':'Accessories',
                        'children':[]
                    },
                    {
                        'value':'cameralenses',
                        'label':'Camera Lenses',
                        'children':[]
                    },
                    {
                        'value':'camerabags',
                        'label':'Camera Bags',
                        'children':[]
                    }, 
                ]
            },
            {
                'value':'videogames',
                'label':'Videogames',
                'children':[
                    {
                        'value':'ps4games',
                        'label':'PS4 Games',
                        'children':[]
                    },
                    {
                        'value':'xboxonegames',
                        'label':'Xbox One Games',
                        'children':[]
                    },
                    {
                        'value':'allgames',
                        'label':'All Games',
                        'children':[]
                    },
                    {
                        'value':'consoles',
                        'label':'Consoles',
                        'children':[]
                    },
                    {
                        'value':'gameenhancers',
                        'label':'Game Enhancers',
                        'children':[]
                    }, 
                ]
            },
            {
                'value':'homeaudioandvideo',
                'label':'Home Audio & Video',
                'children':[
                    {
                        'value':'speakers',
                        'label':'Speakers',
                        'children':[]
                    },
                    {
                        'value':'soundbars',
                        'label':'Sound Bars',
                        'children':[]
                    },
                    {
                        'value':'hometheatres',
                        'label':'Home Theatres',
                        'children':[]
                    },
                    {
                        'value':'projectors',
                        'label':'Projectors',
                        'children':[]
                    },
                    {
                        'value':'dvdandblurayplayers',
                        'label':'DVD and Blu-ray players',
                        'children':[]
                    },
                    {
                        'value':'noisecancellationheadphones',
                        'label':'Noise Cancellation Headphones',
                        'children':[]
                    },
                    {
                        'value':'tvaccessories',
                        'label':'TV Accessories',
                        'children':[]
                    }, 
                ]
            },
            {
                'value':'itequipment',
                'label':'IT Equipment',
                'children':[
                    {
                        'value':'printersandinks',
                        'label':'Printers & Inks',
                        'children':[]
                    },
                    {
                        'value':'monitors',
                        'label':'Monitors',
                        'children':[]
                    },
                    {
                        'value':'routers',
                        'label':'Routers',
                        'children':[]
                    },
                    {
                        'value':'software',
                        'label':'Software',
                        'children':[]
                    },
                    {
                        'value':'harddrives',
                        'label':'Hard Drives',
                        'children':[]
                    }, 
                ]
            },
            {
                'value':'camcorders',
                'label':'Camcorders',
                'children':[
                    {
                        'value':'macbook',
                        'label':'Macbook',
                        'children':[]
                    },
                    {
                        'value':'actioncamcorders',
                        'label':'Action Camcorders',
                        'children':[]
                    },
                    {
                        'value':'camcorders',
                        'label':'Camcorders',
                        'children':[]
                    }, 
                ]
            }
        ]
    },
    {
        'value':'homeandkitchen',
        'label':'Home & Kitchen',
        'children':[
            {
                'value':'bedding',
                'label':'Bedding',
                'children':[
                    {
                        'value':'bedsheets',
                        'label':'Bedsheets',
                        'children':[]
                    },
                    {
                        'value':'comforters',
                        'label':'Comforters',
                        'children':[]
                    },
                    {
                        'value':'blanketsandquits',
                        'label':'Blankets & Quits',
                        'children':[]
                    },
                    {
                        'value':'duvetsandcovers',
                        'label':'Buvets & Covers',
                        'children':[]
                    },
                    {
                        'value':'mattressandtoppers',
                        'label':'Mattress & Toppers',
                        'children':[]
                    }, 
                ]
            },
            {
                'value':'homedecor',
                'label':'Homedecor',
                'children':[
                    {
                        'value':'carpets',
                        'label':'Carpets',
                        'children':[]
                    },
                    {
                        'value':'comforters',
                        'label':'Comforters',
                        'children':[]
                    },
                    {
                        'value':'blanketsandquits',
                        'label':'Blankets & Quits',
                        'children':[]
                    },
                    {
                        'value':'duvetsandcovers',
                        'label':'Buvets & Covers',
                        'children':[]
                    },
                    {
                        'value':'mattressandtoppers',
                        'label':'Mattress & Toppers',
                        'children':[]
                    }, 
                ]
            },
            {
                'value':'kitchenutensils',
                'label':'Kitchen Utensils',
                'children':[
                    {
                        'value':'cookersandcookingpans',
                        'label':'Cookers & Cooking Pans',
                        'children':[]
                    },
                    {
                        'value':'cookingsets',
                        'label':'Cooking Sets',
                        'children':[]
                    },
                    {
                        'value':'cutleryandaccessories',
                        'label':'Cutlery & Accessories',
                        'children':[]
                    },
                    {
                        'value':'racks',
                        'label':'Racks',
                        'children':[]
                    },
                    {
                        'value':'combooffers',
                        'label':'Combo Offers',
                        'children':[]
                    },
                    {
                        'value':'bakeware',
                        'label':'Bakeware',
                        'children':[]
                    },
                    {
                        'value':'containersandstorage',
                        'label':'Containers and Storage',
                        'children':[]
                    }, 
                ]
            },
            {
                'value':'homeapplicances',
                'label':'Home Applicances',
                'children':[
                    {
                        'value':'cookingranges',
                        'label':'Cooking Rangers',
                        'children':[]
                    },
                    {
                        'value':'builtinappliances',
                        'label':'Built In Appliances',
                        'children':[]
                    },
                    {
                        'value':'refrigerators',
                        'label':'Refrigerators',
                        'children':[]
                    },
                    {
                        'value':'washingmachines',
                        'label':'Washing Machines',
                        'children':[]
                    },
                    {
                        'value':'airconditioners',
                        'label':'Air Conditioners',
                        'children':[]
                    },
                    {
                        'value':'dishwashers',
                        'label':'Dish Washers',
                        'children':[]
                    },
                    {
                        'value':'irons',
                        'label':'Irons',
                        'children':[]
                    },
                    {
                        'value':'vacuumcleaners',
                        'label':'Vacuum Cleaners',
                        'children':[]
                    },
                    {
                        'value':'airpurifiers',
                        'label':'Air Purifiers',
                        'children':[]
                    },
                    {
                        'value':'fans',
                        'label':'Fans',
                        'children':[]
                    },
                ]
            },
            {
                'value':'furniture',
                'label':'Furniture',
                'children':[
                    {
                        'value':'bedsandbedsets',
                        'label':'Beds and Bedsets',
                        'children':[]
                    },
                    {
                        'value':'spacesavers',
                        'label':'Space Savers',
                        'children':[]
                    },
                    {
                        'value':'wardrobes',
                        'label':'Wardrobes',
                        'children':[]
                    },
                    {
                        'value':'shoeracks',
                        'label':'Shoeracks',
                        'children':[]
                    },
                    {
                        'value':'cabinetsanddisplayunits',
                        'label':'Cabinets and Display Units',
                        'children':[]
                    },
                    {
                        'value':'tvunitsshelvesandcabinets',
                        'label':'TV units Shelves and Cabinets',
                        'children':[]
                    },
                    {
                        'value':'diningandkitchenstorageunits',
                        'label':'Dining and Kitchen Storage Units',
                        'children':[]
                    },
                    {
                        'value':'sofas',
                        'label':'Sofas',
                        'children':[]
                    },
                    {
                        'value':'dressingtableandmirrorcabinets',
                        'label':'Dressing Table and Mirror Cabinets',
                        'children':[]
                    },
                ]
            },
            {
                'value':'household',
                'label':'Household',
                'children':[
                    {
                        'value':'vacuumcleaners',
                        'label':'Vacuum Cleaners',
                        'children':[]
                    },
                    {
                        'value':'mops',
                        'label':'Mops',
                        'children':[]
                    },
                    {
                        'value':'dustbins',
                        'label':'Dustbins',
                        'children':[]
                    },
                    {
                        'value':'cleaningaccessories',
                        'label':'Cleaning Accessories',
                        'children':[]
                    },
                    {
                        'value':'airfreshners',
                        'label':'Air Freshners',
                        'children':[]
                    },
                    {
                        'value':'dishwashingliquids',
                        'label':'Dishwashing Liquids',
                        'children':[]
                    },
                    {
                        'value':'detergents',
                        'label':'Detergents',
                        'children':[]
                    },
                    {
                        'value':'allpurposecleaners',
                        'label':'All Purpose Cleaners',
                        'children':[]
                    },
                    {
                        'value':'supermarket',
                        'label':'Supermarket',
                        'children':[]
                    },
                ]
            },
            {
                'value':'kitchenapplicances',
                'label':'Kitchen Applicances',
                'children':[
                    {
                        'value':'microwavesandovens',
                        'label':'Microwaves & Ovens',
                        'children':[]
                    },
                    {
                        'value':'foodprocessors',
                        'label':'Food Processors',
                        'children':[]
                    },
                    {
                        'value':'electricovens',
                        'label':'Electric Ovens',
                        'children':[]
                    },
                    {
                        'value':'kitchenmachines',
                        'label':'Kitchen Machines',
                        'children':[]
                    },
                    {
                        'value':'mixersblenderschoppersandslicers',
                        'label':'Mixers, Blenders, Choppers & Slicers',
                        'children':[]
                    },
                    {
                        'value':'kettlesandtoasters',
                        'label':'Kettles & Toasters',
                        'children':[]
                    },
                    {
                        'value':'fryers',
                        'label':'Fryers',
                        'children':[]
                    },
                    {
                        'value':'juicers',
                        'label':'Juicers',
                        'children':[]
                    },
                    {
                        'value':'waterdispensers',
                        'label':'Water Dispensers',
                        'children':[]
                    },
                    {
                        'value':'coffeemachines',
                        'label':'Coffee Machines',
                        'children':[]
                    },
                    {
                        'value':'allkitchenessentials',
                        'label':'All Kitchen Essentials',
                        'children':[]
                    },
                ]
            },
            {
                'value':'toolsandhomeimprovement',
                'label':'Tools & Home Improvement',
                'children':[
                    {
                        'value':'generators',
                        'label':'Generators',
                        'children':[]
                    },
                    {
                        'value':'drillsandpowertools',
                        'label':'Drills & Power Tools',
                        'children':[]
                    },
                    {
                        'value':'gardeningtools',
                        'label':'Gardening Tools',
                        'children':[]
                    },
                    {
                        'value':'homeandfurniturepainttools',
                        'label':'Home & Furniture Paint Tools',
                        'children':[]
                    }, 
                ]
            },
        ]
    },
    {
        'value':'beautyandfragrances',
        'label':'Beauty & Fragrances',
        'children':[
            {
                'value':'makeup',
                'label':'Makeup',
                'children':[
                    {
                        'value':'lipsticks',
                        'label':'Lipsticks',
                        'children':[]
                    },
                    {
                        'value':'nailpolish',
                        'label':'Nail Polish',
                        'children':[]
                    },
                    {
                        'value':'eyelinersandkajal',
                        'label':'Eye Liners & Kajal',
                        'children':[]
                    },
                    {
                        'value':'mascara',
                        'label':'Mascara',
                        'children':[]
                    },
                    {
                        'value':'contactlenses',
                        'label':'Contact Lenses',
                        'children':[]
                    },
                    {
                        'value':'eyeshadow',
                        'label':'Eyeshadow',
                        'children':[]
                    },
                    {
                        'value':'blushesandconcealers',
                        'label':'Blushes & Concealers',
                        'children':[]
                    },
                    {
                        'value':'foundations',
                        'label':'Foundations',
                        'children':[]
                    },
                    {
                        'value':'makeupbrushesandtools',
                        'label':'Makeup Brushes & Tools',
                        'children':[]
                    },
                    {
                        'value':'coffrets',
                        'label':'Coffrets',
                        'children':[]
                    },
                     
                ]
            },
            {
                'value':'fragrances',
                'label':'Fragrances',
                'children':[
                    {
                        'value':'womensperfumes',
                        'label':'Women\'s Perfumes',
                        'children':[]
                    },
                    {
                        'value':'mensperfumes',
                        'label':'Men\'s Perfumes',
                        'children':[]
                    },
                    {
                        'value':'arabicperfumes',
                        'label':'Arabic Perfumes',
                        'children':[]
                    },
                    {
                        'value':'giftsets',
                        'label':'Gift Sets',
                        'children':[]
                    },
                    {
                        'value':'perfumesunderaed99',
                        'label':'Perfumes Under Aed 99',
                        'children':[]
                    },
                    {
                        'value':'eyeshadow',
                        'label':'Eyeshadow',
                        'children':[]
                    },
                    {
                        'value':'luxuryfragrances',
                        'label':'Luxury Fragrances',
                        'children':[]
                    }, 
                ]
            },
            {
                'value':'groomingappliances',
                'label':'Fragrances By Brands',
                'children':[
                    {
                        'value':'shaversandtrimmers',
                        'label':'Shavers & Trimmers',
                        'children':[]
                    },
                    {
                        'value':'hairclippers',
                        'label':'Hair Clippers',
                        'children':[]
                    },
                    {
                        'value':'epilators',
                        'label':'Epilators',
                        'children':[]
                    },
                    {
                        'value':'hairstraightnersanddryers',
                        'label':'Hair Straighteners and Dryers',
                        'children':[]
                    },
                    {
                        'value':'hairstylers',
                        'label':'Hair Stylers',
                        'children':[]
                    }, 
                ]
            },
            {
                'value':'healthandfitness',
                'label':'Health & Fitness',
                'children':[
                    {
                        'value':'weighingscales',
                        'label':'Weighing Scales',
                        'children':[]
                    },
                    {
                        'value':'massagers',
                        'label':'Massagers',
                        'children':[]
                    },
                    {
                        'value':'fitnessequipment',
                        'label':'Fitness Equipment',
                        'children':[]
                    },
                    {
                        'value':'smartwatches',
                        'label':'Smartwatches',
                        'children':[]
                    },
                    {
                        'value':'treadmills',
                        'label':'Treadmills',
                        'children':[]
                    },
                    {
                        'value':'multivitaminsandnutrition',
                        'label':'Multi-Vitamins & Nutrition',
                        'children':[]
                    },
                    {
                        'value':'contraceptivesandwellness',
                        'label':'Contraceptives & Wellness',
                        'children':[]
                    },
                    {
                        'value':'pregnancyandbabyessentials',
                        'label':'Pregnancy & Baby Essentials',
                        'children':[]
                    },
                    {
                        'value':'allwellnessessentials',
                        'label':'All Wellness Essentials',
                        'children':[]
                    },
                     
                ]
            },
            {
                'value':'fragrancesbybrands',
                'label':'Fragrances By Brands',
                'children':[
                    {
                        'value':'chanel',
                        'label':'Chanel',
                        'children':[]
                    },
                    {
                        'value':'bvlgari',
                        'label':'Bvlgari',
                        'children':[]
                    },
                    {
                        'value':'burberry',
                        'label':'Burberry',
                        'children':[]
                    },
                    {
                        'value':'hugoboss',
                        'label':'Hugo Boss',
                        'children':[]
                    },
                    {
                        'value':'davidoff',
                        'label':'Davidoff',
                        'children':[]
                    },
                    {
                        'value':'ajmal',
                        'label':'Ajmal',
                        'children':[]
                    },
                    {
                        'value':'swissarabian',
                        'label':'Swiss Arabian',
                        'children':[]
                    },
                    {
                        'value':'louiscardin',
                        'label':'Louis Cardin',
                        'children':[]
                    }, 
                ]
            },
            {
                'value':'appliancesbybrands',
                'label':'Appliances By Brands',
                'children':[
                    {
                        'value':'philips',
                        'label':'Philips',
                        'children':[]
                    },
                    {
                        'value':'eklasse',
                        'label':'Eklasse',
                        'children':[]
                    },
                    {
                        'value':'braun',
                        'label':'Braun',
                        'children':[]
                    },
                    {
                        'value':'supergeneral',
                        'label':'Super General',
                        'children':[]
                    },
                    {
                        'value':'babyliss',
                        'label':'Babyliss',
                        'children':[]
                    },
                    {
                        'value':'dyson',
                        'label':'Dyson',
                        'children':[]
                    },
                    {
                        'value':'moser',
                        'label':'Moser',
                        'children':[]
                    }, 
                ]
            },
            {
                'value':'bathandbody',
                'label':'Bath & Body',
                'children':[
                    {
                        'value':'shampoosandhaircare',
                        'label':'Shampoos & Hair Care',
                        'children':[]
                    },
                    {
                        'value':'showergel',
                        'label':'Shower Gel',
                        'children':[]
                    },
                    {
                        'value':'creamsandlotion',
                        'label':'Creams & Lotion',
                        'children':[]
                    },
                    {
                        'value':'facewashandscrubs',
                        'label':'Face Wash & Scribs',
                        'children':[]
                    },
                    {
                        'value':'dentalhygiene',
                        'label':'Dental Hygiene',
                        'children':[]
                    }, 
                ]
            },
        ]
    },
    {
        'value':'stationery',
        'label':'Stationery',
        'children':[
            {
                'value':'books',
                'label':'Books',
                'children':[
                    {
                        'value':'comicsandgraphicnovels',
                        'label':'Comics & Graphic Novels',
                        'children':[]
                    },
                    {
                        'value':'educationlearning',
                        'label':'Education Learning',
                        'children':[]
                    },
                    {
                        'value':'literatureandfiction',
                        'label':'Literature & Fiction',
                        'children':[]
                    },
                    {
                        'value':'lifestyleandnonfiction',
                        'label':'Lifestyle & Non Fiction',
                        'children':[]
                    },
                    {
                        'value':'childrensbooks',
                        'label':'Children\'s Books',
                        'children':[]
                    },
                    {
                        'value':'businessandtradebooks',
                        'label':'Business & Trade Books',
                        'children':[]
                    },
                    {
                        'value':'religiousbooks',
                        'label':'Religious Books',
                        'children':[]
                    },
                    {
                        'value':'biographyandautobiography',
                        'label':'Biography & Auto Biography',
                        'children':[]
                    },
                ]
            },
            {
                'value':'officeandschoolsupplies',
                'label':'Office & School Supplies',
                'children':[
                    {
                        'value':'penandpencil',
                        'label':'Pen & Pencil',
                        'children':[]
                    },
                    {
                        'value':'journalsandnotebooks',
                        'label':'Journals & Notebooks',
                        'children':[]
                    },
                    {
                        'value':'printersacc',
                        'label':'Printers Acc',
                        'children':[]
                    },
                    {
                        'value':'bagsandbackpacks',
                        'label':'Bags & Backpacks',
                        'children':[]
                    },
                ]
            },
            {
                'value':'gifting',
                'label':'Gifting',
                'children':[
                    {
                        'value':'novelty',
                        'label':'Novelty',
                        'children':[]
                    },
                    {
                        'value':'giftssets',
                        'label':'Gifts Sets',
                        'children':[]
                    },
                    {
                        'value':'flowerbouquet',
                        'label':'Flower Bouquet',
                        'children':[]
                    },
                    {
                        'value':'vases',
                        'label':'Vases',
                        'children':[]
                    },
                    {
                        'value':'mugs',
                        'label':'Mugs',
                        'children':[]
                    },
                    {
                        'value':'travelaccessories',
                        'label':'Travel Accessories',
                        'children':[]
                    },
                    {
                        'value':'casesandwallets',
                        'label':'Cases & Wallets',
                        'children':[]
                    },
                    {
                        'value':'perfumesgiftssets',
                        'label':'Perfumes Gifts Sets',
                        'children':[]
                    },
                    {
                        'value':'watchesgiftssets',
                        'label':'Watches Gifts Sets',
                        'children':[]
                    }, 
                ]
            }
        ]
    }    
];

export const BABYSHOP_CATEGORIES = [
    {
        'value': 'newin',
        'label': 'New In',
        'children': []
    },
    {
        'value': 'clothing',
        'label': 'Clothing',
        'children': [
            {
                'value': 'tops',
                'label': 'Tops',
                'children': []
            },
            {
                'value': 'sweaterandknitwear',
                'label': 'Sweater and Knitwear',
                'children': []
            },
            {
                'value': 'dresses',
                'label': 'Dresses',
                'children': []
            },
            {
                'value': 'bottoms',
                'label': 'Bottoms',
                'children': []
            },
            {
                'value': 'skirts',
                'label': 'Skirts',
                'children': []
            },
            {
                'value': 'shorts',
                'label': 'Shorts',
                'children': []
            },
            {
                'value': 'clothingsets',
                'label': 'Clothing Sets',
                'children': []
            },
            {
                'value': 'suits',
                'label': 'Suits',
                'children': []
            },
            {
                'value': 'fleece',
                'label': 'Fleece',
                'children': []
            },
            {
                'value': 'coatsandjackets',
                'label': 'CoatsandJackets',
                'children': []
            },
            {
                'value': 'coveralls',
                'label': 'Coveralls',
                'children': []
            },
            {
                'value': 'skipantsandsalopettes',
                'label': 'Ski Pants And Salopettes',
                'children': []
            },
            {
                'value': 'rainwear',
                'label': 'Rainwear',
                'children': []
            },
            {
                'value': 'sleepwear',
                'label': 'Sleepwear',
                'children': []
            },
            {
                'value': 'uderwear',
                'label': 'Uderwear',
                'children': []
            },
            {
                'value': 'baselayers',
                'label': 'Baselayers',
                'children': []
            },
            {
                'value': 'uvproductsandswimwear',
                'label': 'UV-ProductsandSwimwear',
                'children': []
            },
            {
                'value': 'childrenclothing0to2years',
                'label': 'Children Clothing 0-2 Years',
                'children': []
            },
            {
                'value': 'childrenclothing2to4years',
                'label': 'Children Clothing 2-4 Years',
                'children': []
            },
            {
                'value': 'childrenclothing4to10years',
                'label': 'Children Clothing 4-10 Years',
                'children': []
            },
            {
                'value': 'ecofashion',
                'label': 'Eco Fashion',
                'children': []
            },
            {
                'value': 'sport',
                'label': 'Sport',
                'children': []
            },
            {
                'value': 'beachholiday',
                'label': 'Beach Holiday',
                'children': []
            },
            {
                'value': 'outerwear',
                'label': 'Outerwear',
                'children': []
            },
            {
                'value': ' newarrivalschildrenclothes',
                'label': 'New Arrivals - Children Clothes',
                'children': []
            },
            {
                'value': 'skiwear',
                'label': 'Ski Wear',
                'children': []
            },
            {
                'value': 'premium',
                'label': 'Premium',
                'children': []
            },
            {
                'value': 'threelayerprinciple',
                'label': 'Three Layer Principle',
                'children': []
            },
            {
                'value': 'woolclothes',
                'label': 'Wool Clothes',
                'children': []
            },
            {
                'value': 'partywear',
                'label': 'Partwear',
                'children': []
            },
        ]
    },
    {
        'value': 'footwear',
        'label': 'Footwear',
        'children': [
            {
                'value': 'classicshoes',
                'label': 'Classic Shoes',
                'children': []
            },
            {
                'value': 'ballerinasandmaryjanes',
                'label': 'ballerinasandmary janes',
                'children': []
            },
            {
                'value': 'sandals',
                'label': 'Sandals',
                'children': []
            },
            {
                'value': 'sneakers',
                'label': 'Sneakers',
                'children': []
            },
            {
                'value': 'sportfootwear',
                'label': 'Sport Footwear',
                'children': []
            },
            {
                'value': 'bootsandwintershoes',
                'label': 'Boots And Winter Shoes',
                'children': []
            },
            {
                'value': 'rubbershoes',
                'label': 'Rubber Shoes',
                'children': []
            },
            {
                'value': 'firstwalker',
                'label': 'First Walker',
                'children': []
            },
            {
                'value': 'babybooties',
                'label': 'Baby Booties',
                'children': []
            },
            {
                'value': 'indoorshoesandmoccasins',
                'label': 'Indoor ShoesandMoccasins',
                'children': []
            },
            {
                'value': 'childrensshoes0to2years',
                'label': 'Childrens Shoes 0-2 Years',
                'children': []
            },
            {
                'value': 'childrensshoes2to4years',
                'label': 'Childrens Shoes 2-4 Years',
                'children': []
            },
            {
                'value': 'childrensshoes4to10years',
                'label': 'Childrens Shoes 4-10 Years',
                'children': []
            },
            {
                'value': 'newarrivalschildrensshoes',
                'label': 'New Arrivals - Childrens Shoes',
                'children': []
            }
        ]
    },
    {
        'value': 'accessories',
        'label': 'Accessories',
        'children': [
            {
                'value': 'headwear',
                'label': 'Headwear',
                'children': []
            },
            {
                'value': 'scarves',
                'label': 'Scarves',
                'children': []
            },
            {
                'value': 'glovesandmittens',
                'label': 'Gloves And Mittens',
                'children': []
            },
            {
                'value': 'eyewear',
                'label': 'Eyewear',
                'children': []
            },
            {
                'value': 'hairaccessories',
                'label': 'Hair Accessories',
                'children': []
            },
            {
                'value': 'bags',
                'label': 'Bags',
                'children': []
            },
            {
                'value': 'tieandbows',
                'label': 'tieandbows',
                'children': []
            },
            {
                'value': 'beltsandsuspenders',
                'label': 'BeltsandSuspenders',
                'children': []
            },
            {
                'value': 'jewelleryandwatches',
                'label': 'Jewellery And Watches',
                'children': []
            },
            {
                'value': 'umbrellas',
                'label': 'Umbrellas',
                'children': []
            },
        ]
    },
    {
        'value': 'stollers',
        'label': 'Stollers',
        'children': [
            {
                'value': 'convertiblestrollers',
                'label': 'Convertible Strollers',
                'children': []
            },
            {
                'value': 'doublestrollers',
                'label': 'Double Strollers',
                'children': []
            },
            {
                'value': 'lightweightstrollers',
                'label': 'Lightweight Strollers',
                'children': []
            },
            {
                'value': 'travelstrollersandumbrellastrollers',
                'label': 'Travel StrollersandUmbrella Strollers',
                'children': []
            },
            {
                'value': 'footmuffs',
                'label': 'Footmuffs',
                'children': []
            },
            {
                'value': 'strollerpartsandcustomisation',
                'label': 'Stroller Parts And Customisation',
                'children': []
            },
            {
                'value': 'strolleraccessories',
                'label': 'Stroller Accessories',
                'children': []
            },
        ]
    },
    {
        'value': 'carseats',
        'label': 'Car Seats',
        'children': [
            {
                'value': 'carseatbases',
                'label': 'Car Seat Bases',
                'children': []
            },
            {
                'value': 'infrontcarseats',
                'label': 'Infront Car Seats',
                'children': []
            },
            {
                'value': 'rearfacingcarseats',
                'label': 'Rear-Facing Car Seats',
                'children': []
            },
            {
                'value': 'forwardfacingcarseats',
                'label': 'Forward-Facing Car Seats',
                'children': []
            },
            {
                'value': 'carseatsaccessories',
                'label': 'Car Seats Accessories',
                'children': []
            },
        ]
    },
    {
        'value': 'babygear',
        'label': 'Baby Gear',
        'children': [
            {
                'value': 'babyfeeding',
                'label': 'Baby Feeding',
                'children': []
            },
            {
                'value': 'babychanging',
                'label': 'Baby Changing',
                'children': []
            },
            {
                'value': 'babybathing',
                'label': 'Baby Bathing',
                'children': []
            },
            {
                'value': 'toiletries',
                'label': 'Toiletries',
                'children': []
            },
            {
                'value': 'diaperbags',
                'label': 'Diaper Bags',
                'children': []
            },
            {
                'value': 'babycarriers',
                'label': 'Baby Carriers',
                'children': []
            },
            {
                'value': 'pacifiersandpacifierclips',
                'label': 'PacifiersandPacifier Clips',
                'children': []
            },
            {
                'value': 'babysitters',
                'label': 'Babysitters',
                'children': []
            },
            {
                'value': 'babysafety',
                'label': 'Baby Safety',
                'children': []
            },
            {
                'value': 'babyshower',
                'label': 'Baby Shower',
                'children': []
            },
            {
                'value': 'newbornessentials',
                'label': 'Newborn Eessentials',
                'children': []
            },
        ]
    },
    {
        'value': 'maternity',
        'label': 'MaterNity',
        'children': [
            {
                'value': 'maternitytops',
                'label': 'Maternity Tops',
                'children': []
            },
            {
                'value': 'maternitysweaterandcardigans',
                'label': 'Maternity SweaterandCardigans',
                'children': []
            },
            {
                'value': 'maternitydresses',
                'label': 'Maternity',
                'children': []
            },
            {
                'value': 'maternitybottoms',
                'label': 'Maternity Bottoms',
                'children': []
            },
            {
                'value': 'maternityjacketsandcoats',
                'label': 'maternity jacketsandCoats',
                'children': []
            },
            {
                'value': 'pregnancysleepwear',
                'label': 'Pregnancy Sleepwear',
                'children': []
            },
            {
                'value': 'maternityunderwear',
                'label': 'Maternity Underwear',
                'children': []
            },
            {
                'value': 'maternityswimwear',
                'label': 'Maternity Swimwear',
                'children': []
            },
            {
                'value': 'breatsfeeding',
                'label': 'Breast Feeding',
                'children': []
            },
        ]
    },
    {
        'value': 'home',
        'label': 'Home',
        'children': [
            {
                'value': 'furniture',
                'label': 'Furniture',
                'children': []
            },
            {
                'value': 'textiles',
                'label': 'Textiles',
                'children': []
            },
            {
                'value': 'eatanddrink',
                'label': 'Eat & Drink',
                'children': []
            },
            {
                'value': 'storage',
                'label': 'Storage',
                'children': []
            },
            {
                'value': 'lighting',
                'label': 'Lighting',
                'children': []
            },
            {
                'value': 'homeaccessories',
                'label': 'Home Accessories',
                'children': []
            },
            {
                'value': 'bathroomaccessories',
                'label': 'Bathroom Accessories',
                'children': []
            },
            {
                'value': 'partydecoration',
                'label': 'Party Decorations',
                'children': []
            },
            {
                'value': 'newarrivalsinterior',
                'label': 'New Arrivals Interior',
                'children': []
            },
            {
                'value': 'bohemianvintage',
                'label': 'Bohemian Vintage',
                'children': []
            },
            {
                'value': 'electicedge',
                'label': 'Bohemian Vintage',
                'children': []
            },
            {
                'value': 'scandinaviansimplicity',
                'label': 'Scandinavian Simplicity',
                'children': []
            },

        ]
    },
    {
        'value': 'toys',
        'label': 'Toys',
        'children': [
            {
                'value': 'bicyclesandoutdoorplay',
                'label': 'Bicycles And Outdoor Play',
                'children': []
            },
            {
                'value': 'buildingblockslegoansconstruction',
                'label': 'Building Blocks, LEGO & Construction',
                'children': []
            },
            {
                'value': 'costumes',
                'label': 'Costumes',
                'children': []
            },
            {
                'value': 'dollsanddollhouses',
                'label': 'Dolls And Doll Houses',
                'children': []
            },
            {
                'value': 'figurinesandplaysets',
                'label': 'Figurines And Play Sets',
                'children': []
            },
            {
                'value': 'firsttoysandbabytoys',
                'label': 'First Toys And Baby Toys',
                'children': []
            },
            {
                'value': 'musicalinstrumentsandtoys',
                'label': 'Musical Instruments And Toys',
                'children': []
            },
            {
                'value': 'reading',
                'label': 'Reading',
                'children': []
            },
            {
                'value': 'rideonsandwalker',
                'label': 'Ride Ons And Walker',
                'children': []
            },
            {
                'value': 'rolepaly',
                'label': 'Role Play',
                'children': []
            },
            {
                'value': 'stationery',
                'label': 'Stationery',
                'children': []
            },
            {
                'value': 'watertoys',
                'label': 'Water Toys',
                'children': []
            },
            {
                'value': 'puzzlesandgames',
                'label': 'Puzzles And Games',
                'children': []
            },
            {
                'value': 'softtoys',
                'label': 'Soft Toys',
                'children': []
            },
            {
                'value': 'vehicles',
                'label': 'Vehicles',
                'children': []
            },
        ]
    },
    {
        'value': 'outlet',
        'label': 'Outlet',
        'children': [
            {
                'value': 'clothingoutlet',
                'label': 'Clothing Outlet',
                'children': []
            },
            {
                'value': 'footwearoutlet',
                'label': 'Footwear Outlet',
                'children': []
            },
            {
                'value': 'accessoriesoutlet',
                'label': 'Accessories Outlet',
                'children': []
            },
            {
                'value': 'maternityoutlet',
                'label': 'Maternity Outlet',
                'children': []
            },
            {
                'value': 'babygearoutlet',
                'label': 'Baby Gear Outlet',
                'children': []
            },
            {
                'value': 'interioroutlet',
                'label': 'Interior Outlet',
                'children': []
            },
            {
                'value': 'toysoutlet',
                'label': 'Toys Outlet',
                'children': []
            },
        ]
    },
];

// export const AMAZON_CATEGORIES = [
//     {
//         'value': 'petsupplies',
//         'label': 'Pet Suplies',
//         'children': [
//             {
//                 'value': 'dogs',
//                 'label': 'Dogs',
//                 'children': [
//                     {
//                         'value': 'food',
//                         'label': 'Food',
//                         'children': []

//                     },
//                     {
//                         'value': 'treats',
//                         'label': 'Treats',
//                         'children': []

//                     },
//                     {
//                         'value': 'apparelandaccessories',
//                         'label': 'Apparel And Accessories',
//                         'children': []

//                     },
//                     {
//                         'value': 'bedsandfurniture',
//                         'label': 'Beds And Furniture',
//                         'children': []

//                     },
//                     {
//                         'value': 'caemrasandmonitors',
//                         'label': 'Cameras And Monitors',
//                         'children': []

//                     },
//                     {
//                         'value': 'carriersandtravelproducts',
//                         'label': 'Carriers And Travel Products',
//                         'children': []

//                     },
//                     {
//                         'value': 'collarsharnessesandleashes',
//                         'label': 'Collars Harnesses And Leashes',
//                         'children': []

//                     },
//                     {
//                         'value': 'crateshousesandpens',
//                         'label': 'Crates Houses And Pens',
//                         'children': []

//                     },
//                     {
//                         'value': 'doorsgatesandramps',
//                         'label': 'Doors Gates And Ramps',
//                         'children': []

//                     },
//                     {
//                         'value': 'feedingandwateringsupplies',
//                         'label': 'Feeding And Watering Supplies',
//                         'children': []

//                     },
//                     {
//                         'value': 'fleaandtickcontrol',
//                         'label': 'Flea And Tick Control',
//                         'children': []

//                     },
//                     {
//                         'value': 'grooming',
//                         'label': 'Grooming',
//                         'children': []

//                     },
//                     {
//                         'value': 'healthsupplies',
//                         'label': 'Health Supplies',
//                         'children': []

//                     },
//                     {
//                         'value': 'litterandhousebraking',
//                         'label': 'Litter And House Braking',
//                         'children': []

//                     },
//                     {
//                         'value': 'memorialsa',
//                         'label': 'Memorialsa',
//                         'children': []

//                     },
//                     {
//                         'value': 'toys',
//                         'label': 'Toys',
//                         'children': []

//                     },
//                     {
//                         'value': 'trainingandbehaviouraids',
//                         'label': 'Training And Behaviour Aids',
//                         'children': []

//                     },
//                 ]
//             },
//             {
//                 'value': 'cats',
//                 'label': 'Cats',
//                 'children': [
//                     {
//                         'value': 'apparel',
//                         'label': 'Apparel',
//                         'children': []

//                     },
//                     {
//                         'value': 'bedsandfurniture',
//                         'label': 'Beds And Furniture',
//                         'children': []

//                     },
//                     {
//                         'value': 'camerasandmonitors',
//                         'label': 'Cameras And Monitors',
//                         'children': []

//                     },
//                     {
//                         'value': 'carriersandstrollers',
//                         'label': 'Carriers And Strollers',
//                         'children': []

//                     },
//                     {
//                         'value': 'catdoorsenclosuresandsteps',
//                         'label': 'Cat Doors Enclosure And Steps',
//                         'children': []

//                     },
//                     {
//                         'value': 'collarharnessesandlashes',
//                         'label': 'Collar Harnesses And Lashes',
//                         'children': []

//                     },
//                     {
//                         'value': 'feedingandwateringsupplies',
//                         'label': 'Feeding And Watering Supplies',
//                         'children': []

//                     },
//                     {
//                         'value': 'fleaandtickcontrol',
//                         'label': 'Flea AndTick Control',
//                         'children': []

//                     },
//                     {
//                         'value': 'food',
//                         'label': 'Food',
//                         'children': []

//                     },
//                     {
//                         'value': 'grooming',
//                         'label': 'Grooming',
//                         'children': []

//                     },
//                     {
//                         'value': 'healthsupplies',
//                         'label': 'Health Supplies',
//                         'children': []

//                     },
//                     {
//                         'value': 'litterandhousebreaking',
//                         'label': 'Litter And House Breaking',
//                         'children': []

//                     },
//                     {
//                         'value': 'memorials',
//                         'label': 'Memorials',
//                         'children': []

//                     },
//                     {
//                         'value': 'repellentsandtrainingaids',
//                         'label': 'Repellents And Training Aids',
//                         'children': []

//                     },
//                     {
//                         'value': 'toys',
//                         'label': 'Toys',
//                         'children': []

//                     },
//                     {
//                         'value': 'treats',
//                         'label': 'Treats',
//                         'children': []

//                     },
//                 ]
//             },
//             {
//                 'value': 'fishandaquaticpets',
//                 'label': 'Fish & Aquatic Pets',
//                 'children': [
//                     {
//                         'value': 'aquariumcleaner',
//                         'label': 'Aquarium Cleaner',
//                         'children': []

//                     },
//                     {
//                         'value': 'aquariumdecor',
//                         'label': 'Aquarium Decor',
//                         'children': []

//                     },
//                     {
//                         'value': 'aquariumheaterandchillers',
//                         'label': 'Aquarium Heater And Chillers',
//                         'children': []

//                     },
//                     {
//                         'value': 'aquariumhoods',
//                         'label': 'Aquarium Hoods',
//                         'children': []

//                     },
//                     {
//                         'value': 'aquariumhydrometrs',
//                         'label': 'Aquarium HydroMetrs',
//                         'children': []

//                     },
//                     {
//                         'value': 'aquariumlights',
//                         'label': 'Aquarium Lights',
//                         'children': []

//                     },
//                     {
//                         'value': 'aquariumpumpandfilters',
//                         'label': 'Aquarium Pump And Filters',
//                         'children': []

//                     },
//                     {
//                         'value': 'aquariumstands',
//                         'label': 'Aquarium Stands',
//                         'children': []

//                     },
//                     {
//                         'value': 'aquariumsubstarate',
//                         'label': 'Aquarium Substarate',
//                         'children': []

//                     },
//                     {
//                         'value': 'aquariumtestkits',
//                         'label': 'Aquarium Test Kits',
//                         'children': []

//                     },
//                     {
//                         'value': 'aquariumthermometers',
//                         'label': 'Aquarium Thermometers',
//                         'children': []

//                     },
//                     {
//                         'value': 'aquariumwatertreatments',
//                         'label': 'Aquarium Water Treatments',
//                         'children': []

//                     },
//                     {
//                         'value': 'aquariumfishandbowls',
//                         'label': 'Aquarium Fish And Bowls',
//                         'children': []

//                     },
//                     {
//                         'value': 'automaticfeeders',
//                         'label': 'Automatic Feeders',
//                         'children': []

//                     },
//                     {
//                         'value': 'breedingtank',
//                         'label': 'Breeding Tank',
//                         'children': []

//                     },
//                     {
//                         'value': 'food',
//                         'label': 'Food',
//                         'children': []

//                     },
//                     {
//                         'value': 'healthsupplies',
//                         'label': 'Health Supplies',
//                         'children': []

//                     },
//                 ]
//             },
//             {
//                 'value': 'birds',
//                 'label': 'Birds',
//                 'children': [
//                     {
//                         'value': 'food',
//                         'label': 'Food',
//                         'children': []

//                     },
//                     {
//                         'value': 'treats',
//                         'label': 'Treats',
//                         'children': []

//                     },
//                     {
//                         'value': 'cagesandaccessories',
//                         'label': 'Cages And Accessories',
//                         'children': []

//                     },
//                     {
//                         'value': 'carriers',
//                         'label': 'Carriers',
//                         'children': []

//                     },
//                     {
//                         'value': 'healthsupplies',
//                         'label': 'Health Supplies',
//                         'children': []

//                     },
//                     {
//                         'value': 'toys',
//                         'label': 'Toys',
//                         'children': []

//                     },
//                     {
//                         'value': 'healthsupplies',
//                         'label': 'Health Supplies',
//                         'children': []

//                     },
//                 ]
//             },
//             {
//                 'value': 'horses',
//                 'label': 'Horses',
//                 'children': [
//                     {
//                         'value': 'food',
//                         'label': 'Food',
//                         'children': []

//                     },
//                     {
//                         'value': 'treats',
//                         'label': 'Treats',
//                         'children': []

//                     },
//                     {
//                         'value': 'horseblanketandsheets',
//                         'label': 'Horse Blanket And Sheets',
//                         'children': []

//                     },
//                     {
//                         'value': 'bootsandwraps',
//                         'label': 'Boots And Wraps',
//                         'children': []

//                     },
//                     {
//                         'value': 'farriersuppplies',
//                         'label': 'Farrier Suppplies',
//                         'children': []

//                     },
//                     {
//                         'value': 'groomingandbathingsupplies',
//                         'label': 'Grooming And Bathing Supplies',
//                         'children': []

//                     },
//                     {
//                         'value': 'healthsupplies',
//                         'label': 'Health Supplies',
//                         'children': []

//                     },
//                     {
//                         'value': 'petscontrol',
//                         'label': 'Pets Control',
//                         'children': []

//                     },
//                     {
//                         'value': 'stablesupplies',
//                         'label': 'Stable Supplies',
//                         'children': []

//                     },
//                     {
//                         'value': 'toys',
//                         'label': 'Toys',
//                         'children': []

//                     },
//                 ]
//             },
//             {
//                 'value': 'reptilesandamphibians',
//                 'label': 'Reptiles & Amphibians',
//                 'children': [
//                     {
//                         'value': 'food',
//                         'label': 'Food',
//                         'children': []

//                     },
//                     {
//                         'value': 'habitatdecor',
//                         'label': 'Habitat Decor',
//                         'children': []

//                     },
//                     {
//                         'value': 'habitatligthing',
//                         'label': 'Habitat Ligthing',
//                         'children': []

//                     },
//                     {
//                         'value': 'healthsupplies',
//                         'label': 'Health Supplies',
//                         'children': []

//                     },
//                     {
//                         'value': 'terrariumbowls',
//                         'label': 'Terrarium Bowls',
//                         'children': []

//                     },
//                     {
//                         'value': 'terrariumcovers',
//                         'label': 'Terrarium Covers',
//                         'children': []

//                     },
//                     {
//                         'value': 'terrariumheatlampsandmats',
//                         'label': 'Terrarium Heat Lamps And Mats',
//                         'children': []

//                     },
//                     {
//                         'value': 'terrariumhygrometer',
//                         'label': 'Terrarium Hygro Meters',
//                         'children': []

//                     },
//                     {
//                         'value': 'terrariumthermometer',
//                         'label': 'Terrarium Thermometer',
//                         'children': []

//                     },
//                     {
//                         'value': 'terrariums',
//                         'label': 'Terrariums',
//                         'children': []

//                     },
//                 ]
//             },
//             {
//                 'value': 'smalanimals',
//                 'label': 'Small Animals',
//                 'children': [
//                     {
//                         'value': 'food',
//                         'label': 'Food',
//                         'children': []

//                     },
//                     {
//                         'value': 'treats',
//                         'label': 'Treats',
//                         'children': []

//                     },
//                     {
//                         'value': 'carriers',
//                         'label': 'Carriers',
//                         'children': []

//                     },
//                     {
//                         'value': 'collarharnessesandlashes',
//                         'label': 'Collar Harnesses And Lashes',
//                         'children': []

//                     },
//                     {
//                         'value': 'exercisewheels',
//                         'label': 'Exercise Wheels',
//                         'children': []

//                     },
//                     {
//                         'value': 'feedingandwateringsupplies',
//                         'label': 'Feeding And Watering Supplies',
//                         'children': []

//                     },
//                     {
//                         'value': 'grooming',
//                         'label': 'Grooming',
//                         'children': []

//                     },
//                     {
//                         'value': 'healthsupplies',
//                         'label': 'Health Supplies',
//                         'children': []

//                     },
//                     {
//                         'value': 'housesandhabitats',
//                         'label': 'Houses And Habitats',
//                         'children': []

//                     },
//                     {
//                         'value': 'odorandstainremovers',
//                         'label': 'Odor And Stain Removers',
//                         'children': []

//                     },
//                     {
//                         'value': 'toys',
//                         'label': 'Toys',
//                         'children': []

//                     },
//                 ]
//             },
//         ]
//     },
//     {
//         'value': 'sportsandoutdoors',
//         'label': 'Sports And Outdoors',
//         'children': []

//     },
//     {
//         'value': 'baby',
//         'label': 'Baby',
//         'children': []

//     },
//     {
//         'value': 'automotive',
//         'label': 'Automotive',
//         'children': []

//     },
//     {
//         'value': 'artsandcrafts',
//         'label': 'Arts & Crafts',
//         'children': []

//     },
//     {
//         'value': 'beautyandpersonalcare',
//         'label': 'Beauty & Personal Care',
//         'children': []

//     },


// ];

 // CATEGORIES HAVE TO CHANGE
 
export const AMAZON_CATEGORIES= [
    {
        'value':'sportsandoutdoors',
        'label':'Sports and Outdoors',
        'children':[
            {
                'value': 'sportsandoutdoors',
                'label': 'Sports and Outdoors',
                'children': [
                    {
                        'value': 'outdoorrecreation',
                        'label': 'Outdoor Recreation',
                        'children': []
                
                    },
                    {
                        'value': 'sportsandfitness',
                        'label': 'Sports & Fitness',
                        'children': []
                
                    },
                    {
                        'value': 'fanshop',
                        'label': 'Fan Shop',
                        'children': []
                
                    },

                ]
        
            },
            {
                'value': 'outdoorrecreation',
                'label': 'Outdoor Recreation',
                'children': [
                    {
                        'value': 'outdoorclothing',
                        'label': 'Outdoor Clothing',
                        'children': []
                
                    },
                    {
                        'value': 'campingandhiking',
                        'label': 'Camping and Hiking',
                        'children': []
                
                    },
                    {
                        'value': 'climbing',
                        'label': 'Climbing',
                        'children': []
                
                    },
                    {
                        'value': 'cycling',
                        'label': 'Cycling',
                        'children': []
                
                    },
                    {
                        'value': 'skatesskatesboardsandscooters',
                        'label': 'Skates, Skateboards & Scooters',
                        'children': []
                
                    },
                    {
                        'value': 'watersports',
                        'label': 'Water Sports',
                        'children': []
                
                    },
                    {
                        'value': 'wintersports',
                        'label': 'Winter Sports',
                        'children': []
                
                    },
                    {
                        'value': 'accessories',
                        'label': 'Accessories',
                        'children': []
                
                    },
                ]
        
            },
            {
                'value': 'sportsandfitness',
                'label': 'Sports & Fitness',
                'children': [
                    {
                        'value': 'boatingandsailing',
                        'label': 'Boating & Sailing',
                        'children': []
                
                    },
                    {
                        'value': 'clothing',
                        'label': 'Clothing',
                        'children': []
                
                    },
                    {
                        'value': 'exerciseandfitness',
                        'label': 'Exercise & Fitness',
                        'children': []
                
                    },
                    {
                        'value': 'golf',
                        'label': 'Golf',
                        'children': []
                
                    },
                    {
                        'value': 'huntingandfishing',
                        'label': 'Hunting & Fishing',
                        'children': []
                
                    },
                    {
                        'value': 'leisuresportsandgameroom',
                        'label': 'Leisure Sports & Game Room',
                        'children': []
                
                    },
                    {
                        'value': 'airsoftandpaintball',
                        'label': 'Airsoft & Paintball',
                        'children': []
                
                    },
                    {
                        'value': 'running',
                        'label': 'Running',
                        'children': []
                
                    },
                    {
                        'value': 'swiming',
                        'label': 'Swiming',
                        'children': []
                
                    },
                    {
                        'value': 'teamsports',
                        'label': 'Team Sports',
                        'children': []
                
                    },
                    {
                        'value': 'tennisandracquetsports',
                        'label': 'Tennis & Racquet Sports',
                        'children': []
                
                    },
                    {
                        'value': 'yoga',
                        'label': 'Yoga',
                        'children': []
                
                    },
                    {
                        'value': 'othersports',
                        'label': 'Other Sports',
                        'children': []
                
                    },
                    {
                        'value': 'accessories',
                        'label': 'Accessories',
                        'children': []
                
                    },
                    {
                        'value': 'sportsmedicine',
                        'label': 'Sports Medicine',
                        'children': []
                
                    },
                ]
        
            },
            {
                'value': 'fanshop',
                'label': 'Fan Shop',
                'children': [
                    {
                        'value': 'autoaccessories',
                        'label': 'Auto Accessories',
                        'children': []
                
                    },
                    {
                        'value': 'bagspacksandaccessories',
                        'label': 'Bags, Packs & Accessories',
                        'children': []
                
                    },
                    {
                        'value': 'capsandhats',
                        'label': 'Caps & Hats',
                        'children': []
                
                    },
                    {
                        'value': 'cellphoneaccessories',
                        'label': 'Cell Phone Accessories',
                        'children': []
                
                    },
                    {
                        'value': 'clothing',
                        'label': 'Clothing',
                        'children': []
                
                    },
                    {
                        'value': 'clothingaccessories',
                        'label': 'Clothing Accessories',
                        'children': []
                
                    },
                    {
                        'value': 'electronics',
                        'label': 'Electronics',
                        'children': []
                
                    },
                    {
                        'value': 'fabric',
                        'label': 'Fabric',
                        'children': []
                
                    },
                    {
                        'value': 'footwear',
                        'label': 'Footwear',
                        'children': []
                
                    },
                    {
                        'value': 'gamedayandtailgating',
                        'label': 'Gameday & Tailgating',
                        'children': []
                
                    },
                    {
                        'value': 'golfstore',
                        'label': 'Golf Store',
                        'children': []
                
                    },
                    {
                        'value': 'homeandkitchen',
                        'label': 'Home & Kitchen',
                        'children': []
                
                    },
                    {
                        'value': 'jewelryandwatches',
                        'label': 'Jewelry & Watches',
                        'children': []
                
                    },
                    {
                        'value': 'officeproducts',
                        'label': 'Office & Products',
                        'children': []
                
                    },
                    {
                        'value': 'patiolawnandgarden',
                        'label': 'Patio, Lawn & Garden',
                        'children': []
                
                    },
                    {
                        'value': 'petgear',
                        'label': 'Pet Gear',
                        'children': []
                
                    },
                    {
                        'value': 'sportscollectibles',
                        'label': 'Sports Collectibles',
                        'children': []
                
                    },
                    {
                        'value': 'sportsequipment',
                        'label': 'Sports Equipment',
                        'children': []
                
                    },
                    {
                        'value': 'sportssouvenirs',
                        'label': 'Sports Souvenirs',
                        'children': []
                
                    },
                    {
                        'value': 'toolsandhomeimprovement',
                        'label': 'Tools & home Improvement',
                        'children': []
                
                    },
                    {
                        'value': 'toysandgameroom',
                        'label': 'Toys & Game Room',
                        'children': []
                
                    },
                    {
                        'value': 'videogamesandaccessories',
                        'label': 'Video Games & Accessories',
                        'children': []
                
                    },
                ]
        
            },
        ]
    },
    {
        'value':'baby',
        'label':'Baby',
        'children':[
            {
                'value':'activityandentertainment',
                'label':'Activity & Entertainment',
                'children':[
                    {
                        'value':'babygymsandplaymats',
                        'label':'Baby Gyms & Playmats',
                        'children':[]
                
                    },
                    {
                        'value':'bouncersjumpersandswings',
                        'label':'Bouncers, Jumpers & Swings',
                        'children':[]
                
                    },
                    {
                        'value':'floorseatsandloungers',
                        'label':'Floor Seats & Loungers',
                        'children':[]
                
                    },
                    {
                        'value':'playards',
                        'label':'Playards',
                        'children':[]
                
                    },
                    {
                        'value':'playardbedding',
                        'label':'playardbedding',
                        'children':[]
                
                    },
                    {
                        'value':'walkers',
                        'label':'Walkers',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'apparelandaccessories',
                'label':'Apparel & Accessories',
                'children':[
                    {
                        'value':'babygirls',
                        'label':'Baby Girls',
                        'children':[]
                
                    },
                    {
                        'value':'babyboys',
                        'label':'Baby Boys',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'babyandtoddlertoys',
                'label':'Baby & Toddler Toys',
                'children':[
                    {
                        'value':'activityplaycenters',
                        'label':'Activity Play Centers',
                        'children':[]
                
                    },
                    {
                        'value':'balls',
                        'label':'Balls',
                        'children':[]
                
                    },
                    {
                        'value':'bathtoys',
                        'label':'Bath Toys',
                        'children':[]
                
                    },
                    {
                        'value':'carseatandstollertoys',
                        'label':'Car Seats & Stoller Toys',
                        'children':[]
                
                    },
                    {
                        'value':'hammeringandpoundingtoys',
                        'label':'Hammering & Pounding Toys',
                        'children':[]
                
                    },
                    {
                        'value':'indoorclimbersandplay',
                        'label':'Indoor Climbers & Play',
                        'children':[]
                
                    },
                    {
                        'value':'structures',
                        'label':'Structures',
                        'children':[]
                
                    },
                    {
                        'value':'mirrors',
                        'label':'Mirrors',
                        'children':[]
                
                    },
                    {
                        'value':'musicaltoys',
                        'label':'Musical Toys',
                        'children':[]
                
                    },
                    {
                        'value':'pushandpulltoys',
                        'label':'Push & Pull Toys',
                        'children':[]
                
                    },
                    {
                        'value':'rattlesandplushrings',
                        'label':'Rattles & Plush Rings',
                        'children':[]
                
                    },
                    {
                        'value':'sortingandstacingtoys',
                        'label':'Sorting & Stacking Toys',
                        'children':[]
                
                    },
                    {
                        'value':'spinningtops',
                        'label':'Spinning Tops',
                        'children':[]
                
                    },
                    {
                        'value':'stickhorses',
                        'label':'Stick Horses',
                        'children':[]
                
                    },
                    {
                        'value':'teachingclocks',
                        'label':'Teaching Clocks',
                        'children':[]
                
                    },
                    {
                        'value':'teethers',
                        'label':'Teethers',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'babycare',
                'label':'Baby Care',
                'children':[
                    {
                        'value':'bathing',
                        'label':'Bathing',
                        'children':[]
                
                    },
                    {
                        'value':'grooming',
                        'label':'Grooming',
                        'children':[]
                
                    },
                    {
                        'value':'health',
                        'label':'Health',
                        'children':[]
                
                    },
                    {
                        'value':'pacifiersteethersandteething',
                        'label':'Pacifiers, Teethers & Teething',
                        'children':[]
                
                    },
                    {
                        'value':'relief',
                        'label':'Relief',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'babystationery',
                'label':'Baby Stationery',
                'children':[
                    {
                        'value':'birthannouncements',
                        'label':'Birth Announcements',
                        'children':[]
                
                    },
                    {
                        'value':'doorhangers',
                        'label':'Door Hangers',
                        'children':[]
                
                    },
                    {
                        'value':'invitations',
                        'label':'Invitations',
                        'children':[]
                
                    },
                    {
                        'value':'thankyoucards',
                        'label':'Thank You Cards',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'carseatsandaccessories',
                'label':'Car Seats & Accessories',
                'children':[
                    {
                        'value':'carseats',
                        'label':'Car Seats',
                        'children':[]
                
                    },
                    {
                        'value':'carseatbases',
                        'label':'Car Seat Bases',
                        'children':[]
                
                    },
                    {
                        'value':'accessories',
                        'label':'Accessories',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'diapering',
                'label':'Diapering',
                'children':[
                    {
                        'value':'changingtablepadsandcovers',
                        'label':'Changing Table Pads & Covers',
                        'children':[]
                
                    },
                    {
                        'value':'changingtables',
                        'label':'Changing Table',
                        'children':[]
                
                    },
                    {
                        'value':'clothdiaperaccessories',
                        'label':'Cloth Diaper Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'clothdiapers',
                        'label':'Cloth Diapers',
                        'children':[]
                
                    },
                    {
                        'value':'diaperbags',
                        'label':'diaperbags',
                        'children':[]
                
                    },
                    {
                        'value':'diapercreamsandointments',
                        'label':'Diaper Creams & Ointments',
                        'children':[]
                
                    },
                    {
                        'value':'diaperpailsandrefills',
                        'label':'Diaper Pails & Refills',
                        'children':[]
                
                    },
                    {
                        'value':'diaperstackersandcaddies',
                        'label':'Diaper Stackers & Caddies',
                        'children':[]
                
                    },
                    {
                        'value':'disposablediapers',
                        'label':'Disposable Diapers',
                        'children':[]
                
                    },
                    {
                        'value':'portablechangingpads',
                        'label':'Portable Changing Pads',
                        'children':[]
                
                    },
                    {
                        'value':'powders',
                        'label':'Powders',
                        'children':[]
                
                    },
                    {
                        'value':'wipesandholders',
                        'label':'Wipes & Holders',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'feeding',
                'label':'Feeding',
                'children':[
                    {
                        'value':'babyfoods',
                        'label':'Baby Foods',
                        'children':[]
                
                    },
                    {
                        'value':'bibsandbupcloths',
                        'label':'Bibs & Bup Cloths',
                        'children':[]
                
                    },
                    {
                        'value':'bottlefeeding',
                        'label':'Bottle-Feeding',
                        'children':[]
                
                    },
                    {
                        'value':'foodmills',
                        'label':'Food Mills',
                        'children':[]
                
                    },
                    {
                        'value':'foodstorage',
                        'label':'Food Storage',
                        'children':[]
                
                    },
                    {
                        'value':'highchairsandboosterseats',
                        'label':'Highchairs & Booster Seats',
                        'children':[]
                
                    },
                    {
                        'value':'pillowsandpillowcovers',
                        'label':'Pillows & Pillow Covers',
                        'children':[]
                
                    },
                    {
                        'value':'solidfeeding',
                        'label':'Solid Feeding',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'gifts',
                'label':'Gifts',
                'children':[
                    {
                        'value':'albumsframesandjournals',
                        'label':'Albums, Frames & Jounals',
                        'children':[]
                
                    },
                    {
                        'value':'giftbaskets',
                        'label':'Gift Baskets',
                        'children':[]
                
                    },
                    {
                        'value':'giftsets',
                        'label':'Gift Sets',
                        'children':[]
                
                    },
                    {
                        'value':'keepsakes',
                        'label':'Keepsakes',
                        'children':[]
                
                    },
                    {
                        'value':'moneybanks',
                        'label':'Money Banks',
                        'children':[]
                
                    },
                    {
                        'value':'Rattles',
                        'label':'Rattles',
                        'children':[]
                
                    },
                    
                ]
        
            },
            {
                'value':'nursery',
                'label':'Nursery',
                'children':[
                    {
                        'value':'bedding',
                        'label':'Bedding',
                        'children':[]
                
                    },
                    {
                        'value':'furniture',
                        'label':'Furniture',
                        'children':[]
                
                    },
                    {
                        'value':'decor',
                        'label':'Decor',
                        'children':[]
                
                    },
                    {
                        'value':'safetyequipment',
                        'label':'Safety Equipment',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'pottytraining',
                'label':'Potty Training',
                'children':[
                    {
                        'value':'pattiesandseats',
                        'label':'Potties & Seats',
                        'children':[]
                
                    },
                    {
                        'value':'seatcovers',
                        'label':'Seat Covers',
                        'children':[]
                
                    },
                    {
                        'value':'trainingpants',
                        'label':'Travel Pants',
                        'children':[]
                
                    },
                    {
                        'value':'travelpotties',
                        'label':'Travel Potties',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'pregnancyandmaternity',
                'label':'Pregnancy & Maternity',
                'children':[
                    {
                        'value':'breastfeedingpillowsandstools',
                        'label':'Breastfeeding Pillows & Stools',
                        'children':[]
                
                    },
                    {
                        'value':'familyplanningtests',
                        'label':'Family Planning Tests',
                        'children':[]
                
                    },
                    {
                        'value':'maternitypillows',
                        'label':'Maternity Pillows',
                        'children':[]
                
                    },
                    {
                        'value':'prenatalmonitoring',
                        'label':'Prenatal Monitoring Devices',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'safety',
                'label':'Safety',
                'children':[
                    {
                        'value':'bathroomsafety',
                        'label':'Bathroom Safety',
                        'children':[]
                
                    },
                    {
                        'value':'cabinetlocksandstraps',
                        'label':'Cabinet Locks & Straps',
                        'children':[]
                
                    },
                    {
                        'value':'cribnetting',
                        'label':'Crib Netting',
                        'children':[]
                
                    },
                    {
                        'value':'edgeandcornerguards',
                        'label':'Edge & Corner Gaurds',
                        'children':[]
                
                    },
                    {
                        'value':'electricalsafety',
                        'label':'Electrical Safety',
                        'children':[]
                
                    },
                    {
                        'value':'gatesanddoorways',
                        'label':'Gates & Doorways',
                        'children':[]
                
                    },
                    {
                        'value':'harnessesandleashes',
                        'label':'Harnesses & Leashes',
                        'children':[]
                
                    },
                    {
                        'value':'kitchensafety',
                        'label':'Kitchen Safety',
                        'children':[]
                
                    },
                    {
                        'value':'monitors',
                        'label':'Monitors',
                        'children':[]
                
                    },
                    {
                        'value':'outdoorsafety',
                        'label':'Outdoor Safety',
                        'children':[]
                
                    }, 
                    {
                        'value':'railsandrailguards',
                        'label':'Rails & Rail Guards',
                        'children':[]
                
                    },
                    {
                        'value':'sleeppositioners',
                        'label':'Sleep Positioners',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'stollersandaccessories',
                'label':'Stollers & Accessories',
                'children':[
                    {
                        'value':'strollers',
                        'label':'Strollers',
                        'children':[]
                
                    },
                    {
                        'value':'accessories',
                        'label':'Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'replacementparts',
                        'label':'Replacement Parts',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'travelgear',
                'label':'Travel Gear',
                'children':[
                    {
                        'value':'backpacksandcarriers',
                        'label':'Backpacks & Carriers',
                        'children':[]
                
                    },
                    {
                        'value':'bicyclechildseatsandtrailers',
                        'label':'Bicycle Child Seats & Trailers',
                        'children':[]
                
                    },
                    {
                        'value':'carseatsandaccessories',
                        'label':'Car Seats & Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'diaperbags',
                        'label':'Diaper Bags',
                        'children':[]
                
                    },
                    {
                        'value':'harnessesandleashes',
                        'label':'Harnesses & Leashes',
                        'children':[]
                
                    },
                    {
                        'value':'portablechangingpads',
                        'label':'Portable Changing Pads',
                        'children':[]
                
                    },
                    {
                        'value':'shoppingcartcovers',
                        'label':'Shopping Cart Covers',
                        'children':[]
                
                    },
                    {
                        'value':'strollersandaccessories',
                        'label':'Strollers & Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'travelbeds',
                        'label':'Travel Beds',
                        'children':[]
                
                    }, 
                ]
        
            }, 
        ]

    },
    {
        'value':'automotive',
        'label':'Automotive',
        'children':[
            {
                'value':'carcare',
                'label':'Car Care',
                'children':[
                    {
                        'value':'cleaningkits',
                        'label':'Cleaning Kits',
                        'children':[]
                
                    },
                    {
                        'value':'exteriorcare',
                        'label':'Exterior Care',
                        'children':[]
                
                    },
                    {
                        'value':'finishing',
                        'label':'Finishing',
                        'children':[]
                
                    },
                    {
                        'value':'glasscare',
                        'label':'glasscare',
                        'children':[]
                
                    },
                    {
                        'value':'interiorcare',
                        'label':'Interior Care',
                        'children':[]
                
                    },
                    {
                        'value':'solvents',
                        'label':'Solvents',
                        'children':[]
                
                    },
                    {
                        'value':'tireandwheelcare',
                        'label':'Tire & Wheel Care',
                        'children':[]
                
                    },
                    {
                        'value':'toolsandequipment',
                        'label':'Tools & Equipment',
                        'children':[]
                
                    },
                    {
                        'value':'undercoatings',
                        'label':'Undercoatings',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'carelectronicsandaccessories',
                'label':'Car Electronics & accessories',
                'children':[
                    {
                        'value':'carelectronics',
                        'label':'Car Electronics',
                        'children':[]
                
                    },
                    {
                        'value':'carelectronicsaccessories',
                        'label':'car Electronics Accessories',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'exterioraccessories',
                'label':'Exterior Accessories',
                'children':[
                    {
                        'value':'antennatoppers',
                        'label':'Antenna Toppers',
                        'children':[]
                
                    },
                    {
                        'value':'bodyarmor',
                        'label':'Body Armor',
                        'children':[]
                
                    },
                    {
                        'value':'bumperstickersdecalsandmagnets',
                        'label':'Bumper stickers, Decals & Mangnets',
                        'children':[]
                
                    },
                    {
                        'value':'bumpersandbumperaccessories',
                        'label':'Bumpers & Dumper Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'cargomanagement',
                        'label':'Cargo Management',
                        'children':[]
                
                    },
                    {
                        'value':'chrometrimandaccessories',
                        'label':'Chrome Trim & Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'covers',
                        'label':'Covers',
                        'children':[]
                
                    },
                    {
                        'value':'deflectorsandshields',
                        'label':'Deflectors & Shields',
                        'children':[]
                
                    },
                    {
                        'value':'emblems',
                        'label':'Emblems',
                        'children':[]
                
                    },
                    {
                        'value':'fenderflaresandtrim',
                        'label':'Fender Flares & Trim',
                        'children':[]
                
                    },
                    {
                        'value':'gascaps',
                        'label':'Gas Caps',
                        'children':[]
                
                    },
                    {
                        'value':'gastankdoors',
                        'label':'Gas Tank Doors',
                        'children':[]
                
                    },
                    {
                        'value':'grillesandgrilleguards',
                        'label':'Grilles & Grille Guards',
                        'children':[]
                
                    },
                    {
                        'value':'hoodscoopsandvents',
                        'label':'Hood Scoops & Vents',
                        'children':[]
                
                    },
                    {
                        'value':'hornsandaccessories',
                        'label':'Horns & Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'licenseplatecoversandframes',
                        'label':'License Plate Covers & Frames',
                        'children':[]
                
                    },
                    {
                        'value':'mirrorsandparts',
                        'label':'Mirrors & Parts',
                        'children':[]
                
                    },
                    {
                        'value':'mudflapsandsplashguards',
                        'label':'Mud Flaps & Splash Guards',
                        'children':[]
                
                    },
                    {
                        'value':'rollbardsrollcagesandcovers',
                        'label':'Roll Bars, Roll Cages & Covers',
                        'children':[]
                
                    },
                    {
                        'value':'runningboardsandsteps',
                        'label':'Running Boards & Steps',
                        'children':[]
                
                    },
                    {
                        'value':'safety',
                        'label':'Safety',
                        'children':[]
                
                    },
                    {
                        'value':'snowandice',
                        'label':'Snow & Ice',
                        'children':[]
                
                    },
                    {
                        'value':'sparetirecarriers',
                        'label':'Spare Tire Carriers',
                        'children':[]
                
                    },
                    {
                        'value':'spoilerswingsandstylingkits',
                        'label':'Spoilers, Wings & Styling Kits',
                        'children':[]
                
                    },
                    {
                        'value':'towingproductsandwinshes',
                        'label':'Towing Products & Winches',
                        'children':[]
                
                    },
                    {
                        'value':'traileraccessories',
                        'label':'Trailer Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'truckbedandtailgateaccessories',
                        'label':'Truckbed & Tailgate Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'vinylwrapsandaccessories',
                        'label':'Vinyl Wraps & Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'windowlouvers',
                        'label':'Window Louvers',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'interioraccessories',
                'label':'Interior Accessories',
                'children':[
                    {
                        'value':'airfreshners',
                        'label':'Air Freshners',
                        'children':[]
                
                    },
                    {
                        'value':'antitheft',
                        'label':'Anti-Theft',
                        'children':[]
                
                    },
                    {
                        'value':'apparel',
                        'label':'Apparel',
                        'children':[]
                
                    },
                    {
                        'value':'compasses',
                        'label':'Compasses',
                        'children':[]
                
                    },
                    {
                        'value':'consoleandorganizers',
                        'label':'Consoles & Organizers',
                        'children':[]
                
                    },
                    {
                        'value':'covers',
                        'label':'Covers',
                        'children':[]
                
                    },
                    {
                        'value':'cupholders',
                        'label':'Cup Holders',
                        'children':[]
                
                    },
                    {
                        'value':'doorentryguard',
                        'label':'Door Entry Guard',
                        'children':[]
                
                    },
                    {
                        'value':'electricalappliances',
                        'label':'Electrical Appliances',
                        'children':[]
                
                    },
                    {
                        'value':'floormatsandcorgoliners',
                        'label':'Floor Mats & Cargo Liners',
                        'children':[]
                
                    },
                    {
                        'value':'garbagecans',
                        'label':'Garbage Cans',
                        'children':[]
                
                    },
                    {
                        'value':'gauges',
                        'label':'Gauges',
                        'children':[]
                
                    },
                    {
                        'value':'grabhanles',
                        'label':'Garbage Cans',
                        'children':[]
                
                    },
                    {
                        'value':'grabhandles',
                        'label':'Grab Handles',
                        'children':[]
                
                    },
                    {
                        'value':'gunracks',
                        'label':'Gun Racks',
                        'children':[]
                
                    },
                    {
                        'value':'insulationandnoisecontrol',
                        'label':'Insulation & Noise Control',
                        'children':[]
                
                    },
                    {
                        'value':'keychains',
                        'label':'Keychains',
                        'children':[]
                
                    },
                    {
                        'value':'mirrors',
                        'label':'Mirrors',
                        'children':[]
                
                    },
                    {
                        'value':'pedalsandpedalaccessories',
                        'label':'Pedals & Pedal Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'safety',
                        'label':'Safety',
                        'children':[]
                
                    },
                    {
                        'value':'seatcoverandaccessories',
                        'label':'Seat Covers & Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'shiftbootsandknobs',
                        'label':'Shift Boots & Knobs',
                        'children':[]
                
                    },
                    {
                        'value':'steeringwheelsandaccessories',
                        'label':'Steering Wheels & Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'sunprotection',
                        'label':'Sun Protection',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'lightsandlightingaccessories',
                'label':'Lights & Lighting Accessories',
                'children':[
                    {
                        'value':'bulbs',
                        'label':'Bulbs',
                        'children':[]
                
                    },
                    {
                        'value':'accentandoffroadlighting',
                        'label':'Accent & Off Road Lighting',
                        'children':[]
                
                    },
                    {
                        'value':'lightcovers',
                        'label':'Light Covers',
                        'children':[]
                
                    },
                    {
                        'value':'lightingaccembliesandaccessories',
                        'label':'Lighting Asseblies & Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'lightingconversionkits',
                        'label':'Lighting Conversion Kits',
                        'children':[]
                
                    },
                    {
                        'value':'towingandtrailerlighting',
                        'label':'Towing & Trailer Lighting',
                        'children':[]
                
                    },
                    {
                        'value':'warningandemergencylights',
                        'label':'Warning & Emergency Lights',
                        'children':[]
                
                    },  
                ]
        
            },
            {
                'value':'motorcycleandpowersports',
                'label':'Motorcycle & Powersports',
                'children':[
                    {
                        'value':'parts',
                        'label':'Parts',
                        'children':[]
                
                    },
                    {
                        'value':'protectivegear',
                        'label':'Protective Gear',
                        'children':[]
                
                    },
                    {
                        'value':'vehicle',
                        'label':'Vehicle',
                        'children':[]
                
                    },
                    {
                        'value':'fluidsandmaintenance',
                        'label':'Fluids & Maintenance',
                        'children':[]
                
                    },
                    {
                        'value':'accessories',
                        'label':'Accessories',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'oilandfluids',
                'label':'Oild & Fluids',
                'children':[
                    {
                        'value':'additives',
                        'label':'Additives',
                        'children':[]
                
                    },
                    {
                        'value':'antifreezesandcoolants',
                        'label':'Antifreezes & Coolants',
                        'children':[]
                
                    },
                    {
                        'value':'bodyrepairandrestoration',
                        'label':'Body Repair & Restoration',
                        'children':[]
                
                    },
                    {
                        'value':'chemicals',
                        'label':'Chemicals',
                        'children':[]
                
                    },
                    {
                        'value':'brakefluids',
                        'label':'Brake Fluids',
                        'children':[]
                
                    },
                    {
                        'value':'cleaners',
                        'label':'Cleaners',
                        'children':[]
                
                    },
                    {
                        'value':'flushes',
                        'label':'Flushes',
                        'children':[]
                
                    },
                    {
                        'value':'greasesandlubricants',
                        'label':'Greases & Lubricants',
                        'children':[]
                
                    },
                    {
                        'value':'oils',
                        'label':'Oils',
                        'children':[]
                
                    },
                    {
                        'value':'powersteering',
                        'label':'Power Steering Fluids',
                        'children':[]
                
                    },
                    {
                        'value':'radiatorconditionersandprotectants',
                        'label':'Rediator Conditioners & Protectants',
                        'children':[]
                
                    },
                    {
                        'value':'refrigerants',
                        'label':'Refrigerants',
                        'children':[]
                
                    },
                    {
                        'value':'sealers',
                        'label':'Sealers',
                        'children':[]
                
                    },
                    {
                        'value':'transmissionfluids',
                        'label':'Transmission Fluids',
                        'children':[]
                
                    },
                    {
                        'value':'windshieldwasherfluids',
                        'label':'Windshield Washer Fluids',
                        'children':[]
                
                    },
                    {
                        'value':'winterproducts',
                        'label':'Winter Products',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'paintandpaintsupplies',
                'label':'Paint & Paint Supplies',
                'children':[
                    {
                        'value':'paintsandprimers',
                        'label':'Paints & Primers',
                        'children':[]
                
                    },
                    {
                        'value':'paintgunsandaccessories',
                        'label':'Paint Guns & Accessories',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'performancepartsandaccessories',
                'label':'Performance Parts & Accessories',
                'children':[
                    {
                        'value':'batteriesandaccessories',
                        'label':'Batteries & accessories',
                        'children':[]
                
                    },
                    {
                        'value':'bearing&seals',
                        'label':'Bearings & Seals',
                        'children':[]
                
                    },
                    {
                        'value':'beltshorsesandpuuleys',
                        'label':'Belts, hoses & Pullyes',
                        'children':[]
                
                    },
                    {
                        'value':'brakesystem',
                        'label':'Brake System',
                        'children':[]
                
                    },
                    {
                        'value':'drivetrain',
                        'label':'Drive Train',
                        'children':[]
                
                    },
                    {
                        'value':'emissionsystem',
                        'label':'Emission System',
                        'children':[]
                
                    },
                    {
                        'value':'enginecooling',
                        'label':'Engine Cooling',
                        'children':[]
                
                    },
                    {
                        'value':'enginesandengineparts',
                        'label':'Engines & Engine Parts',
                        'children':[]
                
                    },
                    {
                        'value':'exhaustsystemsandparts',
                        'label':'Exhaust System & Parts',
                        'children':[]
                
                    },
                    {
                        'value':'filters',
                        'label':'Filters',
                        'children':[]
                
                    },
                    {
                        'value':'fuelsystem',
                        'label':'Fuel System',
                        'children':[]
                
                    },
                    {
                        'value':'gaskets',
                        'label':'Gaskets',
                        'children':[]
                
                    },
                    {
                        'value':'ignitionandelectrical',
                        'label':'Ignition & Electrical',
                        'children':[]
                
                    },
                    {
                        'value':'shocksstrutsandsuspension',
                        'label':'Shocks, Struts & Suspension',
                        'children':[]
                
                    },
                    {
                        'value':'startersandalternators',
                        'label':'Starters & Alternators',
                        'children':[]
                
                    },
                    {
                        'value':'steeringsystem',
                        'label':'Steering System',
                        'children':[]
                
                    },
                    {
                        'value':'switchesandrelays',
                        'label':'Switches & Relays',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'replacementparts',
                'label':'Replacement Parts',
                'children':[
                    {
                        'value':'batteriesandaccessories',
                        'label':'Batteries & accessories',
                        'children':[]
                
                    },
                    {
                        'value':'bearing&seals',
                        'label':'Bearings & Seals',
                        'children':[]
                
                    },
                    {
                        'value':'beltshorsesandpuuleys',
                        'label':'Belts, hoses & Pullyes',
                        'children':[]
                
                    },
                    {
                        'value':'brakesystem',
                        'label':'Brake System',
                        'children':[]
                
                    },
                    {
                        'value':'cables',
                        'label':'Cables',
                        'children':[]
                
                    },
                    {
                        'value':'caps',
                        'label':'Caps',
                        'children':[]
                
                    },
                    {
                        'value':'enginecoolingandclimatecontrol',
                        'label':'Engine Cooling & Climate Control',
                        'children':[]
                
                    },
                    {
                        'value':'enginesandengineparts',
                        'label':'Engines & Engine Parts',
                        'children':[]
                
                    },
                    {
                        'value':'exhaustsystemsandparts',
                        'label':'Exhaust System & Parts',
                        'children':[]
                
                    },
                    {
                        'value':'filters',
                        'label':'Filters',
                        'children':[]
                
                    },
                    {
                        'value':'fuelsystem',
                        'label':'Fuel System',
                        'children':[]
                
                    },
                    {
                        'value':'gaskets',
                        'label':'Gaskets',
                        'children':[]
                
                    },
                    {
                        'value':'ignitionparts',
                        'label':'Ignition Parts',
                        'children':[]
                
                    },
                    {
                        'value':'lightingandelectrical',
                        'label':'Lighting & Electrical',
                        'children':[]
                
                    },
                    {
                        'value':'motors',
                        'label':'Motors',
                        'children':[]
                
                    },
                    {
                        'value':'sensors',
                        'label':'Sensors',
                        'children':[]
                
                    },
                    {
                        'value':'shocksstrutsandsuspension',
                        'label':'Shocks, Struts & Suspension',
                        'children':[]
                
                    },
                    {
                        'value':'startersandalternators',
                        'label':'Starters & Alternators',
                        'children':[]
                
                    },
                    {
                        'value':'steeringsystem',
                        'label':'Steering System',
                        'children':[]
                
                    },
                    {
                        'value':'switchesandrelays',
                        'label':'Switches & Relays',
                        'children':[]
                
                    },
                    {
                        'value':'transmissionanddrivetrain',
                        'label':'Transmission & Drive Train',
                        'children':[]
                
                    },
                    {
                        'value':'windowregulatorsandmotors',
                        'label':'Window Regulators & Motors',
                        'children':[]
                
                    },
                    {
                        'value':'windshieldwipersandwashers',
                        'label':'Windshield Wipers & Washers',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'rvpartsandaccessories',
                'label':'RV Parts & Accessories',
                'children':[
                    {
                        'value':'appliancesheatingacandventilation',
                        'label':'Appliances, Heating, A/C & Ventilation',
                        'children':[]
                
                    },
                    {
                        'value':'awningsscreensandaccessories',
                        'label':'Awnings, Screens & Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'cleaningstorageandmaintenance',
                        'label':'Cleaning, Storage & Maintenance',
                        'children':[]
                
                    },
                    {
                        'value':'covers',
                        'label':'Covers',
                        'children':[]
                
                    },
                    {
                        'value':'electronics',
                        'label':'Electronics',
                        'children':[]
                
                    },
                    {
                        'value':'engineandchassisparts',
                        'label':'Engine & Chassis Parts',
                        'children':[]
                
                    },
                    {
                        'value':'freshwatersystems',
                        'label':'Freshwater Systems',
                        'children':[]
                
                    },
                    {
                        'value':'furnishingsandinterioraccessories',
                        'label':'Furnishings & Interior Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'hitchingandtowing',
                        'label':'Hitching & Towing',
                        'children':[]
                
                    },
                    {
                        'value':'levelingandstablization',
                        'label':'Leveling & Stablization',
                        'children':[]
                
                    },
                    {
                        'value':'lighting',
                        'label':'Lighting',
                        'children':[]
                
                    },
                    {
                        'value':'outdoorfurniture',
                        'label':'OUtdoor Furniture',
                        'children':[]
                
                    },
                    {
                        'value':'powerandelectrical',
                        'label':'Power & Electrical',
                        'children':[]
                
                    },
                    {
                        'value':'stepsandladders',
                        'label':'Steps & Ladders',
                        'children':[]
                
                    },
                    {
                        'value':'wastewaterandsanitation',
                        'label':'Waste Water & Sanitation',
                        'children':[]
                
                    },
                    {
                        'value':'wheels',
                        'label':'Wheels',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'tiresandwheels',
                'label':'Tires & Wheels',
                'children':[
                    {
                        'value':'tires',
                        'label':'Tires',
                        'children':[]
                
                    },
                    {
                        'value':'wheels',
                        'label':'Wheels',
                        'children':[]
                
                    },
                    {
                        'value':'accessoriesandparts',
                        'label':'Accessories & Parts',
                        'children':[]
                
                    },
                    {
                        'value':'tireandwheelassemblies',
                        'label':'Tire & Wheel Assemblies',
                        'children':[]
                
                    },
                    {
                        'value':'tireandwheelcare',
                        'label':'Tire & Wheel Care',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'toolsandequipment',
                'label':'Tools & Equipment',
                'children':[
                    {
                        'value':'airconditioningtoolsandequipment',
                        'label':'Air Condition Tools & Equipment',
                        'children':[]
                
                    },
                    {
                        'value':'applicators',
                        'label':'Applicators',
                        'children':[]
                
                    },
                    {
                        'value':'bodyrepairtools',
                        'label':'Body Repair Tools',
                        'children':[]
                
                    },
                    {
                        'value':'braketools',
                        'label':'Brake Tools',
                        'children':[]
                
                    },
                    {
                        'value':'bushingtools',
                        'label':'Bushing Tools',
                        'children':[]
                
                    },
                    {
                        'value':'clutchalignmentstools',
                        'label':'Clutch Alignments Tools',
                        'children':[]
                
                    },
                    {
                        'value':'coolingandwaterpumptools',
                        'label':'Cooling & Water Pump Tools',
                        'children':[]
                
                    },
                    {
                        'value':'diagnostictestandmeasurementtools',
                        'label':'Diagnostic, Test & measurement Tools',
                        'children':[]
                
                    },
                    {
                        'value':'drivetraintools',
                        'label':'Drive Train Tools',
                        'children':[]
                
                    },
                    {
                        'value':'electricalsystemtools',
                        'label':'Electrical System Tools',
                        'children':[]
                
                    },
                    {
                        'value':'enginetools',
                        'label':'Engine Tools',
                        'children':[]
                
                    },
                    {
                        'value':'flywheellocks',
                        'label':'Flywheellocks',
                        'children':[]
                
                    },
                    {
                        'value':'fuelsystemtools',
                        'label':'Fuel System Tools',
                        'children':[]
                
                    },
                    {
                        'value':'garageandshop',
                        'label':'Garage & Shop',
                        'children':[]
                
                    },
                    {
                        'value':'handtools',
                        'label':'Hand Tools',
                        'children':[]
                
                    },
                    {
                        'value':'hoserepairkits',
                        'label':'Hose Repair Kits',
                        'children':[]
                
                    },
                    {
                        'value':'jumpstartersbattery',
                        'label':'Jump Starters, Battery',
                        'children':[]
                
                    },
                    {
                        'value':'chargersandportablepower',
                        'label':'Chargers & Portable Power',
                        'children':[]
                
                    },
                    {
                        'value':'lockoutkits',
                        'label':'Lockout Kits',
                        'children':[]
                
                    },
                    {
                        'value':'mufflertools',
                        'label':'Muffler Tools',
                        'children':[]
                
                    },
                    {
                        'value':'oilsystemtools',
                        'label':'Oil System Tools',
                        'children':[]
                
                    },
                    {
                        'value':'oxygensensorremovers',
                        'label':'Oxygen Sensor Removers',
                        'children':[]
                
                    },
                    {
                        'value':'partswashers',
                        'label':'Parts Washers',
                        'children':[]
                
                    },
                    {
                        'value':'pullers',
                        'label':'Pullers',
                        'children':[]
                
                    },
                    {
                        'value':'riverters',
                        'label':'Riverters',
                        'children':[]
                
                    },
                    {
                        'value':'sparkplugandignitiontools',
                        'label':'Spark Plug & Ignition Tools',
                        'children':[]
                
                    },
                    {
                        'value':'steeringandsuspensiontools',
                        'label':'Steering & Suspension Tools',
                        'children':[]
                
                    },
                    {
                        'value':'strutcompressors',
                        'label':'Strut Compressors',
                        'children':[]
                
                    },
                    {
                        'value':'threadrepairkids',
                        'label':'Thread Repair Kits',
                        'children':[]
                
                    },
                    {
                        'value':'tireandwheeltools',
                        'label':'Tire & Wheel Tools',
                        'children':[]
                
                    },
                    {
                        'value':'tireaircompressorsandinflators',
                        'label':'Tire Air Compressors & Inflators',
                        'children':[]
                
                    },
                    {
                        'value':'toolboxes',
                        'label':'Tool Boxes',
                        'children':[]
                
                    },
                    {
                        'value':'toolsets',
                        'label':'Tool Trays',
                        'children':[]
                
                    },
                    {
                        'value':'weldingtools',
                        'label':'Welding Tools',
                        'children':[]
                
                    },
                    {
                        'value':'windshieldwipertools',
                        'label':'Windshield Wiper Tools',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'automotiveenthusiastmerchandise',
                'label':'Automotive Enthusiast Merchandise',
                'children':[
                    {
                        'value':'vehicleaccessories',
                        'label':'Vehicle Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'apparel',
                        'label':'Apparel',
                        'children':[]
                
                    },
                    {
                        'value':'bagsandaccessories',
                        'label':'Bags & Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'homeandoffice',
                        'label':'Home & Office',
                        'children':[]
                
                    },
                    {
                        'value':'jewelryandwatches',
                        'label':'Jewelry & Watches',
                        'children':[]
                
                    },
                    {
                        'value':'toysandmodels',
                        'label':'Toys & Models',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'heavydutyandcommercialvehicleequipment',
                'label':'Heavy Duty & Commercial Vehicle Equipment',
                'children':[
                    {
                        'value':'heavydutyandcommercialvehicleaccessories',
                        'label':'Heavy Duty & Commercial Vehicle accessories',
                        'children':[]
                
                    },
                    {
                        'value':'heavydutyandcommercialvehiclesparts',
                        'label':'Heavy Duty & Commercial Vehicles Parts',
                        'children':[]
                
                    },
                    {
                        'value':'heavydutyfleetnavigationandcommunicationsupplies',
                        'label':'Heavy Duty Fleet Navigation & Communication Supplies',
                        'children':[]
                
                    },
                    {
                        'value':'heavydutyoilsandfluids',
                        'label':'Heavy Duty Oils & Fluids',
                        'children':[]
                
                    }, 
                ]
        
            },
             
        ]

    },
    {
        'value':'artsandcrafts',
        'label':'Arts & Crafts',
        'children':[
            {
                'value':'beadingandjewelrymaking',
                'label':'Beading & Jewelry Making',
                'children':[
                    {
                        'value':'beadingsupplies',
                        'label':'Beading Supplies',
                        'children':[]
                
                    },
                    {
                        'value':'beadsandbeadassortments',
                        'label':'Beads & Bead Assortments',
                        'children':[]
                
                    },
                    {
                        'value':'charms',
                        'label':'Charms',
                        'children':[]
                
                    },
                    {
                        'value':'engravingmachinesandtools',
                        'label':'Engraving Machines & Tools',
                        'children':[]
                
                    },
                    {
                        'value':'fusibleglasssupplies',
                        'label':'Fusible Glass Supplies',
                        'children':[]
                
                    },
                    {
                        'value':'jewelrycastingsuuplies',
                        'label':'Jewelry Casting Supplies',
                        'children':[]
                
                    },
                    {
                        'value':'jewelryfindings',
                        'label':'Jewelry Findings',
                        'children':[]
                
                    },
                    {
                        'value':'jewelrymakingdisplayandpackagingsupplies',
                        'label':'Jewelry Making Display & Packaging Supplies',
                        'children':[]
                
                    },
                    {
                        'value':'jewelrymakingkits',
                        'label':'Jewelry Making Kits',
                        'children':[]
                
                    },
                    {
                        'value':'jewelrymakingtoolsandaccessories',
                        'label':'Jewelry Making Tools & Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'jewelrypatterns',
                        'label':'Jewelry Patterns',
                        'children':[]
                
                    },
                    {
                        'value':'metalstampingtools',
                        'label':'Metal Stamping Tools',
                        'children':[]
                
                    },
                    {
                        'value':'polishingandbuffing',
                        'label':'Polishing & Buffing',
                        'children':[]
                
                    },
                    {
                        'value':'pursemaking',
                        'label':'Pure Making',
                        'children':[]
                
                    },
                    {
                        'value':'storage',
                        'label':'Storage',
                        'children':[]
                
                    },
                    {
                        'value':'waxmoldingmaterials',
                        'label':'Wax Molding Materials',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'crafting',
                'label':'Crafting',
                'children':[
                    {
                        'value':'basketmaking',
                        'label':'Basket Making',
                        'children':[]
                
                    },
                    {
                        'value':'candlemaking',
                        'label':'Candle Making',
                        'children':[]
                
                    },
                    {
                        'value':'cecamicsandpottery',
                        'label':'Ceramics & Pottery',
                        'children':[]
                
                    },
                    {
                        'value':'craftsupplies',
                        'label':'Craft Supplies',
                        'children':[]
                
                    },
                    {
                        'value':'dollmaking',
                        'label':'Doll Making',
                        'children':[]
                
                    },
                    {
                        'value':'fabricribbons',
                        'label':'Fabric Ribbons',
                        'children':[]
                
                    },
                    {
                        'value':'floralarranging',
                        'label':'Floral arranging',
                        'children':[]
                
                    },
                    {
                        'value':'leathercraft',
                        'label':'Leathercraft',
                        'children':[]
                
                    },
                    {
                        'value':'mosaicmaking',
                        'label':'Mosaic Making',
                        'children':[]
                
                    },
                    {
                        'value':'paperandpapercrafts',
                        'label':'Paper & Paper Crafts',
                        'children':[]
                
                    },
                    {
                        'value':'pictureframing',
                        'label':'Picture Framing',
                        'children':[]
                
                    },
                    {
                        'value':'scratchboardsandfoilengraving',
                        'label':'Scratchboards & Foil Engraving',
                        'children':[]
                
                    },
                    {
                        'value':'sculpturesupplies',
                        'label':'sculpture Supplies',
                        'children':[]
                
                    },
                    {
                        'value':'soapmaking',
                        'label':'Soap Making',
                        'children':[]
                
                    },
                    {
                        'value':'stainedglassmaking',
                        'label':'Stained Glass Making',
                        'children':[]
                
                    },
                    {
                        'value':'suncatchersupplies',
                        'label':'Suncatcher Supplies',
                        'children':[]
                
                    },
                    {
                        'value':'wearingandspinning',
                        'label':'Weaving & spinning',
                        'children':[]
                
                    },
                    {
                        'value':'woodcrafts',
                        'label':'Woodcrafts',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'fabric',
                'label':'Fabric',
                'children':[
                     
                ]
        
            },
            {
                'value':'fabricdecorating',
                'label':'Fabric Decorating',
                'children':[
                    {
                        'value':'applicationtools',
                        'label':'Application Tools',
                        'children':[]
                
                    },
                    {
                        'value':'dyes',
                        'label':'Dyes',
                        'children':[]
                
                    },
                    {
                        'value':'fabricandtextilepaints',
                        'label':'Fabric & Textile Paints',
                        'children':[]
                
                    },
                    {
                        'value':'fabricdecoratingkits',
                        'label':'Fabric Decorating Kits',
                        'children':[]
                
                    },
                    {
                        'value':'fixatives',
                        'label':'Fixatives',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'giftwrapping',
                'label':'Gift Wrapping Supplies',
                'children':[
                    {
                        'value':'enclosurecards',
                        'label':'Enclosure Cards',
                        'children':[]
                
                    },
                    {
                        'value':'giftbags',
                        'label':'Gift bags',
                        'children':[]
                
                    },
                    {
                        'value':'giftboxes',
                        'label':'Gift Boxes',
                        'children':[]
                
                    },
                    {
                        'value':'giftwrapbows',
                        'label':'Gift Wrap Bows',
                        'children':[]
                
                    },
                    {
                        'value':'giftwrapcellophane',
                        'label':'Gift Wrap Cellophange',
                        'children':[]
                
                    },
                    {
                        'value':'giftwrapcellophanebags',
                        'label':'Gift Wrap Cellophange Bags',
                        'children':[]
                
                    },
                    {
                        'value':'giftwrapcrinkleandfillerpaper',
                        'label':'Gift Wrap Crinkle & Filler Paper',
                        'children':[]
                
                    },
                    {
                        'value':'giftwrappaper',
                        'label':'Gift Wrap Paper',
                        'children':[]
                
                    },
                    {
                        'value':'giftwrapribbons',
                        'label':'Gift Wrap Ribbons',
                        'children':[]
                
                    },
                    {
                        'value':'giftwraptags',
                        'label':'Gift Wrap Tags',
                        'children':[]
                
                    },
                    {
                        'value':'wrappingsets',
                        'label':'Wrapping Sets',
                        'children':[]
                
                    },
                    {
                        'value':'wrappingtissue',
                        'label':'Wrapping Tissue',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'knittingandcrochet',
                'label':'Knitting & Crohet',
                'children':[
                    {
                        'value':'ballwinders',
                        'label':'Ball Winders',
                        'children':[]
                
                    },
                    {
                        'value':'crochethooks',
                        'label':'Crochet Hooks',
                        'children':[]
                
                    },
                    {
                        'value':'crochetkits',
                        'label':'Crochet kits',
                        'children':[]
                
                    },
                    {
                        'value':'crochetpatterns',
                        'label':'Crochet Patterns',
                        'children':[]
                
                    },
                    {
                        'value':'crochetthread',
                        'label':'Crochet Thread',
                        'children':[]
                
                    },
                    {
                        'value':'knittingandcrochetnotions',
                        'label':'knitting & Crochet Notions',
                        'children':[]
                
                    },
                    {
                        'value':'knittingkits',
                        'label':'Knitting Kits',
                        'children':[]
                
                    },
                    {
                        'value':'knittingloomsandboards',
                        'label':'Knitting Looms & Boards',
                        'children':[]
                
                    },
                    {
                        'value':'knittingneedles',
                        'label':'Knitting Needles',
                        'children':[]
                
                    },
                    {
                        'value':'knittingpatterns',
                        'label':'Knitting Patterns',
                        'children':[]
                
                    },
                    {
                        'value':'needlecases',
                        'label':'Needle Cases',
                        'children':[]
                
                    },
                    {
                        'value':'yarn',
                        'label':'Yarn',
                        'children':[]
                
                    },
                    {
                        'value':'yarnstorage',
                        'label':'Yarn Storage',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'needlework',
                'label':'Needlework',
                'children':[
                    {
                        'value':'crossstitch',
                        'label':'Cross-Stitch',
                        'children':[]
                
                    },
                    {
                        'value':'embroidery',
                        'label':'Embroidery',
                        'children':[]
                
                    },
                    {
                        'value':'feltappliquekits',
                        'label':'Felt Applique Kits',
                        'children':[]
                
                    },
                    {
                        'value':'latchhook',
                        'label':'Latch Hook',
                        'children':[]
                
                    },
                    {
                        'value':'needlefeltingsupplies',
                        'label':'Needle Felting Supplies',
                        'children':[]
                
                    },
                    {
                        'value':'needlepoint',
                        'label':'Needlepoint',
                        'children':[]
                
                    },
                    {
                        'value':'punchneedleandrugpunch',
                        'label':'Punch Needle & Rug Punch',
                        'children':[]
                
                    },
                    {
                        'value':'tattingandlacemaking',
                        'label':'Tatting & Lacemaking',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'organizationstorageandtransport',
                'label':'Organization, Storage & Transport',
                'children':[
                    {
                        'value':'artandpostertubes',
                        'label':'Art & Poster Tubes',
                        'children':[]
                
                    },
                    {
                        'value':'arttoolandsketchboxes',
                        'label':'Art Tool & Sketch Boxes',
                        'children':[]
                
                    },
                    {
                        'value':'beadingstorage',
                        'label':'Beading storage',
                        'children':[]
                
                    },
                    {
                        'value':'craftandsewingsuppliesstorage',
                        'label':'Craft & Sewing Supplies Storage',
                        'children':[]
                
                    },
                    {
                        'value':'dryingandprintracks',
                        'label':'Drying & Print Racks',
                        'children':[]
                
                    },
                    {
                        'value':'flatandverticalfiles',
                        'label':'Flat & Vertical Files',
                        'children':[]
                
                    },
                    {
                        'value':'paintbrushorganizersandholders',
                        'label':'Paint Brush Organizers & Holders',
                        'children':[]
                
                    },
                    {
                        'value':'penpencileandmarkercases',
                        'label':'Pen, Pencil & Marker Cases',
                        'children':[]
                
                    },
                    {
                        'value':'portfolios',
                        'label':'Portfolios',
                        'children':[]
                
                    },
                    {
                        'value':'storageboxesandorganizers',
                        'label':'Storage Boxes & Organizers',
                        'children':[]
                
                    },
                    {
                        'value':'storagecabinets',
                        'label':'Storge Cabinets',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'paintingdrawingandartsupplies',
                'label':'Painting, Drawing & Art Supplies',
                'children':[
                    {
                        'value':'artpaper',
                        'label':'Art Paper',
                        'children':[]
                
                    },
                    {
                        'value':'boardsandcanvas',
                        'label':'Boards & Canvas',
                        'children':[]
                
                    },
                    {
                        'value':'drawing',
                        'label':'Drawing',
                        'children':[]
                
                    },
                    {
                        'value':'easels',
                        'label':'Easels',
                        'children':[]
                
                    },
                    {
                        'value':'painting',
                        'label':'Painting',
                        'children':[]
                
                    },
                    {
                        'value':'brushandpencleaners',
                        'label':'Brush & Pen Cleaners',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'partydecorationsandsupplies',
                'label':'Party Decorations & Supplies',
                'children':[
                    {
                        'value':' aislerunners',
                        'label':'Aisle Runners',
                        'children':[]
                
                    },
                    {
                        'value':'ballons',
                        'label':'Balloons',
                        'children':[]
                
                    },
                    {
                        'value':'bannersandgarlands',
                        'label':'Banners & Garlands',
                        'children':[]
                
                    },
                    {
                        'value':'cardboxes',
                        'label':'Car Boxes',
                        'children':[]
                
                    },
                    {
                        'value':'cardboardcutouts',
                        'label':'Cardboard Cutouts',
                        'children':[]
                
                    },
                    {
                        'value':'centerpieces',
                        'label':'Centerpieces',
                        'children':[]
                
                    },
                    {
                        'value':'confetti',
                        'label':'Confetti',
                        'children':[]
                
                    },
                    {
                        'value':'guestbooks',
                        'label':'Guestbooks',
                        'children':[]
                
                    },
                    {
                        'value':'luminarias',
                        'label':'Luminarias',
                        'children':[]
                
                    },
                    {
                        'value':'skylanterns',
                        'label':'Sky Lanterns',
                        'children':[]
                
                    },
                    {
                        'value':'streamers',
                        'label':'Streamers',
                        'children':[]
                
                    },
                    {
                        'value':'tablecovers',
                        'label':'Tablecovers',
                        'children':[]
                
                    },
                    {
                        'value':'tissuepompoms',
                        'label':'Tissue Pom Poms',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'printmaking',
                'label':'Pringmaking',
                'children':[
                    {
                        'value':' etchingsupplies',
                        'label':'Etching Supplies',
                        'children':[]
                
                    },
                    {
                        'value':'heatpressmachinesandaccessories',
                        'label':'Heat Press Machines & Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'printmakinginks',
                        'label':'Printmaking Inks',
                        'children':[]
                
                    },
                    {
                        'value':'reliefandblockprinting',
                        'label':'Relief & Block Printing',
                        'children':[]
                
                    },
                    {
                        'value':'materials',
                        'label':'Materials',
                        'children':[]
                
                    },
                    {
                        'value':'screenprinting',
                        'label':'Screen Printing',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'scrapbookingandstamping',
                'label':'Scrapbooking & Stamping',
                'children':[
                    {
                        'value':' adhesivevinyl',
                        'label':'Adhesive Vinyl',
                        'children':[]
                
                    },
                    {
                        'value':'adhesives',
                        'label':'Adhesives',
                        'children':[]
                
                    },
                    {
                        'value':'albumsandrefills',
                        'label':'Albums & Refills',
                        'children':[]
                
                    },
                    {
                        'value':'chipboard',
                        'label':'Chipboard',
                        'children':[]
                
                    },
                    {
                        'value':'cuttingmats',
                        'label':'Cutting Mats',
                        'children':[]
                
                    },
                    {
                        'value':'diecuttingandembossing',
                        'label':'Die-Cutting & Embossing',
                        'children':[]
                
                    },{
                        'value':'kits',
                        'label':'Kits',
                        'children':[]
                
                    },
                    {
                        'value':'paperandcardstock',
                        'label':'Paper & Card Stock',
                        'children':[]
                
                    },
                    {
                        'value':'paperpunches',
                        'label':'Paper Punches',
                        'children':[]
                
                    },
                    {
                        'value':'pensandmarkers',
                        'label':'Pens & Markers',
                        'children':[]
                
                    },
                    {
                        'value':'phototransferandcoloringsupplies',
                        'label':'Photo Tranfer & Coloring Supplies',
                        'children':[]
                
                    },
                    {
                        'value':'scrapbookingembellishments',
                        'label':'Scrapbooking Embellishments',
                        'children':[]
                
                    },
                    {
                        'value':'scrapbookingtools',
                        'label':'Scrapbooking Tools',
                        'children':[]
                
                    },
                    {
                        'value':'stampsandinkpads',
                        'label':'Stamps and Ink Pads',
                        'children':[]
                
                    },{
                        'value':'stickersandstickermachines',
                        'label':'Stickers & Sticker Machines',
                        'children':[]
                
                    },
                    {
                        'value':'storage',
                        'label':'Storage',
                        'children':[]
                
                    },
                    {
                        'value':'stencilsandtemplates',
                        'label':'stencils & Templates',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'sewing',
                'label':'Sewing',
                'children':[
                    {
                        'value':'embrioderymachines',
                        'label':'Embroidery Machines',
                        'children':[]
                
                    },
                    {
                        'value':'industrialmachines',
                        'label':'Industrial Mahines',
                        'children':[]
                
                    },
                    {
                        'value':'quilting',
                        'label':'Quilting',
                        'children':[]
                
                    },
                    {
                        'value':'sergerandoverlockmachineaccessories',
                        'label':'Sergers & Overlock Machines Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'sergerandoverlockmachine',
                        'label':'Sergers & Overlock Machines',
                        'children':[]
                
                    },
                    {
                        'value':'sewingmachinepartsandaccessories',
                        'label':'Sewing Machine Parts & Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'sewingmachines',
                        'label':'Sewing Machines',
                        'children':[]
                
                    },
                    {
                        'value':'sewingnotionsandsupplies',
                        'label':'Sewing Notions & Supplies',
                        'children':[]
                
                    },{
                        'value':'sewingpatternsandtemplates',
                        'label':'sewingpatternsandtemplates',
                        'children':[]
                
                    },
                    {
                        'value':'sewingprojectkits',
                        'label':'Sewing Project Kits',
                        'children':[]
                
                    },
                    {
                        'value':'storageandfurniture',
                        'label':'Storage and Furniture',
                        'children':[]
                
                    },
                    {
                        'value':'threadandfloss',
                        'label':'Thread & Floss',
                        'children':[]
                
                    },
                    {
                        'value':'trimandembellishments',
                        'label':'Trim & Embellishments',
                        'children':[]
                
                    }, 
                ]
        
            },
        ]

    },
    {
        'value':'beautyandpersonalcare',
        'label':'Beauty and personal care',
        'children':[
            {
                'value':'makeup',
                'label':'Makeup',
                'children':[
                    {
                        'value':'body',
                        'label':'Body',
                        'children':[]
                
                    },
                    {
                        'value':'eyes',
                        'label':'Eyes',
                        'children':[]
                
                    },
                    {
                        'value':'face',
                        'label':'Face',
                        'children':[]
                
                    },
                    {
                        'value':'lips',
                        'label':'Lips',
                        'children':[]
                
                    },{
                        'value':'makeuppalettes',
                        'label':'Makeup Ralettes',
                        'children':[]
                
                    }, 
                    {
                        'value':'makeupremover',
                        'label':'Makeup Remover',
                        'children':[]
                
                    },
                    {
                        'value':'makeupsets',
                        'label':'Makeup Sets',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'skincare',
                'label':'Skin care',
                'children':[
                    {
                        'value':'body',
                        'label':'Body',
                        'children':[]
                
                    },
                    {
                        'value':'eyes',
                        'label':'Eyes',
                        'children':[]
                
                    },
                    {
                        'value':'face',
                        'label':'Face',
                        'children':[]
                
                    },
                    {
                        'value':'lipcare',
                        'label':'Lip Care',
                        'children':[]
                
                    },{
                        'value':'maternity',
                        'label':'Maternity',
                        'children':[]
                
                    },
                    {
                        'value':'setsandkits',
                        'label':'Sets & Kits',
                        'children':[]
                
                    },
                    {
                        'value':'sunscreensandtrainingproducts',
                        'label':'Sucscreens & Tanning Products',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'haircare',
                'label':'Hair Care',
                'children':[
                    {
                        'value':'extensionswigsandaccessories',
                        'label':'Extensions, Wigs & Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'hairandscalptreatments',
                        'label':'Hair & Scalp Treatments',
                        'children':[]
                
                    },
                    {
                        'value':'hairaccessories',
                        'label':'Hair Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'haircoloringproducts',
                        'label':'Hair Coloring Products',
                        'children':[]
                
                    },
                    {
                        'value':'haircuttingtools',
                        'label':'Hair Cutting Tools',
                        'children':[]
                
                    },
                    {
                        'value':'hairlossproducts',
                        'label':'Hair Loss Products',
                        'children':[]
                
                    },
                    {
                        'value':'hairmasks',
                        'label':'Hair Masks',
                        'children':[]
                
                    },
                    {
                        'value':'hairpermsrelaxersandtexturizers',
                        'label':'Hair Perms, Relaxers & texturizers',
                        'children':[]
                
                    },
                    {
                        'value':'hairtreatmentoils',
                        'label':'Hair Treatment Oils',
                        'children':[]
                
                    },
                    {
                        'value':'shampooandconditioner',
                        'label':'Shampoo & Conditioner',
                        'children':[]
                
                    },
                    {
                        'value':'stylingproducts',
                        'label':'Styling Products',
                        'children':[]
                
                    },{
                        'value':'stylingtoolsandappliances',
                        'label':'Styling Tools & Appliances',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'fragrance',
                'label':'Fragrance',
                'children':[
                    {
                        'value':'childrens',
                        'label':'Children\'s',
                        'children':[]
                
                    },
                    {
                        'value':'dustingpowders',
                        'label':'Dusting Powders',
                        'children':[]
                
                    }, 
                    {
                        'value':'mens',
                        'label':'Men\'s',
                        'children':[]
                
                    },
                    {
                        'value':'sets',
                        'label':'Sets',
                        'children':[]
                
                    },
                    {
                        'value':'womens',
                        'label':'Women\'s',
                        'children':[]
                
                    },
                ]
        
            },{
                'value':'foothandandnailcare',
                'label':'Foot, Hand & Nail Care',
                'children':[
                    
                    {
                        'value':'footandhandcare',
                        'label':'Foot & Hand Care',
                        'children':[]
                
                    },
                    {
                        'value':'nailartandpolish',
                        'label':'Nail Art & Polish',
                        'children':[]
                
                    },
                    {
                        'value':'nailcare',
                        'label':'Nail Care',
                        'children':[]
                
                    },
                    {
                        'value':'toolsandaccessories',
                        'label':'Tools & Accessories',
                        'children':[]
                
                    }, 
                ]
        
            },
            {
                'value':'toolsandaccessories',
                'label':'Tools & Accessories',
                'children':[
                    {
                        'value':'bagsandcases',
                        'label':'Bags & Cases',
                        'children':[]
                
                    },
                    {
                        'value':'bathingaccessories',
                        'label':'Bathing Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'cottonballsandswabs',
                        'label':'Cotton Balls & Swabs',
                        'children':[]
                
                    },
                    {
                        'value':'haircuttingtools',
                        'label':'Hair Cutting Tools',
                        'children':[]
                
                    },
                    {
                        'value':'hairstylingtoolsandappliances',
                        'label':'Hair Styling Tools & Appliances',
                        'children':[]
                
                    },
                    {
                        'value':'makeupbrushesandtools',
                        'label':'Makeup Brushes & Tools',
                        'children':[]
                
                    },
                    {
                        'value':'mirrors',
                        'label':'Mirrors',
                        'children':[]
                
                    },
                    {
                        'value':'salonandspaequipment',
                        'label':'Salon & Spa Equipment',
                        'children':[]
                
                    },
                    {
                        'value':'shaveandhairremoval',
                        'label':'Shave & Hair Removal',
                        'children':[]
                
                    },
                    {
                        'value':'skincaretools',
                        'label':'Skin Care Tools',
                        'children':[]
                
                    },

                ]
        
            },
            {
                'value':'shaveandhairremoval',
                'label':'Shave & Hair Removal',
                'children':[
                    {
                        'value':'mens',
                        'label':'Men\'s',
                        'children':[]
                
                    },
                    {
                        'value':'womens',
                        'label':'Women\'s',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'personalcare',
                'label':'Personal Care',
                'children':[
                    {
                        'value':'bathandbathingaccessories',
                        'label':'Bath & Bathing Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'deodorantsandantiperspirants',
                        'label':'Deodorants & Antiperspirants',
                        'children':[]
                
                    },
                    {
                        'value':'haircare',
                        'label':'Hair Care',
                        'children':[]
                
                    },
                    {
                        'value':'lipcare',
                        'label':'Lip Care',
                        'children':[]
                
                    },
                    {
                        'value':'oralcare',
                        'label':'Oral Care',
                        'children':[]
                
                    },
                    {
                        'value':'piercingandtattoosupplies',
                        'label':'Piercing & Tattoo Supplies',
                        'children':[]
                
                    },
                    {
                        'value':'shaveandhairremoval',
                        'label':'Shave & Hair Removal',
                        'children':[]
                
                    },
                    {
                        'value':'skincare',
                        'label':'Skin Care',
                        'children':[]
                
                    },
                ]
        
            },
            {
                'value':'oralcare',
                'label':'Oral Care',
                'children':[
                    {
                        'value':'breathfresheners',
                        'label':'Breath Fresheners',
                        'children':[]
                
                    },
                    {
                        'value':'childrensdentalcare',
                        'label':'Children\'s Dental Care',
                        'children':[]
                
                    },
                    {
                        'value':'dentalflossandpicks',
                        'label':'Dental Floss & Picks',
                        'children':[]
                
                    },
                    {
                        'value':'denturecare',
                        'label':'Denture Care',
                        'children':[]
                
                    },
                    {
                        'value':'drymouthrelief',
                        'label':'Dry Mouth Relief',
                        'children':[]
                
                    },
                    {
                        'value':'gumstimulators',
                        'label':'Gum Stimulators',
                        'children':[]
                
                    },
                    {
                        'value':'mouthwash',
                        'label':'Mouthwash',
                        'children':[]
                
                    },
                    {
                        'value':'oralpainrelief',
                        'label':'Oral Pain Relief',
                        'children':[]
                
                    },
                    {
                        'value':'orthodonticsupplies',
                        'label':'Orthodontic Supplies',
                        'children':[]
                
                    },
                    {
                        'value':'sensitivitytreatments',
                        'label':'Sensitivity Treatments',
                        'children':[]
                
                    },
                    {
                        'value':'teethgrindingguards',
                        'label':'Teeth Grinding Guards',
                        'children':[]
                
                    },
                    {
                        'value':'teethwhitening',
                        'label':'Teeth Whitening',
                        'children':[]
                
                    },
                    {
                        'value':'tonguecleaners',
                        'label':'Tongue Cleaners',
                        'children':[]
                
                    },
                    {
                        'value':'toothbrushesandaccessories',
                        'label':'Toothbrushes & Accessories',
                        'children':[]
                
                    },
                    {
                        'value':'toothpaste',
                        'label':'Toothpaste',
                        'children':[]
                
                    }, 
                ]
        
            },
        ]

    },
    {
        'value':'computers',
        'label':'Computer',
        'children':[{
            'value':'computeraccessoriesandperipherals',
            'label':'Computer Accessories and Peripherals',
            'children':[{
                'value':'audioandvideoaccessories',
                'label':'Audio and Video Accessories',
                'children':[]
            },
            {
                'value':'blankmedia',
                'label':'Blank Media',
                'children':[]
            },
            {
                'value':'bluelightblockingglasses',
                'label':'Blue Light Blocking Glasses',
                'children':[]
            },
            {
                'value':'cablesecuritydevices',
                'label':'Cable Security Devices',
                'children':[]
            },
            {
                'value':'cablesandinterconnects',
                'label':'Cables and Interconnects',
                'children':[]
            },
            {
                'value':'cleaningandrepair',
                'label':'Cleaning and Repair',
                'children':[]
            },
            {
                'value':'computercableadaptors',
                'label':'Computer Cable Adaptors',
                'children':[]
            },
            {
                'value':'gamehardware',
                'label':'Game Hardware',
                'children':[]
            },
            {
                'value':'inputdevices',
                'label':'Input Devices',
                'children':[]
            },
            {
                'value':'keyboard,miceandaccessories',
                'label':'Keyboard, Mice and Accessories',
                'children':[]
            },
            {
                'value':'memorycardaccessories',
                'label':'Memory Card Accessories',
                'children':[]
            },
            {
                'value':'memorycards',
                'label':'Memory Cards',
                'children':[]
            },
            {
                'value':'monitoraccessories',
                'label':'Monitor Accessories',
                'children':[]
            },
            {
                'value':'printeraccessories',
                'label':'Printer Accessories',
                'children':[]
            },
            {
                'value':'printerinkandtoner',
                'label':'Printer Ink and Toner',
                'children':[]
            },
            {
                'value':'scannersaccessories',
                'label':'Scanners Accessories',
                'children':[]
            },
            {
                'value':'usbgadgets',
                'label':'USB Gadgets',
                'children':[]
            },
            {
                'value':'usbhuns',
                'label':'USB Hubs',
                'children':[]
            },
            {
                'value':'uninterruptiblepowersupply',
                'label':'Uninterruotible Power Supply(UPS)',
                'children':[]
            },
            {
                'value':'videoprojectoraccessories',
                'label':'Video Projector Accessories',
                'children':[]
            }
            ]
        },
        {
            'value':'computercomponents',
            'label':'Computer Components',
            'children':[{
                'value':'desktopbearbones',
                'label':'Desktop Bearbones',
                'children':[]
            },
            {
                'value':'externalcomponents',
                'label':'external Components',
                'children':[]
            },
            {
                'value':'internalcomponents',
                'label':'Internal Components',
                'children':[]
            },
            {
                'value':'laptopreplacementparts',
                'label':'Laptop Replacement Parts',
                'children':[]
            },
            {
                'value':'singleboardcomputers',
                'label':'Single Board Computers',
                'children':[]
            },
            ]
        },
        {
            'value':'computersandtablets',
            'label':'Computers and Tablets',
            'children':[{
                'value':'desktops',
                'label':'Desktops',
                'children':[]
            },
            {
                'value':'laptops',
                'label':'Laptops',
                'children':[]
            },
            {
                'value':'tablets',
                'label':'Tablets',
                'children':[]
            },
            ]
        },
        {
            'value':'datastorage',
            'label':'Data Storage',
            'children':[{
                'value':'externalharddrives',
                'label':'External Hard Drives',
                'children':[]
            },
            {
                'value':'externalsolidstatedrives',
                'label':'External Solid State Drives',
                'children':[]
            },
            {
                'value':'externalzipdrives',
                'label':'External Zip Drives',
                'children':[]
            },
            {
                'value':'floopyandtapedrives',
                'label':'Floopy and Tape Drives',
                'children':[]
            },
            {
                'value':'internalsolidstatedrives',
                'label':'Internal Solid State Drives',
                'children':[]
            },
            {
                'value':'networkattachedstorage',
                'label':'Network Attached Storage',
                'children':[]
            },
            {
                'value':'tapelibraries',
                'label':'Tape Libraries',
                'children':[]
            },
            {
                'value':'usbflashdrives',
                'label':'USB Flash Drives',
                'children':[]
            }
            ]
        },
        {
            'value':'externalcomponents',
            'label':'External Components',
            'children':[
                {
                    'value':'computercases',
                    'label':'Computer Cases',
                    'children':[]
                },
                {
                    'value':'externalharddrives',
                    'label':'External Hard Drives',
                    'children':[]
                },
                {
                    'value':'externalsolidstatedrives',
                    'label':'External Solid State Drives',
                    'children':[]
                },
                {
                    'value':'externalsoundcards',
                    'label':'External Sound Cards',
                    'children':[]
                },
                { 
                    'value':'externaltvtuners',
                    'label':'External TV Tuners',
                    'children':[]
                },
                {
                    'value':'kvmswitches',
                    'label':'KVM Switches',
                    'children':[]
                },
                {
                    'value':'opticaldrives',
                    'label':'Optical Drives',
                    'children':[]
                },
            ]
        },
        {
            'value':'laptopaccessories',
            'label':'Laptop Accessories',
            'children':[{
                'value':'bagscasesandsleeves',
                'label':'Bags, Cases and Sleeves',
                'children':[]
            },
            {
                'value':'batteries',
                'label':'Batteries',
                'children':[]
            },
            {
                'value':'chargersandadapters',
                'label':'Chargers and Adapters',
                'children':[]
            },
            {
                'value':'coolingpadsandexternalfans',
                'label':'Cooling Pads and External Fans',
                'children':[]
            },
            {
                'value':'dockingstation',
                'label':'Docking Station',
                'children':[]
            },
            {
                'value':'lapdesks',
                'label':'Lapdesks',
                'children':[]
            },
            {
                'value':'mount',
                'label':'Mount',
                'children':[]
            },
            {
                'value':'replacementscreens',
                'label':'Replacement Screens',
                'children':[]
            },
            {
                'value':'screenfilters',
                'label':'Screen Filters',
                'children':[]
            },
            {
                'value':'screenprotectors',
                'label':'Screen Protectors',
                'children':[]
            },
            {
                'value':'securitylocks',
                'label':'Security Locks',
                'children':[]
            },
            {
                'value':'skinsanddecals',
                'label':'Skins and Decals',
                'children':[]
            },
            {
                'value':'stands',
                'label':'Stands',
                'children':[]
            },
            ]
        },
        {
            'value':'monitors',
            'label':'Monitors',
            'children':[]
        },
        {
            'value':'networkingproducts',
            'label':'Networking Products',
            'children':[{
                'value':'deviceservices',
                'label':'Device Services',
                'children':[]
            },
            {
                'value':'hubs',
                'label':'Hubs',
                'children':[]
            },
            {
                'value':'modenroutercombos',
                'label':'Modern Router Combos',
                'children':[]
            },
            {
                'value':'modems',
                'label':'Modems',
                'children':[]
            },
            {
                'value':'networkadaptors',
                'label':'Network Adaptors',
                'children':[]
            },
            {
                'value':'networkantennas',
                'label':'Network Antennas',
                'children':[]
            },
            {
                'value':'networkattachedstorage',
                'label':'Network Attached Storage',
                'children':[]
            },
            {
                'value':'networktransceivers',
                'label':'Network Transceivers',
                'children':[]
            },
            {
                'value':'printservers',
                'label':'Print Servers',
                'children':[]
            },
            {
                'value':'repeaters',
                'label':'Repeaters',
                'children':[]
            },
            {
                'value':'routers',
                'label':'Routers',
                'children':[]
            },
            {
                'value':'streamingmediaplayers',
                'label':'Streaming Media Players',
                'children':[]
            },
            {
                'value':'switches',
                'label':'Switches',
                'children':[]
            },
            {
                'value':'wholehomemeshandmeshwifisystems',
                'label':'Whole Home Mesh and Mesh Wi-Fi Systems',
                'children':[]
            },
            {
                'value':'wirelessaccesspoints',
                'label':'Wireless Access Points',
                'children':[]
            },
            ]
        },
        {
            'value':'powertripsandsurgeprotectors',
            'label':'Power Strips and Surge Protectors',
            'children':[
                {
                    'value':'powerstrips',
                    'label':'Powe Strips',
                    'children':[]
                },
                {
                    'value':'surgeprotectors',
                    'label':'Surge Protectors',
                    'children':[]
                },]
        },
        {
            'value':'printers',
            'label':'Printer',
            'children':[
                {
                    'value':'dotmatrixprinters',
                    'label':'Dot Matrix Printers',
                    'children':[]
                },
                {
                    'value':'inkjetprinter',
                    'label':'Inkjet Printers',
                    'children':[]
                },
                {
                    'value':'labelprinters',
                    'label':'Label Printers',
                    'children':[]
                },
                {
                    'value':'laserprinters',
                    'label':'Laser Printers',
                    'children':[]
                },
                {
                    'value':'photoprinters',
                    'label':'Photo Printers',
                    'children':[]
                },
                {
                    'value':'wideformatandplotterprinters',
                    'label':'Wide Format and Plotter Printers',
                    'children':[]
                },]
        },
        {
            'value':'scanners',
            'label':'Scanners',
            'children':[
                {
                    'value':'buisnesscardscanners',
                    'label':'Buisness Card Scanners',
                    'children':[]
                },
                {
                    'value':'documentscanners',
                    'label':'Document Scanners',
                    'children':[]
                },
                {
                    'value':'flatbedandphotoscanners',
                    'label':'Flatbed and Photo Scanners',
                    'children':[]
                },
                {
                    'value':'slideandnegativescanners',
                    'label':'Slide and Negative Scanners',
                    'children':[]
                },]
        },
        {
            'value':'servers',
            'label':'Servers',
            'children':[]
        },
        {
            'value':'tabletacessories',
            'label':'Tablet Accessories',
            'children':[
                {
                    'value':'bagscasesandsleeves',
                    'label':'Bags, Cases and Sleeves',
                    'children':[]
                },
                {
                    'value':'bluelightblockingglasses',
                    'label':'Bluelight Blocking Glasses',
                    'children':[]
                },
                {
                    'value':'chargersandadapters',
                    'label':'Chargers and Adapters',
                    'children':[]
                },
                {
                    'value':'keyboardcases',
                    'label':'Keyboard Cases',
                    'children':[]
                },
                {
                    'value':'keyboards',
                    'label':'Keyboards',
                    'children':[]
                },
                {
                    'value':'mounts',
                    'label':'Mounts',
                    'children':[]
                },
                {
                    'value':'reapirkits',
                    'label':'Repair Kits',
                    'children':[]
                },
                {
                    'value':'screenprotectors',
                    'label':'Screen Protectors',
                    'children':[]
                },
                {
                    'value':'stands',
                    'label':'Stands',
                    'children':[]
                },
                {
                    'value':'styluses',
                    'label':'Styluses',
                    'children':[]
                },
                ]
        },
        {
            'value':'tabletreplacementparts',
            'label':'Tablet Replacement Parts',
            'children':[
                {
                    'value':'digitizers',
                    'label':'Digitizers',
                    'children':[]
                },
                {
                    'value':'flexcables',
                    'label':'FlexCables',
                    'children':[]
                },
                {
                    'value':'lcddisplays',
                    'label':'LCD Displays',
                    'children':[]
                },
                {
                    'value':'screens',
                    'label':'Screens',
                    'children':[]
                },]
        },
        {
            'value':'warrantiesandservices',
            'label':'Warranties and Services',
            'children':[
                {
                    'value':'computerequipmentwarranties',
                    'label':'Computer Equipment Warranties',
                    'children':[]
                },
                ]
        },
        ]
    },
    
    {
        'value':'electronics',
        'label':'Electronics',
        'children':[
            {
                'value':'accessoriesandsupplies',
                'label':'Accessories and Supplies',
                'children':[
                    {
                        'value':'audioandvideoaccessories',
                        'label':'Audio and Video Accesssories',
                        'children':[]
                    },
                    {
                        'value':'cameraandphotoaccessories',
                        'label':'Camera and Photo Accessories',
                        'children':[]
                    },
                    {
                        'value':'cellphoneaccessories',
                        'label':'Cell Phone Accessories',
                        'children':[]
                    },
                    {
                        'value':'computeraccessories',
                        'label':'Computer Accessories',
                        'children':[]
                    },
                    {
                        'value':'gpssystemaccessories',
                        'label':'GPS System Accessories',
                        'children':[]
                    },
                    {
                        'value':'homeaudioaccessories',
                        'label':'Home Audio Accessories',
                        'children':[]
                    },
                    {
                        'value':'officeelectronicsaccessories',
                        'label':'Office Electronics Accessories',
                        'children':[]
                    },
                    {
                        'value':'vehicleelectronicsaccessories',
                        'label':'Vehicle Electronics Accessories',
                        'children':[]
                    },
                    {
                        'value':'batterieschargersandaccessories',
                        'label':'Batteries, Chargers and Accessories',
                        'children':[]
                    },
                    {
                        'value':'powerstripsandsurgeprotectors',
                        'label':'Power Strips and Surge Protectors',
                        'children':[]
                    },
                    {
                        'value':'telephoneaccessories',
                        'label':'Telephone Accessories',
                        'children':[]
                    },
                    {
                        'value':'blankmedia',
                        'label':'Blank Media',
                        'children':[]
                    },
                    {
                        'value':'cables',
                        'label':'Cables',
                        'children':[]
                    },
                    {
                        'value':'mounts',
                        'label':'Mounts',
                        'children':[]
                    },
                    {
                        'value':'microphones',
                        'label':'Microphones',
                        'children':[]
                    },
                    {
                        'value':'powerprotection',
                        'label':'Power Protection',
                        'children':[]
                    },
                    {
                        'value':'cordmanagement',
                        'label':'Cord Management',
                        'children':[]
                    },
                    {
                        'value':'electronicorganizers',
                        'label':'Electronic Organizers',
                        'children':[]
                    },
                 ]
            },
            {
                'value':'cameraandphoto',
                'label':'Camera and Photo',
                'children':[
                    {
                    'value':'accessories',
                    'label':'Accessories',
                    'children':[]
                },
                {
                    'value':'bagsandcases',
                    'label':'Bags and Cases',
                    'children':[]
                },
                {
                    'value':'binocularsandscopes',
                    'label':'Binoculars and Scopes',
                    'children':[]
                },
                {
                    'value':'digitalcameras',
                    'label':'Digital Cameras',
                    'children':[]
                },
                {
                    'value':'filmphotography',
                    'label':'Flim Photography',
                    'children':[]
                },
                {
                    'value':'flashes',
                    'label':'Flashes',
                    'children':[]
                },
                {
                    'value':'lenses',
                    'label':'Lenses',
                    'children':[]
                },
                {
                    'value':'lightingandstudio',
                    'label':'Lighting and Studio',
                    'children':[]
                },
                {
                    'value':'video',
                    'label':'Video',
                    'children':[]
                },
                {
                    'value':'printersandscanners',
                    'label':'Printers and Scanners',
                    'children':[]
                },
                {
                    'value':'tripodsandmonopods',
                    'label':'Tripods and Monopads',
                    'children':[]
                },
                {
                    'value':'underwaterphotography',
                    'label':'Underwater Photography',
                    'children':[]
                },
                {
                    'value':'videosurveillance',
                    'label':'Video Surveillance',
                    'children':[]
                }
            ]
            },
            {
                'value':'carsandvehicleelctronics',
                'label':'Cars and Vehicle Electronics',
                'children':[
                    {
                        'value':'aviationelectronics',
                        'label':'Aviation Electronics',
                        'children':[]
                    },
                    {
                        'value':'carelectronics',
                        'label':'Car Electronics',
                        'children':[]
                    },
                    {
                        'value':'marineelectronics',
                        'label':'Marine Electronics',
                        'children':[]
                    },
                    {
                        'value':'powersportselectronics',
                        'label':'Powersports Electronics',
                        'children':[]
                    },
                    {
                        'value':'vehicleelectronicsaccessories',
                        'label':'Vehicle Electronic Accessories',
                        'children':[]
                    },
                    {
                        'value':'vehiclegps',
                        'label':'Vehicle GPS',
                        'children':[]
                    }]
            },
            {
                'value':'cellphonesandaccessories',
                'label':'Cell Phone and Accessories',
                'children':[
                    {
                        'value':'carriercellphones',
                    'label':'Carrier Cell Phones',
                    'children':[]
                },
                {
                    'value':'unlockedcellphones',
                    'label':'Unlocked Cell Phones',
                    'children':[]
                },
                {
                    'value':'mobilebroadband',
                    'label':'Mobile Broadband',
                    'children':[]
                },
                {
                    'value':'accessories',
                    'label':'Accessories',
                    'children':[]
                },
                {
                    'value':'casesholstersandclips',
                    'label':'Cases, Holdters and Clips',
                    'children':[]
                }
                ]
            },
            {
                'value':'computerandaccesorries',
                'label':'Computer and Accessories',
                'children':[{
                    'value':'computeraccessoriesandperipherals',
                    'label':'Computer Accessories and Peripherals',
                    'children':[]
                },
                {
                    'value':'computercomponents',
                    'label':'Computer Components',
                    'children':[]
                },
                {
                    'value':'computersandtablets',
                    'label':'Computers and Tablets',
                    'children':[]
                },
                {
                    'value':'datastorage',
                    'label':'Data Storage',
                    'children':[]
                },
                {
                    'value':'laptopaccessories',
                    'label':'Laptop Accessories',
                    'children':[]
                },
                {
                    'value':'monitors',
                    'label':'Monitors',
                    'children':[]
                },
                {
                    'value':'networkingproducts',
                    'label':'Networking Products',
                    'children':[]
                },
                {
                    'value':'powerstripsandsurgeprotectors',
                    'label':'Power Strips and Surges Protectors',
                    'children':[]
                },
                {
                    'value':'printers',
                    'label':'Printers',
                    'children':[]
                },
                {
                    'value':'scanners',
                    'label':'Scanners',
                    'children':[]
                },
                {
                    'value':'servers',
                    'label':'Servers',
                    'children':[]
                },
                {
                    'value':'tabletsaccessories',
                    'label':'Tablets Accessories',
                    'children':[]
                },
                {
                    'value':'tabletreplacementparts',
                    'label':'Tablet Replacement Parts',
                    'children':[]
                },
                {
                    'value':'warrantiesandservices',
                    'label':'Warranties and Services',
                    'children':[]
                },
                ]
            },
            {
                'value':'gpsandnavigation',
                'label':'GPS and Navigation',
                'children':[{
                    'value':'bloatinggpsunitsandcharplotters',
                    'label':'Bloating GPS Units and Charplotters',
                    'children':[]
                },
                {
                    'value':'gpssystemaccessories',
                    'label':'GPS System Accessories',
                    'children':[]
                },
                {
                    'value':'gpstrackers',
                    'label':'GPS Trackers',
                    'children':[]
                },
                {
                    'value':'itemfinders',
                    'label':'Item Finders',
                    'children':[]
                },
                {
                    'value':'sportsandhandheldgps',
                    'label':'Sports and Handheld GPS',
                    'children':[]
                },
                {
                    'value':'vehiclegps',
                    'label':'Vehicle GPS',
                    'children':[]
                },
                ]
            },
            {
                'value':'headphones',
                'label':'Headphones',
                'children':[{
                    'value':'earbudheadphones',
                    'label':'Earbud Headphones',
                    'children':[]
                },
                {
                    'value':'overearheadphones',
                    'label':'Over-Ear Headphones',
                    'children':[]
                },
                {
                    'value':'onearheadphones',
                    'label':'On-Ear Headphones',
                    'children':[]
                },
                ]
            },
            {
                'value':'homeaudio',
                'label':'Home Audio',
                'children':[{
                    'value':'hometheater',
                    'label':'Home Theater',
                    'children':[]
                },
                {
                    'value':'speakers',
                    'label':'Speakers',
                    'children':[]
                },
                {
                    'value':'wirelessandstreamingaudio',
                    'label':'Wireless and Streming Audio',
                    'children':[]
                },
                {
                    'value':'stereosystemcomponents',
                    'label':'Stereo System Components',
                    'children':[]
                },
                {
                    'value':'turntablesandaccessories',
                    'label':'Turntables and Accessories',
                    'children':[]
                },
                {
                    'value':'compactradioandstereos',
                    'label':'Compact Radio and Stereos',
                    'children':[]
                },
                {
                    'value':'headphones',
                    'label':'Headphones',
                    'children':[]
                },
                {
                    'value':'homeaudioaccessories',
                    'label':'Home Audio Accessories',
                    'children':[]
                },
                ]
            },
            {
                'value':'officeelectronics',
                'label':'Office Electronics',
                'children':[{
                    'value':'cableorganizerbagsandcases',
                    'label':'Cable Organizer Bags and Cases',
                    'children':[]
                },
                {
                    'value':'calculators',
                    'label':'Calculators',
                    'children':[]
                },
                {
                    'value':'copiers',
                    'label':'Copiers',
                    'children':[]
                },
                {
                    'value':'documentcameras',
                    'label':'Document Cameras',
                    'children':[]
                },
                {
                    'value':'electronicdictionariesthesauriandtranlators',
                    'label':'Electronic Dictionaries, Thesauri and Translators,',
                    'children':[]
                },
                {
                    'value':'faxmachines',
                    'label':'Fax Machines',
                    'children':[]
                },
                {
                    'value':'otherofficeequipment',
                    'label':'Other Office Equipment',
                    'children':[]
                },
                {
                    'value':'pdasandhandhelds',
                    'label':'PDAs and Handhelds',
                    'children':[]
                },
                {
                    'value':'pointofsaleequipments',
                    'label':'Point-of-Sale(POS) Equipment',
                    'children':[]
                },
                {
                    'value':'presentationproducts',
                    'label':'Presentation Products',
                    'children':[]
                },
                {
                    'value':'printersandaccessories',
                    'label':'Printers and Accessories',
                    'children':[]
                },
                {
                    'value':'scannersandaccessories',
                    'label':'Scanners and Accessoriees',
                    'children':[]
                },
                {
                    'value':'telephonesandaccesories',
                    'label':'Telephones and Accessories',
                    'children':[]
                },
                {
                    'value':'videoprojectorsandaccessories',
                    'label':'Video Projectors and Accessories',
                    'children':[]
                },
                ]
            },
            {
                'value':'portableaudioandvideo',
                'label':'Portable Audio and Video',
                'children':[{
                    'value':'boomboxes',
                    'label':'Boomboxes',
                    'children':[]
                },
                {
                    'value':'cbandtwowayradio',
                    'label':'CB and Two-Way Radio',
                    'children':[]
                },
                {
                    'value':'cassetteplayersandrecorders',
                    'label':'Cassette Players and Recorders',
                    'children':[]
                },
                {
                    'value':'digitalvidoerecorders',
                    'label':'Digital Video Recorders',
                    'children':[]
                },
                {
                    'value':'mp3andmp4players',
                    'label':'Mp3 and Mp4 Players',
                    'children':[]
                },
                {
                    'value':'mp3andmp4playersaccessories',
                    'label':'Mp3 and Mp4 Players Accessories',
                    'children':[]
                },
                {
                    'value':'microcassetterecorders',
                    'label':'Microcassette Recorders',
                    'children':[]
                },
                {
                    'value':'minidiscplayers',
                    'label':'Minidisc Players',
                    'children':[]
                },
                {
                    'value':'portableandhandheldtvs',
                    'label':'Portable and Handheld TVs',
                    'children':[]
                },
                {
                    'value':'portablecdplayers',
                    'label':'Portable CD Players',
                    'children':[]
                },
                {
                    'value':'portabledvdplayers',
                    'label':'Portable DVD Players',
                    'children':[]
                },
                {
                    'value':'portablespeakersanddocks',
                    'label':'Portable Speakers and Docks',
                    'children':[]
                },
                {
                    'value':'radios',
                    'label':'Radios',
                    'children':[]
                }
                ]
            },
            {
                'value':'securiyandsurveillance',
                'label':'Security and Surveillance',
                'children':[{
                    'value':'accessories',
                    'label':'Accessories',
                    'children':[]
                },
                {
                    'value':'biometrics',
                    'label':'Biometrics',
                    'children':[]
                },
                {
                    'value':'homesecuritysystem',
                    'label':'Home Security System',
                    'children':[]
                },
                {
                    'value':'hornsandsirens',
                    'label':'Horns And Sirens',
                    'children':[]
                },
                {
                    'value':'motiondetectors',
                    'label':'Motion Detectors',
                    'children':[]
                },
                {
                    'value':'radiocanners',
                    'label':'Radio Scanners',
                    'children':[]
                },
                {
                    'value':'surveillancecameras',
                    'label':'Surveillance Cameras',
                    'children':[]
                },
                {
                    'value':'Surveillancevidoeequipment',
                    'label':'Surveillance Video Equipment',
                    'children':[]
                },
                ]
            },
            {
                'value':'serviceplans',
                'label':'Service Plans',
                'children':[{
                    'value':'computers',
                    'label':'Computers',
                    'children':[]
                },
                ]
            },
            {
                'value':'televisionandvideo',
                'label':'Television and Video',
                'children':[{
                    'value':'analogtodigitalconverter',
                    'label':'Analog-to-Digital(DTV) Converter',
                    'children':[]
                },
                {
                    'value':'avreceiverandamplifiers',
                    'label':'AV Receiver and Amplifiers',
                    'children':[]
                },
                {
                    'value':'blurayplayersandrecorders',
                    'label':'Blu-ray Players and Recorders',
                    'children':[]
                },
                {
                    'value':'dvdplayersandrecorders',
                    'label':'DVD Players and Recorders',
                    'children':[]
                },
                {
                    'value':'dvdvcrcombos',
                    'label':'DVD-VCR Combos',
                    'children':[]
                },
                {
                    'value':'hddvdplayers',
                    'label':'HD DVD Players',
                    'children':[]
                },
                {
                    'value':'hometheatersystem',
                    'label':'Home Theater Systems',
                    'children':[]
                },
                {
                    'value':'projectionscreens',
                    'label':'Projection Screens',
                    'children':[]
                },
                {
                    'value':'projectors',
                    'label':'Projectors',
                    'children':[]
                },
                {
                    'value':'satellitetelevision',
                    'label':'Satellite Television',
                    'children':[]
                },
                {
                    'value':'streamingmediaplayers',
                    'label':'Streaming Media Players',
                    'children':[]
                },
                {
                    'value':'televisionaccessories',
                    'label':'Television Accessories',
                    'children':[]
                },
                {
                    'value':'televisions',
                    'label':'Televisions',
                    'children':[]
                },
                {
                    'value':'tvdvdcombos',
                    'label':'TV-DVD Combos',
                    'children':[]
                },
                {
                    'value':'vcrs',
                    'label':'VCRs',
                    'children':[]
                },
                {
                    'value':'videoglasses',
                    'label':'Video Glasses',
                    'children':[]
                }
                ]
            },
            {
                'value':'videogameconsoleandaccessories',
                'label':'Video Games Cosole and Accessories',
                'children':[{
                    'value':'playstation4',
                    'label':'PlayStation 4',
                    'children':[]
                },
                {
                    'value':'playstation3',
                    'label':'PlayStation 3',
                    'children':[]
                },
                {
                    'value':'xboxone',
                    'label':'Xbox One',
                    'children':[]
                },
                {
                    'value':'xbox360',
                    'label':'Xbox 360',
                    'children':[]
                },
                {
                    'value':'wiiu',
                    'label':'Wii U',
                    'children':[]
                },
                {
                    'value':'wii',
                    'label':'Wii',
                    'children':[]
                },
                {
                    'value':'nintendo3ds',
                    'label':'Nintendo 3DS',
                    'children':[]
                },
                {
                    'value':'nintendods',
                    'label':'Nintendo DS',
                    'children':[]
                },
                {
                    'value':'playstationvita',
                    'label':'PlayStation Vita',
                    'children':[]
                },
                {
                    'value':'sonypsp',
                    'label':'Sony PSP',
                    'children':[]
                },
            ]
            },
            {
                'value':'videoprojectors',
                'label':'Video Projectors',
                'children':[]
            },
            {
                'value':'wearabletechnology',
                'label':'Wearable Technology',
                'children':[{
                    'value':'bodymountedcameras',
                    'label':'Body Mounted Cameras',
                    'children':[]
                },
                {
                    'value':'clipsarmsandwristbands',
                    'label':'Clips, Arm and Wristbands',
                    'children':[]
                },
                {
                    'value':'glasses',
                    'label':'Glasses',
                    'children':[]
                },
                {
                    'value':'rings',
                    'label':'Rings',
                    'children':[]
                },
                {
                    'value':'smartwatches',
                    'label':'Smart Watches',
                    'children':[]
                },
                {
                    'value':'accessories',
                    'label':'Accessories',
                    'children':[]
                },
                {
                    'value':'virtualreality',
                    'label':'Virtual Reality',
                    'children':[]
                }
                ]
            },
            {
                'value':'ebookreadersandaccessories',
                'label':'Ebook Readers and Accessories',
                'children':[{
                    'value':'ebookreader',
                    'label':'eBook Readers',
                    'children':[]
                },
                {
                    'value':'bundles',
                    'label':'Bundles',
                    'children':[]
                },
                {
                    'value':'covers',
                    'label':'Covers',
                    'children':[]
                },
                {
                    'value':'poweradapters',
                    'label':'Power Adapters',
                    'children':[]
                },
                {
                    'value':'powercables',
                    'label':'Power Cables',
                    'children':[]
                },
                {
                    'value':'readinglights',
                    'label':'Reading Lights',
                    'children':[]
                },
                {
                    'value':'screenprotectors',
                    'label':'Screen Protectors',
                    'children':[]
                },
                {
                    'value':'skins',
                    'label':'Skins',
                    'children':[]
                },
                {
                    'value':'sleeves',
                    'label':'Sleeves',
                    'children':[]
                },
                {
                    'value':'stands',
                    'label':'Stands',
                    'children':[]
                },
                ]
            },
        ]
    },
    {
        'value':'womensfashion',
        'label':'Women\'s Fashion',
        'children':[,
            {
                'value':'clothing',
                'label':'Clothing',
                'children':[
                    {
                        'value':'dresses',
                        'label':'Dresses',
                        'children':[]
                    },
                    {
                        'value':'tops,teesandblouses',
                        'label':'Tops, Tees and Blouses',
                        'children':[]
                    },
                    {
                        'value':'sweaters',
                        'label':'Sweaters',
                        'children':[]
                    },
                    {
                        'value':'fashionhoodiesandsweaarshirts',
                        'label':'Fashion Hoodies and Sweatshirts',
                        'children':[]
                    },
                    {
                        'value':'jeans',
                        'label':'Jeans',
                        'children':[]
                    },
                    {
                        'value':'pants',
                        'label':'Pants',
                        'children':[]
                    },
                    {
                        'value':'skirts',
                        'label':'Skirts',
                        'children':[]
                    },
                    {
                        'value':'shorts',
                        'label':'Shorts',
                        'children':[]
                    },
                    {
                        'value':'legging',
                        'label':'Legging',
                        'children':[]
                    },
                    {
                        'value':'active',
                        'label':'Active',
                        'children':[]
                    },
                    {
                        'value':'swimsuitsandcoverups',
                        'label':'Swimsuits and Cover Ups',
                        'children':[]
                    },
                    {
                        'value':'lingerie,sleepandlounge',
                        'label':'Lingerie, Sleep and Lounge',
                        'children':[]
                    },
                    {
                        'value':'jumpsuits,romperandoveralls',
                        'label':'Jumpsuits, Rompers and Overalls',
                        'children':[]
                    },
                    {
                        'value':'coats,jacketsandvests',
                        'label':'Coat, Jackets and Vests',
                        'children':[]
                    },
                    {
                        'value':'suitingandblazers',
                        'label':'Suiting and Blazers',
                        'children':[]
                    },
                    {
                        'value':'socksandhosiery',
                        'label':'Socks and Hosiery',
                        'children':[]
                    },
                ]
            },
            {
                'value':'shoes',
                'label':'Shoes',
                'children':[
                    {
                        'value':'athletic',
                        'label':'Athletic',
                        'children':[]
                    },
                    {
                        'value':'boots',
                        'label':'Boots',
                        'children':[]
                    },
                    {
                        'value':'fashionsneakers',
                        'label':'Fashion Sneakers',
                        'children':[]
                    },
                    {
                        'value':'flats',
                        'label':'Flats',
                        'children':[]
                    },
                    {
                        'value':'loagersandslipons',
                        'label':'Loafers and Slip-Ons',
                        'children':[]
                    },
                    {
                        'value':'mulesandclogs',
                        'label':'Mules and Clogs',
                        'children':[]
                    },
                    {
                        'value':'outdoor',
                        'label':'Outdoor',
                        'children':[]
                    },
                    {
                        'value':'oxfords',
                        'label':'Oxfords',
                        'children':[]
                    },
                    {
                        'value':'pumps',
                        'label':'Pumps',
                        'children':[]
                    },
                    {
                        'value':'sandals',
                        'label':'Sandals',
                        'children':[]
                    },
                    {
                        'value':'slippers',
                        'label':'Slippers',
                        'children':[]
                    },
                    {
                        'value':'workandsafety',
                        'label':'Work and Safety',
                        'children':[]
                    }
                ]
            },
            {
                'value':'jewelry',
                'label':'Jewelry',
                'children':[
                    {
                        'value':'anklets',
                        'label':'Anklets',
                        'children':[]
                    },
                    {
                        'value':'bracelets',
                        'label':'Bracelets',
                        'children':[]
                    },
                    {
                        'value':'broochesandpins',
                        'label':'Brooches and Pins',
                        'children':[]
                    },
                    {
                        'value':'earrings',
                        'label':'Earrings',
                        'children':[]
                    },
                    {
                        'value':'jewelrysets',
                        'label':'Jewelry Sets',
                        'children':[]
                    },
                    {
                        'value':'necklaces',
                        'label':'Necklaces',
                        'children':[]
                    },
                    {
                        'value':'rings',
                        'label':'Rings',
                        'children':[]
                    },
                    {
                        'value':'weddingandengagement',
                        'label':'Wedding and Engagement',
                        'children':[]
                    },
                    {
                        'value':'smartjewelry',
                        'label':'Smart Jewelry',
                        'children':[]
                    },
                    {
                        'value':'bodyjewelry',
                        'label':'Body Jewelry',
                        'children':[]
                    },
                ]
            },
            {
                'value':'watches',
                'label':'Wathches',
                'children':[
                    {
                        'value':'wristwatches',
                        'label':'Wrist Watches',
                        'children':[]
                    },
                    {
                        'value':'watchbands',
                        'label':'Watch Bands',
                        'children':[]
                    },
                    {
                        'value':'pocketwatches',
                        'label':'Pocket Watches',
                        'children':[]
                    },
                    {
                        'value':'smartwatches',
                        'label':'Smart Watches',
                        'children':[]
                    }
                ]
            },
            {
                'value':'handbagsandwallets',
                'label':'Handbags and Wallets',
                'children':[
                    {
                        'value':'clutchesandeveningbags',
                        'label':'Clutches and Evening Bags',
                        'children':[]
                    },
                    {
                        'value':'crossbodybags',
                        'label':'Crossbody Bags',
                        'children':[]
                    },
                    {
                        'value':'hobobags',
                        'label':'Hobo Bags',
                        'children':[]
                    },
                    {
                        'value':'satchels',
                        'label':'Satchels',
                        'children':[]
                    },
                    {
                        'value':'shoulderbags',
                        'label':'Shoulder Bags',
                        'children':[]
                    },
                    {
                        'value':'top-handlebags',
                        'label':'Top-Handle Bags',
                        'children':[]
                    },
                    {
                        'value':'totes',
                        'label':'Totes',
                        'children':[]
                    },
                    {
                        'value':'wallets',
                        'label':'Wallets',
                        'children':[]
                    },
                    {
                        'value':'wristlets',
                        'label':'Wristlets',
                        'children':[]
                    }
                ]
            },
            {
                'value':'accessories',
                'label':'Accessories',
                'children':[
                    {
                        'value':'belts',
                        'label':'Belts',
                        'children':[]
                    },
                    {
                        'value':'sunglassesandeyewearaccessories',
                        'label':'Sunglasses and Eyewear Accessories',
                        'children':[]
                    },
                    {
                        'value':'scarvesandwraps',
                        'label':'Scarves and Wraps',
                        'children':[]
                    },
                    {
                        'value':'glovesandmittens',
                        'label':'Gloves and Mittens',
                        'children':[]
                    },
                    {
                        'value':'hats and caps',
                        'label':'Hats and Caps',
                        'children':[]
                    },
                    {
                        'value':'earmuffs',
                        'label':'Earmuffs',
                        'children':[]
                    },
                    {
                        'value':'handbagaccessories',
                        'label':'Hand Bag Accessories',
                        'children':[]
                    },
                    {
                        'value':'keyringsandkeychains',
                        'label':'Keyrings and Keychains',
                        'children':[]
                    },
                    {
                        'value':'wallets,cardscasesandmoneyorganizers',
                        'label':'Wallets, Card Cases and Money Organizers',
                        'children':[]
                    }
                ]
            },
            {
                'value':'mensfashion',
                'label':'Men\'s Fashion',
                'children':[]
            },
            {
                'value':'girlsfashion',
                'label':'Girls\' Fashion',
                'children':[]
            },
            {
                'value':'boysfashion',
                'label':'Boys\' Fashion',
                'children':[]
            }
        ]
    },
    {
        'value':'mensfashion',
        'label':'Men\'s Fashion',
        'children':[
            {
                'value':'clothing',
                'label':'Clothing',
                'children':[
                    {
                        'value':'shirts',
                        'label':'Shirts',
                        'children':[]
                    },
                    {
                        'value':'fashionhoodiesandsweaarshirts',
                        'label':'Fashion Hoodies and Sweatshirts',
                        'children':[]
                    },
                    {
                        'value':'sweaters',
                        'label':'Sweaters',
                        'children':[]
                    },
                    {
                        'value':'jacketsandcoats',
                        'label':'Jackets and Coats',
                        'children':[]
                    },
                    {
                        'value':'jeans',
                        'label':'Jeans',
                        'children':[]
                    },
                    {
                        'value':'pants',
                        'label':'Pants',
                        'children':[]
                    },
                    {
                        'value':'shorts',
                        'label':'Shorts',
                        'children':[]
                    },
                    {
                        'value':'active',
                        'label':'Active',
                        'children':[]
                    },
                    {
                        'value':'swim',
                        'label':'Swim',
                        'children':[]
                    },
                    {
                        'value':'suitsandsportscoats',
                        'label':'Suits and Sports Coats',
                        'children':[]
                    },
                    {
                        'value':'underwear',
                        'label':'UnderWear',
                        'children':[]
                    },
                    {
                        'value':'socks',
                        'label':'Sccks',
                        'children':[]
                    },
                    {
                        'value':'sleepandlounge',
                        'label':'Sleep and Lounge',
                        'children':[]
                    },
                    {
                        'value':'tshirtsandtanks',
                        'label':'T-Shirts and Tanks',
                        'children':[]
                    }
                ]
            },
            {
                'value':'shoes',
                'label':'Shoes',
                'children':[
                    {
                        'value':'athletic',
                        'label':'Athletic',
                        'children':[]
                    },
                    {
                        'value':'boots',
                        'label':'Boots',
                        'children':[]
                    },
                    {
                        'value':'fashionsneakers',
                        'label':'Fashion Sneakers',
                        'children':[]
                    },
                    {
                        'value':'loagersandslipons',
                        'label':'Loafers and Slip-Ons',
                        'children':[]
                    },
                    {
                        'value':'mulesandclogs',
                        'label':'Mules and Clogs',
                        'children':[]
                    },
                    {
                        'value':'outdoor',
                        'label':'Outdoor',
                        'children':[]
                    },
                    {
                        'value':'oxfords',
                        'label':'Oxfords',
                        'children':[]
                    },
                    {
                        'value':'sandals',
                        'label':'Sandals',
                        'children':[]
                    },
                    {
                        'value':'slippers',
                        'label':'Slippers',
                        'children':[]
                    },
                    {
                        'value':'workandsafety',
                        'label':'Work and Safety',
                        'children':[]
                    }
                ]
            },
            {
                'value':'watches',
                'label':'Wathches',
                'children':[
                    {
                        'value':'wristwatches',
                        'label':'Wrist Watches',
                        'children':[]
                    },
                    {
                        'value':'watchbands',
                        'label':'Watch Bands',
                        'children':[]
                    },
                    {
                        'value':'pocketwatches',
                        'label':'Pocket Watches',
                        'children':[]
                    },
                    {
                        'value':'smartwatches',
                        'label':'Smart Watches',
                        'children':[]
                    }
                ]
            },
            {
                'value':'accessories',
                'label':'Accessories',
                'children':[
                    {
                        'value':'belts',
                        'label':'Belts',
                        'children':[]
                    },
                    {
                        'value':'collarstays',
                        'label':'Collar Stays',
                        'children':[]
                    },
                    {
                        'value':'cufflinks,shirtsstudsandtieclip',
                        'label':'Cuff Links, Shirt Studs and Tie Clips',
                        'children':[]
                    },
                    {
                        'value':'earmuffs',
                        'label':'Earmuffs',
                        'children':[]
                    },
                    {
                        'value':'glovesandmittens',
                        'label':'Gloves and Mittens',
                        'children':[]
                    },
                    {
                        'value':'handkerchiefs',
                        'label':'Handkerchiefs',
                        'children':[]
                    },
                    {
                        'value':'hatsandcaps',
                        'label':'Hats and Caps',
                        'children':[]
                    },
                    {
                        'value':'keyringsandkeychains',
                        'label':'Keyrings and Keychains',
                        'children':[]
                    },
                    {
                        'value':'scarves',
                        'label':'Scatves',
                        'children':[]
                    },
                    {
                        'value':'sunglassesandeyewearaccessories',
                        'label':'Sunglasses and Eyewear Accessories',
                        'children':[]
                    },
                    {
                        'value':'suspenders',
                        'label':'Suspenders',
                        'children':[]
                    },
                    {
                        'value':'ties,cummerbundsandpocketsquares',
                        'label':'Ties, Cummerbunds and Pocket Squares',
                        'children':[]
                    },
                    {
                        'value':'wallets,cardscasesandmoneyorganizers',
                        'label':'Wallets, Card Cases and Money Organizers',
                        'children':[]
                    }
                    
                ]
            },
            {
                'value':'womensfashion',
                'label':'Women\'s Fashion',
                'children':[]
            },
            {
                'value':'girlsfashion',
                'label':'Girls\' Fashion',
                'children':[]
            },
            {
                'value':'boysfashion',
                'label':'Boys\' Fashion',
                'children':[]
            }
        ]
    },
    {
        'value':'girlsfashion',
        'label':'Girls\' Fashion',
        'children':[,
            {
                'value':'clothing',
                'label':'Clothing',
                'children':[
                    {
                        'value':'active',
                        'label':'Active',
                        'children':[]
                    },
                    {
                        'value':'clotingsets',
                        'label':'Clothing Sets',
                        'children':[]
                    },
                    {
                        'value':'dresses',
                        'label':'Dresses',
                        'children':[]
                    },
                    {
                        'value':'fashionhoodiesandsweatshirts',
                        'label':'Fashion Hoodies and Sweatshirts',
                        'children':[]
                    },
                    {
                        'value':'jacketsandcoats',
                        'label':'Jackets and Coats',
                        'children':[]
                    },
                    {
                        'value':'jeans',
                        'label':'Jeans',
                        'children':[]
                    },
                    {
                        'value':'jumpsuitsandrompers',
                        'label':'Jumpsuits and Rompers',
                        'children':[]
                    },
                    {
                        'value':'leggings',
                        'label':'Leggings',
                        'children':[]
                    },
                    {
                        'value':'overalls',
                        'label':'Overalls',
                        'children':[]
                    },
                    {
                        'value':'pantsandcapris',
                        'label':'Pants and Capris',
                        'children':[]
                    },
                    {
                        'value':'shorts',
                        'label':'Shorts',
                        'children':[]
                    },
                    {
                        'value':'skirtsandskorts',
                        'label':'Skirts and Skorts',
                        'children':[]
                    },
                    {
                        'value':'sleepwearandrobes',
                        'label':'Sleepwear anf Robes',
                        'children':[]
                    },
                    {
                        'value':'socksandtights',
                        'label':'Socks and Tights',
                        'children':[]
                    },
                    {
                        'value':'sweaters',
                        'label':'Sweaters',
                        'children':[]
                    },
                    {
                        'value':'swim',
                        'label':'Swim',
                        'children':[]
                    },
                    {
                        'value':'topsteesandblouses',
                        'label':'Tops, Tees and Blouses',
                        'children':[]
                    },
                    {
                        'value':'underwear',
                        'label':'Underwear',
                        'children':[]
                    }
                ]
            },
            {
                'value':'shoes',
                'label':'Shoes',
                'children':[
                    {
                        'value':'athletic',
                        'label':'Athletic',
                        'children':[]
                    },
                    {
                        'value':'boots',
                        'label':'Boots',
                        'children':[]
                    },
                    {
                        'value':'clogsandmules',
                        'label':'Clogs and Mules',
                        'children':[]
                    },
                    {
                        'value':'flats',
                        'label':'Flats',
                        'children':[]
                    },
                    {
                        'value':'loafers',
                        'label':'Loafers',
                        'children':[]
                    },
                    {
                        'value':'outdoor',
                        'label':'Outdoor',
                        'children':[]
                    },
                    {
                        'value':'oxfords',
                        'label':'Oxfords',
                        'children':[]
                    },
                    {
                        'value':'sandals',
                        'label':'Sandals',
                        'children':[]
                    },
                    {
                        'value':'slippers',
                        'label':'Slippers',
                        'children':[]
                    },
                    {
                        'value':'sneakers',
                        'label':'Sneakers',
                        'children':[]
                    }
                ]
            },
            {
                'value':'jewelry',
                'label':'Jewelry',
                'children':[
                    {
                        'value':'anklets',
                        'label':'Anklets',
                        'children':[]
                    },
                    {
                        'value':'bracelets',
                        'label':'Bracelets',
                        'children':[]
                    },
                    {
                        'value':'broochesandpins',
                        'label':'Brooches and Pins',
                        'children':[]
                    },
                    {
                        'value':'earrings',
                        'label':'Earrings',
                        'children':[]
                    },
                    {
                        'value':'necklacesandpendants',
                        'label':'Necklaces and Pendants',
                        'children':[]
                    },
                    {
                        'value':'rings',
                        'label':'Rings',
                        'children':[]
                    }
                ]
            },
            {
                'value':'watches',
                'label':'Wathches',
                'children':[
                    {
                        'value':'wristwatches',
                        'label':'Wrist Watches',
                        'children':[]
                    },
                    {
                        'value':'watchbands',
                        'label':'Watch Bands',
                        'children':[]
                    },
                    {
                        'value':'pocketwatches',
                        'label':'Pocket Watches',
                        'children':[]
                    }
                ]
            },
            {
                'value':'accessories',
                'label':'Accessories',
                'children':[
                    {
                        'value':'coldweather',
                        'label':'Cold Weather',
                        'children':[]
                    },
                    {
                        'value':'hatsandcaps',
                        'label':'Hats and Caps',
                        'children':[]
                    },
                    {
                        'value':'belts',
                        'label':'Belts',
                        'children':[]
                    },
                    {
                        'value':'sunglasses',
                        'label':'Sunglasses',
                        'children':[]
                    },
                    {
                        'value':'fashionscarves',
                        'label':'Fashion Scarves',
                        'children':[]
                    },
                    {
                        'value':'specialoccasiongloves',
                        'label':'SPecial Occasion Gloves',
                        'children':[]
                    },
                    {
                        'value':'firstcommunionveils',
                        'label':'First Communion Veils',
                        'children':[]
                    }
                ]
            },
            {
                'value':'schooluniform',
                'label':'School Uniform',
                'children':[
                    {
                        'value':'clothing',
                        'label':'Clothing',
                        'children':[]
                    },
                    {
                        'value':'shoes',
                        'label':'Shoes',
                        'children':[]
                    }
                ]
            },
            {
                'value':'womensfashion',
                'label':'Women\'s Fashion',
                'children':[]
            },
            {
                'value':'mensfashion',
                'label':'Men\'s Fashion',
                'children':[]
            },
            {
                'value':'boysfashion',
                'label':'Boys\' Fashion',
                'children':[]
            }
        ]
    },
    {
        'value':'boysfashion',
        'label':'Boys\' Fashion',
        'children':[,
            {
                'value':'clothing',
                'label':'Clothing',
                'children':[
                    {
                        'value':'active',
                        'label':'Active',
                        'children':[]
                    },
                    {
                        'value':'clotingsets',
                        'label':'Clothing Sets',
                        'children':[]
                    },
                    {
                        'value':'fashionhoodiesandsweatshirts',
                        'label':'Fashion Hoodies and Sweatshirts',
                        'children':[]
                    },
                    {
                        'value':'jacketsandcoats',
                        'label':'Jackets and Coats',
                        'children':[]
                    },
                    {
                        'value':'jeans',
                        'label':'Jeans',
                        'children':[]
                    },
                    {
                        'value':'overalls',
                        'label':'Overalls',
                        'children':[]
                    },
                    {
                        'value':'pants',
                        'label':'Pants',
                        'children':[]
                    },
                    {
                        'value':'shorts',
                        'label':'Shorts',
                        'children':[]
                    },
                    {
                        'value':'sleepwearandrobes',
                        'label':'Sleepwear anf Robes',
                        'children':[]
                    },
                    {
                        'value':'socks',
                        'label':'Socks',
                        'children':[]
                    },
                    {
                        'value':'suitsandsportcoats',
                        'label':'Suits and Sport Coats',
                        'children':[]
                    },
                    {
                        'value':'sweaters',
                        'label':'Sweaters',
                        'children':[]
                    },
                    {
                        'value':'swim',
                        'label':'Swim',
                        'children':[]
                    },
                    {
                        'value':'topsteesandshirts',
                        'label':'Tops, Tees and Shirts',
                        'children':[]
                    },
                    {
                        'value':'underwear',
                        'label':'Underwear',
                        'children':[]
                    }
                ]
            },
            {
                'value':'shoes',
                'label':'Shoes',
                'children':[
                    {
                        'value':'athletic',
                        'label':'Athletic',
                        'children':[]
                    },
                    {
                        'value':'boots',
                        'label':'Boots',
                        'children':[]
                    },
                    {
                        'value':'clogsandmules',
                        'label':'Clogs and Mules',
                        'children':[]
                    },
                    {
                        'value':'loafers',
                        'label':'Loafers',
                        'children':[]
                    },
                    {
                        'value':'outdoor',
                        'label':'Outdoor',
                        'children':[]
                    },
                    {
                        'value':'oxfords',
                        'label':'Oxfords',
                        'children':[]
                    },
                    {
                        'value':'sandals',
                        'label':'Sandals',
                        'children':[]
                    },
                    {
                        'value':'slippers',
                        'label':'Slippers',
                        'children':[]
                    },
                    {
                        'value':'sneakers',
                        'label':'Sneakers',
                        'children':[]
                    }
                ]
            },
            {
                'value':'jewelry',
                'label':'Jewelry',
                'children':[
                    {
                        'value':'bracelets',
                        'label':'Bracelets',
                        'children':[]
                    },
                    {
                        'value':'necklaces',
                        'label':'Necklaces',
                        'children':[]
                    },
                    {
                        'value':'cufflinks',
                        'label':'Cuff Links',
                        'children':[]
                    },
                    {
                        'value':'rings',
                        'label':'Rings',
                        'children':[]
                    },
                    {
                        'value':'tieclips',
                        'label':'Tie Clips',
                        'children':[]
                    }
                ]
            },
            {
                'value':'watches',
                'label':'Wathches',
                'children':[
                    {
                        'value':'wristwatches',
                        'label':'Wrist Watches',
                        'children':[]
                    },
                    {
                        'value':'watchbands',
                        'label':'Watch Bands',
                        'children':[]
                    },
                    {
                        'value':'pocketwatches',
                        'label':'Pocket Watches',
                        'children':[]
                    }
                ]
            },
            {
                'value':'accessories',
                'label':'Accessories',
                'children':[
                    {
                        'value':'coldweather',
                        'label':'Cold Weather',
                        'children':[]
                    },
                    {
                        'value':'hatsandcaps',
                        'label':'Hats and Caps',
                        'children':[]
                    },
                    {
                        'value':'neckties',
                        'label':'Neck Ties',
                        'children':[]
                    },
                    {
                        'value':'bowties',
                        'label':'Bow Ties',
                        'children':[]
                    },
                    {
                        'value':'belts',
                        'label':'Belts',
                        'children':[]
                    },
                    {
                        'value':'suspenders',
                        'label':'Suspenders',
                        'children':[]
                    },
                    {
                        'value':'sunglasses',
                        'label':'Sunglasses',
                        'children':[]
                    }
                ]
            },
            {
                'value':'schooluniform',
                'label':'School Uniform',
                'children':[
                    {
                        'value':'clothing',
                        'label':'Clothing',
                        'children':[]
                    },
                    {
                        'value':'shoes',
                        'label':'Shoes',
                        'children':[]
                    }
                ]
            },
            {
                'value':'womensfashion',
                'label':'Women\'s Fashion',
                'children':[]
            },
            {
                'value':'mensfashion',
                'label':'Men\'s Fashion',
                'children':[]
            },
            {
                'value':'girlsfashion',
                'label':'Girls\' Fashion',
                'children':[]
            }
        ]
    },
    {
        'value': 'healthandhousehold',
        'label': 'Health and Household',
        'children': [
            {
                'value':'bodyandchildcare',
                'label':'Body and Child Care',
                'children':[
                    {
                        'value':'diapercare',
                        'label':'Diaper Care',
                        'children':[]
                    },
                    {
                        'value':'healthcare',
                        'label':'Health Care',
                        'children':[]
                    },
                    {
                        'value':'personalcare',
                        'label':'Personal Care',
                        'children':[]
                    }
                ]
            },
            {
                'value':'healthcare',
                'label':'Health Care',
                'children':[
                    {
                        'value':'alternativemedicine',
                        'label':'Alternative Medicine',
                        'children':[]
                    },
                    {
                        'value':'diabetescare',
                        'label':'Diabetes Care',
                        'children':[]
                    },
                    {
                        'value':'earcare',
                        'label':'Ear Care',
                        'children':[]
                    },
                    {
                        'value':'femininecare',
                        'label':'Feminine Care',
                        'children':[]
                    },
                    {
                        'value':'firstaid',
                        'label':'First Aid',
                        'children':[]
                    },
                    {
                        'value':'foothealth',
                        'label':'Foot Health',
                        'children':[]
                    },
                    {
                        'value':'incontinenceanostomy',
                        'label':'Incontinence and Ostomy',
                        'children':[]
                    },
                    {
                        'value':'otcmedicationsandtreatments',
                        'label':'OTC Medication and Treatments',
                        'children':[]
                    },
                    {
                        'value':'respiratoryaidsandaccessories',
                        'label':'Respiratory Aid and Accessories',
                        'children':[]
                    },
                    {
                        'value':'sleepandsnoring',
                        'label':'Sleep and Snoring',
                        'children':[]
                    },
                    {
                        'value':'womenshealth',
                        'label':'WOmen\'s Health',
                        'children':[]
                    }
                ]
            },
            {
                'value':'householdsupplies',
                'label':'Household Supplies',
                'children':[
                    {
                        'value':'airfreshners',
                        'label':'Air Freshners',
                        'children':[]
                    },
                    {
                        'value':'cleaningtools',
                        'label':'Cleaning Tools',
                        'children':[]
                    },
                    {
                        'value':'dishwashing',
                        'label':'Dishwashing',
                        'children':[]
                    },
                    {
                        'value':'householdbatteries',
                        'label':'Household Batteries',
                        'children':[]
                    },
                    {
                        'value':'householdbatterychargers',
                        'label':'Household Battery Chargers',
                        'children':[]
                    },
                    {
                        'value':'householdcleaning',
                        'label':'Household Cleaning',
                        'children':[]
                    },
                    {
                        'value':'laundry',
                        'label':'Laundry',
                        'children':[]
                    },
                    {
                        'value':'lightbulbs',
                        'label':'Light Bulbs',
                        'children':[]
                    },
                    {
                        'value':'lightersandmatches',
                        'label':'Lighters and Matches',
                        'children':[]
                    },
                    {
                        'value':'paperandplastic',
                        'label':'Paper and Plastic',
                        'children':[]
                    },
                    {
                        'value':'tobacco-relatedproducts',
                        'label':'Tobacco-Related Products',
                        'children':[]
                    },
                    {
                        'value':'toothpicks',
                        'label':'Toothpicks',
                        'children':[]
                    }
                ]
            },
            {
                'value':'medicalsuppliesandequipment',
                'label':'Medical Supplies and Equipment',
                'children':[
                    {
                        'value':'braces,splintsandsupports',
                        'label':'Braces, Splints and Supports',
                        'children':[]
                    },
                    {
                        'value':'funeral',
                        'label':'Funeral',
                        'children':[]
                    },
                    {
                        'value':'healthmonitors',
                        'label':'Health Monitors',
                        'children':[]
                    },
                    {
                        'value':'hometests',
                        'label':'Health Tests',
                        'children':[]
                    },
                    {
                        'value':'mobilityanddailylivingaids',
                        'label':'Mobility and Dailty Living Aids',
                        'children':[]
                    },
                    {
                        'value':'occupationalandphysicaltherapyaids',
                        'label':'Occupational and Physical Therapy Aids',
                        'children':[]
                    }
                ]
            },
            {
                'value':'oralcare',
                'label':'Oral Care',
                'children':[
                    {
                        'value':'breathfreshners',
                        'label':'Breath Freshners',
                        'children':[]
                    },
                    {
                        'value':'childrensdentalcare',
                        'label':'Children\'s Dental Care',
                        'children':[]
                    },
                    {
                        'value':'dentalfloosandpicks',
                        'label':'Dental Floos and Picks',
                        'children':[]
                    },
                    {
                        'value':'denturecare',
                        'label':'Denture Care',
                        'children':[]
                    },
                    {
                        'value':'drymouthrelief',
                        'label':'Dry Mouth Relief',
                        'children':[]
                    },
                    {
                        'value':'gumstimulators',
                        'label':'Gum Stimolators',
                        'children':[]
                    },
                    {
                        'value':'mouthwash',
                        'label':'Mouth Wash',
                        'children':[]
                    },
                    {
                        'value':'oralpainrelief',
                        'label':'Oral Pain Relief',
                        'children':[]
                    },
                    {
                        'value':'orthodonticsupplies',
                        'label':'Orthodontic Supplies',
                        'children':[]
                    },
                    {
                        'value':'sensitivitytreatments',
                        'label':'Sensitivity Treatments',
                        'children':[]
                    },
                    {
                        'value':'teethgrindingsguards',
                        'label':'Teeth Grinidings Gaurds',
                        'children':[]
                    },
                    {
                        'value':'teethwhitening',
                        'label':'Teeth Whitening',
                        'children':[]
                    },
                    {
                        'value':'tonguecleaners',
                        'label':'Tongue Cleaners',
                        'children':[]
                    },
                    {
                        'value':'toothbrusjedandaccessories',
                        'label':'Tooth Brushes and Accessories',
                        'children':[]
                    },
                    {
                        'value':'toothpaste',
                        'label':'Tooth Paste',
                        'children':[]
                    }
                ]
            },
            {
                'value':'personalcare',
                'label':'Personal Care',
                'children':[
                    {
                        'value':'bathandbathingaccessories',
                        'label':'Bath and Bathing Accessories',
                        'children':[]
                    },
                    {
                        'value':'deodrantsandantiperspirants',
                        'label':'Deodrants and Antiperspirants',
                        'children':[]
                    },
                    {
                        'value':'haircare',
                        'label':'Hair Care',
                        'children':[]
                    },
                    {
                        'value':'lipcare',
                        'label':'Lip Care',
                        'children':[]
                    },
                    {
                        'value':'oralcare',
                        'label':'Oral Care',
                        'children':[]
                    },
                    {
                        'value':'piercingandtattoosupplies',
                        'label':'Piercing and Tattoo Supplies',
                        'children':[]
                    },
                    {
                        'value':'shaveandhairremoval',
                        'label':'Shave and Hair Removal',
                        'children':[]
                    },
                    {
                        'value':'skincare',
                        'label':'Skin Care',
                        'children':[]
                    }
                ]
            },
            {
                'value':'sexualwellness',
                'label':'Sexual Wellness',
                'children':[
                    {
                        'value':'safersex',
                        'label':'Safer Sex',
                        'children':[]
                    },
                    {
                        'value':'adulttoysandgames',
                        'label':'Adult Toys and Games',
                        'children':[]
                    },
                    {
                        'value':'bondagergearandaccessories',
                        'label':'Bondage Gear and Accessories',
                        'children':[]
                    },
                    {
                        'value':'jewelry',
                        'label':'Jewelry',
                        'children':[]
                    },
                    {
                        'value':'novelties',
                        'label':'Novelties',
                        'children':[]
                    },
                    {
                        'value':'sensualdelights',
                        'label':'Sensual Delights',
                        'children':[]
                    },
                    {
                        'value':'sexfurniture',
                        'label':'Sex Furiture',
                        'children':[]
                    },
                    {
                        'value':'sexualenhancers',
                        'label':'SexualEnhancers',
                        'children':[]
                    }
                ]
            },
            {
                'value':'sportsnutrition',
                'label':'Sports Nutrition',
                'children':[
                    {
                        'value':'aminoacids',
                        'label':'Amino Acids',
                        'children':[]
                    },
                    {
                        'value':'enduranceandenergy',
                        'label':'Endurance and Energy',
                        'children':[]
                    },
                    {
                        'value':'fatburnersandthermogenics',
                        'label':'Fat Burners and Thermogenics',
                        'children':[]
                    },
                    {
                        'value':'healthysnacksandbeverages',
                        'label':'Healthy Snacks and Beverages',
                        'children':[]
                    },
                    {
                        'value':'hydration',
                        'label':'Hydration',
                        'children':[]
                    },
                    {
                        'value':'nutritionbars',
                        'label':'Nutrition Bars',
                        'children':[]
                    },
                    {
                        'value':'preworkout',
                        'label':'Pre-Workout',
                        'children':[]
                    },
                    {
                        'value':'postworkoutandrecovery',
                        'label':'Post-Workout and Recovery',
                        'children':[]
                    },
                    {
                        'value':'protein',
                        'label':'Protein',
                        'children':[]
                    },
                    {
                        'value':'testosteroneboosters',
                        'label':'Testosterone Boosters',
                        'children':[]
                    },
                    {
                        'value':'weightgainers',
                        'label':'Weightgainers',
                        'children':[]
                    }
                ]
            },
            {
                'value':'stationaryandgiftsupplements',
                'label':'Stationary and Gif Supplements',
                'children':[
                    {
                        'value':'giftwrappingsupplies',
                        'label':'Gift Wrapping Supplies',
                        'children':[]
                    },
                    {
                        'value':'stationery',
                        'label':'Stationery',
                        'children':[]
                    }
                ]
            },
            {
                'value':'visioncare',
                'label':'Vision Care',
                'children':[
                    {
                        'value':'contactlenscare',
                        'label':'Contact Lens Care',
                        'children':[]
                    },
                    {
                        'value':'eyedrops,lubricantsandwashes',
                        'label':'Eye Drops, Lubricants and Washes',
                        'children':[]
                    },
                    {
                        'value':'eyeglassescare',
                        'label':'Eye Glasses Care',
                        'children':[]
                    },
                    {
                        'value':'readingglasses',
                        'label':'Reading Glasses',
                        'children':[]
                    }
                ]
            },
            {
                'value':'vitaminsanddietarysupplements',
                'label':'Vitamins and Dietary Supplements',
                'children':[
                    {
                        'value':'vitamins',
                        'label':'Vitamins',
                        'children':[]
                    },
                    {
                        'value':'minerals',
                        'label':'Minerals',
                        'children':[]
                    },
                    {
                        'value':'supplements',
                        'label':'Supplements',
                        'children':[]
                    },
                    {
                        'value':'herbalsupplements',
                        'label':'Herbal Supplements',
                        'children':[]
                    },
                    {
                        'value':'weightloss',
                        'label':'Weight Loss',
                        'children':[]
                    }
                ]
            },
            {
                'value':'wellnessandrelaxation',
                'label':'Wellness and Relaxation',
                'children':[
                    {
                        'value':'alternativemedicine',
                        'label':'Alternative Medicine',
                        'children':[]
                    },
                    {
                        'value':'appenabledactivitytracker',
                        'label':'App-Enabled Activity Tracker',
                        'children':[]
                    },
                    {
                        'value':'fitnessandactivitymonitors',
                        'label':'Fitness and Activity Monitors',
                        'children':[]
                    },
                    {
                        'value':'messagetoolsandequipment',
                        'label':'Message tools and Equipment',
                        'children':[]
                    }
                ]
            }
        ]
    },
    {
        'value':'homeandkitchen',
        'label':'Home and Kitchen',
        'children':[
            {
                'value':'kidshomestore',
                'label':'Kids Home Store',
                'children':[
                    {
                        'value':'kidsbakingsupplies',
                        'label':'Kids\' Baking Supplies',
                        'children':[]
                    },
                    {
                        'value':'kidsbedding',
                        'label':'Kids\' Bedding',
                        'children':[]
                    },
                    {
                        'value':'kidsflatware',
                        'label':'Kids\' Flatware',
                        'children':[]
                    },
                    {
                        'value':'kidsfurniture',
                        'label':'Kids\' Furniture',
                        'children':[]
                    },
                    {
                        'value':'kidsroomdecor',
                        'label':'Kids\' Room Decor',
                        'children':[]
                    },
                    {
                        'value':'nurserydecor',
                        'label':'Nursery Decor',
                        'children':[]
                    },
                    {
                        'value':'nurseryfurniture',
                        'label':'Nursery Furniture',
                        'children':[]
                    },
                    {
                        'value':'nurserybedding',
                        'label':'Nursery Bedding',
                        'children':[]
                    },
                    {
                        'value':'kidsbath',
                        'label':'Kids\' Bath',
                        'children':[]
                    }
                ]
            },
            {
                'value':'kitchenanddining',
                'label':'Kitchen and Dining',
                'children':[
                    {
                        'value':'bakeware',
                        'label':'Bakeware',
                        'children':[]
                    },
                    {
                        'value':'coffee,teaandespresso',
                        'label':'Coffee, Tea and Espresso',
                        'children':[]
                    },
                    {
                        'value':'cookware',
                        'label':'Cookware',
                        'children':[]
                    },
                    {
                        'value':'cutleryandknifeaccessories',
                        'label':'Cutlery and Knife Accessories',
                        'children':[]
                    },
                    {
                        'value':'Diningandentertaining',
                        'label':'Dining and Entertaining',
                        'children':[]
                    },
                    {
                        'value':'foodserviceequipmentandsupplies',
                        'label':'Food Service Equipment and Supplies',
                        'children':[]
                    },
                    {
                        'value':'homebrewingandwinemaking',
                        'label':'Home Brewing and Wine Making',
                        'children':[]
                    },
                    {
                        'value':'kitchenandtablelinens',
                        'label':'Kitchen and Table Linens',
                        'children':[]
                    },
                    {
                        'value':'kitchenutensileandgadgets',
                        'label':'Kitchen Utensile and Gadgets',
                        'children':[]
                    },
                    {
                        'value':'smallappliancepartsandaccessories',
                        'label':'Small Appliance Parts and Accessories',
                        'children':[]
                    },
                    {
                        'value':'smallappliance',
                        'label':'Small Appliance',
                        'children':[]
                    },
                    {
                        'value':'storageandorganization',
                        'label':'Storage and Organization',
                        'children':[]
                    },
                    {
                        'value':'travelandto-godrinkware',
                        'label':'Travel and To-Go Drinkware',
                        'children':[]
                    },
                    {
                        'value':'watercoolersandfilters',
                        'label':'Water Coolers and Filters',
                        'children':[]
                    },
                    {
                        'value':'wineaccessories',
                        'label':'Wine Accessories',
                        'children':[]
                    }
                ]
            },
            {
                'value':'bedding',
                'label':'Bedding',
                'children':[
                    {
                        'value':'beddingsetsandcollections',
                        'label':'Bedding Sets and Collections',
                        'children':[]
                    },
                    {
                        'value':'bedspread,coverletsandsets',
                        'label':'Bedspread, Coverlets and Sets',
                        'children':[]
                    },
                    {
                        'value':'comfortersandsets',
                        'label':'Comforters and Sets',
                        'children':[]
                    },
                    {
                        'value':'duvets,coversandsets',
                        'label':'Duvets, Covers and Sets',
                        'children':[]
                    },
                    {
                        'value':'quiltsandsets',
                        'label':'Quilts and Sets',
                        'children':[]
                    },
                    {
                        'value':'kidsbedding',
                        'label':'Kids\' Bedding',
                        'children':[]
                    },
                    {
                        'value':'nurserybedding',
                        'label':'Nursery Bedding',
                        'children':[]
                    },
                    {
                        'value':'sheetsandpillowcases',
                        'label':'Sheets and Pillow Cases',
                        'children':[]
                    },
                    {
                        'value':'blanketsandthrows',
                        'label':'Blankets and Throws',
                        'children':[]
                    },
                    {
                        'value':'bedpillowsandpositioners',
                        'label':'Bed Pillows and Positioners',
                        'children':[]
                    },
                    {
                        'value':'decorativepillow,insertsandcovers',
                        'label':'Decorative Pillow, Inserts and Covers',
                        'children':[]
                    },
                    {
                        'value':'bedcanopiesanddrapes',
                        'label':'Bed Canopies and Drapes',
                        'children':[]
                    },
                    {
                        'value':'bedrunnersandscarves',
                        'label':'Bed Runners and Scarves',
                        'children':[]
                    },
                    {
                        'value':'bedskirts',
                        'label':'Bed Skirts',
                        'children':[]
                    },
                    {
                        'value':'airmattressesandaccessories',
                        'label':'Air Mattresses and Accessories',
                        'children':[]
                    },
                    {
                        'value':'beddingaccessories',
                        'label':'Bedding Accessories',
                        'children':[]
                    },
                    {
                        'value':'mattresspadsandtoppers',
                        'label':'Mattress Pads and Toppers',
                        'children':[]
                    },
                    {
                        'value':'mattressesprotectorsandencasement',
                        'label':'Mattresses Protectors and Encasenent',
                        'children':[]
                    }]
            },
            {
                'value':'bath',
                'label':'Bath',
                'children':[
                    {
                        'value':'bathlinensets',
                        'label':'Bath Linen Sets',
                        'children':[]
                    },
                    {
                        'value':'bathrugs',
                        'label':'Bath Rugs',
                        'children':[]
                    },
                    {
                        'value':'Bathroomaccessories',
                        'label':'Bathroom Accessories',
                        'children':[]
                    },
                    {
                        'value':'bathroomfurnituresets',
                        'label':'Bathroom Furniture Sets',
                        'children':[]
                    },
                    {
                        'value':'towels',
                        'label':'Towels',
                        'children':[]
                    },
                    {
                        'value':'bathroomshelves',
                        'label':'Bathroom Shelves',
                        'children':[]
                    },
                    {
                        'value':'kidsbath',
                        'label':'Kids\' Bath',
                        'children':[]
                    }
                ]
            },
            {
                'value':'furniture',
                'label':'Furniture',
                'children':[
                    {
                        'value':'bedroomfurniture',
                        'label':'Bedroom Furniture',
                        'children':[]
                    },
                    {
                        'value':'livingroomfurniture',
                        'label':'Living Room Furniture',
                        'children':[]
                    },
                    {
                        'value':'kitchenanddiningroomfurniture',
                        'label':'Kitchen and Dining Room Furniture',
                        'children':[]
                    },
                    {
                        'value':'homeofficefurniture',
                        'label':'Home Office Furniture',
                        'children':[]
                    },
                    {
                        'value':'kidsfurniture',
                        'label':'Kids\' Furniture',
                        'children':[]
                    },
                    {
                        'value':'entrywayfurniture',
                        'label':'Entryway Furniture',
                        'children':[]
                    },
                    {
                        'value':'gameandrecreationroomfurniture',
                        'label':'Game and Recreation Room Furniture',
                        'children':[]
                    },
                    {
                        'value':'bathroomfurniture',
                        'label':'Bathroom Furniture',
                        'children':[]
                    },
                    {
                        'value':'nurseryfurniture',
                        'label':'Nursery Furniture',
                        'children':[]
                    },
                    {
                        'value':'accentfurniture',
                        'label':'Accent Furniture',
                        'children':[]
                    },
                    {
                        'value':'replacementparts',
                        'label':'Replacement Parts',
                        'children':[]
                    }
                ]
            },
            {
                'value':'homedecor',
                'label':'Home Decor',
                'children':[
                    {
                        'value':'arearugs,runnersandpads',
                        'label':'Area Rugs, Runners and Pads',
                        'children':[]
                    },
                    {
                        'value':'artificialplantsandflowers',
                        'label':'Artificial Plants and Flowers',
                        'children':[]
                    },
                    {
                        'value':'candlesandholders',
                        'label':'Candles and Holders',
                        'children':[]
                    },
                    {
                        'value':'clocks',
                        'label':'Clocks',
                        'children':[]
                    },
                    {
                        'value':'decorativepillows',
                        'label':'Decorative Pillows',
                        'children':[]
                    },
                    {
                        'value':'Doormats',
                        'label':'Doormats',
                        'children':[]
                    },
                    {
                        'value':'doorstops',
                        'label':'Doorstops',
                        'children':[]
                    },
                    {
                        'value':'draftstoppers',
                        'label':'Draft Stoppers',
                        'children':[]
                    },
                    {
                        'value':'homedecoraccents',
                        'label':'Home Decor Accents',
                        'children':[]
                    },
                    {
                        'value':'homefragrance',
                        'label':'Home Fragrance',
                        'children':[]
                    },
                    {
                        'value':'indoorfountainsandaccessories',
                        'label':'Indoor Fountains and Accessories',
                        'children':[]
                    },
                    {
                        'value':'kidsroomdecor',
                        'label':'Kids\' Roo  Decor',
                        'children':[]
                    },
                    {
                        'value':'lampshades',
                        'label':'Lampshades',
                        'children':[]
                    },
                    {
                        'value':'mirror',
                        'label':'Mirror',
                        'children':[]
                    },
                    {
                        'value':'nurserydecor',
                        'label':'Nursery Decor',
                        'children':[]
                    },
                    {
                        'value':'nurserykeepsakes',
                        'label':'Nursery Keepsakes',
                        'children':[]
                    },
                    {
                        'value':'oillampsandaccessories',
                        'label':'Oil Lamps and Accessories',
                        'children':[]
                    },
                    {
                        'value':'photoalbumsandaccessories',
                        'label':'Photo Albums and Accessories',
                        'children':[]
                    },
                    {
                        'value':'pictureframes',
                        'label':'Picture Frames',
                        'children':[]
                    },
                    {
                        'value':'poufs',
                        'label':'Poufs',
                        'children':[]
                    },
                    {
                        'value':'slipcovers',
                        'label':'Slipcovers',
                        'children':[]
                    },
                    {
                        'value':'tapestries',
                        'label':'Tapestries',
                        'children':[]
                    },
                    {
                        'value':'vasefillers',
                        'label':'Vase Fillers',
                        'children':[]
                    },
                    {
                        'value':'vases',
                        'label':'Vases',
                        'children':[]
                    },
                    {
                        'value':'windowtreatmenthardware',
                        'label':'Window Treatment Hardware',
                        'children':[]
                    },
                    {
                        'value':'windowtreatments',
                        'label':'Window Treatments',
                        'children':[]
                    }]
            },
            {
                'value':'wallart',
                'label':'Wall Art',
                'children':[
                    {
                        'value':'drawing',
                        'label':'Drawing',
                        'children':[]
                    },
                    {
                        'value':'mixedmedia',
                        'label':'Mixed Media',
                        'children':[]
                    },
                    {
                        'value':'painting',
                        'label':'Painting',
                        'children':[]
                    },
                    {
                        'value':'photographs',
                        'label':'Photographs',
                        'children':[]
                    },
                    {
                        'value':'postersandprints',
                        'label':'Posters and Prints',
                        'children':[]
                    }
                ]
            },
            {
                'value':'lightingandceilingfans',
                'label':'Lighting and Ceiling Fans',
                'children':[
                    {
                        'value':'ceilingfansandaccessories',
                        'label':'Ceiling Fans and Accessories',
                        'children':[]
                    },
                    {
                        'value':'ceilinglights',
                        'label':'Ceiling Lights',
                        'children':[]
                    },
                    {
                        'value':'lampsandshades',
                        'label':'Lamps and Shades',
                        'children':[]
                    },
                    {
                        'value':'lightingaccessories',
                        'label':'Lighting Accessories',
                        'children':[]
                    },
                    {
                        'value':'noveltylighting',
                        'label':'Novelty Lighting',
                        'children':[]
                    },
                    {
                        'value':'walllighrs',
                        'label':'Wall Lights',
                        'children':[]
                    }
                ]
            },
            {
                'value':'seasonaldecor',
                'label':'Seasonal Decor',
                'children':[
                    {
                        'value':'adventcalenders',
                        'label':'Advent Calenders',
                        'children':[]
                    },
                    {
                        'value':'artificialsnow',
                        'label':'Artificial Snow',
                        'children':[]
                    },
                    {
                        'value':'bowsandribbons',
                        'label':'Bows and Ribbons',
                        'children':[]
                    },
                    {
                        'value':'candleholders',
                        'label':'Candle Holders',
                        'children':[]
                    },
                    {
                        'value':'candles',
                        'label':'Candles',
                        'children':[]
                    },
                    {
                        'value':'collectiblebuildingandaccessories',
                        'label':'Collectible Buildings and Accessories',
                        'children':[]
                    },
                    {
                        'value':'collectiblefigurince',
                        'label':'Collectible Figurince',
                        'children':[]
                    },
                    {
                        'value':'nativity',
                        'label':'Nativity',
                        'children':[]
                    },
                    {
                        'value':'Nutcrackers',
                        'label':'Nutcrackers',
                        'children':[]
                    },
                    {
                        'value':'ornamenthooks',
                        'label':'Ornament Hooks',
                        'children':[]
                    },
                    {
                        'value':'ornaments',
                        'label':'Ornaments',
                        'children':[]
                    },
                    {
                        'value':'outdoorholidaydecor',
                        'label':'Outdoor Holiday Decor',
                        'children':[]
                    },
                    {
                        'value':'seasonallighting',
                        'label':'Seasonal Lighting',
                        'children':[]
                    },
                    {
                        'value':'snowglobes',
                        'label':'Snow Globes',
                        'children':[]
                    },
                    {
                        'value':'stockingsandholders',
                        'label':'Stockings and Holders',
                        'children':[]
                    },
                    {
                        'value':'tinsel',
                        'label':'Tinsel',
                        'children':[]
                    },
                    {
                        'value':'treecareandwatering',
                        'label':'Tree Care and Watering',
                        'children':[]
                    },
                    {
                        'value':'treeskirts',
                        'label':'Tree Skirts',
                        'children':[]
                    },
                    {
                        'value':'treestands',
                        'label':'Tree Stands',
                        'children':[]
                    },
                    {
                        'value':'treetoppers',
                        'label':'Tree Toppers',
                        'children':[]
                    },
                    {
                        'value':'treetrayandmats',
                        'label':'Tree Tray and Mats',
                        'children':[]
                    },
                    {
                        'value':'trees',
                        'label':'Trees',
                        'children':[]
                    },
                    {
                        'value':'wreathhangers',
                        'label':'Wreath Hangers',
                        'children':[]
                    },
                    {
                        'value':'wreath,garlandsandswags',
                        'label':'Wresth, Garlands and Swags',
                        'children':[]
                    }
                ]
            },
            {
                'value':'eventandpartysupplies',
                'label':'Event and Party Supplies',
                'children':[
                    {
                        'value':'tableware',
                        'label':'Tableware',
                        'children':[]
                    },
                    {
                        'value':'favors',
                        'label':'Favors',
                        'children':[]
                    },
                    {
                        'value':'partypacks',
                        'label':'Party Packs',
                        'children':[]
                    },
                    {
                        'value':'decorations',
                        'label':'Decorations',
                        'children':[]
                    },
                    {
                        'value':'invitations',
                        'label':'Invitations',
                        'children':[]
                    },
                    {
                        'value':'partygamesandactivity',
                        'label':'Party Games and Activity',
                        'children':[]
                    },
                    {
                        'value':'childrenspartysupplies',
                        'label':'Children\'s Party Supplies',
                        'children':[]
                    },
                    {
                        'value':'cakedecoratingsupplies',
                        'label':'Cale Decoration Supplies',
                        'children':[]
                    },
                    {
                        'value':'ceremonysupplies',
                        'label':'Ceremony Supplies',
                        'children':[]
                    },
                    {
                        'value':'hats',
                        'label':'Hats',
                        'children':[]
                    },
                    {
                        'value':'photoboothprops',
                        'label':'Photobooth Props',
                        'children':[]
                    },
                    {
                        'value':'placecardsandplacecard',
                        'label':'Place Cards and Place Cards',
                        'children':[]
                    },
                    {
                        'value':'placecardsandplacecards',
                        'label':'Place Cards and Place Cards',
                        'children':[]
                    },
                    {
                        'value':'adultnovelty',
                        'label':'Adult Novelty',
                        'children':[]
                    }
                ]
            },
            {
                'value':'heating,coolingandairquality',
                'label':'Heating, Cooling and Air Quality',
                'children':[
                    {
                        'value':'airconditioners',
                        'label':'Air Conditioners',
                        'children':[]
                    },
                    {
                        'value':'airpurifiers',
                        'label':'Air Purifiers',
                        'children':[]
                    },
                    {
                        'value':'dehumidifiers',
                        'label':'Dehumidifiers',
                        'children':[]
                    },
                    {
                        'value':'indoorthermometers',
                        'label':'Indoor Thermometers',
                        'children':[]
                    },
                    {
                        'value':'spaceheaters',
                        'label':'Space Heaters',
                        'children':[]
                    },
                    {
                        'value':'stovesandfireplaces',
                        'label':'Stoves and Fireplace',
                        'children':[]
                    },
                    {
                        'value':'partsandaccessories',
                        'label':'Parts and Accessories',
                        'children':[]
                    }
                ]
            },
            {
                'value':'ironandstreamers',
                'label':'Iron and Streamers',
                'children':[
                    {
                        'value':'ironingaccessories',
                        'label':'Ironing Accessories',
                        'children':[]
                    },
                    {
                        'value':'ironingboardcovers',
                        'label':'Ironing Board Covers',
                        'children':[]
                    },
                    {
                        'value':'ironingboards',
                        'label':'Ironing Boards',
                        'children':[]
                    },
                    {
                        'value':'irons',
                        'label':'Irons',
                        'children':[]
                    },
                    {
                        'value':'garmentsteameraccessories',
                        'label':'Garment Steamer Accessories',
                        'children':[]
                    },
                    {
                        'value':'garmentsteamers',
                        'label':'Garment Steamers',
                        'children':[]
                    },
                    {
                        'value':'travelgarmentsteamers',
                        'label':'Travel Garment Steamers',
                        'children':[]
                    },
                    {
                        'value':'trouserspressers',
                        'label':'Trousers Pressers',
                        'children':[]
                    }
                ]
            },
            {
                'value':'vaccumsandfloorcare',
                'label':'Vaccums and Floor Care',
                'children':[
                    {
                        'value':'vacuums',
                        'label':'Vacuums',
                        'children':[]
                    },
                    {
                        'value':'Vacuumspartsandaccessories',
                        'label':'Vacuum Parts and Accessories',
                        'children':[]
                    },
                    {
                        'value':'carpetandupholsterycleanersandaccessories',
                        'label':'Carpet and Upholstery Cleaners and Accessories',
                        'children':[]
                    },
                    {
                        'value':'floorbuffersandparts',
                        'label':'Floor Buffers and Parts',
                        'children':[]
                    },
                    {
                        'value':'steamcleaners,steammopsandaccessories',
                        'label':'Steam Cleaners, Steamp Mops and Accessories',
                        'children':[]
                    },
                    {
                        'value':'sweepersandaccessories',
                        'label':'Sweepers and Accessories',
                        'children':[]
                    }
                ]
            },
            {
                'value':'storageandorganization',
                'label':'Storage and Organization',
                'children':[
                    {
                        'value':'baskets,binsandcontainers',
                        'label':'Baskets, Bins and Containers',
                        'children':[]
                    },
                    {
                        'value':'bathroomstorageandorganization',
                        'label':'Bathroom Storage and Organization',
                        'children':[]
                    },
                    {
                        'value':'clothingandclosetstorage',
                        'label':'Clothing and Closet Storage',
                        'children':[]
                    },
                    {
                        'value':'decorativewreathstorage',
                        'label':'Decorative Wreath Storage',
                        'children':[]
                    },
                    {
                        'value':'garagestorageandorganization',
                        'label':'Garage Storage and Organization',
                        'children':[]
                    },
                    {
                        'value':'giftwrapstorage',
                        'label':'Gift Wrap Storage',
                        'children':[]
                    },
                    {
                        'value':'holidaydecorstorage',
                        'label':'Holiday Decor Storage',
                        'children':[]
                    },
                    {
                        'value':'homestoragehooks',
                        'label':'Home Storage Hooks',
                        'children':[]
                    },
                    {
                        'value':'jewelryboxesandorganization',
                        'label':'Jewelry Boxes and Organization',
                        'children':[]
                    },
                    {
                        'value':'kitchenstorageandorganization',
                        'label':'Kitchen Storage and Organization',
                        'children':[]
                    },
                    {
                        'value':'laundrystorageandorganization',
                        'label':'Laundry Storage and Organization',
                        'children':[]
                    },
                    {
                        'value':'officestorageandorganization',
                        'label':'Office Storage and Organization',
                        'children':[]
                    },
                    {
                        'value':'racks,shelvesanddrawers',
                        'label':'Racks, Shelves and Drawers',
                        'children':[]
                    },
                    {
                        'value':'storagetrunks',
                        'label':'Storage Trunks',
                        'children':[]
                    },
                    {
                        'value':'trash,recyclingandcompost',
                        'label':'Trash, Recycling and Compost',
                        'children':[]
                    }
                ]
            },
            {
                'value':'cleaningsupplies',
                'label':'Cleaning Supplies',
                'children':[
                    {
                        'value':'airfreshners',
                        'label':'Airfreshners',
                        'children':[]
                    },
                    {
                        'value':'brushes',
                        'label':'Brushes',
                        'children':[]
                    },
                    {
                        'value':'dusting',
                        'label':'Dusting',
                        'children':[]
                    },
                    {
                        'value':'gloves',
                        'label':'Gloves',
                        'children':[]
                    },
                    {
                        'value':'householdcleaners',
                        'label':'Household CLeaners',
                        'children':[]
                    },
                    {
                        'value':'mopping',
                        'label':'Mopping',
                        'children':[]
                    },
                    {
                        'value':'papertowel',
                        'label':'Paper Towel',
                        'children':[]
                    },
                    {
                        'value':'sponges',
                        'label':'Sponges',
                        'children':[]
                    },
                    {
                        'value':'squeegees',
                        'label':'Squeegees',
                        'children':[]
                    },
                    {
                        'value':'sweeping',
                        'label':'Sweeping',
                        'children':[]
                    },
                    {
                        'value':'trashbags',
                        'label':'Trashbags',
                        'children':[]
                    }
                ]
            }
        ]
    },
    {
        'value':'industrialsandscientifics',
        'label':'Industrials and Scientifics',
        'children':[
            {
                'value': 'abrasiveandfinishingproducts',
                'label': 'Abrasive and Fishings Products',
                'children': [
                    {
                        'value':'abrasiveaccessories',
                        'label':'Abrasive Accessories',
                        'children':[]
                    },
                    {
                        'value':'abrasivebelts',
                        'label':'Abrasive Belts',
                        'children':[]
                    },
                    {
                        'value':'abrasivebrushes',
                        'label':'Abrasive Brushes',
                        'children':[]
                    },
                    {
                        'value':'abrasivemountedpoints',
                        'label':'Abrasive Mounted Points',
                        'children':[]
                    },
                    {
                        'value':'abrasivewheelsanddiscs',
                        'label':'Abrasive Wheels and Discs',
                        'children':[]
                    },
                    {
                        'value':'finishingproducts',
                        'label':'Finishing Products',
                        'children':[]
                    }
                ]
            },
            {
                'value': 'additivemanufacturingsproducts',
                'label': 'Additive Manufacturings Products',
                'children': [{
                    'value':'3dprinters',
                    'label':'3D Printers',
                    'children':[]
                },
                {
                    'value':'3dprintingsupplies',
                    'label':'3D Printing Supplies',
                    'children':[]
                },
                {
                    'value':'3dprinterpartsandaccessories',
                    'label':'3D Printer Parts and Accessories',
                    'children':[]
                },
                {
                    'value':'3dscanners',
                    'label':'3D Scanners',
                    'children':[]
                }
            ]
            },
            {
                'value':'commercialdoorproducts',
                'label':'Commercial Door Products',
                'children':[
                    {
                        'value':'commercialaccesscontrol',
                        'label':'Commercial Access Control',
                        'children':[]
                    },
                    {
                        'value':'commercialdoorhardware',
                        'label':'Commercial Door Hardware',
                        'children':[]
                    },
                    {
                        'value':'commercialdoors',
                        'label':'Commercial Doors',
                        'children':[]
                    }
                ]
            },
            {
                'value':'cuttingtools',
                'label':'Cutting Tools',
                'children':[
                    {
                        'value':'bandsawblades',
                        'label':'Band Saw Blades',
                        'children':[]
                    },
                    {
                        'value':'boringbars',
                        'label':'Boring Bars',
                        'children':[]
                    },
                    {
                        'value':'brazedtools',
                        'label':'Brazed Tools',
                        'children':[]
                    },
                    {
                        'value':'broaches',
                        'label':'Broaches',
                        'children':[]
                    },
                    {
                        'value':'counterbores',
                        'label':'Counterbores',
                        'children':[]
                    },
                    {
                        'value':'countersinks',
                        'label':'Countersinks',
                        'children':[]
                    },
                    {
                        'value':'cuttingburrs',
                        'label':'Cutting Burrs',
                        'children':[]
                    },
                    {
                        'value':'cuttingtoolcoolants',
                        'label':'Cutting Tool Coolants',
                        'children':[]
                    },
                    {
                        'value':'deburringcutters',
                        'label':'Deburring Cutters',
                        'children':[]
                    },
                    {
                        'value':'drillandtapsets',
                        'label':'Drill and Tap Sets',
                        'children':[]
                    },
                    {
                        'value':'drilladapter',
                        'label':'Drill Adapter',
                        'children':[]
                    },
                    {
                        'value':'fixturingclamps',
                        'label':'Fixturimg Clamps',
                        'children':[]
                    },
                    {
                        'value':'holessawsandaccessories',
                        'label':'Holes Saw and Accessories',
                        'children':[]
                    },
                    {
                        'value':'indexableinsertholders',
                        'label':'Indexable Insert Holders',
                        'children':[]
                    },
                    {
                        'value':'indexableinserts',
                        'label':'Indexable Inserts',
                        'children':[]
                    },
                    {
                        'value':'industrialdrillbits',
                        'label':'Industrial Drill Bits',
                        'children':[]
                    },
                    {
                        'value':'livecenters',
                        'label':'Live Centers',
                        'children':[]
                    },
                    {
                        'value':'metalcuttingcircularsawblades',
                        'label':'Metal Cutting Circular Saw Blades',
                        'children':[]
                    },
                    {
                        'value':'metalcuttingcircularsaws',
                        'label':'Metal Cutting Circulars Saws',
                        'children':[]
                    },
                    {
                        'value':'millingaccessories',
                        'label':'Milling Accessories',
                        'children':[]
                    },
                    {
                        'value':'punches',
                        'label':'Punches',
                        'children':[]
                    },
                    {
                        'value':'reamers',
                        'label':'Reamers',
                        'children':[]
                    },
                    {
                        'value':'routerbits',
                        'label':'Router Bits',
                        'children':[]
                    },
                    {
                        'value':'shellreamerarbors',
                        'label':'Shell Reamer Arbors',
                        'children':[]
                    },
                    {
                        'value':'slottingcutters',
                        'label':'Slotting Cutters',
                        'children':[]
                    },
                    {
                        'value':'threadmills',
                        'label':'Thread Mills',
                        'children':[]
                    },
                    {
                        'value':'threadrepairkits',
                        'label':'Thread Repair Kits',
                        'children':[]
                    },
                    {
                        'value':'threaddies',
                        'label':'Thread Dies',
                        'children':[]
                    },
                    {
                        'value':'threadtaps',
                        'label':'Thread Taps',
                        'children':[]
                    },
                    {
                        'value':'toolholders',
                        'label':'Tool Holders',
                        'children':[]
                    }
                ]
            },
            {
                'value':'fasteners',
                'label':'Fasteners',
                'children':[
                    {
                        'value':'bolts',
                        'label':'Bolts',
                        'children':[]
                    },
                    {
                        'value':'screws',
                        'label':'Screws',
                        'children':[]
                    },
                    {
                        'value':'nuts',
                        'label':'Nuts',
                        'children':[]
                    },
                    {
                        'value':'nutandboltassortmentsets',
                        'label':'Nut and Bolt Assortment Sets',
                        'children':[]
                    },
                    {
                        'value':'anchors',
                        'label':'Anchors',
                        'children':[]
                    },
                    {
                        'value':'collatedfasteners',
                        'label':'Collated Fasteners',
                        'children':[]
                    },
                    {
                        'value':'nails',
                        'label':'Nails',
                        'children':[]
                    },
                    {
                        'value':'pins',
                        'label':'Pins',
                        'children':[]
                    },
                    {
                        'value':'retainingrings',
                        'label':'Retaining Rings',
                        'children':[]
                    },
                    {
                        'value':'rivets',
                        'label':'Rivets',
                        'children':[]
                    },
                    {
                        'value':'spacersandstandoffs',
                        'label':'Spacers and Standoffs',
                        'children':[]
                    },
                    {
                        'value':'threadedinserts',
                        'label':'Threaded Inserts',
                        'children':[]
                    },
                    {
                        'value':'staples',
                        'label':'Staples',
                        'children':[]
                    },
                    {
                        'value':'threadedinserts',
                        'label':'Threaded Inserts',
                        'children':[]
                    },
                    {
                        'value':'washers',
                        'label':'Washers',
                        'children':[]
                    },
                    {
                        'value':'screwandboltassortmentsets',
                        'label':'Screw and Bolt Assortment Sets',
                        'children':[]
                    }

                ]
            },
            {
                'value':'filtration',
                'label':'Filtration',
                'children':[
                    {
                        'value':'compressedairtreatment',
                        'label':'Compressed Air Treatment',
                        'children':[]
                    },
                    {
                        'value':'hvacfiltration',
                        'label':'HVAC Filtration',
                        'children':[]
                    },
                    {
                        'value':'hydraulicfiltration',
                        'label':'Hydraulic Filtration',
                        'children':[]
                    },
                    {
                        'value':'industrialprocessfiltration',
                        'label':'Industrial Process Filtration',
                        'children':[]
                    },
                    {
                        'value':'labfilters',
                        'label':'Lab Filters',
                        'children':[]
                    },
                    {
                        'value':'strainers',
                        'label':'Strainers',
                        'children':[]
                    },
                    {
                        'value':'waterpurification',
                        'label':'Water Purification',
                        'children':[]
                    }
                ]
            },
            {
                'value':'foodserviceequipmentandsupplies',
                'label':'Food Service Equipment and Supplies',
                'children':[
                    {
                        'value':'concessionandvendingequipment',
                        'label':'Concession and Vending Equipment',
                        'children':[]
                    },
                    {
                        'value':'cookwarebakewareandtools',
                        'label':'Cookware, Bakeware and Tools',
                        'children':[]
                    },
                    {
                        'value':'displaywareandsingnage',
                        'label':'Displayware and Signage',
                        'children':[]
                    },
                    {
                        'value':'disposable',
                        'label':'Disposable',
                        'children':[]
                    },
                    {
                        'value':'furniture',
                        'label':'Furniture',
                        'children':[]
                    },
                    {
                        'value':'restaurantappliancesandequipment',
                        'label':'Restaurant Appliance and Equipment',
                        'children':[]
                    },
                    {
                        'value':'storageandtranport',
                        'label':'Storage and Transport',
                        'children':[]
                    },
                    {
                        'value':'tabletopandserveware',
                        'label':'Tabletop and Serveware',
                        'children':[]
                    }
                ]
            },
            {
                'value':'hydraulicspneumentandplumbing',
                'label':'Hydraulics, Pneument and Plumbing',
                'children':[
                    {
                        'value':'fittings',
                        'label':'Fittings',
                        'children':[]
                    },
                    {
                        'value':'hosenozzles',
                        'label':'Hose Nozzles',
                        'children':[]
                    },
                    {
                        'value':'hydraulicequipment',
                        'label':'Hydraulic Equipment',
                        'children':[]
                    },
                    {
                        'value':'pneumaticequipment',
                        'label':'Pneumatic Equipment',
                        'children':[]
                    },
                    {
                        'value':'protectivecaps',
                        'label':'Protective Caps',
                        'children':[]
                    },
                    {
                        'value':'pumpsandaccessories',
                        'label':'Pumping and Accessories',
                        'children':[]
                    },
                    {
                        'value':'push-inplugs',
                        'label':'Push0in Plugs',
                        'children':[]
                    },
                    {
                        'value':'sealsando-rings',
                        'label':'Seals and O-Rings',
                        'children':[]
                    },
                    {
                        'value':'tubespipesandhoses',
                        'label':'Tubes, Pipes and Hoses',
                        'children':[]
                    }
                ]
            },
            {
                'value':'industrialelectrical',
                'label':'Industrial Electrical',
                'children':[
                    {
                        'value':'circuitprotectionproducts',
                        'label':'Circuit Protection Products',
                        'children':[]
                    },
                    {
                        'value':'controlsandindicators',
                        'label':'Controls and Indicators',
                        'children':[]
                    },
                    {
                        'value':'decadeboxes',
                        'label':'Decade Boxes',
                        'children':[]
                    },
                    {
                        'value':'fiberopticproducts',
                        'label':'Fiber Optic Products',
                        'children':[]
                    },
                    {
                        'value':'lightingcomponents',
                        'label':'Lighting Components',
                        'children':[]
                    },
                    {
                        'value':'optoelectronicproducrs',
                        'label':'Optoelectronic Products',
                        'children':[]
                    },
                    {
                        'value':'passivecomponents',
                        'label':'Passive Components',
                        'children':[]
                    },
                    {
                        'value':'semiconductorproducts',
                        'label':'Semiconductor Products',
                        'children':[]
                    },
                    {
                        'value':'sensors',
                        'label':'Sensors',
                        'children':[]
                    },
                    {
                        'value':'thermalmanagementproducts',
                        'label':'Thermal Management Products',
                        'children':[]
                    },
                  
                    {
                        'value':'wiringandconnecting',
                        'label':'Wiring and Connecting',
                        'children':[]
                    }
                ]
            },
            {
                'value':'industrialhardware',
                'label':'Industrial Hardware',
                'children':[
                    {
                        'value':'biscuitsandplugs',
                        'label':'Biscuit and Plugs',
                        'children':[]
                    },
                    {
                        'value':'bracesandjoisthangers',
                        'label':'Braces and Joist Hangers',
                        'children':[]
                    },
                    {
                        'value':'brackets',
                        'label':'Brackets',
                        'children':[]
                    },
                    {
                        'value':'bumpers',
                        'label':'Bumpers',
                        'children':[]
                    },
                    {
                        'value':'catches',
                        'label':'Catches',
                        'children':[]
                    },
                    {
                        'value':'chains',
                        'label':'Chains',
                        'children':[]
                    },
                    {
                        'value':'drawerslides',
                        'label':'Drawer Slides',
                        'children':[]
                    },
                    {
                        'value':'flexiblesupportarms',
                        'label':'Flexible Support Arms',
                        'children':[]
                    },
                    {
                        'value':'grommets',
                        'label':'Grommets',
                        'children':[]
                    },
                    {
                        'value':'handlesandpulls',
                        'label':'Handles and Pulls',
                        'children':[]
                    },
                    {
                        'value':'hasps',
                        'label':'Hasps',
                        'children':[]
                    },
                    {
                        'value':'hinges',
                        'label':'Hinges',
                        'children':[]
                    },
                    {
                        'value':'hooks',
                        'label':'Hooks',
                        'children':[]
                    },
                    {
                        'value':'knobsandhandwheels',
                        'label':'Knobs and Hand Wheels',
                        'children':[]
                    },
                    {
                        'value':'latches',
                        'label':'Latches',
                        'children':[]
                    },
                    {
                        'value':'lockbolts',
                        'label':'Lock Bolts',
                        'children':[]
                    },
                    {
                        'value':'snaps',
                        'label':'Snaps',
                        'children':[]
                    }
                ]
            },
            {
                'value':'industrialpowerandhandtools',
                'label':'Industrial Power and Hand Tools',
                'children':[
                    {
                        'value':'industrialhandtools',
                        'label':'Industrial Hand Tools',
                        'children':[]
                    },
                    {
                        'value':'industrialpowertools',
                        'label':'Industrial Power Tools',
                        'children':[]
                    },
                    {
                        'value':'workholding',
                        'label':'Workholding',
                        'children':[]
                    }
                ]
            },
            {
                'value':'junitorialandsanitationsupplies',
                'label':'Junitorial and Sanitation Supplies',
                'children':[
                    {
                        'value':'cleaningchemicals',
                        'label':'Cleaning Chemicals',
                        'children':[]
                    },
                    {
                        'value':'cleaningtools',
                        'label':'Cleaning Tools',
                        'children':[]
                    },
                    {
                        'value':'floormatsandmatting',
                        'label':'Floor Mats and Matting',
                        'children':[]
                    },
                    {
                        'value':'floorstandsigns',
                        'label':'Floor Stand Signs',
                        'children':[]
                    },
                    {
                        'value':'laundrysupplies',
                        'label':'Laundry Supplies',
                        'children':[]
                    },
                    {
                        'value':'moppingsupplies',
                        'label':'Mopping Supplies',
                        'children':[]
                    },
                    {
                        'value':'odoranddrainmaintainers',
                        'label':'Odor and Drain Maintainers',
                        'children':[]
                    },
                    {
                        'value':'paperproducts',
                        'label':'Paper Products',
                        'children':[]
                    },
                    {
                        'value':'personalcareproducts',
                        'label':'Personal Care Products',
                        'children':[]
                    },
                    {
                        'value':'restroomfixtures',
                        'label':'Restroom Fixtures',
                        'children':[]
                    },
                    {
                        'value':'sweepingsupplies',
                        'label':'Sweeping Supplies',
                        'children':[]
                    },
                    {
                        'value':'vacuumsandfloorcleaningmachines',
                        'label':'Vacuums and Floor CLeaning Machines',
                        'children':[]
                    },
                    {
                        'value':'wastereceptaclesandliners',
                        'label':'Waste Receptacles and Liners',
                        'children':[]
                    }
                ]
            },
            {
                'value':'labandscientificproducts',
                'label':'LAb and Scientific Products',
                'children':[
                    {
                        'value':'glasswareandlabware',
                        'label':'Glassware and Labware',
                        'children':[]
                    },
                    {
                        'value':'labchemicals',
                        'label':'Lab Chemicals',
                        'children':[]
                    },
                    {
                        'value':'labfilters',
                        'label':'Lab Filters',
                        'children':[]
                    },
                    {
                        'value':'labfurniture',
                        'label':'Lab Furniture',
                        'children':[]
                    },
                    {
                        'value':'labinstrumentsandequipment',
                        'label':'Lab Instruments and Equipment',
                        'children':[]
                    },
                    {
                        'value':'labsuppliesandconsumeables',
                        'label':'Lab Supplies and Consumeables',
                        'children':[]
                    },
                    {
                        'value':'lifesciencesupplies',
                        'label':'Life Science Supplies',
                        'children':[]
                    }
                ]
            },
            {
                'value':'materialhandlingproducts',
                'label':'Material Handling Products',
                'children':[
                    {
                        'value':'cableties',
                        'label':'Cable Ties',
                        'children':[]
                    },
                    {
                        'value':'casters',
                        'label':'Casters',
                        'children':[]
                    }
                    ,
                    {
                        'value':'coilchain',
                        'label':'Coil Chain',
                        'children':[]
                    }
                    ,
                    {
                        'value':'drumandpailhandlingequipment',
                        'label':'Drum and Pail Handling Equipment',
                        'children':[]
                    }
                    ,
                    {
                        'value':'drywalllifts',
                        'label':'Drywall Lifts',
                        'children':[]
                    }
                    ,
                    {
                        'value':'fortliftbooms',
                        'label':'Fortlift Booms',
                        'children':[]
                    }
                    ,
                    {
                        'value':'forklift',
                        'label':'Forklifts',
                        'children':[]
                    },
                    {
                        'value':'hvacequipment',
                        'label':'HVAC Equipment',
                        'children':[]
                    },
                    {
                        'value':'hydraulicliftingcylinders',
                        'label':'Hydraulic Lifting Cylinders',
                        'children':[]
                    },
                    {
                        'value':'hydraulicliftingpumps',
                        'label':'Hydraulic Lifting Pumps',
                        'children':[]
                    },
                    {
                        'value':'industriallighttower',
                        'label':'Industrial Light Tower',
                        'children':[]
                    },
                    {
                        'value':'industrialmagnets',
                        'label':'Industrial Magnets',
                        'children':[]
                    },
                    {
                        'value':'loadbinders',
                        'label':'Load Binders',
                        'children':[]
                    },
                    {
                        'value':'loadingdockbumpers',
                        'label':'Loading Dock Bumpers',
                        'children':[]
                    },
                    {
                        'value':'Loadingdocklevelers',
                        'label':'Loading Dock Levelers',
                        'children':[]
                    },
                    {
                        'value':'loadingdockplates',
                        'label':'Loading Dock Plates',
                        'children':[]
                    },
                    {
                        'value':'loadingdockwheelchocks',
                        'label':'Loading Dock Wheel Chocks',
                        'children':[]
                    },
                    {
                        'value':'materialtransportequipment',
                        'label':'Material Transport Equipment',
                        'children':[]
                    },
                    {
                        'value':'Palletstrappers',
                        'label':'Pallet Strappers',
                        'children':[]
                    },
                    {
                        'value':'Pallets',
                        'label':'Pallets',
                        'children':[]
                    },
                    {
                        'value':'pneumaticequipment',
                        'label':'Pneumatic Equipment',
                        'children':[]
                    },
                    {
                        'value':'pullingandlifting',
                        'label':'Pulling and Lifting',
                        'children':[]
                    },
                    {
                        'value':'ramps',
                        'label':'Ramps',
                        'children':[]
                    },
                    {
                        'value':'rollerstands',
                        'label':'Roller Stands',
                        'children':[]
                    },
                    {
                        'value':'securitystraps',
                        'label':'Security Straps',
                        'children':[]
                    }
                    ,{
                        'value':'shelvesandrackingsystem',
                        'label':'Shelves and Racking System',
                        'children':[]
                    },
                    {
                        'value':'wheels',
                        'label':'Wheels',
                        'children':[]
                    }
                ]
            },
            {
                'value':'occupationalhealthandsafetyproducts',
                'label':'Occupational Health And Safety Products',
                'children':[
                    {
                        'value':'emergencyresponseequipment',
                        'label':'Emergency Response Equipment',
                        'children':[]
                    },
                    {
                        'value':'facilitysafetyproducts',
                        'label':'Facility Safety Products',
                        'children':[]
                    },
                    {
                        'value':'hazardousmaterialhandling',
                        'label':'Hazardous Material Handling',
                        'children':[]
                    },
                    {
                        'value':'lockoutsandtagoutproducts',
                        'label':'Lockout and Tagout Products',
                        'children':[]
                    },
                    {
                        'value':'personelprotectiveequipment',
                        'label':'Personel Protective Equipment',
                        'children':[]
                    },
                    {
                        'value':'safetysignsandsignals',
                        'label':'Safety Signs and Signals',
                        'children':[]
                    },
                    {
                        'value':'safetytraining',
                        'label':'Safety Training',
                        'children':[]
                    }
                ]
            },
            {
                'value':'packingandshippingsupplies',
                'label':'Packing and Shipping Supplies',
                'children':[
                    {
                        'value':'bublepacksupplies',
                        'label':'Bubble Pack Supplies',
                        'children':[]
                    },
                    {
                        'value':'cartonsealingtape',
                        'label':'Carton Sealing Tape',
                        'children':[]
                    },
                    {
                        'value':'cartonsealingtapedispensers',
                        'label':'Carton Sealing Tape Dispensers',
                        'children':[]
                    },
                    {
                        'value':'corrugatedboxes',
                        'label':'Corrugated Boxes',
                        'children':[]
                    },
                    {
                        'value':'corrugatedpads',
                        'label':'Corrugated Pads',
                        'children':[]
                    },
                    {
                        'value':'dunnageandprotectors',
                        'label':'Dunnage and Protectors',
                        'children':[]
                    },
                    {
                        'value':'industrialshrinkwrapsupplies',
                        'label':'Industrial Shrink Wrap Supplies',
                        'children':[]
                    },
                    {
                        'value':'industrialstretchwrapsupplies',
                        'label':'Industrial Stretch Wrap Supplies',
                        'children':[]
                    },
                    {
                        'value':'labelandlabelingequipment',
                        'label':'Label and Labeling Equipment',
                        'children':[]
                    },
                    {
                        'value':'mailers',
                        'label':'Mailers',
                        'children':[]
                    },
                    {
                        'value':'packinglabelsandtags',
                        'label':'Packing Label and Tags',
                        'children':[]
                    },
                    {
                        'value':'polyandplasticpackagingbags',
                        'label':'Poly and Plastic Packaging Bags',
                        'children':[]
                    },
                    {
                        'value':'strapping',
                        'label':'Strapping',
                        'children':[]
                    }
                ]
            },
            {
                'value':'powertransmissionproducts',
                'label':'Power Transmission Products',
                'children':[
                    {
                        'value':'bearings',
                        'label':'Bearing',
                        'children':[]
                    },
                    {
                        'value':'belts',
                        'label':'Belts',
                        'children':[]
                    },
                    {
                        'value':'brakesandclutches',
                        'label':'Brakes and Clutches',
                        'children':[]
                    },
                    {
                        'value':'chains',
                        'label':'Chains',
                        'children':[]
                    },
                    {
                        'value':'controlcablesandaccessories',
                        'label':'Control Cables and Accessories',
                        'children':[]
                    },
                    {
                        'value':'coupling,collarsanduniversaljoiners',
                        'label':'Coupling, COllars and Universal Joiners',
                        'children':[]
                    },
                    {
                        'value':'enclousuresandcases',
                        'label':'Enclousure and Cases',
                        'children':[]
                    },
                    {
                        'value':'gearstocksandpinionwire',
                        'label':'Gear Stocks and Pinion Wire',
                        'children':[]
                    },
                    {
                        'value':'gearboxes,gearheadsandspeedreducers',
                        'label':'Gearboxes, Gearheads and Speed Reducers',
                        'children':[]
                    },
                    {
                        'value':'gears',
                        'label':'Gears',
                        'children':[]
                    },
                    {
                        'value':'linearmotionproducts',
                        'label':'Linear Motion Products',
                        'children':[]
                    },
                    {
                        'value':'lubricantsandoils',
                        'label':'Lubricants and Oils',
                        'children':[]
                    },
                    {
                        'value':'magnetswire',
                        'label':'Magnets Wire',
                        'children':[]
                    },
                    {
                        'value':'powertake-offs(ptos)',
                        'label':'Powertake-offs(PTOs)',
                        'children':[]
                    },
                    {
                        'value':'pulleysandsheaves',
                        'label':'Pulleys and Sheaves',
                        'children':[]
                    },
                    {
                        'value':'ratchetsandpawls',
                        'label':'Retchets and Pawls',
                        'children':[]
                    },
                    {
                        'value':'rollerschainspockets',
                        'label':'Rollers Chain Spockets',
                        'children':[]
                    },
                    {
                        'value':'shafting',
                        'label':'Shafting',
                        'children':[]
                    },
                    {
                        'value':'shockandvibrationcontrol',
                        'label':'Shock and Vibration Control',
                        'children':[]
                    },
                    {
                        'value':'springs',
                        'label':'Springs',
                        'children':[]
                    },
                    {
                        'value':'wormwheels',
                        'label':'Worm Wheels',
                        'children':[]
                    }
                ]
            },
            
            {
                'value':'professionaldentalsupplies',
                'label':'Professional Dental Supplies',
                'children':[
                    {
                        'value':'anesthesia',
                        'label':'Anesthesia',
                        'children':[]
                    },
                    {
                        'value':'apparelglovesandpersonelprotectivegear',
                        'label':'Apparel Gloves and Personel Protective Gear',
                        'children':[]
                    },
                    {
                        'value':'bondingagentsandadhesives',
                        'label':'Bonding Agents and Adhesive',
                        'children':[]
                    },
                    {
                        'value':'consumables',
                        'label':'Consumables',
                        'children':[]
                    },
                    {
                        'value':'endodontics',
                        'label':'Endodontics',
                        'children':[]
                    },
                    {
                        'value':'evacuation',
                        'label':'Evacuation',
                        'children':[]
                    },
                    {
                        'value':'finishingandpolishing',
                        'label':'Finishing and Polishing',
                        'children':[]
                    },
                    {
                        'value':'implantsandsurgicalsupplies',
                        'label':'Implants and Surgical Supplies',
                        'children':[]
                    },
                    {
                        'value':'imprsssionmaterialandaccessories',
                        'label':'Impression Material and Accessories',
                        'children':[]
                    },
                    {
                        'value':'infectioncontrol',
                        'label':'Infection Control',
                        'children':[]
                    },
                    {
                        'value':'handpiecesandinstruments',
                        'label':'Handpieces and Instruments',
                        'children':[]
                    },
                    {
                        'value':'labmaterialandsmallequipmet',
                        'label':'Lab Material and Small Equipment',
                        'children':[]
                    },
                    {
                        'value':'oralhygieneandpreventivecare',
                        'label':'Oral Hygiene and Preventive Care',
                        'children':[]
                    },
                    {
                        'value':'orthodonticsupplies',
                        'label':'Orthodontic Supplies',
                        'children':[]
                    },
                    {
                        'value':'radiologyanddiagnosticimaging',
                        'label':'Radiology and Diagnostic Imaging',
                        'children':[]
                    },
                    {
                        'value':'recordkeepingandlabels',
                        'label':'Record Keeping and Labels',
                        'children':[]
                    },
                    {
                        'value':'treatmentroomfurnitureandlighting',
                        'label':'Treatment Room Furniture and Lighting',
                        'children':[]
                    },
                    {
                        'value':'watertreatmentandequipment',
                        'label':'Water Treatment and Equipment',
                        'children':[]
                    }
                ]
            },
            {
                'value':'professionalmedicalsupplies',
                'label':'Professional Medical Supplies',
                'children':[
                    {
                        'value':'apparel',
                        'label':'APparel',
                        'children':[]
                    },
                    {
                        'value':'diagnosticmedicalequipment',
                        'label':'Diagnostic Medical Equipment',
                        'children':[]
                    },
                    {
                        'value':'examinationsuppliesandconsumables',
                        'label':'Examination Supplies and Consumables',
                        'children':[]
                    },
                    {
                        'value':'fluidadministrationandcollection',
                        'label':'Fluid administration and Collection',
                        'children':[]
                    },
                    {
                        'value':'furnitureandpatienttransport',
                        'label':'Furniture and Patient Transport',
                        'children':[]
                    },
                    {
                        'value':'incontienceandsurgicaltools',
                        'label':'Incontience and Surgical Tools',
                        'children':[]
                    },
                    {
                        'value':'labsupplies',
                        'label':'Lab Supplies',
                        'children':[]
                    },
                    {
                        'value':'occupationalandphysical',
                        'label':'Occupational and Physical',
                        'children':[]
                    },
                    {
                        'value':'therapyaids',
                        'label':'Therapy Aids',
                        'children':[]
                    },
                    {
                        'value':'patientmonitoringequipment',
                        'label':'Patient Monitoring Equipment',
                        'children':[]
                    },
                    {
                        'value':'patienttreatmentequipment',
                        'label':'Patient Treatment Equipment',
                        'children':[]
                    },
                    {
                        'value':'radiologyandimaging',
                        'label':'Radiology and Imaging',
                        'children':[]
                    },
                    {
                        'value':'recordkeepingandlabels',
                        'label':'Recordkeeping and Labels',
                        'children':[]
                    },
                    {
                        'value':'respiratoryandanesthesiaequipment',
                        'label':'Respiratory and Anesthesia Equipment',
                        'children':[]
                    },
                    {
                        'value':'sterilizationandinfectionprevenion',
                        'label':'Sterilization and Infection Prevention',
                        'children':[]
                    },
                    {
                        'value':'surgicalequipment',
                        'label':'Surgical Equipment',
                        'children':[]
                    },
                    {
                        'value':'surgicalsupplies',
                        'label':'Surgical Supplies',
                        'children':[]
                    },
                    {
                        'value':'woundcareanddressings',
                        'label':'Wound Care and Dressings',
                        'children':[]
                    }
                ]
            },
            {
                'value':'rawmaterials',
                'label':'Raw Materials',
                'children':[
                    {
                        'value':'ceramics,glassandindustrail',
                        'label':'Ceramics, Glass and Industrial',
                        'children':[]
                    },
                    {
                        'value':'gems',
                        'label':'Gems',
                        'children':[]
                    },
                    {
                        'value':'cork',
                        'label':'Cork',
                        'children':[]
                    },
                    {
                        'value':'expandedandperforatedsheets',
                        'label':'Expanded and Perforated Sheets',
                        'children':[]
                    },
                    {
                        'value':'fabrics,fibersandtextiles',
                        'label':'Fabrics, Fibers and Textile',
                        'children':[]
                    },
                    {
                        'value':'floorgrating',
                        'label':'Floor Grating',
                        'children':[]
                    },
                    {
                        'value':'foams',
                        'label':'Foams',
                        'children':[]
                    },
                    {
                        'value':'graphite',
                        'label':'Graphite',
                        'children':[]
                    },
                    {
                        'value':'industrialwire',
                        'label':'Industrial Wire',
                        'children':[]
                    },
                    {
                        'value':'laminatesandcomposites',
                        'label':'Laminates and Composites',
                        'children':[]
                    },
                    {
                        'value':'meshandwirecloth',
                        'label':'Mesh and Wire Cloth',
                        'children':[]
                    },
                    {
                        'value':'metalandalloys',
                        'label':'Metal and Alloys',
                        'children':[]
                    },
                    {
                        'value':'plastics',
                        'label':'Plastics',
                        'children':[]
                    },
                    {
                        'value':'rubber',
                        'label':'Rubber',
                        'children':[]
                    },
                    {
                        'value':'shimsandshimstock',
                        'label':'Shims and Shim Stock',
                        'children':[]
                    }]
            },
            {
                'value':'retailstorefixturesandequipment',
                'label':'Retail Store Fixtures and Equipment',
                'children':[
                    {
                        'value':'anti-theftequipment',
                        'label':'Anti-Theft Equipment',
                        'children':[]
                    },
                    {
                        'value':'clothingforms',
                        'label':'Clothing Forms',
                        'children':[]
                    },
                    {
                        'value':'mannequins',
                        'label':'Mannequins',
                        'children':[]
                    },
                    {
                        'value':'point-of-saleequipmentandaccessories',
                        'label':'Point-of-Sale(POS) Equipment and Accessories',
                        'children':[]
                    },
                    {
                        'value':'pricingsupplies',
                        'label':'Pricing Supplies',
                        'children':[]
                    },
                    {
                        'value':'retailbagsandboxes',
                        'label':'Retail Bags and Boxes',
                        'children':[]
                    },
                    {
                        'value':'retaildisplaysandracks',
                        'label':'Retail Display and Racks',
                        'children':[]
                    },
                    {
                        'value':'retailshelvingandwalldisplay',
                        'label':'retail Shelving and Wall Display',
                        'children':[]
                    },
                    {
                        'value':'shoppingbasketsandcarts',
                        'label':'Shopping Baskets and Carts',
                        'children':[]
                    },
                    {
                        'value':'storesignanddisplays',
                        'label':'Store Sign and Displays',
                        'children':[]
                    }
                ]
            },
            {
                'value':'robotics',
                'label':'Robotics',
                'children':[
                    {
                        'value':'roboticspartsandaccessories',
                        'label':'Robotics Part and Accessories',
                        'children':[]
                    },
                    {
                        'value':'securityandsurveillancerobots',
                        'label':'Security and Surveillace Robots',
                        'children':[]
                    },
                    {
                        'value':'unmannesaerialvehicles',
                        'label':'Unmanned Aerial Vehicles(UAVs)',
                        'children':[]
                    }]
            },
            {
                'value':'scienceeducation',
                'label':'Science Education',
                'children':[
                    {
                        'value':'chartsandposters',
                        'label':'Charts and Posters',
                        'children':[]
                    },
                    {
                        'value':'earlylearningclassroomsupplies',
                        'label':'Early Learning Classroom Supplies',
                        'children':[]
                    },
                    {
                        'value':'fossils',
                        'label':'Fossils',
                        'children':[]
                    },
                    {
                        'value':'insectsandinsectkits',
                        'label':'Insects and Insect Kits',
                        'children':[]
                    },
                    {
                        'value':'magnetsandmagnetismslides',
                        'label':'Magnets and Magnetism Slides',
                        'children':[]
                    },
                    {
                        'value':'measurementkits',
                        'label':'Measurement Kits',
                        'children':[]
                    },
                    {
                        'value':'microscopes',
                        'label':'Microscopes',
                        'children':[]
                    },
                    {
                        'value':'modelanimals',
                        'label':'Model Animals',
                        'children':[]
                    },
                    {
                        'value':'optics',
                        'label':'Optics',
                        'children':[]
                    },
                    {
                        'value':'scalesandblances',
                        'label':'Scales and Blances',
                        'children':[]
                    },
                    {
                        'value':'specimens',
                        'label':'Specimens',
                        'children':[]
                    },
                    {
                        'value':'telescopes',
                        'label':'Telescopes',
                        'children':[]
                    }
                ]
            },
            {
                'value':'tapesadhesivesandsealants',
                'label':'Tapes, Adhesives and Sealants',
                'children':[
                    {
                        'value':'adhesiveaccelerators',
                        'label':'Adhesive Accelerators',
                        'children':[]
                    },
                    {
                        'value':'adhesivedispensersandaccessories',
                        'label':'Adhesive Dispensers and Accessories',
                        'children':[]
                    },
                    {
                        'value':'adhesivedots',
                        'label':'Adhesive Dots',
                        'children':[]
                    },
                    {
                        'value':'adhesiveprimers',
                        'label':'Adhesive Primers',
                        'children':[]
                    },
                    {
                        'value':'adhesivetapes',
                        'label':'Adhesive Tapes',
                        'children':[]
                    },
                    {
                        'value':'anti-seizes',
                        'label':'Anti-Seizes',
                        'children':[]
                    },
                    {
                        'value':'caulks',
                        'label':'Caulks',
                        'children':[]
                    },
                    {
                        'value':'Coatings',
                        'label':'Coating',
                        'children':[]
                    },
                    {
                        'value':'contactcements',
                        'label':'Contact Cements',
                        'children':[]
                    },
                    {
                        'value':'cyanoacrylateadhesives',
                        'label':'Cyanoacrylate Adhesives',
                        'children':[]
                    },
                    {
                        'value':'epoxyadhesives',
                        'label':'Epoxy Adhesives',
                        'children':[]
                    },
                    {
                        'value':'hotgluesticks',
                        'label':'Hot Glue Sticks',
                        'children':[]
                    },
                    {
                        'value':'industrialadhesives',
                        'label':'Industrial Adhesives',
                        'children':[]
                    },
                    {
                        'value':'industriallubricants',
                        'label':'Industrial Lubricants',
                        'children':[]
                    },
                    {
                        'value':'industrialsealants',
                        'label':'Industrial Sealants',
                        'children':[]
                    },
                    {
                        'value':'retainingcompounds',
                        'label':'Retaining Compounds',
                        'children':[]
                    },
                    {
                        'value':'siliconeadhesives',
                        'label':'Silicone Ahesives',
                        'children':[]
                    }
                ]
            },
            {
                'value':'testmeasureandinspect',
                'label':'Test, Measure and Inspect',
                'children':[
                    {
                        'value':'airflowsandairquality',
                        'label':'Air Flows and Air Quality',
                        'children':[]
                    },
                    {
                        'value':'calibration',
                        'label':'Calibration',
                        'children':[]
                    },
                    {
                        'value':'dimensionalmeasurement',
                        'label':'Dimensional Measurement',
                        'children':[]
                    },
                    {
                        'value':'electricaltesting',
                        'label':'Electrical Testing',
                        'children':[]
                    },
                    {
                        'value':'inspectionandanalysis',
                        'label':'Inspection and Analysis',
                        'children':[]
                    },
                    {
                        'value':'lightmeasurement',
                        'label':'Light Measurement',
                        'children':[]
                    },
                    {
                        'value':'motion,speedandforce',
                        'label':'Motion, Speed and Force',
                        'children':[]
                    },
                    {
                        'value':'networkandcabletesters',
                        'label':'Network and Cable Testers',
                        'children':[]
                    },
                    {
                        'value':'pressureandvaccum',
                        'label':'Pressure and Vaccum',
                        'children':[]
                    },
                    {
                        'value':'recordersanddataacquisiton',
                        'label':'Recorders and Data Acquisition',
                        'children':[]
                    },
                    {
                        'value':'scalesandblances',
                        'label':'Scales and Blances',
                        'children':[]
                    },
                    {
                        'value':'sensors',
                        'label':'Sensors',
                        'children':[]
                    },
                    {
                        'value':'soundandnoisemeters',
                        'label':'Sound and Noise Meters',
                        'children':[]
                    },
                    {
                        'value':'substanceanalysisinstrumentation',
                        'label':'Substance Analysis Instrumentation',
                        'children':[]
                    },
                    {
                        'value':'surfaceandhardnesstesting',
                        'label':'Surface and Hardness Testing',
                        'children':[]
                    },
                    {
                        'value':'tempratureandhumidity',
                        'label':'Temprature and Humidity',
                        'children':[]
                    }
                ]
            }
        ]

    },
    {
        'value':'luggage',
        'label':'Luggage',
        'children':[
            {
                'value': 'carryons',
                'label': 'Carry-ons',
                'children': []
            },
            {
                'value': 'backpacks',
                'label': 'Backpacks',
                'children': [
                    {
                        'value':'casualdaypacks',
                        'label':'Casual Daypacks',
                        'children':[]
                    },
                    {
                        'value':'hikingdaypacks',
                        'label':'Hiking Daypacks',
                        'children':[]
                    },
                    {
                        'value':'kidsbackpacks',
                        'label':'Kids Backpacks',
                        'children':[]
                    },
                    {
                        'value':'laptopbackpacks',
                        'label':'Laptop Backpacks',
                        'children':[]
                    }]
            },
            {
                'value':'garmentbags',
                'label':'Garment Bags',
                'children':[]
            },
            {
                'value':'traveltotes',
                'label':'Travel Totes',
                'children':[]
            },
            {
                'value':'laptopbags',
                'label':'Laptop Bags',
                'children':[
                    {
                        'value':'backpacks',
                        'label':'Backpacks',
                        'children':[]
                    },
                    {
                        'value':'breifcases',
                        'label':'Breifcases',
                        'children':[]
                    },
                    {
                        'value':'messengersandshoulderbags',
                        'label':'Messenger & Shoulder Bags',
                        'children':[]
                    }]
            },
            {
                'value':'suitcases',
                'label':'Suitcases',
                'children':[]
            },
            {
                'value':'kidsluggage',
                'label':'Kids\' Luggage',
                'children':[]
            },
            {
                'value':'messengerbags',
                'label':'Messenger Bags',
                'children':[]
            },
            {
                'value':'umbrellas',
                'label':'Umbrellas',
                'children':[
                    {
                        'value':'stickumbrellas',
                        'label':'Stick Umbrellas',
                        'children':[]
                    },
                    {
                        'value':'foldingumbrellas',
                        'label':'Folding Umbrellas',
                        'children':[]
                    }]
            },
            {
                'value':'duffles',
                'label':'Duffles',
                'children':[]
            },
            {
                'value':'travelaccessories',
                'label':'Travel Accessories',
                'children':[
                    {
                        'value':'cosmeticscases',
                        'label':'Cosmetics Cases',
                        'children':[]
                    },
                    {
                        'value':'luggagecarts',
                        'label':'Luggage Carts',
                        'children':[]
                    },
                    {
                        'value':'luggagelocks',
                        'label':'Luggage Locks',
                        'children':[]
                    },
                    {
                        'value':'luggagescales',
                        'label':'Luggage Scales',
                        'children':[]
                    },
                    {
                        'value':'luggagestraps',
                        'label':'Luggage Straps',
                        'children':[]
                    },
                    {
                        'value':'luggagetagsandhandlewraps',
                        'label':'Luggage Tags and Handle Wraps',
                        'children':[]
                    },
                    {
                        'value':'packingorganizers',
                        'label':'Packing Orgnanizers',
                        'children':[]
                    },
                    {
                        'value':'passportcovers',
                        'label':'Passport Covers',
                        'children':[]
                    },
                    {
                        'value':'passportwallets',
                        'label':'Passport Wallets',
                        'children':[]
                    },
                    {
                        'value':'shoebags',
                        'label':'Shoe Bags',
                        'children':[]
                    },
                    {
                        'value':'toiletrybags',
                        'label':'Toiletry Bags',
                        'children':[]
                    },
                    {
                        'value':'travelbottlesandcontainers',
                        'label':'Travel Bottles and Containers',
                        'children':[]
                    },
                    {
                        'value':'travelwallets',
                        'label':'Travel Wallets',
                        'children':[]
                    }]
            }

        ]

    }

        

     
    
];