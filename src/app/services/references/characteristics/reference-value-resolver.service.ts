  import { Injectable } from '@angular/core';
  import { CharacteristicsDataService } from './characteristics-data.service';
  import { Observable, map, shareReplay } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class ReferenceValueResolverService {

    private categories$: Observable<any[]>;
    private characteristics$: Observable<any[]>;

    constructor(private dataService: CharacteristicsDataService) {
      this.categories$ = this.dataService.getCategories().pipe(shareReplay(1));
      this.characteristics$ = this.dataService.getCharacteristics().pipe(shareReplay(1));
    }

    getCategoryValue(catKey: string): Observable<string> {
      return this.categories$.pipe(
        map(categories => categories.find(c => c.catKey === catKey)?.catValue || 'Неизвестная категория')
      );
    }

    getCharacteristicValue(catKey: string, charKey: string): Observable<string> {
      return this.characteristics$.pipe(
        map(characteristics => characteristics.find(c => c.catKey === catKey && c.charKey === charKey)?.charValue || 'Неизвестная характеристика')
      );
    }
  }
