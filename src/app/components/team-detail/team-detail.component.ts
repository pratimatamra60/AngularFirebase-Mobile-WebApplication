import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
name = '';
coach = '';
wins = '';
logo = '';
loses = '';

  constructor( private activatedRoute: ActivatedRoute, private _teamService: TeamService) {
    team = {};
    this.activatedRoute.params.subscribe(params => {
      this.team = this._teamService.getTeam(params['id']);
      this.name = this.team.name;
      this.coach = team.coach;
      this.wins = team.wins;
      this.logo = team.logo;
      this.loses = team.loses;
      console.log(this.team);
    });
  }

  ngOnInit() {
  }



}
