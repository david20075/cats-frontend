import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../services/cats.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-breed-selector',
  templateUrl: './breed-selector.component.html',
  styleUrls: ['./breed-selector.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, CommonModule, MatCardModule],
})
export class BreedSelectorComponent implements OnInit {
  breeds: any[] = [];
  selectedBreed: any = null;
  breedImages: any[] = [];

  constructor(private catsService: CatsService) {}

  ngOnInit(): void {
    this.catsService.getBreeds().subscribe((data) => {
      this.breeds = data;
    });
  }

  onSelectBreed(breedId: string) {
    this.catsService.getImagesByBreed(breedId).subscribe((images) => {
      console.log(images)
      this.breedImages = images;
    });

    this.catsService.getBreedById(breedId).subscribe((breed) => {
      this.selectedBreed = breed;
    });
  }
}
