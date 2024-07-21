import { Routes } from '@angular/router';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { BindingComponent } from './binding/binding.component';
import { MenuComponent } from './menu/menu.component';
import { DirectiveControlFlowComponent } from './directive-control-flow/directive-control-flow.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { TemplateRefvariableComponent } from './template-refvariable/template-refvariable.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ShowContentComponent } from './show-content/show-content.component';
import { ShowContentMultiComponent } from './show-content-multi/show-content-multi.component';
import { ContetProjectionMultiComponent } from './contet-projection-multi/contet-projection-multi.component';
import { BultinPipeComponent } from './bultin-pipe/bultin-pipe.component';
export const routes: Routes = [
{path: 'string-interpolation', component: StringInterpolationComponent},
{path: 'binding', component: BindingComponent},
{path: 'directive-control-flow', component: DirectiveControlFlowComponent},
{path: 'input-output', component: InputOutputComponent},
{path: 'template-refvariable', component: TemplateRefvariableComponent},
{path: 'view-child', component: ViewChildComponent},
{path: 'show-content', component: ShowContentComponent},
{path: 'content-projection-multi', component: ContetProjectionMultiComponent},
{path: 'builtin-pipe', component: BultinPipeComponent},

{path: '', component: MenuComponent},

];
