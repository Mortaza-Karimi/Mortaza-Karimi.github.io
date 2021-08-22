const submitBtn = document.getElementById("submitBtn");

const submit = () => {
  const result = document.getElementById("result");

  const nameInput = document.querySelector("#nameInput");
  const phoneInput = document.querySelector("#phoneInput");
  const departmentInput = document.querySelector("#departmentInput");
  const messageInput = document.querySelector("#messageInput");

  const formResult =
    "{<br>'name':'" +
    nameInput.value +
    "',<br>'phone':'" +
    phoneInput.value +
    "',<br>'department':'" +
    departmentInput.value +
    "',<br>'message':'" +
    messageInput.value +
    "'<br>}";
  console.log(formResult);
  result.innerHTML = formResult;
  const form = document.getElementById("form");
  form.innerHTML = "";
};

submitBtn.addEventListener("click", submit);
