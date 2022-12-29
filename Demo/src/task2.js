function envelopeAnalysis(sidesA, sidesB) {
    if (!sidesA || !sidesB) {
        return {
            status: 'failed',
            reason: 'You need to send two envelopes with his sides',
        };
    }

    const areaEnvelopeA = sidesA.a * sidesA.b;
    const areaEnvelopeB = sidesB.a * sidesB.b;

    if (sidesA.a <= 0 || sidesA.b <= 0 || sidesB.a <= 0 || sidesB.b <= 0) {
        return {
            state: 'failed',
            reason: 'The envelope sides should be greater than 0',
        };
    }

    if (sidesA.a === sidesB.a && sidesA.b === sidesB.b) {
        return 0;
    }

    if (sidesA.a > sidesB.a && sidesA.b > sidesB.b) {
        return sidesA;
    } else if (sidesA.a < sidesB.a && sidesA.b < sidesB.b) {
        return sidesB;
    }

    return 0;
}

export default envelopeAnalysis;

// const envelopeA = {
//     a: 5,
//     b: 5,
// };

// const envelopeB = {
//     a: 5,
//     b: 6,
// };

// console.log(envelopeAnalysis(envelopeA, envelopeB))

// const envelopeA2 = {
//     a: 5,
//     b: 5,
// };

// const envelopeB2 = {
//     a: 4,
//     b: 4,
// };

// console.log(envelopeAnalysis(envelopeA2, envelopeB2));

const envelopeA3 = {
    a: 10,
    b: 6,
};

const envelopeB3 = {
    a: 5,
    b: 5,
};

console.log(envelopeAnalysis(envelopeA3, envelopeB3));
