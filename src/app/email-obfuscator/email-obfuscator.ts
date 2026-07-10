import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-obfuscator',
  imports: [CommonModule],
  template: `
    <a [href]="'mailto:' + emailAddress" class="contact-link">
      {{ emailAddress }}
    </a>
  `,
})
export class EmailObfuscator implements OnInit {
  @Input() user: string = '';
  @Input() domain: string = '';

  emailAddress: string = '';

  ngOnInit(): void {
    // The email is assembled only after the component initializes on the client side
    this.emailAddress = `${this.user}@${this.domain}`;
  }}