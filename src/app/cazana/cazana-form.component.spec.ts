import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CazanaFormComponent } from './cazana-form.component';

describe('CazanaFormComponent', () => {
  let component: CazanaFormComponent;
  let fixture: ComponentFixture<CazanaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CazanaFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CazanaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
