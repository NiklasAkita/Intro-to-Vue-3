app.component('question-form', {
    template:
    /*html*/
    `<form class="question-form" @submit.prevent="onSubmit">
        <h3>Would you recommend this product?</h3>
        <label for="response">Response:</label>
        <input id="response" v-model="response">
        <input class="button" type="submit" value="Submit">
    </form>`,
    data() {
        return {
            response: ''
        }
    },
    methods: {
        onSubmit() {
            if(this.response === '') {
                alert("No anwser was given bro")
                return
            }

            this.$emit('response-submitted', this.response)

            this.response = ''
        }
    }
})