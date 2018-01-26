import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

team;

  constructor( private activatedRoute: ActivatedRoute, private _teamService: TeamService) {
    this.team = {
      name : 'hello',
      logo : '',
      coach : '',
      wins : '',
      loses : ''

    };
    this.activatedRoute.params.subscribe(params => {
      this.team = this._teamService.getTeam(params['id']);
      console.log(this.team);
    });
  }

  ngOnInit() {
  }



}
