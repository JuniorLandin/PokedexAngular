import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COmponentes
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    ListComponent
  ],
  exports: [
    PokeHeaderComponent,
    ListComponent,
    PokeSearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
