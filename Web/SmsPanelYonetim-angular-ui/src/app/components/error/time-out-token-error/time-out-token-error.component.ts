import { Component, Input } from '@angular/core';
import { GirisService } from '../../../services/giris.service';
import { ConstantsService } from '../../../services/constants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-out-token-error',
  imports: [],
  templateUrl: './time-out-token-error.component.html',
  styleUrl: './time-out-token-error.component.css'
})
export class TimeOutTokenErrorComponent {
  private _remainingTime: number = 0;
  public timeDisplay: string = '00:00';


  constructor(private girisService: GirisService,private constantsService: ConstantsService,private router: Router ) {}

  @Input()
  set remainingTime(value: number) {
    this._remainingTime = value;
    this.updateTime();
  }

  get remainingTime(): number {
    return this._remainingTime;
  }

  private updateTime(): void {
    if (this._remainingTime === null) {
      this.timeDisplay = ' ??:?? ';
    } else {
      const minutes = Math.floor(this._remainingTime / 60000);
      const seconds = Math.floor((this._remainingTime % 60000) / 1000);
      this.timeDisplay = `${this.padZero(minutes)}:${this.padZero(seconds)}`;
    }
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  tokenyenile() {
    this.girisService.refreshToken('1').subscribe({
      next: (res) => {
        this.girisService.gerisayim_baslat();
      },
      error: (err) => {

      }
    });
  }
  cikis() {
    this.girisService.cikis().subscribe({
      next: (res) => {
        localStorage.removeItem(this.constantsService.APP_AUT);
      },
      error: (err) => {
        this.router.navigate(['giris'], { queryParams: { deger: 'Cikis' } });

      },
      complete: () => {
        this.router.navigate(['giris'], { queryParams: { deger: 'Cikis' } });

      }
    });
  }
}