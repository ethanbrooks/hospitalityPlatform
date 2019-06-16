import { Injectable } from "@angular/core";

let content = '';
@Injectable()
export class blogService {

    getContent(){   
        var hand;
        var pull;
        var push;
        for(var i=0; i < 2; i++) {
            if(i % 2){
                hand = 'left';
                pull = '';
                push = '';
            }else{
                hand = 'right';
                pull = ' col-md-pull-12';
                push = ' col-md-push-10';
            }; 
            content += `<div class="col-md-12">
            <div class="work-entry-flex animate-box js-fullheight fadeInUp animated" style="height: 296px;">
                <div class="col-three-forth js-fullheight" style="height: 296px;">
                    <div class="row no-gutters">
                        <div class="col-md-12`+push+` no-gutters">
                            <div class="work-img js-fullheight" style="background-image: url('/assets/img/menu/1111GT-animal-pork-ribs-628.jpg'); height: 296px;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-one-forth js-fullheight" style="height: 296px;">
                    <div class="row no-gutters">
                        <div class="col-md-12`+pull+` no-gutters">
                            <div class="display-t js-fullheight" style="height: 296px;">
                                <div class="display-tc js-fullheight" style="height: 296px;">
                                    <div class="text-inner text-inner-right">
                                        <h2><a href="work-single.html">Application and practice of creating durable images</a></h2>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                        <p><a href="work-single.html" class="btn-view">View Photo</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        }
        return content;
    }
}
