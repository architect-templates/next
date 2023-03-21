#!/bin/sh -e

npx prisma migrate deploy
node server.js
