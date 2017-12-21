import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketViewComponent } from './ticket-view.component';
import { TestModuleModule } from '../../modules/test-module/test-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TicketViewComponent', () => {
  let component: TicketViewComponent;
  let fixture: ComponentFixture<TicketViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketViewComponent ],
      imports: [
        TestModuleModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
