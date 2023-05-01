const request = require('supertest')
const app = require('./api/api')

const requestFindLongestComSub = async (str1, str2, method="GET") => {
    switch (method) {
        case "GET":
            return await request(app).get(`/main?str1=${str1}&str2=${str2}`);
        case "POST":
            return await request(app).post(`/main?str1=${str1}&str2=${str2}`);
        default:
            return await request(app).get(`/main?str1=${str1}&str2=${str2}`);
    }

}

module.exports = requestFindLongestComSub;