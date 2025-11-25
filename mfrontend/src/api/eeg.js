import request from './request'

export const predictEEG = (file) => {
    const formData = new FormData()
    formData.append('file', file)
    return request.post('/eeg/predict', formData)
}