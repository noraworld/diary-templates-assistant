import datetime
import os
import re

DATE_DELIMITER_REGEXP = '[/-]'

class Util:
    def full_date(date_str):
        # '2022/05/20' -> [2022, 5, 20]
        # '2022/05/00' -> [2022, 5,  0]
        splitted_date = list(map(int, re.split(DATE_DELIMITER_REGEXP, date_str)))

        if len(splitted_date) != 3:
            raise ValueError('Invalid date format')

        # Let's say today is 2025/04/11
        # [2025, 4, 11] -> 2025
        # [   0, 4, 11] -> 2025
        if splitted_date[0] == 0:
            year = datetime.date.today().year
        else:
            year = splitted_date[0]

        # Let's say today is 2025/04/11
        # [2025, 4, 11] -> 4
        # [2025, 0, 11] -> 4
        if splitted_date[1] == 0:
            month = datetime.date.today().month
        else:
            month = splitted_date[1]

        # Let's say today is 2025/04/11
        # [2025, 4, 11] -> 11
        # [2025, 4,  0] -> 11
        if splitted_date[2] == 0:
            day = datetime.date.today().day
        else:
            day = splitted_date[2]

        return datetime.date(year, month, day)

    def handle_error(error_class):
        error = error_class()
        if Util.cast_bool(os.getenv('FAIL_IF_DAY_OFF')) is True:
            raise error
        elif Util.cast_bool(os.getenv('GH_OUTPUT_FORMAT')) is True:
            print('day_off=true')
            exit()
        else:
            print(error)
            exit()

    def cast_bool(bool):
        if bool is True or bool.lower() == 'true':
            return True
        else:
            return False
