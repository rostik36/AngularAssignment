import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PETS } from './mock-pet';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor() {}

  getPets(): Observable<Pet[]> {
    return of(PETS).pipe(delay(700)); // also simulate 700ms delay from response from server
  }

  addPet(pet: Pet): Observable<any> {
    PETS.push(pet);
    return of([]).pipe(delay(700)); // also simulate 700ms delay from response from server
  }
}
