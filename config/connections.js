module.exports.connections = {
  /***************************************************************************
   *                                                                          *
   * Local disk storage for DEVELOPMENT ONLY                                  *
   *                                                                          *
   * Installed by default.                                                    *
   *                                                                          *
   ***************************************************************************/
  // localDiskDb: {
  //   adapter: 'sails-disk'
  // },
  twiceMysqlServer: {
    adapter: 'sails-mysql',
    host: '172.16.122.12',
    port: 3306,
    user: 'twicepixels01',
    password: '!twiceAdm001',
    database: 'twicepixels'
  },
  mongo: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    database: 'twicepixelsImg'
  }
};
