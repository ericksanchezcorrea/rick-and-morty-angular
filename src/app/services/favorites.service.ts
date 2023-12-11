import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }

  private favorites: number[] = [];

  getFavorites(): number[] {
    const favorites = localStorage.getItem('Rfavorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  toggleFavorite(characterId: number): void {
    const favorites = this.getFavorites();

    const index = favorites.indexOf(characterId);
    if (index !== -1) {
      // Remove from favorites if already present
      favorites.splice(index, 1);
    } else {
      // Add to favorites if not present
      favorites.push(characterId);
    }

    localStorage.setItem('Rfavorites', JSON.stringify(favorites));
  }

}
