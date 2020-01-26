const path = require('path');
const SRC_DIR = path.join(__dirname, 'client/');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
    "mode": "development",
    "entry": `${SRC_DIR}/index.jsx`,
    "output": {
        "path": DIST_DIR,
        "filename": "bundle.js"
    },
    "devtool": "source-map",
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/react"
                        ]
                    }
                }
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
}