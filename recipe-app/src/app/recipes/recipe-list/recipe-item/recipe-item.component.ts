import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.modal';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  // constructor(private recipeService: RecipeService) {}

  @Input() recipe: Recipe;
  @Input() index: number;

  // @Output() recipeSelected = new EventEmitter<void>();

  // onSelected() {
  //   // this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
