export const SERVER_ADDRESS = 'http://127.0.0.1:8000';
export const LOGIN_API_URL = SERVER_ADDRESS + '/api/verifyUser';
export const ADD_VENDOR_API_URL = SERVER_ADDRESS + '/api/user';
export const ADD_PRODUCT_API_URL = SERVER_ADDRESS + '/api/product';
export const ADD_PRODUCT_MODAL_API_URL = SERVER_ADDRESS + '/api/storeViaModal';
export const GET_VENDORS_API_URL = SERVER_ADDRESS + '/api/user';
export const GET_API_STORES_API_URL = SERVER_ADDRESS + '/api/getApiStores';
export const SHARAF_DG_API_URL = SERVER_ADDRESS + '/api/getProductsFromSharafDGAPI';
export const IMAGE_PATH = SERVER_ADDRESS + '/images/';
export const API_URL = 'http://dealstimer-admin.toortechnologies.com/test/index.php';

export const TYPE_CATEGORY_VIEW = [
    {
        type: 'fashion',
        typeName: 'Fashion',
        category: ['watches', 'eyewear', 'womenbagsandaccessories', 'watchesbybrands', 'sunglassesbybrands', 'highlights'],
        categoryName: ['Watches', 'Eyewear', 'Women Bags & Accessories', 'Watches By Brands', 'Sunglasses By Brands', 'Highlights']
    }, {
        type: 'mobiles',
        typeName: 'Mobiles',
        category: ['smartphones', 'tablets', 'accessories', 'bybrands', 'wearables'],
        categoryName: ['Smartphones', 'Tablets', 'Accessories', 'By Brands', 'Wearables']
    }, {
        type: 'electronics',
        typeName: 'Electronics',
        category: ['televisions', 'laptops', 'cameras', 'videogames', 'homeaudioandvideo', 'itequipment', 'camcorders'],
        categoryName: ['Televisions', 'Laptops', 'Cameras', 'Videogames', 'Home Audio & Video', 'IT Equipment', 'Camcorders']
    }, {
        type: 'homeandkitchen',
        typeName: 'Home & Kitchen',
        category: ['bedding', 'homedecor', 'kitchenutensils', 'homeapplicances', 'furniture', 'household', 'kitchenapplicances', 'toolsandhomeimprovement'],
        categoryName: ['Bedding', 'Homedecor', 'Kitchen Utensils', 'Home Applicances', 'Furniture', 'Household', 'Kitchen Applicances', 'Tools & Home Improvement']
    }, {
        type: 'beautyandfragrances',
        typeName: 'Beauty & Fragrances',
        category: ['makeup', 'fragrances', 'groomingappliances', 'healthandfitness', 'fragrancesbybrands', 'appliancesbybrands', 'bathandbody'],
        categoryName: ['Makeup', 'Fragrances', 'Grooming Appliances', 'Health & Fitness', 'Fragrances By Brands', 'Appliances By Brands', 'Bath & Body']
    }, {
        type: 'stationery',
        typeName: 'Stationery',
        category: ['books', 'officeandschoolsupplies', 'gifting'],
        categoryName: ['Books', 'Office & School Supplies', 'Gifting']
    }
];

