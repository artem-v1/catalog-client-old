
/**
 * single Property Data 
 */
/*основной контент */

/* нужно сделать таблицу - publication - в ней по сути создавать главну публикацию 
и через нее зпуисывать данные в связанные таблицы,
а когда нужно вытянуть данные, то через эту таблицу ищем запись с соответсвующим языком и вытягиваем из бд
{
  publicationId: 1,
  title: "Publication 1"
  company: [
{
*/



const companyData = [

  {
    companyId: 1,
    title: "Pine Apartments - ine apartments ne ddpartments ine tments ne tpartments nee partments",
    description: "Описание компании",
    phone: "+49123456789",
    email: "email@example.com",
    street: "Ibbenbürener Straße",
    hause: "5",
    city: "Münster",
    land: "Nordrhein-Westfalen",
    postCode: "12345",
    latitude: 51.12345,
    longitude: 7.67890,
    location: {
      latitude: 51.12345,
      longitude: 7.67890
    },
    photos: [
      {
        photoId: 1,
        companyId: 1,
        photoName: "assets/img/company/photo.jpg"
      },
      {
        photoId: 2,
        companyId: 1,
        photoName: "assets/img/company/photo.jpg"
      },
      {
        photoId: 3,
        companyId: 1,
        photoName: "assets/img/company/photo.jpg"
      }
    ],
    price: [
      {
        priceItemId: 1,
        companyId: 1,
        name: "total-price",
        price: 10.99,
        unit: "Stunde",
        quantity: 5
      },
      {
        priceItemId: 2,
        companyId: 1,
        name: "Другой товар",
        price: 25.5,
        unit: "кг",
        quantity: 2
      },
      {
        priceItemId: 3,
        companyId: 1,
        name: "Название товара",
        price: 10.99,
        unit: "шт.",
        quantity: 5
      },
      {
        priceItemId: 4,
        companyId: 1,
        name: "Другой товар",
        price: 25.5,
        unit: "кг",
        quantity: 2
      }
    ],
    workTime: [
      {
        workTimeItemId: 1,
        companyId: 1,
        dayOfWeek: "Понедельник",
        startTime: "10:00",
        endTime: "18:00",
        note: "Рабочий день"
      },
      {
        workTimeItemId: 2,
        companyId: 1,
        dayOfWeek: "Вторник",
        startTime: "12:00",
        endTime: "20:00",
        note: "Дополнительный рабочий день"
      }
    ],
    companyCharacteristics: [
      {
        comCharItemId: 1,
        companyId: 1,
        category: "Type",
        value: "Премиум",
        icon: "check_circle"
      },
      {
        comCharItemId: 2,
        companyId: 1,
        category: "Type",
        value: "Комфорт",
        icon: "check_circle"
      },
      {
        comCharItemId: 3,
        companyId: 1,
        category: "Type",
        value: "Премиум",
        icon: "check_circle"
      },
      {
        comCharItemId: 4,
        companyId: 1,
        category: "Amenties",
        value: "Комфорт",
        icon: "check_circle"
      },
      {
        comCharItemId: 5,
        companyId: 1,
        category: "Amenties",
        value: "Премиум",
        icon: "check_circle"
      },
      {
        comCharItemId: 6,
        companyId: 1,
        category: "Amenties",
        value: "Комфорт",
        icon: "check_circle"
      },
      {
        comCharItemId: 7,
        companyId: 1,
        category: "Amenties",
        value: "Премиум",
        icon: "check_circle"
      },
      {
        comCharItemId: 8,
        companyId: 1,
        category: "Amenties",
        value: "Комфорт",
        icon: "check_circle"
      },
      {
        comCharItemId: 9,
        companyId: 1,
        category: "Amenties",
        value: "Премиум",
        icon: "check_circle"
      },
      {
        comCharItemId: 10,
        companyId: 1,
        category: "Amenties",
        value: "Комфорт",
        icon: "check_circle"
      },
      {
        comCharItemId: 11,
        companyId: 1,
        category: "Amenties",
        value: "Премиум",
        icon: "check_circle"
      },
      {
        comCharItemId: 12,
        companyId: 1,
        category: "New category",
        value: "Комфорт",
        icon: "check_circle"
      },
      {
        comCharItemId: 13,
        companyId: 1,
        category: "New category",
        value: "Премиум",
        icon: "check_circle"
      },
      {
        comCharItemId: 14,
        companyId: 1,
        category: "New category",
        value: "Комфорт",
        icon: "check_circle"
      },
      {
        comCharItemId: 15,
        companyId: 1,
        category: "New category",
        value: "Премиум",
        icon: "check_circle"
      },
      {
        comCharItemId: 16,
        companyId: 1,
        category: "New category",
        value: "Комфорт",
        icon: "check_circle"
      }
    ],
    offer: [
      {
        offerItemId: 1,
        companyId: 1,
        categoryOffer: "Сауна",
        type: "Общественная",
        title: "Финская сауна",
        description: "Лучшая сауна в городе",
        photosOffer: [
          {
            photoId: 1,
            offerItemId: 1,
            photoName: "assets/img/company/photo.jpg"
          },
          {
            photoId: 2,
            offerItemId: 1,
            photoName: "assets/img/company/photo.jpg"
          },
          {
            photoId: 1,
            offerItemId: 2,
            photoName: "assets/img/company/photo.jpg"
          },
          {
            photoId: 2,
            offerItemId: 2,
            photoName: "assets/img/company/photo.jpg"
          }
        ],
        offerCharacteristics: [
          {
            offerCharItemId: 1,
            companyId: 1,
            offerItemId: 1,
            offerCategory: "Amenities",
            value: "Wi-Fi",
            icon: "wifi"
          },
          {
            offerCharItemId: 2,
            companyId: 1,
            offerItemId: 1,
            offerCategory: "Amenities",
            value: "Bed",
            icon: "bed"
          }
        ]
      },
      // ... другие объекты в массиве offer
    ],
    reviews: [
      {
        reviewItemId: 1,
        companyId: 1,
        photo: "assets/img/avatars/04.jpg",
        title: "Анна Иванова",
        date: "2023-03-15",
        rating: 2,
        content: "Отличное место!",
        like: 10,
        unlike: 2
      },
      {
        reviewItemId: 2,
        companyId: 1,
        photo: "assets/img/avatars/04.jpg",
        title: "Иван Петров",
        date: "2023-03-16",
        rating: 1,
        content: "Хороший сервис, но цены могли бы быть ниже.",
        like: 3,
        unlike: 1
      },
      {
        reviewItemId: 3,
        companyId: 1,
        photo: "assets/img/avatars/04.jpg",
        title: "Анна Иванова",
        date: "2023-03-10",
        rating: 4,
        content: "Отличное место!",
        like: 9,
        unlike: 2
      },
      {
        reviewItemId: 4,
        companyId: 1,
        photo: "",
        title: "Иван Петров",
        date: "2022-01-11",
        rating: 3,
        content: "Хороший сервис, но цены могли бы быть ниже.",
        like: 5,
        unlike: 1
      },
      {
        reviewItemId: 5,
        companyId: 1,
        photo: "",
        title: "Иван Петров",
        date: "2023-04-05",
        rating: 2,
        content: "Хороший сервис, но цены могли бы быть ниже.",
        like: 6,
        unlike: 1
      }
    ]
  }
];


 

