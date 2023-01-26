class Command {
    constructor(ctx) {
        this.ctx = ctx;
        this.ctx = ctx;
    }
}
export class InserTextCommad extends Command {
    constructor(ctx) {
        super(ctx);
        this.ctx = ctx;
    }
    execute(phrase, position) {
        const text = this.ctx.text;
        const part1 = text.substr(0, position);
        const part2 = text.substr(position);
        this.ctx.text = `${part1}${phrase}${part2}`;
    }
}
export class DeletetextCommand extends Command {
    constructor(ctx) {
        super(ctx);
        this.ctx = ctx;
    }
    execute(word) {
        const text = this.ctx.text;
        this.ctx.text = text.replace(word, '');
    }
}
export class ReplacetextCommand extends Command {
    constructor(ctx) {
        super(ctx);
        this.ctx = ctx;
    }
    execute(sourceWord, destinationWord) {
        const text = this.ctx.text;
        this.ctx.text = text.replace(destinationWord, sourceWord);
    }
}
//# sourceMappingURL=command.js.map