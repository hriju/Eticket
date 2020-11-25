import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBusinfoComponent } from './view-businfo.component';

describe('ViewBusinfoComponent', () => {
  let component: ViewBusinfoComponent;
  let fixture: ComponentFixture<ViewBusinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBusinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBusinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
