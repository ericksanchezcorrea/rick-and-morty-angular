import { Component } from '@angular/core';
import { ICharacter } from 'src/app/models/interfaces';
import { CharactersService } from 'src/app/services/characters.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  characters:ICharacter[] = []
  myFavorites:number[] = []
  currentPage:number|any = 0


  constructor(private charactersServices: CharactersService, private favorites: FavoritesService){}

  ngOnInit():void{
    this.charactersServices.getCharacters(this.currentPage).subscribe(data => this.characters = data.results)
    this.myFavorites = this.favorites.getFavorites()
  }

  changeFavorite(id:number){
    this.favorites.toggleFavorite(id)
    this.myFavorites = this.favorites.getFavorites()
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex
    this.charactersServices.getCharacters(this.currentPage + 1).subscribe(data => this.characters = data.results)

  }

}
