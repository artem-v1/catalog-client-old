import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, of, switchMap } from 'rxjs';
import { CompanyDTO } from 'src/app/dtos/company-dtos/company.dto';
import { CompanyFullDataService } from 'src/app/services/company/company-full-data.service';
import { Lightbox } from 'ngx-lightbox';
import { PhotoDTO } from 'src/app/dtos/company-dtos/photo.dto';
import { OfferDTO } from 'src/app/dtos/company-dtos/offer.dto';
import { __runInitializers } from 'tslib';

@Component({
    selector: 'app-company-full-data',
    templateUrl: './company-full-data.component.html',
    styleUrl: './company-full-data.component.scss',
})
export class CompanyFullDataComponent {

  company$!: Observable<CompanyDTO>;
  private companySubscription!: Subscription;
  company!: CompanyDTO;  

  isLeftColumnFixed = true;

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  public overviewColleaps = true;

  @ViewChild('customMenuEnd')
  customMenuEnd!: ElementRef;


  constructor(
    private route: ActivatedRoute,
    private CompanyFullDataService: CompanyFullDataService,
    private _lightbox: Lightbox,
    private elementRef: ElementRef
    ) {}

  ngOnInit() {

    this.loadCompanyData();

    if (this.company && this.company.offers) {
      this.company.offers.forEach(offer => {
          this.offerDescriptionExpanded[offer.offerId] = false;
      });

  }

    /**
     * BreadCrumb - 
     */
    this.breadCrumbItems = [
      { label: 'Home', link: '' },
      { label: 'Property for rent', link: '/catalog/rent' },
      { label: 'Pine Apartments', active: true }
    ];
    
  }


  ngOnDestroy() {
    this.companySubscription?.unsubscribe();
  }


  loadCompanyData() {
    this.company$ = this.route.params.pipe(
      switchMap(params => {
        const companyId = params['id'];
        return this.CompanyFullDataService.getCompanyDTO(companyId);
      })
    );

    this.companySubscription = this.company$.subscribe({
      next: (companyDto) => {
        this.company = companyDto;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });

  }


   //fix custom menu
   @HostListener('window:scroll', ['$event'])
   onScroll(event: Event) {
     const scrollPosition = window.scrollY || document.documentElement.scrollTop;
     //console.log('Scroll position:', scrollPosition);
     this.isLeftColumnFixed = scrollPosition > 60;
 
     // Проверяем, находится ли страница перед футером
     if (this.customMenuEnd) { // Добавьте проверку на существование customMenuEnd
       if (scrollPosition > this.customMenuEnd.nativeElement.offsetTop - window.innerHeight) {
         this.isLeftColumnFixed = false;
         console.log('this.isLeftColumnFixed:', this.isLeftColumnFixed);
       } else if (scrollPosition > 190) {
         this.isLeftColumnFixed = true;
       }
     }
   }

  SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }

  openCompaniesPhotoInLightBox(index: number) {

    const _albums = this.company.photos.map(photo => ({
      src: photo.photoLink,
      caption: photo.photoName,
      thumb: photo.photoLink
    }));

    this._lightbox.open(_albums, index);
  }


  openOffersPhotoInLightBox(actualOfferId: any, index: number) {
    
    let _photosByActualOfferId: PhotoDTO[] = [];

    if(this.company && this.company.offers) {
      this.company.offers.forEach((offer: OfferDTO) => {
        if(offer.offerId === actualOfferId && offer.photoOffers) {
          _photosByActualOfferId = offer.photoOffers;
        }
      })
    }

    const _albums = _photosByActualOfferId.map(photo => ({
      src: photo.photoLink,
      caption: photo.photoName,
      thumb: photo.photoLink
    }));

    this._lightbox.open(_albums, index);
  }

  scrollToOfferBlock(offerId: number){
    const element = this.elementRef.nativeElement.querySelector('#offerId-' + offerId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  getUniqCompanyCharCategory(){
    if (!this.company || !this.company.companyCharacteristics) {
      return [];
    }
  
    return this.company.companyCharacteristics
      .map(characteristic => characteristic.charCategory)
      .filter((value, index, self) => self.indexOf(value) === index);
  }




  //toggle for company description
  companyDescriptionExpanded: boolean = false;
  limitCompanyDescription: number = 100;
  toggleCompanyDescriptionLength(){
    this.companyDescriptionExpanded = !this.companyDescriptionExpanded;
  }


  //initialized in ngOnInit()
  offerDescriptionExpanded: { [key: number]: boolean } = {};
  //toggle for offer description
  limitOfferDescriptionLength: number = 100;
  toggleOfferDescriptionLength(offerId: number) {
    this.offerDescriptionExpanded[offerId] = !this.offerDescriptionExpanded[offerId];
  }


//Start Toggle for companyChar
  containerHeight: string = '500px';
  isExpanded: boolean = false;

  toggleMoreCompanyChar() {
    this.isExpanded = !this.isExpanded;
    this.containerHeight = this.isExpanded ? 'auto' : '500px';
  }

  toggleLessCompanyChar() {
    if (this.isExpanded) {
      this.isExpanded = false;
      this.containerHeight = '500px';
    }
  }
  //End Toggle for companyChar


}
