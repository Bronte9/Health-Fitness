function calculate() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
    const age = parseInt(document.getElementById("age").value);
    const goal = document.getElementById("goal").value;
    const language = document.getElementById("language-selector").value;

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Please enter valid values.");
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    const waterIntake = (weight * 0.033).toFixed(2); // Estimate daily water intake

    let recommendations = "";

    if (goal === "lose_weight") {
        recommendations = language === "ar" ? "احرص على تناول خضروات وفواكه، وممارسة التمارين مثل الجري أو المشي." :
            language === "fr" ? "Assurez-vous de manger des légumes et des fruits, et de faire des exercices comme la course ou la marche." :
            "Make sure to eat vegetables and fruits, and do exercises like running or walking.";
    } else if (goal === "strengthen_muscles") {
        recommendations = language === "ar" ? "ركز على تناول البروتينات وممارسة تمارين مثل رفع الأثقال." :
            language === "fr" ? "Concentrez-vous sur la consommation de protéines et la pratique d'exercices tels que la musculation." :
            "Focus on consuming proteins and doing exercises like weight lifting.";
    } else {
        recommendations = language === "ar" ? "اجمع بين التغذية الصحية والتمارين المتنوعة." :
            language === "fr" ? "Combinez une alimentation saine et des exercices variés." :
            "Combine a healthy diet with varied exercises.";
    }

    const result = `
        <p>BMI: ${bmi.toFixed(2)}</p>
        <p>Daily Water Intake: ${waterIntake} liters</p>
        <p>Recommendations: ${recommendations}</p>
    `;

    document.getElementById("result").innerHTML = result;
}
