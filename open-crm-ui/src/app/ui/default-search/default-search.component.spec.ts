import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSearchComponent } from './default-search.component';

describe('DefaultSearchComponent', () => {
  let component: DefaultSearchComponent;
  let fixture: ComponentFixture<DefaultSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
