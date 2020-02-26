	// function dummy(arg) {
	//   console.log(arg);
	// }

	// $("input[type=checkbox]").change(dummy)
console.log("скрипт подгрузился")

function init() { 

  $("input[type=checkbox]").change(trackChecks);
  $("input[type=radio]").change(trackRadios);

  trackChecks()
  console.log("скрипт подгрузился");
}

$(document).ready(init)

const maxAllowedChecks = 2;

function trackChecks() {
  let checkCount = $("input[type=checkbox]:checked").length;
     $("input[type=checkbox]:not(:checked)").prop("disabled", checkCount >= maxAllowedChecks)

}

function trackRadios() {
  $("input[type=radio]").prop("disabled", true);
}

const btn1prc=1;
const btn3prc=3;
const btn7prc=7;
let prcnt =0; 
let width1 = $("#prgrbar")[0].style.width.replace('%', '');
console.log(width1);
console.log(prcnt);

$(btn1).click(function() {
	prcnt=prcnt + btn1prc;
	console.log(prcnt);
	upload();
})

$(btn3).click(function() {
	prcnt=prcnt + btn3prc;
	console.log(prcnt);
	upload();
})

$(btn7).click(function() {
	prcnt=prcnt + btn7prc;
	console.log(prcnt);
	upload();
})
function upload() {
	$('#prgrbar').width(prcnt+"%");
	$('#prgrbar').html(prcnt+"%");
}