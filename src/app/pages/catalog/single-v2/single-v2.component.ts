import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

// Light Box
import { Lightbox } from 'ngx-lightbox';

import { apartments, recently } from './single-v2.model';
import { apartmentsData, recentlyData } from './data';

// import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-single-v2',
  templateUrl: './single-v2.component.html',
  styleUrls: ['./single-v2.component.scss']
})

/**
 * SingleV2 Component
 */
export class SingleV2Component {

  isLeftColumnFixed = false;

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  apartmentsData!: apartments[];
  recentlyData!: recently[];
  public firstColleaps = true;

  id = 'dofyR9p8e7w';
  private player: any;
  private ytEvent: any;

  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  constructor() { }


  @ViewChild('customMenuEnd')
  customMenuEnd!: ElementRef;


  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Home', link: '' },
      { label: 'Property for rent', link: '/catalog/rent' },
      { label: 'Pine Apartments', active: true }
    ];

    // Data Get Function
    this._fetchData();
  }

  SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }

  // Data Fetch
  private _fetchData() {
    this.apartmentsData = apartmentsData;
    this.recentlyData = recentlyData;
  }

  /**
   * Swiper setting
   */
  config = {
    initialSlide: 0,
    slidesPerView: 1,
    pagination: true,
    navigation: true,
    prevArrow: false, // Скрывает кнопку "назад" в сладере
    nextArrow: false, // Скрывает кнопку "вперед" в слайдере 
  };

  /**
   * Swiper setting
   */
  recently = {
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
    ]
  };

  // Youtube Player
  onStateChange(event: any) {
    this.ytEvent = event.data;
  }
  savePlayer(player: any) {
    this.player = player;
  }
  playVideo() {
    this.player.playVideo();
  }
  pauseVideo() {
    this.player.pauseVideo();
  }

  // Imageslider: SwiperOptions = {
  //   spaceBetween: 10,
  //   direction: 'horizontal',
  //   slidesPerView: 5
  // }

  slidePreview(id: any, event: any) {
    const swiper = document.querySelectorAll('.swiperlist')
    swiper.forEach((el: any) => {
      el.classList.remove('tns-nav-active')
    })
    event.target.closest('.swiperlist').classList.add('tns-nav-active')
    this.slickModal.slickGoTo(id)
  }
  slickChange(event: any) {
    const swiper = document.querySelectorAll('.swiperlist')
  }


  //fix custom menu
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    //console.log('Scroll position:', scrollPosition);
    this.isLeftColumnFixed = scrollPosition > 190;

    // Проверяем, находится ли страница перед футером
    if (scrollPosition > this.customMenuEnd.nativeElement.offsetTop - window.innerHeight) {
      this.isLeftColumnFixed = false;
      console.log('this.isLeftColumnFixed:', this.isLeftColumnFixed);
    } else if (scrollPosition > 190) {
      this.isLeftColumnFixed = true;
    }
  }

  

  

}
