import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];
  isRequested: boolean = false;

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.isRequested = true;
    this.petService.getPets().subscribe((pets) => {
      this.pets = pets;
      this.isRequested = false;
    });
  }
}
