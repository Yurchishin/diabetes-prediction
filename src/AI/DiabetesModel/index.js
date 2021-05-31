const tf = require("@tensorflow/tfjs")

const model = tf.sequential();

model.add(
  tf.layers.dense({
    units: 12,
    activation: "relu",
    inputShape: [8],
  })
);
model.add(
  tf.layers.dense({
    units: 8,
    activation: "relu"
  })
);
model.add(
  tf.layers.dense({
    units: 2,
    activation: "softmax"
  })
);

model.summary()

model.compile({
  optimizer: tf.train.adam(),
  loss: "binaryCrossentropy",
  metrics: ["categoricalAccuracy"],
});

module.exports = model
