import { Component, OnInit  } from '@angular/core';
import * as Survey from 'survey-angular';
Survey.StylesManager.applyTheme("default");


@Component({
    selector: 'app-contact',
    providers: [  ],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

    ngOnInit() {
        Survey.FunctionFactory.Instance.register("MyTextValidator", this.MyTextValidator);
        
        var survey = new Survey.Model(this.json);
        survey.onComplete.add(this.sendDataToServer);
        Survey.SurveyNG.render("surveyElement", { model: survey });
    }

    sendDataToServer(survey) {
        //send Ajax request to your web server.
        alert("The results are:" + JSON.stringify(survey.data));
    }

    MyTextValidator(params) {
        var value = params[0];
        return value.indexOf("survey");
    }

    json: object = {
        "title": "Coontact",
        "description": "Let us know how we can help you.",
        "pages": [
            {
                "name": "page1",
                "elements": [     {
                    "type": "text",
                    "name": "name",
                    "title": "Name",
                    "isRequired": true
                   },
                   {
                    "type": "text",
                    "name": "email",
                    "title": "E-mail",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "email"
                        }
                    ]
                   },
                   {
                    "type": "text", 
                    "name": "subject",
                    "title": "Subject",
                    "isRequired": true
                   },
                   {
                        "type": "comment",
                        "name": "memo",
                        "isRequired": true,
                        "title": "Type here 'survey' to pass the validation ",
                        "validators": [
                            {
                                "type": "expression",
                                "text": "You text should contains 'survey' word.",
                                "expression": "MyTextValidator({memo}) > 0"
                            }
                        ]
                    }
                ]
            }
        ],
        "showQuestionNumbers": "off"
     };

}