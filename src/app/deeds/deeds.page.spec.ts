import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeedsPage } from './deeds.page';

describe('DeedsPage', () => {
  let component: DeedsPage;
  let fixture: ComponentFixture<DeedsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeedsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
