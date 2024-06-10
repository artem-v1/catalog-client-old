import { Pipe, PipeTransform } from "@angular/core";
import { Observable, map, of, switchMap } from "rxjs";
import { ReferenceInterface } from "../dtos/company-dtos/constant-dtos/reference.inteface";
import { ReferenceCacheService } from "../services/references/reference-cache.service";
import { CompanyCharacteristicDTO } from "../dtos/company-dtos/company-characteristic.dto";

@Pipe({
    name: 'charCategoryTransformToValue'
  })
export class CharCategoryTransformPipe implements PipeTransform {

  constructor(private referenceCacheService: ReferenceCacheService){}

  transform(charCategorykey: string): Observable<any> {
      return this.referenceCacheService.getCharCategoryValueByScopeAndKey("company_charact_category", charCategorykey);
  }

    

}