class HolidayError(Exception):
    def __str__(self):
        return 'today is a holiday!'

class DayOffError(Exception):
    def __str__(self):
        return 'today is a day off!'

class WeeklyOffError(Exception):
    def __str__(self):
        return 'today is a weekly off!'
