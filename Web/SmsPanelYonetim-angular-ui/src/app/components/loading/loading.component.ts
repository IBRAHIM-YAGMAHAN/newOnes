import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit {

  @Input() minimize: boolean=false;
  constructor() { }

  @Input() loader = false;

  ngOnInit(): void {
  }

}
