// gatsby-config.js
const path = require('path');

module.exports = {
	plugins: [ 
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    'src': path.resolve(__dirname, 'src'),
                    'bootstrap': path.resolve(__dirname, 'node_modules/bootstrap-scss'),
                },
                extensions: [ 
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                implementation: require("sass"),
                postCssPlugins: [require('postcss-import')], 
                includePaths: ["node_modules", "src"],
                camelCase: false,
            },
        }
	]
};
