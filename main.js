Prediccion = "";
Prediccion2 = "";

Webcam.set({
  width:350,
  height:300,
  image_format : 'png',
  png_quality:90
});




camera = document.getElementById("Camera");




Webcam.attach('#Camera');




   
function take_snapshot()
{
  Webcam.snap(function(data_uri) {
      document.getElementById("Resultado").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
  });
}




console.log('ml5 version:', ml5.version);


classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/n9yl7Vzqh/model.json',modelLoaded);




function modelLoaded() {
  console.log('Model Loaded!');
}


function speak(){
var synth = window.speechSynthesis;
speak_data_1 = "La primera prediccion es " + prediction_1;
speak_data_2 = "Y la segunda prediccion es " + prediction_2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);


}








function check()
{
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);
}








function gotResult(error, results) {
if (error) {
  console.error(error);
} else {
  console.log(results);

document.getElementById("Gesto").innerHTML = results[0].label;
  document.getElementById("Gesto2").innerHTML = results[1].label;


  Prediccion = results[0].label;
   Prediccion2 = results[1].label;
   speak()


   if(Prediccion == "Conejo"){
     document.getElementById("Emoji").innerHTML = "✌️";
   }


   if(Prediccion == "Like"){
     document.getElementById("Emoji").innerHTML = "👍";
   }


   if(Prediccion == "Corazón"){
     document.getElementById("Emoji").innerHTML = "🤞";
   }


   if(Prediccion == "Especial"){
     document.getElementById("Emoji").innerHTML = "👌";
   }


   if(Prediccion2 == "Conejo"){
     document.getElementById("Emoji2").innerHTML = "✌️";
   }


   if(Prediccion2 == "Like"){
     document.getElementById("Emoji2").innerHTML = "👍";
   }


   if(Prediccion2 == "Corazón"){
     document.getElementById("Emoji2").innerHTML = "🤞";
   }


   if(Prediccion2 == "Especial"){
     document.getElementById("Emoji2").innerHTML = "👌";
  }


    }
}


