const inputfield = document.querySelector("#qr-input");
const btn = document.querySelector("#qr-button");
const qrimage = document.querySelector("#qr-img");
const clr = document.querySelector("#clrbtn");

btn.addEventListener("click", () => {
  const inputVal = inputfield.value;
  if (!inputVal) {
    alert("Please enter something...");
  } else {
    const link = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`;
    qrimage.src = link;
  }
});

clr.addEventListener("click",()=>{
  inputfield.value = '';
  qrimage.src = 'https://ifocusmarketing.com/wp-content/uploads/2022/05/QR-codes-are-back.jpg'
})
