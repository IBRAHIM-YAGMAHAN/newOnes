import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaComponent } from 'ng-recaptcha';
import { CommonModule } from '@angular/common';
import { ConstantsService } from '../../services/constants.service';
import { GirisService } from '../../services/giris.service';
import { GenelService } from '../../services/genel.service';


@Component({
  selector: 'app-giris',
  standalone: true,
  imports: [ReactiveFormsModule, RecaptchaModule, CommonModule, FormsModule],
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.css']
})
export class GirisComponent implements OnInit {
  yukleniyor = false;
  yukleniyorEdevlet = false;
  girisForm: FormGroup;
  recaptchaToken: string | null = null;
  kayitOlunuyor: boolean = false;
  step: string = 'giris';
  hatalar: any = {};
  suEposta: string = '';
  suTcKimlikNo: string = '';
 
  @ViewChild('recaptchaRefLogin') recaptchaComponentLogin: RecaptchaComponent | undefined;
  @ViewChild('recaptchaRefKayit') recaptchaComponentKayit: RecaptchaComponent | undefined;


  constructor(
    private girisService: GirisService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public genelService: GenelService,
    private constantsService: ConstantsService,
  ) {
    this.girisForm = this.formBuilder.group({
      tckimlikno: new FormControl(''),
      sifre: new FormControl(''),
      recaptcha: new FormControl(''),
    });

  }

  deger: string = '';
  ngOnInit(): void {
    localStorage.removeItem('auth');
    this.route.queryParams.subscribe(params => {
      const userUid = params['UserUid'];
      this.deger = params['deger'];
      const control = params['giris_durum'];
    });
  }

  onCaptchaResolved(event: any): void {
    this.recaptchaToken = event;
  }


  girisYap(): void {
    this.yukleniyor = true;
    const tckimlikno = this.girisForm.controls['tckimlikno']?.value ?? "";
    const sifre = this.girisForm.controls['sifre']?.value ?? "";
    this.girisService.giris("" + tckimlikno, "" + sifre, "" + this.recaptchaToken).subscribe({
      next: (res) => {
        this.genelService.success("Giriş Başarılı.");
        localStorage.setItem(this.constantsService.APP_AUT, JSON.stringify(res.data));
        // Navigation'ı bir sonraki tick'e erteliyoruz ki localStorage kaydı tamamlansın ve guard kontrol edebilsin
        setTimeout(() => {
          this.router.navigateByUrl('/anasayfa');
        }, 50);
      },
      error: err => this.hataYonet(err),
      complete: () => {
        this.yukleniyor = false;
      }
    });
  }


  divOpenFnc(tip: string = ''): void {
    if (tip === 'giris') {
      this.recaptchaComponentLogin?.reset();
      this.recaptchaToken = null;
    }
    this.step = tip;
  }

  girisEdevletLink() {
    window.location.href = "https://giris.erbakan.edu.tr/giris?oto_giris=a7b8a3bd-e6e2-4947-bf5f-9ae6d8b6483e&uygulama_id=23";
  }


  dogrulaniyor = false;
  sifremiUnuttum() {

  }

  kayitOl() { }

  hataYazdir: any[] = [];
  private hataYonet(err: any) {
    this.kayitOlunuyor = false;
    this.yukleniyor = false;
    this.yukleniyorEdevlet = false;
    this.hatalar = {};
    this.recaptchaComponentLogin?.reset();
    this.recaptchaComponentKayit?.reset();
    this.hatalar = err.error.errors;
    this.hataYazdir = [];
    for (let key in this.hatalar) {
      let hata = this.hatalar[key];
      this.genelService.error(hata[0])
      this.hataYazdir.push(this.hatalar[key]);
    }
    if (err.error?.message && err.error?.message != "") { this.genelService.swError(err.error?.message) };
  }
}