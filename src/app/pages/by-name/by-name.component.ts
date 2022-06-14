import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
})
export class ByNameComponent implements OnInit {


  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  getSearchedElement(input: HTMLInputElement) {
    this.route.navigate(['/pokemon',input.value]);

  }


}
