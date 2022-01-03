/* RATING (RadioButton1) VALIDATION STARTS */
//INPUT RATING
const inputRatings = document.getElementsByName("inputRating");
//INPUT RATINGMARK
const ratingMark = document.getElementsByClassName('ratingmark');
//const ratingMark = document.querySelectorAll('.ratingmark');
//INTPUT RATING LABEL
const ratingLabel = document.getElementById('ratingLabel');
//INPUT RATING ERROR
const ratingError = document.getElementById('ratingError');


//function to check error
function showratingError() {
    //var inputRatingcheck = 0;
    for (let i = 0; i < inputRatings.length; i++) {
        if (!inputRatings[i].checked) {
            //inputRatingcheck++;
            for (const ratingM of ratingMark) {
                ratingM.style.color = "#FF0000";
                ratingM.style.borderColor = "#FF0000"
            }
            ratingLabel.style.color = "#FF0000";
            ratingError.textContent = "Please give rating from 1 to 10";
            return true; //cancel the form from being submit
        }
        return false; //let submit the form
    }
}
//function to check error
/*function showratingError() {
    for (const inputRating of inputRatings) {
        if (!inputRating.checked) {
            for (const ratingM of ratingMark) {
                ratingM.style.color = "#FF0000";
                ratingM.style.borderColor = "#FF0000"
            }
            ratingLabel.style.color = "#FF0000";
            ratingError.textContent = "Please give rating from 1 to 10";
            return true; //cancel the form from being submit
        }
        return false; //let submit the form
    }
}*/

//select rating after error
for (const inputRating of inputRatings) {
    inputRating.onclick = function () {
        ratingLabel.style.color = "#314e52";
        ratingError.textContent = "";
        for (const ratingM of ratingMark) {
            ratingM.style.color = "#314e52";
            ratingM.style.borderColor = "#314e52";
            ratingM.onmouseover = function () {
                ratingM.style.color = "#f7f6e7";
            }
            ratingM.onmouseout = function () {
                ratingM.style.color = "#314e52";
            }
        }
        if (inputRating.checked) {
            const ratingMarkChecked = inputRating.nextSibling;
            ratingMarkChecked.style.color = "#f7f6e7";
            ratingMarkChecked.onmouseout = function () {
                ratingMarkChecked.style.color = "#f7f6e7";
            }
        }

    }

}
/* RATING VALIDATION ENDS */


/* USAGE (RadioButton2) VALIDATION STARTS */
//input
const inputUsages = document.getElementsByName("inputUsage")
//radiomark
const usageMarks = document.getElementsByClassName("usagemark");
//inputUsage label
const usageheadLabel = document.getElementById("usageLabel");
//inputUsage Error
const usageError = document.getElementById("usageError");
//radiobutton label
const usageLabels = document.getElementsByClassName("usage-label");
//function to check error
function showusageError() {
    for (const inputUsage of inputUsages) {
        if (!inputUsage.checked) {
            usageheadLabel.style.color = "#FF0000";
            usageError.textContent = "Please Select any Option";
            for (const usageMark of usageMarks) {
                usageMark.style.borderColor = "#FF0000"
            }
            for (const usageLabel of usageLabels) {
                usageLabel.style.color = "#FF0000";
            }
            return true; //cancel the form from being submit
        }
        return false; //let submit the form
    }
}
/*USAGE VALIDATION ENDS*/

/* GOALS (RadioButton3) VALIDATION STARTS */
//inputGoals
const inputGoals = document.getElementsByName("inputGoals");
//radiomark
const goalMark = document.getElementsByClassName("goalmark");
//goalLabel
const goalheadLabel = document.getElementById("goalLabel");
//goalError
const goalError = document.getElementById("goalError");
const goalLabels = document.getElementsByClassName("goal-label");
//function to showgoalError
function showgoalError() {
    for (const inputGoal of inputGoals) {
        if (!inputGoal.checked) {
            goalheadLabel.style.color = "#FF0000";
            goalError.textContent = "Please select any option!";
            for (let goalM of goalMark) {
                goalM.style.borderColor = "#FF0000";
            }
            for (let goalLabel of goalLabels) {
                goalLabel.style.color = "#FF0000";
            }
            return true;
        }
        return false;
    }
}
/* GOALS VALIDATION ENDS */

/* IMPROVE VALIDATION STARTS (CHECKBOX1) */
const improveHeadLabel = document.getElementById("improveHeadLabel");
const improveError = document.getElementById("improveError");
const inputImprovements = document.getElementsByName("improvements");
//const inputImprovements = document.querySelectorAll('input[type="checkbox"]:checked');
const improveMarks = document.getElementsByClassName("improvemarks");
const improvLabels = document.getElementsByClassName("improveLabels");

for (const inputImprovement of inputImprovements) {
    inputImprovement.onclick = function () {
        //console.log(inputImprovement);
        showimproveError();
    }
}

