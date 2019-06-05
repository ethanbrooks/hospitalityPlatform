import { Injectable } from "@angular/core";

let content = "";

@Injectable()
export class blogService {
    getContent(){    
        for(var i=0; i < 10; i++) {
            content += `<div class="message dx-theme-background-color">
            <div class="photo">
                <img src="images/mentions/Kevin-Carter.png" />
            </div>
            <div class="name">
                `+Math.random().toString(36).substring(7)+`
            </div>
            <div class="date">
                07/03/19 - 12:22AM
            </div>
            <div class="text">
                <span class="dx-mention" spellcheck="false"><span><span>@</span>John Heart</span></span> What experience do you have in this field?
            </div>
        </div>`;
        }
        content += "<br />";
        return content;
    }
}
