import { Component, OnInit } from '@angular/core';
import { CreateReply, Reply} from '../shared/interfaces/reply.interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ReplyService } from '../services/reply.service';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.scss']
})
export class RepliesComponent implements OnInit {

  createReply: FormGroup;

  public replies: Reply[];

  private boardIndex: string;
  private postIndex: string;

  constructor(private replyService: ReplyService,
              private router: Router,
              private route: ActivatedRoute) {
                this.route.params.subscribe((params: Params) =>{
                  if (params["board_index"]) {
                    this.boardIndex = params["board_index"];
                    console.log(this.boardIndex);
                  };
                });
                this.route.params.subscribe((postParams: Params) => {
                  if (postParams["post_index"]) {
                    this.postIndex = postParams["post_index"];
                    console.log(this.postIndex);
                  }
                })
               }

  public createNewReply: CreateReply = {
    board_index: '',
    post_index: '',
    text: '',
    file: null,
  };


  handleFileInput(files: FileList) {
    this.createNewReply.file = files.item(0);
}

  addNewReply(){
    this.replyService.createNewReply(this.createNewReply, this.boardIndex, this.postIndex)
    .subscribe(reply =>{
      console.log(reply);
      this.createNewReply.text = '';
    })
  }

  ngOnInit() {
    this.createReply = new FormGroup({
      text: new FormControl('', [Validators.required])
    });
  }

}
