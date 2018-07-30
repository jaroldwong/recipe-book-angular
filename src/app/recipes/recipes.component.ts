import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService] // Instance of service for this component and and children components
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
