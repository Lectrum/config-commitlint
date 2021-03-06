/** Commit message shape:
 **
 ** type(scope): subject
 **
 ** body
 **
 ** footer
 ***/
export default {
    rules: {
        'body-leading-blank': [2, 'always'],
        'body-max-length': [2, 'always', Infinity],
        'body-min-length': [2, 'always', 0],

        'footer-leading-blank': [2, 'always'],
        'footer-max-length': [2, 'always', Infinity],
        'footer-min-length': [2, 'always', 0],

        'header-max-length': [2, 'always', 72],
        'header-min-length': [0, 'always', 3],

        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'refactor', 'perf', 'revert', 'test', 'chore'],
        ],
        'type-case': [2, 'always', 'kebab-case'],
        'type-max-length': [2, 'always', Infinity],
        'type-min-length': [2, 'always', 0],

        'scope-empty': [2, 'never'],
        'scope-enum': [
            2,
            'always',
            [
                'source',
                'docs',
                'dependencies',
                'build',
                'ci',
                'code-quality',
                'arch',
            ],
        ],
        'scope-case': [2, 'always', 'kebab-case'],
        'scope-max-length': [2, 'always', Infinity],
        'scope-min-length': [2, 'always', 0],

        'subject-empty': [2, 'never'],
        'subject-case': [2, 'always', 'lower-case'],
        'subject-max-length': [2, 'always', Infinity],
        'subject-min-length': [2, 'always', 0],
    },
};
