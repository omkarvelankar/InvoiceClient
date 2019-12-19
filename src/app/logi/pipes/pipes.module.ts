import { NgModule } from '@angular/core';
import { CamelCaseToDash } from './camel-case-to-dash.pipe.ts.pipe';
import { Filter } from './filter.pipe.ts.pipe';
import { GetById } from './get-by-id.pipe.ts.pipe';
import { HtmlToPlainText } from './html-to-plain-text.pipe.ts.pipe';

@NgModule({
    declarations: [
        CamelCaseToDash,
        Filter,
        GetById,
        HtmlToPlainText
    ],
    imports     : [],
    exports     : [
        CamelCaseToDash,
        Filter,
        GetById,
        HtmlToPlainText
    ]
})
export class PipeModule { }
