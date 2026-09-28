import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Router, RouterOutlet } from '@angular/router';
import { TimeOutTokenErrorComponent } from '../error/time-out-token-error/time-out-token-error.component';
import { ConstantsService } from '../../services/constants.service';
import { GirisService } from '../../services/giris.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NavbarComponent, FooterComponent, TimeOutTokenErrorComponent, CommonModule],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent implements OnInit {
  public isOnline: boolean = true;
  public remainingTime: number = 0;
  public timeDisplay: string = '00:00';
  private subscription: Subscription = new Subscription();


  constructor(
    private router: Router,
    public girisService: GirisService,
    public constantsService: ConstantsService) { }

  ngOnInit(): void {

    // this.networkDetector.onlineStatus$.subscribe(status => {
    //   this.isOnline = status;
    // });

    this.girisService.gerisayim_baslat();

    this.subscription = this.girisService.tokenRefreshed.subscribe((remainingTime) => {
      this.remainingTime = remainingTime;
    });

  }
}
