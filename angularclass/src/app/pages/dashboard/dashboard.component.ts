import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { Veiculo, VeiculoData } from '../../models/veiculo.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../components/card/card.component";
import { CarTableComponent } from "../../components/car-table/car-table.component";
import { MenuComponent } from '../../components/menu/menu.component'; // Importe o MenuComponent

@Component({
  selector: 'app-dashboard',
  // Adicione MenuComponent aos imports
  imports: [ReactiveFormsModule, CommonModule, CardComponent, CarTableComponent, MenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  vehicles: Veiculo[] = [];
  selectedVehicle!: Veiculo;
  vehicleData: VeiculoData | null = null; // Pode ser nulo inicialmente

  selectCarForm = new FormGroup({
    carId: new FormControl('')
  });

  searchForm = new FormGroup({
    vin: new FormControl('')
  });

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getVehicles().subscribe((res) => {
      this.vehicles = res.vehicles;
    });

    this.selectCarForm.controls.carId.valueChanges.subscribe((id) => {
      if (id) {
        this.selectedVehicle = this.vehicles.find(v => v.id == id)!;
        this.vehicleData = null; // Limpa a tabela ao selecionar um novo carro
        this.searchForm.reset(); // Limpa o campo de busca
      }
    });
  }

  onSearch() {
    const vin = this.searchForm.value.vin;
    if (vin) {
      this.dashboardService.getVehicleData(vin).subscribe({
        next: (data) => {
          this.vehicleData = data;
        },
        error: () => {
          this.vehicleData = null;
          alert('Nenhum veículo encontrado com este código VIN.');
        }
      });
    }
  }
}