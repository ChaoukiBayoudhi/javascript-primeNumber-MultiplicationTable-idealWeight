function idealWeight() {

    //let size = document.getElementById("size").value;
    let size = Number(document.infos.size.value);
    let age = Number(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    console.log(typeof(size) + " " + typeof age + " " + typeof gender);
    let ideal_weight = 100;
    switch (gender) {
        case "Male":
            ideal_weight = (((3 * size) - 250) * (age + 270)) / 1200;
            break;
        case "Female":
            ideal_weight = ((size / 2 - 30) * (180 + 1)) / 200;
            break;
    }
    document.getElementById("ideal").innerHTML = "Your idéal Weight is <strong> " + Math.round(ideal_weight) + "</strong>";
}