@echo off
color 0A
title POWER GRID -- MASTER TERMINAL

cls
echo ========================================
echo   MASTER TERMINAL  v3.7
echo ========================================
echo.
echo   POWER GRID: OFFLINE
echo.
echo ========================================
pause

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
echo   ALL NODES ACTIVE
echo ========================================
pause

REM ============ SOLUTION KEY ============
REM BUG 1: "colour" -> "color"         (line 2)
REM BUG 2: "csl"    -> "cls"           (line 5)
REM BUG 3: "pase"   -> "pause"         (line 13)
REM BUG 4: Missing @echo off at top   -- already present, so bugs are the 3 above
REM        plus 2 more added below in the dead_terminal for a real 5-bug version
REM ======================================
