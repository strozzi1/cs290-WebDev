var allWords = [];
var currentWord = 0;


var myModal = document.getElementById('create-twit-modal');
var shadyback = document.getElementById('modal-backdrop');
var usertext = document.getElementById('twit-text-input');
var username = document.getElementById('twit-attribution-input');
function nowyouseeme (event) {
    console.log("====Toggle function incited");
   // console.log(" -- event.target: ", event.target)
   // console.log(" -- event.currentTarget", event.currentTarget);
    myModal.classList.toggle('hidden');
    shadyback.classList.toggle('hidden');
    usertext.value = "";
    username.value = "";
}

/******Toggling Modal Calls **********/
var twitbutton = document.getElementById('create-twit-button');
twitbutton.addEventListener('click', nowyouseeme);

var escapebutt = document.getElementsByClassName('modal-close-button');
var cancelbutt = document.getElementsByClassName('modal-cancel-button');
escapebutt[0].addEventListener('click', nowyouseeme);
cancelbutt[0].addEventListener('click', nowyouseeme);
/****************** ****************************/

var confirmbutt = document.getElementsByClassName('modal-accept-button');
var twitCont = document.getElementsByClassName('twit-container')[0];
confirmbutt[0].addEventListener('click', newTwit);
function newTwit (event){


    console.log("==== User text: ", usertext.value);
    console.log('==== User Name: ', username.value);

if(usertext.value !== "" && username.value!==""){    //if there is content, then run
                        /** create the new content **/
    console.log("==== New twit confirmed");
    var outerArt = document.createElement("ARTICLE"); //outer article container
    outerArt.classList.add('twit');                   //add twit class
    twitCont.appendChild(outerArt);                 //puts article at the end of the list
 //                      nest top div in new article
    var topDiv = document.createElement("DIV");     //new div
    topDiv.classList.add('twit-icon');              //new div holds twit icon
    outerArt.appendChild(topDiv);                   //nest div in the main article
//                        nest icon in div
    var topDivIcon = document.createElement('I');   //create italic element
    topDivIcon.classList.add('fas');                //it's the
    topDivIcon.classList.add('fa-bullhorn');        //twit icon bullhorn thing
    topDiv.appendChild(topDivIcon);                 //nest it in the top div

//                         nest new div in article under top div
    var bottomDiv = document.createElement('DIV');   //create div element
    bottomDiv.classList.add('twit-content');        //this div holds twit content
    outerArt.appendChild(bottomDiv);                //nest div at the bottom of the article


    var t = document.createTextNode(usertext.value);   //puts words in variable to be put somewhere

    var topPara = document.createElement('P');        //create new P element
    topPara.classList.add('twit-text');               //give it twit text class
    bottomDiv.appendChild(topPara);                   //nest element in the bottom div
    topPara.appendChild(t);                           //nest user text in the new p element

    var user =document.createTextNode(username.value); //create another text node with users name
    var bottomPara =document.createElement('P');      //create new p element
    bottomPara.classList.add('twit-attribution');     //give it username's class
    bottomDiv.appendChild(bottomPara);                //nest P element in the bottom div at the bottom

    var hyperlink = document.createElement('A');
    hyperlink.href="#";
    bottomPara.appendChild(hyperlink)
    hyperlink.appendChild(user);                     //put user name text node inside of the P element in the BottomDiv

    myModal.classList.toggle('hidden');               //toggle the modal box
    shadyback.classList.toggle('hidden');             //toggle the backdrop
  }
  else{   //else give an alert to the user that they haven't done that
    alert("Both fields must be filled out before confirming twit!");
  }
}




var searchbutt = document.getElementById('navbar-search-button');
var searchtext = document.getElementById('navbar-search-input');
var alltwits = document.getElementsByClassName('twit');

searchbutt.addEventListener('click', wheresWaldo);

function wheresWaldo (event) {
  console.log("== Search Button Clicked");

  if(searchtext.value!==""){            //if there's text in search box upons search
    for(i=0; i<alltwits.length; i++){    //going through all twits
      if(!alltwits[i].innerText.includes(searchtext.value) ){  //if twit includes search text
        alltwits[i].classList.toggle('hidden');                 //toggle on hide
      }
    }
  }

  else{                                         //if search input is empty upon search
    for(i=0; i<alltwits.length; i++){
      alltwits[i].classList.remove('hidden');   //remove hidden class attribute from all articles
    }
  }

}
