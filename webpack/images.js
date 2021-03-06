module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(jpe?g|png|gif|svg|)$/i,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }
            ]
        }
    };
};