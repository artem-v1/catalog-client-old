import { Pipe, PipeTransform } from "@angular/core";
import { Observable} from "rxjs";
import { ReferenceCacheService } from "../services/references/reference-cache.service";
import { CompanyCharacteristicDTO } from "../dtos/company-dtos/company-characteristic.dto";

@Pipe({
    name: 'charTransformToValue'
  })
export class CharTransformPipe implements PipeTransform {

  constructor(private referenceCacheService: ReferenceCacheService){}

  transform(characteristic: CompanyCharacteristicDTO): Observable<any> {

      return this.referenceCacheService.getCharValueByScopeAndKey(characteristic.charCategory, characteristic.charKey);
  }

    

}