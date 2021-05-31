const DiabetesPredict = require("../AI/DiabetesPredict")

const createPrediction = (req, res) => {
  const body = req.body

  const pregnancies = parseInt(body.pregnancies || 0, 10)
  const glucose = parseInt(body.glucose || 0, 10)
  const bloodPressure = parseInt(body.bloodPressure || 0, 10)
  const skinThickness = parseInt(body.skinThickness || 0, 10)
  const insulin = parseInt(body.insulin || 0, 10)
  const BMI = parseFloat(body.BMI || 0)
  const diabetesPedigreeFunction = parseFloat(body.diabetesPedigreeFunction || 0)
  const age = parseInt(body.age || 0, 10)

  const predict = DiabetesPredict({
    pregnancies,
    glucose,
    bloodPressure,
    skinThickness,
    insulin,
    BMI,
    diabetesPedigreeFunction,
    age,
  })

  res.status(200).send(predict);
}

module.exports = {
  createPrediction,
};
