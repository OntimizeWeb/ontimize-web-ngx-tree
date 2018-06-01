import { OTreeModule } from './components/tree/o-tree.component';
import { OTreeNodeModule } from './components/tree/o-tree-node.component';

export * from './components/tree/tree.components';

export const OTREE_MODULES: any[] = [
  OTreeComponentModule,
  OTreeNodeModule
];
