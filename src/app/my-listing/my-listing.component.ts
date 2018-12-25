import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-listing',
  templateUrl: './my-listing.component.html',
  styleUrls: ['./my-listing.component.css']
})
export class MyListingComponent implements OnInit {

  loadAPI: Promise<any>;
  myListing = [
    {thumb: '../../assets/img/watches/Rolex-Cellini-50525-124695-1-181109-163609.jpg', title: '2018 Rolex Celini',
    views: '3,420', interested: '249', expired: '21 Dec, 2018', price: '$3,240.00'},
    {thumb: '../../assets/img/watches/Rolex-Cellini-50525-124695-1-181109-163609.jpg', title: '2018 Rolex Celini',
    views: '3,420', interested: '249', expired: '21 Dec, 2018', price: '$3,240.00'},
    {thumb: '../../assets/img/watches/Rolex-Cellini-50525-124695-1-181109-163609.jpg', title: '2018 Rolex Celini',
    views: '3,420', interested: '249', expired: '21 Dec, 2018', price: '$3,240.00'}
  ];
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
