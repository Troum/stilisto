import Vue from 'vue';
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage';
Vue.use(MLInstaller);

export default new MLCreate({
    initial: 'RU',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('EN').create({
            studio: 'beauty studio',
            menu: [
                {
                    title: 'home',
                    link: '/'
                },
                {
                    title: 'services',
                    link: '/services'
                },
                {
                    title: 'gallery',
                    link: '/gallery'
                },
                {
                    title: 'contacts',
                    link: '/contacts'
                }
            ],
            description: {
                name: '<p>Alexander Kiryniuk</p>' +
                    '<p style="font-size: 14px">founder of beauty studio "STILISTO".\n' +
                    '\n' +
                    'Top-stylist of Belarus.</p>',
                description: '<p class="text-white text-center">Anticipating your desires, we took the best from the modern beauty industry: recognized masters, innovative equipment, luxury cosmetics and advanced methods of body care.</p>' +
                    '<p class="text-white text-center">Here you will forget about everyday problems and feel the care of every cell in your body.</p>'
            },
            services: [
                {
                    title: 'women\'s hall' ,
                    link: '/services/women'
                },
                {
                    title: 'men\'s hall',
                    link: '/services/men'
                },
                {
                    title: 'nails studio',
                    link: '/services/nails'
                },
                {
                    title: 'cosmetologics',
                    link: '/services/cosmetics'
                },
                {
                    title: 'for kids',
                    link: '/services/kids'
                },
                {
                    title: 'solarium',
                    link: '/services/solarium'
                }
            ],
            service: {
                choose: '<p class="text-white h4">Please, choose service what you need in left menu</p>',
                partners: 'You will find a high-quality cosmetics in our shop from next brands:'
            },
            price: {
                women: {
                    complexOne: [
                        {
                            title: 'Complex 1',
                            subTitle: 'washing, drying, cutting, styling',
                            short: 'Short hair (before 25 sm)',
                            shortPrice: '15 BYN',
                            middle: 'Middle length (25-40 sm)',
                            middlePrice: '19 BYN',
                            long: 'Length over than 40 sm',
                            longPrice: '24 BYN',
                        },
                        {
                            title: 'Hair tinting',
                            subTitle: '',
                            short: 'Short hair (before 25 sm)',
                            shortPrice: '17 BYN',
                            middle: 'Middle length (25-40 sm)',
                            middlePrice: '21 BYN',
                            long: 'Length over than 40 sm',
                            longPrice: '28 BYN',
                        },
                        {
                            title: 'Any hair care',
                            subTitle: '',
                            short: 'Short hair (before 25 sm)',
                            shortPrice: '31 BYN',
                            middle: 'Middle length (25-40 sm)',
                            middlePrice: '43 BYN',
                            long: 'Length over than 40 sm',
                            longPrice: '58 BYN',
                        }

                    ],
                    complexTwo: [
                        {
                            title: 'Complex 2',
                            subTitle: 'washing, drying, cutting, styling',
                            short: 'Short hair (before 25 sm)',
                            shortPrice: '5 BYN',
                            middle: 'Middle length (25-40 sm)',
                            middlePrice: '8 BYN',
                            long: 'Length over than 40 sm',
                            longPrice: '12 BYN',
                            added: 'Bangs haircut',
                            addedPrice: '4 BYN'
                        },
                        {
                            title: 'Hair coloring in one color',
                            subTitle: '',
                            short: 'Short hair (before 25 sm)',
                            shortPrice: '22 BYN',
                            middle: 'Middle length (25-40 sm)',
                            middlePrice: '27 BYN',
                            long: 'Length over than 40 sm',
                            longPrice: '37 BYN',
                            added: 'Coloring hair roots (before 3 sm)',
                            addedPrice: '17 BYN'
                        },
                        {
                            title: 'Hairstyles',
                            subTitle: '',
                            short: 'Short hair (before 25 sm)',
                            shortPrice: '34 BYN',
                            middle: 'Middle length (25-40 sm)',
                            middlePrice: '38 BYN',
                            long: 'Length over than 40 sm',
                            longPrice: '44 BYN',
                            added: 'Shampooing, blow Drying',
                            addedPrice: '5 BYN'
                        },
                    ],
                    complexThree: [
                        {
                            title: 'Hair styling',
                            subTitle: 'with cosmetics',
                            short: 'Short hair (before 25 sm)',
                            shortPrice: '15 BYN',
                            middle: 'Middle length (25-40 sm)',
                            middlePrice: '19 BYN',
                            long: 'Length over than 40 sm',
                            longPrice: '24 BYN',
                        },
                        {
                            title: 'Hair styling with tongs',
                            subTitle: '',
                            short: 'Short hair (before 25 sm)',
                            shortPrice: '17 BYN',
                            middle: 'Middle length (25-40 sm)',
                            middlePrice: '20 BYN',
                            long: 'Length over than 40 sm',
                            longPrice: '23 BYN',
                        },
                        {
                            title: 'Hair highlights',
                            subTitle: '',
                            short: 'Short hair (before 25 sm)',
                            shortPrice: '25 BYN',
                            middle: 'Middle length (25-40 sm)',
                            middlePrice: '31 BYN',
                            long: 'Length over than 40 sm',
                            longPrice: '37 BYN',
                        }

                    ],
                    complexFour: [
                        {
                            title: 'Hair straightening',
                            subTitle: 'brazilian or keratin',
                            short: 'Short hair (before 25 sm)',
                            shortPrice: '50 BYN',
                            middle: 'Middle length (25-40 sm)',
                            middlePrice: '70 BYN',
                            long: 'Length over than 40 sm',
                            longPrice: '90 BYN',
                        },
                        {
                            title: 'Hair chemical or biowave',
                            subTitle: '',
                            short: 'Short hair (before 25 sm)',
                            shortPrice: '22 BYN',
                            middle: 'Middle length (25-40 sm)',
                            middlePrice: '31 BYN',
                            long: 'Length over than 40 sm',
                            longPrice: '31 BYN',
                        },
                        {
                            title: 'Complex hair staining',
                            subTitle: '',
                            short: 'Short hair (before 25 sm)',
                            shortPrice: '42 BYN',
                            middle: 'Middle length (25-40 sm)',
                            middlePrice: '50 BYN',
                            long: 'Length over than 40 sm',
                            longPrice: '58 BYN',
                        },
                        {
                            title: 'Hot scissors cutting',
                            subTitle: '',
                            short: 'Short hair (before 25 sm)',
                            shortPrice: '30 BYN',
                            middle: 'Middle length (25-40 sm)',
                            middlePrice: '40 BYN',
                            long: 'Length over than 40 sm',
                            longPrice: '50 BYN',
                        }

                    ],
                    complexFive: [
                        {
                            title: 'Eyelashes and eyebrows',
                            colorLashes: 'Eyelash or eyebrow coloring',
                            colorLashesPrice: '4 BYN',
                            shapeLashes: 'Brow shape architecture',
                            shapeLashesPrice: '6 BYN'
                        }
                    ]
                },
                men: {
                    complex: [
                        {
                            title: 'Complexes',
                            serviceOne: 'Washing, drying, simple haircut',
                            priceOne: '11 BYN',
                            serviceTwo: 'Model haircut without washing',
                            priceTwo: '15 BYN',
                            serviceThree: 'Washing, drying, model haircut',
                            priceThree: '18 BYN',
                            serviceFour: 'Washing, drying, haircut shaved',
                            priceFour: '6 BYN',
                            serviceFive: 'The plush',
                            priceFive: '6 BYN',
                            serviceSix: 'Washing, drying, creative haircut',
                            priceSix: '31 BYN',
                            serviceSeven: 'Washing, drying and styling of the form',
                            priceSeven: '5 BYN',
                            serviceEight: 'Art drawing with haircut machine (simple)',
                            priceEight: '11 BYN',
                            serviceNine: 'Art drawing with haircut machine  (complicate)',
                            priceNine: '21 BYN',
                            serviceTen: 'Scalp massage',
                            priceTen: '3 BYN',
                            serviceEleven: 'Hair styling with cosmetics',
                            priceEleven: '5 BYN',
                            serviceTwelve: 'Any hair care',
                            priceTwelve: '12 BYN',
                            serviceThirteen: 'Straightening (brazilian or keratin)',
                            priceThirteen: '50 BYN'
                        }
                    ],
                    color: [
                        {
                            title: 'Hair coloring in one color',
                            short: 'Short hair',
                            shortPrice: '22 BYN',
                            middle: 'Middle length',
                            middlePrice: '27 BYN',
                            long: 'Length over 20 sm',
                            longPrice: '37 BYN',
                            root: 'Hair roots coloring',
                            rootPrice: '17 BYN'
                        }
                    ],
                    other: [
                        {
                            title: 'Eyebrows',
                            one: 'Eyebrows coloring',
                            onePrice: '4 BYN',
                            two: 'Mowing eyebrow trimmer',
                            twoPrice: '1 BYN',
                            three: 'Brow shape architecture',
                            threePrice: '6 BYN',
                        },
                        {
                            title: 'Beard and mustache',
                            one: 'Making beard and mustache',
                            onePrice: '5 BYN',
                            two: 'Coloring beard or mustache',
                            twoPrice: '5 BYN',
                            three: 'Beard haircut',
                            threePrice: '10 BYN',
                        },
                        {
                            title: 'Hair tinting',
                            one: 'Short hair',
                            onePrice: '17 BYN',
                            two: 'Middle length',
                            twoPrice: '21 BYN',
                            three: 'Length over 20 sm',
                            threePrice: '28 BYN',
                        }
                    ]

                },
                nails: [
                    {
                        nameOne: 'Classical manicure (uncoated)',
                        priceOne: '10 BYN',
                        nameTwo: 'SPA-manicure + perfume therapy',
                        priceTwo: '20 BYN',
                        nameThree: 'Express manicure (uncoated)',
                        priceThree: '8 BYN',
                        nameFour: 'Male manicure (cut)',
                        priceFour: '15 BYN',
                        nameFive: 'Varnished manicure',
                        priceFive: '13 BYN',
                        nameSix: 'Nail polishing',
                        priceSix: '3 BYN',
                        nameSeven: 'Nail polish removal',
                        priceSeven: '3 BYN',
                        nameEight: 'French manicure (varnish)',
                        priceEight: '9 BYN',
                    },
                    {
                        nameOne: 'Long-lasting manicure',
                        priceOne: '28 BYN',
                        nameTwo: 'Manicure with long-lasting french coat',
                        priceTwo: '31 BYN',
                        nameThree: 'Long-term covering of nails of hands',
                        priceThree: '20 BYN',
                        nameFour: 'Long-term covering of nails of hands french',
                        priceFour: '25 BYN',
                        nameFive: 'Removal of long-term coverage of nails hands',
                        priceFive: '10 BYN',
                        nameSix: 'Additional nail decor',
                        priceSix: '5 BYN',
                        nameSeven: 'Pedicure (classic, european, male)',
                        priceSeven: '20 BYN',
                        nameEight: 'SPA pedicure',
                        priceEight: '30 BYN',
                    },
                    {
                        nameOne: 'Varnishing toenails',
                        priceOne: '4 BYN',
                        nameTwo: 'Long-term pedicure',
                        priceTwo: '32 BYN',
                        nameThree: 'Long-term toe nail cover',
                        priceThree: '22 BYN',
                        nameFour: 'Long-term cover toe nail french',
                        priceFour: '27 BYN',
                        nameFive: 'Removal of long-term coverage of toenails',
                        priceFive: '10 BYN',
                        nameSix: 'Foot massage',
                        priceSix: '4 BYN',
                        nameSeven: 'Nail polishing',
                        priceSeven: '2 BYN',
                        nameEight: 'Ingrown nail removal',
                        priceEight: '3 BYN',
                    }
                ],
                cosmetology: {
                    face: [
                        {
                            title: 'Anti-aging facial care',
                            nameOne: 'Care, strengthening - skin turgor',
                            priceOne: '55 BYN',
                            nameTwo: 'Express beauty (vitamin care)',
                            priceTwo: '60 BYN',
                            nameThree: 'Active circuit (comprehensive care for the eye contour)',
                            priceThree: '25 BYN',
                            nameFour: 'Wax eyebrow shape correction',
                            priceFour: '7 BYN',
                            nameFive: 'Eyebrows or eyelashes',
                            priceFive: '4 BYN',
                            nameSix: 'Modeling, coloring eyebrows and eyelashes',
                            priceSix: '14 BYN',
                        },
                        {
                            title: 'Skin preparation',
                            nameOne: 'Care, rejuvenation with caviar extract',
                            priceOne: '60 BYN',
                            nameTwo: 'Classic care (pore cleansing procedure)',
                            priceTwo: '50 BYN',
                            nameThree: 'Restoration of facial contours (facial muscle lift without injection)',
                            priceThree: '45 BYN',
                            nameFour: 'Face cleaning',
                            priceFour: '40 BYN',
                            nameFive: 'Face massage',
                            priceFive: '25 BYN',
                            nameSix: 'Classic facial massage by Akhabadze',
                            priceSix: '25 BYN',
                        }
                    ],
                    depilation: [
                        {
                            title: 'Wax depilation',
                            nameOne: 'Face',
                            priceOne: '10 BYN',
                            nameTwo: 'Mustache',
                            priceTwo: '7.5 BYN',
                            nameThree: 'Calf / thigh',
                            priceThree: '12 BYN',
                            nameFour: 'Legs',
                            priceFour: '20 BYN',
                            nameFive: 'Armpits',
                            priceFive: '10 BYN',
                            nameSix: 'Arms',
                            priceSix: '18 BYN',
                            nameSeven: 'Back',
                            priceSeven: '14 BYN',
                            nameEight: 'Bikini (classic / deep)',
                            priceEight: '30 BYN',
                            nameNine: 'Deep bikini, legs, arms',
                            priceNine: '40 BYN',
                        }
                    ],
                    shugaring: [
                        {
                            title: 'Depilation shugaring',
                            nameOne: 'Mustache',
                            priceOne: '4 BYN',
                            nameTwo: 'Calf',
                            priceTwo: '14 BYN',
                            nameThree: 'Legs',
                            priceThree: '28 BYN',
                            nameFour: 'Armpits',
                            priceFour: '7 BYN',
                            nameFive: 'Buttocks',
                            priceFive: '10 BYN',
                            nameSix: 'Arms',
                            priceSix: '13 BYN',
                        }
                    ],
                    regular: [
                        {
                            title: 'Regulatory care',
                            nameOne: 'Basic care',
                            priceOne: '30 BYN',
                            nameTwo: 'Care for your skin type',
                            priceTwo: '50 BYN',
                            nameThree: 'Chemical peel',
                            priceThree: '40 BYN',
                        }
                    ]
                },
                kids: [
                    {
                        nameOne: 'Haircut for children (up to 7 years)',
                        priceOne: '60 BYN',
                        nameTwo: 'Model haircut',
                        priceTwo: '50 BYN',
                        nameThree: 'Ear piercing + earrings',
                        priceThree: '45 BYN',
                        nameFour: 'Children\'s manicure without covering',
                        priceFour: '40 BYN',
                        nameFive: 'Nail design varnish',
                        priceFive: '25 BYN',
                    }
                ],
                solarium: [
                    {
                        nameOne: '1 minute',
                        priceOne: '1 BYN',
                        nameTwo: '40 minutes',
                        priceTwo: '35 BYN',
                        nameThree: '60 minutes',
                        priceThree: '50 BYN',
                        nameFour: '90 minutes',
                        priceFour: '70 BYN',
                    }
                ]
            },
            gallery: 'Model images',
            contacts: {
                title: 'Contacts',
                phoneOne: '<a class="nav-link text-white" href="tel:+375296049909">+375 (29) 604-99-09</a>',
                phoneTwo: '<a class="nav-link text-white" href="tel:+375173552242">+375 (17) 355-22-42</a>',
                instTitle: 'Our Instagram',
                instagram: '<a class="nav-link text-white" href="https://www.instagram.com/stilistosalon/">@stilistosalon</a>'
            },
            address: '<p class="text-black service">Minsk, Dolgobrodskaya Str., 9</p>'
        }),

        new MLanguage('RU').create({
            studio: 'студия красоты',
            menu: [
                {
                    title: 'главная',
                    link: '/'
                },
                {
                    title: 'услуги',
                    link: '/services'
                },
                {
                    title: 'галерея',
                    link: '/gallery'
                },
                {
                    title: 'контакты',
                    link: '/contacts'
                }
            ],
            description: {
                name: '<p>Александр Киринюк</p>' +
                    '<p style="font-size: 14px">Основатель студии красоты "STILISTO".\n' +
                    '\n' +
                    'Топ-стилист Республики Беларусь.</p>',
                description: '<p class="text-white text-center">Предугадывая ваши желания, мы взяли лучшее от современной индустрии красоты: признанных мастеров, инновационное оборудование, элитную косметику и передовые методы ухода за телом.</p>' +
                    '<p class="text-white text-center">Здесь вы забудете о повседневных проблемах и ощутите заботу о каждой клеточке вашего тела.</p>'
            },
            services: [
                {
                    title: 'женский зал',
                    link: '/services/women'
                },
                {
                    title: 'мужской зал',
                    link: '/services/men'
                },
                {
                    title: 'маникюрная студия',
                    link: '/services/nails'
                },
                {
                    title: 'косметологические услуги',
                    link: '/services/cosmetics'
                },
                {
                    title: 'детские услуги',
                    link: '/services/kids'
                },
                {
                    title: 'солярий',
                    link: '/services/solarium'
                }
            ],
            service: {
                choose: '<p class="text-white h4">Выберите, пожалуйста, в меню слева, какая услуга Вам необходима</p>',
                partners: 'В нашем магазине вы найдете качественную косметику следующих брендов:'
            },
            price: {
                women: {
                    complexOne: [
                        {
                            title: 'Комплекс 1',
                            subTitle: 'мытье, сушка, стрижка, укладка',
                            short: 'Короткие волосы (до 25 см)',
                            shortPrice: '15 BYN',
                            middle: 'Средняя длина (25-40 см)',
                            middlePrice: '19 BYN',
                            long: 'Длина свыше 40 см',
                            longPrice: '24 BYN',
                        },
                        {
                            title: 'Тонировка волос',
                            subTitle: '',
                            short: 'Короткие волосы (до 25 см)',
                            shortPrice: '17 BYN',
                            middle: 'Средняя длина (25-40 см)',
                            middlePrice: '21 BYN',
                            long: 'Длина свыше 40 см',
                            longPrice: '28 BYN',
                        },
                        {
                            title: 'Любой уход для волос',
                            subTitle: '',
                            short: 'Короткие волосы (до 25 см)',
                            shortPrice: '31 BYN',
                            middle: 'Средняя длина (25-40 см)',
                            middlePrice: '43 BYN',
                            long: 'Длина свыше 40 см',
                            longPrice: '58 BYN',
                        }

                    ],
                    complexTwo: [
                        {
                            title: 'Комплекс 2',
                            subTitle: 'мытье, сушка, стрижка, укладка',
                            short: 'Короткие волосы (до 25 см)',
                            shortPrice: '5 BYN',
                            middle: 'Средняя длина (25-40 см)',
                            middlePrice: '8 BYN',
                            long: 'Длина свыше 40 см',
                            longPrice: '12 BYN',
                            added: 'Стрижка челки',
                            addedPrice: '4 BYN'
                        },
                        {
                            title: 'Окраска волос в один цвет',
                            subTitle: '',
                            short: 'Короткие волосы (до 25 см)',
                            shortPrice: '22 BYN',
                            middle: 'Средняя длина (25-40 см)',
                            middlePrice: '27 BYN',
                            long: 'Длина свыше 40 см',
                            longPrice: '37 BYN',
                            added: 'Окраска корней (до 3 см)',
                            addedPrice: '17 BYN'
                        },
                        {
                            title: 'Прически',
                            subTitle: '',
                            short: 'Короткие волосы (до 25 см)',
                            shortPrice: '34 BYN',
                            middle: 'Средняя длина (25-40 см)',
                            middlePrice: '38 BYN',
                            long: 'Длина свыше 40 см',
                            longPrice: '44 BYN',
                            added: 'Мытье головы, сушка феном',
                            addedPrice: '5 BYN'
                        },
                    ],
                    complexThree: [
                        {
                            title: 'Укладка волос',
                            subTitle: 'с косметическими средствами',
                            short: 'Короткие волосы (до 25 см)',
                            shortPrice: '15 BYN',
                            middle: 'Средняя длина (25-40 см)',
                            middlePrice: '19 BYN',
                            long: 'Длина свыше 40 см',
                            longPrice: '24 BYN',
                        },
                        {
                            title: 'Укладка волос щипцами',
                            subTitle: '',
                            short: 'Короткие волосы (до 25 см)',
                            shortPrice: '17 BYN',
                            middle: 'Средняя длина (25-40 см)',
                            middlePrice: '20 BYN',
                            long: 'Длина свыше 40 см',
                            longPrice: '23 BYN',
                        },
                        {
                            title: 'Мелирование волос',
                            subTitle: '',
                            short: 'Короткие волосы (до 25 см)',
                            shortPrice: '25 BYN',
                            middle: 'Средняя длина (25-40 см)',
                            middlePrice: '31 BYN',
                            long: 'Длина свыше 40 см',
                            longPrice: '37 BYN',
                        }

                    ],
                    complexFour: [
                        {
                            title: 'Выпрямление',
                            subTitle: 'бразильское или кератиновое',
                            short: 'Короткие волосы (до 25 см)',
                            shortPrice: '50 BYN',
                            middle: 'Средняя длина (25-40 см)',
                            middlePrice: '70 BYN',
                            long: 'Длина свыше 40 см',
                            longPrice: '90 BYN',
                        },
                        {
                            title: 'Химическая или биозавивка',
                            subTitle: '',
                            short: 'Короткие волосы (до 25 см)',
                            shortPrice: '22 BYN',
                            middle: 'Средняя длина (25-40 см)',
                            middlePrice: '31 BYN',
                            long: 'Длина свыше 40 см',
                            longPrice: '31 BYN',
                        },
                        {
                            title: 'Сложное окрашивание',
                            subTitle: '',
                            short: 'Короткие волосы (до 25 см)',
                            shortPrice: '42 BYN',
                            middle: 'Средняя длина (25-40 см)',
                            middlePrice: '50 BYN',
                            long: 'Длина свыше 40 см',
                            longPrice: '58 BYN',
                        },
                        {
                            title: 'Стрижка горячими ножницами',
                            subTitle: '',
                            short: 'Короткие волосы (до 25 см)',
                            shortPrice: '30 BYN',
                            middle: 'Средняя длина (25-40 см)',
                            middlePrice: '40 BYN',
                            long: 'Длина свыше 40 см',
                            longPrice: '50 BYN',
                        }

                    ],
                    complexFive: [
                        {
                            title: 'Ресницы и брови',
                            colorLashes: 'Окраска ресниц или бровей',
                            colorLashesPrice: '4 BYN',
                            shapeLashes: 'Архитектура формы бровей',
                            shapeLashesPrice: '6 BYN'
                        }
                    ]
                },
                men: {
                    complex: [
                        {
                            title: 'Комплексы',
                            serviceOne: 'Мытье, сушка, простая стрижка',
                            priceOne: '11 BYN',
                            serviceTwo: 'Модельная стрижка без мытья',
                            priceTwo: '15 BYN',
                            serviceThree: 'Мытье, сушка, модельная стрижка',
                            priceThree: '18 BYN',
                            serviceFour: 'Мытье, сушка, стрижка наголо',
                            priceFour: '6 BYN',
                            serviceFive: 'Плюше',
                            priceFive: '6 BYN',
                            serviceSix: 'Мытье, сушка, креативная стрижка',
                            priceSix: '31 BYN',
                            serviceSeven: 'Мытье, сушка или укладка по форме',
                            priceSeven: '5 BYN',
                            serviceEight: 'Художественный рисунок машинкой (простой)',
                            priceEight: '11 BYN',
                            serviceNine: 'Художественный рисунок машинкой (сложный)',
                            priceNine: '21 BYN',
                            serviceTen: 'Массаж кожи головы',
                            priceTen: '3 BYN',
                            serviceEleven: 'Укладка волос с ксометическими средствами',
                            priceEleven: '5 BYN',
                            serviceTwelve: 'Любой уход для волос',
                            priceTwelve: '12 BYN',
                            serviceThirteen: 'Выпрямление (бразильское или кератиновое)',
                            priceThirteen: '50 BYN'
                        }
                    ],
                    color: [
                        {
                            title: 'Окраска волос в один цвет',
                            short: 'Короткие волосы',
                            shortPrice: '22 BYN',
                            middle: 'Средняя длина',
                            middlePrice: '27 BYN',
                            long: 'Длина свыше 20 см',
                            longPrice: '37 BYN',
                            root: 'Окрашивание корней',
                            rootPrice: '17 BYN'
                        }
                    ],
                    other: [
                        {
                            title: 'Брови',
                            one: 'Окраска бровей',
                            onePrice: '4 BYN',
                            two: 'Стрижка бровей тримером',
                            twoPrice: '1 BYN',
                            three: 'Архитектура формы бровей',
                            threePrice: '6 BYN',
                        },
                        {
                            title: 'Борода и усы',
                            one: 'Оформление бороды или усов',
                            onePrice: '5 BYN',
                            two: 'Окраска бороды или усов',
                            twoPrice: '5 BYN',
                            three: 'Фигурная стрижка бороды',
                            threePrice: '10 BYN',
                        },
                        {
                            title: 'Тонировка волос',
                            one: 'Короткие волосы',
                            onePrice: '17 BYN',
                            two: 'Средняя длина',
                            twoPrice: '21 BYN',
                            three: 'Длина свыше 20 см',
                            threePrice: '28 BYN',
                        }
                    ]

                },
                nails: [
                    {
                        nameOne: 'Классический маникюр (без покрытия)',
                        priceOne: '10 BYN',
                        nameTwo: 'SPA-маникюр + парфюмеротерапия',
                        priceTwo: '20 BYN',
                        nameThree: 'Экспресс-маникюр (без покрытия)',
                        priceThree: '8 BYN',
                        nameFour: 'Маникюр мужской (обрезной)',
                        priceFour: '15 BYN',
                        nameFive: 'Маникюр с покрытием лаком',
                        priceFive: '13 BYN',
                        nameSix: 'Покрытие ногтей лаком',
                        priceSix: '3 BYN',
                        nameSeven: 'Снятие лака с ногтей',
                        priceSeven: '3 BYN',
                        nameEight: 'Французский маникюр (лак)',
                        priceEight: '9 BYN',
                    },
                    {
                        nameOne: 'Маникюр с долговременным покрытием',
                        priceOne: '28 BYN',
                        nameTwo: 'Маникюр с долговременным покрытием френч',
                        priceTwo: '31 BYN',
                        nameThree: 'Долговременное покрытие ногтей рук',
                        priceThree: '20 BYN',
                        nameFour: 'Долговременное покрытие ногтей рук френч',
                        priceFour: '25 BYN',
                        nameFive: 'Снятие долговременного покрытия ногтей рук',
                        priceFive: '10 BYN',
                        nameSix: 'Дополнительный декор для ногтей',
                        priceSix: '5 BYN',
                        nameSeven: 'Педикюр (классический, европейский, мужской)',
                        priceSeven: '20 BYN',
                        nameEight: 'SPA-педикюр',
                        priceEight: '30 BYN',
                    },
                    {
                        nameOne: 'Покрытие лаком ногтей на ногах',
                        priceOne: '4 BYN',
                        nameTwo: 'Педикюр с долговременным покрытием',
                        priceTwo: '32 BYN',
                        nameThree: 'Долговременное покрытие ногтей ног',
                        priceThree: '22 BYN',
                        nameFour: 'Долговременное покрытие ногтей ног френч',
                        priceFour: '27 BYN',
                        nameFive: 'Снятие долговременного покрытия ногтей ног',
                        priceFive: '10 BYN',
                        nameSix: 'Массаж стоп',
                        priceSix: '4 BYN',
                        nameSeven: 'Полировка ногтей',
                        priceSeven: '2 BYN',
                        nameEight: 'Удаление вросшего ногтя',
                        priceEight: '3 BYN',
                    }
                ],
                cosmetology: {
                    face: [
                        {
                            title: 'Омолаживающий уход для лица',
                            nameOne: 'Уход, укрепление - тургор кожи',
                            priceOne: '55 BYN',
                            nameTwo: 'Экспресс-красота (витаминный уход)',
                            priceTwo: '60 BYN',
                            nameThree: 'Активный контур (комплексный уход за контуром глаз)',
                            priceThree: '25 BYN',
                            nameFour: 'Восковая коррекция формы бровей',
                            priceFour: '7 BYN',
                            nameFive: 'Окраска бровей или ресниц',
                            priceFive: '4 BYN',
                            nameSix: 'Моделирование, окраска бровей и ресниц',
                            priceSix: '14 BYN',
                        },
                        {
                            title: 'Подготовка кожи',
                            nameOne: 'Уход, омоложение с экстрактом икры',
                            priceOne: '60 BYN',
                            nameTwo: 'Классический уход (процедура очищения пор)',
                            priceTwo: '50 BYN',
                            nameThree: 'Восстановление овала лица (подтяжка лицевых мышц без инъекция)',
                            priceThree: '45 BYN',
                            nameFour: 'Чистка лица',
                            priceFour: '40 BYN',
                            nameFive: 'Массаж лица',
                            priceFive: '25 BYN',
                            nameSix: 'Классический массаж лица по Ахабадзе',
                            priceSix: '25 BYN',
                        }
                    ],
                    depilation: [
                        {
                            title: 'Восковая депиляция',
                            nameOne: 'Лицо',
                            priceOne: '10 BYN',
                            nameTwo: 'Усики',
                            priceTwo: '7.5 BYN',
                            nameThree: 'Голень/бедро',
                            priceThree: '12 BYN',
                            nameFour: 'Ноги',
                            priceFour: '20 BYN',
                            nameFive: 'Подмышки',
                            priceFive: '10 BYN',
                            nameSix: 'Руки',
                            priceSix: '18 BYN',
                            nameSeven: 'Спина',
                            priceSeven: '14 BYN',
                            nameEight: 'Бикини (классическое/глубокое)',
                            priceEight: '30 BYN',
                            nameNine: 'Глубокое бикини, ноги, руки',
                            priceNine: '40 BYN',
                        }
                    ],
                    shugaring: [
                        {
                            title: 'Депиляция шугаринг',
                            nameOne: 'Усики',
                            priceOne: '4 BYN',
                            nameTwo: 'Голени',
                            priceTwo: '14 BYN',
                            nameThree: 'Ноги',
                            priceThree: '28 BYN',
                            nameFour: 'Подмышки',
                            priceFour: '7 BYN',
                            nameFive: 'Ягодицы',
                            priceFive: '10 BYN',
                            nameSix: 'Руки',
                            priceSix: '13 BYN',
                        }
                    ],
                    regular: [
                        {
                            title: 'Регулирующий уход',
                            nameOne: 'Основной уход',
                            priceOne: '30 BYN',
                            nameTwo: 'Уход по типу кожи',
                            priceTwo: '50 BYN',
                            nameThree: 'Химический пилинг',
                            priceThree: '40 BYN',
                        }
                    ]
                },
                kids: [
                    {
                        nameOne: 'Стрижка детская (до 7 лет)',
                        priceOne: '60 BYN',
                        nameTwo: 'Модельная стрижка',
                        priceTwo: '50 BYN',
                        nameThree: 'Прокол ушей + серьги',
                        priceThree: '45 BYN',
                        nameFour: 'Маникюр детский без покрытия',
                        priceFour: '40 BYN',
                        nameFive: 'Дизайн ногтей лаком',
                        priceFive: '25 BYN',
                    }
                ],
                solarium: [
                    {
                        nameOne: '1 минута',
                        priceOne: '1 BYN',
                        nameTwo: '40 минут',
                        priceTwo: '35 BYN',
                        nameThree: '60 минут',
                        priceThree: '50 BYN',
                        nameFour: '90 минут',
                        priceFour: '70 BYN',
                    }
                ]
            },
            gallery: 'Модельные образы',
            contacts: {
                title: 'Наши контакты',
                phoneOne: '<a class="nav-link text-white" href="tel:+375296049909">+375 (29) 604-99-09</a>',
                phoneTwo: '<a class="nav-link text-white" href="tel:+375173552242">+375 (17) 355-22-42</a>',
                instTitle: 'Наш Instagram',
                instagram: '<a class="nav-link text-white" href="https://www.instagram.com/stilistosalon/">@stilistosalon</a>'
            },
            address: '<p class="text-black service">г. Минск, ул. Долгобродская, 9</p>'
        })
    ]
})
