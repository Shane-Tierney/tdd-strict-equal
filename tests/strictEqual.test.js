const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../strictEqual')

describe('strictEqual.js test suite', () => {
    describe('strictEqual tests', () => {
        
        it('is a function', () => {
            expect(typeof strictEqual).to.be.equal('function')
        })
        
        it('returns false if one is a number and one is a string', () => {
            const mockData1 = '5'
            const mockData2 = 5
            const expectedResult = false

            const actualResult = strictEqual(mockData1, mockData2)

            expect(actualResult).to.be.equal(expectedResult)
        })

        it('returns false if one is a number and one is a boolean', () => {
            const mockData1 = 5
            const mockData2 = true
            const expectedResult = false

            const actualResult = strictEqual(mockData1, mockData2)

            expect(actualResult).to.be.equal(expectedResult)
        })

        it('returns false if one is a boolean and one is a string', () => {
            const mockData1 = 'true'
            const mockData2 = true
            const expectedResult = false

            const actualResult = strictEqual(mockData1, mockData2)

            expect(actualResult).to.be.equal(expectedResult)
        })

        it('returns true if values are numbers that are the same', () => {
            const mockData1 = 5
            const mockData2 = 5
            const expectedResult = true

            const actualResult = strictEqual(mockData1, mockData2)

            expect(actualResult).to.be.equal(expectedResult)
        })

        it('returns false if values are numbers that are NOT the same', () => {
            const mockData1 = 5
            const mockData2 = 10
            const expectedResult = false

            const actualResult = strictEqual(mockData1, mockData2)

            expect(actualResult).to.be.equal(expectedResult)
        })

        it('returns true if values are strings that are the same', () => {
            const mockData1 = 'five'
            const mockData2 = 'five'
            const expectedResult = true

            const actualResult = strictEqual(mockData1, mockData2)

            expect(actualResult).to.be.equal(expectedResult)
        })

        it('returns false if values are strings that are NOT the same', () => {
            const mockData1 = 'five'
            const mockData2 = 'fiVe'
            const expectedResult = false

            const actualResult = strictEqual(mockData1, mockData2)

            expect(actualResult).to.be.equal(expectedResult)
        })

        it('returns true if values are booleans and are the same', () => {
            const mockData1 = true
            const mockData2 = true
            const expectedResult = true

            const actualResult = strictEqual(mockData1, mockData2)

            expect(actualResult).to.be.equal(expectedResult)
        })

        it('returns false if values are booleans and are NOT the same', () => {
            const mockData1 = true
            const mockData2 = false
            const expectedResult = false

            const actualResult = strictEqual(mockData1, mockData2)

            expect(actualResult).to.be.equal(expectedResult)
        })
    }) 
})