export const info = (str: string): void => {
	console.log('Info', str)
}

const winston = require('winston')
const consoleTransport = new winston.transports.Console()
const myWinstonOptions = {
	transports: [consoleTransport],
}
const logger = new winston.createLogger(myWinstonOptions)

export const logRequest = (req, res, next) => {
	logger.info(req.url)
	next()
}

export const logError = (err, req, res, next) => {
	logger.error(err)
	next()
}
