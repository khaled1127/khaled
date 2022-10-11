// // اول حاجه بمسك  الحاجه اللى انا عاوز اغيرها
// let landingPage = document.querySelector(".landing-page");

// // تانى حاجه بعمل ارى فيها العناصر اللى انا عاوزه تقلب مع نفسها
// let imgesArray = [
//   "img(1).jpg",
//   "img(2).jpg",
//   "img(3).jpg",
//   "img(4).jpg",
//   "img(5).jpg",
//   "img(0).jpg",
// ];
// //ف الخلفيه  url هنا بعمل ازاى اغير مسار الصور اللى جو ال
// /**
//  * اول حاجه بحد انا عاوز اغير اى
//  */

// // landingPage.style.backgroundImage = 'url("image/img(1).jpg")';
// // console.log(landingPage.style.backgroundImage);

// // هجيب رقم عشوائى
// /**
//  * Math.floor() تقرب الرقم اللى اقرب رقم صحيح
//  * Math.random() رقم عشوائى
//  * imgesArray.length عدد عناصر الارى
//  * هنا انا بقول هتلى الرقم العشوائى من عدد العناصر الموجوده جو الارى وقرب اللى اقر ب رقم صحيح
//  */
// // let randomNumber = Math.floor(Math.random() * imgesArray.length);
// // console.log(randomNumber);
// // هنا هخلى كل ثواننى يطبعلى رقم مختلف
// // setInterval بتستخدم ع طريق التكرار وتاخر الزمنى يعنى ف كل مره بتدى قميه متكرر
// // setInterval بستستنى وبعدين تطبع وبتكرر مع االوقت ل
// setInterval(function () {
//   let randomNumber = Math.floor(Math.random() * imgesArray.length);
//   console.log(randomNumber);
//   // وهنا بقول هات مسار الصوره وغيره عن طريق الائرى الجدى عن طريق الرقم العشوائى واطبعه ف مسار الصوره
//   landingPage.style.backgroundImage =
//     'url("image/' + imgesArray[randomNumber] + '")';
//   console.log(landingPage.style.backgroundImage);
// }, 1000);

/**
 * toggle ده لو ضغط ع العنصر بيعمل حاجه من الاثنين يا ام يضيف الكلس يا اما يمسح الكلس
 * لو الكلس مش موجدو هيضيف لو موجود هيشيلو
 * درس رقم 96
 *  بتعمل عمليت اضاف وحذف ف نفس الوقت لو موجود هتشيل لو مش موجود هضيفtoggle باختصار
 */
//open وهضيف عليه كلس اسم  .setting-box  وبعد كده هتروح ع العنصر اللى اسم fa-spin هضيف كلس اسم .toggle-setting .box-gear هنا انا حدد العنصراللى هشتغل عليه وجيت قولت لو ضغط ع الايكون اللى اسم الكلاس بتعها
// document.querySelector(".toggle-setting .box-gear").onclick = function () {
//   this.classList.toggle("fa-spin");
//   document.querySelector(".setting-box").classList.toggle("open");
// };

// تغير الون الموقع النص
// هنا انا بحدد كل اللى جو اليو ا

// const colorsli = document.querySelectorAll(".colors-list li");
// console.log(colorsli);

// colorsli.forEach(function (li) {
//   // بتاعهdataset اصبعلى قيمه الliهنا انا بقول اى عنصر اضغط عليه من
//   // addEventListener ده بيطلب منى حاجتين الاول النوع وبعد كده الحاجه اللى هتتغير
//   // addEventListener ("حدث", function(){
//   // })
//   li.addEventListener("click", function (e) {
//     console.log(e.target.dataset.color);
//     // هنا انا عوز اغير بق قيه الاون الاساسى بتاعى بتاع الصفحه
// dataset.colorوغير هالى بى قيمه العنصر اللى واخد الون جو ال --main-color هنا انا بقول هاتلى الخواص اللى جو ملف الاستيل اللى اسمه
//     document.documentElement.style.setProperty(
//       "--main-color",
//       e.target.dataset.color
//     );
//   });
// });

// let mainColors = localStorage.getItem("color_option");

// // console.log(mainColors);

// if (mainColors !== null) {
//   // console.log("kahkak");
//   // console.log(localStorage.getItem("color_option"));
// }

// const colorsli = document.querySelectorAll(".colors-list li");
// colorsli.forEach(function (li) {
//   li.addEventListener("click", (e) => {
//     document.documentElement.style.setProperty(
//       "--main-color",
//       e.target.dataset.color
//     );
//     //هنا انا بقول ان القيمه
//     localStorage.setItem("color_option", e.target.dataset.color);
//   });
// });
