import { Component, OnInit } from '@angular/core';
import {Volunteer} from "../../model/volunteer";
import {DonateFoodDialogComponent} from "../manager/dialogs/donate-food-dialog/donate-food-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {SchedulerDialogComponent} from "./scheduler-dialog/scheduler-dialog.component";

import {VolunteerService} from "../../services/volunteer.service";
import {Food} from "../manager/interface/food";
import {FoodService} from "../manager/service/food.service";
import {PackagesDialogComponent} from "./packages-dialog/packages-dialog.component";
import {NeedypeopleDialogComponent} from "./needypeople-dialog/needypeople-dialog.component";

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {
    volunteer = new Volunteer();

  constructor(public dialog: MatDialog,
              private volunteerService: VolunteerService) { }

    ngOnInit(): void {
    }

  setSchedule() {
      const dialogRef = this.dialog.open(SchedulerDialogComponent, {
          width: '22%',
      });

      dialogRef.afterClosed().subscribe(result => {
          if (result) {
              console.log("aici");
              this.volunteerService.setSchedule(result).subscribe(() => {
                  console.log('Added successfully!');
                  this.setSchedule();
              });
          }
      });
  }

    public makePackages() {
        const dialogRef = this.dialog.open(PackagesDialogComponent, {
            width: '100%',
        });
    }

    public showNeedyPeople() {
        const dialogRef = this.dialog.open(NeedypeopleDialogComponent, {
            width: '100%',
        });
    }

}
