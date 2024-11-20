import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';

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
];
