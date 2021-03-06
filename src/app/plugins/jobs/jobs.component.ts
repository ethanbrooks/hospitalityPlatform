import { Component, OnInit  } from '@angular/core';
// import { KnockoutComputed, KnockoutObservable } from 'knockout';
// import * as Survey from 'survey-angular';
// Survey.StylesManager.applyTheme("default");
/*
                "survey-angular": "^1.0.91",
                "survey-creator": "latest",
                "survey-knockout": "^1.0.91",
                "surveyjs-widgets": "latest",
        }
*/

@Component({
    selector: 'app-jobs',
    providers: [  ],
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.css']
})

export class JobsComponent implements OnInit {




    json: object = {
        title: 'Cancellation Survey',
        description: 'Thank you for using our service. We would highly appreciate if you would take the time to fill our cancellation survey. This would help us improve the service.',
        pages: [
            {
                name: 'page1',
                elements: [
                    {
                        type: 'radiogroup',
                        name: 'using_duration',
                        title: 'How long have you been using the service?',
                        choices: ['Less than a month', '1-6 months', '7-12 months', '1-3 years', 'Over 3 years']
                    }, {
                        type: 'radiogroup',
                        name: 'using_frequency',
                        title: 'How often did you use the service?',
                        choices: ['Once a week', '2 or 3 times a month', 'Once a month', 'Less than once a month']
                    }, {
                        type: 'radiogroup',
                        name: 'cancel_reason',
                        title: 'What was the main reason for cancelling the service?',
                        hasOther: true,
                        choices: [
                            'No longer need it',
                            'It didn\'t meet my needs',
                            'Found a better alternative',
                            'Found a cheaper alternative',
                            'Quality was less than expected',
                            'Ease of use was less than expected',
                            'Access to the service was less than expected',
                            'Customer service was less than expected'
                        ]
                    }, {
                        type: 'radiogroup',
                        name: 'satisfaction',
                        title: 'Overall, how satisfied were you with the service?',
                        choices: ['Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied', 'Very Unsatisfied']
                    }, {
                        type: 'matrix',
                        name: 'future_using',
                        titleLocation: 'hidden',
                        columns: [
                            'Definitely', 'Probably', 'Not Sure', 'Probably Not', 'Definitely Not'
                        ],
                        rows: [
                            {
                                value: 'use_in_future',
                                text: 'Will you use our service in the future?'
                            }, {
                                value: 'recommend',
                                text: 'Will you recommend our service to others?'
                            }
                        ]
                    }, {
                        type: 'comment',
                        name: 'memo',
                        isRequired: true,
                        title: 'Type here \'survey\' to pass the validation ',
                        validators: [
                            {
                                type: 'expression',
                                text: 'You text should contains \'survey\' word.',
                                expression: 'MyTextValidator({memo}) > 0'
                            }
                        ]
                    }
                ]
            }
        ],
        showQuestionNumbers: 'off'
     };
    ngOnInit() {
/*
        Survey.FunctionFactory.Instance.register("MyTextValidator", this.MyTextValidator);

        var survey = new Survey.Model(this.json);
        survey
        .onUpdateQuestionCssClasses
        .add(function (survey, options) {
            var classes = options.cssClasses
            classes.root = "sq-root";
            classes.title = "sq-title";
            classes.item = "sq-item";
            classes.label = "sq-label";
            if (options.question.isRequired) {
                classes.title = "sq-title sq-title-required";
                classes.root = "sq-root sq-root-required";
            }
            if (options.question.getType() === "checkbox") {
                classes.root = "sq-root sq-root-cb";
            }
        });
        survey.onComplete.add(this.sendDataToServer);
        Survey.SurveyNG.render("surveyElement", { model: survey });
       */
    }

    sendDataToServer(survey) {
        // send Ajax request to your web server.
  //      alert("The results are:" + JSON.stringify(survey.data));
    }

    MyTextValidator(params) {
        const value = params[0];
        return value.indexOf('survey');
    }

}
