import { Component, Input } from '@angular/core';
import { Article } from '../models/article.models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  private symbols: number = 250;
  @Input() article!: Article;
  @Input() articleDesc: string = '';
  descToShow: string = '';
  articleDescLen: number = 0;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';

  constructor() {
      this.articleDescLen = 0;
      this.descToShow = '';

  }

  readMore():void {
    this.articleDescLen += this.symbols;
    if (this.articleDescLen >= this.articleDesc.length) {
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    }
    this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
  }

  hideDesc() {
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
  }

  toggleImage() {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageIsShown ? "Hide Image" : "Show Image";
  }
}
