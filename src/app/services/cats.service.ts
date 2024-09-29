import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<any> {
    return this.http.get(`${this.baseUrl}/breeds`);
  }

  getBreedById(breedId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/breeds/${breedId}`);
  }

  searchBreeds(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/breeds/search`, {
      params: { query },
    });
  }

  getImagesByBreed(breedId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/imagesbybreedid`, {
      params: { breed_id: breedId },
    });
  }
}
