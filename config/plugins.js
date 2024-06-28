// module.exports = () => ({});
//backend rama feature
module.exports = {
  "strapi-neon-tech-db-branches": {
    enabled: true,
    config: {
      neonApiKey:
        "5ye7s17j5oh6pz3p40zzswjl2cuqaulbm4cgg405i05qmr8h9kinw94wpjvrissq", // get it from here: https://console.neon.tech/app/settings/api-keys
      neonProjectName: "webCoffee", // the neon project under wich your DB runs
      neonRole: "neondb_owner", // create it manually under roles for your project first
      gitBranch: "main" // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
    },
  },
};
