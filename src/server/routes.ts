import * as express from 'express';

import DB from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('Project');
});

router.get('/api/blogs', async (req, res, next) => {
    try {
        let blogs = await DB.Blogs.all();
        res.json(blogs);
    } catch(e) {
        //console.log(e);
        res.sendStatus(500);
    }
})

export default router;