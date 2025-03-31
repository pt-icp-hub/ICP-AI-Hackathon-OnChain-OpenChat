#!/bin/sh

dfxvm install 0.25.1-beta.1
dfxvm use 0.25.1-beta.1
dfx identity new codespace_dev  --storage-mode=plaintext     
dfx identity use codespace_dev      
dfx start --background             
dfx stop                            