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
                'feedback' : 'Right choice. You don\'t second laptop.'
            },
            {
                'title': 'Put it under the bed.',
                'value': 0,
                'feedback' : 'Bad choice. Laptop will just lie under your bed forever.' 
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
                'title': 'Post stupid comments on Facebook',
                'value': -20,
                'feedback' : 'Bad choice. You will just waste your time.'
            }
        ],
    },
    {
        'title': "It's payday, and you have some money in the bank. What do you do?",
        'options': [
            {
                'title': 'Buy a new PS3 or a large screen TV',
                'value': -100,
                'feedback' : "Wrong choice. Make sure your bare necessities are paid off first."
            },
            {
                'title': 'Pay the rent and the bills',
                'value': 100,
                'feedback' : 'Good idea: peace of mind for the rest of the month.'
            }
        ],
    },
    {
        'title': "You want to throw a party, but you're broke. Use the credit card?",
        'options': [
            {
                'title': "No, I can't afford it",
                'value': 100,
                'feedback' : "Good one. It's not always the most fun choice, but you can really use that money for other, more important things."
            },
            {
                'title': 'Yes, I really need something to cheer me up',
                'value': -100,
                'feedback' : "Wrong - you'll be sorry when you have to pay it off later ... stay off the credit card unless your really need it" 
            }
        ],
    }
]
