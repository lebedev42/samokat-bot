module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: "gz92791",
        secretAccessKey: "dbb3ce8ee86bd20985f5d2fc9ca3bda6",
        endpoint: "https://s3.timeweb.com", // e.g. "s3.fr-par.scw.cloud"
        region: "ru-1",
        params: {
          ACL: "public-read",
          Bucket: "1c0bdec3-800f68a6-871b-482a-becc-2ed21b03fd6b",
        },
        // baseUrl: "https://s3.timeweb.com",
        // rootPath: "https://s3.timeweb.com",
        // s3Options: {
        //   accessKeyId: "gz92791",
        //   secretAccessKey: "dbb3ce8ee86bd20985f5d2fc9ca3bda6",
        //   endpoint: "https://s3.timeweb.com",
        //   region: "ru-1",
        //   params: {
        //     ACL: "public-read",
        //     Bucket: "s3.timeweb.com",
        //   },
        // },
      },
    },
  },
});
