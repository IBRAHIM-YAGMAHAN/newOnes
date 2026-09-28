import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ErrorHandler, importProvidersFrom } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app/app.routes';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { GlobalErrorHandler } from './app/models/GlobalErrorHandler';
import { TokenInterceptor } from './app/interceptors/token.interceptor';



// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    //provideHttpClient(),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    DatePipe,
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      FormsModule,
      BrowserAnimationsModule,
      NoopAnimationsModule,
      ToastrModule.forRoot({
        timeOut: 6000,          // Toast mesajının görünme süresi
        positionClass: 'toast-top-right', // Toast konumu
        preventDuplicates: true, // Aynı mesajın tekrar etmesini engelleme
        closeButton: true, // Kapatma butonu ekleme
        progressBar:true,      
      }),
      RouterModule.forRoot(routes, { useHash: true })
    )
  ]
})
