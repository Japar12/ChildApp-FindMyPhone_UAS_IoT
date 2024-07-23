import { Component } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message: string = ''; // Inisialisasi dengan string kosong

  constructor(private locationService: LocationService) {}

  async updateLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const userId = 1; // Contoh user ID
      const latitude = coordinates.coords.latitude;
      const longitude = coordinates.coords.longitude;

      this.locationService.updateLocation(userId, latitude, longitude).subscribe(response => {
        if (response.status === 'success') {
          this.message = response.message;
        } else {
          this.message = 'Failed to update location.';
        }
      }, (error: any) => { // Menangani error
        this.message = 'Error occurred: ' + error.message;
      });
    } catch (error) {
      this.message = 'Error occurred: ' + (error as Error).message; // Menangani error
    }
  }
}
