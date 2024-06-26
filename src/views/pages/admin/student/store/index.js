import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadStudentsAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/students', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createStudentAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/students', data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async showStudentAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/students/${uuid}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async updateStudentAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post(`/students/${uuid}`, data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async deleteStudentAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/students/${uuid}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async downloadStudentArchiveDocumentsAsync(_, { uuid, downloadArchiveName }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/students/${uuid}/archive_documents`, { responseType: 'arraybuffer' })
        .then(response => {

          const type = response.headers['content-type']
          const url = window.URL.createObjectURL(new Blob([response.data], { type: type, encoding: 'UTF-8' }))
          console.log('url url url :>> ', url);
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', `${downloadArchiveName}.zip`)
          document.body.appendChild(link)
          link.click();

          return resolve(response)
        })
        .catch(error => reject(error));
    })
  },

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
