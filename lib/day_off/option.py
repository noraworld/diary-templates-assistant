from argparse import ArgumentParser

class Option:
    def parse():
        parser = ArgumentParser(description='')

        operation_subparsers = parser.add_subparsers(dest='operation')
        operation_subparsers.required = True

        operation_parsers = []
        operation_parsers.append(operation_subparsers.add_parser('append', help='Append a specified day to a day off JSON file'))
        operation_parsers.append(operation_subparsers.add_parser('check', help='Check if a specified day is a day off'))

        args = parser.parse_args()

        return args
