import axios from 'axios'

export const http = {
   data() {
       return {
           API_URL: 'https://swapi.co/api',
           API_SECTION: '',
           data: []
       }

   },
    mounted() {
       axios.get(`${this.API_URL}/${this.API_SECTION}`)
           .then(res => this.data = res.data)
    }
}
