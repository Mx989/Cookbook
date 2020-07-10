import { Component } from '@angular/core';
import { RecipesService } from './recipes/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RecipesService]
})
export class AppComponent {
  title = 'Cookbook';
}
