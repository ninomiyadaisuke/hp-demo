import { topicRef } from '../firebase/config'
import { Topic } from '../pages/sample'


export const fetchTopics = async () => {
  return await topicRef.then((snapshot) => {
    const topics = [] as Topic[]
    snapshot.forEach((data) => {
      topics.push(data.data() as Topic)
    })
    return topics 
  })
}