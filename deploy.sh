#! /bin/bash

set -e

git add .

read -p "Enter commit message: " commit_message

git commit -m "$commit_message"

git push origin main