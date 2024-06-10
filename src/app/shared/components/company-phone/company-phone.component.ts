import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company-phone',
  templateUrl: './company-phone.component.html',
  styleUrl: './company-phone.component.scss'
})
export class CompanyPhoneComponent {
  @Input() phone: string | undefined;
}
