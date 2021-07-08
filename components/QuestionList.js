app.component('question-list', {
    props: {
        responses: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="response-container">
        <h3>Responses:</h3>
        <ul>
            <li v-for="(response, index) in responses" :key="index">
                {{ response }}
            </li>
        </ul>
        </div>
    </div>`
})