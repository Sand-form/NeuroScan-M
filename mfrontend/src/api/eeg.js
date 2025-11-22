import request from './index'

export const predictEEG = (file) => {
    const formData = new FormData()
    formData.append('file', file)
    return request.post('/eeg/predict', formData)
}
