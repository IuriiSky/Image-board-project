import { Component, OnInit } from '@angular/core';
import { BoardDetail, PostDetails, PostAttachment } from '../../shared/interfaces/board-detail.interfaces';
import { BoardDetailService } from '../../services/board-detail.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrls: ['./board-details.component.scss']
})
export class BoardDetailsComponent implements OnInit {

  private baseUrl = 'http://localhost:3000';

  public boardDetail: BoardDetail;

  public boardName: string;
  
  public bigImage: string = null;

  constructor(private boardDetailService: BoardDetailService,
              private router: Router,
              private route: ActivatedRoute) { 
    this.route.params.subscribe((params: Params) => { 
      if (params["short_name"]) {
          this.boardName = params["short_name"];
        }
      });
     };

  ngOnInit() {
    this.boardDetailService.getAllPosts(this.boardName).subscribe((data:BoardDetail) => {
      this.boardDetail = data});
  }

  setActiveBigImage(image: string){
    this.bigImage = image;
  }

  getImageAttachment(post: PostDetails){
    let attachments = post.content.attachments.filter(a => a.type === "Image").map(a => a.file);
    return attachments;
  }

  addBaseUrl(source: string){
    return this.baseUrl + source;
  };
  
  // getImageUrl(post: PostDetails) {
  //   //let imageAttachment = this.getAttachment("Image", post.content.attachments);
  //   let imageAttachment = this.getImageAttachment(post);
  //   let url = imageAttachment[0].file.url;
  //   return this.baseUrl + url;
  // };
  

  // getThumbImageUrl(post: PostDetails) {
  //   //let imageAttachment = this.getAttachment("Image", post.content.attachments);
  //   //let imageAttachment = this.getImageAttachment(post.content.attachments);
  //   let imageAttachments = this.getImageAttachment(post);
  //   let result = imageAttachments.map(a => this.baseUrl + a.file.thumb.url);
  //   return result;

  //   // let arr = new Array();
  //   // imageAttachments.forEach(a => {
  //   //   arr.push(this.baseUrl + a.file.thumb.url);
  //   // });
  //   // return arr;

  //   // let arr = new Array();
  //   // arr.push(this.baseUrl + url);
  //   // arr.push(this.baseUrl + url);
  //   // return arr;
  // };

  // getImageAttachment(attachments : PostAttachment[]){
  //   return  attachments.find(a => a.type === "Image");
  // }

  // getAttachment(attachmentType: string, attachments : PostAttachment[]){
  //     return  attachments.find(a => a.type === attachmentType);
  // }
}