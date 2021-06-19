exports.getControlPanel = (req, res, next) => {
    res.render('admin/control-panel',
        { title: 'Панель Администратора' });
  };