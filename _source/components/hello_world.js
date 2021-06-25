Vue.component('hello-world', {
    data: function () {
        return {
            test: 'hi',
        }
    },
    template: `
    <div>
        {{test}}
    </div>
    `,
});