Vue.component('wellcome-modal', {
    data: function () {
        return {
            disable_btn: false,
            name: '',
            name_err: false,
            company: '',
        }
    },
    template: `
    <div>
        <form @submit.prevent="submitWellcome">
            <input type="text" v-model="name" :class="[name_err ? 'error' : '']" />
            <input type="text" v-model="company" />
            <button type="submit" :disabled="disable_btn">Send</button>
        </form>
    </div>
    `,
    methods: {
        submitWellcome: function () {
            this.disable_btn = true;
            if (this.name.length > 0) {
                this.$emit('submit_wellcome_modal', {
                    name: this.name,
                    company: this.company,
                });
            } else {
                this.name_err = true;
                this.disable_btn = false;
            }
        },
    },
});