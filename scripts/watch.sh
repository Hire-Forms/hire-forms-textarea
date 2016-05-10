#!/bin/sh

node_modules/.bin/watchify src/index.jsx \
	--detect-globals false \
	--extension=.jsx \
	--external classnames \
	--external react \
	--external react-dom \
	--outfile build/index.js \
	--standalone HireFormsTextarea \
	--transform [ babelify ] \
	--verbose
