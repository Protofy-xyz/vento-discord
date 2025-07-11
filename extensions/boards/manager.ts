
import { fork } from 'child_process';
import * as path from 'path';
import { watch } from 'chokidar';
import { on } from 'events';


const processes = new Map();

export const Manager = {
    start: async (file, getContext, onExit, skipWatch?) => {
        const context = getContext ? await getContext() : {};
        if (processes.has(file)) {
            if (processes.get(file).killed) {
                processes.delete(file);
            } else {
                console.warn(`Manager: Process for "${file}" already running.`);
                return false;
            }
        }

        const absPath = path.resolve(file);
        const child = fork(absPath, [], {
            windowsHide: true
        });

        // Guardamos el proceso
        processes.set(file, child);

        // Enviar estado inicial
        child.send({ type: 'init', context});

        // Escuchar mensajes del hijo (opcional)
        child.on('message', (msg) => {
            console.log(`[Manager] Message from ${file}:`, msg);
        });

        // Limpieza si el hijo se cierra
        child.on('exit', (code) => {
            console.log(`[Manager] board file ${file} exited with code ${code}`);
            processes.delete(file);
            onExit && onExit(file, code);
        });

        if(skipWatch) {
            return true;
        }
        //set watcher for file changes
        let timer = null;
        watch(file, { persistent: true, ignoreInitial: true })
            .on('change', (changedFile) => {
                console.log(`[Manager] File changed: ${changedFile}`);
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    console.log(`[Manager] Stopping board file ${file} due to change`);
                    Manager.stop(file);
                    setTimeout(() => {
                        console.log(`[Manager] Restarting board file ${file}`);
                        // Restart the process
                        Manager.start(file, getContext, onExit, true);
                    }, 500);
                }, 1000);

            })
            .on('error', (error) => {
                console.error(`[Manager] Error watching file ${file}:`, error);
            });

        return true
    },

    stop: (file) => {
        const child = processes.get(file);
        if (child) {
            processes.delete(file);
            child.kill();
            //remove watcher
            watch(file).close();
            return true
        } else {
            return false
        }
    },

    update: (file, chunk, key?, value?) => {
        const child = processes.get(file);
        if (child) {
            child.send({ type: 'update', chunk, key, value });
        }
    }
};