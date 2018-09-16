module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename : "bundle.js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions : [".ts", ".tsx"]
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript"
            }
        ]
    },
    externals:{
        "react": "React",
        "react-dom": "ReactDOM"
    }
}