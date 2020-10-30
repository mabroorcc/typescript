# typescript

# Steps

1 => create npm project using [ yarn init ] or [ npm init ]
2 => create tsconfig.json using [ tsc --init ]
3 => setup [ outDir ]
?4 => setup [ rootDir ]
5 => enable [ moduleResolution ]
6 => add dev dependencies [ yard add -D typescript ts-node nodemon]
7 => add Scripts [
    "start": "node dist/app.js",
    "dev": "nodemon src/app.ts",
    "build": "tsc -p ."
]
8 => create [ src ] folder
9 => [ npm dev, yarn dev]
10 => [ yarn build ] to build projects
