import { Component, Input } from '@angular/core';
import { Transazione } from '../../models/transazione';

@Component({
  selector: 'app-transazione-item',
  templateUrl: './transazione-item.component.html',
  styleUrl: './transazione-item.component.css',
})
export class TransazioneItemComponent {
  @Input()
  transazione?: Transazione;
}
