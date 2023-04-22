const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email || password) {
      const user = await User.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
        const newUser = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        req.session.userId = newUser.id;
        res.status(201).json({ user: newUser, message: 'ok' });
      } else {
        res.status(403).json({ message: 'Ваш email пароль не соответствуют' });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post('/signup', async (req, res) => {
  const { userName, email, password } = req.body;
  // console.log(email);
  try {
    if (userName || email || password) {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        let newUser = await User.create({ userName, email, password: hash });
        newUser = {
          id: newUser.id,
          userName: newUser.userName,
          email: newUser.email,
        };
        req.session.userId = newUser.id;
        res.status(201).json(newUser);
      } else {
        res.status(403).json({ message: 'Такой email уже существует' });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get('/logout', async (req, res) => {
  try {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).json({ message: 'Ошибка при удалении сессии' });
      }
      res.clearCookie('user_sid').json({ message: 'Успешный выход' });
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get('/checkUser', async (req, res) => {
  try {
    const userSession = req.session.userId;
    if (userSession) {
      const user = await User.findOne({
        where: { id: userSession },
        attributes: { exclude: ['password'] },
      });
      res.status(201).json(user);
    } else {
      res.end();
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
