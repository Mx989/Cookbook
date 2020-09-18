import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  constructor(private shoppingListService: ShoppingListService) { }

  shoppingList: Ingredient[] = [];

  shoppingListSub = this.shoppingListService.getShoppingList().subscribe(list=>{
    this.shoppingList = list;
  })

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.shoppingListSub.unsubscribe();
  }
}
