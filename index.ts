import { NgModule } from '@angular/core';
import { OTREE_MODULES } from './src/components';

/**
 * Exports
 */
export * from './src/components';

@NgModule({
  imports: OTREE_MODULES,
  exports: OTREE_MODULES
})
export class OChartModule {
}
