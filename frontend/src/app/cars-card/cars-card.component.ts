import { Component, OnInit } from '@angular/core';
import { car } from '../models/car.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { environment } from '../../environments/environment';
import{user}from'../models/user.model';

@Component({
  selector: 'app-cars-card',
  templateUrl: './cars-card.component.html',
  styleUrls: ['./cars-card.component.css']
})
export class CarsCardComponent implements OnInit {
  carList?: car[];
  imagesURL = environment.imagesLink;
  showAll: boolean = false;  // Variable to track the display state

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

    this.carService.getCars().subscribe(
      (result: car[]) => {
        this.carList = result;
        console.log('Car List:', this.carList);
        console.log()
      },
      error => {
        console.error('Error fetching car data:', error);
      }
    );
  }

  sanitize(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  toggleShowAll(): void {
    this.showAll = !this.showAll;
  }
}
