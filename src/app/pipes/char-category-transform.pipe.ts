import { Pipe, PipeTransform } from "@angular/core";
import { Observable} from "rxjs";
import { ReferenceCacheService } from "../services/references/reference-cache.service";

@Pipe({
    name: 'charCategoryTransformToValue'
  })
export class CharCategoryTransformPipe implements PipeTransform {

  constructor(private referenceCacheService: ReferenceCacheService){}

  transform(charCategorykey: string): Observable<any> {
      return this.referenceCacheService.getCharCategoryValueByScopeAndKey("company_charact_category", charCategorykey);
  }

    

}