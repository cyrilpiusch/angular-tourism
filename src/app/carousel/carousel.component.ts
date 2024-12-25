import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  imports: [NgFor,CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  slidesStore=
  [
    {
      id:1,
      src:"https://images.unsplash.com/photo-1642516861864-2c6c156e9cd6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:"Andhra",
      des:"djagdjagssgdoafdiasgdfkjasfdijasfdo"
    },
    {
      id:2,
      src:"https://images.unsplash.com/photo-1642516861780-1b3ef14b25b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:"Andhra",
      des:"djagdjagssgdoafdiasgdfkjasfdijasfdo"
    }
  ]
    
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}