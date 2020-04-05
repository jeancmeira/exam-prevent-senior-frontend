import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaLogComponent } from './busca-log.component';

describe('BuscaLogComponent', () => {
  let component: BuscaLogComponent;
  let fixture: ComponentFixture<BuscaLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
