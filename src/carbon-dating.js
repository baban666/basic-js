const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693;
const I = K / HALF_LIFE_PERIOD;

module.exports = function dateSample( sampleActivity ) {
  let sampleActivityRounded = parseFloat(sampleActivity);
  const getDating = (modernActivity) => {
        return (finalActivity) => {
            return (integratedRate) => {
                return Math.ceil((Math.log(modernActivity / finalActivity)) / integratedRate)
            }
        }
    };

  if (Number.isNaN(sampleActivityRounded) || typeof sampleActivity !== 'string') {
    return false
  } else if ((sampleActivityRounded <= 0 || sampleActivityRounded > 15)) {
    return false
  }
      return getDating(MODERN_ACTIVITY)(sampleActivityRounded)(I);

};



