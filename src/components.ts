import { OTreeModule } from './components/tree/o-tree.component';
import { OTreeNodeModule } from './components/tree/o-tree-node.component';

export * from './components/tree/o-tree.component';
export * from './components/tree/o-tree-node.component';

export const OTREE_MODULES: any[] = [
  OTreeModule,
  OTreeNodeModule
];
