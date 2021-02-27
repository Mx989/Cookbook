import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  constructor(private recipesService: RecipesService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.recipesService.addRecipe(form.value.name, form.value.description, form.value.imgPath).subscribe( res=>{
      this.router.navigate(['./recipes']);
    });
  }

  return() {
    this.router.navigate(['./recipes']);
  }
}
