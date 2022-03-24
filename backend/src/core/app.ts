import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import path from 'path'
import indexRouter from './app.routes'
import cors from 'cors'
import { makeResponse } from './utils'

const app = express()
app.use(logger('dev'))
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  cors({
    origin: [String(process.env.CLIENT_URL)],
  })
)

app.use('/', indexRouter)

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err.error !== null && err.error !== undefined) {
    console.error('An error occurred while serving a request!')
    console.error('-----------------------------------------')
    console.error(err.error)
    console.error('-----------------------------------------')
  }
  return makeResponse(res, err.status === undefined ? 500 : err.status, err.message)
})

export default app
