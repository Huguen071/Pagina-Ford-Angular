import { Component, Input } from '@angular/core';
import { VeiculoData } from '../../models/veiculo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-table',
  imports: [CommonModule],
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.css'
})
export class CarTableComponent {
  @Input() vehicleData: VeiculoData | null = null;
}