export const CATEGORY_SUBCATEGORY_VIEW = [
    {
        category: 'watches',
        subCategory: ['womenswatchs', 'menswatchs', 'unisexwatches'],
        subCategoryName: ['Women\'s Watches', 'Men\'s Watches', 'Unisex Watches']
    },
    {
        category: 'eyewear',
        subCategory: ['womenssunglasses', 'menssunglasses', 'frames', 'contactlenses'],
        subCategoryName: ['Women\'s Sunglasses', 'Men\'s Sunglasses', 'Frames', 'Contact Lenses']
    },
    {
        category: 'womenbagsandaccessories',
        subCategory: ['handbags', 'slingbags', 'walletsandclutches', 'cardholders', 'backpacks', 'jewellery'],
        subCategoryName: ['Hand Bags', 'Sling Bags', 'Wallets & Clutches', 'Card Holders', 'Backpacks', 'Jewellery']
    },
    {
        category: 'watchesbybrands',
        subCategory: ['gshockandbabyg', 'fossil', 'diesel', 'rivolibrands', 'casio'],
        subCategoryName: ['Gshock & Baby G', 'Fossil', 'Diesel', 'Rivoli Brands', 'Casio']
    },
    {
        category: 'sunglassesbybrands',
        subCategory: ['rayban', 'guess', 'diesel', 'rovertocavalli', 'swarovski', 'timberland', 'gant'],
        subCategoryName: ['Ray-Ban', 'Guess', 'Diesel', 'Roberto Cavalli', 'Swarovski', 'Timberland', 'Gant']
    },
    {
        category: 'highlights',
        subCategory: ['mensclothing', 'womensclothing', 'luggageandtravelessentials', 'fragrances', 'beauty'],
        subCategoryName: ['Men\'s Clothing', 'Women\'s Clothing', 'Luggage & Travel Essentials', 'Fragrances', 'Beauty']
    },
    {
        category: 'smartphones',
        subCategory: ['iphone11and11pro', 'samsunggalaxynote10', 'samsunggalaxys10', 'iphonexsandiphonexsmax', 'oporeno', 'huaweip30series', 'iphonexr', 'iphonex', 'iphone8and8plus', 'midrangesmartphones'],
        subCategoryName: ['Iphone 11 & 11 Pro', 'Samsung Galaxy Note 10', 'Samsung Galaxy S10', 'Iphone XS & Iphone XS Max', 'Oppo Reno', 'Huawei P30 Series', 'Iphone XR', 'Iphone X', 'Iphone 8 & 8 Plus', 'Mid-Range Smartphones']
    },
    {
        category: 'tablets',
        subCategory: ['thenewipadpro', 'ipads', 'samsungtabs', 'lenovo', 'microsoftsurfacepro', 'huaweimediapad'],
        subCategoryName: ['The New iPad Pro', 'iPads', 'Samsung Tabs', 'Lenovo', 'Microsoft Surface Pro', 'Huawei MediaPad']
    },
    {
        category: 'accessories',
        subCategory: ['usbcconnectorsandcables', 'screenprotectors', 'powerbanks', 'memorycards', 'earphonesandheadphones', 'more'],
        subCategoryName: ['USB C Connectors', 'Screen Protectors', 'Power Banks', 'Memory Cards', 'Earphones & Headphones', 'More']
    },
    {
        category: 'bybrands',
        subCategory: ['iphones', 'samsung', 'huawei', 'honor', 'nokia'],
        subCategoryName: ['iPhones', 'Samsung', 'Huawei', 'Honor', 'Nokia']
    },
    {
        category: 'wearables',
        subCategory: ['applewatch', 'samsungwatch', 'huaweiwatch', 'fitnesstrackers', 'smartwatches', 'budgetsmartwatches'],
        subCategoryName: ['Apple Watch', 'Samsung Watch', 'Huawei Watch', 'Fitness Trackers', 'Smartwatches', 'Budget Smartwatches']
    },
    {
        category: 'televisions',
        subCategory: ['8ktelevisions', '4kuhd', 'oledtvs', '65inchandabove', '55inchand65inch'],
        subCategoryName: ['8K Televisions', '4K UHD', 'OLED TV\'s', '65\' and above', '55\' to 65\'']
    },
    {
        category: 'laptops',
        subCategory: ['macbook', 'microsoftsurface', 'gaminglaptops', 'modernlaptops', 'hp', 'dell', 'lenovo', 'asus', 'acer'],
        subCategoryName: ['Macbook', 'Microsoft Surface', 'Gaming Laptops', 'Modern Laptops', 'HP', 'Dell', 'Lenovo', 'Asus', 'Acer']
    },
    {
        category: 'cameras',
        subCategory: ['dslrs', 'digitalcameras', 'instantcameras', 'securityandsurveillance', 'accessories', 'cameralenses', 'camerabags'],
        subCategoryName: ['DSLRs', 'Digital Cameras', 'Instant Cameras', 'Security and Surveillance', 'Accessories', 'Camera Lenses', 'Camera Bags']
    },
    {
        category: 'videogames',
        subCategory: ['ps4games', 'xboxonegames', 'allgames', 'consoles', 'gameenhancers'],
        subCategoryName: ['PS4 Games', 'Xbox One Games', 'All Games', 'Consoles', 'Game Enhancers']
    },
    {
        category: 'homeaudioandvideo',
        subCategory: ['speakers', 'soundbars', 'hometheatres', 'projectors', 'dvdandblurayplayers', 'noisecancellationheadphones', 'tvaccessories'],
        subCategoryName: ['Speakers', 'Sound Bars', 'Home Theatres', 'Projectors', 'DVD and Blu-ray players', 'Noise Cancellation Headphones', 'TV Accessories']
    },
    {
        category: 'itequipment',
        subCategory: ['printersandinks', 'monitors', 'routers', 'software', 'harddrives'],
        subCategoryName: ['Printers & Inks', 'Monitors', 'Routers', 'Software', 'Hard Drives']
    },
    {
        category: 'camcorders',
        subCategory: ['actioncamcorders', 'camcorders'],
        subCategoryName: ['Action Camcorders', 'Camcorders']
    },
    {
        category: 'bedding',
        subCategory: ['bedsheets', 'comforters', 'blanketsandquits', 'duvetsandcovers', 'mattressandtoppers'],
        subCategoryName: ['Bedsheets', 'Comforters', 'Blankets & Quits', 'Buvets & Covers', 'Mattress & Toppers']
    },
    {
        category: 'homedecor',
        subCategory: ['carpets', 'lighting', 'vases', 'candlesandhomefragrances', 'crockeryanddrinkware', 'freshflowersandliveplants', 'occasionalgifts'],
        subCategoryName: ['Carpets', 'Lighting', 'Vases', 'Candles & Home Fragrances', 'Crockery & Drinkware', 'Fresh Flowers & Live Plants', 'Occasional Gifts']
    },
    {
        category: 'kitchenutensils',
        subCategory: ['cookersandcookingpans', 'cookingsets', 'cutleryandaccessories', 'racks', 'combooffers', 'bakeware', 'containersandstorage'],
        subCategoryName: ['Cookers & Cooking Pans', 'Cooking Sets', 'Cutlery & Accessories', 'Racks', 'Combo Offers', 'Bakeware', 'Containers and Storage']
    },
    {
        category: 'homeapplicances',
        subCategory: ['cookingranges', 'builtinappliances', 'refrigerators', 'washingmachines', 'airconditioners', 'dishwashers', 'irons', 'vacuumcleaners', 'airpurifiers', 'fans'],
        subCategoryName: ['Cooking Rangers', 'Built In Appliances', 'Refrigerators', 'Washing Machines', 'Air Conditioners', 'Dish Washers', 'Irons', 'Vacuum Cleaners', 'Air Purifiers', 'Fans']
    },
    {
        category: 'furniture',
        subCategory: ['bedsandbedsets', 'spacesavers', 'wardrobes', 'shoeracks', 'cabinetsanddisplayunits', 'tvunitsshelvesandcabinets', 'diningandkitchenstorageunits', 'sofas', 'dressingtableandmirrorcabinets'],
        subCategoryName: ['Beds and Bedsets', 'Space Savers', 'Wardrobes', 'Showracks', 'Cabinets and Display Units', 'TV units Shelves and Cabinets', 'Dining and Kitchen Storage Units', 'Sofas', 'Dressing Table and Mirror Cabinets']
    },
    {
        category: 'household',
        subCategory: ['vacuumcleaners', 'mops', 'dustbins', 'cleaningaccessories', 'airfreshners', 'dishwashingliquids', 'detergents', 'allpurposecleaners', 'supermarket'],
        subCategoryName: ['Vacuum Cleaners', 'Mops', 'Dustbins', 'Cleaning Accessories', 'Air Freshners', 'Dishwashing Liquids', 'Detergents', 'All Purpose Cleaners', 'Supermarket']
    },
    {
        category: 'kitchenapplicances',
        subCategory: ['microwavesandovens', 'foodprocessors', 'electricovens', 'kitchenmachines', 'mixersblenderschoppersandslicers', 'kettlesandtoasters', 'fryers', 'juicers', 'waterdispensers', 'coffeemachines', 'allkitchenessentials'],
        subCategoryName: ['Microwaves & Ovens', 'Food Processors', 'Electric Ovens', 'Kitchen Machines', 'Mixers, Blenders, Choppers & Slicers', 'Kettles & Toasters', 'Fryers', 'Juicers', 'Water Dispensers', 'Coffee Machines', 'All Kitchen Essentials']
    },
    {
        category: 'toolsandhomeimprovement',
        subCategory: ['generators', 'drillsandpowertools', 'gardeningtools', 'homeandfurniturepainttools'],
        subCategoryName: ['Generators', 'Drills & Power Tools', 'Gardening Tools', 'Home & Furniture Paint Tools']
    },
    {
        category: 'makeup',
        subCategory: ['lipsticks', 'nailpolish', 'eyelinersandkajal', 'mascara', 'contactlenses', 'eyeshadow', 'blushesandconcealers', 'foundations', 'makeupbrushesandtools', 'coffrets'],
        subCategoryName: ['Lipsticks', 'Nail Polish', 'Eye Liners & Kajal', 'Mascara', 'Contact Lenses', 'Eyeshadow', 'Blushes & Concealers', 'Foundations', 'Makeup Brushes & Tools', 'Coffrets']
    },
    {
        category: 'fragrances',
        subCategory: ['womensperfumes', 'mensperfumes', 'arabicperfumes', 'giftsets', 'perfumesunderaed99', 'luxuryfragrances'],
        subCategoryName: ['Women\'s Perfumes', 'Men\'s Perfumes', 'Arabic Perfumes', 'Gift Sets', 'Perfumes Under Aed 99', 'Luxury Fragrances']
    },
    {
        category: 'groomingappliances',
        subCategory: ['shaversandtrimmers', 'hairclippers', 'epilators', 'hairstraightnersanddryers', 'hairstylers'],
        subCategoryName: ['Shavers & Trimmers', 'Hair Clippers', 'Epilators', 'Hair Straighteners and Dryers', 'Hair Stylers']
    },
    {
        category: 'healthandfitness',
        subCategory: ['weighingscales', 'massagers', 'fitnessequipment', 'smartwatches', 'treadmills', 'multivitaminsandnutrition', 'contraceptivesandwellness', 'pregnancyandbabyessentials', 'allwellnessessentials'],
        subCategoryName: ['Weighing Scales', 'Massagers', 'Fitness Equipment', 'Smartwatches', 'Treadmills', 'Multi-Vitamins & Nutrition', 'Contraceptives & Wellness', 'Pregnancy & Baby Essentials', 'All Wellness Essentials']
    },
    {
        category: 'fragrancesbybrands',
        subCategory: ['chanel', 'bvlgari', 'burberry', 'hugoboss', 'davidoff', 'ajmal', 'swissarabian', 'louiscardin'],
        subCategoryName: ['Chanel', 'Bvlgari', 'Burberry', 'Hugo Boss', 'Davidoff', 'Ajmal', 'Swiss Arabian', 'Louis Cardin']
    },
    {
        category: 'appliancesbybrands',
        subCategory: ['philips', 'eklasse', 'braun', 'supergeneral', 'babyliss', 'dyson', 'moser'],
        subCategoryName: ['Philips', 'Eklasse', 'Braun', 'Super General', 'Babyliss', 'Dyson', 'Moser']
    },
    {
        category: 'bathandbody',
        subCategory: ['shampoosandhaircare', 'showergel', 'creamsandlotion', 'facewashandscrubs', 'dentalhygiene'],
        subCategoryName: ['Shampoos & Hair Care', 'Shower Gel', 'Creams & Lotion', 'Face Wash & Scribs', 'Dental Hygiene']
    },
    {
        category: 'books',
        subCategory: ['comicsandgraphicnovels', 'educationlearning', 'literatureandfiction', 'lifestyleandnonfiction', 'childrensbooks', 'businessandtradebooks', 'religiousbooks', 'biographyandautobiography'],
        subCategoryName: ['Comics & Graphic Novels', 'Education Learning', 'Literature & Fiction', 'Lifestyle & Non Fiction', 'Children\'s Books', 'Business & Trade Books', 'Religious Books', 'Biography & Auto Biography']
    },
    {
        category: 'officeandschoolsupplies',
        subCategory: ['penandpencil', 'journalsandnotebooks', 'printersacc', 'bagsandbackpacks'],
        subCategoryName: ['Pen & Pencil', 'Journals & Notebooks', 'Printers Acc', 'Bags & Backpacks']
    },
    {
        category: 'gifting',
        subCategory: ['novelty', 'giftssets', 'flowerbouquet', 'vases', 'mugs', 'travelaccessories', 'casesandwallets', 'perfumesgiftssets', 'watchesgiftssets'],
        subCategoryName: ['Novelty', 'Gifts Sets', 'Flower Bouquet', 'Vases', 'Mugs', 'Travel Accessories', 'Cases & Wallets', 'Perfumes Gifts Sets', 'Watches Gifts Sets']
    },
];




