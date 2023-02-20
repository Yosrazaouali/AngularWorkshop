import { Component, OnInit } from '@angular/core';
import { listenerCount } from 'process';
import { Article } from '../core/model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor() { }
  listArticles!: Article[];
  numbMax! : number ; 


titre : string =" Les articles du jour !" ; 
  ngOnInit(): void {
    this.listArticles = [
      { titre: 'Le championnat du monde', contenu: 'Le champion du monde de cette année est', auteur: 'Med Taher', date: '12/12/2005', categorie: 'Sport' },
      { titre: 'Les nouveaux parents', contenu: 'Les nouveaux parents.', auteur: 'Ahmed Said.', date: '11/11/2018', categorie: 'Education' },
      { titre: 'Comment écrire votre CV.', contenu: 'Pour réussir à décraucher un emploi ...', auteur: 'Elsa.', date: '02/04/2017', categorie: 'Travail' }]  ;



  }
  enlever() {

    for (let i = 0 ; i<this.listArticles.length ; i++ ) {

      if(this.listArticles[i].categorie=="Travail") {

       var io =  this.listArticles.indexOf(this.listArticles[i]) ; 
        this.listArticles.splice(io,1); 
      }

    }
 
  }
}
