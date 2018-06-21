import { OTreeComponentModule } from './components/tree/o-tree.component';
import { OTreeNodeComponentModule } from './components/tree/o-tree-node.component';

export * from './components/tree/o-tree.component';
export * from './components/tree/o-tree-node.component';

export const OTREE_MODULES: any[] = [
  OTreeComponentModule,
  OTreeNodeComponentModule
];