export const CPS_TYPE_CATEGORY_VIEW = [
    {
        type: 'womensfashion',
        typeName: 'Women\'s Fasion',
        category: ['womensclothing', 'specialtyfit', 'sportsandactivewear', 'womenstops', 'womensbottom', 'lingerie','shoes','winterwear','bagsandwallets','travelandluggage','fashionaccessories','beauty','topbrands'],
        categoryName: ['Women\s Cloting', 'Specialty Fit', 'Sports & Activewear', 'Women\s Tops', 'Women\s Bottoms', 'Lingerie','Shoes','Winterwear','Bags & Wallets','Travel & Luggage','Fashion Accessories','Beauty','Top Brands']
    },
    {
        type:'mensfashion',
        typeName:'Men\s Fasion',
        category:['mensclothing','tops','bottoms','winterwear','sportsandactivewear','sleepwear','innerwear','plussizeclothing','shoes','bagsandwallets','travelandluggage','fashionaccessories','mensgrooming','topbrands','shopbycharacter'],
        categoryName:['Men\s Clothing','Tops','Bottoms','Winterwear','Sports & Activewear','Sleepwear','Innerwear','Plus Size Clothing','Shoes','Bags & Wallets','Travel & Luggage','Fashion Accessories','Men\s Grooming','Top Brans','Shop by Character']
    },
    {
        type:'kidsfashion',
        typeName:'Kid\s Fasion',
        category:['girlsclothing(4+years)','girlsfashionaccessories','boysclothing(4+years)','boysfasionaccessories','girlsshoes(4+years)','boysshoes(4+years)','backtoschool','stationery','toysandgames','topbrands'],
        categoryName:['Girls Clothing(4+ Years)','Girls Fasion Accessories','Boys\ Clothing(4+ Years)','Boys\ Fasion Accessories','Girls\ Shoes(4+ Years)','Boys\s Shoes(4+ Years)','Back To School','Stationery','Toys & Games','Top Brands']
    },
    {
        type:'babyandtoys',
        typeName:'Baby & Tosy',
        category:['travelgear','nurseryandbedding','diapersandwipes','feeding','healthandsafety','babygirlsclothing','babyboysclothing','babygirlsfootwear','babyboysfootwear','toysandgames','topbrands','babyaccessories','moms'],
        categoryName:['Travel Gear','Nursery & Bedding','Diapers & Wipes','Feeding','Health & Safety','Baby Girl\s Clothing','Baby Boys\ Clothing','Baby Girls\ Footwear','Baby Boy\s Footwear','Toys & Games','Top Brands','Baby Accessories','Moms']
    },
    {
        type:'beauty',
        typeName:'Beauty',
        category:['face','eyes','lips','nails','mackuptools','fragrances','bathandbody','make-upaccessories','mensgrooming','haircare','exlusivebrands','topsbrands'],
        categoryName:['Face','Eyes','Lips','Nails','Makeup Tools','Franrances','Bath & Body','Make-up Accessories','Men\s Grooming','Hair Care','Exclusive Brands','Top Brands']
    },
    {
        type:'homeandliving',
        typeName:'Home & Living',
        category:['homefurnishings','windowtreatments','walldecor','homefurniture','diningandserving','homedecor','lighting','homefragrance','bathdecor','shopbyroom','schoolessentials','stationery','gadgets'],
        categoryName:['Home Furnishings','Window Treatments','Wall Decor','Home Furniture','Dining & Serving','Home Decor','Lighting','Home Fragrance','Bath Decor','Shop by Room','School Essentials','Stationery','Gadgets']
    } 

]

