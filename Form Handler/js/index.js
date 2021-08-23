const submitBtn = document.getElementById("submitBtn");
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
const form = document.getElementById("form");

const submit = (e) => {
  // e.preventDefault();

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

  const formResultJSON =
    "<br><br><br><br>{<br>'name':'" +
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

  const formResult =
    "<img height='260px' src='" +
    URL.createObjectURL(imgInput.files[0]) +
    "'><br><br><table>    <tr>      <th>key</th>      <th>value</th>    </tr>    <tr>      <td>name</td>      <td>" +
    nameInput.value +
    "</td>    </tr>    <tr>      <td>phone</td>      <td>" +
    phoneInput.value +
    "</td>    </tr>    <tr>      <td>department</td>      <td>" +
    departmentInput.value +
    "</td>    </tr>    <tr>      <td>message</td>      <td>" +
    messageInput.value +
    "</td>    </tr>    <tr>      <td>checkbox1</td>      <td>" +
    checkbox1.value +
    "</td>    </tr>    <tr>      <td>checkbox2</td>      <td>" +
    checkbox2.value +
    "</td>    </tr>     <tr>      <td>checkbox3</td>      <td>" +
    checkbox3.value +
    "</td>    </tr>    <tr>      <td>agreement</td>      <td>" +
    radio.value +
    "</td>    </tr>  </table>" +
    formResultJSON;
  if (
    phoneInput.value.match(
      /09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}/
    )
  ) {
    console.log(formResult);
    result.innerHTML = formResult;
    const form = document.getElementById("form");
    form.innerHTML = "";
  } else {
    alert("شماره تلفن را درست وارد کنید");
  }
};

submitBtn.addEventListener("click", (e) => {
  submit(e);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

radio.addEventListener("click", () => {
  if (radio.value == "on") {
    submitBtn.disabled = false;
  }
});
