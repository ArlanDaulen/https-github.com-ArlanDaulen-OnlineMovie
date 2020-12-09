import { Component, OnInit } from '@angular/core';
import { Movie } from '..//..//classes/Movie';
import { DataService } from '..//..//services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  searchText = '';

  menus = ["/Adventure", "/Action", "/Horror", "/Comedy", "/Detective", "/Cartoon"];

  constructor(private dataService: DataService) { }

  category: Movie[] = [];
  /*category: any[] = [];*/
  id: number;
  name: string;
  url: string;
  /*check(index) {
    switch (index){
      case 0:
        this.category = this.dataService.adventuref();
        break;
      case 1:
        this.category = this.dataService.actionf();
        break;
      case 2:
        this.category = this.dataService.horrorf();
        break;
      case 3:
        this.category = this.dataService.comedyf();
        break;
      case 4:
        this.category = this.dataService.detectivef();
        break;
      case 5:
        this.category = this.dataService.cartoonf();
        break;
      /*case 6:
        this.dataService.dramasf();
        break;
      case 7:
        this.dataService.documentaryf();
        break;
      case 8:
        this.dataService.familyf();
        break;
      default:
        break;
    }
  }*/

  ngOnInit(): void {
  this.dataService.getData().subscribe((data: Movie) => this.category = data["Adventure"]);
  }

}
