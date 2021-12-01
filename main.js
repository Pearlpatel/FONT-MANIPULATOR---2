function setup() {
    video=createCapture(VIDEO);
    video.size(400,400);
    video.position(100,190)
    canvas=createCanvas(500,500);
    canvas.position(600,190);
    model_attach=ml5.poseNet(video,model_loaded);
    model_attach.on("pose",got_results);
}

function model_loaded() {
    console.log("model has been loaded");
}

function got_results(error,results) {
    if (error) {
        console.log(error);
    }
    if (results.length>0) {
        console.log(results);
    }
}