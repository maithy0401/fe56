function themNguoiDung() {
  console.log("maithy da lam themNguoiDung");
}

// In ra ngoài màn hình 
console.log("Hello FE56")

// BIẾN
//String
var username = "Vu Mai Thy";
var address = "112 Cao Thắng";
//Number
var age = 18;
//Boolean
var status = true;
//Null
var numberStudent = null;
//undefined
var people;

console.log("tên: " + username);
console.log("địa chỉ: " + address);
console.log(username, address);
console.log("tên: " + username, " địa chỉ: " + address);
console.log(people);

//Hoisting
console.log("Full name: " + fullName);
var fullName = "Nguyen Van A";

// isLogin = true;
// console.log("Login:", islogin);

// console.log(student);

//Constarnt Hằng số
const PI = 3.14;


//CÂU LỆNH ĐK
// == so sánh giá trị
// === so sánh luôn kiểu dữ liệu
if (1 === "1") {
  console.log("ĐK đúng");
} else {
  console.log("ĐK sai")
}

//Toán tử 3 ngôi
// Dk ? "Dung" : "Sai"
(1 == 1) ? console.log("ĐK Đúng"): console.log("ĐK Sai")

//
var btA = true;
var btB = false;
console.log("Ket qua &&: ", btA && btB);
console.log("Ket qua ||: ", btA || btB);
console.log("Phu dinh cua btA: ", !btA);

//switch case
switch (0) {
  case 0:
    console.log("Day la so 0");
    break;
  case 1:
    console.log("Day la so 1");
    break;
  case 2:
    console.log("Day la so 2");
    break;
  default:
    console.log("Không xác định");
    break;
}

// Array
var list = ["Thy", "Mai", "Phuc", "Nam"];
console.log(list);
console.log(list[0]);

//Loop
for (var i = 0; i < list.length; i++) {
  console.log(list[i]);
}

// bài toán
var number_1 = 10;
var number_2 = 5;
var number_3 = 20;
var number_4 = 7;
var number_5 = 20;
var number_6 = 7;

var total = number_1 + number_2;
console.log("Tổng là", total);

var total2 = number_3 + number_4;
console.log("Tổng 2 là ", total2)

//HÀM KO THAM SỐ
tinhTong12();
tinhTong34();

function tinhTong12() {
  var sum = number_1 + number_2;
  console.log("sum la: ", sum);
}

function tinhTong34() {
  var sum = number_3 + number_4;
  console.log("sum la: ", sum);
}

//HÀM CÓ THAM SỐ
function tinhTong(numberA, numberB) {
  var sum = numberA + numberB;
  console.log("sum là: ", sum);
}
tinhTong(number_1, number_2);
tinhTong(number_3, number_4);
tinhTong(number_5, number_6);
tinhTong(100, 29);

//HÀM CÓ GIÁ TRỊ TRẢ VỂ
function tinhTong2(numberA, numberB) {
  var sum = numberA + numberB;
  return sum;
}
// var total3 = tinhTong2(50, 100);
console.log("Tổng là", tinhTong2(50, 100));

//BT tính điểm TB: toán, lý, hóa
var toan = 7;
var ly = 8;
var hoa = 9;

function tinhDiemTB(toan, ly, hoa) {
  var diemTB = (toan + ly + hoa) / 3;
  return diemTB;
}

function xepLoai(diemTB) {
  console.log(diemTB);

  if (9 <= diemTB && diemTB <= 10) {
    console.log("Xếp loại xuất sắc");
  } else if (8 <= diemTB && diemTB < 9) {
    console.log("Xếp loại giỏi");
  } else if (7 <= diemTB && diemTB < 8) {
    console.log("Xếp loại khá")
  } else if (5 <= diemTB && diemTB < 7) {
    console.log("Xep loại TB")
  } else {
    console.log("Xếp loại yếu");
  }
}
// var diemTB = tinhDiemTB(toan, ly, hoa);
xepLoai(tinhDiemTB(toan, ly, hoa));


// DOM by ID
var txtInput = document.getElementById("txtInput");
console.log(txtInput.value);
console.log(txtInput);

var _pText = document.getElementById("pText");
console.log(_pText);
console.log(_pText.innerHTML);
console.log(_pText.innerText);

//Event
//Cách 1 
// function eventClick(){
//   // console.log("eventClick");
//   var txtValue = document.getElementById("txtInput").value;
//   console.log(txtValue);
// }

// Cách 2 
// document.getElementById("btnClick").onclick = function(){
//   var txtValue = document.getElementById("txtInput").value;
//   console.log(txtValue);
// }

