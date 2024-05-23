#!/bin/bash

extensions=(
    "*.ts"
    "*.js"
    "*.json"
    "*.md"
    "*.yaml"
    "*.yml"
    "*.html"
    "*.css"
)

prettier --write --log-level=warn $(
    git ls-files -oc --exclude node_modules "${extensions[@]}"
)
