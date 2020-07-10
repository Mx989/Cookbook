import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  //TODO prepare recipe detail fetching from service
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params["id"]);
  }

}
