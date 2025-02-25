const firstName = document.getElementById("first_name");
const famName = document.getElementById("fam_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
var emailjs;
const SERVICE_ID = "service_waso8n7";
const TEMPLATE_ID = "template_3j8e7a9";
const ADMIN_TEMPLATE_ID = "template_2zyivqs";
const USER_ID = "Epi6vw0ESOOBfYmU_";
emailjs.init(USER_ID); // Replace with your EmailJS user ID

function sendFormData(data, isToAdmin = false) {
  emailjs
    .send(SERVICE_ID, isToAdmin ? ADMIN_TEMPLATE_ID : TEMPLATE_ID, {
      name: data.firstName,
      from_name: data.from_name,
      to_name: data.to_name,
      email: data.email,
      message: `Hello my name is ${
        data.firstName + " " + data.famName
      } I want to take part of the webinar!
       Here is my phone number ${data.phone}
      `,
    })
    .then(function (response) {
      location.reload();
    })
    .catch(function (error) {
      alert("Failed to send email. Error: " + error.text);
    });
}

function handleFormSubmit() {
  if (!firstName?.value.trim()) {
    alert("נא למלא שם פרטי");
    return;
  }
  if (!famName?.value.trim()) {
    alert("נא למלא שם משפחה");
    return;
  }
  if (!email?.value.trim()) {
    alert("נא למלא כתובת מייל");
    return;
  }
  if (!phone?.value.trim()) {
    alert("נא למלא מספר טלפון");
    return;
  }

  alert("תודה!");
  const data = {
    firstName: firstName.value,
    from_name: famName.value,
    famName: famName.value,
    email: email.value,
    phone: phone.value,
  };
  //  to user
  sendFormData({ ...data, to_name: famName.value, from_name: "PrimeTech" });

  //  to prime tech
  sendFormData(
    {
      ...data,
      to_name: "PrimeTech",
      from_name: firstName.value,
      email: "prmtchdmn@gmail.com",
    },
    true
  );
}

document
  .getElementById("submit_btn")
  .addEventListener("click", handleFormSubmit);
