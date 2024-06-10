import { Pipe, PipeTransform } from "@angular/core";
import { Observable, map, of, switchMap } from "rxjs";
import { ReferenceInterface } from "../dtos/company-dtos/constant-dtos/reference.inteface";
import { ReferenceCacheService } from "../services/references/reference-cache.service";
import { CompanyCharacteristicDTO } from "../dtos/company-dtos/company-characteristic.dto";

@Pipe({
    name: 'charTransformToValue'
  })
export class CharTransformPipe implements PipeTransform {

  constructor(private referenceCacheService: ReferenceCacheService){}

  transform(characteristic: CompanyCharacteristicDTO): Observable<any> {
      // Преобразовываем отдельный объект CompanyCharacteristicDTO в Observable

      return this.referenceCacheService.getCharValueByScopeAndKey(characteristic.charCategory, characteristic.charKey);
  }

    

}