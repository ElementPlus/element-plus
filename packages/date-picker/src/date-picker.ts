import { DEFAULT_FORMATS_DATE, DEFAULT_FORMATS_DATEPICKER } from '@element-plus/time-picker/src/common/constant'
import Picker from '@element-plus/time-picker/src/common/picker.vue'
import DatePickPanel from './date-picker-com/panel-date-pick.vue'
// import DateRangePickPanel from '.date-picker-com/panel-date-range.vue'
// import MonthRangePickPanel from './date-picker-com/panel-month-range.vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localeData from 'dayjs/plugin/localeData'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import { h } from 'vue'
dayjs.extend(isLeapYear)
dayjs.extend(localeData)
dayjs.extend(advancedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)

const getPanel = function(type) {
  // if (type === 'daterange' || type === 'datetimerange') {
  //   return DateRangePickPanel
  // } else if (type === 'monthrange') {
  //   return MonthRangePickPanel
  // }
  return DatePickPanel
}

export default {
  name: 'ElDatePicker',
  props: {
    type: {
      type: String,
      default: 'date',
    },
  },
  setup(props) {
    const format = DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE
    return () => h(Picker, {
      format,
      type: props.type,
      ...props,
    },
    {
      default: scopedProps => h(getPanel(props.type), scopedProps),
    })
  },
}
