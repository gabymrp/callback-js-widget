class popupClass {
    constructor(json) {
        this.json = json;
        this.renderCSS();
        this.renderUI(json);
        closepopup();

        const _name = (json.name);
        const _phone = (json.phone);
        const _interest = (json.interest);
        const _email = (json.email);
      
        popupClass._name = _name;
        popupClass._phone = _phone;
        popupClass._interest = _interest;
        popupClass._email = _email;
    }

    
    renderCSS() {
        //put proper css
        //no ms-webkit, moz-webkit
        //naming popup100 naming camelcase //no number
        //esma 5 not 6
        //javascrpt pattern?
        //prototype , inheritance, dont use class
        //remove css
        //html okay
        //error msg 
        //clean up console log
        //comment --> look up how to write comment
        //properly neatly
        //transition do it properly
        //ceo look it good
        //css how to do transform
        var style = document.createElement('style');
        style.innerHTML = '@import url(https://fonts.googleapis.com/css?family=Montserrat);body{background:#333;font-family:Montserrat,sans-serif}.wrap-boxpopup{width:260px;position:absolute;min-height:260px;color:#333;display:none}.header-boxpopup{background:#e9faff;-webkit-border-top-left-radius:10px;-webkit-border-top-right-radius:10px;-moz-border-radius-topleft:10px;-moz-border-radius-topright:10px;border-top-left-radius:10px;border-top-right-radius:10px;overflow:hidden;box-shadow:0 3px 20px 0 rgba(128,128,128,.56);-moz-box-shadow:0 3px 20px 0 rgba(128,128,128,.56);-webkit-box-shadow:0 3px 20px 0 rgba(128,128,128,.56);-o-box-shadow:0 3px 20px 0 rgba(128,128,128,.56);-ms-box-shadow:0 3px 20px 0 rgba(128,128,128,.56);padding-left:25px;padding-right:25px;padding-bottom:20px;padding-top:20px}.body-boxpopup{background:#fff;-webkit-border-bottom-right-radius:10px;-webkit-border-bottom-left-radius:10px;-moz-border-radius-bottomright:10px;-moz-border-radius-bottomleft:10px;border-bottom-right-radius:10px;border-bottom-left-radius:10px;overflow:hidden;box-shadow:0 3px 20px 0 rgba(0,0,0,.1);-moz-box-shadow:0 3px 20px 0 rgba(0,0,0,.1);-webkit-box-shadow:0 3px 20px 0 rgba(0,0,0,.1);-o-box-shadow:0 3px 20px 0 rgba(0,0,0,.1);-ms-box-shadow:0 3px 20px 0 rgba(0,0,0,.1);padding-left:25px;padding-right:25px;padding-bottom:20px;padding-top:25px}.popup{width:100%}.mini-boxpopup{-webkit-border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;padding:25px;background-color:#4272d7;color:#fff}.f-s-xs{font-size:x-small}.f-s-s{font-size:small}.f-s-m{font-size:medium}.f-s-l{font-size:large}.wrap-input{width:100%;position:relative;background-color:#fff;border:1px solid #e6e6e6}.input1{display:block;width:100%;background:0 0;color:#666;line-height:1.2;font-family:inherit}.input2{width:100%;display:block}.input2 input{background:0 0;color:#666;line-height:1.2;font-family:inherit}input,select{outline:0;border:none;padding:10px;font-family:inherit}input.w-40,select.w-13{width:40%}input.w-50,select.w-60{width:50%}.container-blue-button{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;margin-top:10px}.blue-button{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;justify-content:center;align-items:center;padding:0 20px;width:100%;height:60px;background-color:#4272d7;font-family:inherit;color:#fff;line-height:1.2;text-transform:uppercase;-webkit-transition:all .4s;-o-transition:all .4s;-moz-transition:all .4s;transition:all .4s}.errorbox{padding:5px;display:none;box-sizing:border-box;color:red}button{border:none}.close-button{background-color:rgba(0,0,0,0);color:#333;font-family:inherit;padding-bottom:5px}.float-right{float:right}.float-clear{float:none}.right-bottom{right:25px;bottom:15px;position:fixed}.right-top{right:25px;top:15px;position:fixed}.left-top{left:25px;top:15px;position:fixed}.left-bottom{left:25px;bottom:15px;position:fixed}#scsMsg{visibility:hidden;min-width:250px;margin-left:-125px;color:#333;text-align:center;border-radius:5px;padding:16px;position:fixed;z-index:1;left:50%;top:30px;font-size:17px;background:#e9faff;box-shadow:0 3px 20px 0 rgba(128,128,128,.56);-moz-box-shadow:0 3px 20px 0 rgba(128,128,128,.56);-webkit-box-shadow:0 3px 20px 0 rgba(128,128,128,.56);-o-box-shadow:0 3px 20px 0 rgba(128,128,128,.56);-ms-box-shadow:0 3px 20px 0 rgba(128,128,128,.56)}#scsMsg.show{visibility:visible}#e_loader{display:none;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;background-image:url(images/spinner.gif);background-color:rgba(255,255,255,.5);background-repeat:no-repeat;background-position:center center}body.loading{overflow:hidden}body.loading .loading-bar{display:block}.fl-0{display:none}.fl-1{display:block}';
        document.head.appendChild(style);
    }

    renderUI(json) {
        var UI = ''
            + '          <div class="wrap-boxpopup '+ json.pos +'" id="popup100">                                                                                          '
            + '              <div class="header-boxpopup">                                                                                                                 '
            + '                  <button class="float-right f-s-l close-button" onclick="closepopup()"><bold>x</bold></button><br>                                         '
            + '                      <span class="float-clear"></span>                                                                                                     '
            + '                      <span class="f-s-m"><bold>Do you want a callback?</bold></span><br>                                                                   '
            + '                      <span class="f-s-s">Please give us your details and we will get back to you. </span>                                                  '
            + '              </div>                                                                                                                                        '
            + '                      <div class="body-boxpopup f-s-s">                                                                                                     '
            + '                          <div class="wrap-input fl-'+ json.name +'">                                                                                       '
            + '                              <input class="input1" type="text" name="name" placeholder="Name" id="e_name">                                                 '
            + '                          </div>                                                                                                                            '
            + '                                                                                                                                                            '
            + '                          <div class="wrap-input fl-' + json.phone +'">                                                                                     '
            + '                              <div class="input2">                                                                                                          '
            + '                                  <select class="w-40" id="e_cprefix">                                                                                      '
            + '                                      <option value="ID" selected>ID</option>                                                                               '
            + '                                      <option value="SG">SG</option>                                                                                        '
            + '                                      <option value="CN">CN</option>                                                                                        '
            + '                                      <option value="DE">DE</option>                                                                                        '
            + '                                  </select>                                                                                                                 '
            + '                                  <input class="w-50" type="text" name="email" placeholder="Phone Number" id="e_phone">                                     '
            + '                          </div>                                                                                                                            '
            + '                      </div>                                                                                                                                '
            + '                                                                                                                                                            '
            + '                      <div class="wrap-input fl-' + json.interest +'">                                                                                      '
            + '                          <select class="input1" id="e_select">                                                                                             '
            + '                              <option value="0">I\'m Interested in Content</option>                                                                         '
            + '                              <option value="1">I\'m Interested in Design</option>                                                                          '
            + '                          </select>                                                                                                                         '
            + '                      </div>                                                                                                                                '
            + '                                                                                                                                                            '
            + '                      <div class="wrap-input fl-' + json.email +'">                                                                                         '
            + '                          <input class="input1" type="text" name="email" placeholder="Email" id="e_email">                                                  '
            + '                      </div>                                                                                                                                '
            + '                                                                                                                                                            '
            + '                      <div class="container-blue-button f-s-m">                                                                                             '
            + '                          <button class="blue-button" onclick="callNow()">                                                                                  '
            + '                              Call Now                                                                                                                      '
            + '                          </button>                                                                                                                         '
            + '                      </div>                                                                                                                                '
            + '                                                                                                                                                            '
            + '                      <div class="errorbox f-s-xs" id="e_error">Error</div>                                                                                 '
            + '                      <div id="scsMsg">You will receive a call soon!</div>                                                                                  '
            + '                                                                                                                                                            '
            + '                  </div>                                                                                                                                    '
            + '              </div>                                                                                                                                        '
            + '                                                                                                                                                            '
            + '              <div class="mini-boxpopup '+ json.pos +' f-s-m" id="minipopup100" onclick="openpopup()">                                                      '
            + '                  <img src="images/sp.png" alt="Paris">                                                                                                     '
            + '                      Click here to get a callback                                                                                                          '
            + '              </div>                                                                                                                                        '
            + '          </div>                                                                                                                                            '
            + '      </div>                                                                                                                                                '
            + '  <div id="e_loader">                                                                                                                                       '
            + '      <p> </p>                                                                                                                                              '
            + '';                                                                                                                                                          
                                                                                                                                                                           
    document.body.innerHTML+=UI;
    }
}

