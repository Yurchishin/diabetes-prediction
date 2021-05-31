module.exports = {
  hasHeader: true,
  configuredColumnsOnly: true,
  delimWhitespace: false,
  delimiter: ',',
  columnConfigs: {
    Pregnancies: {
      isLabel: true,
      required: true,
      dtype: 'int32',
      default: 0,
    },
    Glucose: {
      isLabel: true,
      required: true,
      dtype: 'int32',
      default: 0,
    },
    BloodPressure: {
      isLabel: true,
      required: true,
      dtype: 'int32',
      default: 0,
    },
    SkinThickness: {
      isLabel: true,
      required: true,
      dtype: 'int32',
      default: 0,
    },
    Insulin: {
      isLabel: true,
      required: true,
      dtype: 'int32',
      default: 0,
    },
    BMI: {
      isLabel: true,
      required: true,
      dtype: 'float32',
      default: 0,
    },
    DiabetesPedigreeFunction: {
      isLabel: true,
      required: true,
      dtype: 'float32',
      default: 0,
    },
    Age: {
      isLabel: true,
      required: true,
      dtype: 'int32',
      default: 0,
    },
    Outcome: {
      isLabel: true,
      required: true,
      dtype: 'int32'
    },
  },
  columnNames: [
    "Pregnancies",
    "Glucose",
    "BloodPressure",
    "SkinThickness",
    "Insulin",
    "BMI",
    "DiabetesPedigreeFunction",
    "Age",
    "Outcome",
  ],
}
