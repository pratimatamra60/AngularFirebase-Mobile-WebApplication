import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';


@Component({
  selector: 'app-stat-table',
  templateUrl: './stat-table.component.html',
  styleUrls: ['./stat-table.component.scss']
})
export class StatTableComponent implements OnInit {

  teams = [];
  constructor(private _teamService: TeamService) { }

  ngOnInit() {
    this.teams = this._teamService.getTeams();
  }
}
