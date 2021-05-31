const tf = require("@tensorflow/tfjs")

const DiabetesTrainer = (model, data, {
  epochs = 1,
} = {}) => {
  const datasetX = data.map(({ xs }) => xs)
  const datasetY = data.map(({ ys }) => ys)

  const $dataset = tf.data.zip({
    xs: tf.data.array(datasetX),
    ys: tf.data.array(datasetY),
  })
    .shuffle(data.length, 42);

  const trainDs = $dataset.take(692).batch(16)
  const validDs = $dataset.skip(693).batch(16)

  return model.fitDataset(trainDs, {
    epochs,
    validationData: validDs,
  })
}

module.exports = DiabetesTrainer
