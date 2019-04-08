import { Component, OnInit } from '@angular/core';
import { Board, CreateBoard } from '../../shared/interfaces/board.interfaces';
import { BoardsService } from '../../services/boards.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})

export class BoardsComponent implements OnInit {

  createBoard: FormGroup;

  showCreateForm: boolean = true;

  toggleCreateBoard() {
    this.showCreateForm = false;
  }

  toggleCancelBoard() {
    this.showCreateForm = true;
  }

  public boards: Board[];

  constructor(private boardsService: BoardsService,
              private router: Router) {}

  public createNewBoard: CreateBoard = {
    name: '',
    short_name: '',
    user_id: 0,
  };

  addBoard() {
    this.createNewBoard.user_id = 1;
    this.boardsService.createBoard(this.createNewBoard)
    .subscribe(board => {
      console.log(board);
      this.createNewBoard.name = '';
      this.createNewBoard.short_name = '';
      this.createNewBoard.user_id = 0;
      this.showCreateForm = true;
    });
  };
 
  ngOnInit() {
    this.boardsService.getAllBoards().subscribe((data:Board[]) => {
      this.boards = data;
    });

    this.createBoard = new FormGroup({
      short_name: new FormControl('',[Validators.required, Validators.maxLength(3)]),
      name: new FormControl('',[Validators.required])      
    });
  }

  // onSelect(board){
  //   this.router.navigate(['/boards', board.id]);
  // }
}
