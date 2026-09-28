import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';

// Global JavaScript kütüphanelerini kullanabilmek için tanımlar
declare var KTDrawer: any;
declare var KTMenu: any;
declare var KTScroll: any;
declare var KTScrolltop: any;
declare var KTSticky: any;
declare var KTApp: any;
declare var KTUtil: any;
declare var KTSwapper: any;
declare var KTToggle: any;
declare var KTDialer: any;
declare var KTImageInput: any;
declare var KTPasswordMeter: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // styleUrl değil, styleUrls olarak tanımlanmalı
})
export class AppComponent implements AfterViewInit {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        KTMenu?.hideDropdowns();
      } else if (event instanceof NavigationEnd) {
        // Navigation sonrası bileşenlerin tekrar initialize edilmesi
        this.initializeMetronicComponents();
      }
    });
  }

  ngAfterViewInit(): void {
    // İlk yüklemede bileşenleri initialize et
    this.initializeMetronicComponents();
  }

  private initializeMetronicComponents(): void {
    // Gerekli tüm global Metronic bileşenlerinin initialize edilmesi
    KTApp?.createInstances && KTApp.createInstances();
    KTDrawer?.createInstances && KTDrawer.createInstances();
    setTimeout(() => {
      KTMenu?.createInstances && KTMenu.createInstances();
    }, 0);
    KTScroll?.createInstances && KTScroll.createInstances();
    KTSticky?.createInstances && KTSticky.createInstances();
    KTSwapper?.createInstances && KTSwapper.createInstances();
    KTToggle?.createInstances && KTToggle.createInstances();
    KTScrolltop?.createInstances && KTScrolltop.createInstances();
    KTDialer?.createInstances && KTDialer.createInstances();
    KTImageInput?.createInstances && KTImageInput.createInstances();
    KTPasswordMeter?.createInstances && KTPasswordMeter.createInstances();
    KTUtil?.createInstances && KTUtil.createInstances();
  }
}