/*константы
айди
область
ключ
значение
иконка

*/



const singlePropertyData = [
  {
    image: "assets/img/avatars/03.jpg",
    title: "Annette Black",
    date: "Jan 17, 2021",
    rating: 5,
    content: "Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.",
    like: "3",
    unlike: "0",
    haracteristik: [
      {
        image: "assets/img/real-estate/catalog/39.jpg",
        sale: 'For Sale',
        title: "Modern House | 90 sq.m",
        content: "67-04 Myrtle Ave Glendale, NY 11385",
        price: "$84,000",
        bad: "4",
        bath: "2",
        car: "2"
      },
      {
        image: "assets/img/real-estate/catalog/39.jpg",
        sale: 'For Sale',
        title: "Modern House | 90 sq.m",
        content: "67-04 Myrtle Ave Glendale, NY 11385",
        price: "$84,000",
        bad: "4",
        bath: "2",
        car: "2"
      }
    ]
  },
  {
    image: "assets/img/avatars/03.jpg",
    title: "Annette Black",
    date: "Jan 17, 2021",
    rating: 5,
    content: "Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.",
    like: "3",
    unlike: "0"
  }
]


/**
 * About Review List
 */
const aboutReviewData = [
  {
    image: "assets/img/avatars/03.jpg",
    title: "Annette Black",
    date: "Jan 17, 2021",
    rating: 5,
    content: "Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.",
    like: "3",
    unlike: "0"
  },
  {
    image: "assets/img/avatars/13.png",
    title: "Darrell Steward",
    date: "Dec 1, 2020",
    rating: 3,
    content: "Vel dictum nunc ut tristique. Egestas diam amet, ut proin hendrerit. Dui accumsan at phasellus tempus consequat dignissim tellus sodales.",
    like: "0",
    unlike: "1"
  },
  {
    image: "assets/img/avatars/05.jpg",
    title: "Floyd Miles",
    date: "Oct 28, 2020",
    rating: 5,
    content: "Viverra nunc blandit sapien non imperdiet sit. Purus tempus elementum aliquam eu urna. A aenean duis non egestas at libero porttitor integer eget. Sed dictum lobortis laoreet gravida.",
    like: "2",
    unlike: "1"
  },
  {
    image: "assets/img/avatars/04.jpg",
    title: "Ralph Edwards",
    date: "Sep 14, 2020",
    rating: 4,
    content: "Elementum nisl, egestas nam consectetur nisl, at pellentesque cras. Non sed ac vivamus dolor dignissim ut. Nisl sapien blandit pulvinar sagittis donec sociis ipsum arcu est. Tempus, rutrum morbi scelerisque tempor mi. Etiam urna, cras bibendum leo nec faucibus velit. Tempor lectus dignissim at auctor integer neque quam amet.",
    like: "0",
    unlike: "0"
  },
];

