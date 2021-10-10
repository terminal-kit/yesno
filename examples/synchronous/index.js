const termkit = require('terminal-kit');

const term = termkit.terminal;

term.fullscreen();
term.windowTitle('example of menus-list');
term.on('key', function (name, matches, data) {
    if (name === 'CTRL_C' || name === 'ESCAPE' || name === 'x') {
        exitTerm();
    }
});

const exitTerm = () => {
    term.clear();
    term.cyan('exiting...\n');
    term.grabInput(false);
    setTimeout(() => {
        process.exit()
    }, 100);
};

(async function () {
    term.grabInput();
    term.cyan('\nYes/No question?');
    const result = await term.yesOrNo({
        yes: ['y', 'Y', 'Yes', 'ENTER'],
        no: ['n', 'no', 'No', 'f']
    }
    /*, (error, result) => {
        if (!error) {
            console.log('RESULT', result);
        } else {
            console.error('ERROR', error);
        }
    }*/
    ).promise;
    console.log('\n\nRESULT', result);

    term.red('\nMessage after input');
}());
