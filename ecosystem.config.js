module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'Shinezone-WEB-OfficialSite-Client-dev',
      script: 'server/server.js',
      watch: true,
      env: {
        "NODE_ENV": "development"
      },
      env_production: {
        NODE_ENV: 'production'
      },
      watch: [
        "server"
      ]
    }
  ]
};
