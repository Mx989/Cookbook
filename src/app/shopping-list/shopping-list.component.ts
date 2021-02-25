import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/models/ingredient.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  constructor(private shoppingListService: ShoppingListService, private router: Router) { }

  shoppingList: Ingredient[] = [];

  shoppingListSub = this.shoppingListService.getShoppingList().subscribe(list=>{
    this.shoppingList = list;
  })

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.shoppingListSub.unsubscribe();
  }

  
  clearList(): void {
    this.shoppingListService.clearList();
    this.router.navigate(['./recipes']);
  }
}
