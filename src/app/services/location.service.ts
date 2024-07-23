import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private apiUrl =
    'https://798d3f60-5f0d-4ac4-86ef-1e70e93dd969-00-2d2hykzs9a0zg.worf.replit.dev/public';

  constructor(private http: HttpClient) {}

  updateLocation(
    userId: number,
    latitude: number,
    longitude: number
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/child.php`, {
      user_id: userId,
      latitude,
      longitude,
    });
  }
}
