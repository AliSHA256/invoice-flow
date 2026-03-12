#!/bin/sh
set -e

echo "Running Prisma migrations..."
npx prisma db push

echo "Starting Next.js standalone server..."
node .next/standalone/server.js
