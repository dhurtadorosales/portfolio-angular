import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../interfaces/product.interface';


@Injectable()
export class ProductService {

    charging = true;
    products: ProductInterface[] = [];
    filteredProducts: ProductInterface[] = [];

    constructor(private _http: HttpClient) {
        this.getProducts();
    }

    private getProducts() {
        return new Promise((resolve, reject) => {
            this._http.get('https://angular-portfolio-197d3.firebaseio.com/products_idx.json')
                .subscribe((response: ProductInterface[]) => {
                    this.products = response;
                    this.charging = false;
                    resolve();
                });
        });
    }

    public getProduct(id: string) {
       return this._http.get(`https://angular-portfolio-197d3.firebaseio.com/products/${id}.json`);
    }

    public searchProduct(search: string) {

        if (this.products.length === 0) {
            // Charge product
            this.getProducts().then(() => {
                // After get products
                // Filter
                this.filterProducts(search);
            })
        } else {
            // Filter
            this.filterProducts(search);
        }

    }

    private filterProducts(search: string) {

        // Clean array
        this.filteredProducts = [];

        search = search.toLocaleLowerCase();

        this.products.forEach(prod => {
            const lowerTitle = prod.titulo.toLocaleLowerCase();

            if (prod.categoria.indexOf(search) >= 0 || lowerTitle.indexOf(search) >= 0) {

                this.filteredProducts.push(prod);
            }
        });
    }
}
