const {createLogger, format,  transports} = require('winston');

module.exports = createLogger({
    format: format.combine(
        format.simple(),
        format.timestamp(),
        format.printf( info => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
    transports: [
        new transports.Console(),
        new transports.File({
            maxsize: 5120000,
            maxFiles: 5,
            level: 'info',
            filename: `${process.cwd()}/src/logs/logs.log`
        }),
        new transports.File({
            level: 'error',
            filename: `${process.cwd()}/src/logs/error.log`
        })
    ]
});