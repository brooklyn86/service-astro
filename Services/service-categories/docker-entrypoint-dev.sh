#!/bin/sh
rm -rf node_modules 
npm install
bower install --allow-root
npm run dev

