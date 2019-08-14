module.exports = {
  client: {
    target: "typescript",
    includes: ["src/**/*.tsx"],
    excludes: ["./node_modules/*"],
    tagName: "gql",
    passthroughCustomScalars: true,
    customScalarsPrefix: "Hasura",
    addTypename: true,
    service: {
      name: "hasura",
      url: "https://crowd-buying.herokuapp.com/v1/graphql",
      // optional headers
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": "Carlton1"
      }
      // optional disable SSL validation check
      // skipSSLValidation: true
    }
  }
}
