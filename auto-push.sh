#!/bin/bash

REPO_DIR="$(pwd)"
INTERVAL=300  # 5 minutes in seconds

echo "🚀 Auto-push started for: $REPO_DIR"
echo "⏱  Pushing every 5 minutes. Press Ctrl+C to stop."
echo "----------------------------------------"

while true; do
  cd "$REPO_DIR"

  # Check if there are any changes
  if [[ -n $(git status --porcelain) ]]; then
    TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
    git add .
    git commit -m "auto-update: $TIMESTAMP"
    git push origin main
    echo "✅ [$TIMESTAMP] Pushed successfully"
  else
    echo "⏭  $(date "+%H:%M:%S") - No changes to push"
  fi

  sleep $INTERVAL
done
