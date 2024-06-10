import { CompanyCharacteristicDTO } from "./company-characteristic.dto";
import { OfferDTO } from "./offer.dto";
import { PhotoDTO } from "./photo.dto";
import { PriceDTO } from "./price.dto";
import { ReviewDTO} from "./review.dto";
import { WorkTimeDTO } from "./work-time.dto";

export interface CompanyDTO {
    companyId: number;
    title: string;
    description: string;
    phone: string;
    email: string;
    street: string;
    house: string;
    city: string;
    land: string;
    postCode: string;
    latitude: number;
    longitude: number;
    location: any; 
    photos: PhotoDTO[];
    prices: PriceDTO[];
    workTimes: WorkTimeDTO[];
    companyCharacteristics: CompanyCharacteristicDTO[];
    offers: OfferDTO[];
    reviews: ReviewDTO[];
  }