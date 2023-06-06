module.exports = {
  // Only works for Admin-API (JWT auth)
  admin: {
    routes: [
      {
        method: "GET",
        path: "/",
        handler: "myController.index",
        config: {
          policies: [],
        },
      },
    ],
  },
  // Only works for Users-Permissions + API Token
  "content-api": {
    routes: [
      {
        method: "GET",
        path: "/testContentAPI",
        handler: "myController.index",
        config: {
          policies: [],
        },
      },
    ],
  },
};
