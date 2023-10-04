import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonUserComponent } from './json-user.component';

describe('JsonUserComponent', () => {
  let component: JsonUserComponent;
  let fixture: ComponentFixture<JsonUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonUserComponent]
    });
    fixture = TestBed.createComponent(JsonUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