export const CPS_CATEGORY_SUBCATEGORY_VIEW = [
    {
        category: 'womensclothing',
        subCategory: ['dresses', 'tops', 'jumpsuits','bottoms','sportsandactivewear','sleepwear','lingerieandunderwear','winterwear'],
        subCategoryName: ['Dresses', 'Tops', 'Jumpsuits & Playsuits','Bottoms','Sports & Activewear','Sleepwear','Lingerie & Underwear','Winterwear']
    },
    {
        category: 'specialtyfit',
        subCategory: ['plussizeclothing','maternityclothing'],
        subCategoryName:['Plus Size Clothing','Maternity Clothing']
    },
    {
        category:'sportsandactivewear',
        subCategory:['sportsbras','t-shirtsandvests','bottoms','joggers'],
        subCategoryName:['Sports Bar','T-Shirts & Vests','Bottoms','Joggers']
    },
    {
        category:'womenstops',
        subCategory:['shirtsandblouses','t-shirtsandpolos','tunicsandkimonos','hoodiesandsweatshirts','vestsandcamisoles'],
        subCategoryName:['Shirts & Blouses','T-Shirts & Polos','Tunics & Kimonos','Hoodies & Sweatshirts','Vests & Camisoles']
    },
    {
        category:'womensbottoms',
        subCategory:['pantsandchinos','jeans','leggingsandjeggings','shorts','skirts','joggers'],
        subCategoryName:['Pants & Chinos','Jeans','Leggings & jeggings','Shorts','Skirts','Joggers']
    },
    {
        category:'lingerie',
        subCategory:['bra','panties','sets'],
        subCategoryName:['Bra','Panties','Sets']
    },
    {
        category:'shoes',
        subCategory:['sportsshoes','casualshoes','heels','boots','flats','flipflops','ballerina','bedroomslippers'],
        subCategoryName:['Sports Shoes','Casual Shoes','Heels','Boots','Flats','Flip Flops','Ballerina','Bedroom Slippers']
    },
    {
        category:'winterwear',
        subCategory:['cardigansandsweaters','coatsandjackets','hoodiesandsweatshirts'],
        subCategoryName:['Cardigans & Sweaters','Coats & jackets','Hoodies & Sweatshirts']
    },
    {
        category:'bagsandwallets',
        subCategory:['bags','backpacks','wallets'],
        subCategoryName:['Bags','Backpacks','Wallets']
    },
    {
        category:'travelandluggage',
        subCategory:['suitcase','travelaccessories','travelpillow'],
        subCategoryName:['Suitcase','Travel Accessories','TravelPillow']
    },
    {
        category:'fashonaccessories',
        subCategory:['jewellery','scarves','capsandhats','socksandstockings','belts','jewellerystorage'],
        subCategoryName:['Jewellery','Scarves','Caps & Hats','Socks & stockings','Belts','Jewellery Storage']
    },
    {
        category:'beauty',
        subCategory:['makeup','perfumes','haircare','bathandbody'],
        subCategoryName:['Makeup','Perfumes','Hair Care','Bath & Body']
    },
    {
        category:'topbrands',
        subCategory:['2xtrems','elle','kappa','leecooper','missy','paprika','skechers','celeste','sasha','guess','fiorelli'],
        subCategoryName:['2Xtremz','Elle','Kappa','Lee Cooper','Missy','Paprika','Skechers','Celeste','Sasha','Guess','Fiorelli']
    },
    {
        category:'mensclothing',
        subCategory:[''],
        subCategoryName:['']
    },
    {
        category:'tops',
        subCategory:['t-shirts','polos','shirts','hoodiesandsweatshirts'],
        subCategoryName:['T-Shirts','Polos','Shirts','Hoodies & Sweatshirts']
    },
    {
        category:'bottoms',
        subCategory:['jeans','pantsandchinos','joggers','shorts'],
        subCategoryName:['Jeans','Pants & Chinos','Joggers','Shorts']
    },
    {
        category:'winterwear',
        subCategory:['sweatersandpullovers','coatsandjackets','hoodiesandsweatshirts'],
        subCategoryName:['Sweaters & Pullovers','Coats & Jackets','Hoodies 7 Sweatshorts']
    },
    {
        category:'sportsandactivewear',
        subCategory:['t-shirtsandvests','bottoms','jackets'],
        subCategoryName:['T-Shirts & Vests','Bottoms','Jackets']
    },
    {
        category:'sleepwear',
        subCategory:['Boxers','pyjamasets'],
        subCategoryName:['Boxers','Pyjama Sets']
    },
    {
        category:'innerwear',
        subCategory:['underwear','vests'],
        subCategoryName:['Underwear','Vests']
    },
    {
        category:'plussizeclothing',
        subCategory:['tops','bottoms'],
        subCategoryName:['Tops','Bottoms']
    },
    {
        category:'shoes',
        subCategory:['sportsshoes','casualshoes','formalshoes','boots','sandals','flipflops','bedroomslippers'],
        subCategoryName:['Sports Shoes','Casual Shoes','Formal Shoes','Boots','Sandals','Flip Flops','Bedroom Slippers']
    },
    {
        category:'bagsandwallets',
        subCategory:['messengerbags','backpacks','wallets'],
        subCategoryName:['Messenger bags','Backpacks','Wallets']
    },
    {
        category:'travelandluggage',
        subCategory:['suitcase','travelaccessories','travelpillow'],
        subCategoryName:['Suitcase','Travel Accessories','Travel Pillow']
    },
    {
        category:'fashionaccessories',
        subCategory:['capsandhats','socks','tiesandpocketsquares','jewellery','sunglasses'],
        subCategoryName:['Caps & Hats','Belts','Socks','Ties & Pocket Squares','Jewellery','Sunglasses']
    },
    {
        category:'mensgrooming',
        subCategory:['shaving','haircare'],
        subCategoryName:['Shaving','Hair Care']
    },
    {
        category:'topbrands',
        subCategory:['leecooper','jockey','bossini','kappa','beinghuman','iconic','duchini','skechers','adidas'],
        subCategoryName:['Lee Cooper','Jockey','Bossini','Kappa','Being Human','Iconic','Duchini','Skechers','Adidas']
    },
    {
        category:'shopbycharacter',
        subCategory:[''],
        subCategoryName:['']
    },
    {
        category:'girlsclothing(4+years)',
        subCategory:['tops','dresses','rompersandjumpsuits','bottoms','sets','nightwear','innerwear','winterwear','swimwear'],
        subCategoryName:['Tops','Dresses','Rompers & Jumpsuits','Bottoms','Sets','Nightwear','Innerwear','Winterwear','Swimwear']
    },
    {
        category:'girlsfasionaccessories',
        subCategory:['kidsfasionbags','socks','jewellery','watches','capsandhats','novelties'],
        subCategoryName:['Kids Fasion bags','Socks','Jewellery','Watches','Caps & Hats','Novelties']
    },
    {
        category:'boysclothing(4+years)',
        subCategory:['tops','bottoms','sets','nightwear','winterwear','swimwear'],
        subCategoryName:['Tops','Bottoms','Sets','Nightwear','Winterwear','Swimwear']
    },
    {
        category:'boysfashionaccessories',
        subCategory:['kidsfasionbags','socks','capsandhats','kidstrolleybags','watches','sunglasses','novelties'],
        subCategoryName:['Kids fAsion Bags','Socks','Caps & Hats','Kids Trolley Bags','Watches','Sunglasses','Novelties']
    },
    {
        category:'girlsshoes(4+years)',
        subCategory:['sportsshoes','casualshoes','schoolshoes','ballerinas','sandals','flipflops','boots'],
        subCategoryName:['Sports Shoes','Casual Shoes','School Shoes','Ballerinas','Sandals','Flip Flops','Boots']
    },
    {
        category:'boysshoes(4+years)',
        subCategory:['sportsshoes','casualshoes','schoolshoes','sandals','flipflops','boots'],
        subCategoryName:['Sports Shoes','Casual Shoes','School Shoes','Sandals','Flip Flops','Boots']
    },
    {
        category:'backtoschool',
        subCategory:['schoolbackpacks','schooltrolleybags','lunchboxandbags','waterbottles','boysschoolshoes','girlsschoolshoes'],
        subCategoryName:['School Backpacks','School Trolley Bags','Lunch Box & Bags','Water Bottles','Boys School Shoes','Girls School Shoes']
    },
    {
        category:'stationery',
        subCategory:['notebooks','pencilcases','pensandpencils','planners','desksupplies','books'],
        subCategoryName:['Notebooks','Pencil','Pens & Pencils','Planners','Desk Supplies','Books']
    },
    {
        category:'toysandgames',
        subCategory:['babyandpreschool','dollsandplaysets','puzzlesandboardgames','educationaltoys','outdoortoys','scootersandvehicles','remotecontrolcars','softtoys'],
        subCategoryName:['Baby & Preschool','Dolls & Playsets','Puzzles & Board Games','Educational Toys','Outdoor Toys','Outdoor Toys','Scooters & Vehicles','Remote Control Cars','Soft Toys']
    },
    {
        category:'topbrands',
        subCategory:['juniors','eligo','leecooper','disney','barbie','skechers'],
        subCategoryName:['Juniors','Eligo','Lee Cooper','Disney','Barbie','Skechers']
    },
    {
        category:'travelgear',
        subCategory:['strollersandprams','carseats','babaycarriers','travelcots','carrycots','infantactivity'],
        subCategoryName:['Strollers and Parms','Carseats','Baby Carriers','Travel cots','Carry cots','Infant activity']
    },
    {
        category:'nurseryandbedding',
        subCategory:['cribsandbeddings','changingtables','bedsheetsandlinens'],
        subCategoryName:['Cribs & Beddings','Changing tables','Bed sheets and Linens']
    },
    {
        category:'diapersandwipes',
        subCategory:['diaperbags','babywipes','diapers'],
        subCategoryName:['Diaper Bags','Baby Wipes','Diapers']
    },
    {
        category:'feeding',
        subCategory:['highchairsandboosters','feedingbottles','breastfeeding','pacifiersandteething','mealtimeessentials','foodprocessors'],
        subCategoryName:['Highchairs and Boosters','Feeding Bottles','Breast Feeding','Pacifiers and Teething','Mealtime Essentials','Food Processors']
    },
    {
        category:'healthandsafety',
        subCategory:['bathandpottytraining','safetyessentialsandhygiene','haircare','grooming','babymonitors','humidifiersandnebulizers','personalcare'],
        subCategoryName:['Both & Potty Training','Safety Essentials & Hygiene','Hair Care','Grooming','Baby Monitors','Humidifiers & Nebulizers','Personal Care']
    },
    {
        category:'babygirlsclothing',
        subCategory:['bodysuits','sets','tops','dresses','rompersandjumpsuits','bottoms','nightwear','innerwear','winterwear'],
        subCategoryName:['Bodysuits','Sets','Tops','Dresses','Rompers & Jumpsuits','Bottoms','Nightwear','Innerwear','Winterwear']
    },
    {
        category:'babyboysclothing',
        subCategory:['bodysuits','sets','tops','rompersandjumpsuits','bottoms','nightwear','winterwear'],
        subCategoryName:['Bodysuits','Sets','Tops','Rompers & Jumpsuits','Bottoms','Nightwear','Winterwear']
    },
    {
        category:'babygirlsfootwear',
        subCategory:['booties','casualshoes','sandals'],
        subCategoryName:['Booties','Casual Shoes','Sandals']
    },
    {
        category:'babyboysfootwear',
        subCategory:['booties','casualshoes','sandals'],
        subCategoryName:['Booties','Casual Shoes','Sandals']
    },
    {
        category:'toysandgames',
        subCategory:['babyandpreschool','dollsandplaysets','puzzlesandboardgames','educationaltoys','outdoortoys','softtoys'],
        subCategoryName:['Baby & Preschool','Dolls & Playsets','Puzzles & Board Games','Educational Toys','Outdoor Toys','Soft Toys']
    },
    {
        category:'topbrands',
        subCategory:['avent','chicco','canopalbabies','cambrass','graco','joie','summerinfant','sunveno'],
        subCategoryName:['Avent','Chicco','Canopal Babies','Cambrass','Graco','Joie','Summer Infant','Sunveno']
    },
    {
        category:'babyaccessories',
        subCategory:['capsandhats','socks','watches','novelties','hairaccessories','mittens'],
        subCategoryName:['Caps & Hats','Socks','Watches','Novelties','Hair Accessories','Mittens']
    },
    {
        category:'moms',
        subCategory:['maternityclothing','books'],
        subCategoryName:['Maternity Clothing','Books']
    },
    {
        category:'face',
        subCategory:['foundations','facepowders','concealers','contours','faceprimers','blushes','bbandcccreams'],
        subCategoryName:['Foundation','Face Powders','Concealers','Contours','Face Primers','Blushes','Bronzers','BB & CC Creams']
    },
    {
        category:'eyes',
        subCategory:['mascaras','eyebrows','eyeshadows','falselashes','eyeliners'],
        subCategoryName:['Mascaras','Eyebrows','Eye Shadows','False Lashes','Eyeliners']
    },
    {
        category:'lips',
        subCategory:['lipssticks','liquidlipsticks','lipliners','lipglossesandbalms'],
        subCategoryName:['Lipsticks','Liquid Lipsticks','Lip Liners','Lip Glosses & Balms']
    },
    {
        category:'nails',
        subCategory:['nailpolishes','nailtools','polishremovers','topcoats','basecoats'],
        subCategoryName:['Nail Polishes','Nail Tools','Polish Removers','Top Coats','Base Coats']
    },
    {
        category:'makeuptoos',
        subCategory:['brushes','sponges'],
        subCategoryName:['Brushes','Sponges']
    },
    {
        category:'frangrances',
        subCategory:[''],
        subCategoryName:['']
    },
    {
        category:'bathandbody',
        subCategory:['masks','giftsets','bathaccessories','bodyandhandlotions','bodywashesandshowergels','bodyscrubs','bodysprays'],
        subCategoryName:['Masks','Gift Sets','Bath Accessories','Body & Hand Lotions','Body Washes & Shower Gels','Body Scrubs','Body Sprays']
    },
    {
        category:'make-up-accessories',
        subCategory:['cosmeticcasesandbags','cosmeticorganizers','compactandvanitymirrors'],
        subCategoryName:['Cosmetic Cases & Bags','Cosmetic Organizers','Compact & Vanity Mirrors']
    },
    {
        category:'mensgrooming',
        subCategory:['haircare','giftsets'],
        subCategoryName:['Hair Care','Gift Sets']
    },
    {
        category:'haircare',
        subCategory:['shampoosandconditioners','oilsandtreatments','hairaccessories','hairbrushesandcombs'],
        subCategoryName:['Shapmoos & Conditioners','Oils & Treatments','Hair Accessories','Hair Brushes & Combs']
    },
    {
        category:'exclusivebrands',
        subCategory:['catrice','thebalm','physiciansformula','attitudeliving','naturasiberica','superfacialist','treehut','featheranddown','clubmanpinaud','beardguyz','bubbles'],
        subCategoryName:['Catrica','The Balm','Physicians Formula','Attitude Living','Natura Siberica','Super Facialist','Tree Hut','Feather & Down','Clubman Pinaud','Beard Guyz','Bubbles']
    },
    {
        category:'topbrands',
        subCategory:['wycon','lepalaisdesperfums','nyxprofessionalmakeup','klara','revlon','bourjois','isadora','gosh','maybellinenewyork','maxfactor','lorealparis','note','rimmel'],
        subCategoryName:['Wycon','Le Palais Des Perfums','NYX Professional Makeup','Klara','Revlon','Bourjois','Isadora','GOSH','Maybelline New York','Max Factor','L\Oreal Paris','NOTE','Rimmel']
    },
    {
        category:'homefurnishings',
        subCategory:['cushions','throws','tablelinens','blacketsandquilts','floorcoverings','comfortersets','kitchenlinens'],
        subCategoryName:['Cusions','Throws','Blankets & Quilts','Floor Coverings','Comforter Sets','Kitchen Linens']
    },
    {
        category:'windowtreatments',
        subCategory:['curtains','curtainrodsandhooks'],
        subCategoryName:['Curtains','Curtain Rods & Hooks']
    },
    {
        category:'walldecor',
        subCategory:['decorativemirrors','wallart'],
        subCategoryName:['Decorative Mirrors','Wall Art']
    },
    {
        category:'homefurniture',
        subCategory:['tablesandconsoles','benchesandottomans','beanbags','chestofdrawers'],
        subCategoryName:['Tables & Consoles','Benches & Otoomans','Bean Bags','Chest of Drawers']
    },
    {
        category:'diningandserving',
        subCategory:['tableware','trays','teaandcoffee','drinkware','storage','bowls','plates','cakestands','tissueholders'],
        subCategoryName:['Tableware','Trays','Tea & Coffee','Drinkware','Storage','Bowls','Plates','Cake Stands','Tissue Holders']
    },
    {
        category:'homedecor',
        subCategory:['vases','figurines','bowls','decorativetraysandplatters','clocks','photoframes','decoraccessories','storageboxes'],
        subCategoryName:['Vases','Figurines','Bowls','Decorative Trays & Platters','Clocks','Photo Frames','Decor Accessories','Storage Boxes']
    },
    {
        category:'lighting',
        subCategory:['tablelamps','floorlamps','uplights'],
        subCategoryName:['Table Lamps','Floor Lamps','uplights']
    },
    {
        category:' homefragrance',
        subCategory:['flamelessfragrance','candles','burners','diffusers','candleholders','electricaldiffusers'],
        subCategoryName:['flameless Frangrance','Candles','Burners','Diffusers','Candle Holders','Electrical Diffusers']
    },
    {
        category:'bathdecor',
        subCategory:['lotiondispensers','towels','tumblers','bathmats','accessorysets','wastebings','soapdishes','tissueholders'],
        subCategoryName:['Lotion Dispensers','Towels','Tumblers','Bath Mats','Accessory Sets','Waste Bins','Soap Dishes','Tissue Holders']
    },
    {
        category:'shopbyroom',
        subCategory:['bedroom','livingroom','diningroom','bathroom'],
        subCategoryName:['Bedroom','Living Room','Dining Room','Bathroom']
    },
    {
        category:'schoolessentials',
        subCategory:['lunchboxesandbags','waterbottles'],
        subCategoryName:['Lunch Boxes & Bags','Water Bottles']
    },
    {
        category:'Stationery',
        subCategory:['supplies','giftwrapping'],
        subCategoryName:['Supplies','Gift Wrapping']
    },
    {
        category:'gadets',
        subCategory:['headphonesandearphones','portablecharges'],
        subCategoryName:['Headphones & Earphones','Portable Chargers']
    }


]