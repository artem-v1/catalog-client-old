/**
 * CompanyModel
 */
export interface CompanyModel {
  companyId: number;
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  street?: string;
  hause?: string;
  city?: string;
  land?: string;
  postCode?: string; // Используем string для почтового кода
  latitude?: number;
  longitude?: number;
  location?: { latitude: number; longitude: number }; // Используем объект для координат
  photos?: PhotosItem[];
  price?: PriceItem[]; // Используем интерфейс PriceItem для структуры цены
  workTime?: WorkTimeItem[]; // Используем интерфейс WorkTimeItem для структуры времени работы
  companyCharacteristics?: CompanyCharacteristicItem[];
  offer?: OfferItem[];
  reviews?: ReviewItem[];
}

export interface PhotosItem {
  photoId: number;
  companyId: number;
  photoName?: string;
}


export interface PriceItem {
  priceItemId: number;
  companyId: number;
  name: string;
  price: number;
  unit: string;
  quantity: number;
}

export interface WorkTimeItem {
  workTimeItemId: number;
  companyId: number;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  note: string;
}

export interface CompanyCharacteristicItem {
  comCharItemId: number;
  companyId: number;
  category?: string;
  key?: string;
  value?: string;
  icon?: string;
}

export interface OfferItem {
  offerItemId: number;
  companyId: number;
  categoryOffer?: string;
  type?: string;
  title?: string;
  description?: string;
  photo?: string;
  photosOffer: PhotosOfferItem[];
  offerCharacteristics?: OfferCharacteristicsItem[];
}

export interface PhotosOfferItem {
  photoId: number;
  offerItemId: number;
  photoName?: string;
}

export interface OfferCharacteristicsItem{
  offerCharItemId: number;
  companyId: number;
  offerItemId: number,
  offerCategory?: string;
  key?: string;
  value?: string;
  icon?: string;
}

export interface ReviewItem{
  reviewItemId: number;
  companyId?: number;
  photo?: string;
  title?: string;
  date?: string;
  rating?: number;
  content?: string;
  like?: number;
  unlike?: number; 
}


/**
 * About Reviews List
 */
 export interface aboutReviews {
  image?: string;
  title?: string;
  date?: string;
  rating?: any;
  content?: string;
  like?: string;
  unlike?: string;
}

/**
 * Recently List
 */
 export interface recently {
  verified_btn: string;
  btn?: string;
  btn_color?: string;
  image?: string;
  sale?: string;
  title?: string;
  content?: string;
  price?: string;
  bad?: string;
  bath?: string;
  car?: string;
}
