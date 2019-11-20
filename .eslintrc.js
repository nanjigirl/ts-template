/**
 * eslint检测规则
 * 参考@eslint-config-ali
 */

module.exports = {
    'parser': 'babel-eslint', // 配置解析器
    root: true,  // 以当前目录为根目录，不再向上查找 .eslintrc.*
    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
            'modules': true
        }
    },
    'extends': [
        'eslint-config-ali/react'
        // 'eslint:recommended',
        // 'plugin:react/recommended'
    ],
    plugins: [
        'react'
    ],
    'settings': {
        'react': {
            'pragma': 'React',
            'version': '16.4.0',
            'flowVersion': '0'
        }
    },
    // 全局忽略的变量
    // 这里填入你的项目需要的全局变量(值为false标识该全局变量不允许重新赋值)
    'globals': {
        'process': true,
        'require': true
    },
    'env': {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        jest: true,
    },
    'rules': {
        // 一个缩进必须用四个空格替代
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
        // jsx 的 children 缩进必须为四个空格
        'react/jsx-indent': [
            'error',
            4
        ],
        // jsx 的 props 缩进必须为四个空格
        'react/jsx-indent-props': [
            'error',
            4
        ],
        // 组件定义中不能缺少propsType的校验  忽略children的校验
        'react/prop-types': ['warn', {
            ignore: ['children'],
            customValidators: [],
            skipUndeclared: false
        }],
        // console比较常用 还是关了吧
        'no-console': 'off',

        // 禁止出现空代码块，允许 catch 为空代码块
        'no-empty': [
            'error',
            {
                allowEmptyCatch: true
            }
        ],

        // alert
        // 'no-alert': 'warn',

        // 要求必须在语句末尾使用分号
        // semi: ['error', 'always'],

        // 禁用特定的全局变量 ali的规则多了isFinite，isNaN，error
        // https://github.com/doshisid/eslint-restricted-globals
        // 'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(restrictedGlobals),

        // 禁止在正则表达式中出现控制字符
        // 'no-control-regex': 'error',

        // 禁止使用eval()
        // 'no-eval': 'error',

        // 强制将对象的属性放在不同的行上, 或者可以全部放在一行
        // 'object-property-newline': ['error', {
        //     allowAllPropertiesOnSameLine: true,
        // }],

        // 禁止使用对象的某些属性
        // 下表中列出对象对应的属性的禁止使用
        /* 'no-restricted-properties': ['error', {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated',
        }, {
                object: 'global',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            }, {
                object: 'self',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            }, {
                object: 'window',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            }, {
                object: 'global',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            }, {
                object: 'self',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            }, {
                object: 'window',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            }, {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.',
            }, {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.',
            }, {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.',
            }],
            */



        // // 或 /* 的注释后必须跟随至少一个空白
        // https://cn.eslint.org/docs/rules/no-unused-expressions
        /* 'spaced-comment': ['error', 'always', {
            line: {
                exceptions: ['-', '+'],
                markers: ['=', '!'], // space here to support sprockets directives
            },
            block: {
                exceptions: ['-', '+'],
                markers: ['=', '!'], // space here to support sprockets directives
                balanced: true,
            }
        }], */
        /*************************
         *
        // 禁止使用一元操作符 ++ 和 --  for循环最后一个语句除外
        'no-plusplus': ["error", { allowForLoopAfterthoughts: true }],

        // 强制文件末尾使用换行
        'eol-last': ['error', 'always'],

        // 块语句之间不允许有空行
        'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }]

        // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号】
        'comma-dangle': ['error', 'always-multiline'],

        // 禁止与负零进行比较
        'no-compare-neg-zero': 'error',

        // getter 必须有返回值，并且禁止返回空，比如 return;
        'getter-return': [
            'error',
            {
                'allowImplicit': false
            }
        ],

        // 要求所有的立即执行函数表达式使用括号包裹起来
        'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

        // 当没有严格要求时，禁止对象字面量属性名称使用引号
        'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

        // 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
        'no-constant-condition': [
            'error',
            {
                checkLoops: false
            }
        ],

        // 不允许多个空行(最多2行) 文件末尾的最大连续空行数为1
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

        // 禁止与负零进行比较
        'no-compare-neg-zero': 'error',

        // 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
        // 好像没有什么大的作用 先off掉吧
        'no-control-regex': 'off',

        // 禁止在函数参数中出现重复名称的参数
        'no-dupe-args': 'error',

        // 禁止在对象字面量中出现重复名称的键名
        'no-dupe-keys': 'error',

        // 禁止在 switch 语句中出现重复测试表达式的 case
        'no-duplicate-case': 'error',

        // 禁止在正则表达式中使用空的字符集 []
        'no-empty-character-class': 'error',

        // 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
        'no-cond-assign': [
            'error',
            'except-parens'
        ],

        // 禁止将 catch 的第一个参数 error 重新赋值
        'no-ex-assign': 'error',

        // 禁止不必要的布尔类型转换，比如 !! 或 Boolean
        'no-extra-boolean-cast': 'error',

        // 禁止函数表达式中出现多余的括号，比如 let foo = (function () { return 1 })
        'no-extra-parens': [
            'error',
            'functions'
        ],

        // 禁止出现多余的分号
        'no-extra-semi': 'error',

        // 大括号风格要求 允许开括号和闭括号在同一行
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],

        // 禁止将一个函数声明重新赋值，如：
        // function foo() {}
        // foo = bar
        'no-func-assign': 'error',

        // 禁止在 if 代码块内出现函数声明及var声明  const以及let不受影响
        // 因为functions和var声明会受到变量声明提升的影响，所以加一条这个规则
        'no-inner-declarations': [
            'error',
            'both'
        ],

        // 禁止在 RegExp 构造函数中出现非法的正则表达式
        'no-invalid-regexp': 'error',

        // 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
        'no-irregular-whitespace': [
            'error',
            {
                skipStrings: true,
                skipComments: false,
                skipRegExps: true,
                skipTemplates: true
            }
        ],

        // 禁止多余的 return 语句
        'no-useless-return': 'error',

        // 禁止使用逗号操作符
        'no-sequences': 'error',

        // 禁止空块语句
        'no-empty': 'error',

        // 禁止将 Math, JSON 或 Reflect 直接作为函数调用
        'no-obj-calls': 'error',

        // 禁止在正则表达式中出现连续的空格，必须使用 /foo {3}bar/ 代替
        'no-regex-spaces': 'error',

        // 禁止在数组中出现连续的逗号，如 let foo = [,,]
        'no-sparse-arrays': 'error',

        // 禁止在普通字符串中出现模版字符串里的变量形式，如 'Hello ${name}!'
        'no-template-curly-in-string': 'error',

        // 禁止出现难以理解的多行表达式，如：
        // let foo = bar
        // [1, 2, 3].forEach(baz);
        'no-unexpected-multiline': 'error',

        // 禁止在 return, throw, break 或 continue 之后还有代码
        'no-unreachable': 'error',

        // 禁止在 finally 中出现 return, throw, break 或 continue
        'no-unsafe-finally': 'error',

        // 禁止在 in 或 instanceof 操作符的左侧使用感叹号，如 if (!key in object)
        'no-unsafe-negation': 'error',

        // 必须使用 isNaN(foo) 而不是 foo === NaN
        'use-isnan': 'error',

        // typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
        'valid-typeof': 'error',

        //  以下为最佳实践

        // setter 必须有对应的 getter，getter 可以没有对应的 setter
        'accessor-pairs': [
            'error',
            {
                setWithoutGet: true,
                getWithoutSet: false
            }
        ],
        // 数组的方法除了 forEach 之外，回调函数必须有返回值
        'array-callback-return': 'error',
        // 将 var 定义的变量视为块作用域，禁止在块外使用
        'block-scoped-var': 'error',
        // 禁止函数的循环复杂度超过 20，https://zh.wikipedia.org/zh-cn/%E5%BE%AA%E7%8E%AF%E5%A4%8D%E6%9D%82%E5%BA%A6
        'complexity': [
            'error',
            {
                max: 20
            }
        ],
        // if 后面必须要有 {，除非是单行 if
        'curly': [
            'error',
            'multi-line',
            'consistent'
        ],
        //链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
        'dot-location': [
            'error',
            'property'
        ],
        // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
        'eqeqeq': [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ],

        // 约束for-in循环 禁止将原型链继承来的属性包括进来 使用Object.prototype.hasOwnProperty.call(foo, key)
        // https://cn.eslint.org/docs/rules/guard-for-in
        'guard-for-in': 'warn',

        // 禁止使用 caller 或 callee
        'no-caller': 'error',

        // switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
        'no-case-declarations': 'error',

        // 不允许有空函数，除非是将一个空函数设置为某个项的默认值
        'no-empty-function': [
            'error',
            {
                allow: [
                    'functions',
                    'arrowFunctions'
                ]
            }
        ],

        // 禁止解构中出现空 {} 或 []
        'no-empty-pattern': 'error',

        // 禁止使用 eval
        'no-eval': 'error',

        // 禁止修改原生对象
        'no-extend-native': [
            'error',
            // {
            //     'exceptions': [
            //         'Array'
            //     ]
            // }
        ],
        // 禁止出现没必要的 bind
        'no-extra-bind': 'error',
        // 禁止出现没必要的 label
        'no-extra-label': 'error',
        // switch 的 case 内必须有 break, return 或 throw
        'no-fallthrough': 'error',
        // 表示小数时，禁止省略 0，比如 .5
        'no-floating-decimal': 'error',
        // 禁止对全局变量赋值
        'no-global-assign': 'error',
        // 禁止使用 !! ~ 等难以理解的运算符
        // 仅允许使用 !!
        'no-implicit-coercion': [
            'error',
            {
                allow: [
                    '!!'
                ]
            }
        ],
        // 禁止在全局作用域下定义变量或申明函数
        'no-implicit-globals': 'error',
        // 禁止在 setTimeout 或 setInterval 中传入字符串，如 setTimeout('alert('Hi!')', 100);
        'no-implied-eval': 'error',
        // 禁止使用 __iterator__
        'no-iterator': 'error',
        // 禁止使用 label
        'no-labels': 'error',
        // 禁止使用没必要的 {} 作为代码块
        'no-lone-blocks': 'error',
        // 禁止在循环内的函数中出现循环体条件语句中定义的变量，比如：
        // for (var i = 0; i < 10; i++) {
        //     (function () { return i })();
        // }
        'no-loop-func': 'error',
        // 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
        'no-multi-spaces': [
            'error',
            {
                ignoreEOLComments: true,
                exceptions: {
                    Property: true,
                    BinaryExpression: false,
                    VariableDeclarator: true,
                    ImportDeclaration: true
                }
            }
        ],
        // 禁止使用 \ 来换行字符串
        'no-multi-str': 'error',
        // 禁止直接 new 一个类而不赋值
        'no-new': 'error',
        // 禁止使用 new Function，比如 let x = new Function('a', 'b', 'return a + b');
        'no-new-func': 'error',
        // 禁止使用 new 来生成 String, Number 或 Boolean
        'no-new-wrappers': 'error',
        // 禁止使用 0 开头的数字表示八进制数
        'no-octal': 'error',
        // 禁止使用八进制的转义符
        'no-octal-escape': 'error',
        // 对函数的参数重新赋值  警告
        'no-param-reassign': ['warn', {
            props: true,
            ignorePropertyModificationsFor: [
                'acc', // for reduce accumulators
                'e', // for e.returnvalue
                'ctx', // for Koa routing
                'req', // for Express requests
                'request', // for Express requests
                'res', // for Express responses
                'response', // for Express responses
                '$scope', // for Angular 1 scopes
            ]
        }],
        // 禁止使用 __proto__
        'no-proto': 'error',
        // 禁止重复定义变量
        'no-redeclare': 'error',
        // 禁止在 return 语句里赋值
        'no-return-assign': [
            'error',
            'always'
        ],
        // 禁止在 return 语句里使用 await
        'no-return-await': 'error',
        // 禁止出现 location.href = 'javascript:void(0)';
        'no-script-url': 'error',
        // 禁止将自己赋值给自己
        'no-self-assign': 'error',
        // 禁止将自己与自己比较
        'no-self-compare': 'error',
        // 禁止使用逗号操作符
        'no-sequences': 'error',
        // 禁止 throw 字面量，必须 throw 一个 Error 对象
        'no-throw-literal': 'error',
        // 循环内必须对循环条件的变量有修改
        'no-unmodified-loop-condition': 'error',

        // 禁止无用的表达式
        // 目的在于消除未使用过的表达式，它们在程序中不起任何作用
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true
            }
        ],

        // @fixable 禁止出现没用的 label
        'no-unused-labels': 'error',
        // 禁止出现没必要的 call 或 apply
        'no-useless-call': 'error',
        // 禁止出现没必要的字符串连接
        'no-useless-concat': 'error',
        // 禁止使用 void
        'no-void': 'error',
        // 禁止使用 with
        'no-with': 'error',
        // Promise 的 reject 中必须传入 Error 对象，而不是字面量
        'prefer-promise-reject-errors': 'error',
        // parseInt 必须传入第二个参数
        'radix': 'error',
        // 必须使用 if (foo === 5) 而不是 if (5 === foo)
        'yoda': [
            'error',
            'never',
            {
                onlyEquality: true
            }
        ],
        // 禁止使用 delete
        'no-delete-var': 'error',
        // 禁止 label 名称与定义过的变量重复
        'no-label-var': 'error',
        // 禁止使用保留字作为变量名
        'no-shadow-restricted-names': 'error',
        // 禁止变量声明覆盖外层作用域的变量
        'no-shadow': 'error',
        // 禁止使用未定义的变量
        'no-undef': [
            'error',
            {
                typeof: false
            }
        ],
        // 禁止将 undefined 赋值给变量
        'no-undef-init': 'error',
        // 定义过的变量必须使用
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                caughtErrors: 'none',
                ignoreRestSiblings: true
            }
        ],
        // 变量必须先定义后使用
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: false,
                variables: false
            }
        ],

        // switch语句必须有default分支
        'default-case': ['warn', { commentPattern: '^no default$' }],

        //   以下为代码风格的规则
        //  这些规则都比较主观 先尝试加进来吧
        // 数组的括号内的前后禁止有空格
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        // 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
        'block-spacing': [
            'error',
            'always'
        ],
        // 逗号前禁止有空格，逗号后必须要有空格
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        // 禁止在行首写逗号
        'comma-style': [
            'error',
            'last'
        ],
        // 用作对象的计算属性时，中括号内的首尾禁止有空格
        'computed-property-spacing': [
            'error',
            'never'
        ],
        // 函数名和执行它的括号之间禁止有空格
        'func-call-spacing': [
            'error',
            'never'
        ],
        // 函数赋值给变量的时候，函数名必须与变量名一致
        'func-name-matching': [
            'error',
            'always',
            {
                includeCommonJSModuleExports: false
            }
        ],

        // jsx 中的属性必须用双引号
        'jsx-quotes': [
            'error',
            'prefer-double'
        ],
        // 禁止不必要的转义
        'no-useless-escape': 'error',
        // 对象字面量中冒号前面禁止有空格，后面必须有空格
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict',
            }
        ],
        // 关键字前后必须有空格
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        // 代码块嵌套的深度禁止超过 5 层
        'max-depth': [
            'error',
            5
        ],
        // 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
        'max-nested-callbacks': [
            'error',
            3
        ],
        // 函数的参数禁止超过 7 个
        'max-params': [
            'error',
            7
        ],
        // new 后面的类名必须首字母大写
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: false,
                properties: true
            }
        ],
        // new 后面的类必须有小括号
        'new-parens': 'error',

        // 禁止使用 Array 构造函数
        'no-array-constructor': 'error',
        // 禁止对变量连续赋值连续赋值
        'no-multi-assign': ['error'],

        // 禁止混用空格和缩进
        'no-mixed-spaces-and-tabs': 'error',

        // 禁止直接 new Object
        'no-new-object': 'error',

        // 禁止使用 tabs
        'no-tabs': 'error',

        // 禁止行尾有空格
        'no-trailing-spaces': 'error',

        // 禁止属性前有空格，比如 foo. bar()
        'no-whitespace-before-property': 'error',

        // 禁止 if 后面不加大括号而写两行代码
        'nonblock-statement-body-position': [
            'error',
            'beside',
            {
                overrides: {
                    while: 'below'
                }
            }
        ],
        // 大括号内的首尾必须有换行
        'object-curly-newline': [
            'error',
            {
                multiline: true,
                consistent: true
            }
        ],
        // 对象字面量只有一行时，大括号内的首尾必须有空格
        'object-curly-spacing': [
            'error',
            'always',
            {
                arraysInObjects: true,
                objectsInObjects: false
            }
        ],
        // 禁止变量申明时用逗号一次申明多个
        'one-var': [
            'error',
            'never'
        ],
        // 变量申明必须每行一个
        'one-var-declaration-per-line': [
            'error',
            'always'
        ],
        // 必须使用单引号，禁止使用双引号
        'quotes': [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        'semi': [
            'error',
            'always',
            { 'omitLastInOneLineBlock': true }
        ],
        // 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        // 分号必须写在行尾，禁止在行首出现
        'semi-style': [
            'error',
            'last'
        ],
        // if, function 等的大括号之前必须要有空格，比如 if (a) {
        'space-before-blocks': [
            'error',
            'always'
        ],
        // function 的小括号之前必须要有空格
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'ignore',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        // 小括号内的首尾禁止有空格
        'space-in-parens': [
            'error',
            'never'
        ],
        // 操作符左右必须有空格，比如 let sum = 1 + 2;
        'space-infix-ops': 'error',
        //  typeof 等后面必须有空格，++, -- 等禁止有空格，比如：
        // let foo = new Person();
        // bar = bar++;
        'space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false
            }
        ],
        // 注释的斜线或 * 后必须有空格
        'spaced-comment': [
            'error',
            'always',
            {
                block: {
                    exceptions: [
                        '*'
                    ],
                    balanced: true
                }
            }
        ],
        //  case 的冒号前禁止有空格，冒号后必须有空格
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        // 模版字符串的 tag 之后禁止有空格，比如 tag`Hello World`
        'template-tag-spacing': [
            'error',
            'never'
        ],
        // 文件开头禁止有 BOM
        'unicode-bom': [
            'error',
            'never'
        ],
        // 限制换行符为 LF  unix风格
        'linebreak-style': [
            'error',
            'unix'
        ],
        // 禁止 if 语句作为唯一语句出现在 else 语句块中。
        'no-lonely-if': 'error',
        // 禁止条件表达式作为默认的赋值模式
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        // 限制代码行的长度
        'max-len': ['warn', 100, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        // 禁止使用嵌套的三元表达式
        // 'no-nested-ternary': 'error',
        // 要求使用点号来访问属性
        'dot-notation': ['error', { allowKeywords: true }],

        //    以下为es6的相关的规则

        // 推荐使用模板字符串拼接而非字符串连接
        'prefer-template': 'warn',

        // 如果一个变量不会被重新赋值，最好使用const进行声明
        'prefer-const': ['error', {
            'destructuring': 'any',
            'ignoreReadBeforeAssign': false
        }],

        // 禁止使用arguments参数变量  使用剩余参数代替
        // 错误  function foo() {console.log(arguments);}
        // 正确  function foo(...args) { console.log(args); }
        'prefer-rest-params': 'error',

        // 强制使用ECMAScript 6 简写的形式去定义对象中的方法和属性
        // 错误：let foo = {
                x: x,
                y: y,
                z: z,
            };
        // 正确：let foo = {x, y, z};
        'object-shorthand': ['error', 'always'],

        // 强制箭头函数的参数使用圆括号括起来 当只有一个参数时允许省略圆括号
        // https://cn.eslint.org/docs/rules/arrow-parens
        'arrow-parens': ['warn', 'as-needed', {
            requireForBlockBody: true,
        }],

        // 箭头函数的箭头前后必须有空格
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],

        // 要求使用箭头函数作为回调
        'prefer-arrow-callback': ['error', {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        }],

        // 要求箭头函数体使用大括号
        'arrow-body-style': ['warn', 'as-needed', {
            requireReturnForObjectLiteral: false,
        }],

        // 强制隐式返回的箭头函数体的位置 beside禁止在箭头函数体之前出现换行
        // 正确  (foo) => bar
        'implicit-arrow-linebreak': ['warn', 'beside'],

        // 强制在函数括号内使用一致的换行
        // 要求每个括号使用一致的换行。如果一个括号有换行，另一个括号没有换行，则报错。
        'function-paren-newline': ['error', 'consistent'],

        // 优先使用数组和对象解构
        'prefer-destructuring': ['warn', {
            VariableDeclarator: {
                array: false,
                object: true,
            },
            AssignmentExpression: {
                array: true,
                object: true,
            },
            },
            { enforceForRenamedProperties: false,}
        ],

        // constructor 中必须有 super
        'constructor-super': 'error',
        // 禁止直接在对象实例上调用 Object.prototype 的一些方法
        // 要求在类成员之后有一行空行
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
        'no-prototype-builtins': 'error',
        // generator 的 * 前面禁止有空格，后面必须有空格
        'generator-star-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        // 禁止对定义过的 class 重新赋值
        'no-class-assign': 'error',
        // 禁止出现难以理解的箭头函数，比如 let x = a => 1 ? 2 : 3
        'no-confusing-arrow': [
            'error',
            {
                allowParens: true
            }
        ],
        // 禁止对使用 const 定义的常量重新赋值
        'no-const-assign': 'error',
        // 禁止重复定义类
        'no-dupe-class-members': 'error',
        // 禁止重复 import 模块
        'no-duplicate-imports': 'error',
        // 禁止使用 new 来生成 Symbol
        'no-new-symbol': 'error',
        // 禁止在 super 被调用之前使用 this 或 super
        'no-this-before-super': 'error',
        //  禁止出现没必要的计算键名，比如 let a = { ['0']: 0 };
        'no-useless-computed-key': 'error',
        // 禁止出现没必要的 constructor，比如 constructor(value) { super(value) }
        'no-useless-constructor': 'error',
        // 禁止解构时出现同样名字的的重命名，比如 let { foo: foo } = bar;
        'no-useless-rename': 'error',
        // 禁止使用 var
        'no-var': 'error',
        // generator 函数内必须有 yield
        'require-yield': 'error',
        // ... 的后面禁止有空格
        'rest-spread-spacing': [
            'error',
            'never'
        ],
        // 创建 Symbol 时必须传入参数
        'symbol-description': 'error',
        // ${name} 内的首尾禁止有空格
        'template-curly-spacing': [
            'error',
            'never'
        ],
        // yield* 后面必须要有空格
        'yield-star-spacing': [
            'error',
            'after'
        ],

        //   以下为react相关的规则 使用了eslint-plugin-react插件

        // 组件定义中不能缺少propsType的校验
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        'react/prop-types': ['warn', {
            ignore: [],
            customValidators: [],
            skipUndeclared: false
        }],

        // JSX 没有子节点的标签需要自闭合
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        'react/self-closing-comp': 'error',

        // JSX 元素有多个prop的时候 第一个prop需要起新行
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

        // JSX 有多个prop时候  每个prop都起新行
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

        // 禁止使用 children 做 props
        'react/no-children-prop': 'error',
        // 禁止在使用了 dangerouslySetInnerHTML 的组建内添加 children
        'react/no-danger-with-children': 'error',
        // 禁止使用已废弃的 api
        'react/no-deprecated': 'error',
        // 'react/no-deprecated': 'error',
        // 禁止在 componentDidUpdate 里面使用 setState
        'react/no-did-update-set-state': 'error',
        // 禁止直接修改 this.state
        'react/no-direct-mutation-state': 'error',
        // 禁止使用 findDOMNode
        'react/no-find-dom-node': 'error',
        // 禁止使用 isMounted
        'react/no-is-mounted': 'error',
        // 禁止使用 findDOMNode
        'react/no-find-dom-node': 'error',
        // 禁止使用 isMounted
        'react/no-is-mounted': 'error',
        // 禁止使用 ReactDOM.render 的返回值
        'react/no-render-return-value': 'error',
        // 禁止拼写错误
        'react/no-typos': 'error',
        // 禁止使用字符串 ref
        // @off 暂时关闭
        'react/no-string-refs': 'off',
        // 禁止在组件的内部存在未转义的 >, ', ' 或 }
        'react/no-unescaped-entities': 'error',
        // 禁止出现 HTML 中的属性，如 class
        'react/no-unknown-property': 'error',
        // 禁止在 componentWillUpdate 中使用 setState
        'react/no-will-update-set-state': 'error',
        // 必须使用 Class 的形式创建组件
        'react/prefer-es6-class': [
            'error',
            'always'
        ],
        // render 方法中必须有返回值
        'react/require-render-return': 'error',
        // 组件内方法必须按照一定规则排序(先试用一下)
        // 参考文档https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md#enforce-component-methods-order-reactsort-comp
        'react/sort-comp': 'error',
        // style 属性的取值必须是 object
        'react/style-prop-object': 'error',
        // JSX 中的自闭和标签禁止有 children
        'react/void-dom-elements-no-children': 'error',

        // 同一个文件中禁止出现多个组件，无状态组件除外
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
        'react/no-multi-comp': ['error', { ignoreStateless: true }],

        // 自闭合标签的反尖括号必须与尖括号的那一行对齐
        'react/jsx-closing-bracket-location': [
            'error',
            {
                nonEmpty: false,
                selfClosing: 'line-aligned'
            }
        ],

        // 大括号内前后禁止有空格
        'react/jsx-curly-spacing': [
            'error',
            {
                when: 'never',
                attributes: {
                    allowMultiline: true
                },
                children: true,
                spacing: {
                    objectLiterals: 'never'
                }
            }
        ],
        // props 与 value 之间的等号前后禁止有空格
        'react/jsx-equals-spacing': [
            'error',
            'never'
        ],
        // 数组中的 jsx 必须有 key
        'react/jsx-key': 'error',
        // 禁止在 jsx 中使用像注释的字符串
        'react/jsx-no-comment-textnodes': 'error',
        // 禁止出现重复的 props
        'react/jsx-no-duplicate-props': 'error',
        // 禁止使用未定义的 jsx elemet
        'react/jsx-no-undef': 'error',
        // 禁止使用 pascal 写法的 jsx，比如 <TEST_COMPONENT>
        'react/jsx-pascal-case': 'error',
        // jsx 的开始和闭合处禁止有空格
        'react/jsx-tag-spacing': [
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never'
            }
        ],
        // jsx 文件必须 import React
        'react/jsx-uses-react': 'error',

        // JSX 遍历Array的时候禁止使用index做为key
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
        'react/no-array-index-key': 'warn',

        // 定义了的 jsx element 必须使用
        'react/jsx-uses-vars': 'error',

        // JSX中 props的值为true  强制省略prop的值
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        'react/jsx-boolean-value': ['error', 'never', { always: [] }],

        // 禁止出现定义后未使用的state
        // https://github.com/yannickcr/eslint-plugin-react/pull/1103/
        'react/no-unused-state': 'error',

        // 多行JSX使用括号包起来可以提高可读性和/或便利性
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
        'react/jsx-wrap-multilines': ['error', {
            declaration: true,
            assignment: true,
            return: true,
            arrow: true,
        }],

        // import相关的规则========================

        // 默认在最后一个import结束之后空一行
        'import/newline-after-import': ['error', { 'count': 1 }]

        // 禁止重复导入同一的模块
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        'import/no-duplicates': 'error',

        // 禁止导出(export)var 和let声明的变量
        'import/no-mutable-exports': ['error']

        // 必须有一个export作为default export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        'import/prefer-default-export': 'error',

        // require或者import的时候减少没必要的路径声明
        // https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
        'import/no-useless-path-segments': 'error',

        *******/
    }
}