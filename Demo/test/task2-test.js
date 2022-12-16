import { deepEqual } from 'assert';
import envelopeAnalysis from '../src/task2.js';

describe('Envelope Analysis', function () {
    it('envelopes with sides (5, 5) and (4, 4) should return (5, 5)', function () {
        const envelopeA = {
            a: 5,
            b: 5,
        };

        const envelopeB = {
            a: 4,
            b: 4,
        };

        const result = envelopeAnalysis(envelopeA, envelopeB);
        deepEqual(result, envelopeA);
    });

    it('envelopes with sides (10, 20) and (2, 1) should return (10, 20)', function () {
        const envelopeA = {
            a: 10,
            b: 20,
        };

        const envelopeB = {
            a: 2,
            b: 1,
        };

        const result = envelopeAnalysis(envelopeA, envelopeB);
        deepEqual(result, envelopeA);
    });

    it('envelopes with equal sides', function () {
        const envelopeA = {
            a: 5,
            b: 5,
        };

        const envelopeB = {
            a: 5,
            b: 5,
        };

        const result = envelopeAnalysis(envelopeA, envelopeB);
        deepEqual(result, 0);
    });

    it("envelopes that can't be enclosed", function () {
        const envelopeA = {
            a: 5,
            b: 5,
        };

        const envelopeB = {
            a: 4,
            b: 6,
        };

        const result = envelopeAnalysis(envelopeA, envelopeB);
        deepEqual(result, 0);
    });

    it('envelopes with sides lower than 1', function () {
        const envelopeA = {
            a: -1,
            b: -5,
        };

        const envelopeB = {
            a: -6,
            b: -6,
        };

        const result = envelopeAnalysis(envelopeA, envelopeB);
        deepEqual(result, {
            state: 'failed',
            reason: 'The envelope sides should be greater than 0',
        });
    });

    it('the user does not send the envelopes', function () {
        const result = envelopeAnalysis();
        deepEqual(result, {
            status: 'failed',
            reason: 'You need to send two envelopes with his sides',
        });
    });
});
