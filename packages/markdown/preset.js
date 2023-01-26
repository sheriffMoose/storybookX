const { getIndexer } = require('./indexer');
const { loader, loaderOptions } = require('./loader');

export function storyIndexers(indexers, options) {
    return [
        {
            test: /\.(md|html)$/,
            indexer: getIndexer(options),
        },
        ...(indexers || []),
    ];
}

export async function webpack(config, { mdInclude, mdExclude, presetsList }) {
    const module = config.module || {};
    let rules = module.rules || [];
    rules = [
        ...rules.filter(rule => rule.test?.toString() !== '/\\.md$/'),
        {
            test: /\.(md|html)$/,
            use: [
                {
                    loader,
                    options: loaderOptions,
                },
            ],
            include: mdInclude || process.cwd(),
            exclude: [/node_modules/].concat(mdExclude || []),
        },
    ];

    return { ...config, module: { ...module, rules } };
}
