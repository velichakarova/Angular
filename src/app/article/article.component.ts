import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../modules/article.moduls';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    private symbols: number= 250;
    @Input() article:Article;
    @Input() articleDesc: string;
    descToShow: string;
    articleDescLen:number;
    showReadMoreBtn:boolean =true;
    showHideBtn:boolean = false;
    imgIsShown: boolean = false;
    imaggeButtonTitle:string="Show Image"



  constructor() { }

  ngOnInit(): void {
  }

  readMore():void{
    this.articleDescLen == this.symbols;
    if(this.articleDescLen >= this.articleDesc.length){
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    }else{
      this.descToShow=this.articleDesc.substring(0,this.articleDescLen)
    }
  }

}
