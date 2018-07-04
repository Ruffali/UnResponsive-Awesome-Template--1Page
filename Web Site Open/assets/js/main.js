$(document).ready(function () {
var upperContent = $("#leftPart .container-fluid .row .col-md-12 .upperContent h1");
var hr = $("#leftPart .container-fluid .row .col-md-12 .hr");
var donwContent = $("#leftPart .container-fluid .row .col-md-12 .downContent h1");

var upperContentRightPartTop = $("#rightPartTop .container-fluid .row .col-md-12 .upperContent h1");
var hrRightPartTop = $("#rightPartTop .container-fluid .row .col-md-12 .hr");
var donwContentRightPartTop = $("#rightPartTop .container-fluid .row .col-md-12 .downContent h1");
var centerRightPartTop = $("#rightPartTop .container-fluid .row .col-md-12 .getCenter");

var upperContentRightPartCenter = $("#rightPartCenter .container-fluid .row .col-md-12 .upperContent h1");
var hrRightPartCenter = $("#rightPartCenter .container-fluid .row .col-md-12 .hr");
var donwContentRightPartCenter = $("#rightPartCenter .container-fluid .row .col-md-12 .downContent h1");
var centerRightPartCenter = $("#rightPartCenter .container-fluid .row .col-md-12 .getCenter");

var upperContentRightPartBottom = $("#rightPartBottom .container-fluid .row .col-md-12 .upperContent h1");
var hrRightPartBottom = $("#rightPartBottom .container-fluid .row .col-md-12 .hr");
var donwContentRightPartBottom = $("#rightPartBottom .container-fluid .row .col-md-12 .downContent h1");
var centerRightPartBottom = $("#rightPartBottom .container-fluid .row .col-md-12 .getCenter");

setTimeout(function(){
     $("#beforeOpen").css({"opacity":"0","z-index":"0"})
}, 2000);
setTimeout(function(){
    $("#myLogo").css({"z-index":"9999999","margin-left":"0%"})
}, 4500);

setTimeout(function(){
    $("#sandvichButton").css({"opacity":"1"})
}, 2400);

setTimeout(function(){
    $("#leftPart").css({"width":"50%"})
    $("#rightPartTop").css({"margin-right":"0"})
}, 4000);

setTimeout(function(){
    $("#rightPartTop").css({"height":"254px"})
    centerRightPartTop.css({"top":"-180px"})
    $("#rightPartCenter").css({"top":"33.4%"})
}, 5000);

setTimeout(function(){
    centerRightPartCenter.css({"top":"-183px"})
    $("#rightPartCenter").css({"height":"254px"})
    $("#rightPartBottom").css({"top":"65%"})
}, 6100);
setTimeout(function(){
    centerRightPartBottom.css({"top":"-183px"})
}, 6800);








setTimeout(function(){
    upperContent.css({"padding-top":"28%", "opacity":"1"})
    hr.css({"width":"80%"})
    donwContent.css({"padding-top":"1%", "opacity":"1"})
}, 3000);

setTimeout(function(){
    upperContentRightPartTop.css({"padding-top":"28%", "opacity":"1"})
    hrRightPartTop.css({"width":"80%"})
    donwContentRightPartTop.css({"padding-top":"1%", "opacity":"1"})
}, 3000);

setTimeout(function(){
    upperContentRightPartCenter.css({"padding-top":"28%", "opacity":"1"})
    hrRightPartCenter.css({"width":"80%"})
    donwContentRightPartCenter.css({"padding-top":"1%", "opacity":"1"})
}, 3000);

setTimeout(function(){
    upperContentRightPartBottom.css({"padding-top":"28%", "opacity":"1"})
    hrRightPartBottom.css({"width":"80%"})
    donwContentRightPartBottom.css({"padding-top":"1%", "opacity":"1"})
}, 3000);


setTimeout(function(){
    if($("#leftPart").css({"width":"50%"})){
        $("#leftPart").mouseover(function(){
            hr.css({"width":"55%"})
        })
        $("#leftPart").mouseout(function(){
            hr.css({"width":"80%"})
        });
        if($("#rightPartTop").css({"height":"254px"})){
            $("#rightPartTop").mouseover(function(){
                hrRightPartTop.css({"width":"55%"})
            })
            $("#rightPartTop").mouseout(function(){
                hrRightPartTop.css({"width":"80%"})
            })
        }

        $("#rightPartCenter").mouseover(function(){
            hrRightPartCenter.css({"width":"55%"})
        })
        $("#rightPartCenter").mouseout(function(){
            hrRightPartCenter.css({"width":"80%"})
        })

        $("#rightPartBottom").mouseover(function(){
            hrRightPartBottom.css({"width":"55%"})
        })
        $("#rightPartBottom").mouseout(function(){
            hrRightPartBottom.css({"width":"80%"})
        })
    }
}, 5000);

var  count = 0;

$("#sandvichButton").click(function(){
    if(count%2==0){
    $("#sandvichButton").css({" padding-bottom":"1%"});
    $("#sandvichButton .secondLine").css({"opacity":"0","transition":"all 0.4s ease","animation":"none"});
    $("#sandvichButton .firstLine").css({"transform":"rotate(-37deg)","margin-top":"25%","transition":"all 0.4s ease","animation":"none"});
    $("#sandvichButton .thirdLine").css({"transform":"rotate(37deg)","margin-top":"-25%","transition":"all 0.4s ease","animation":"none"});
    $("#navbar").css({"opacity":"1","z-index":"1234566"})
    }else if(count%2!=0){
        $("#sandvichButton .firstLine").css({"transform":"rotateY(179deg)","margin-top":"0%"})
        $("#sandvichButton .secondLine").css({"opacity":"1","transform":"rotateY(179deg)"})
        $("#sandvichButton .thirdLine").css({"transform":"rotateY(179deg)","margin-top":"20%"})
        $("#navbar").css({"opacity":"0","z-index":"0"})
    }
    count++;
})






})