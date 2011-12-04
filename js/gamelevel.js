rpg = {};

rpg.choices = [
    {
        'title': "You're phone has been stolen. What do you do?",
        'options': [
            {
                'title': 'Contact police and insurance company',
                'value': +100,
                'feedback' : 'Right choice. Insurance company gave you 100 pounds.'
            },
            {
                'title': 'Buy a gun, find and shoot the thief',
                'value': -400,
                'feedback' : 'Bad choice. Killing people is against the law.'
            }
        ]
    },
    {
        'title': "You won a laptop, but you already got one. Do you:",
        'options': [
            {
                'title': 'Sell it on online market place',
                'value': +300,
                'feedback' : 'Right choice. Insurance company gave you 100 pounds.'
            },
            {
                'title': 'Put it under the bed.',
                'value': 0,
                'feedback' : 'Bad choice. Killing people is against the law.'
            }
        ],
    },
    {
        'title': "You're sitting infront of your computer, do you:",
        'options': [
            {
                'title': 'Visit MyBank blog',
                'value': 20,
                'feedback' : 'Well done. Good choice!<br /><br /><a href="http://www.mybnk.org/whats-new" class="nice small radius blue button" target="_blank">Go to MyBank Blog</a>'
            },
            {
                'title': 'Play non-educational computer games',
                'value': -20,
                'feedback' : 'Bad choice. Killing people is against the law.'
            }
        ],
    },
    {
        'title': "You're have some free time, do you:",
        'options': [
            {
                'title': 'Check you bank account',
                'value': 20,
                'feedback' : "Well done! Right choice.<br /><br />Please choose your bank:<br /><br /><a class='nice small radius blue button' target='_blank' href='http://ibank.barclays.co.uk'>Barclays</a><br /><br /><a class='nice small radius blue button' target='_blank' href='https://online.lloydstsb.co.uk/'>Lloyds TSB</a><br /><br /><a class='nice small radius blue button' target='_blank' href='http://www.hsbc.co.uk/1/2/personal'>HSBC</a><br /><br /><a class='nice small radius blue button' target='_blank' href='https://www.nwolb.com'>Natwest</a><br /><br /><a class='nice small radius blue button' target='_blank' href='http://www.santander.co.uk'>Santander</a>"
            },
            {
                'title': 'Browse Facebook',
                'value': -20,
                'feedback' : 'Bad choice. Killing people is against the law.'
            }
        ],
    }
]
