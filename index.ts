import { NgModule } from '@angular/core';
import { OTREE_MODULES } from './src/components';
// import { OTREE_PROVIDERS } from './src/services';

/**
 * Exports
 */
export * from './src/components';
// export * from './src/core';
// export * from './src/interfaces';
// export * from './src/services';

@NgModule({
  imports: OTREE_MODULES,
  exports: OTREE_MODULES
  // ,
  // providers: OTREE_PROVIDERS
})
export class OChartModule {
}
