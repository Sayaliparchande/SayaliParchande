import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkWallComponent } from './bk-wall.component';

describe('BkWallComponent', () => {
  let component: BkWallComponent;
  let fixture: ComponentFixture<BkWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
