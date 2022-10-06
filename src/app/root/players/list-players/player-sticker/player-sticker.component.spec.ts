import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStickerComponent } from './player-sticker.component';

describe('PlayerStickerComponent', () => {
  let component: PlayerStickerComponent;
  let fixture: ComponentFixture<PlayerStickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerStickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
