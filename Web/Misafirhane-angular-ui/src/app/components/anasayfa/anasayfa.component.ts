import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anasayfa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anasayfa.component.html',
  styleUrl: './anasayfa.component.css'
})
export class AnasayfaComponent {
  constructor(private router: Router) {}

  rezervasyonaGit(): void {
    this.router.navigate(['/rezervasyon']);
  }
}