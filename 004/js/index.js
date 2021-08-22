const submitBtn = document.getElementById("submitBtn");

const submit = () => {
  const result = document.getElementById("result");

  const nameInput = document.querySelector("#nameInput");
  const phoneInput = document.querySelector("#phoneInput");
  const departmentInput = document.querySelector("#departmentInput");
  const messageInput = document.querySelector("#messageInput");
  const imgInput = document.querySelector("#image");
  const checkbox1 = document.querySelector("#checkbox1");
  const checkbox2 = document.querySelector("#checkbox2");
  const checkbox3 = document.querySelector("#checkbox3");
  const radio = document.querySelector("#radio");

  const imgSrc = { src: "" };

  imgInput.addEventListener("change", function () {
    console.log("change");
    if (this.files && this.files[0]) {
      // imgInput.onload = () => {
      //   URL.revokeObjectURL(imgInput.src); // no longer needed, free memory
      // };
      console.log("src");
      imgSrc.src = URL.createObjectURL(this.files[0]);

      // imgInput.src = URL.createObjectURL(this.files[0]); // set src to blob url
    }
  });

  const formResult =
    "<img src='" +
    URL.createObjectURL(imgInput.files[0]) +
    "'><br><br><br><br>{<br>'name':'" +
    nameInput.value +
    "',<br>'phone':'" +
    phoneInput.value +
    "',<br>'department':'" +
    departmentInput.value +
    "',<br>'message':'" +
    messageInput.value +
    "',<br>'checkbox1':'" +
    checkbox1.value +
    "',<br>'checkbox2':'" +
    checkbox2.value +
    "',<br>'checkbox3':'" +
    checkbox3.value +
    "',<br>'agreement':'" +
    radio.value +
    "',<br>}";
  console.log(formResult);
  result.innerHTML = formResult;
  const form = document.getElementById("form");
  form.innerHTML = "";
};

submitBtn.addEventListener("click", submit);
