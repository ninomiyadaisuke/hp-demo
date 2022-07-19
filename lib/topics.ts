import { topicRef } from '../firebase/config'

type Topic = any

export const fetchTopics = async () => {
  return await topicRef.then((snapshot) => {
    const topics = [] as Topic[]
    snapshot.forEach((data) => {
      topics.push(data.data() as Topic)
    })
    return topics 
  })
}