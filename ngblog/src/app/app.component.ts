import { Component } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

// Importation locale
import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Variables
export class AppComponent {
  title: string;
  articles: Array<Article>;
  editing: boolean;
  editArticle: Article;

// articleService: ArticleService;

// Valeurs des variables //
  constructor(private articleService: ArticleService) { // Toutes les déclarations de 'articleService' doivent avoir des modificateurs identiques
    this.editing = false;
    this.editArticle = new Article(0, '');
    this.title = 'Better blog';
    this.articles = new Array();
    this.articles.push(new Article(99, 'Article de test', 'Super description'));
  }

  ngOnInit() {
    
        this.articleService.list().subscribe({
          // Propriétés possibles : next, error, 
          // Les fonctions next et error ne font pas partie de la fonction list
          next: (articles) => {
            // Récupere le resultat de la réponse http
            this.articles = articles;
          },
          error: (response) => {
            //Si erreur..
            console.log('Impossible de récupérer les articles dans le fichier JSON', response);
          }
        });
      }

addArticle() {
  this.editing = true;
}

backToList() {
  setTimeout(() => this.editing = false);
}

saveArticle(myForm: NgForm) {
  
      //this.articles.push(this.editArticle);
      //this.articles.push(JSON.parse(JSON.stringify(this.editArticle)));
      if (this.editArticle.id >= 0) {
        this.articleService.update(this.editArticle)
        .subscribe((article) => {
          // Remplacer l'article a jour dans la liste
          let index = this.articles.findIndex(
            (value: Article) => value.id === article.id);
          this.articles.splice(index, 1, article);
        });
      } else {
        this.articleService.create(this.editArticle)
          .subscribe((article) => this.articles.push(article));
      }
      this.editArticle.id = undefined;
      myForm.resetForm();
  
    }

modifyArticle(id: number, index: number) {
  
      this.editArticle = this.articles[index];
      //Bascule vers l'affichage du formulaire
      this.addArticle();
    }
  
    deleteArticle(id: number, index: number) {
      // splice permet de supprimer une donnée d'un tableau
      this.articles.splice(index, 1);
  
    }
}
