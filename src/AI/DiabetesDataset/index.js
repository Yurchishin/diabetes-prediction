const tf = require("@tensorflow/tfjs")
const CsvReaderConfig = require("./config")

const DiabetesDataset = () => tf.data.csv(process.env.CSV_URL, CsvReaderConfig)

module.exports = DiabetesDataset
