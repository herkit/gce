import { Theme, createPlugin } from '@fullcalendar/core'

export class CustomTheme extends Theme {
}

CustomTheme.prototype.classes = {
  widget: 'fc-custom',

  /*tableGrid: 'table-bordered', // avoid `table` class b/c don't want margins. only border color
  tableList: 'table', // `table` class creates bottom margin but who cares
  tableListHeading: 'table-active',

  buttonGroup: 'btn-group',
  button: 'btn btn-primary',*/
  stateActive: 'active',
  stateDisabled: 'disabled'/*,

  today: 'alert alert-info', // the plain `info` class requires `.table`, too much to ask

  popover: 'card card-primary',
  popoverHeader: 'card-header',
  popoverContent: 'card-body',

  // day grid
  // for left/right border color when border is inset from edges (all-day in timeGrid view)
  // avoid `table` class b/c don't want margins/padding/structure. only border color.
  headerRow: 'table-bordered',
  dayRow: 'table-bordered',

  // list view
  listView: 'card card-primary'*/
}

export default createPlugin({
  themeClasses: {
    custom: CustomTheme
  }
})