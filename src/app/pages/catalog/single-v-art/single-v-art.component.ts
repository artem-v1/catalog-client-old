import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';


// Light Box
import { Lightbox } from 'ngx-lightbox';

import { aboutReviews, recently, CompanyModel } from './single-v-art.model';
import { aboutReviewData, recentlyData, companyData } from './data';
import { CharacteristicsDataService } from 'src/app/services/references/characteristics/characteristics-data.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-single-v-art',
  templateUrl: './single-v-art.component.html',
  styleUrls: ['./single-v-art.component.scss']
})

/**
 * SingleVArt Component
 */
export class SingleVArtComponent implements OnInit {

  //Characteristics reference
  categories: any[] = [];
  characteristics: any[] = [];

  isLeftColumnFixed = true;
  isLinkActive = false;

  //наверное для проверки наличия категории - наверное нужно уже удалить
  expandedCategories: { [key: string]: boolean } = {};

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  aboutReviewData!: aboutReviews[];
  recentlyData!: recently[];
  companyData!: CompanyModel[];
  public overviewColleaps = true;
  public amenitiesCollapseVar = true;
  public CategoryCollapseVar = true;
  //  Validation form
  validationform!: UntypedFormGroup;
  signUpform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;
  longitude = 20.728218;
  latitude = 52.128973;
  _album: Array<any> = [];
  
  @ViewChild('customMenuEnd')
  customMenuEnd!: ElementRef;
 

  constructor(private modalService: NgbModal,
                private formBuilder: UntypedFormBuilder, 
                private _lightbox: Lightbox, 
                private characteristicsDataService: CharacteristicsDataService
    ) {
    for (let i = 4; i <= 8; i++) {
      const src = 'assets/img/city-guide/single/th0' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'assets/img/city-guide/single/th0' + i + '.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };

      this._album.push(album);
    }
  }
  
  ngOnInit(): void {

    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Home', link: '' },
      { label: 'Property for rent', link: '/catalog/rent' },
      { label: 'Pine Apartments', active: true }
    ];

    /**
    * Bootstrap validation form data
    */
    this.validationform = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });

    /**
     * Bootstrap validation form data
     */
    this.signUpform = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });

/*
      // Загрузка характеристик
  this.characteristicsDataService.getCharacteristics().subscribe(data => {
    this.characteristics = data;
    console.log("Характеристики", this.characteristics);
    // Здесь можно выполнить дополнительные действия с характеристиками
  });

  // Загрузка категорий
  this.characteristicsDataService.getCategories().subscribe(data => {
    this.categories = data;
    console.log("Категории", this.categories);
    // Здесь можно выполнить дополнительные действия с категориями
  });
*/

    forkJoin({
      categories: this.characteristicsDataService.getCategories(),
      characteristics: this.characteristicsDataService.getCharacteristics()

    }).subscribe(({ categories, characteristics }) => {
      this.categories = categories;
      this.characteristics = characteristics;

      console.log("Характеристики", this.characteristics);
      console.log("Категории", this.categories);
  
    });

    // Data Get Function
    this._fetchData();

  }

  
  toggleCategory(category: string): void {
    this.expandedCategories[category] = !this.expandedCategories[category];
  }

  SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }

  // Data Fetch
  private _fetchData() {
    this.aboutReviewData = aboutReviewData;
    this.recentlyData = recentlyData;
    this.companyData = companyData;
  }


  /**
   * Open Review modal
   * @param reviewContent modal content
   */
  openReviewModal(reviewContent: any) {
    this.modalService.open(reviewContent, { centered: true });
  }

  /**
   * Open Review modal
   * @param content modal content
   */
  openMapModal(content: any) {
    this.modalService.open(content, { size: 'fullscreen', centered: true });
  }

  /**
   * Swiper setting
   */
  config = {
    slidesToShow: 4, // Number of slides to show initially
    slidesToScroll: 1, // Number of slides to scroll at a time
    initialSlide: 0, // Index of the initial slide
    dots: true, // Display pagination dots
    arrows: true, // Display navigation arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  /**
  * Bootsrap validation form submit method
  */
  validSubmit() {
    this.submit = true;
  }

  /**
 * Returns form
 */
  get form() {
    return this.validationform.controls;
  }

  /**
   * Bootstrap tooltip form validation submit method
   */
  formSubmit() {
    this.formsubmit = true;
  }

  /**
   * returns tooltip validation form
   */
  get formData() {
    return this.signUpform.controls;
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  customOpen(a: any): void {
    // open lightbox
    this._lightbox.open(this._album, a);
  }

  // Sort filter
  sortField: any;
  sortBy: any
  SortFilter() {
    this.sortField = (document.getElementById("reviews-sorting") as HTMLInputElement).value;
    if (this.sortField[0] == 'A') {
      this.sortBy = 'desc';
      this.sortField = this.sortField.replace(/A/g, '')
    }
    if (this.sortField[0] == 'D') {
      this.sortBy = 'asc';
      this.sortField = this.sortField.replace(/D/g, '')
    }
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


}
