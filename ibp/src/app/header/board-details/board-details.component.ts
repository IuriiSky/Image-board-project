import { Component, OnInit } from '@angular/core';
import { BoardDetail, PostDetails, ImagesAttachment, PostContent } from '../../shared/interfaces/board-detail.interfaces';
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

    public show: boolean = false;
    public buttonName: any = 'Показати коментарі';

    showReplies(){
      this.show = !this.show;
      if(this.show)
        this.buttonName = 'Сховати коментарі';
      else 
        this.buttonName = 'Показати коментарі';
    }

    // addReplyDiv(){
    //   let singlePost = document.querySelector('.single-post.');
    //   const title = document.createElement('div');
    //   title.className ='reply-wrapper';
    //   singlePost.appendChild(title);
    //   console.log('title', title)
    // }

  ngOnInit() {
    this.boardDetailService.getAllPosts(this.boardName).subscribe((data:BoardDetail) => {
      this.boardDetail = data;
      console.log(this.boardDetail);
    });
  }

  setActiveBigImage(image: string){
    this.bigImage = image;
  }

  getImageAttachment(post: PostDetails){
    let attachments = post.content.images.map(a => a.file);
    return attachments;
  }

  getImageReply (post_preview: PostContent){
    let attachments = post_preview.images.map(a => a.file);
    return attachments;
  }

  addBaseUrl(source: string){
    return this.baseUrl + source;
  };
}