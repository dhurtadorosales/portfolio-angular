import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { AppRoutingModule } from './app-routing.module';
import { InfoPageService } from './services/info-page.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PortfolioComponent,
        AboutComponent,
        ItemComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        InfoPageService,
        ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
