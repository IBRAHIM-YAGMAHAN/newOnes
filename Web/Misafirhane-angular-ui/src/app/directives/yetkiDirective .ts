import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { YetkiService } from '../services/yetki.service';

@Directive({
  selector: '[appYetki]',
  standalone: true
})
export class AppYetkiDirective {
  @Input() set appYetki(yetkiler: string | string[]) {
    // Eğer tek yetki girildiyse, string'i diziye çevir
    const yetkiListesi = Array.isArray(yetkiler) ? yetkiler : [yetkiler];    
    // En az bir yetki varsa içeriği göster
    if (yetkiListesi.some(yetki => this.yetkiService.yetkiVar(yetki))) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private yetkiService: YetkiService
  ) {}
}
