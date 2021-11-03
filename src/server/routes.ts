import * as express from 'express';

import DB from './db';

const router = express.Router();

router.get('/api/hello', (req, res, _next) => {
    res.json('Project');
});

router.get('/api/articles', async (req, res) => {
    try {
        let articles = await DB.Articles.all();
        res.json(articles);
    } catch(e) {
        //console.log(e);
        res.sendStatus(500);
    }
})

export default router;