import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioneListComponent } from './transazione-list.component';

describe('TransazioneListComponent', () => {
  let component: TransazioneListComponent;
  let fixture: ComponentFixture<TransazioneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransazioneListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransazioneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
