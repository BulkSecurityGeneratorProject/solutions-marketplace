import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SolutionsMarketplaceSharedModule } from 'app/shared';
import {
    ProblemComponent,
    ProblemDetailComponent,
    ProblemUpdateComponent,
    ProblemDeletePopupComponent,
    ProblemDeleteDialogComponent,
    problemRoute,
    problemPopupRoute
} from './';

const ENTITY_STATES = [...problemRoute, ...problemPopupRoute];

@NgModule({
    imports: [SolutionsMarketplaceSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ProblemComponent,
        ProblemDetailComponent,
        ProblemUpdateComponent,
        ProblemDeleteDialogComponent,
        ProblemDeletePopupComponent
    ],
    entryComponents: [ProblemComponent, ProblemUpdateComponent, ProblemDeleteDialogComponent, ProblemDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SolutionsMarketplaceProblemModule {}
