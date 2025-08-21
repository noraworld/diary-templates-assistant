from argparse import ArgumentParser
import datetime

class Option:
    def parse():
        parser = ArgumentParser(description='')

        subparsers = parser.add_subparsers(dest='operation')
        subparsers.required = True

        # https://chatgpt.com/s/t_68a6963cc1588191bb5e4fed6a91dda3
        date_arg = ArgumentParser(add_help=False)
        date_arg.add_argument(
            'date',
            nargs='?',
            metavar='DATE',
            default=datetime.date.today().isoformat(),
            help='A target date to append or check (format: YYYY-MM-DD, default: today)'
        )

        commands = [
            ( 'append', 'Append a specified day to a day off JSON file' ),
            ( 'check',  'Check if a specified day is a day off' ),
        ]

        for command, help in commands:
            subparsers.add_parser(command, parents=[date_arg], help=help)

        return parser.parse_args()
