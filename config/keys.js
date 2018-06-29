module.exports = {
  mongoURI: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds119161.mlab.com:19161/devconnector`,
  secretOrKey: process.env.SECRET
};