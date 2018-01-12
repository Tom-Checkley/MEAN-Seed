import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.browserUpdate();
  }

  browserUpdate() {
    const $buoop = { notify: { i: 11, f: -4, o: -4, s: -2, c: -4 }, insecure: true, api: 5 };

    function $buo_f() {
      const e = document.createElement('script');
      e.src = '//browser-update.org/update.min.js';
      document.body.appendChild(e);
    }
    try { document.addEventListener('DOMContentLoaded', $buo_f, false); } catch (e) { (<any>window).attachEvent('onload', $buo_f); }
  }

}
