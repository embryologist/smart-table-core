import zora from 'zora';
import slice from './slice';
import table from './table';
import filterDirective from './directives/filter';
import searchDirective from './directives/search';
import sliceDirective from './directives/slice';
import sortDirective from './directives/sort';
import summaryDirective from './directives/summary';
import wokringIndicatorDirective from './directives/workingIndicator';
import tableDirective from './directives/table';

zora()
  .test(slice)
  .test(table)
  .test(filterDirective)
  .test(searchDirective)
  .test(sliceDirective)
  .test(sortDirective)
  .test(summaryDirective)
  .test(wokringIndicatorDirective)
  .test(tableDirective)
  .run();
