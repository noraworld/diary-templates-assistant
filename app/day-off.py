# cf. https://github.com/noraworld/attendance

import jpholiday
import json
import os

from lib.day_off.error import HolidayError, DayOffError, WeeklyOffError
from lib.day_off.option import Option
from lib.day_off.util import Util

DAY_OFF_JSON = 'data/day-off.json'
WEEKLY_OFF_DAYS = ['Saturday', 'Sunday']

if __name__ == '__main__':
    args = Option.parse()

    if os.path.isfile(DAY_OFF_JSON):
        with open(DAY_OFF_JSON, 'r') as f:
            data = json.load(f)

        for day_off in data['day_off']:
            if Util.full_date(args.date) == Util.full_date(day_off):
                Util.handle_error(DayOffError)

    if jpholiday.is_holiday(Util.full_date(args.date)) is True:
        Util.handle_error(HolidayError)

    if (Util.full_date(args.date).strftime('%A') in WEEKLY_OFF_DAYS) is True:
        Util.handle_error(WeeklyOffError)

    match args.operation:
        case 'append':
            data['day_off'].append(Util.full_date(args.date).strftime("%Y-%m-%d"))
            with open(DAY_OFF_JSON, 'w') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
                print('', file=f) # insert a trailing newline
        case 'check':
            if Util.cast_bool(os.getenv('GH_OUTPUT_FORMAT')) is True:
                print('day_off=false')
