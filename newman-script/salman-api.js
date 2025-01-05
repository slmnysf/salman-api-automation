const newman = require("newman")

newman.run({
    collection: "json-collection/salman.postman_collection.json",
    reporters: ["cli", "htmlextra"]
})
