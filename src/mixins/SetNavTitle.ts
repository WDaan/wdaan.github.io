import { mapMutations } from 'vuex'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    methods: {
        ...mapMutations(['SET_NAVBAR_TITLE'])
    }
})
export default class SetNavTitle extends Vue {
    [x: string]: any
    updateTitle() {
        this.SET_NAVBAR_TITLE(
            this.$options.name == 'Home' ? 'Daan Wijns' : this.$options.name
        )
    }

    mounted() {
        this.updateTitle()
    }
}
