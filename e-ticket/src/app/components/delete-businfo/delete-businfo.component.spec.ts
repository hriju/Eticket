import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBusinfoComponent } from './delete-businfo.component';

describe('DeleteBusinfoComponent', () => {
  let component: DeleteBusinfoComponent;
  let fixture: ComponentFixture<DeleteBusinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBusinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBusinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
