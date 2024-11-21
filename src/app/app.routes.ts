import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { ForComponent } from './components/controlFlow/for/for.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';

import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/apiIntrigation/get-api/get-api.component';
import { PostApiComponent } from './components/apiIntrigation/post-api/post-api.component';

export const routes: Routes = [
    {
        path: 'add-emp',
        component: AddEmployeeComponent,
    },
    {
        path:'data-binding',
        component:DataBindingComponent,
        
    },
    {
        path:'structural-dir',
        component: StructuralDirComponent
    },
    {
        path: 'attributedirective',
        component: AttributeDirectiveComponent
    },
    {
        path: 'if-else',
        component: IfelseComponent
    },
    {
        path: 'for',
        component: ForComponent
    },
    {
        path: 'pipe',
        component: PipeComponent
    },
    {
        path: 'template-form',
        component: TemplateComponent
    },
    {
        path: 'reactive',
        component: ReactiveFormComponent
    },
    {
        path: 'get-api',
        component: GetApiComponent
    },
    {
        path: 'post-api',
        component: PostApiComponent
    },
];
