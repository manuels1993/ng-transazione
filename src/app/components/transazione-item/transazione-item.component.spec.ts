import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioneItemComponent } from './transazione-item.component';

describe('TransazioneItemComponent', () => {
  let component: TransazioneItemComponent;
  let fixture: ComponentFixture<TransazioneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransazioneItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransazioneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
