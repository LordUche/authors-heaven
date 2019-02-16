import express from 'express';
import bodyParser from 'body-parser';
import User from './models/user';
import Article from './models/article';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/users/new', async (req, res) => {
  const { body } = req;
  try {
    const user = await User.create(body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
});
app.post('/users/:userId/articles/new', async (req, res) => {
  const { body, params } = req;
  try {
    const user = await User.findByPk(params.id);
    const article = await Article.create({ ...body, userId: user.id });
    res.status(201).json({ article, user });
  } catch (error) {
    res.status(500).json(error.message);
  }
});
app.listen(5000, () => {
  console.log('App started on port 5000');
});

export default app;
