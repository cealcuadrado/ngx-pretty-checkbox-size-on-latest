import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  nivel: number = 1;

  constructor() {}

  ngOnInit(): void {}

  definirNivelTamannio(): string {
    return `nivel-${this.nivel}`;
  }
}
