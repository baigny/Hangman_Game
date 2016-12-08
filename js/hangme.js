
var words = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

function drawWord(wo, gu)
{
    var nword = ""; var ok;        
    for (var i = 0; i < wo.length; i++) {
        ok = false;
        for (var j = 0; j < gu.length; j++)
        {
            if (gu[j] == wo[i]) {
                nword = nword + wo[i].toUpperCase() + ' ';
                ok = true;
                break; 
            }
        }
        if (!ok) nword = nword + '_ ';
    }
    $('#theword').html(nword);
}

function checkWin(p)
{
    for (var i = 0; i < p.length; i++)
        if (p[i] == '_') return false;
    return true;
}

$(document).ready(function(){
    var w = words[Math.floor(Math.random() * words.length)];
    var guess = "";
    var t = 0;
    var c = document.getElementById("display");
    var ctx = c.getContext("2d");
    ctx.font="30px Arial";
    ctx.strokeText("Hangman",235,50);
    drawWord(w, guess);
    $('#letters a').click(function(){
        var vl = $(this).attr('value');
        if (w.indexOf(vl) != -1)
        {
            guess = guess + vl;
            $(this).hide();
            drawWord(w, guess);
            if (checkWin($('#theword').html())) {
                $('#msg').html('Well done! Refresh the page to play again.');
                $('#letters').hide();
            }
        } else {
            t++;
            $(this).hide();                 
            switch(t)
            {
                case 1: {
                    ctx.moveTo(200, 300);
                    ctx.lineTo(200, 100);
                    ctx.stroke();
                } break;
                case 2: {
                    ctx.moveTo(200, 275);
                    ctx.lineTo(225, 300);
                    ctx.stroke();
                } break;
                case 3: {
                    ctx.moveTo(200, 100);
                    ctx.lineTo(325, 100);
                    ctx.stroke();
                } break;
                case 4: {
                    ctx.moveTo(200, 125);
                    ctx.lineTo(225, 100);
                    ctx.stroke();
                } break;
                case 5: {
                    ctx.moveTo(325, 100);
                    ctx.lineTo(325, 130);
                    ctx.stroke();
                } break;
                case 6: {
                    ctx.beginPath();
                    ctx.arc(325,150,20,0,2*Math.PI);
                    ctx.closePath();
                    ctx.stroke();
                } break;
                case 7: {
                    ctx.moveTo(325, 170);
                    ctx.lineTo(325, 230);
                    ctx.stroke();
                } break;
                case 8: {
                    ctx.moveTo(325, 180);
                    ctx.lineTo(300, 215);
                    ctx.stroke();
                } break;
                case 9: {
                    ctx.moveTo(325, 180);
                    ctx.lineTo(350, 215);
                    ctx.stroke();
                } break;
                case 10: {
                    ctx.moveTo(325, 230);
                    ctx.lineTo(300, 265);
                    ctx.stroke();
                } break;
                case 11: {
                    ctx.moveTo(325, 230);
                    ctx.lineTo(350, 265);
                    ctx.stroke();
                } break;
            }
               
            if (t == 11) {
                $('#msg').html('you lost.Well tried');
                $('#letters').hide();
                $('#theword').html(w.toUpperCase());
            }
        }
    });
});