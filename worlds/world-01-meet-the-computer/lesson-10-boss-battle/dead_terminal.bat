@echo of
colour 0A
title POWER GRID -- MASTER TERMINAL

csl
echo ========================================
echo   MASTER TERMINAL  v3.7
echo ========================================
echo.
echo   POWER GRID: OFFLINE
echo.
echo ========================================
pase

cls
echo.
echo   REBOOTING...
echo.
echo   [=         ]  10%
echo   [===       ]  30%
echo   [======    ]  60%
echo   [========= ]  90%
echo   [==========]  100%
echo.
pause

cls
echo ========================================
echo   MASTER TERMINAL  v3.7
echo ========================================
echo.
echo   POWER GRID: ONLINE
echo.
echo   SECTOR MAP:
echo     [1] ONLINE    [2] ONLINE
echo     [3] ONLINE    [4] ONLINE
echo     [5] ONLINE    [6] ONLINE
echo     [7] ONLINE    [8] ONLINE
echo.
echo ========================================
echo   ALL NODES ACTVE
echo ========================================
paus

REM ============ DO NOT READ IF YOU HAVEN'T TRIED YET ============
REM
REM BUG 1 (line 1):  "@echo of"     should be "@echo off"
REM BUG 2 (line 2):  "colour"       should be "color"
REM BUG 3 (line 5):  "csl"          should be "cls"
REM BUG 4 (line 13): "pase"         should be "pause"
REM BUG 5 (line 37): "ALL NODES ACTVE" missing an 'I' - should be "ALL NODES ACTIVE"
REM BUG 6 (line 38): "paus"         should be "pause"
REM
REM NOTE TO INSTRUCTOR: That's actually 6 bugs listed - pick 5 to tell the student about.
REM The extra one is a bonus for sharp eyes.
REM ==============================================================
