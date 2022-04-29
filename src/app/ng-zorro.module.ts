import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

const styles = [NzButtonModule];

@NgModule({
  imports: [styles],
  exports: [...styles],
})
export class NgZorro {}
