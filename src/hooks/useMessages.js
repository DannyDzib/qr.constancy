import Message from "lang/es"

const useMessages = () => {
  const currentURL = window.location.pathname
  const path = currentURL === "/" ? "home" : currentURL.slice(1)
  let pageConstant = Message[path]
  const messages = {
    ...Message.sidebar,
    ...pageConstant,
    ...Message.paths,
  }
  return { messages: Message }
}

export default useMessages
