#!/bin/bash

PACKAGE="@stacksflowr/my-sdk"
INTERVAL=60  # 1 minute in seconds

echo "📦 Auto-install started for: $PACKAGE"
echo "⏱  Installing every 1 minute. Press Ctrl+C to stop."
echo "----------------------------------------"

while true; do
  TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
  echo "🔄 [$TIMESTAMP] Installing $PACKAGE..."

  npm install $PACKAGE

  if [ $? -eq 0 ]; then
    echo "✅ [$TIMESTAMP] Installed successfully"
  else
    echo "❌ [$TIMESTAMP] Install failed"
  fi

  echo "⏳ Waiting 1 minute..."
  echo "----------------------------------------"
  sleep $INTERVAL
done
