@echo off
setlocal

:: Adiciona todos os arquivos
git add .

:: Pede a mensagem de commit
set /p msg="Digite a mensagem do commit: "

:: Faz o commit
git commit -m "%msg%"

:: Faz o push
git push

endlocal
pause