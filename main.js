// ------------------------------
// Webcam Configuration
// ------------------------------

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

var camera = document.getElementById("camera");

Webcam.attach("#camera");


// ------------------------------
// Capture Image
// ------------------------------

function take_snapshot() {

    Webcam.snap(function(data_uri) {

        document.getElementById("result").innerHTML =
            '<img id="captured_image" src="' + data_uri + '">';

    });

}


// ------------------------------
// Load ml5.js Model
// ------------------------------

console.log("ml5 version:", ml5.version);

var classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/A-YFb4yL0/model.json",
    modelLoaded
);


// ------------------------------
// Model Loaded
// ------------------------------

function modelLoaded() {

    console.log("Model Loaded!");

}


// ------------------------------
// Identify Captured Image
// ------------------------------

function check() {

    var img = document.getElementById("captured_image");

    // Make sure an image has been captured first
    if (!img) {

        console.log("Please capture an image first.");

        return;
    }

    classifier.classify(img, gotResult);

}


// ------------------------------
// Display Results
// ------------------------------

function gotResult(error, results) {

    if (error) {

        console.error(error);

        return;
    }

    console.log(results);

    document.getElementById("result_object_name").innerHTML =
        results[0].label;

    document.getElementById("result_object_accuracy").innerHTML =
        (results[0].confidence * 100).toFixed(2) + "%";

}
