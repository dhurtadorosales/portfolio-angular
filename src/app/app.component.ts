import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { ProductService } from './services/product.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
        public _infoPageService: InfoPageService,
        public _productService: ProductService,
    ) {

    }
}
