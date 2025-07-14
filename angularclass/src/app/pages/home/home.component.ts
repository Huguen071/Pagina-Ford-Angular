import { Component } from '@angular/core';
import { BoasVindasComponent } from "../../components/boas-vindas/boas-vindas.component";
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-home',
  imports: [BoasVindasComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
