import { Component, ViewChild } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css'],
})
export class PetFormComponent {
  // types  and  colors  arrays   also can be mocked
  // OR another approach
  // load them from the server on OnInit function.. so this form we be a bit more abstract the type and the color wouldn't be fixed to the form
  types: string[] = ['Dog', 'Cat', 'Horse', 'Other'];
  colors: string[] = ['Black', 'white'];

  model = { name: '', age: 1, type: 'Dog', color: 'Black' };
  isAdded: boolean = false; // variable to check if added

  constructor(private petService: PetService) {}

  submit(): void {
    this.isAdded = false;

    //check for conditions
    if (
      this.model.name.trim() &&
      this.model.name.length <= 25 &&
      this.model.age > 0 &&
      this.model.type &&
      this.model.color
    ) {
      // use service to send data
      this.petService
        .addPet({
          name: this.model.name,
          age: this.model.age,
          type: this.model.type,
          color: this.model.color,
        } as Pet)
        .subscribe((_) => {
          this.model = { name: '', age: 1, type: 'Dog', color: 'Black' }; // reset the form variables
          this.isAdded = true;
        });
    }
  }
}
