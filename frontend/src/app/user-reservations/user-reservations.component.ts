import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { car } from '../models/car.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { reservation } from '../models/reservation.model';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {
  carList: car[] = []; // Initialisation en tant que tableau vide
  reservation: reservation[] = []; // Initialisation en tant que tableau vide

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.loadCars();
    this.loadReservations();
  }

  loadCars(): void {
    this.carService.getAll().subscribe(
      (result: any) => {
        this.carList = result.data;
        console.log(this.carList);
      },
      error => {
        console.log(error);
      }
    );
  }

  loadReservations(): void {
    this.reservationService.getAll().subscribe(
      (result: any) => {
        this.reservation = result.data;
        console.log(this.reservation);
      },
      error => {
        console.log(error);
      }
    );
  }

  isAdminOfReservation(useradmin: string): boolean {
    return this.carList.some(car => car.user === useradmin);
  }
}