var widget = null;
function openpopup() {
    document.getElementById('popup100').style.display = 'block';
    document.getElementById('minipopup100').style.display = 'none';
}

function closepopup() {
    document.getElementById('popup100').style.display = 'none';
    document.getElementById('minipopup100').style.display = 'block';
}

function callNow() {
    var e_error = document.getElementById('e_error');
    e_error.innerHTML = "";
    var resultValid = numverify();
}

function showSuccessMsg() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    document.getElementById('e_loader').style.display = 'block';
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('here');
            displaySB();
        }
        else if (xhr.status !== 200) {
            console.log('heasdasdre');

            displaySB();

        }
        document.getElementById('e_loader').style.display = 'none';
    };
    xhr.send(encodeURI('id=' + 1));
}

//toast and redirect
function displaySB() {
    var x = document.getElementById("scsMsg");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
        var ty = ''

            + '    <html>                                                                                                                                                      '
            + '    <body>                                                                                                                  '
            + '        <div style="top:50%; left:50%; ; position:absolute">                                                                                                      '
            + '            <h1>Thanks</h1>                                                                                                                                       '
            + '            <h3>for submitting!</h3>                                                                                                                              '
            + '            <button onclick="window.location = \'index3.html\'">Go back</button>                                                                                  '
            + '        </div>                                                                                                                                                    '
            + '                                                                                                                                                                  '
            + '    </body>                                                                                                                                                      '
            + '    </html>                                                                                                                                                      '
        
        var opened = window.open("");
        //opened.document.write(ty);
    }, 3000);
}

