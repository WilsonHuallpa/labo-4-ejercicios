import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent {
  public name: string = 'Angular';

  public btnLabel = 'click';
  public apellido: string = '';
  public onClick = (event: any): void => {
    this.name = 'hola';
  };
}
