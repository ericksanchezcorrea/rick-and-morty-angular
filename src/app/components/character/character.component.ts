import { Component } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import {ICharacter} from 'src/app/models/interfaces' 
import { CharactersService } from 'src/app/services/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  
  constructor(private favorites: FavoritesService, private character: CharactersService, private routed: ActivatedRoute ){}

  item: ICharacter | any
  id:number|any
  isFavorite:boolean = false
  myFavorites:number[] = []

  changeFavorite(id:number){
    this.favorites.toggleFavorite(id)
    this.favorites.getFavorites().includes(this.id) ? this.isFavorite = true : this.isFavorite = false
  }

  ngOnInit(){
    this.routed.params.subscribe(params => this.id = parseInt(params['id']))
    this.favorites.getFavorites().includes(this.id) ? this.isFavorite = true : this.isFavorite = false
    this.character.getCharacter(this.id).subscribe(char => this.item = char)
  }
}
