import request from 'superagent'

import config from '@/config'

const apiEndPoint = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : `${config.api.host}:${config.api.port}`

export default {
  getProblems: async () => {
    return new Promise((resolve, reject) =>
      request(
        "GET",
        `${apiEndPoint}/fe-problems.json`
      )
        .end((err, res) => {
          if (err) reject(err)
          else resolve(res.body.data)
        })
    )
  },

  getSimilarProblems: async () => {
    return new Promise((resolve, reject) =>
      request(
        "GET",
        `${apiEndPoint}/fe-similars.json`
      )
        .end((err, res) => {
          if (err) reject(err)
          else resolve(res.body.data)
        })
    )
  }

}
