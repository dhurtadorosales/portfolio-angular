import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductDescriptionInterface } from '../../interfaces/product-description.interface';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    product: ProductDescriptionInterface;
    id: string;

    constructor(
        private route: ActivatedRoute,
        public productService: ProductService
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe(parameters => {
               this.productService.getProduct(parameters['id'])
                   .subscribe( (product: ProductDescriptionInterface) => {
                       this.id = parameters['id'];
                       this.product = product;
                   })
            });
    }

}