// Cách 3a: addEventListener là 1 hàm có 2 tham số: "click" -sự kiện và 1 hàm khác function(){} -> callback function
// document.getElementById("btnClick").addEventListener("click", function(){
//   var txtValue = document.getElementById("txtInput").value;
//   console.log(txtValue);
// })
// Cách 3b Viết riêng hàm 
function demoClick (){
  var txtValue = document.getElementById("txtInput").value;
  console.log(txtValue);
}
document.getElementById("btnClick").addEventListener("click",demoClick);


//Thay đổi nội dung/Style thẻ
document.getElementById("btnClickMe").addEventListener("click",function(){
  document.getElementById("divContent").innerHTML = "Thay đổi rồi nhé!";
  document.getElementById("divContent").style.backgroundColor = "pink";
  document.getElementById("divContent").style.fontSize = "5rem";
  document.getElementById("divContent").style.padding = "30px";
})

//Ẩn thẻ
document.getElementById("btnHide").addEventListener("click",function(){
  document.getElementById("divContent").style.display = "none";
})

//Hiện thẻ
document.getElementById("btnShow").addEventListener("click",function(){
  document.getElementById("divContent").style.display = "block";
})

//Disable button "Click me!"
document.getElementById("btnDisable").addEventListener("click",function(){
  document.getElementById("btnClickMe").disabled = true;
})

//Enable button "Click me!"
document.getElementById("btnEnable").addEventListener("click",function(){
  // document.getElementById("btnClickMe").disabled = false;
  document.getElementById("btnClickMe").removeAttribute("disabled");

})

//Bulb on - off
document.getElementById("btnBulbOn").addEventListener("click",function(){
  document.getElementById("imgBulb").src = "./imgs/pic_bulbon.gif";
})
document.getElementById("btnBulbOff").addEventListener("click",function(){
  document.getElementById("imgBulb").src = "./imgs/pic_bulboff.gif";
})

//Demo Login
document.getElementById("btnLogin").addEventListener("click",function(){
  var userNameValue = document.getElementById("userName").value;
  var passWordValue = document.getElementById("passWord").value;

  if (userNameValue === "CyberSoft" && passWordValue === "CyberSoft"){
    // document.getElementById("txtThongBao").innerHTML = "Đăng nhập thành công!";
    // document.getElementById("txtThongBao").style.backgroundColor = "green";
    // document.getElementById("txtThongBao").style.display = "block";
    // document.getElementById("txtThongBao").style.color = "white";

    // changeColor("Đăng nhập thành công!","green")
    
    changeColor2("Đăng nhập thành công!", "alert alert-success");

  } else {
    // document.getElementById("txtThongBao").innerHTML = "Đăng nhập thất bại...";
    // document.getElementById("txtThongBao").style.backgroundColor = "red";
    // document.getElementById("txtThongBao").style.display = "block";
    // document.getElementById("txtThongBao").style.color = "white";

    // changeColor("Đăng nhập thất bại...", "red")

    changeColor2("Đăng nhập thất bại...", "alert alert-danger");

  }
})

function changeColor(message,bgColor){
  document.getElementById("txtThongBao").innerHTML = message;
  document.getElementById("txtThongBao").style.backgroundColor = bgColor;
  document.getElementById("txtThongBao").style.display = "block";
  document.getElementById("txtThongBao").style.color = "white";
}

function changeColor2(message, classes) {
  document.getElementById("txtThongBao").style.display = "block";
  document.getElementById("txtThongBao").innerHTML = message;
  document.getElementById("txtThongBao").className = classes;
}

//DOM by TagName (dom theo mảng) - muốn lấy cái nào phải biết vị trí (cực hơn id)
var tagName = document.getElementsByTagName("button")[4];
console.log(tagName);

//DOM by Class Name (dom theo mảng) - muốn lấy cái nào phải biết vị trí (cực hơn id)
var _className = document.getElementsByClassName("btn")[0];
console.log(_className);

//DOM by querySelector (giống CSS)
var _querySelector = document.querySelector(".container #txtThongBao");
console.log(_querySelector);

//DOM by querySelectorAll (mảng)
var _querySelectorAll = document.querySelectorAll(".container .form-group")[0];
console.log(_querySelectorAll);

//Tính tiền Tip
document.getElementById("btnTinhTienTip").addEventListener("click",function(){
  var txtTongTien = document.getElementById("txtTongTien").value;
  var slPhanTramTip = document.getElementById("slPhanTramTip").value;
  var txtSoNguoi = document.getElementById("txtSoNguoi").value;

  var tienTip = (txtTongTien * slPhanTramTip) / 100 / txtSoNguoi;

  document.getElementById("txtThongBaoTienTip").innerHTML = tienTip + "$ mỗi người";
  document.getElementById("txtThongBaoTienTip").className = "alert alert-danger d-block";
})

