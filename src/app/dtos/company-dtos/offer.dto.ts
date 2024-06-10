import { OfferCharacteristicDTO } from "./offer-characteristic.dto";
import { PhotoDTO } from "./photo.dto";

export interface OfferDTO {
    offerId: number;
    companyId: number;
    categoryOffer: string;
    type: string;
    title: string;
    description: string;
    photoOffers: PhotoDTO[];
    offerCharacteristics: OfferCharacteristicDTO[];
  }
  