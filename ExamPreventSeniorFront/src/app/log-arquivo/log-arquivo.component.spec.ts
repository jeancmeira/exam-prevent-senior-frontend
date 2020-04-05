import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogArquivoComponent } from './log-arquivo.component';

describe('LogArquivoComponent', () => {
  let component: LogArquivoComponent;
  let fixture: ComponentFixture<LogArquivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogArquivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
