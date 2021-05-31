const tf = require("@tensorflow/tfjs")
const DiabetesModel = require('../DiabetesModel')

const DiabetesPredict = (data) => {
  const predict = DiabetesModel.predict(tf.tensor([[
    data.pregnancies,
    data.glucose,
    data.bloodPressure,
    data.skinThickness,
    data.insulin,
    data.BMI,
    data.diabetesPedigreeFunction,
    data.age,
  ]]));

  console.log('adasdasd', predict.shape)
  const prediction = predict.argMax(-1).dataSync()[0]
  const percentage = predict.dataSync()

  return {
    positivePrediction: Boolean(prediction),
    positivePercentage: percentage[1].toFixed(2) * 100,
  }
}

module.exports = DiabetesPredict
