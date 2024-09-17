module.exports = {
  apps: [
    {
      name: "server",
      script: "npm",
      args: "start",
      env: {
        HOST: "172.26.15.189",
        PORT: 8000,
        NODE_ENV: "production",
      },
    },
  ],
};
