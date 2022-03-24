import express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res
    .status(200)
    .json({ name: 'FitFor API', version: 'v1.0.0', openapi: '/openapi.yaml', docs: '/api-docs' })
})

export default router
