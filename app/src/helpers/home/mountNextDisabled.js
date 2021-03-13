const mountNextDisabled = (activeStep, watch) => {
  if (activeStep === 1) {
    return watch()['pizzaDoughId'] === ''
  }
  if (activeStep === 2) {
    return watch()['pizzaSizeId'] === ''
  }
  if (activeStep === 3) {
    return watch()['pizzaFillingId'] === ''
  }
}

export default mountNextDisabled
