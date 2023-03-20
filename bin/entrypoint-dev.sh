#!/bin/sh -e

npx prisma generate
npx prisma db push
npm run dev
