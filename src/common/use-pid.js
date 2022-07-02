import { ref } from 'vue'

const pid = ref('0');

const usePid = () => {
    return pid
}

export {
    usePid
}