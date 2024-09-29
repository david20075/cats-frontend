import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CatsService } from '../../services/cats.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-breeds-table',
  templateUrl: './breeds-table.component.html',
  styleUrls: ['./breeds-table.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatTableModule, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreedsTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'origin', 'temperament'];
  dataSource = new MatTableDataSource<any>();

  constructor(private catsService: CatsService) {}

  ngOnInit(): void {
    this.catsService.getBreeds().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
