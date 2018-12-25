import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-individual',
  templateUrl: './listing-individual.component.html',
  styleUrls: ['./listing-individual.component.css']
})
export class ListingIndividualComponent implements OnInit {

  loadAPI: Promise<any>;
  constructor() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
   }

  ngOnInit() {
  }
  public loadScript() {
    let isFound = false;
    const scripts = document.getElementsByTagName('script');
    for (let i  = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes('loader')) {
            isFound = true;
        }
    }

    if (!isFound) {
        const dynamicScripts = ['assets/dist/bundle.js'];

        for (let i = 0; i < dynamicScripts .length; i++) {
            const node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }

    }
}
}
