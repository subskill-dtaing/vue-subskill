import axios from 'axios'

export const http = {
   data() {
       return {
           API_URL: process.env.VUE_APP_API_URL,
           API_SECTION: '',
           data: []
       }

   },
    mounted() {
       axios.get(`${this.API_URL}/${this.API_SECTION}`)
           .then(res => this.data = res.data)
    }
};
