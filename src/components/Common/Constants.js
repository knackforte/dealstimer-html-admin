export const SERVER_ADDRESS = 'http://127.0.0.1:8000';
export const LOGIN_API_URL = SERVER_ADDRESS + '/api/verifyUser';
export const ADD_VENDOR_API_URL = SERVER_ADDRESS + '/api/user';
export const ADD_PRODUCT_API_URL = SERVER_ADDRESS + '/api/product';
export const ADD_PRODUCT_MODAL_API_URL = SERVER_ADDRESS + '/api/storeViaModal';
export const GET_VENDORS_API_URL = SERVER_ADDRESS + '/api/user';
export const GET_API_STORES_API_URL = SERVER_ADDRESS + '/api/getApiStores';
export const IMAGE_PATH = SERVER_ADDRESS + '/images/';

export const API_URL = 'https://9khjlg93j1-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%203.24.9%3BJS%20Helper%202.23.2&x-algolia-application-id=9KHJLG93J1&x-algolia-api-key=e81d5b30a712bb28f0f1d2a52fc92dd0';

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