/**
 * Recently List
 */
 const recentlyData = [
  {
      verified_btn: 'Verified',
      btn: "new",
      btn_color: "bg-info",
      image: "assets/img/real-estate/catalog/01.jpg",
      sale: 'For rent',
      title: "3-bed Apartment | 67 sq.m",
      content: "3811 Ditmars Blvd Astoria, NY 11105",
      price: "$1,629",
      bad: "3",
      bath: "2",
      car: "2"
  },
  {
    verified_btn: 'Verified',
    btn: "Featured",
    btn_color: "bg-danger",
    image: "assets/img/real-estate/catalog/02.jpg",
    sale: 'For sale',
    title: "Family Home| 120 sq.m",
    content: "67-04 Myrtle Ave Glendale, NY 11385",
    price: "$84,000",
    bad: "4",
    bath: "2",
    car: "2"
  },
  {
    verified_btn: 'Verified',
    btn: "",
    btn_color: "",
    image: "assets/img/real-estate/catalog/03.jpg",
    sale: 'For rent',
    title: "Greenpoint Rentals | 85 sq.m",
    content: "1510 Castle Hill Ave Bronx, NY 10462",
    price: "$1,330",
    bad: "1",
    bath: "1",
    car: "1"
  },
  {
    verified_btn: 'Verified',
    btn: "New",
    btn_color: "bg-info",
    image: "assets/img/real-estate/catalog/04.jpg",
    sale: 'For sale',
    title: "Studio | 32 sq.m",
    content: "140-60 Beech Ave Flushing, NY 11355",
    price: "$65,000",
    bad: "1",
    bath: "1",
    car: "2"
  },
  {
    verified_btn: 'Verified',
    btn: "",
    btn_color: "",
    image: "assets/img/real-estate/catalog/05.jpg",
    sale: 'For sale',
    title: "Cottage | 120 sq.m",
    content: "42 Broadway New York, NY 10004",
    price: "$184,000",
    bad: "4",
    bath: "2",
    car: "1"
  },
];

export { aboutReviewData, recentlyData, companyData };
