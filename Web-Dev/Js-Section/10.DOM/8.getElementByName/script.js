function collectData() {
  const LanguageproffEls = document.getElementsByName("languageProficiency");

  console.log(LanguageproffEls);

  //Loop Through the NodeList to Find the selected radio button

  for (let i = 0; i < LanguageproffEls.length; i++) {
    if (LanguageproffEls[i].checked) {
      console.log(`selected Language:${LanguageproffEls[i].value}`);
    }
  }

  //log all the elements with the name email

  const EmailsEl = document.getElementsByName("email");
  console.log(EmailsEl);
}
