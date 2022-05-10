var username = document.getElementById("userN");
var number = document.getElementById("uNum");
var email = document.getElementById("email");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var form = document.getElementById("form");



form.addEventListener('submit', (e) => {
         e.preventDefault()
          
         checkInputs();
        
     });
     
     function checkInputs() {
          //we need to get the values from the inputs
          var usernameValue = username.value.trim();
          var emailValue = email.value.trim();
          var password1Value = password1.value.trim();
          var password2Value = password2.value.trim();
          var numberValue = number.value.trim();
          if (usernameValue === '') {
               // show the error
               // add the error class
               
               setErrorFor(username, 'Ode username no suppose dey empty, Oya fill am.');
          } else {
               // add the success class
               setSuccessFor(username, 'Everything dey alright.');
          }

          
          if (numberValue === '') {
            // show the error
            // add the error class
            
            setErrorFor(number, 'Ode username no suppose dey empty, Oya fill am.');
       } else {
            // add the success class
            setSuccessFor(number, 'Everything dey alright.');
       }

          if (emailValue === '') {
            // show the error
            // add the error class  
            setErrorFor(email, 'Ode Email no suppose dey empty, Oya fill am.');
         } else if(!isEmailCorrect(emailValue)){
            setErrorFor(email, 'Oga the Email no valid oo.');
        }  else {
            // add the success class
            setSuccessFor(email, 'Everything dey alright.');
        }

        if (password1Value === '') {
            // show the error
            // add the error class
            
            setErrorFor(password1, 'password sef no suppose dey empty, Oya fill am.');
       } else {
            // add the success class
            setSuccessFor(password1, 'Everything dey alright.');
       }

       if (password2Value === '') {
        // show the error
        // add the error class
        
        setErrorFor(password2, 'who be this guy, comfirm password sef no suppose dey empty, Oya fill am.');
   } else if(password1Value !== password2Value){
        // add the success class
        setErrorFor(password2, 'No be the same password oo.');
   } else {
    // add the success class
    setSuccessFor(password2, 'Everything dey alright.');

    // show a success massage

}

       
     }

     function setErrorFor(input, massage) {
          var field = input.parentElement; //.field
          var small = field.querySelector('small');

          //this is to add the error massage inside small
          small.innerText = massage;
          // add error class
          field.className = 'field error';
     }

     function setSuccessFor(input, massage) {
          var field = input.parentElement;
          var small = field.querySelector('small');

          //this is to add the error massage inside small
          small.innerText = massage;
         // add success class
         field.className = 'field success';
     }

     // to check if the email is correct
     function isEmailCorrect(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
     }