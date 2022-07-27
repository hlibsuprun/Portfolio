function timeDelay(ms = 5000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = timeDelay;