//errorbox
function showError(data) {
    var e_error = document.getElementById('e_error');
    e_error.style.display = 'block';
    e_error.innerHTML = data;
}

//****************************************************************************************************
//NUMVERIFY
//deploy
function numverify() {
    var e_phone = document.getElementById('e_phone').value;
    var e_cprefix = document.getElementById('e_cprefix').value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://apilayer.net/api/validate?access_key=65addfa458467a1e943905610b6a6f46&number=' + e_phone + '&country_code=' + e_cprefix);
    document.getElementById('e_loader').style.display = 'block';

    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.response);
            var valid = data['valid'];
            console.log(valid);
            console.log(data);
            console.log(typeof (valid));
            if (valid) {
                elmValid("");
            }
            else {
                elmValid("Phone Number not valid. ");
            };
        }
        document.getElementById('e_loader').style.display = 'none';
    };
    xhr.send();

}

//function numverify() { elmValid("") };

//****************************************************************************************************
//validation on each element
function elmValid(data) {
    console.log(data);
    var errorText = "";
    errorText += data;

    //a. name
    var e_name = document.getElementById('e_name').value;
    if (popupClass._name == 1) {
        if (e_name.length == 0) {
            errorText += "Name cannot be empty.";
        }
    }

    //b. phone no
    var e_phone = document.getElementById('e_phone').value;
    var e_cprefix = document.getElementById('e_cprefix').value;
    if (popupClass._phone == 1) {
        if (e_phone.length == 0 || e_cprefix.length == 0) {
            errorText += "Phone cannot be empty.";
        }
    }

    //c. email
    var emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var e_email = document.getElementById('e_email').value;
    if (popupClass._email == 1) {
        if (e_email.length > 0) {
            if (!emailExp.test(e_email)) {
                errorText += "Email address not valid.";
            }
        }
        else if (e_email.length == 0) {
            errorText += "Email address should not be empty."
        }
    }

    console.log(errorText);

    //check error
    if (errorText.length > 0) {
        showError(errorText);
    }
    else {
        showSuccessMsg();
    }
 }




//****************************************************************************************************
//INIT //unneccessary
function popupwidget(data) {
    popup = new popupClass(data);
}
//****************************************************************************************************
