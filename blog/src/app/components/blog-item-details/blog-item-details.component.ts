import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.scss']
})
export class BlogItemDetailsComponent implements OnInit {
 // image='http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg';
  public image ='';
  public text: string;
  public id: number;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });

    this.dataService.getBtId(id).subscribe(res => {
      this.image = res['image'];
      this.text = res['text'];
    });
  }

}
