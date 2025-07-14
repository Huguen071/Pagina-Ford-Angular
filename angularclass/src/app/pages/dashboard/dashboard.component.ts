import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { Veiculo, VeiculoData } from '../../models/veiculo.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../components/card/card.component";
import { CarTableComponent } from "../../components/car-table/car-table.component";

@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule, CommonModule, CardComponent, CarTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  vehicles: Veiculo[] = [];
  selectedvehivle!: Veiculo;
  vehicleData!: VeiculoData;

selectCarForms = new FormGroup({
  carId: new FormControl('')
})

constructor (private dashboardservice: DashboardService){}

  ngOnInit(): void {
    this.dashboardservice.getVehicles().subscribe((res)=>{
      console.log(res.vehicles)
      this.vehicles = res.vehicles
      
    })

    this.selectCarForms.controls.carId.valueChanges.subscribe((id)=>{
      this.selectedvehivle = this.vehicles[Number(id) - 1]
      console.log (this.selectedvehivle)
    })

  }



}
