import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailObfuscator } from './email-obfuscator/email-obfuscator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmailObfuscator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ArchieWatsonIrvinePortfolio');
}