function showimproveError() {
    for (const inputImprovement of inputImprovements) {
        if (!inputImprovement.checked) {
            improveHeadLabel.style.color = "#FF0000";
            improveError.textContent = "Please Select any option!"
            for (const improveMark of improveMarks) {
                improveMark.style.borderColor = "#FF0000";
            }
            for (const improveLabel of improvLabels) {
                improveLabel.style.color = "#FF0000";
            }
            return true;
        } else {
            improveHeadLabel.style.color = "#314e52";
            improveError.textContent = ""
            for (const improveMark of improveMarks) {
                improveMark.style.borderColor = "#314e52";
            }
            for (const improveLabel of improvLabels) {
                improveLabel.style.color = "#314e52";
            }
            return false;
        }

    }
}
/* IMPROVE VALIDATION ENDS (CHECKBOX1) */

/* NAME (Input1) VALIDATION STARTS */
//INPUT NAME
const inputName = document.getElementById('name');
//INPUT NAME LABEL
const nameLabel = document.getElementById('nameLabel');
//INPUT NAME ERROR MESSAGE
const nameError = document.getElementById('nameError');

// Each time the user types something, we check if the
// form fields are valid.
inputName.addEventListener('input', function (event) {
    shownameError();
});

//check name validation when focusout
inputName.addEventListener('focusout', (event) => {
    shownameError();
});

//function for check all errors
function shownameError() {
    const nameRegEx = /^[a-z ,.'-]+$/i;
    const nameValue = document.getElementById('name').value;
    if (nameValue == '' || nameValue == null) {
        // If the field is empty
        // display the following error message.
        //name.placeholder = "You need to enter an name";
        nameError.textContent = 'You need to enter a Name.';
        //change name label color
        nameLabel.style.color = "#FF0000";
        nameLabel.style.transition = "all 0.3s";
        //change placeholder color
        inputName.classList.add("err_placeholder");
        //change input borderBottom color
        inputName.style.borderBottomColor = "#FF0000";
        // return true to do not submit the form (for refernce check form addeventlistner at the end)
        return true;
    } else if (!nameRegEx.test(nameValue)) {
        // If typemismatch
        //display the following error message
        nameError.textContent = 'Enter Valid Name.';
        //change name label color
        nameLabel.style.color = "#FF0000";
        nameLabel.style.transition = "all 0.3s";
        //change input borderBottom color
        inputName.style.borderBottomColor = "#FF0000";
        // return true to do not submit the form (for refernce check form addeventlistner at the end)
        return true;
    } else {
        //if everything correct
        //change name label color to normal
        nameLabel.style.color = "#314e52";
        nameLabel.style.transition = "all 0.3s";
        // change borderBottom color to normal
        inputName.style.borderBottomColor = "#314e52";
        // Reset the content of the message
        nameError.textContent = '';
        // return false to submit the form (for refernce check form addeventlistner at the end)
        return false;
    }

}
/* NAME VALIDATION ENDS */

/* EMAIL (Input2) VALIDATION STARTS */
//INPUT EMAIL
const inputEmail = document.getElementById('email');
//INPUT EMAIL LABEL
const emailLabel = document.getElementById('emailLabel');
//INPUT EMAIL ERROR MESSAGE
const emailError = document.getElementById('emailError');

inputEmail.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    //email
    if (inputEmail.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        emailLabel.style.color = "#314e52";
        inputEmail.style.borderBottomColor = "#314e52";
        emailError.textContent = ''; // Reset the content of the message
    } else {
        // If there is still an error, show the correct error
        showemailError();
    }
});

inputEmail.addEventListener('focusout', (event) => {
    showemailError();
});

