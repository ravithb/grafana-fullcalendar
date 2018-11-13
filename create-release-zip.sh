#!/bin/bash

REV=`git rev-parse --short HEAD`
mv ravithb-tui-calendar-panel kaushyr-tui-calendar-panel-$REV
zip -r ravithb-tui-calendar-panel-$REV ravithb-tui-calendar-panel-$REV
