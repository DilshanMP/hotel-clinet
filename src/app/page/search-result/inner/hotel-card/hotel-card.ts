import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // ✅ correct path
import { HotelMap } from '../hotel-map/hotel-map';

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule // ✅ include module
  ],
  templateUrl: './hotel-card.html',
  styleUrls: ['./hotel-card.scss']
})
export class HotelCard {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  private dialog = inject(MatDialog); // ✅ typed

  openModel(): void {
    this.dialog.open(HotelMap, {
      width: '1000px',
      data: {},
      disableClose: true
    });
  }
}
