#!/bin/bash

# apollo-codegen introspect-schema https://crowd-buying.herokuapp.com/v1/graphql --output schema.json --header "x-hasura-admin-secret: Carlton1"
#  --outputFlat src/generated
apollo codegen:generate types \
    --target typescript \
    --globalTypesFile=src/types/globalTypes.d.ts \
    --outputFlat \
    # --passthroughCustomScalars \
    # --customScalarsPrefix Hasura \
    # --excludes=node_modules/* \
    # --tagName=gql \
    # --endpoint https://crowd-buying.herokuapp.com/v1/graphql \
    # --includes=src/**/*.tsx \
    # --header "x-hasura-admin-secret: Carlton1" \
    # --globalTypesFile=src/
