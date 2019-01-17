
function check(){
	var group1  = document.quiz.group1.value;
	var group2  = document.quiz.group2.value;
	var group3  = document.quiz.group3.value;

	var correct = 0;
	var total_cuestions=3;
	
	if (group1 == "Correct") {
		correct++;
	}
	if (group2 == "Correct") {
		correct++;
	}

	if (group3 == "Correct") {
		correct++;
	}

	var aux = correct/total_cuestions;
	aux = aux.toFixed(2)*100; /*Redondeo a dos decimales*/

	window.alert("Aciertos: " +correct+"/"+total_cuestions+"\n"+ "Puntaje : " +aux+"/100");
}
	
