import { Routes } from '@angular/router';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { BindingComponent } from './binding/binding.component';
import { MenuComponent } from './menu/menu.component';
import { DirectiveControlFlowComponent } from './directive-control-flow/directive-control-flow.component';
import { InputOutputComponent } from './input-output/input-output.component';
export const routes: Routes = [
{path: 'string-interpolation', component: StringInterpolationComponent},
{path: 'binding', component: BindingComponent},
{path: 'directive-control-flow', component: DirectiveControlFlowComponent},
{path: 'input-output', component: InputOutputComponent},

{path: '', component: MenuComponent},

];