function showemailError() {
    if (inputEmail.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        //email.placeholder = "You need to enter an e-mail address";
        emailError.textContent = 'You need to enter an e-mail address.';
        inputEmail.classList.add("err_placeholder");
        emailLabel.style.color = "#FF0000";
        emailLabel.style.transition = "all 0.3s";
        inputEmail.style.borderBottomColor = "#FF0000";
    } else if (inputEmail.validity.typeMismatch) {
        // If the field doesn't contain an email address
        // display the following error message.
        emailLabel.style.color = "#FF0000";
        emailLabel.style.transition = "all 0.3s";
        inputEmail.style.borderBottomColor = "#FF0000";
        emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if (inputEmail.validity.tooShort) {
        // If the data is too short
        // display the following error message.
        emailLabel.style.color = "#FF0000";
        emailLabel.style.transition = "all 0.3s";
        inputEmail.style.borderBottomColor = "#FF0000";
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${inputEmail.value.length}.`;
    }
}
/* EMAIL VALIDATION ENDS */


/* SELECT (Select1) VALIDATION STARTS */
//SELECT
const selectOption = document.getElementById('selectOption');

//SELECT COUNTRY
const selectCountry = document.getElementById('country');
//SELECT COUNTRY LABEL
const selectcountryLabel = document.getElementById('selectcountryLabel');
//SELECT COUNTRY ERROR MESSAGE
const selectcountryError = document.getElementById('selectcountryError');
//country
selectCountry.addEventListener('click', (event) => {
    showcountryError();
});
selectCountry.addEventListener('focusout', (event) => {
    showcountryError();
});

function showcountryError() {
    if (selectCountry.selectedIndex == "") {
        selectCountry.style.borderBottomColor = "#FF0000";
        selectcountryLabel.style.color = "#FF0000";
        selectcountryError.textContent = "Please Select your country!";
        return true;
    } else {
        selectCountry.style.borderBottomColor = "#314e52";
        selectcountryLabel.style.color = "#314e52";
        selectcountryError.textContent = "";
        return false;
    }
}


//SELECT (Select2) ROLE
const selectRole = document.getElementById('role');
//SELECT ROLE LABEL
const selectroleLabel = document.getElementById('selectroleLabel');
//SELECT ROLE ERROR MESSAGE
const selectroleError = document.getElementById('selectroleError');

//role
selectRole.addEventListener('click', (event) => {
    showroleError();
});
selectRole.addEventListener('focusout', (event) => {
    showroleError();
});
function showroleError() {
    if (selectRole.selectedIndex == "") {
        selectRole.style.borderBottomColor = "#FF0000";
        selectroleLabel.style.color = "#FF0000";
        selectroleError.textContent = "Please Select your current role!";
        return true;
    } else {
        selectRole.style.borderBottomColor = "#314e52";
        selectroleLabel.style.color = "#314e52";
        selectroleError.textContent = "";
        return false;
    }
}
/* SELECT VALIDATION ENDS */


/* CHECK IF THE FORM CONTAINS VALID DATA WHEN SUBMITTING */
/* FORM VALIDATIONS */
const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function (event) {


    /* RATING (RadioButton1) */
    if (showratingError()) {
        // If showratingError() returns true then display the appropriate message and prevent the form from being submit by canceling the event
        event.preventDefault();

    }

    /* InputUsage (RadioButton2) */
    if (showusageError()) {
        event.preventDefault();

        for (const inputUsage of inputUsages) {
            inputUsage.onclick = function () {
                usageheadLabel.style.color = "#314e52";
                usageError.textContent = "";
                for (const usageMark of usageMarks) {
                    usageMark.style.borderColor = "#314e52";
                }
                for (const usageLabel of usageLabels) {
                    usageLabel.style.color = "#314e52";
                }
            }

        }

    }

    /* InputGoals (RadioButton3) */
    if (showgoalError()) {
        event.preventDefault();

        for (const inputGoal of inputGoals) {
            inputGoal.onclick = function () {
                goalheadLabel.style.color = "#314e52";
                goalError.textContent = "";
                for (let goalM of goalMark) {
                    goalM.style.borderColor = "#314e52";
                }
                for (let goalLabel of goalLabels) {
                    goalLabel.style.color = "#314e52";
                }
            }
        }
    }

    /* INPUT IMPROVEMENTS (CHECKBOX1) */
    /*if (showimproveError()) {
        event.preventDefault();

        for (const inputImprovement of inputImprovements) {
            inputImprovement.onclick = function () {
                improveHeadLabel.style.color = "#314e52";
                improveError.textContent = ""
                for (const improveMark of improveMarks) {
                    improveMark.style.borderColor = "#314e52";
                }
                for (const improveLabel of improvLabels) {
                    improveLabel.style.color = "#314e52";
                }
            }
        }
    }*/

    if (showimproveError()) {
        event.preventDefault();

        for (const inputImprovement of inputImprovements) {
            if (inputImprovement.checked) {
                improveHeadLabel.style.color = "#314e52";
                improveError.textContent = ""
                for (const improveMark of improveMarks) {
                    improveMark.style.borderColor = "#314e52";
                }
                for (const improveLabel of improvLabels) {
                    improveLabel.style.color = "#314e52";
                }
            } else {
                showimproveError();
            }
        }
    }



    /* INPUT NAME(Input1) */
    //If shownameError() checks true then display an appropriate error message
    if (shownameError()) {
        //Then we prevent the form from being sent by canceling the event
        event.preventDefault();
        inputName.focus();
    }


    /* INPUT EMAIL (INput2) */
    if (!inputEmail.validity.valid) {
        // If it isn't, we display an appropriate error message
        showemailError();
        // Then we prevent the form from being sent by canceling the event        
        event.preventDefault();
        inputEmail.focus();
    }


    /* SELECT COUNTRY (Select1) */
    if (showcountryError()) {
        // If showcountryError() returns true then display the appropriate message and prevent the form from being submit by canceling the event
        event.preventDefault();
        selectCountry.focus();
    }

    /* SELECT ROLE (Select2) */
    if (showroleError()) {
        // If showroleError() returns true then display the appropriate message and prevent the form from being submit by canceling the event       
        event.preventDefault();
        selectRole.focus();
    }
});