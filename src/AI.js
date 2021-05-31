require('@tensorflow/tfjs-node')
const DiabetesDataset = require("./AI/DiabetesDataset")
const DiabetesModel = require("./AI/DiabetesModel")
const DiabetesTrainer = require("./AI/DiabetesTrainer")
// const DiabetesTester = require("./AI/DiabetesTester")

const AI = async () => {
  const dataset = await DiabetesDataset()

  await DiabetesTrainer(DiabetesModel, dataset, {
    epochs: parseInt(process.env.TRAINT_EPOCHS)
  })

  // await DiabetesTester(DiabetesModel, testDataset)
};

module.exports = AI
