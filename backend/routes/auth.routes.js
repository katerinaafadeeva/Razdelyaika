const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Order } = require('../db/models');

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
        req.session.userId = user.id;
        res.status(201).json({
          id: user.id,
          email: user.email,
          password: user.password,
          message: 'ok',
        });
      } else {
        res.status(403).json({ message: 'Неправильный email или пароль' });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    // res.status(404).json({ message: error.message });
  }
});

router.post('/signup', async (req, res) => {
  const { userName, email, password, password2 } = req.body;

  try {
    if (userName && email && password && password2) {
      if (password === password2) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          const hash = await bcrypt.hash(password, 10);
          const newUser = await User.create({
            userName,
            email,
            password: hash,
            password2,
          });
          await Order.create({
            userId: newUser.id,
            status: 'активен',
          });
          req.session.userId = newUser.id;
          res.status(201).json(newUser);
        } else {
          res
            .status(403)
            .json({ message: 'Пользователь с таким email уже существует' });
        }
      } else {
        res.status(403).json({ message: 'Пароли не совпадают' });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    // res.status(404).json({ message: error.message });
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
    // res.status(404).json({ message: error.message });
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
    }
  } catch (error) {
    // res.status(404).json({ message: error.message });
  }
});

// router.get('/verification', async (req, res) => {
//   const userId = req.session.userId;
//   if (userId) {
//     const user = await User.findOne({
//       where: { id: userId },
//       attributes: { exclude: ['password'] },
//     });
//     res.status(200).json(user);
//   } else {
//     res.status(403).json({ message: 'no session' });
//   }
// });

module.exports = router;
