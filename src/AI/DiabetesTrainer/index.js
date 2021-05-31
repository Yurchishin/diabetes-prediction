const tf = require("@tensorflow/tfjs")

const averageSelector = (arr, selector) => arr.reduce((p, c) => p + selector(c), 0) / arr.length;

const x = tf.tensor2d([[1, 1, 1, 1], [0, 0, 0, 0]], [2, 4]);
const y = tf.tensor2d([[1, 0, 1, 0], [0, 0, 0, 1]], [2, 4]);
const accuracy = tf.metrics.binaryAccuracy(x, y);
accuracy.print();


const DiabetesTrainer = async (model, dataset, {
  epochs = 1,
} = {}) => {
  const data = await dataset.map(({ ys }) => ({
      xs: [
        ys.Pregnancies,
        ys.Glucose,
        ys.BloodPressure,
        ys.SkinThickness,
        ys.Insulin,
        ys.BMI,
        ys.DiabetesPedigreeFunction,
        ys.Age,
      ],
      ys: Array.from(tf.oneHot(ys.Outcome, 2).dataSync()),
    }))
    .toArray()


  const datasetX = data.map(({ xs }) => xs)
  const datasetY = data.map(({ ys }) => ys)

  const $dataset = tf.data.zip({
    xs: tf.data.array(datasetX),
    ys: tf.data.array(datasetY),
  })

  const trainDs = $dataset.take(750).batch(16)
  const validDs = $dataset.skip(750).batch(16)

  const logs = []

  await model.fitDataset(trainDs, {
    epochs,
    validationData: validDs,
    callbacks: {
      onEpochEnd(_, log) {
        logs.push(log)
      }
    },
  })

  return data.slice(750)
}

module.exports = DiabetesTrainer
