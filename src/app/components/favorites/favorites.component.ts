import { Component } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import {ICharacter} from 'src/app/models/interfaces' 
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  
  constructor(private favorites: FavoritesService, private character: CharactersService ){}

  characters: ICharacter[]  = []

  ngOnInit(){
    this.favorites.getFavorites().forEach(char => this.character.getCharacter(char).subscribe(item => {
      this.characters.push(item)
    }))
  }

  changeFavorite(id:number){
    this.favorites.toggleFavorite(id)
    this.characters = []
    this.favorites.getFavorites().forEach(char => this.character.getCharacter(char).subscribe(item => {
      this.characters.push(item)
    }))
  }
}
