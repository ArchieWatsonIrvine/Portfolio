import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailObfuscator } from './email-obfuscator';

describe('EmailObfuscator', () => {
  let component: EmailObfuscator;
  let fixture: ComponentFixture<EmailObfuscator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailObfuscator],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailObfuscator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
