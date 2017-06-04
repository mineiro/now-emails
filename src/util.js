const { createTransport } = require('nodemailer')
const mailgunTransport = require('nodemailer-mailgun-transport')
const { AUTH_KEY, AUTH_DOMAIN } = process.env

const transport = createTransport(mailgunTransport({
  auth: {
    api_key: AUTH_KEY,
    domain: AUTH_DOMAIN
  }
}))

module.exports.sendMail = sendMail

function sendMail(options) {
  return new Promise(resolve => (
    transport.sendMail(options, (err, info) => {
      if (err) {
        throw err
      }

      resolve(info)
    })
  )
)}
