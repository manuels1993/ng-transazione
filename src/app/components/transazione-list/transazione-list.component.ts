import { Component } from '@angular/core';
import { Transazione } from '../../models/transazione';
import { TRANSAZIONI } from '../../data/transazioni';

@Component({
  selector: 'app-transazione-list',
  templateUrl: './transazione-list.component.html',
  styleUrl: './transazione-list.component.css',
})
export class TransazioneListComponent {
  transazioni: Transazione[] = TRANSAZIONI;
}
