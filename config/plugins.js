module.exports = ({ env }) => ({
  comments: {
    enabled: true,
    config: {
      badWords: false,
      moderatorRoles: ["Authenticated"],
      approvalFlow: ["api::post.post"],
      entryLabel: {
        "*": ["Title", "title", "Name", "name", "Subject", "subject"],
        "api::post.post": ["MyField"],
      },
      blockedAuthorProps: ["name", "email"],
      reportReasons: {
        MY_CUSTOM_REASON: "MY_CUSTOM_REASON",
      },
      gql: {
        // ...
      },
    },
  },
  upload: {
    provider: "bunnystorage",
    providerOptions: {
      storageHost: env("BUNNYSTORAGE_STORAGE_HOST"),
      storageZone: env("BUNNYSTORAGE_STORAGE_ZONE"),
      pullZone: env("BUNNYSTORAGE_PULL_ZONE"),
      storageFolder: env("BUNNYSTORAGE_STORAGE_FOLDER", null),
      storageApiKey: env("BUNNYSTORAGE_STORAGE_API_KEY"),
      videostreamLibraryId: env("BUNNYSTORAGE_VIDEOSTREAM_LIBRARY_ID"),
      videostreamApiKey: env("BUNNYSTORAGE_VIDEOSTREAM_API_KEY"),
      videostreamCollectionId: env(
        "BUNNYSTORAGE_VIDEOSTREAM_COLLECTION_ID",
        null
      ),
    },
  },
  seo: {
    enabled: true,
  },
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  // upload: {
  //   config: {
  //     provider: "cloudinary",
  //     providerOptions: {
  //       cloud_name: env("CLOUDINARY_NAME"),
  //       api_key: env("CLOUDINARY_KEY"),
  //       api_secret: env("CLOUDINARY_SECRET"),
  //     },
  //     actionOptions: {
  //       upload: {},
  //       delete: {},
  //     },
  //   },
  // },
  io: {
    enabled: true,
    config: {
      IOServerOptions: {
        cors: { origin: "http://localhost:5000", methods: ["GET"] },
      },
      contentTypes: {
        message: "*",
        chat: ["create"],
      },
      events: [
        {
          name: "connection",
          handler: ({ strapi }, socket) => {
            strapi.log.info(`[io] new connection with id ${socket.id}`);
          },
        },
      ],
    },
  },
  "entity-relationship-chart": {
    enabled: true,
    config: {
      // By default all contentTypes and components are included.
      // To exlclude strapi's internal models, use:
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::permission",
        "admin::user",
        "admin::role",
        "admin::api-token",
        "plugin::upload.file",
        "plugin::i18n.locale",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.role",
      ],
    },
  },
});
