import {Article} from "../modules/article.moduls";
import {data} from "./seed"


export class ArticleData{
    detData(): Article[]{
        let articales: Article[] = [];

        for (let i = 0; i < data.length; i++) {
            articales[i]= new Article(data[i].title, data[i].description,data[i].author, data[i].imageUrl);
            
        }
        return articales;
    }

}