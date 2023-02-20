import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  { path: '', redirectTo: 'add-pet', pathMatch: 'full' },
  { path: 'add-pet', component: PetFormComponent },
  { path: 'pets', component: PetsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
