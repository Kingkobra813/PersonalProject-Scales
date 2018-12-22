module.exports = {
  saveScale: (req, res) => {
    const dbInstance = req.app.get("db");
    const { key, scale } = req.body;
    const { authid } = req.user;

    dbInstance
      .save_scale([key, scale, authid])
      .then(savedScales => {
        res.status(200).send(savedScales);
      })
      .catch(err => {
        console.log("error in", err);
        res.status(500).send(err);
      });
  },

  getSaved: (req, res) => {
    const dbInstance = req.app.get("db");
    const { authid } = req.user;

    dbInstance
      .get_saved([authid])
      .then(scales => {
        res.status(200).send(scales);
      })
      .catch(err => res.status(500).send(err));
  },

  deleteSaved: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance.delete_saved([id]).then(scales => {
      res.status(200).send(scales);
    });
  },

  createUser: (req, res) => {
    const dbInstance = req.app.get("db");
    const { userName, authid } = req.params;

    dbInstance.create_user([userName, authid]).then(user => {
      res.status(200).send(user);
    });
  },

  getUser: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance.get_user().then(user => {
      res.status(200).send(user);
    });
  },
  sendUser: (req, res) => {
    console.log("/main: user", req.session);
    // res.status(200).send(req.user)
    // redirect to 3000/main
    // res.redirect('http://localhost:3000/main')
  }
};
